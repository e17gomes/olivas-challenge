import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SobreTeste from "@/components/layout/Main";
import Performance from "@/components/layout/Performance";
import SEO from "@/components/layout/SEO"


export default function Home() {
  return (
    <>
    <Header/>
    <SobreTeste/>
    <SEO/>
    <Performance/>
    <Footer/>
    </>
  );
}
