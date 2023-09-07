import emailjs from '@emailjs/browser'
import { Element } from 'react-scroll';

const Contact = ({ setShowModal }) => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dfq97pg', 'template_4m0dk7j', e.target, 'ac9w6BdON9jxsQ2OZ')
            .then((result) => {
                setShowModal(result.text)
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className='flex flex-col items-center p-2'>
            <Element name={'Contact'} />
            <article className="font-inter text-xl text-white font-medium flex items-center gap-1">
                <h2 className="text-very-light-blue p-2">#</h2>
                <h2>Contacto</h2>
                <div className="h-[2px] w-[150px] bg-white/70"></div>
            </article>
            <form onSubmit={sendEmail} className='flex flex-col p-2 gap-2 bg-light-gray/20 w-[300px] border-[1px] border-light-gray rounded-md min-[645px]:w-[630px]'>
                <label className='font-montserrat text-white'>Nombre</label>
                <input autoComplete='off' type="text" name="user_name" className='bg-light-gray text-white outline-none' />
                <label className='font-montserrat text-white'>Email</label>
                <input autoComplete='off' type="email" name="user_email" className='bg-light-gray text-white outline-none' />
                <label className='font-montserrat text-white'>Mensaje</label>
                <textarea name="message" rows={10} cols={25} className='resize-none bg-light-gray text-white outline-none' />
                <input type="submit" value="Enviar" className='bg-light-gray w-[150px] rounded-md text-white font-montserrat cursor-pointer p-1 border-[1px] outline-none' />
            </form>
            <article className='flex items-center justify-center gap-8 text-[40px] text-white'>
                <div className='hover:scale-110 cursor-pointer'>
                    <i className='bx bxl-whatsapp'></i>
                </div>
                <div className='hover:scale-110 cursor-pointer'>
                    <i className='bx bxl-github'></i>
                </div>
                <div className='hover:scale-110 cursor-pointer'>
                    <i className='bx bxl-linkedin' ></i>
                </div>
            </article>
        </section>
    )
}

export default Contact