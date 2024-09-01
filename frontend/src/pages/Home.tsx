import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Quote } from "../components/Quote"


export const Home =()=>{

    return <div className="h-screen flex flex-col">
        <Navbar/>
        <Quote/>
        <Footer/>
    </div>
}