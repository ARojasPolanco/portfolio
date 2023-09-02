const Navbar = ({ handleShowNavbar }) => {
    return (
        <section className="flex flex-col items-center justify-center gap-16 p-2 border-l-2 border-very-light-blue bg-bg-300/95 min-h-screen text-white font-montserrat text-lg font-medium relative rounded-l-xl z-10">
            <article onClick={handleShowNavbar} className="flex absolute top-[49px] right-2">
                <p>Cerrar</p>
                <div className="text-very-light-blue text-3xl">
                    <button><i className='bx bx-chevrons-right' ></i></button>
                </div>
            </article>
            <article className="btn px-8">
                <a href="">Inicio</a>
            </article>
            <article className="btn">
                <a href="">Sobre mi</a>
            </article>
            <article className="btn">
                <a href="">Proyectos</a>
            </article>
            <article className="btn">
                <a href="">Contacto</a>
            </article>
        </section>
    )
}

export default Navbar