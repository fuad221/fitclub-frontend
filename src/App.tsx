
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Join from './component/Join';
import Plan from './component/Plan'
import Programs from './component/Programs';
import Reasons from './component/Reasons';
import Testimonials from './component/Testimonials';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
