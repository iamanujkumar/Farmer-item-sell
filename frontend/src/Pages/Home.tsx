import Chatbot from "../components/ChatBot/Chatbot"
import cover from '../assets/banner.jpg'
import Category from "../components/Category/Category"
import TripleCard from "../components/TripleCard/TripleCard"
import AboutSection from "../components/AbousUs/AboutSection"
import SummarySection from "../components/Summery/SummarySection"

const Home = () => {
  return (
    <div>
      <Chatbot/>
      <img src={cover} alt="" />
      
      <Category/>
      hii
      <div>
      <SummarySection/>
      </div>
    </div>
  )
}

export default Home
