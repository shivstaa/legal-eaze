import featherIcon from "../icons/feather-pen.png";

const BotAvatar = () => {
    const imgStyle = {
        width: '25px',
        height: '25px',
    };

    return (
      <div class="react-chatbot-kit-chat-bot-avatar-container">
        <div class="react-chatbot-kit-bot-avatar">
            <img src={featherIcon} alt="feather quill icon" style={imgStyle}></img>
        </div>
      </div>
    );
  };
  
  export default BotAvatar;