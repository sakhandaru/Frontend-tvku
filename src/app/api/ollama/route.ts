import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

interface IBerita {
  id: number
  judul: string
  deskripsi: string
  kategori: {
    nama: string
  }
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    const systemPrompt = `anda adalah LIL BAH AI. Aturan:
    1. Fokus pada topik berita dan informasi umum
    2. Jangan bahas topik sensitif
    3. Jawab dalam bahasa yang sopan dan informatif
    4. Jika tidak tahu jawabannya, katakan dengan sopan kalau kurang tahu
    5. Jika ada berita terkini, sertakan dalam jawaban

    `;

    let fullPrompt = `${systemPrompt}\n\nPertanyaan: ${prompt}`;

    if (prompt.toLowerCase().includes("berita")) {
      const beritaRes = await axios.get(`https://apidev.tvku.tv/api/berita`)
      const beritaData = beritaRes.data.data

      if (beritaData && beritaData.length > 0) {
        const beritaFormatted = beritaData.map((item: IBerita) => {
          return `• ${item.judul} (${item.kategori?.nama ?? 'Uncategorized'}) - ${item.deskripsi}`
        }).join('\n')

        fullPrompt += `\n\n[Berita Terkini]:\n${beritaFormatted}`
      }
    }

    const response = await fetch(`http://127.0.0.1:11434/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: fullPrompt,
        stream: false,
      }),
    })

    const data = await response.json()
    return NextResponse.json({ response: data.response })

  } catch (error) {
    console.error("Error in /api/ollama:", error)
    return NextResponse.json(
      { error: 'Failed to communicate with Ollama API' },
      { status: 500 }
    )
  }
}
