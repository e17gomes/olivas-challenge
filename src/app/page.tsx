import Blog from "@/components/layout/Blog";
import Footer from "@/components/layout/Footer";
import FormDesk from "@/components/layout/FormDesk";
import Header from "@/components/layout/Header";
import SobreTeste from "@/components/layout/Main";
import Performance from "@/components/layout/Performance";
import SEO from "@/components/layout/SEO";
import Floater from "@/components/ui/Floater";

Floater

export default function Home() {
  return (
    <>
    <Header/>
    <SobreTeste/>
    <SEO/>
    <Performance/>
    <Blog/>
    <FormDesk/>
    <Floater/>
    <Footer/>
    
    </>
  );
}
