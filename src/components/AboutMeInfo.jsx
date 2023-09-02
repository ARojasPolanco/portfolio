const AboutMeInfo = () => {
    return (
        <section className="flex flex-col justify-center items-center mt-8 gap-8">
            <article className="font-inter text-xl text-white font-medium underline underline-offset-8">
                <h2>Sobre mi</h2>
            </article>
            <article className="text-base font-montserrat text-white text-center p-1 w-[300px]">
                <p>Me desempeño en la creción de proyectos, utilizando herramientas de programación Front-End. <br />
                    Siempre en constante aprendizaje, mejorando mis habilidades.</p>
            </article>
            <section>
                <article className="font-inter text-xl text-white font-medium underline underline-offset-8 text-center mb-4">
                    <h2>Mis habilidades</h2>
                </article>
                <article className="text-[40px] flex flex-wrap justify-center gap-4 w-[250px] animate-shake animate-thrice animate-duration-500 animate-ease-in-ou">
                    <div className="text-html hover:scale-110">
                        <i className='bx bxl-html5' ></i>
                    </div>
                    <div className="text-css hover:scale-110">
                        <i className='bx bxl-css3' ></i>
                    </div>
                    <div className="text-javascript hover:scale-110">
                        <i className='bx bxl-javascript' ></i>
                    </div>
                    <div className="text-tailwind hover:scale-110">
                        <i className='bx bxl-tailwind-css' ></i>
                    </div>
                    <div className="text-react hover:scale-110">
                        <i className='bx bxl-react' ></i>
                    </div>
                    <div className="text-redux hover:scale-110">
                        <i className='bx bxl-redux' ></i>
                    </div>
                    <div className="text-typescript hover:scale-110">
                        <i className='bx bxl-typescript' ></i>
                    </div>
                    <div className="text-bootstrap hover:scale-110">
                        <i className='bx bxl-bootstrap' ></i>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default AboutMeInfo