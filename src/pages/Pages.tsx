import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ROUTES from '../config/routes'
import Navbar from '../components/Navbar/Navbar'
import { PagesProvider } from './PagesContext'

// Lazy-loaded components
const Home = lazy( () => import( './Home/Home' ) )
const Pricing = lazy( () => import( './Pricing/Pricing' ) )
const Services = lazy( () => import( './Services/Services' ) )
const Faq = lazy( () => import( './Faq/Faq' ) )
const Contact = lazy( () => import( './Contact/Contact' ) )

// TODO: add <Spinner /> component instead of using Loading...
// TODO: add suspense/fallback with <Spinner /> to the Navbar also.
const Pages = () => {
    const location = useLocation()

    return (
        <PagesProvider>
            <Navbar />

            <div className="pages">
                <Suspense
                    key={location.pathname}
                    fallback={<div>Loading...</div>}
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
        </PagesProvider>
    )
}

export default Pages