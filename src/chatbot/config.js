import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../components/BotAvatar';

const config = {
  botName: "Legal Eaze",
  initialMessages: [createChatBotMessage(`Hello world`)],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  }
};

export default config;