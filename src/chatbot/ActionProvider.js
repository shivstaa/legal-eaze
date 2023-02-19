import React from 'react';
import { useQuery } from "../convex/_generated/react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const data = useQuery("listMessages") || [];

  const getMLResponse = async () => {
    const botMessage = createChatBotMessage(data[0].body);

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