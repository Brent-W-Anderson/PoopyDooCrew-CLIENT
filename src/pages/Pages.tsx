import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ROUTES from '../config/routes'
import Navbar from '../components/Navbar/Navbar'
import { usePagesContext } from './PagesContext'
import { CircleSpinner } from '../components/Spinner/Spinner'
import Login from './Login/Login'

// Lazy-loaded pages.
const Home = lazy( () => import( './Home/Home' ) )
const Pricing = lazy( () => import( './Pricing/Pricing' ) )
const Services = lazy( () => import( './Services/Services' ) )
const Faq = lazy( () => import( './Faq/Faq' ) )
const Contact = lazy( () => import( './Contact/Contact' ) )

const Pages = () => {
    const location = useLocation()
    const { loginState } = usePagesContext()
    const [isLoginClicked] = loginState

    return (
        <>
            <Navbar />

            <div className="pages">
                <Suspense
                    key={location.pathname}
                    fallback={<CircleSpinner />}
                >
                    <Routes>
                        <Route
                            path={ROUTES.HOME}
                            element={<Home />}
                        />
                        <Route
                            path={ROUTES.SERVICES}
                            element={<Services />}
                        />
                        <Route
                            path={ROUTES.PRICING}
                            element={<Pricing />}
                        />
                        <Route
                            path={ROUTES.FAQ}
                            element={<Faq />}
                        />
                        <Route
                            path={ROUTES.CONTACT}
                            element={<Contact />}
                        />
                    </Routes>
                </Suspense>
            </div>

            {isLoginClicked && <Login />}
        </>
    )
}

export default Pages