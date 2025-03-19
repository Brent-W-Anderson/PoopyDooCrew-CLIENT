import { Link, useLocation } from 'react-router-dom'
import ROUTES from '../../config/routes'
import style from './Navbar.module.scss'

const Navbar = () => {
    const location = useLocation()

    if ( location.pathname === ROUTES.LOGIN ) {
        return null
    }

    return (
        <>
            <div className={style.bar}>
                (123) 456-7890
                &nbsp; | &nbsp;
                PoopyDoo-Crew@gmail.com
            </div>

            <div className={style.nav}>
                <ul>
                    <Link
                        to={ROUTES.HOME}
                        className={`${location.pathname === ROUTES.HOME
                            ? style.selected : ''} 
                            ${style.logo}`}
                    >
                        <div>
                            <h1>
                                POOPY-DOO <br />
                                CREW
                            </h1>
                        </div>
                    </Link>

                    <div className={style.links}>
                        {Object.entries( ROUTES )
                            .filter( ( [key] ) => key !== 'LOGIN' )
                            .map( ( [key, path] ) => (
                                <li key={key}>
                                    <Link
                                        to={path}
                                        className={location.pathname === path
                                            ? style.selected : ''}
                                    >
                                        <h2>{key.replace( '_', ' ' )}</h2>
                                    </Link>
                                </li>
                            ) )}
                    </div>

                    <Link
                        to={ROUTES.LOGIN}
                        className={`${location.pathname === ROUTES.LOGIN
                            ? style.selected : ''} 
                            ${style.login}`}
                    >
                        <h2> LOGIN </h2>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar