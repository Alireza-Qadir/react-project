import React, {Suspense} from 'react';
import Navbar from './components/navbar/navbar';
import {Route, Routes} from 'react-router-dom';
import Footer from "./components/footer/footer";
import Loading from "./components/loading/loading";

// import Home from './-main/home/home';


const Home = React.lazy(() => import('./component-main/home/home'));
const Product = React.lazy(() => import('./component-main/product/product'));


function App() {


    return (

        <Suspense fallback={<Loading/>}>
            <Navbar/>

            <Routes>

                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/product' element={<Product/>}/>
            </Routes>
            <Footer/>
        </Suspense>
    )

}

export default App;
