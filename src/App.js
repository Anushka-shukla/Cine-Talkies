import StringConstants from './assets/StringConstants';
import Header from './GlobalComponent/Header';
import Footer from './GlobalComponent/Footer';
import './GlobalComponent/style.css';
import Heading from './GlobalComponent/Heading';
import FilmList from './Screens/FilmList';

function App() {
  return (
    <div className="App">
      <Header text = {StringConstants.heading}  />
      <Heading />
      <FilmList />
      <Footer text={StringConstants.footnote} />
    </div>
  )
}

export default App;

