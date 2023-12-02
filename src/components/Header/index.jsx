import { NavLink } from "react-router-dom"
import css from './index.module.css'

const Header = () => {
    return (
        <nav className={css.navbar} >
            <ul className={css.navbarList}>
                <li className={css.navItem}>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    </li>
                <li className={ css.navItem}>
                    <NavLink to='/movies'>
                       Movies
                    </NavLink>
                    </li>
            </ul>
      </nav>
    
  )
}

export default Header
