import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY_VALUES: FormValues = { name: '', email: '', message: '' };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.';
  return errors;
}

const INPUT_CLASS =
  'mt-2 block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-sm text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 transition focus:bg-white focus:ring-2 focus:ring-sky-600 dark:bg-slate-900/60 dark:text-slate-100 dark:ring-slate-700 dark:placeholder:text-slate-500 dark:focus:bg-slate-900 dark:focus:ring-sky-400';

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }
    setIsSubmitted(true);
    setValues(EMPTY_VALUES);
  };

  if (isSubmitted) {
    return (
      <div role="status" className="motion-safe:animate-fade-in flex flex-col items-center py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
          <CheckCircle2 aria-hidden="true" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">Message validated</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          This is a demo form. Your message passed frontend validation, but it was not delivered to any inbox.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="btn-secondary mt-8"
        >
          Send another demo message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5" aria-describedby="contact-demo-note">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={INPUT_CLASS}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-2 text-sm text-rose-600 dark:text-rose-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={INPUT_CLASS}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-2 text-sm text-rose-600 dark:text-rose-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${INPUT_CLASS} resize-y`}
          placeholder="How can we help?"
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-2 text-sm text-rose-600 dark:text-rose-400">
            {errors.message}
          </p>
        )}
      </div>

      <p id="contact-demo-note" className="rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:ring-amber-500/30">
        Demo form: submissions are validated in your browser only and are not delivered to any inbox.
      </p>

      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}
