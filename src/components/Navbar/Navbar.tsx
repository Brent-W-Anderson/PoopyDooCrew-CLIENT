import { Link, useLocation } from 'react-router-dom'
import ROUTES from '../../config/routes'
import styles from './Navbar.module.scss'

const Navbar = () => {
    const location = useLocation()

    return (
        <div className={styles.bar}>
            <ul>
                {Object.entries( ROUTES ).map( ( [key, path] ) => (
                    <li key={key}>
                        <Link
                            to={path}
                            className={location.pathname === path
                                ? styles.selected : ''}
                        >
                            {key.replace( '_', ' ' )}
                        </Link>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

export default Navbar