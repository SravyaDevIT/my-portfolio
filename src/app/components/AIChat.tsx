'use client';

import { useState } from 'react';

export default function AIChat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: "Hi! I'm Noor, Sravya's AI Assistant. Ask me anything about her skills, experience, projects, or tech journey 😊" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      // ← NEW: Safe JSON parsing
      let data;
      try {
        data = await res.json();
      } catch (e) {
        throw new Error("Noor couldn't respond right now. Please try again.");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch (error: any) {
      console.error("Chat error:", error);
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: "Sorry, something went wrong on my side. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
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