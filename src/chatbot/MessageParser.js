import React from 'react';
import { useAction } from '../convex/_generated/react';


const MessageParser = ({ children, actions }) => {
  const getResponse = useAction("actions/getResponse");

  const parse = async (message) => {
    await getResponse(message);
    actions.getMLResponse();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;