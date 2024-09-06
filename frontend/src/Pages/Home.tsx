import Chatbot from "../components/ChatBot/Chatbot"
import Category from "../components/Category/Category"
import HeroSection from "./Hero/HeroSection"
import SummarySection from "../components/Summery/SummarySection"
import BusinessComponent from "../components/BusinessComponent/BusinessComponent"

const Home = () => {
  return (
    <div>
      <Chatbot/>
      {/* <img src={cover} alt="" /> */}
      <HeroSection/>
      <Category/>
      <SummarySection/>
     
    </div>
  )
}

export default Home
