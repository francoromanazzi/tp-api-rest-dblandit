import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Navbar from './components/layout/Navbar';
import Cursos from './components/cursos/Cursos';
import Landing from './components/landing/Landing';
import Login from './components/login/Login'
import AgregarCurso from './components/cursos/agregarCurso/AgregarCurso'

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Container maxWidth="sm">
            <Route exact path="/" component={Landing}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/cursos" component={Cursos}/>
            <Route exact path="/cursos/nuevo" component={AgregarCurso}/>
          </Container>
        </div>
      </Router>
  );
}

export default App;