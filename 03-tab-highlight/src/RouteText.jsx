import { Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'

const RouteText = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/features" element={<Features/>}/>
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
    )
}

export default RouteText