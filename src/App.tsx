import "./styles/app.scss"
import Header from './Header'
import Body from './Body'
import Lenis from '@studio-freight/lenis'
import {useEffect} from 'react'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: .8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div className='app'>
    <Header/>
    <Body />
  </div>
}

export default App
