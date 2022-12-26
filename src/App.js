
import './App.css';
import NavBar from './components/NavBar/NavBar';
import  Carousel from './components/Carousel/Carousel';
import {Routes,Route, Outlet} from 'react-router-dom'
import Navigation from './components/SideNavigation/Navigation';
import ShowCatProduct from './components/Categories/ShowCatProduct';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div className="App">
      <NavBar/>
      < Carousel/>
      
      <section className='mainSection'>
          <div className="sideNavigation">
              <Navigation />
          </div>
          <div className="categoryShowPart">
            <Routes>
                <Route path='/' >
                  <Route path='electronics' element={<ShowCatProduct categoryName={'electronics'}/>}></Route>
                  <Route path='jewelery' element={<ShowCatProduct categoryName={'jewelery'}/>}></Route>
                  <Route path='mensclothing' element={<ShowCatProduct categoryName={  `men's clothing`}/>}></Route>
                  <Route path='womensclothing' element={<ShowCatProduct categoryName={`women's clothing`}/>}></Route>
                  <Route path='/cart' element={<Cart />}></Route>
                </Route>


              </Routes>
              
              <Outlet className='category'/>
          </div>
      </section>
    </div>
  );
}

export default App;
