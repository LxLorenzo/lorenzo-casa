const ProfessionalExperience = () => {
  return (
    <section
      className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-28 flex flex-col     items-center gap-12"
      id="experiencia"
    >
      <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-bold text-primary">
        Experiência Profissional
      </h2>
      <p className="text-zinc-500 text-center dark:text-zinc-200 font-light">
        Conheça um pouco da minha trajetória profissional.
      </p>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="sm:p-6 flex justify-center items-center gap-5 rounded-md hover:bg-zinc-100 transition shadow-md border border-primary p-5 dark:border-zinc-50 dark:hover:bg-neutral-900 max-w-[768px] w-full">
          <div className="flex flex-col gap-1 p-3 w-1/3">
            <h3 className="text-lg font-semibold text-primary">Desenvolvedor Front-end</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-200">Prime Web</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-200">Jan/2025 - Atual</p>
          </div>
          <div className="flex flex-col gap-1 w-2/3">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Criação de páginas web com HTML, CSS, JavaScript e PHP. Edição e otimização de imagens para melhor desempenho e estética. Implementação de estratégias de SEO on-page para aumentar a visibilidade nos mecanismos de busca.
            </p>
            <div className="flex justify-items items-center gap-2">
            </div>
          </div>
        </div>
        <div className="sm:p-6 flex justify-center items-center gap-5 rounded-md hover:bg-zinc-100 transition shadow-md border border-primary p-5 dark:border-zinc-50 dark:hover:bg-neutral-900 max-w-[768px] w-full">
          <div className="flex flex-col gap-1 p-3 w-1/3">
            <h3 className="text-lg font-semibold text-primary">Estágio Front-end</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-200">Prime Web</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-200">Out/2023 - Jan/2025</p>
          </div>
          <div className="flex flex-col gap-1 w-2/3">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Atuo no desenvolvimento de sites e landing pages, com foco em SEO e performance.
            </p>
            <ul className="text-sm text-zinc-600 list-disc ml-4 dark:text-zinc-300">
              <li>Criação de Páginas com HTML, CSS, Javascript e PHP;</li>
              <li>Edição e otimização de imagens;</li>
              <li>Otimização de HTML para SEO.</li>
            </ul>
            <div className="flex justify-items items-center gap-2">
            </div>
          </div>
        </div>
      </div>
  </section>
  );
}
 
export default ProfessionalExperience;
