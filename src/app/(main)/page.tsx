import Image from "next/image";
import Navbar from "./_components/Navbar";
import Landingpage from "./_components/Landingpage";
import Footer from "./_components/Footer";

export default function Home() {
  return (
   <>
   <div>
   <Navbar/>
   </div>
  <main>
    <Landingpage/>
  </main>
  <div>
    <Footer/>
  </div>
   </> 
  )
}
