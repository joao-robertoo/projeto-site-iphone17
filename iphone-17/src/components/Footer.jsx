function Footer() {
  const sections = [
    {
      title: "Comprar e saber mais",
      links: ["iPhone 17 Pro", "iPhone 17 Pro Max", "Comparar modelos", "Acessórios"],
    },
    {
      title: "Especificações",
      links: ["Características técnicas", "Câmera", "Bateria", "Display"],
    },
    {
      title: "Suporte",
      links: ["Suporte ao iPhone", "AppleCare+", "iOS 19", "Contato"],
    },
    {
      title: "Apple",
      links: ["Sobre a Apple", "Newsroom", "Privacidade", "Carreiras"],
    },
  ];

  const buttonsLinks = ["Política de Privacidade", "Termos de Uso", "Vendas"];

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-14 text-center">

        {/* Seções */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 place-items-center">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold mb-4 text-white">
                {section.title}
              </h4>

              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linha inferior */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright © 2026 Apple Inc. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {buttonsLinks.map((link, index) => (
              <a
                href="#"
                key={index}
                className="hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Site criado para fins educacionais
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
