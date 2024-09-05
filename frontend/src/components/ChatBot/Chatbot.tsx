
import { useState } from 'react';
import { FaRobot } from 'react-icons/fa'; 
import { AiOutlineClose } from 'react-icons/ai'; 
import ChatAI from '../../GenAI_Chatbot/Chatbot'

const Chatbot = () => {
    const toggleChatbot = () => {
        setChatbotVisible(!chatbotVisible);
      };
      const [chatbotVisible, setChatbotVisible] = useState<boolean>(false);
  return (
    <div>
      <div 
        className="fixed bottom-10 right-6 bg-blue-600 p-4 rounded-full shadow-lg cursor-pointer z-50"
        onClick={toggleChatbot}
      >
        <FaRobot className="text-gray-950 w-10 h-10" />
      </div>

     
      {chatbotVisible && (
        <div className="fixed bottom-50 right-6 w-80 h-46 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
          <div className="relative h-full">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleChatbot}
            >
              <AiOutlineClose className="w-6 h-20" />
            </button>
            <ChatAI/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot
