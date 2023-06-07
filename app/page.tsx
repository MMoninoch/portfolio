import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='sm:hidden'>
      <br /><br /><br />
      </div>
      <Main />
      <About />
      <Skills />
    </div>
  )
}
