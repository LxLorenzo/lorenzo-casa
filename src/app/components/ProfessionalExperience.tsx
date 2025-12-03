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
        <div className="sm:p-10 flex flex-col sm:flex-row justify-center gap-5 rounded-md hover:shadow-lg hover:-translate-y-1 transition shadow-md border border-primary p-8 dark:border-zinc-50 dark:hover:bg-neutral-900 max-w-[768px] w-full">
          <div className="flex flex-col gap-1 sm:w-1/3">
            <h3 className="text-lg font-semibold text-primary">Desenvolvedor Front-end</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-200">Prime Web</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-200">Jan/2025 - Atual</p>
          </div>
          <div className="flex flex-col gap-1 sm:w-2/3">
            <ul className="flex flex-col gap-2 list-inside list-disc">
              <li className="text-sm text-zinc-600 dark:text-zinc-300">Atuo diretamente no suporte técnico e em reuniões com clientes, traduzindo necessidades de negócio em soluções web e alinhando expectativas de entrega.</li>
              <li className="text-sm text-zinc-600 dark:text-zinc-300">Responsável pela manutenção e evolução de aplicações desenvolvidas em Next.js, corrigindo bugs e implementando novas funcionalidades.</li>
              <li className="text-sm text-zinc-600 dark:text-zinc-300">Continuo o desenvolvimento de Landing Pages e sites institucionais com foco em SEO e performance, utilizando PHP, JavaScript, HTML5 e CSS3.</li>
              <li className="text-sm text-zinc-600 dark:text-zinc-300">Garanto a otimização de Core Web Vitals e responsividade em todos os projetos entregues, assegurando alta performance nos rankings de busca.</li>
            </ul>
            <div className="flex justify-items items-center gap-2">
            </div>
          </div>
        </div>
        <div className="sm:p-10 flex flex-col sm:flex-row justify-center gap-5 rounded-md hover:shadow-lg hover:-translate-y-1 transition shadow-md border border-primary p-8 dark:border-zinc-50 dark:hover:bg-neutral-900 max-w-[768px] w-full">
          <div className="flex flex-col gap-1 sm:w-1/3">
            <h3 className="text-lg font-semibold text-primary">Estágio Front-end</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-200">Prime Web</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-200">Out/2023 - Jan/2025</p>
          </div>
          <div className="flex flex-col gap-1 sm:w-2/3">
            <ul className="flex flex-col gap-2 list-inside list-disc">
              <li className="text-sm text-zinc-600 dark:text-zinc-300">Desenvolvi e publiquei diversos sites institucionais e Landing Pages, utilizando a stack: HTML5, CSS3, JavaScript e PHP.</li>
              <li className="text-sm text-zinc-600 dark:text-zinc-300">Apliquei técnicas de SEO On-page e estruturação semântica desde a etapa de desenvolvimento, garantindo indexação correta pelos motores de busca.</li>
              <li className="text-sm text-zinc-600 dark:text-zinc-300">Transformei layouts de design Figma em interfaces web funcionais e responsivas, assegurando a qualidade visual em diferentes dispositivos.</li>
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
