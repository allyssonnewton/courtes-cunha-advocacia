export default function Home() {
  const areas = [
    {
      title: "Direito Cível",
      description:
        "Atuação em contratos, obrigações, responsabilidade civil, indenizações e conflitos patrimoniais.",
    },
    {
      title: "Família e Sucessões",
      description:
        "Orientação em divórcios, inventários, partilhas, guarda, alimentos e questões sucessórias.",
    },
    {
      title: "Direito Previdenciário",
      description:
        "Atuação em benefícios, aposentadorias e demandas relacionadas à seguridade social.",
    },
    {
      title: "Direito de Trânsito",
      description:
        "Defesa e orientação em processos administrativos, penalidades e questões relacionadas ao trânsito.",
    },
    {
      title: "Direito do Consumidor",
      description:
        "Atuação em conflitos de consumo, cobranças, contratos e responsabilidade de fornecedores.",
    },
    {
      title: "Direito Empresarial",
      description:
        "Apoio jurídico a empresas em contratos, relações comerciais e prevenção de conflitos.",
    },
    {
      title: "Direito do Trabalho",
      description:
        "Orientação e atuação em relações trabalhistas para trabalhadores e empresas.",
    },
    {
      title: "Saúde e Estética",
      description:
        "Atuação jurídica em questões relacionadas a serviços de saúde, estética, responsabilidade e relações contratuais.",
    },
  ];

  const eventos = [
    {
      titulo: "II Simpósio Goiano de Saúde Estética Avançada",
      data: "10 de outubro de 2026",
      descricao:
        "Hygor Courtes Cunha participa como convidado palestrante do II Simpósio Goiano de Saúde Estética Avançada, abordando o tema “Estética sob Julgamento: responsabilidade civil, resultado e prevenção para profissionais estetas”.",
      foto: "/Images/banner-instagram.jpeg",
    },
  ];

  const equipe = [
    {
      nome: "Hygor Alves Courtes da Cunha",
      oab: "OAB/GO 74.927",
      areas: "Direito Cível · Saúde e Estética",
      bio: "PERIGO Peri go go rigo peri go peri go perigo go peri peri go peri goPERIGO Peri go go rigo peri go peri go perigo go peri peri go peri go.",
      foto: "/Images/foto-hygor.jpeg",
    },
    {
      nome: "Ally",
      oab: "allynew 2905",
      areas: "allynew 2905 · allynew 2905",
      bio: "allynew 2905 allynew 2905 allynew 2905 allynew 2905 allynew 2905 allynew 2905 allynew 2905.",
      foto: "/Images/foto-ally.jpeg",
    },
    {
      nome: "Deolane",
      oab: "OAB/GO 17.171",
      areas: "Direito · Influência · Caos",
      bio: "É muito fácil ficar rico sendo advogado de cliente né",
      foto: "/Images/foto-deolane.jpeg",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#D9D5CC] bg-white/95 px-6 py-5 text-[#0B1D2A] backdrop-blur md:px-10">
      <img
  src="/Images/logo-1.png"
  alt="Courtes Cunha Advocacia"
  className="h-auto w-[150px] md:w-[190px]"
/>

        <nav className="hidden gap-8 md:flex">
          <a
            href="#inicio"
            className="transition-colors duration-300 hover:text-[#B89A5E]"
          >
            Início
          </a>

          <a
            href="#escritorio"
            className="transition-colors duration-300 hover:text-[#B89A5E]"
          >
            O Escritório
          </a>

          <a
            href="#atuacao"
            className="transition-colors duration-300 hover:text-[#B89A5E]"
          >
            Áreas de Atuação
          </a>

          <a
            href="#eventos"
            className="transition-colors duration-300 hover:text-[#B89A5E]"
          >
            Agenda e Eventos
          </a>

          <a
            href="#equipe"
            className="transition-colors duration-300 hover:text-[#B89A5E]"
          >
            Equipe
          </a>

          <a
            href="#contato"
            className="transition-colors duration-300 hover:text-[#B89A5E]"
          >
            Contato
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none border border-[#B89A5E] px-4 py-2 text-sm text-[#B89A5E]">
            Menu
          </summary>

          <nav className="absolute right-0 top-12 flex min-w-[210px] flex-col border border-white/10 bg-[#0B1D2A] p-5 shadow-xl">
            <a href="#inicio" className="py-2">
              Início
            </a>

            <a href="#escritorio" className="py-2">
              O Escritório
            </a>

            <a href="#atuacao" className="py-2">
              Áreas de Atuação
            </a>

            <a href="#eventos" className="py-2">
              Agenda e Eventos
            </a>

            <a href="#equipe" className="py-2">
              Equipe
            </a>

            <a href="#contato" className="py-2">
              Contato
            </a>
          </nav>
        </details>
      </header>

      <section
  id="inicio"
  className="bg-[#0B1D2A] px-6 py-16 text-white md:px-10 md:py-20"
>
  <div className="mx-auto grid min-h-[75vh] max-w-6xl items-center gap-12 lg:grid-cols-2">
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B89A5E] md:text-sm">
        Advocacia estratégica
      </p>

      <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
        Segurança jurídica para decisões que importam.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
        Atuação jurídica pautada pela excelência, transparência e
        atendimento personalizado.
      </p>

      <a
        href="#contato"
        className="mt-8 inline-block border border-[#B89A5E] px-6 py-3 text-[#B89A5E] transition duration-300 hover:bg-[#B89A5E] hover:text-[#0B1D2A]"
      >
        Fale conosco
      </a>
    </div>

    <div className="flex justify-center lg:justify-end">
      <div className="w-full max-w-sm overflow-hidden border border-white/10 bg-white/5">
        <img
          src="/Images/foto-hygor.jpeg"
          alt="Hygor Alves Courtes da Cunha"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

      <section
        id="escritorio"
        className="bg-[#F7F5F0] px-6 py-20 text-[#0B1D2A] md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B89A5E] md:text-sm">
            O Escritório
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            Atuação jurídica com proximidade, estratégia e clareza.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#31404A] md:text-lg">
            A Courtes Cunha Advocacia atua de forma personalizada,
            buscando compreender cada situação com atenção e oferecer
            orientação jurídica segura para pessoas e empresas.
          </p>
        </div>
      </section>

      <section
        id="atuacao"
        className="bg-white px-6 py-20 text-[#0B1D2A] md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B89A5E] md:text-sm">
            Áreas de Atuação
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            Soluções jurídicas para diferentes momentos e necessidades.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5A6670] md:text-lg">
            Atendimento orientado à análise cuidadosa de cada situação,
            com atuação preventiva e contenciosa.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <article
                key={area.title}
                className="rounded-sm border border-[#D9D5CC] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B89A5E] hover:shadow-lg md:p-7"
              >
                <div className="mb-6 h-px w-10 bg-[#B89A5E]" />

                <h3 className="text-xl font-semibold">{area.title}</h3>

                <p className="mt-4 leading-relaxed text-[#5A6670]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
  id="eventos"
  className="bg-[#F7F5F0] px-6 py-20 text-[#0B1D2A] md:px-10 md:py-24"
>
  <div className="mx-auto max-w-6xl">
    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B89A5E] md:text-sm">
      Agenda e Eventos
    </p>

    <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
      Participações, encontros e eventos.
    </h2>

    <div className="mt-12">
      {eventos.map((evento) => (
        <article
          key={evento.titulo}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#B89A5E]">
            Convidado palestrante
          </p>

          <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
            {evento.titulo}
          </h3>

          <p className="mt-3 text-sm text-[#5A6670]">
            {evento.data}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5A6670] md:text-lg">
            {evento.descricao}
          </p>

          <div className="mt-8 max-w-md overflow-hidden border border-[#D9D5CC] bg-white">
  <img
    src={evento.foto}
    alt={`Banner do ${evento.titulo}`}
    className="h-auto w-full"
  />
</div>
        </article>
      ))}
    </div>
  </div>
