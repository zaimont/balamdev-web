import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>

    <Navbar />
   <main className="min-h-screen overflow-hidden bg-black text-white">
    <section className="flex min-h-screen items-center justify-center px-6 pt-32">
      <div className='mx-auto max-w-4xl text-center'>
        <p className='mb-6 inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-300'>
          Desarrollo de software a la medida
        </p>


        <h1 className='text-6xl font-bold tracking-tight sm:text-7xl'>
          Software que hace 
          <br />
          <span className="text-brand-500">avanzar tu negocio</span>
          </h1>

        <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400'>
          Diseñamos y desarrollamos software a la medida para
  automatizar procesos, conectar equipos y convertir ideas
  en soluciones digitales que generan resultados.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contacto" className="rounded-full bg-brand-600 px-7 py-3.5 font-semibold transition hover:bg-brand-500">
          Hablemos
          </Link>

          <Link href="/proyectos" className="rounded-full border border-zonc-700 px-7 py-3.5 font-semibold transition hover:border-zinc-500">
          Ver proyectos
          </Link>
        </div>


      </div>
      
    </section>

   </main>
   </>
  );
}
