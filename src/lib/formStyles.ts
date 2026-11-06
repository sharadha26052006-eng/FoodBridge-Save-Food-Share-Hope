export function getInputClass(invalid: boolean) {
  const state = invalid
    ? 'border-error-500 focus:border-error-500 focus:ring-error-100'
    : 'border-ivory-300 focus:border-forest-500 focus:ring-forest-100';
  return `w-full rounded-xl border bg-white px-4 py-3 text-ivory-900 outline-none transition focus:ring-4 ${state}`;
}
