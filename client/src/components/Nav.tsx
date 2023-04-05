import { NavLink } from "react-router-dom";
import '../App.css';


const pageLinkTable = new Map([['home', 'Home'],
['misdemeanour', 'Misdemeanours'],
['confession', 'Confess to Us']]);

const linkedPages: Array<string> = ["home", "misdemeanour", "confession"];

const Nav: React.FC = () => {


    const links: Array<React.ReactNode> = linkedPages.map((page) =>
        <>
            <li>
                <NavLink to={'/' + page}
                    style={({ isActive }) =>
                        isActive ? { color: 'darkmagenta' } :
                            { color: 'slategray' }}>
                    {pageLinkTable.get(page)}</NavLink>
            </li>
        </>);

    return (
        <>
            <nav>
                <ul className="NavUlFlex">
                    {...links}
                </ul>
            </nav>
        </>
    )
}

export default Nav;