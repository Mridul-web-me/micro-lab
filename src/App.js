import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Testimonials from './Pages/Testimonials/Testimonials';
import TimeTable from './Pages/TimeTable/TimeTable';
import NotFound from './Pages/NotFound/NotFound';
import Nav from './Pages/Nav/Nav';
import Top from './Pages/Top/Top';
import Footer from './Pages/Footer/Footer';
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import Service from './Pages/Services/Service';



function App() {

  return (
    <div className="App">
      <Top></Top>

      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Service></Service>
          </Route>
          <Route path="/testimonials">
            <Testimonials></Testimonials>
          </Route>
          <Route path="/timetable">
            <TimeTable></TimeTable>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
