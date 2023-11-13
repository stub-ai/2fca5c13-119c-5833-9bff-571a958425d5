import { useState } from 'react';
import axios from 'axios';

type Message = {
  user: string;
  message: string;
};

const ChatWidget = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<Message[]>([]);

  const sendMessage = async () => {
    try {
      const response = await axios.post('/api/chat', { message });
      setConversation([...conversation, { user: 'You', message }, { user: 'Bot', message: response.data.reply }]);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <div className="mb-4">
        {conversation.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white rounded p-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;