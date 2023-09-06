const Header = ({ handleShowNavbar }) => {
    return (
        <section className="flex items-center justify-between max-w-[645px] mx-auto">
            <div className="h-[130px] aspect-square borderImg relative">
                <img src="/images/ap-logo.png" alt="" />
            </div>
            <article onClick={handleShowNavbar} className="flex items-center text-lg text-white font-montserrat font-medium px-2 z-10 min-[645px]:hidden">
                <p>Menú</p>
                <div className="text-3xl text-very-light-blue mt-[6px]">
                    <button><i className='bx bx-chevrons-left' ></i></button>
                </div>
            </article>
            <section className="flex justify-center items-center gap-4 px-2 text-white font-montserrat max-[644px]:hidden">
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
        </section>
    )
}

export default Header