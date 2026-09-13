import Link from 'next/link';

export default function Projects(){
    return(
        <section id="proyectos" className="border-t border-zinc-900 bg-zinc-950 px-6 py-32">
            <div className="mx-auto max-w-7xl">
                {/* encabezado */}
                <div className="max-w-3xl ">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
                        Proyectos
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Software creado para resolver problemas reales.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Cada proyecto combina diseño, tecnología y estrategia para
                        convertir necesidades de negocio en soluciones digitales.
                    </p>
                </div>

                {/* Proyecto destacado */}
                <article className="mt-16 overflow-hidden rounded-3xl border border-zinc-800 bg-black">
                    <div className="grid lg:grid-cols-2">

                        {/* informacion */}
                        <div className="p-8 sm:p-12 lg:p-16">
                            <p className="text-sm font-semibold tracking-widest text-brand-400 uppercase">
                                Proyecto destacado
                            </p>
                            <h3 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                                Nombre del proyecto
                            </h3>
                            <p className="mt-6 leading-8 text-zinc-400">
                                descripcion del proyecto
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300">
                                    Tecnologia usada
                                </span>
                                <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300">
                                    tecnologia usada
                                </span>
                                <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300">
                                    tecnologia usada
                                </span>
                            </div>

                            <Link href="/proyectos" className="mt-10 inline-flex font-semibold text-white transition hover:text-brand-400">
                            Ver Proyecto 
                            </Link>
                        </div>

                        {/* visual */}
                        <div className="relative min-h [420px] border-t border-zinc-800 bg-zinc-900/60 p-6 lg:border-t-0">
                            <div className="flex h-full items-center justify-center rounded-2xl border border-zinc-800 bg-black">
                                <div className="text-center">
                                    <p className="text-sm text-zinc-500">
                                        Vista previa
                                    </p>

                                    <p className="mt-2 text-2xl font-semibold text-zinc-300">
                                        nombre
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>

                {/* proyectos secundarios */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <article className="rounded-2xl border border-zinc-800 bg-black p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40 ">
                        <p className="text-sm font-semibold tracking-widest text-brand-400 uppercase ">
                            Proyecto 02
                        </p>

                        <h3 className="mt-5 text-2xl font-semibold">
                            Nombre de proyecto 
                        </h3>

                        <p className="mt-4 leading-7 text-zinc-400">
                            descripcion del proyecto
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2 ">
                            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                                tecnologia usada 
                            </span>
                            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                                tecnologia usada
                            </span>
                            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                                tecnologia usada
                            </span>

                        </div>
                        <Link href="/proyectos" className="mt-8 inline-flex text-sm font-semibold transition hover:text-brand-400">
                        Ver proyecto
                        </Link>
                    </article>

                    <article className="rounded-2xl border border-zinc-800 bg-black p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-500/40">
                        <p className="text-sm font-semibold tracking-widest text-brand-400 uppercase">
                            proyecto 03
                        </p>

                        <h3 className="mt-5 text-2xl font-semibold ">
                            nombre del proyecto
                        </h3>

                        <p className="mt-4 leading-7 text-zinc-400">
                            descripcion del proyecto
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                                tecnologia utilizada
                            </span>
                            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                                tecnologia utilizada
                            </span>
                            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                                tecnologia utilizada
                            </span>
                        </div>
                        <Link href="/proyectos" className="mt-8 inline-flex text-sm font-semibold transition hover:text-brand-400">
                            Ver Proyecto
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}