"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import Image from "next/image"

interface QuickReply {
  id: string
  text: string
}

export default function ChatPage() {
  const [message, setMessage] = useState("")

  const quickReplies: QuickReply[] = [
    { id: "1", text: "Profil" },
    { id: "2", text: "Ibadah" },
    { id: "3", text: "Layanan" },
    { id: "4", text: "Berita" },
    { id: "5", text: "Badan Otonom" },
    { id: "6", text: "Kontak" },
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      setMessage("")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col h-[80vh] md:h-[600px]">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Alssya"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold">Alssya</h1>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="max-w-[90%] bg-gray-100 rounded-2xl p-4 mb-4">
              <p className="text-gray-800 text-base md:text-lg">
                Halo, Atmin! Selamat datang di layanan chatbot kami. Apa yang ingin Anda ketahui?
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {quickReplies.slice(0, 4).map((reply) => (
                  <button
                    key={reply.id}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-2 text-gray-700 text-sm transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {quickReplies.slice(4).map((reply) => (
                  <button
                    key={reply.id}
                    className="bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-2 text-gray-700 text-sm transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ketik pesan..."
                className="flex-1 rounded-full border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
              <Button type="submit" size="icon" className="rounded-full bg-green-600 hover:bg-green-700 h-12 w-12">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
