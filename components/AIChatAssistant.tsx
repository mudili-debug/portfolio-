
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hi! I'm Prasad's AI Assistant. Ask me anything about his technical background or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a helpful portfolio assistant for Mudili Bhavani Prasad. 
          Respond professionally. Prasad is a CSE student at Vignan University. 
          His core skills are Django, C++, Java, and Python. He is preparing for GATE 2025. 
          His flagship project is 'Trendr' - a scalable social media app. 
          Personal data: ${JSON.stringify(PERSONAL_DETAILS)}.
          Keep answers brief and highlight his discipline and technical strength.`
        }
      });

      const text = response.text || "I'm having trouble connecting right now, but feel free to reach out to Prasad directly!";
      setMessages(prev => [...prev, { role: 'assistant', text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Error connecting to AI. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden md:inline font-medium">Ask My AI</span>
        </button>
      ) : (
        <div className="bg-white dark:bg-slate-900 w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col border border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold text-sm">Prasad's Career Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-500 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-slate-50 dark:bg-slate-950">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl animate-pulse">Thinking...</div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatAssistant;
