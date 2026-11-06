import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { FormField } from '@/components/FormField';
import { getInputClass } from '@/lib/formStyles';

type InterestMode = 'volunteer' | 'partner';

const MODE_CONFIG = {
  volunteer: {
    focusLabel: 'How would you like to help?',
    focusOptions: ['Food pickups', 'Sorting and packing', 'Community meal service', 'Driving and deliveries'],
    messageLabel: 'Tell us about your availability',
    messagePlaceholder: 'For example: weekend mornings, or two evenings a month.',
    showOrganisation: false,
  },
  partner: {
    focusLabel: 'Partnership type',
    focusOptions: ['Restaurant or hotel', 'NGO or charity', 'Event organiser', 'Logistics or transport'],
    messageLabel: 'Tell us about your organisation',
    messagePlaceholder: 'What do you do, and how would you like to work with FoodBridge?',
    showOrganisation: true,
  },
} as const;

type InterestValues = {
  name: string;
  email: string;
  organisation: string;
  focus: string;
  message: string;
};

type InterestErrors = Partial<Record<keyof InterestValues, string>>;

const EMPTY_VALUES: InterestValues = { name: '', email: '', organisation: '', focus: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: InterestValues, mode: InterestMode): InterestErrors {
  const config = MODE_CONFIG[mode];
  const errors: InterestErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (config.showOrganisation && !values.organisation.trim()) {
    errors.organisation = 'Enter your organisation name.';
  }
  if (!values.focus) errors.focus = 'Choose an option.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.';
  return errors;
}

type InterestFormProps = {
  mode: InterestMode;
};

export function InterestForm({ mode }: InterestFormProps) {
  const config = MODE_CONFIG[mode];
  const [values, setValues] = useState<InterestValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<InterestErrors>({});
  const [submitted, setSubmitted] = useState<InterestValues | null>(null);

  const updateField = (field: keyof InterestValues) => (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, mode);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(values);
  };

  if (submitted) {
    return (
      <div className="animate-fade-in space-y-6 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-100 text-success-600">
          <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-3xl">Thank you, {submitted.name.trim()}.</h3>
          <p className="mt-3 text-ivory-700">
            {mode === 'volunteer'
              ? 'Your volunteer interest has been noted in this preview.'
              : 'Your partnership enquiry has been noted in this preview.'}
          </p>
        </div>
        <div className="rounded-2xl border border-warning-500/40 bg-warning-50 p-4 text-left text-sm text-warning-700">
          <p className="font-semibold">This is a demonstration.</p>
          <p className="mt-1">Your message was not sent to FoodBridge or any partner.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmitted(null);
            setValues(EMPTY_VALUES);
            setErrors({});
          }}
          className="rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-800 transition hover:border-forest-500 hover:bg-forest-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-forest-100"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="flex gap-3 rounded-2xl bg-sage-50 p-4 text-sm text-forest-800">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
        <p>This is a demonstration form. Nothing you enter is stored or sent to FoodBridge or a partner.</p>
      </div>

      <FormField id="name" label="Full name" error={errors.name}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={updateField('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={getInputClass(!!errors.name)}
        />
      </FormField>

      <FormField id="email" label="Email address" error={errors.email}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={updateField('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={getInputClass(!!errors.email)}
        />
      </FormField>

      {config.showOrganisation && (
        <FormField id="organisation" label="Organisation name" error={errors.organisation}>
          <input
            id="organisation"
            type="text"
            autoComplete="organization"
            value={values.organisation}
            onChange={updateField('organisation')}
            aria-invalid={!!errors.organisation}
            aria-describedby={errors.organisation ? 'organisation-error' : undefined}
            className={getInputClass(!!errors.organisation)}
          />
        </FormField>
      )}

      <FormField id="focus" label={config.focusLabel} error={errors.focus}>
        <select
          id="focus"
          value={values.focus}
          onChange={updateField('focus')}
          aria-invalid={!!errors.focus}
          aria-describedby={errors.focus ? 'focus-error' : undefined}
          className={getInputClass(!!errors.focus)}
        >
          <option value="">Select an option</option>
          {config.focusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id="message" label={config.messageLabel} error={errors.message}>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={updateField('message')}
          placeholder={config.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${getInputClass(!!errors.message)} resize-none`}
        />
      </FormField>

      <button
        type="submit"
        className="w-full rounded-full bg-forest-700 px-6 py-4 text-base font-semibold text-ivory-50 shadow-lg shadow-forest-900/20 transition hover:-translate-y-0.5 hover:bg-forest-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-forest-200"
      >
        {mode === 'volunteer' ? 'Send Volunteer Interest' : 'Send Partnership Enquiry'}
      </button>
    </form>
  );
}
