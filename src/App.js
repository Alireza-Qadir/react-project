import React , {Suspense}  from 'react';
import Navbar from './components/navbar/navbar';
import {Route , Routes} from 'react-router-dom';
// import Home from './component-main/home/home';


const Home = React.lazy( ()=> import('./component-main/home/home'));
const Product = React.lazy( ()=> import('./component-main/product/product'));


function App() {


  return (
   
    <Suspense fallback={<div>Loading....</div>}>
    <Navbar />

    <Routes>

     <Route exact path='/' element={<Home />} />
     <Route exact path='/product' element={<Product />} />
    </Routes>
  </Suspense>
  )
  
}

export default App;
