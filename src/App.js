import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './fonts.css';
import Home from './Component/Home';
import Layout from './Component/Layout/Layout';

function App() {
  return (
    <div className="App font-[Outfit]">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/aboutus' element={<Home />}></Route>
            <Route path='/rules' element={<Home />}></Route>
            <Route path='/programs' element={<Home />}></Route>
            <Route path='/membership' element={<Home />}></Route>
            <Route path='/testimonials' element={<Home />}></Route>
            <Route path='/thesumproom' element={<Home />}></Route>
            <Route path='/shopingcart' element={<Home />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
