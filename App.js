import './App.css';
import { Nav} from './components/Navigation/Nav';
import { NavBar } from './components/Navigation/NavBar';
import { ITservices } from './components/MiddleSection/ITservices';
import { Courses } from './components/MiddleSection/courses';
import { Internship } from './components/MiddleSection/internships';
import { Phone} from './components/MiddleSection/phone';
import { Footer } from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <NavBar/>
      <ITservices/>
      <Courses/>
      <Internship/>
      <Phone/>
      <Footer/>
    </div>
  );
}

export default App;
