const Projects = () => {
    return (
        <section className="max-w-[800px] mx-auto">
            <article className="font-inter text-xl text-white font-medium flex items-center gap-1">
                <h2 className="text-very-light-blue p-2">#</h2>
                <h2>Proyectos</h2>
                <div className="h-[2px] w-[160px] bg-white/70"></div>
            </article>
            <article className="gap-4 grid grid-rows-[auto,auto] place-items-center min-[645px]:grid-cols-[auto,auto]">
                {/* 1 */}
                <article className="flex flex-col w-[300px] border-[1px] border-light-gray rounded-xl overflow-hidden bg-bg-100/30">
                    <header>
                        <div>
                            <img src="/images/ecommerce.png" alt="" />
                        </div>
                    </header>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="p-2 text-lg text-white text-center font-montserrat">
                        <h5>e-commerce</h5>
                    </article>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="flex items-center justify-center text-[40px] p-4">
                        <div className="text-html">
                            <i className='bx bxl-html5' ></i>
                        </div>
                        <div className="text-css">
                            <i className='bx bxl-css3' ></i>
                        </div>
                        <div className="text-javascript">
                            <i className='bx bxl-javascript' ></i>
                        </div>
                    </article>
                    <article className="flex justify-center gap-6 p-2">
                        <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                            <i class='bx bxl-github'></i>
                            <a href="">GitHub</a>
                        </div>
                        <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                            <i className='bx bxl-netlify'></i>
                            <a className="text-white" href="">Netlify</a>
                        </div>
                    </article>
                </article>
                {/* 2 */}
                <article className="flex flex-col w-[300px] border-[1px] border-light-gray rounded-xl overflow-hidden bg-bg-100/30">
                    <header>
                        <div>
                            <img src="/images/randomphrases.png" alt="" />
                        </div>
                    </header>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="p-2 text-lg text-white text-center font-montserrat">
                        <h5>Random phrases</h5>
                    </article>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="flex items-center justify-center text-[40px] p-4">
                        <div className="text-react">
                            <i className='bx bxl-react' ></i>
                        </div>
                        <div className="text-css">
                            <i className='bx bxl-css3' ></i>
                        </div>
                        <div className="text-javascript">
                            <i className='bx bxl-javascript' ></i>
                        </div>
                    </article>
                    <article className="flex justify-center gap-6 p-2">
                        <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                            <i className='bx bxl-github'></i>
                            <a href="">GitHub</a>
                        </div>
                        <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                            <i className='bx bxl-netlify'></i>
                            <a className="text-white" href="">Netlify</a>
                        </div>
                    </article>
                </article>
                {/* 3 */}
                <article className="flex flex-col w-[300px] border-[1px] border-light-gray rounded-xl overflow-hidden bg-bg-100/30">
                    <header>
                        <div>
                            <img src="/images/weatherapp.png" alt="" />
                        </div>
                    </header>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="p-2 text-lg text-white text-center font-montserrat">
                        <h5>Weather App</h5>
                    </article>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="flex items-center justify-center text-[40px] p-4">
                        <div className="text-react">
                            <i className='bx bxl-react' ></i>
                        </div>
                        <div className="text-tailwind">
                            <i className='bx bxl-tailwind-css' ></i>
                        </div>
                        <div className="text-javascript">
                            <i className='bx bxl-javascript' ></i>
                        </div>
                    </article>
                    <article className="flex justify-center gap-6 p-2">
                        <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                            <i class='bx bxl-github'></i>
                            <a href="">GitHub</a>
                        </div>
                        <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                            <i className='bx bxl-netlify'></i>
                            <a className="text-white" href="">Netlify</a>
                        </div>
                    </article>
                </article>
                {/* 4 */}
                <article className="flex flex-col w-[300px] border-[1px] border-light-gray rounded-xl overflow-hidden bg-bg-100/30">
                    <header>
                        <div>
                            <img src="/images/rickandmorty.png" alt="" />
                        </div>
                    </header>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="p-2 text-lg text-white text-center font-montserrat">
                        <h5>Rick And Morty</h5>
                    </article>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="flex items-center justify-center text-[40px] p-4">
                        <div className="text-react">
                            <i className='bx bxl-react' ></i>
                        </div>
                        <div className="text-tailwind">
                            <i className='bx bxl-tailwind-css' ></i>
                        </div>
                        <div className="text-javascript">
                            <i className='bx bxl-javascript' ></i>
                        </div>
                    </article>
                    <article className="flex justify-center gap-6 p-2">
                        <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                            <i class='bx bxl-github'></i>
                            <a href="">GitHub</a>
                        </div>
                        <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                            <i className='bx bxl-netlify'></i>
                            <a className="text-white" href="">Netlify</a>
                        </div>
                    </article>
                </article>
                {/* 5 */}
                <article className="flex flex-col w-[300px] border-[1px] border-light-gray rounded-xl overflow-hidden bg-bg-100/30">
                    <header>
                        <div>
                            <img src="/images/usercrudapi.png" alt="" />
                        </div>
                    </header>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="p-2 text-lg text-white text-center font-montserrat">
                        <h5>Rick And Morty</h5>
                    </article>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="flex items-center justify-center text-[40px] p-4">
                        <div className="text-react">
                            <i className='bx bxl-react' ></i>
                        </div>
                        <div className="text-tailwind">
                            <i className='bx bxl-tailwind-css' ></i>
                        </div>
                        <div className="text-javascript">
                            <i className='bx bxl-javascript' ></i>
                        </div>
                    </article>
                    <article className="flex justify-center gap-6 p-2">
                        <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                            <i class='bx bxl-github'></i>
                            <a href="">GitHub</a>
                        </div>
                        <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                            <i className='bx bxl-netlify'></i>
                            <a className="text-white" href="">Netlify</a>
                        </div>
                    </article>
                </article>
                {/* 6 */}
                <article className="flex flex-col w-[300px] border-[1px] border-light-gray rounded-xl overflow-hidden bg-bg-100/30">
                    <header>
                        <div>
                            <img src="/images/pokemonapi.png" alt="" />
                        </div>
                    </header>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="p-2 text-lg text-white text-center font-montserrat">
                        <h5>Pokedex Api</h5>
                    </article>
                    <div className="w-[300px] h-[1px] bg-light-gray"></div>
                    <article className="flex items-center justify-center text-[40px] p-4">
                        <div className="text-react">
                            <i className='bx bxl-react' ></i>
                        </div>
                        <div className="text-tailwind">
                            <i className='bx bxl-tailwind-css' ></i>
                        </div>
                        <div className="text-javascript">
                            <i className='bx bxl-javascript' ></i>
                        </div>
                    </article>
                    <article className="flex justify-center gap-6 p-2">
                        <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                            <i class='bx bxl-github'></i>
                            <a href="">GitHub</a>
                        </div>
                        <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                            <i className='bx bxl-netlify'></i>
                            <a className="text-white" href="">Netlify</a>
                        </div>
                    </article>
                </article>
            </article>
        </section>
    )
}

export default Projects