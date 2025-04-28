import React from 'react'
import { formatDistanceToNow } from "date-fns"
import { Avatar } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "other"
  timestamp: Date
}

interface ChatBubbleProps {
  message: Message
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.sender === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex gap-2 max-w-[80%] ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        <Avatar className="h-8 w-8 mt-1">
          <div
            className={`h-full w-full rounded-full flex items-center justify-center text-white ${isUser ? "bg-blue-500" : "bg-gray-500"}`}
          >
            {isUser ? "U" : "O"}
          </div>
        </Avatar>

        <div className="flex flex-col">
          <div
            className={`rounded-2xl px-4 py-2 ${
              isUser ? "bg-blue-500 text-white rounded-tr-none" : "bg-gray-200 text-gray-800 rounded-tl-none"
            }`}
          >
            <p>{message.content}</p>
          </div>

          <span className={`text-xs text-gray-500 mt-1 ${isUser ? "text-right" : "text-left"}`}>
            {formatDistanceToNow(message.timestamp, { addSuffix: true })}
          </span>
        </div>
      </div>
    </div>
  )
}


