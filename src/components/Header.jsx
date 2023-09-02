const Header = ({ handleShowNavbar }) => {
    return (
        <section className="flex items-center justify-between max-w-[450px] mx-auto">
            <div className="h-[130px] aspect-square borderImg relative">
                <img src="/images/ap-logo.png" alt="" />
            </div>
            <article onClick={handleShowNavbar} className="flex items-center text-lg text-white font-montserrat font-medium px-2 z-10">
                <p>Menú</p>
                <div className="text-3xl text-very-light-blue mt-[6px]">
                    <button><i className='bx bx-chevrons-left' ></i></button>
                </div>
            </article>
        </section>
    )
}

export default Header