</section>

      <section
        id="equipe"
        className="bg-white px-6 py-20 text-[#0B1D2A] md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B89A5E] md:text-sm">
            Equipe
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            Advogados e parceiros.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {equipe.map((membro) => (
              <article
                key={membro.nome}
                className="overflow-hidden border border-[#D9D5CC] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#B89A5E] hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-[#F1EEE8]">
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0B1D2A]">
                    {membro.nome}
                  </h3>

                  <p className="mt-2 text-sm text-[#5A6670]">
                    {membro.oab}
                  </p>

                  <p className="mt-4 text-sm font-medium text-[#B89A5E]">
                    {membro.areas}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#5A6670]">
                    {membro.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="bg-[#0B1D2A] px-6 py-20 text-white md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B89A5E] md:text-sm">
              Contato
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
              Entre em contato para conversar sobre sua necessidade jurídica.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Atendimento profissional, claro e personalizado para análise
              de cada situação.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B89A5E] md:text-sm">
                Advogado
              </p>

              <p className="mt-2 text-lg">
                Hygor Alves Courtes da Cunha
              </p>

              <p className="mt-1 text-white/60">
                OAB/GO 74.927
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B89A5E] md:text-sm">
                E-mail
              </p>

              <a
                href="mailto:advcourtescunha@gmail.com"
                className="mt-2 inline-block break-all text-lg transition hover:text-[#B89A5E]"
              >
                advcourtescunha@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B89A5E] md:text-sm">
                WhatsApp
              </p>

              <p className="mt-2 text-lg text-white/70">
                (62) 9XXXX-XXXX
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B89A5E] md:text-sm">
                Instagram
              </p>

              <p className="mt-2 text-lg text-white/70">
                @courtescunha.adv
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0B1D2A] px-6 py-8 text-white md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-white">
              Courtes Cunha Advocacia
            </p>

            <p className="mt-1">
              Hygor Alves Courtes da Cunha · OAB/GO 74.927
            </p>
          </div>

          <p>
            © 2026 Courtes Cunha Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}