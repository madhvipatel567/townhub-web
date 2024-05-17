import './App.css';
import Header from './Componants/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homebanner from './Componants/Home-banner/HomeBanner';
import Footer from './Componants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Homebanner />
      <Footer />
    </div>
  );
}

export default App;
