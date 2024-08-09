
import Landingpage from "./_components/Landingpage";
import Footer from "./_components/Footer";
import { GlobeDemo } from "./_components/earth";

export default function Home() {
  return (
   <>
   <div>
   </div>
  <main className="flex flex-row h-[100vh]">
    <Landingpage/>
    <GlobeDemo/>
  </main>
  <div>
    <Footer/>
  </div>
   </> 
  )
}
