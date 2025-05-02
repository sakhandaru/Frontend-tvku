'use client'

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import img1 from "../../public/images/bahlil.jpeg";

interface ChatMessage {
  sender: string;
  message: string;
}

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", message: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ollama', {
        method: 'POST',
        body: JSON.stringify({ prompt: input }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      
      const data = await res.json();
      const aiMessage = { sender: "ai", message: data.response || 'No response' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : 'Unknown error';
      setMessages(prev => [...prev, { sender: "ai", message: `Error: ${errMsg}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-[#0C71C3] shadow-lg z-50 flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[800px] p-0 rounded-xl overflow-hidden max-h-[80vh] md:max-h-[600px]">
          <div className="w-full flex flex-col h-[80vh] md:h-[600px]">
            <DialogHeader className="p-4 border-b flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={img1}
                    alt="LIL BAH AI"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <DialogTitle className="text-2xl font-bold">
                  LIL BAH AI
                </DialogTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close chat"
              >
                <X size={24} />
              </Button>
            </DialogHeader>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.length === 0 && !isLoading && (
                <div className="flex justify-center items-center h-full text-gray-500">
                  Start a conversation with LIL BAH AI
                </div>
              )}

              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    {msg.message}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-gray-100 animate-pulse">Thinking...</div>
                </div>
              )}
            </div>

            <div className="p-4 border-t mt-auto">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ketik pesan..."
                  className="flex-1 rounded-full border-gray-300"
                  aria-label="Chat message input"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full bg-[#0C71C3] h-12 w-12"
                  aria-label="Send message"
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
