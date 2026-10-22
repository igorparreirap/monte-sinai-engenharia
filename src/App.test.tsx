import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { company, whatsappContacts } from "./data/company";
import { services } from "./data/services";

describe("App", () => {
  it("exibe o título principal e todas as seções de navegação", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/engenharia elétrica/i);
    for (const id of ["inicio", "sobre", "servicos", "contato"]) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });

  it("lista todos os serviços cadastrados", () => {
    render(<App />);
    const section = document.getElementById("servicos") as HTMLElement;
    expect(within(section).getAllByRole("listitem")).toHaveLength(services.length);
  });

  it("lista os WhatsApp da equipe com o Fabiano como contato principal", () => {
    render(<App />);
    const section = document.getElementById("contato") as HTMLElement;
    for (const contact of whatsappContacts) {
      expect(
        within(section).getByRole("link", { name: new RegExp(`Conversar com ${contact.name}`) }),
      ).toHaveAttribute("href", contact.href);
    }
    expect(within(section).getByText("principal")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Conversar com Fabiano pelo WhatsApp \(abre/ }),
    ).toHaveAttribute("href", whatsappContacts[0].href);
  });

  it("mostra o e-mail da empresa com link clicável", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: company.email })).toHaveAttribute(
      "href",
      `mailto:${company.email}`,
    );
  });
});
