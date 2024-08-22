import NavBar from '@/components/Navbar/navbar';
import Hero from '@/components/Hero/hero';
import Services from '@/components/Services/services';
import About from '@/components/About/about';
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
