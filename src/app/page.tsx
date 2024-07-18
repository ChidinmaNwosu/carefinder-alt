import NavBar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Footer from '@/components/footer';


export default function Home() {
  return (
   <div>
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <Footer/>
   </div>
  );
}
