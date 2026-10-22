import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

async function fillForm() {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(/nome completo/i), "Maria Silva");
  await user.type(screen.getByLabelText(/e-mail/i), "maria@exemplo.com");
  await user.selectOptions(screen.getByLabelText(/assunto/i), "orcamento");
  await user.type(screen.getByLabelText(/^mensagem$/i), "Gostaria de um orçamento.");
  await user.click(screen.getByRole("button", { name: /enviar mensagem/i }));
}

describe("ContactForm", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("exige os campos obrigatórios", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/nome completo/i)).toBeRequired();
    expect(screen.getByLabelText(/e-mail/i)).toBeRequired();
    expect(screen.getByLabelText(/assunto/i)).toBeRequired();
    expect(screen.getByLabelText(/^mensagem$/i)).toBeRequired();
    expect(screen.getByLabelText(/telefone/i)).not.toBeRequired();
  });

  it("envia para o endpoint PHP e mostra a confirmação do servidor", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ message: "Mensagem enviada com sucesso." }), { status: 200 }),
      );
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);
    await fillForm();

    expect(fetchMock).toHaveBeenCalledWith("/api/enviar-contato.php", expect.any(Object));
    expect(await screen.findByRole("status")).toHaveTextContent("Mensagem enviada com sucesso.");
  });

  it("mostra a mensagem de erro devolvida pelo servidor", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ message: "Confira seu nome e endereço de e-mail." }), {
          status: 422,
        }),
      ),
    );

    render(<ContactForm />);
    await fillForm();

    expect(await screen.findByRole("status")).toHaveTextContent(/confira seu nome/i);
  });
});
