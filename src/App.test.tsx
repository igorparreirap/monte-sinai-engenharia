import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { company } from "./data/company";
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

  it("mostra os contatos reais da empresa com links clicáveis", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: company.phone.display })).toHaveAttribute(
      "href",
      company.phone.href,
    );
    expect(screen.getByRole("link", { name: company.email })).toHaveAttribute(
      "href",
      `mailto:${company.email}`,
    );
  });
});
