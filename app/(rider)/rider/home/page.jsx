'use client'

import { useState } from "react"
import Image from "next/image"

export default function RiderHomePage() {
  const [online, setOnline] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6">

      <div className="flex items-center mb-10">
        <Image src="/logo.jpeg" alt="Logo" width={36} height={36} />
        <span className="ml-2 text-lg font-semibold">SheRide Rider</span>
      </div>

      <h1 className="text-2xl font-semibold mb-6">
        You are {online ? "Online" : "Offline"}
      </h1>


      <button
        onClick={() => setOnline(!online)}
        className={`w-full py-3 rounded-xl font-semibold
          ${online ? "bg-red-500" : "bg-green-500"}
        `}
      >
        Go {online ? "Offline" : "Online"}
      </button>
    </div>
  )
}
