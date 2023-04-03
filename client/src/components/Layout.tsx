import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const Layout: React.FC = () => (
    <>
      <Header />
      <main className='layoutMain'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
  
  export default Layout;