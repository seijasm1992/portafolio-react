import Header from './header';
import Hero from './hero';
import Main from './main';
import Profile from './profile';
import Slides from './slides';
import './output.css';
import Book from './book';
import Footer from './footer';
function App() {
  return (
    <div className="App min-h-screen h-full bg-[#FFF7F0]">
      <Header />
      <Hero />
      <Main />
      <Profile />
      <Slides />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
