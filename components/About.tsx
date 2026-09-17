
export default function About(){
    return(
        <section id="nosotros" className="border-t border-zinc-900  bg-black px-6 py-32">
            <div className="mx-auto max-w-7xl">

                <div className="grid-gap-16 lg:grid-cols-2 lg:items-center">

                    {/* texto */}
                    <div >
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
                            Nosotros
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                            Tecnología con propósito.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-zinc-400">
                            En BalamDev desarrollamos soluciones digitales pensadas para mejorar la forma en que trabajan las empresas
                        </p>

                        <p className="mt-5 leading-7 text-zinc-400">
                            Combinamos desarrollo de software, diseño y automatización para convertir procesos complejos en herramientas simples de utilizar.
                        </p>
                    </div>

                    {/* principios */}
                    <div className="mt-16 grid gap-4 sm:grid-cols-2">

                        <div  className="rounded-2xl border border-zinc-500 bg-zinc-950 p-6">
                            <p  className="text-2xl font-bold text-brand-400">
                                01
                            </p>
                            <h3 className="mt-4 text-lg font-semibold">
                                Soluciones a medida
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-300">
                                Diseñamos herramientas al rededor de las necesidades de cada negocio.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-500 bg-zinc-950 p-6">

                            <p className="text-2xl font-bold text-brand-400">
                                02
                            </p>

                            <h3 className="mt-4 text-lg font-semibold">
                                Tecnología util
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-300">
                                La tecnologia debe simplificar procesos y facilitar el trabajo
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-500 bg-zinc-950 p-6">
                            <p className="text-2xl font-bold text-brand-400">
                                03
                            </p>

                            <h3 className="mt-4 text-lg font-semibold">
                                Pensado para crecer
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-300">
                                Construimos soluciones que pueden evolucionar junto con tu negocio
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-500 bg-zinc-950 p-6">
                            <p className="text-2xl font-bold text-brand-400">
                                04
                            </p>

                            <h3 className="mt-4 text-lg font-semibold">
                                Acompañamiento
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-300">
                                Desarrollo, soporte y mantenimiento para que no estés solucion
                                despues de lanzar tu solución.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}