import Link from 'next/link';

export default function Solutions(){
    return(
        <section id="soluciones" className="border-t border-zinc-900 bg-black px-6 py-32 ">
            <div className="mx-auto max-w 7-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
                    Soluciones
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    Una solución digital para cada etapa de tu negocio 
                </h2>

                <p className="mt-6 text-lg leading-8 text-zinc-400">
                    Desde una idea hasta una operación completa,
                    desarrollamos herramientas que se adaptan a lo que tu empresa necesita.
                </p>

            </div>

            <div className="mt-16 overflow-hidden rounded-3xl border border-zinc-950"> 
                <div className="grid lg:grid-cols-2">
                    <div className="p-8 sm:p-12 lg:p-16">
                        <p className="text-sm uppercase font-semibold upercase tracking-widest text-brand-400">
                            solución 01
                        </p>

                        <h3 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                            ERP para tu negocio
                        </h3>

                        <p className="mt-">
                            centraliza ventas, productos, inventario, provedores y 
                            operaciones en una sola plataforma
                        </p>

                        <div className='mt-8 flex flex-wrap gap-3'>
                            <span className="rounded-full border border-zinc-800 px-4 py-2 text-zinc-300">
                                Inventario
                            </span>
                            <span className='rounded-full border border-zinc-800 px-4 py-2 text-zinc-300'>
                                Ventas
                            </span>
                            <span className="rounded-full border border-zinc-800 px-4 py-2 text-zinc-300">
                                Proveedores
                            </span>
                        </div>

                        <Link href="/soluciones" className="mt-8 inline-flex font-semibold text-white transition hover:text-brand-400">
                            Conocer la solución →
                        </Link>

                    </div>

                    <div className="relative min-h-[420px] overflow-hidden border-t border-zinc-800  bg-zinc-900/60 p-6 lg:border-l lg:border-t-0">
                    
                    {/*Dashboard*/}
                    <div className="h-full rounded-2xl border border-zinc-800 bg-black p-5 shadow-2xl">

                        {/*Barra Superior*/}
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                            <p className="mt-1 text-sm font-semibold">
                                BalamERP
                            </p>
                            <p className="mt-1 font-semibold text-sm">
                                Panel general
                            </p>

                        </div>


                    </div>

                    </div>

                </div>

            </div>

            {/*otras soluciones*/}

            <div className="mt-6 grid gap-6 md:grid-cols-2">
                <article className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:translate-y-1 hover:border-brand-500/40">
                    <p className="text-sm  font-semibold tracking-widest text-brand-400 uppercase">
                        solucion 02
                    </p>

                    <h3 className="mt-5 text-2xl font-semibold tracking-tight group-hover:text-brand-300 ">
                        Aplicaciones y plataformas
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                        Sitios web y móviles diseñadas alrededor de las
                        necesidades reales de tu proyecto.
                    </p>

                    <Link href="/soluciones" className="mt-8 inline-flex font-semibold transition group-hover:text-brand-400">
                        Explorar →
                    </Link>
                </article>

                <article className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:translate-y-1 hover:border-brand-500/40">
                    <p className="text-sm font-semibold tracking-widest text-brand-400">
                        Solicion 03
                    </p>

                    <h3 className="mt-5 text-2xl font-semibold tracking-tight group-hover:text-brand-300">
                        Integraciones y automatizacion
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                        Conectamos herramientas y automatizamos procesos para reducir trabajo manual y mejorar la operación.
                    </p>

                    <Link href="/soluciones " className="mt-8 inline-flex text-sm font-semibold transition group-hover:text-brand-400">
                        Explorar →
                    </Link>
                </article>
            </div>

        </section>
    )
}