import { ContactForm } from "@/components/contactForm";

export default function Contact() {
  return (
    <section className="pb-16 md:pb-24 pt-24 sm:pt-28 md:pt-40 max-w-3xl mx-auto px-4 sm:px-6" id="contact">
      <div>
        <h2 className="text-xs md:text-sm text-primary font-semibold tracking-widest mb-2 uppercase">
          Contact
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-gray-900 dark:text-white">
          Get in Touch
        </h3>
        <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 space-y-2">
          <div>
            Email:{" "}
            <a
              href="mailto:sataide.santos@gmail.com"
              className="text-zinc-900 dark:text-white font-semibold underline-offset-4 hover:underline dark:hover:underline break-all"
            >
              sataide.santos@gmail.com
            </a>
          </div>
          <div>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sara-ata%C3%ADde-santos-34933a224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white font-semibold underline-offset-4 hover:underline dark:hover:underline break-all"
            >
              linkedin.com/in/sara-ataíde-santos-34933a224/
            </a>
          </div>
          <div>
            GitHub:{" "}
            <a
              href="https://github.com/Sara18Santos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white font-semibold underline-offset-4 hover:underline dark:hover:underline"
            >
              github.com/Sara18Santos
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
