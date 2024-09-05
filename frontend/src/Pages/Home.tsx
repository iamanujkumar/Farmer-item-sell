import Chatbot from "../components/ChatBot/Chatbot"
import cover from '../assets/banner.jpg'
import Category from "../components/Category/Category"

const Home = () => {
  return (
    <div>
      <Chatbot/>
      <img src={cover} alt="" />
      
      <Category/>
      hii
    </div>
  )
}

export default Home
