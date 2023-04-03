import Home from './Home';
import Confession from './Confession';
import Misdemeanour from './Misdemeanour';
import NotFound from './NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router: React.FC = () =>
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/confession' element={<Confession />} />
            <Route path='/misdemeanour' element={<Misdemeanour />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
