import Quote from "@/components/Quote"
import { Navbar } from "../components/Navbar"
import Footer from "@/components/Footer"



export const Home =()=>{

    return <div className="h-screen flex flex-col">
        <Navbar/>
        <Quote/>
        <Footer/>
    </div>
}