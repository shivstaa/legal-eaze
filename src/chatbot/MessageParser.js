import React from 'react';


const MessageParser = ({ children, actions }) => {

  const parse = async (message) => {
    const input = { input: message };
    const data = await fetch('http://localhost:5000/response', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'True',
        'Access-Control-Allow-Headers': 'access-control-allow-methods, access-control-allow-origin, content-type',
        'Access-Control-Allow-Methods': 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(input),
    });
    const json = await data.json();
    if (json.messages.length === 0) {
      actions.getMLResponse("There are no matches.")
    } else {
      json.messages.map((message) => actions.getMLResponse(message.choices[0].text));
    }
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