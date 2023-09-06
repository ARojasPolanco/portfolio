const Modal = ({ setShowModal, showModal }) => {

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <section className={`w-[300px] h-[400px] mx-auto bg-primary-100 border-[1px] border-light-gray rounded-2xl flex flex-col gap-6 justify-center items-center p-2 absolute left-0 right-0 z-50 ${showModal ? 'bottom-6' : '-bottom-full'} transition-all duration-150`}>
            <div className="h-[150px] aspect-square">
                <img src="/images/check.png" alt="" />
            </div>
            <article className="text-xl text-white font-montserrat text-center">
                <h2 className="mb-4">El correo se ha enviado correctamente</h2>
                <p className="text-sm">Gracias por comunicarte conmigo, te contestare con brevedad</p>
            </article>
            <article>
                <button onClick={handleCloseModal} className="bg-bg-100 p-2 px-4 text-white rounded-md">Cerrar</button>
            </article>
        </section>
    )
}

export default Modal