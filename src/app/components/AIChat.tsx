'use client';

import { useState } from 'react';

export default function AIChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: "Hi! I'm Noor, Sravya's AI Assistant. Ask me anything about her background, skills, projects, or tech journey 😊" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getMockReply = (userMessage: string) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes("who are you") || msg.includes("noor")) {
      return "I'm Noor, Sravya's personal AI assistant. I know everything about her journey and skills!";
    }
    if (msg.includes("sravya") || msg.includes("tell me about") || msg.includes("herself")) {
      return "Sravya is a CSE Graduate (2015) restarting her tech career. She has experience in Full-Stack and IoT development and is now focusing on modern web apps, RAG systems, AI, and Data Science.";
    }
    if (msg.includes("skill") || msg.includes("know")) {
      return "Her main skills are: React, Next.js, Tailwind CSS, Node.js, Python, FastAPI, Pandas, RAG, and strong problem-solving. She's a fast learner!";
    }
    if (msg.includes("project") || msg.includes("portfolio")) {
      return "Right now she's building this beautiful portfolio with me (Noor) inside it! Next projects will be AI Resume Builder and RAG Document Q&A chatbot.";
    }
    if (msg.includes("experience") || msg.includes("government") || msg.includes("job")) {
      return "She worked as IoT Developer and Trainee Software Engineer earlier. Currently she is a Government Servant but actively pivoting back to tech because of her passion for coding and AI.";
    }

    return "That's a great question! Sravya is really passionate about AI and Full-Stack development. Would you like to know more about her skills or upcoming projects?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const reply = getMockReply(input);
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
      setIsLoading(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-blue-600 px-5 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-white text-lg">🤖</span>
          <span className="text-white font-medium">Noor</span>
        </div>
      </div>

      <div className="h-80 p-4 overflow-y-auto space-y-4 bg-gray-950">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-800'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && <div className="text-gray-400 text-sm">Noor is thinking...</div>}
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask Noor anything..."
            className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-2xl focus:outline-none"
          />
          <button
            onClick={sendMessage}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-2xl text-white font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}