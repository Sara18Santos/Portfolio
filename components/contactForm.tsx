"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormData>;

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT_EMAIL = "sataide.santos@gmail.com";

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");

    if (!validateForm()) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name.trim()}`,
        `Email: ${formData.email.trim()}`,
        "",
        formData.message.trim(),
      ].join("\n")
    );

    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    setStatusMessage("Your email app should open with the message prefilled.");
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const inputClassName =
    "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-950 dark:text-gray-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-800";

  return (
    <form
      className="mx-auto rounded-xl border-2 border-gray-300 bg-white p-8 shadow-md dark:border-gray-700 dark:bg-zinc-900"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label
          className="block text-sm font-bold text-gray-700 dark:text-gray-300"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className={inputClassName}
          id="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <label
          className="block text-sm font-bold text-gray-700 dark:text-gray-300"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={inputClassName}
          id="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <label
          className="block text-sm font-bold text-gray-700 dark:text-gray-300"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className={inputClassName}
          id="message"
          rows={5}
          placeholder="Your message"
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <Button type="submit" className="px-5">
          Send message
        </Button>
        <p className="text-sm text-gray-500 dark:text-gray-400" aria-live="polite">
          {statusMessage}
        </p>
      </div>
    </form>
  );
};
