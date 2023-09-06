import { Link } from "react-scroll"

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
                <Link className="btn px-8" to="Home" smooth={true} duration={300}>
                    Inicio
                </Link>
                < Link className="btn" to="AboutMe" smooth={true} duration={300}>
                    Sobre mi
                </Link>
                <Link className="btn" to="Projects" smooth={true} duration={300}>
                    Proyectos
                </Link>
                <Link className="btn" to="Contact" smooth={true} duration={300}>
                    Contacto
                </Link>
            </section>
        </section >
    )
}

export default Header