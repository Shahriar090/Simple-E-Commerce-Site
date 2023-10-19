import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div id='root'>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;