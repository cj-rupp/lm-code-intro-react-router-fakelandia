import Home from './Home';
import Confession from './Confession';
import Misdemeanour from './Misdemeanour';
import NotFound from './NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router: React.FC = () =>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/confession' element={<Confession/>}/>
        <Route path='/Misdemeanour' element={<Misdemeanour/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>