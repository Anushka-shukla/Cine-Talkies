import StringConstants from './assets/StringConstants';
import Header from './GlobalComponent/Header';
import Footer from './GlobalComponent/Footer';
import './GlobalComponent/style.css';
import Heading from './GlobalComponent/Heading';
import FilmList from './Screens/FilmList';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">

      <Header text={StringConstants.heading} > </Header>

      <Heading />

      <Provider store={store} >
        <FilmList />
      </Provider>

      <Footer text={StringConstants.footnote} />
    </div>
  )
}

export default App;