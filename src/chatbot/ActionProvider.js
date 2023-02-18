import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const getMLResponse = () => {
    const botMessage = createChatBotMessage("bot says hi!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            getMLResponse
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;