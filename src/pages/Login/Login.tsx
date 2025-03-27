import { usePagesContext } from '../PagesContext'
import style from './Login.module.scss'

// TODO: add red X for a close icon + finish form.
const Login = () => {
    const { loginState } = usePagesContext()
    const [, setIsLoginClicked] = loginState

    return (
        <div
            className={style.boxContainer}
            onClick={() => setIsLoginClicked( false )}
        >
            <div
                className={style.box}
                onClick={( e ) => e.stopPropagation()}
            >
                <h1>Login & Signup here..</h1>
            </div>
        </div>
    )
}

export default Login