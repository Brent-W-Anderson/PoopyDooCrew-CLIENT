import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={ styles.bar }>
            <ul>
                <li>
                    <a href="/"> Home </a>
                </li>

                <li>
                    <a href="/login-signup"> Login/Signup </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar