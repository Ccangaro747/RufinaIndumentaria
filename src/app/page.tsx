import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

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
        <section className="py-20 flex flex-col items-center md:flex-row md:items-start">
          <div className="text-center md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Colección Verano</h1>
            <p className="text-xl mb-6">
            </p>
            <div className="flex flex-col md:flex-row justify-center md:space-x-4">
              <Button className="bg-black text-white mb-4 md:mb-0">
                Ver Colección
              </Button>
              <Button className="bg-white text-black border border-black">
                Contactar Ventas
              </Button>
            </div>
          </div>
          <div className="grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-1/2 flex">
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
              <h3 className="text-xl font-bold">Product 3</h3>
              <p className="text-gray-500">Description of Product 3</p>
              <Button className="mt-4 bg-black text-white">View Details</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Showroom: Descubre la Última Colección de Rufina</h2>
          <p className="mt-4 text-xl">
            Explora las últimas tendencias y piezas imprescindibles de la colección de verano de Rufina. Cantidades
            limitadas disponibles.
          </p>
          <Button className="mt-6" variant="default">
            Ver Colección
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <Input placeholder="Buscar por nombre" type="text" />
            <Input placeholder="Precio máximo" type="text" />
            <Select>
              <SelectTrigger id="clothing-type">
                <SelectValue placeholder="Tipo de prenda" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="camisetas">Camisetas</SelectItem>
                <SelectItem value="pantalones">Pantalones</SelectItem>
                <SelectItem value="vestidos">Vestidos</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="default">Buscar</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <Image
                  alt="Product image"
                  className="w-full h-auto"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Nombre del Producto</h3>
                <p className="text-gray-500">Descripción breve del producto.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">$Precio</span>
                <Button variant="secondary">Ver Detalles</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
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
