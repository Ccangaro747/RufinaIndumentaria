import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <IconoMontaña />
          <span className="sr-only">Boutique Rufina</span>
        </Link> 
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Colecciones
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Catálogo
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Nosotros
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-20 flex items-start">
          <div className="text-center w-1/2 pr-8">
            <h1 className="text-5xl font-bold mb-4">Colección Verano</h1>
            <p className="text-xl mb-6">
              Descubre las últimas tendencias y prendas de la temporada de
              Rufina. ¡Sé la primera en lucir lo más nuevo!
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-black text-white">Ver Colección</Button>
              <Button className="bg-white text-black border border-black">
                Contactar Ventas
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Product 1</h3>
              <p className="text-gray-500">Description of Product 1</p>
              <Button className="mt-4 bg-black text-white">View Details</Button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Product 2</h3>
              <p className="text-gray-500">Description of Product 2</p>
              <Button className="mt-4 bg-black text-white">View Details</Button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Product 3</h3>
              <p className="text-gray-500">Description of Product 3</p>
              <Button className="mt-4 bg-black text-white">View Details</Button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Product 4</h3>
              <p className="text-gray-500">Description of Product 4</p>
              <Button className="mt-4 bg-black text-white">View Details</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Showroom: Descubre la Última Colección de Rufina
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explora las últimas tendencias y piezas imprescindibles de la
                colección de verano de Rufina. Cantidades limitadas disponibles.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events_none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Ver Colección
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Boutique Rufina. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function IconoMontaña() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
