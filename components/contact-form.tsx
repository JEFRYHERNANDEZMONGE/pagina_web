"use client";

import { FormEvent, useMemo, useState } from "react";

const whatsappNumber = "50661025937";

type ContactFormState = {
  name: string;
  company: string;
  role: string;
  phone: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  company: "",
  role: "",
  phone: "",
  message: "",
};

function buildWhatsAppMessage(values: ContactFormState) {
  return [
    "Solicitud comercial desde hmsucomer.com",
    "",
    `Nombre: ${values.name}`,
    `Empresa: ${values.company}`,
    values.role ? `Cargo: ${values.role}` : null,
    `Teléfono: ${values.phone}`,
    "",
    "Mensaje:",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = useMemo(() => {
    const message = encodeURIComponent(buildWhatsAppMessage(values));
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }, [values]);

  function updateField(field: keyof ContactFormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 border border-border bg-surface p-5 sm:p-6 md:grid-cols-2 md:gap-6 md:p-8"
    >
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-ink">
          Nombre completo
        </label>
        <input
          id="contact-name"
          name="nombre"
          required
          autoComplete="name"
          maxLength={120}
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="w-full border border-border-strong px-4 py-3 text-base transition focus:border-accent-strong"
          placeholder="Su nombre"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="contact-company" className="mb-2 block text-sm font-semibold text-ink">
          Empresa
        </label>
        <input
          id="contact-company"
          name="empresa"
          required
          autoComplete="organization"
          maxLength={140}
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="w-full border border-border-strong px-4 py-3 text-base transition focus:border-accent-strong"
          placeholder="Nombre de su organización"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="contact-role" className="mb-2 block text-sm font-semibold text-ink">
          Cargo o rol
        </label>
        <input
          id="contact-role"
          name="cargo"
          autoComplete="organization-title"
          maxLength={100}
          value={values.role}
          onChange={(event) => updateField("role", event.target.value)}
          className="w-full border border-border-strong px-4 py-3 text-base transition focus:border-accent-strong"
          placeholder="Ej. Gerente Comercial"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-ink">
          Teléfono
        </label>
        <input
          id="contact-phone"
          name="telefono"
          required
          autoComplete="tel"
          inputMode="tel"
          maxLength={40}
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="w-full border border-border-strong px-4 py-3 text-base transition focus:border-accent-strong"
          placeholder="+506"
          type="tel"
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-ink">
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="mensaje"
          required
          maxLength={1200}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full border border-border-strong px-4 py-3 text-base transition focus:border-accent-strong"
          placeholder="¿Qué operación comercial necesita resolver?"
          rows={4}
        />
        <p className="mt-2 text-sm leading-6 text-ink-muted">
          Al enviar, se abrirá WhatsApp con su consulta ya preparada. Si el navegador bloquea la ventana, use el enlace directo que aparece debajo.
        </p>
      </div>
      <div className="md:col-span-2">
        <button
          className="w-full bg-night py-3.5 text-base font-semibold text-white transition hover:bg-night-panel sm:py-4 sm:text-lg"
          type="submit"
        >
          Enviar consulta por WhatsApp
        </button>
        {submitted ? (
          <p className="mt-3 text-sm text-ink-muted">
            ¿No se abrió WhatsApp?{" "}
            <a className="font-semibold text-accent-strong underline" href={whatsappUrl} target="_blank" rel="noreferrer">
              Abrir conversación manualmente
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
