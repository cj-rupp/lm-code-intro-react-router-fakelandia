import { NavLink } from "react-router-dom";
import '../App.css';

const Nav: React.FC = () =>
    <>
        <nav>
            <ul className="NavUlFlex">
                <li>
                    <ul className="NavInnerULFlex">
                        <li>FAKELANDIA</li>
                        <li>JUSTICE</li>
                        <li>DEPARTMENT</li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/misdemeanour">Misdemeanours</NavLink>
                </li>
                <li>
                    <NavLink to="/confession">Confess to Us</NavLink>
                </li>
            </ul>
        </nav>
    </>

export default Nav;