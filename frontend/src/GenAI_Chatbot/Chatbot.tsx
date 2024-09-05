import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider, DefaultTheme } from 'styled-components';
import {animated } from 'react-spring';
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

import { chatSession } from './chat_utilis';


const lightTheme: DefaultTheme = {
  background: '#fafafa',
  text: '#333',
  messageBackground: '#fff',
  userMessageBackground: '#DCF8C6',
  inputBackground: '#fff',
  inputText: '#333',
  buttonBackground: '#007bff',
  buttonText: '#fff',
  buttonHoverBackground: '#0056b3',
};

const darkTheme: DefaultTheme = {
  background: '#1e1e1e',
  text: '#fff',
  msgColor:"white",
  messageBackground: '#333',
  userMessageBackground: '#3e4e59',
  inputBackground: '#333',
  inputText: '#fff',
  buttonBackground: '#555',
  buttonText: '#fff',
  buttonHoverBackground: '#777',
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface ChatContainerProps {
  theme: DefaultTheme;
}

const ChatContainer = styled(animated.div)<ChatContainerProps>`
  display: flex;
  flex-direction: column;
  height: 55vh;
  
  
  
  background: ${props => props.theme.background};
  animation: ${fadeIn} 1s ease-out;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
  overflow: hidden;
  color: ${props => props.theme.text};
`;



const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: ${props => props.theme.messageBackground};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

interface MessageProps {
  isUser: boolean;
  theme: DefaultTheme;
}

const Message = styled.div<MessageProps>`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  color: ${props => props.theme.msgColor};
  background: ${props => (props.isUser ? props.theme.userMessageBackground : props.theme.messageBackground)};
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  line-height: 27px;
  animation: ${fadeIn} 0.5s ease-out;

  /* Handling the bold text */
  b {
    font-weight: bold;
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: ${props => props.theme.inputBackground};
  color: ${props => props.theme.inputText};
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonText};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.buttonHoverBackground};
  }
`;

const ThemeToggle = styled.button`
  padding: 10px 20px;
  margin-right:220px ;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonText};
  cursor: pointer;

  &:hover {    background: ${props => props.theme.buttonHoverBackground};
  }
`;

interface MessageComponentProps {
  isUser: boolean;
  text: string;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ isUser, text }) => (
  <Message isUser={isUser} dangerouslySetInnerHTML={{ __html: text }} />
);

const ChatAI = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState(lightTheme);

  const handleThemeToggle = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      const newMessages = [...messages, { text: userMessage, isUser: true }];
      setMessages(newMessages);
      setInput('');

      try {
        const modifiedInput = `  you are  Agriculture specialist , you are friendly assistant on [Your eCommerce Platform Name]. you  can help to people with:

Product recommendations: what user looking for, and you'll suggest suitable agricultural products.
Pricing information: you can provide current market rates for various agricultural commodities based on data from https://www.commodityonline.com/hi/mandibhav and https://mandibhavtoday.net.
Purchasing process: you can  help navigating the checkout? I can guide you through each step.
Sustainable farming: Get tips and advice on eco-friendly agricultural practices.
Seasonal crop recommendations: Find out what's best to plant based on your location and time of year.
after first message from your side you have to asked about there prefered launguage , you have to ask only in first question 

Hindi
English
Punjabi
Once  user chosen language, you have to answer  questions point-by-point and handle most customer service requests. For complex issues, I'll connect you with a human agent.

**चलिए शुरू करते हैं (Chaliye Shuru Karte Hain - Let's begin)  ** (This will appear only if the user selects Hindi)

Let's get started! (This will appear only if the user selects English)

ਆਓ ਸ਼ੁਰੂ ਕਰੀਏ (Aaao Shuru Kariye - Let's begin) (This will appear only if the user selects Punjabi)
      ` + userMessage;

        const result = await chatSession.sendMessage(modifiedInput);
        const ans = await result.response.text();

        let responseArray = ans.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
          if (i === 0 || i % 2 === 0) {
            newResponse += responseArray[i];
          } else {
            newResponse += "<b>" + responseArray[i] + "</b>";
          }
        }

        let formattedResponse = newResponse.split("*").join("</br>");

        if (formattedResponse.startsWith("undefined")) {
          formattedResponse = formattedResponse.slice(9);
        }

        formattedResponse = formattedResponse.replace(/(\d\.\s)/g, "</br>$1");

        setMessages([...newMessages, { text: formattedResponse, isUser: false }]);
      } catch (error) {
        setMessages([...newMessages, { text: 'Something went wrong. Please try again.', isUser: false }]);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatContainer>
        <Header>
          <Title> I am Your Assistant..</Title>
         
          <ThemeToggle onClick={handleThemeToggle}>
            {theme === lightTheme ? <BsToggle2Off /> : <BsToggle2On />}
          </ThemeToggle>
        </Header>
        <MessagesContainer>
          {messages.map((msg, index) => (
            <MessageComponent key={index} isUser={msg.isUser} text={msg.text} />
          ))}
        </MessagesContainer>
        <InputContainer>
          <Input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Type a message..."
          />
          <Button onClick={handleSend}>Send</Button>
        </InputContainer>
      </ChatContainer>
    </ThemeProvider>
  );
};

export default ChatAI;

   
