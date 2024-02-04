import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Header from '../Pages/components/Header/Header';
import Footer from '../Pages/components/Footer/Footer';

const Main = () => {
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;