import { NavLink } from "react-router-dom";
import './App.css';

const Nav: React.FC = () =>
    <>
        <nav>
            <ul className="NavUlFlex">
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/confession">Confessions</NavLink>
                </li>
                <li>
                    <NavLink to="/misdemeanour">Midemeanours</NavLink>
                </li>
            </ul>
        </nav>
    </>

export default Nav;