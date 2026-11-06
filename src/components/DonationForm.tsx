import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { FormField } from '@/components/FormField';
import { getInputClass } from '@/lib/formStyles';

const FOOD_CATEGORIES = ['Cooked meals', 'Fresh produce', 'Bakery and bread', 'Packaged goods', 'Dairy and eggs', 'Beverages'];
const UNITS = ['portions', 'kilograms', 'boxes'];

type DonationValues = {
  donorName: string;
  foodCategory: string;
  quantity: string;
  unit: string;
  pickupLocation: string;
  pickupTime: string;
};

type DonationErrors = Partial<Record<keyof DonationValues, string>>;

const EMPTY_VALUES: DonationValues = {
  donorName: '',
  foodCategory: '',
  quantity: '',
  unit: UNITS[0],
  pickupLocation: '',
  pickupTime: '',
};

function toLocalInputValue(date: Date) {
  const offsetMs = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offsetMs).toISOString().slice(0, 16);
}

function validate(values: DonationValues): DonationErrors {
  const errors: DonationErrors = {};
  if (!values.donorName.trim()) errors.donorName = 'Please enter the donor name.';
  if (!values.foodCategory) errors.foodCategory = 'Choose a food category.';
  const quantity = Number(values.quantity);
  if (!values.quantity.trim() || !Number.isInteger(quantity) || quantity < 1) {
    errors.quantity = 'Enter a whole number of at least 1.';
  }
  if (!values.pickupLocation.trim()) errors.pickupLocation = 'Add a pickup address or area.';
  if (!values.pickupTime) {
    errors.pickupTime = 'Choose an available pickup time.';
  } else if (new Date(values.pickupTime).getTime() < Date.now()) {
    errors.pickupTime = 'Pickup time must be in the future.';
  }
  return errors;
}

export function DonationForm() {
  const [values, setValues] = useState<DonationValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<DonationErrors>({});
  const [submitted, setSubmitted] = useState<DonationValues | null>(null);
  const [minPickupTime] = useState(() => toLocalInputValue(new Date()));

  const updateField = (field: keyof DonationValues) => (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
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
          <h3 className="text-3xl">Thank you, {submitted.donorName.trim()}.</h3>
          <p className="mt-3 text-ivory-700">
            Your demonstration donation of {submitted.quantity} {submitted.unit} of {submitted.foodCategory.toLowerCase()} has
            been recorded in this preview only.
          </p>
        </div>
        <div className="rounded-2xl border border-warning-500/40 bg-warning-50 p-4 text-left text-sm text-warning-700">
          <p className="font-semibold">This is a demonstration.</p>
          <p className="mt-1">Your details were not sent to any NGO, donor or database.</p>
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
          Submit another donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="flex gap-3 rounded-2xl bg-sage-50 p-4 text-sm text-forest-800">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
        <p>This is a demonstration form. Nothing you enter is stored or sent to a real NGO or donor.</p>
      </div>

      <FormField id="donorName" label="Donor name" error={errors.donorName}>
        <input
          id="donorName"
          type="text"
          autoComplete="name"
          value={values.donorName}
          onChange={updateField('donorName')}
          placeholder="e.g. Harbour Street Bistro"
          aria-invalid={!!errors.donorName}
          aria-describedby={errors.donorName ? 'donorName-error' : undefined}
          className={getInputClass(!!errors.donorName)}
        />
      </FormField>

      <FormField id="foodCategory" label="Food category" error={errors.foodCategory}>
        <select
          id="foodCategory"
          value={values.foodCategory}
          onChange={updateField('foodCategory')}
          aria-invalid={!!errors.foodCategory}
          aria-describedby={errors.foodCategory ? 'foodCategory-error' : undefined}
          className={getInputClass(!!errors.foodCategory)}
        >
          <option value="">Select a category</option>
          {FOOD_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </FormField>

      <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
        <FormField id="quantity" label="Quantity" error={errors.quantity}>
          <input
            id="quantity"
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            value={values.quantity}
            onChange={updateField('quantity')}
            placeholder="e.g. 40"
            aria-invalid={!!errors.quantity}
            aria-describedby={errors.quantity ? 'quantity-error' : undefined}
            className={getInputClass(!!errors.quantity)}
          />
        </FormField>
        <FormField id="unit" label="Unit">
          <select id="unit" value={values.unit} onChange={updateField('unit')} className={getInputClass(false)}>
            {UNITS.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField id="pickupLocation" label="Pickup location" error={errors.pickupLocation}>
        <input
          id="pickupLocation"
          type="text"
          autoComplete="street-address"
          value={values.pickupLocation}
          onChange={updateField('pickupLocation')}
          placeholder="Street address or area"
          aria-invalid={!!errors.pickupLocation}
          aria-describedby={errors.pickupLocation ? 'pickupLocation-error' : undefined}
          className={getInputClass(!!errors.pickupLocation)}
        />
      </FormField>

      <FormField id="pickupTime" label="Available pickup time" error={errors.pickupTime}>
        <input
          id="pickupTime"
          type="datetime-local"
          min={minPickupTime}
          value={values.pickupTime}
          onChange={updateField('pickupTime')}
          aria-invalid={!!errors.pickupTime}
          aria-describedby={errors.pickupTime ? 'pickupTime-error' : undefined}
          className={getInputClass(!!errors.pickupTime)}
        />
      </FormField>

      <button
        type="submit"
        className="w-full rounded-full bg-orange-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-orange-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
      >
        Submit Demo Donation
      </button>
    </form>
  );
}
