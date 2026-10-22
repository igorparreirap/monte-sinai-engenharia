import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { contactSubjects, sendContactForm } from "@/lib/contact";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const fieldClass =
  "w-full rounded-md border border-line bg-surface px-4 py-3 font-body text-ink placeholder:text-muted/60 transition focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/40";
const labelClass = "mb-2 block font-heading text-sm font-semibold text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const sending = status.state === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });
    try {
      const message = await sendContactForm(new FormData(form));
      setStatus({ state: "success", message });
      form.reset();
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Erro ao enviar a mensagem.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="form-titulo"
      className="space-y-5 rounded-xl border border-line bg-white p-6 shadow-xl sm:p-8"
    >
      <h3 id="form-titulo" className="font-heading text-2xl font-bold text-ink">
        Envie uma mensagem
      </h3>

      {/* Campo-armadilha contra robôs: fica invisível para pessoas. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Deixe este campo vazio</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Nome completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={120}
          required
          placeholder="Seu nome"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            placeholder="seu@email.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefone <span className="font-normal text-muted">(opcional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            placeholder="(62) 9 0000-0000"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Assunto
        </label>
        <select id="subject" name="subject" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Selecione...
          </option>
          {contactSubjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={5000}
          required
          placeholder="Descreva seu projeto ou necessidade..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <p className="font-body text-xs text-muted">
        Usamos seus dados apenas para responder a este contato.
      </p>

      <button
        type="submit"
        disabled={sending}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange py-4 font-heading font-bold text-brand-navy-dark shadow-md transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-5 w-5" aria-hidden="true" />
        )}
        {sending ? "Enviando..." : "Enviar mensagem"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-5 font-body text-sm ${status.state === "error" ? "text-red-700" : "text-brand-teal"}`}
      >
        {status.state === "success" || status.state === "error" ? status.message : ""}
      </p>
    </form>
  );
}
