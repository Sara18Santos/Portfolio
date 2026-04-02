"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormData>;

type SubmitStatus = "idle" | "sending" | "success" | "error";

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    setSubmitStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setFormData(INITIAL_FORM);
      setErrors({});
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const isSending = submitStatus === "sending";

  const inputClassName =
    "mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-300 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-gray-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-800";

  if (submitStatus === "success") {
    return (
      <div className="rounded-xl border-2 border-green-300 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-950/30">
        <p className="text-lg font-semibold text-green-800 dark:text-green-300">
          Message sent!
        </p>
        <p className="mt-1 text-sm text-green-700 dark:text-green-400">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus("idle")}
          className="mt-4 text-sm underline underline-offset-4 text-green-800 dark:text-green-400 hover:opacity-75"
        >
          Send another message
        </button>
      </div>
    );
  }

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
          disabled={isSending}
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
          disabled={isSending}
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
          disabled={isSending}
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
        <Button type="submit" className="px-5" disabled={isSending}>
          {isSending ? "Sending…" : "Send message"}
        </Button>
        {submitStatus === "error" ? (
          <p className="text-sm text-red-600 dark:text-red-400" aria-live="assertive">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
};
