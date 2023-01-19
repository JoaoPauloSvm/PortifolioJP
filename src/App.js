import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/nav';
import Conteudo from './components/conteudo';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
     <Nav/>
     <Routes>
      <Route path = "/PortifolioJP" exact element = {<Conteudo/>}/>
      <Route path = "/eng"  element = {<Content/>}/>
     </Routes>
      <Routes>
      <Route path = "/PortifolioJP" exact element = {<Footer texto =  "Portifólio desenvolvido com o React e Boostrap"/>}/>
      <Route path = "/eng" element = {<Footer texto = "Portfolio developed with React and Bootstrap"/>}/>
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
