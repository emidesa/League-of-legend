import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Navbar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import ChampionsPage from './Pages/ChampionsPage';
import LorePage from './Pages/LorePage';
import LorePageBis from './Pages/LorePageBis';
import RelationsPage from './Pages/RelationsPage';




function App() {

  return <>
  <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/HomePage' element={<HomePage/>}/>
  <Route path='/ChampionsPage' element={<ChampionsPage/>}/>
  <Route path='/LorePage/:id' element={<LorePage/>}/>
  <Route path='/LorePageBis/' element={<LorePageBis/>}/>
  <Route path='/RelationsPage' element={<RelationsPage/>}/>

  
</Routes>

</BrowserRouter>
  </>
}

export default App

