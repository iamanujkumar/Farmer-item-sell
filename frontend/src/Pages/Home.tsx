import Chatbot from "../components/ChatBot/Chatbot"
import Category from "../components/Category/Category"
import HeroSection from "./Hero/HeroSection"
import SummarySection from "../components/Summery/SummarySection"
import BusinessComponent from "../components/BusinessComponent/BusinessComponent"
import RecommendationProducts from "../components/Recomendation/recommendedProduct"
import Discount from "../components/Discount/Discount"

const Home = () => {
  return (
    <div>
      <Chatbot/>
      {/* <img src={cover} alt="" /> */}
      <HeroSection/>
      <Category/>
      <RecommendationProducts/>
      <SummarySection/>
     <Discount/>
    </div>
  )
}

export default Home
