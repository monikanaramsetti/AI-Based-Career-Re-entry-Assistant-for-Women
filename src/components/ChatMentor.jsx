import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const ChatMentor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I am your AI Mentor. How can I help you restart your career today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      let reply = "That's a great question! Rebuilding confidence takes time. I suggest starting with a small project to refresh your skills. How else can I assist your comeback?";
      const lowerMsg = userMsg.toLowerCase();

      if (lowerMsg.includes('career break') || lowerMsg.includes('gap')) {
        reply = "When explaining a career break, always focus on the positive. Frame it as a period of personal growth where you developed essential soft skills. Focus on any upskilling you did during this time.";
      } else if (lowerMsg.includes('interview')) {
        reply = "For interviews, focus on the STAR method (Situation, Task, Action, Result) to frame your past experiences. Don't apologize for your break; own it!";
      } else if (lowerMsg.includes('skills') || lowerMsg.includes('learn')) {
        reply = "Right now, data analytics, foundational AI concepts, and digital marketing are highly sought after. Let's incorporate these into your learning roadmap.";
      }

      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Launcher Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'} absolute bottom-0 right-0 h-16 w-16 bg-gradient-to-tr from-brand-purple to-brand-pink text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-brand-purple/40 outline-none`}
      >
        <MessageCircle size={30} />
      </button>

      {/* Chat Window */}
      <div 
        className={`${
           isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
        } transform transition-all duration-300 origin-bottom-right absolute bottom-0 right-0 w-80 sm:w-96 h-[32rem] bg-white rounded-[2rem] shadow-2xl shadow-brand-purple/20 border border-slate-100 flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-purple to-brand-pink p-5 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-3">
             <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                <Bot size={22} className="text-white" />
             </div>
             <div>
                <h3 className="font-extrabold text-lg leading-tight tracking-tight">AI Mentor</h3>
                <span className="text-xs text-brand-purple font-bold bg-white px-2 py-0.5 rounded-full uppercase tracking-widest inline-flex mt-1 shadow-sm">Online</span>
             </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors flex shrink-0 group">
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 bg-slate-50/50 relative custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === 'assistant' ? 'self-start' : 'self-end flex-row-reverse'}`}>
              
               <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                   msg.role === 'assistant' ? 'bg-brand-purple/10 text-brand-purple' : 'bg-brand-pink/20 text-brand-pink'
               }`}>
                  {msg.role === 'assistant' ? <Bot size={16}/> : <User size={16} />}
               </div>

               <div className={`p-4 text-sm leading-relaxed shadow-sm ${
                 msg.role === 'assistant' 
                   ? 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-sm' 
                   : 'bg-gradient-to-br from-brand-purple to-brand-pink text-white rounded-2xl rounded-tr-sm'
               }`}>
                 {msg.text}
               </div>

            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
             <div className="flex gap-3 max-w-[85%] self-start animate-in fade-in">
                 <div className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
                     <Bot size={16}/>
                 </div>
                 <div className="p-4 bg-white border border-slate-100 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 h-[52px]">
                   <span className="w-2 h-2 bg-brand-purple/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                   <span className="w-2 h-2 bg-brand-purple/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                   <span className="w-2 h-2 bg-brand-purple/50 rounded-full animate-bounce"></span>
                 </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0">
           <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about interviewing, career breaks..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-5 pr-14 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple transition-all text-slate-800 font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-purple hover:bg-purple-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-all group"
              >
                <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMentor;
