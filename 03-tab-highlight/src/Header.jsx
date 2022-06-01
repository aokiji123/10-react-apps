import { NavLink } from 'react-router-dom'
import Tab from './components/Tab'
import style from './App.module.css'

const Header = () => {
    return (
        <>
            <Tab>
                <NavLink className={tab => tab.isActive ? style.active : style.link} to="/">Home</NavLink>
            </Tab>
            <Tab>
                <NavLink className={tab => tab.isActive ? style.active : style.link} to="/about">About</NavLink>
            </Tab>
            <Tab>
                <NavLink className={tab => tab.isActive ? style.active : style.link} to="/features">Features</NavLink>
            </Tab>
        </>
        
    )
}

export default Header