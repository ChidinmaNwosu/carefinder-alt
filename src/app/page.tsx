import NavBar from '@/components/navbar';
import Hero from '@/components/Hero/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Footer from '@/components/Footer/footer';
import Blog from '@/components/Blog/blog';
import HashElement from '@/hashElement/hashElement';
import Contact from '@/components/Contact/contact';

export default function Home() {
  return (
   <div>
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <Contact/>
    <Blog/>
    <Footer/>
    <HashElement/>
   </div>
  );
}
