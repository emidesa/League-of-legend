import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Navbar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import ChampionsPage from './Pages/ChampionsPage';
import LorePage from './Pages/LorePage';
import LorePageBis from './Pages/LorePageBis';
import ItemsPage from './Pages/ItemsPage';
import ItemDetailsPage from './Pages/ItemDetailsPage';
import SummonerPage from './Pages/Summonerpage';



function App() {

  return <>
  <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/HomePage' element={<HomePage/>}/>
  <Route path='/ChampionsPage' element={<ChampionsPage/>}/>
  <Route path='/LorePage/:id' element={<LorePage/>}/>
  <Route path='/LorePageBis' element={<LorePageBis/>}/>
  <Route path='/SummonerPage' element={<SummonerPage/>}/>
  <Route path='/items' element={<ItemsPage/>}/>
  <Route path='/item/:name' element={<ItemDetailsPage/>}/>

  
</Routes>

</BrowserRouter>
  </>
}

export default App

