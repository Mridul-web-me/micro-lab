import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import TimeTable from './Pages/Home/TimeTable/TimeTable';
import NotFound from './Pages/NotFound/NotFound';
import Top from './Pages/Home/Top/Top';
import Footer from './Pages/Home/Footer/Footer';
import Contact from './Pages/Home/Contact/Contact'
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Nav from './Pages/Home/Nav/Nav';
import Services from './Pages/Home/Services/Services';
import Details from './Pages/Details/Details';
import About from './Pages/Home/About/About'



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Top></Top>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route exact path="/testimonials">
              <Testimonials></Testimonials>
            </Route>
            <PrivateRoute exact path="/timetable">
              <TimeTable></TimeTable>
            </PrivateRoute>
            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/details/:serviceId">
              <Details></Details>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
