import {BrowserRouter, Routes,Route} from "react-router-dom"; 
import Listing from 'Pages/Listagem';
import Form from 'Pages/Formulario';
import NavBar from "components/NavBar";

function App () {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Listing/>} />
    <Route path="/Form">
      <Route path=":movieId" element={<Form/>} />
    </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
