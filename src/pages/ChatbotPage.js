import './Chatbot.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import { useQuery } from "./convex/_generated/react";
import { useMutation } from "./convex/_generated/react";

function ChatbotPage() {
  // data will be `undefined` while the query is first loading
  const data = useQuery("listMessages");
  const sendMessage = useMutation("sendMessage");
  const sendHello = () => sendMessage("Hello!", "me");
  return (
    <div>
      {data.map(message => (
          <li key={message._id.toString()}>
            <span>{message.author}:</span>
            <span>{message.body}</span>
            <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
          </li>
        ))}
      <button onClick={sendHello}>click me!</button>
    </div>
  );
}

export default ChatbotPage;
