import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
    return [
        {
            title: 'GuitarLA - Sobre Nosotros',
            description: 'Venta de guitarras, blog de música'
        }
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="Imagen Nosotros" />

                <div>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vitae volutpat erat. Duis sed tellus tortor. Pellentesque urna leo, dapibus et ullamcorper ut, aliquam a leo. Aenean auctor ante eu nisl faucibus accumsan. Morbi vulputate metus a justo dictum suscipit. Mauris eleifend erat at massa cursus, at vehicula diam varius. Duis massa tortor, rutrum at neque quis, malesuada maximus leo.</p>

                    <p>Suspendisse eleifend magna at maximus faucibus. Phasellus maximus lacus mauris, in porta enim luctus sollicitudin. Quisque euismod eros ligula, nec maximus ante suscipit nec. Etiam id suscipit erat, sagittis posuere leo. Etiam vulputate, risus in malesuada commodo, odio urna venenatis enim, eget vehicula nulla mi tincidunt nulla. Morbi ac augue eget nisi mattis imperdiet.</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros