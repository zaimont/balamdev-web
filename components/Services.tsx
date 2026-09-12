import Link from "next/link";

export default function Services(){
    return(
        <section id="servicios" className="border-t border-zinc-900 bg-zinc-950 px-6 py-32">

            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-2xl"> 
                    <p className="text-sm font-medium uppercase tracking-[0.3rem] text-brand-400">
                        Lo que hacemos
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Tecnología diseñada para hacer crecer tu negocio.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Desarrollamos herramientas digitales que se adaptan a la forma 
                        en que trabaja tu empresa, no al revés. 
                    </p>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                        <article className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-black p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40">
                            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-600/10 blur-3xl transition duration-500 group-hover:bg-brand-500/20 " />

                            
                            <p className="text-sm font-semibold tracking-widest text-brand-400">
                                01
                            </p>

                            <h3 className="mt-6 text-2xl font-semibold tracking-tight transition group-hover:text-brand-300">
                                Desarrollo a medida
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-400 ">
                                Sistemas y plataformas construidos a la medida para 
                                automatizar procesos y resolver necesidades específicas
                            </p>

                            <Link href="/servicios" className="mt-8 inline-flex text-sm font-semibold text-white transition  duration-300 group-hover:translate-x-1 group-hover:text-brand-400">
                            Conocer servicio
                            </Link>

                        </article>


                        <article className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-black p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40">
                            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-600/10 blur-3xl transition duration-500 group-hover:bg-brand-500/20" />
                            <p className="text-sm font-semibold tracking-widest  text-brand-400">
                                02
                            </p>

                            <h3 className="mt-6 text-2xl font-semibold tracking-tight transition group-hover:text-brand-300">
                                Soluciones para tu negocio
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-400 ">
                                ¿Tu operación está dispersa entre Excel, mensajes y procesos manuales?
                            </p>

                            <Link href="/servicios" className="mt-8 inline-flex text-sm font-semibold text-white transition duration-300 group-hover:translate-x-1 group-hover:text-brand-400 ">
                            Conocer servicio
                            </Link>

                        </article>

                        <article className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-black p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40">
                            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl  bg-brand-600/10 transition duration-500 group-hover:bg-brand-500/20" />
                            <p className="text-sm font-semibold tracking-widest text-brand-400">
                                03
                            </p>

                            <h3 className="mt-6 text-2xl font-semibold tracking-tight transition group-hover:text-brand-300">
                                Automatización
                            </h3>

                            <p className="mt-4 leading-7 text-zinc-400 ">
                                Convertimos tareas repetitivas en procesos digitales
                                más rápidos, ordenados y eficientes.
                            </p>

                            <Link href="/servicios" className="mt-8 inline-flex text-sm font-semibold text-white transition duration-300 group-hover:translate-x-1 group-hover:text-brand-400 ">
                            Conocer servicio
                            </Link>

                        </article>


                    </div>

                </div>
            </div>

        </section>
    );
}