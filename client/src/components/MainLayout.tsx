import { NavLink, Outlet } from "react-router-dom";
const Nav = () =>
    <>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/misdemeanour'>Misdemeanour</NavLink></li>
                <li><NavLink to='/confession'>Confession</NavLink></li>
            </ul>
        </nav>
    </>

const Header = () =>
    <>
        <header>
            <Nav />
        </header>
    </>

const Footer = () =>
    <>
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="https://vitejs.dev" target="_blank">
                            <img src={viteLogo} className="logo" alt="Vite logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://reactjs.org" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
const MainLayout = () =>
    <>
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    </>

export default MainLayout;