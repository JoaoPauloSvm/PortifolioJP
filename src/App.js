import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/nav';
import Conteudo from './components/conteudo';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
     <Nav/>
     <Routes>
      <Route path = "/" exact element = {<Conteudo teste = "Idioma em Português"/>}/>
      <Route path = "/eng"  element = {<Conteudo teste = "Language in English"/>}/>
     </Routes>
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
