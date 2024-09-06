import Chatbot from "../components/ChatBot/Chatbot"
import cover from '../assets/banner.jpg'
import Category from "../components/Category/Category"
import Discount from "../components/Discount/Discount"
import BusinessComponent from "../components/BussinessComponent/BussinessComponent"
import RecommendationProducts from "../components/Recomendation/recommendedProduct"

const Home = () => {
  return (
    <div>
      <Chatbot/>
      <img src={cover} alt="" />
      
      <Category/>
      <Discount/>
      <BusinessComponent/>
      <RecommendationProducts/>
      hii
    </div>
  )
}

export default Home
