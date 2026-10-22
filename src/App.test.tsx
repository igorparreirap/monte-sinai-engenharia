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

  it("lista o WhatsApp de contato da empresa e os da equipe", () => {
    render(<App />);
    const section = document.getElementById("contato") as HTMLElement;
    for (const contact of whatsappContacts) {
      expect(
        within(section).getByRole("link", { name: new RegExp(`WhatsApp ${contact.name}:`) }),
      ).toHaveAttribute("href", contact.href);
    }
    expect(whatsappContacts[0].name).toBe("Contato");
    expect(
      screen.getByRole("link", { name: /Conversar com a Monte Sinai pelo WhatsApp/ }),
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
