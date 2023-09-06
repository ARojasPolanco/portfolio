import { Link } from "react-scroll"

const Navbar = ({ handleShowNavbar }) => {
    return (
        <section className="min-h-screen w-full fixed backdrop-blur-sm z-10">
            <section className="min-h-screen w-[42%] flex flex-col items-center justify-center gap-16 p-2 border-l-2 border-very-light-blue bg-bg-300/95 text-white font-montserrat text-lg font-medium absolute right-0 rounded-l-xl">
                <article onClick={handleShowNavbar} className="flex absolute top-[49px] right-2">
                    <p>Cerrar</p>
                    <div className="text-very-light-blue text-3xl">
                        <button><i className='bx bx-chevrons-right' ></i></button>
                    </div>
                </article>
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
        </section>
    )
}

export default Navbar