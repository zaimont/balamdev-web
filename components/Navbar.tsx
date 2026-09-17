import Link from "next/link";

const links = [
    {href: "#servicios", label: "Servicios"},
    { href: "#soluciones", label: "Soluciones"},
    { href: "#proyectos", label: "Proyectos"},
    { href: "#nosotros", label: "Nosotros"}

]

export default function Navbar(){
    return(
        <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/70 bg-black/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <Link href="/" className="text-2xl font-bold tracking-tight">
                Balam<span className="text-brand-500">Dev</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    
                    {links.map((link) => (
                        <a 
                        key={link.href} 
                        href={link.href}
                        className="text-sm text-zinc-400 transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a href="mailto:balamdevs@gmail.com" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-brand-500">
                        Hablemos
                    </a>

                </div>

            </nav>

        </header>
    )
}