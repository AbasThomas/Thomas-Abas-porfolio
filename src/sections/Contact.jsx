import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { AnimatePresence } from "framer-motion";
import { mySocials } from "../constants";
import { FiCheck, FiCopy, FiSend } from "react-icons/fi";

const contactEmail = "Abasienyenethomas2@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopiedEmail(true);
      showAlertMessage("success", "Email address copied.");
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error(error);
      showAlertMessage("danger", "Could not copy email. Please copy it manually.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Abas",
          from_email: formData.email,
          to_email: contactEmail,
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );

      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Message sent. I will get back to you soon.");
    } catch (error) {
      console.error(error);
      showAlertMessage("danger", "Message failed to send. Please email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-24 md:py-32">
      <AnimatePresence>
        {showAlert && <Alert type={alertType} text={alertMessage} />}
      </AnimatePresence>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm font-medium text-white/45">Contact</p>
          <h2 className="display-serif mt-4 text-5xl leading-none text-white md:text-6xl">
            Hit me Up!
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/55">
            Send a message with the context, timeline, and goals. I respond best to clear project briefs.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <a href={`mailto:${contactEmail}`} className="block text-white/75 hover:text-white">
              {contactEmail}
            </a>
            <div className="flex flex-wrap gap-3">
              {mySocials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-white/55 transition-colors hover:border-white/25 hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/30 backdrop-blur md:p-7"
        >
          <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/35">Project inquiry</p>
              <p className="mt-2 text-sm text-white/55">Use the form or copy my email directly.</p>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-white/12 bg-black px-4 py-3 text-xs font-semibold text-white/75 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Copy email address"
            >
              {copiedEmail ? <FiCheck className="size-4" /> : <FiCopy className="size-4" />}
              {copiedEmail ? "Copied" : "Copy Mail"}
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-md border border-white/10 bg-black/80 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 hover:border-white/18 focus:border-white/35 focus:bg-black focus:ring-2 focus:ring-white/10"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-md border border-white/10 bg-black/80 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 hover:border-white/18 focus:border-white/35 focus:bg-black focus:ring-2 focus:ring-white/10"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 w-full resize-none rounded-md border border-white/10 bg-black/80 px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/25 hover:border-white/18 focus:border-white/35 focus:bg-black focus:ring-2 focus:ring-white/10"
              placeholder="Tell me about the project..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FiSend className="size-4" />
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
