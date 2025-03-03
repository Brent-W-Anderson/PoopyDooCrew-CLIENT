import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import ROUTES from '../config/routes'
import Pricing from './Pricing/Pricing'
import Services from './Services/Services'
import Faq from './Faq/Faq'
import Contact from './Contact/Contact'

// TODO: add lazy loading for each page.

const Pages = () => (
    <div className="pages">
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

            <Route
                path={ROUTES.LOGIN}
                element={<Login />}
            />
        </Routes>
    </div>
)

export default Pages