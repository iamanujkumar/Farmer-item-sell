import Chatbot from "../components/ChatBot/Chatbot"
import cover from '../assets/banner.jpg'
import Category from "../components/Category/Category"
import HeroSection from "./Hero/HeroSection"

const Home = () => {
  return (
    <div>
      <Chatbot/>
      {/* <img src={cover} alt="" /> */}
      <HeroSection/>
      
      <Category/>
     
    </div>
  )
}

export default Home
