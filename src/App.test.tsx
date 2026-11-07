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

  it("lista o WhatsApp de contato da empresa e da equipe, na ordem definida", () => {
    render(<App />);
    const section = document.getElementById("contato") as HTMLElement;
    expect(whatsappContacts.map((contact) => contact.name)).toEqual([
      "Contato",
      "Joel",
      "Fabiano",
      "Alberto",
    ]);
    for (const contact of whatsappContacts) {
      expect(
        within(section).getByRole("link", { name: new RegExp(`^WhatsApp ${contact.name}\\b`) }),
      ).toHaveAttribute("href", contact.href);
    }
    expect(within(section).getByText(/Engenheiro eletricista/)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Conversar com a Monte Sinai pelo WhatsApp/ }),
    ).toHaveAttribute("href", whatsappContacts[0].href);
  });

  it("mostra o Portfólio entre Serviços e Contato no menu, abrindo o PDF", () => {
    render(<App />);
    const nav = screen.getByRole("navigation", { name: "Principal" });
    const labels = within(nav)
      .getAllByRole("link")
      .map((link) => link.textContent?.trim());
    const servicos = labels.indexOf("Serviços");
    expect(labels.slice(servicos, servicos + 3)).toEqual(["Serviços", "Portfólio", "Contato"]);
    const portfolio = within(nav).getByRole("link", { name: /Portfólio/ });
    expect(portfolio).toHaveAttribute("href", "/portfolio-monte-sinai.pdf");
    expect(portfolio).toHaveAttribute("target", "_blank");
    expect(screen.queryByRole("img", { name: /Vista panorâmica/ })).not.toBeInTheDocument();
  });

  it("mostra o e-mail da empresa com link clicável", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: company.email })).toHaveAttribute(
      "href",
      `mailto:${company.email}`,
    );
  });
});
