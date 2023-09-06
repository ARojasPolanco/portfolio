const AboutMeInfo = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-8 gap-8">
            <article className="font-inter text-xl text-white font-medium flex items-center gap-1">
                <h2 className="text-very-light-blue p-2">#</h2>
                <h2>Sobre mi</h2>
                <div className="h-[2px] w-[170px] bg-white/70"></div>
            </article>
            <article className="text-base font-montserrat text-white text-center p-1 w-[320px]">
                <p>Me desempeño en la creción de proyectos, utilizando herramientas de programación Front-End. <br />
                    Siempre en constante aprendizaje, mejorando mis habilidades.</p>
            </article>
            <section>
                <article className="font-inter text-xl text-white font-medium text-center mb-8 flex items-center gap-1">
                    <h2 className="text-very-light-blue p-2">#</h2>
                    <h2>Mis habilidades</h2>
                    <div className="h-[2px] w-[110px] bg-white/70"></div>
                </article>
                <article className="grid grid-rows-[auto,auto] place-items-center gap-8 max-w-[800px] min-[645px]:grid-cols-[auto,auto] min-[500px]:grid-rows-none">
                    <article className="grid order-1 place-items-center bg-light-gray/10 rounded-xl border-[1px] border-accent-200/30 w-[300px] h-[250px] text-white font-inter text-2xl">
                        <h3 className="col-span-2">Librerias</h3>
                        <div className="w-[300px] bg-light-gray h-[1px]"></div>
                        <div className="text-react col-span-2 text-[50px] animate-spin animate-infinite animate-duration-[3000ms] animate-ease-linear animate-normal">
                            <i className='bx bxl-react' ></i>
                        </div>
                        <h4 className="text-lg">React</h4>
                    </article>
                    <article className="grid grid-rows-[auto,auto] order-2 place-items-center bg-light-gray/10 rounded-xl border-[1px] border-accent-200/30 w-[300px] h-[250px] text-white font-inter text-2xl">
                        <h3 className="col-span-2 p-6">Lenguajes básicos</h3>
                        <div className="w-[300px] bg-light-gray h-[1px]"></div>
                        <div className="text-html text-[50px] col-span-2">
                            <i className='bx bxl-html5' ></i>
                        </div>
                        <h4 className="text-lg col-span-2">HTML</h4>
                        <div className="text-css text-[50px] col-span-2">
                            <i className='bx bxl-css3' ></i>
                        </div>
                        <h4 className="text-lg col-span-2">CSS</h4>
                    </article>
                    <article className="grid grid-rows-[auto,auto] grid-cols-[auto,auto] order-3 place-items-center bg-light-gray/10 rounded-xl border-[1px] border-accent-200/30 w-[300px] h-[250px] text-white font-inter text-2xl">
                        <h3 className="col-span-2 p-6">Otros lenguajes</h3>
                        <div className="w-[300px] bg-light-gray h-[1px]"></div>
                        <div className="text-javascript text-[50px] col-span-2">
                            <i className='bx bxl-javascript' ></i>
                        </div>
                        <h4 className="text-lg">JavaScript</h4>
                        <div className="text-typescript text-[50px] col-span-2">
                            <i className='bx bxl-typescript' ></i>
                        </div>
                        <h4 className="text-lg">TypeScrpit</h4>
                    </article>
                    <article className="grid grid-rows-[auto,auto] grid-cols-[auto,auto] order-4 place-items-center bg-light-gray/10 rounded-xl border-[1px] border-accent-200/30 w-[300px] h-[250px] text-white font-inter text-2xl">
                        <h3 className="col-span-2  p-6">Frameworks</h3>
                        <div className="w-[300px] bg-light-gray h-[1px]"></div>
                        <div className="text-tailwind text-[50px] col-span-2">
                            <i className='bx bxl-tailwind-css' ></i>
                        </div>
                        <h4 className="text-lg">Tailwind</h4>
                        <div className="text-bootstrap text-[50px] col-span-2">
                            <i className='bx bxl-bootstrap' ></i>
                        </div>
                        <h4 className="text-lg">Bootstrap</h4>
                    </article>
                </article>
            </section>
        </section >
    )
}

export default AboutMeInfo