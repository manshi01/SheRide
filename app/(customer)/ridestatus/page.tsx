'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function RideStatusPage() {
  const [assigned, setAssigned] = useState(false)

  useEffect(() => {
    // simulate rider assignment
    setTimeout(() => {
      setAssigned(true)
    }, 3000)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6">

      {/* Header */}
      <div className="flex items-center mb-10">
        <Image src="/logo.png" alt="Logo" width={36} height={36} />
        <span className="ml-2 text-lg font-semibold">SheRide</span>
      </div>

      {!assigned ? (
        <div>
          <h1 className="text-xl font-semibold mb-2">
            Finding a rider...
          </h1>
          <p className="text-sm text-gray-400">
            Please wait while we assign a nearby rider
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-semibold mb-4">
            Rider Assigned 🎉
          </h1>

          <div className="bg-zinc-900 rounded-xl p-4">
            <p className="font-medium">Rider Name</p>
            <p className="text-sm text-gray-400">Bike: KA 05 XX 1234</p>
            <p className="text-sm text-gray-400">ETA: 5 mins</p>
          </div>
        </div>
      )}
      
    </div>
  )
}
