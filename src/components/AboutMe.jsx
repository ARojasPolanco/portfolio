import { Element } from "react-scroll"

const AboutMe = () => {
    return (
        <section className="text-3xl font-montserrat font-bold text-white p-3 mt-8 h-[150px] w-[300px] mx-auto bg-light-gray/10 rounded-xl border-[1px] border-accent-200/30">
            <Element name={'Home'} />
            <h1>Soy <span className="text-light-blue-sky borderWhite">Alan Polanco</span> desarrollador</h1>
            <article className="text-[3rem] mt-4">
                <span className="absolute waveBorder">
                    <h2>Front-end</h2>
                </span>
                <span className="absolute waveAnimation">
                    <h2>Front-end</h2>
                </span>
            </article>
        </section>
    )
}

export default AboutMe