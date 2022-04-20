import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer';
import Main from './Main';
import Header from './Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
