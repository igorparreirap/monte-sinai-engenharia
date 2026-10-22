export const CONTACT_ENDPOINT = "/api/enviar-contato.php";

export const contactSubjects = [
  { value: "orcamento", label: "Orçamento" },
  { value: "duvida", label: "Dúvida" },
  { value: "reclamacao", label: "Reclamação" },
  { value: "elogio", label: "Elogio" },
  { value: "outro", label: "Outro" },
] as const;

const FALLBACK_ERROR =
  "Não foi possível enviar sua mensagem agora. Tente novamente mais tarde ou fale conosco por telefone.";

/** Envia o formulário ao endpoint PHP e devolve a mensagem de confirmação do servidor. */
export async function sendContactForm(data: FormData): Promise<string> {
  let response: Response;
  try {
    response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new Error(FALLBACK_ERROR);
  }

  const body = (await response.json().catch(() => null)) as { message?: string } | null;
  if (!response.ok) {
    throw new Error(body?.message ?? FALLBACK_ERROR);
  }
  return body?.message ?? "Mensagem enviada com sucesso.";
}
