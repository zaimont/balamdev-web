export default function Contact(){
    return(
        <section id="contacto" className="border-t border-zinc-900 px-6 py-32">
            <div className="mx-auto max-w-5xl">

                <div className="rounded-3xl border border-zinc-800  bg-black p-8 text-center sm:p-12 lg:p-16">

                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
                        Hablemos
                    </p>

                    <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl ">
                        ¿Tienes un proyecto en mente?
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                        Cuéntanos qué necesitas y exploremos juntos cómo la Tecnologíapuede ayudarte a mejorar tu negocio.
                    </p>

                    <a href="mailto:balamdevs@gmail.com" className="mt-10 inline-flex rounded-full bg-brand-600 px-7 py-3.5 font-semibold transition hover:bg-brand-500">
                        Contactar a BalamDev
                    </a>
                </div>
            </div>

        </section>
    )
}