import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, Link } from "@remix-run/react"
import styles from './styles/index.css'
import Header from "./components/header"
import Footer from "./components/footer"
import { useEffect, useState } from "react"

export function meta() {
    return [
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width,initial-scale=1'
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        }
    ]
}

export default function App() {
    const [carrito, setCarrito] = useState([])

    useEffect(() => {
        if (carrito?.length !== 0) {
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
    }, [carrito]);
     
    useEffect(() => {
        const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
        setCarrito(carritoLS);
    }, []);

    const agregarCarrito = guitarra => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }

                return guitarraState
            })

            setCarrito(carritoActualizado)
        } else {
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }

            return guitarraState
        })

        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)

        carritoActualizado.length === 0 && localStorage.setItem('carrito', '[]');

        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }} />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />

                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export function CatchBoundary() {
    const error = useRouteError()

    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-enlace" to='/'>Página Principal</Link>
        </Document>
    )
}

export function ErrorBoundary() {
    const error = useRouteError()

    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-enlace" to='/'>Página Principal</Link>
        </Document>
    )
}