import React from 'react';
import './App.css';
import  {Footer} from './components/footer/footer.component';
import  {Navbar} from './components/Navbar/navbar.component';
import  {Description} from './components/Description/description.component';
import  {Product} from './components/Product/product.component';
import  {Segment} from './components/Segment/segment.component';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Description/>
      <Product/>
      <Segment/>
      <Footer/>
    </div>
  );
}

export default App;
