import { Element } from "react-scroll"

const Projects = () => {
    return (
        <section className="max-w-[800px] mx-auto">
            <Element name={'Projects'} />
            <article className="font-inter text-xl text-white font-medium flex items-center gap-1">
                <h2 className="text-very-light-blue p-2">#</h2>
                <h2>Proyectos</h2>
                <div className="h-[2px] w-[160px] bg-white/70"></div>
            </article>
            <article className="relative flex justify-center items-center flex-wrap gap-4 py-6 px-4 cont">
                {/* 1 */}
                <article className="relative flex justify-center items-start w-[250px] h-[200px] bg-bg-300 rounded-3xl shadowCard transition-all hover:h-[300px] card">
                    <div className="absolute top-5 rounded-xl w-[220px] h-[140px] bg-bg-100 transition-all img">
                        <img src="/images/ecommerce.png" alt="" />
                    </div>
                    <article className="absolute w-full px-7 text-center top-[170px] h-5 overflow-hidden transition-all content">
                        <article className="text-white">
                            <h2><span className="text-very-light-blue"># </span>E-commerce</h2>
                        </article>
                        <article className="text-[40px] flex justify-center gap-2 p-2">
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
                        <article className="flex justify-center gap-4 p-2">
                            <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                                <i className='bx bxl-github'></i>
                                <a href="https://github.com/ARojasPolanco/CarritoDeCompras" target="_blank">GitHub</a>
                            </div>
                            <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                                <i className='bx bxl-netlify'></i>
                                <a className="text-white" href="https://carrito-de-compras-academlo1.netlify.app" target="_blank">Netlify</a>
                            </div>
                        </article>
                    </article>
                </article>
                {/* 2 */}
                <article className="relative flex justify-center items-start w-[250px] h-[200px] bg-bg-300 rounded-3xl shadowCard transition-all hover:h-[300px] card">
                    <div className="absolute top-5 rounded-xl w-[220px] h-[140px] bg-bg-100 transition-all img">
                        <img src="/images/randomphrases.png" alt="" />
                    </div>
                    <article className="absolute w-full px-7 text-center top-[170px] h-5 overflow-hidden transition-all content">
                        <article className="text-white">
                            <h2><span className="text-very-light-blue"># </span>Random Phrases</h2>
                        </article>
                        <article className="text-[40px] flex justify-center gap-2 p-2">
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
                        <article className="flex justify-center gap-4 p-2">
                            <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                                <i className='bx bxl-github'></i>
                                <a href="https://github.com/ARojasPolanco/Project-1-react" target="_blank">GitHub</a>
                            </div>
                            <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                                <i className='bx bxl-netlify'></i>
                                <a className="text-white" href="https://project-1-react-academlo.netlify.app" target="_blank">Netlify</a>
                            </div>
                        </article>
                    </article>
                </article>
                {/* 3 */}
                <article className="relative flex justify-center items-start w-[250px] h-[200px] bg-bg-300 rounded-3xl shadowCard transition-all hover:h-[300px] card">
                    <div className="absolute top-5 rounded-xl w-[220px] h-[140px] bg-bg-100 transition-all img">
                        <img src="/images/randomphrases.png" alt="" />
                    </div>
                    <article className="absolute w-full px-7 text-center top-[170px] h-5 overflow-hidden transition-all content">
                        <article className="text-white">
                            <h2><span className="text-very-light-blue"># </span>Weather Api</h2>
                        </article>
                        <article className="text-[40px] flex justify-center gap-2 p-2">
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
                        <article className="flex justify-center gap-4 p-2">
                            <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                                <i className='bx bxl-github'></i>
                                <a href="https://github.com/ARojasPolanco/Project-2-react" target="_blank">GitHub</a>
                            </div>
                            <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                                <i className='bx bxl-netlify'></i>
                                <a className="text-white" href="https://weather-api-academlo.netlify.app" target="_blank">Netlify</a>
                            </div>
                        </article>
                    </article>
                </article>
                {/* 4 */}
                <article className="relative flex justify-center items-start w-[250px] h-[200px] bg-bg-300 rounded-3xl shadowCard transition-all hover:h-[300px] card">
                    <div className="absolute top-5 rounded-xl w-[220px] h-[140px] bg-bg-100 transition-all img">
                        <img src="/images/rickandmorty.png" alt="" />
                    </div>
                    <article className="absolute w-full px-7 text-center top-[170px] h-5 overflow-hidden transition-all content">
                        <article className="text-white">
                            <h2><span className="text-very-light-blue"># </span>Rick and Morty</h2>
                        </article>
                        <article className="text-[40px] flex justify-center gap-2 p-2">
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
                        <article className="flex justify-center gap-4 p-2">
                            <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                                <i className='bx bxl-github'></i>
                                <a href="https://github.com/ARojasPolanco/preject-3-academlo" target="_blank">GitHub</a>
                            </div>
                            <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                                <i className='bx bxl-netlify'></i>
                                <a className="text-white" href="https://rickandmortydimensions.netlify.app" target="_blank">Netlify</a>
                            </div>
                        </article>
                    </article>
                </article>
                {/* 5 */}
                <article className="relative flex justify-center items-start w-[250px] h-[200px] bg-bg-300 rounded-3xl shadowCard transition-all hover:h-[300px] card">
                    <div className="absolute top-5 rounded-xl w-[220px] h-[140px] bg-bg-100 transition-all img">
                        <img src="/images/usercrudapi.png" alt="" />
                    </div>
                    <article className="absolute w-full px-7 text-center top-[170px] h-5 overflow-hidden transition-all content">
                        <article className="text-white">
                            <h2><span className="text-very-light-blue"># </span>User Crud Api</h2>
                        </article>
                        <article className="text-[40px] flex justify-center gap-2 p-2">
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
                        <article className="flex justify-center gap-4 p-2">
                            <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                                <i className='bx bxl-github'></i>
                                <a href="https://github.com/ARojasPolanco/Project-4" target="_blank">GitHub</a>
                            </div>
                            <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                                <i className='bx bxl-netlify'></i>
                                <a className="text-white" href="https://userscrudapi.netlify.app" target="_blank">Netlify</a>
                            </div>
                        </article>
                    </article>
                </article>
                {/* 6 */}
                <article className="relative flex justify-center items-start w-[250px] h-[200px] bg-bg-300 rounded-3xl shadowCard transition-all hover:h-[300px] card">
                    <div className="absolute top-5 rounded-xl w-[220px] h-[140px] bg-bg-100 transition-all img">
                        <img src="/images/pokemonapi.png" alt="" />
                    </div>
                    <article className="absolute w-full px-7 text-center top-[170px] h-5 overflow-hidden transition-all content">
                        <article className="text-white">
                            <h2><span className="text-very-light-blue"># </span>Pokedex Api</h2>
                        </article>
                        <article className="text-[40px] flex justify-center gap-2 p-2">
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
                        <article className="flex justify-center gap-4 p-2">
                            <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                                <i className='bx bxl-github'></i>
                                <a href="https://github.com/ARojasPolanco/Project-5" target="_blank">GitHub</a>
                            </div>
                            <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                                <i className='bx bxl-netlify'></i>
                                <a className="text-white" href="https://pokedexapiacademlo.netlify.app" target="_blank">Netlify</a>
                            </div>
                        </article>
                    </article>
                </article>
                {/* 7 */}
                <article className="relative flex justify-center items-start w-[250px] h-[200px] bg-bg-300 rounded-3xl shadowCard transition-all hover:h-[300px] card">
                    <div className="absolute top-5 rounded-xl w-[220px] h-[140px] bg-bg-100 transition-all img">
                        <img src="/images/frontendmentor.png" alt="" />
                    </div>
                    <article className="absolute w-full px-7 text-center top-[170px] h-5 overflow-hidden transition-all content">
                        <article className="text-white">
                            <h2><span className="text-very-light-blue"># </span>Front end Mentor</h2>
                        </article>
                        <article className="text-[40px] flex justify-center gap-2 p-2">
                            <div className="text-html">
                                <i className='bx bxl-html5' ></i>
                            </div>
                            <div className="text-css">
                                <i className='bx bxl-css3' ></i>
                            </div>
                        </article>
                        <article className="flex justify-center gap-4 p-2">
                            <div className="bg-light-gray px-2 rounded-md text-white text-lg flex items-center gap-1">
                                <i className='bx bxl-github'></i>
                                <a href="https://github.com/ARojasPolanco/FrontEndMentor" target="_blank">GitHub</a>
                            </div>
                            <div className="bg-light-gray px-2 rounded-md text-netlify text-lg flex items-center gap-1">
                                <i className='bx bxl-netlify'></i>
                                <a className="text-white" href="https://frontendmentor1challenges.netlify.app/" target="_blank">Netlify</a>
                            </div>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    )
}

export default Projects