'use client'

import { useState } from "react"
import Image from "next/image"

export default function AssignRiderPage() {
  const [assigned, setAssigned] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6">

      {/* Header */}
      <div className="flex items-center mb-10">
        <Image src="/logo.png" alt="Logo" width={36} height={36} />
        <span className="ml-2 text-lg font-semibold">SheRide Admin</span>
      </div>

      <h1 className="text-2xl font-semibold mb-6">Assign Rider</h1>

      {/* Ride Details */}
      <div className="bg-zinc-900 rounded-xl p-4 mb-6">
        <p className="text-sm text-gray-400">Customer</p>
        <p className="font-medium">Manshi Bharti</p>

        <div className="mt-3">
          <p className="text-sm text-gray-400">Pickup</p>
          <p>HSR Layout, Bengaluru</p>
        </div>

        <div className="mt-3">
          <p className="text-sm text-gray-400">Drop</p>
          <p>Koramangala, Bengaluru</p>
        </div>
      </div>

      {/* Rider List */}
      <div className="bg-zinc-900 rounded-xl p-4 mb-6">
        <p className="text-sm text-gray-400 mb-3">Available Riders</p>

        <div className="flex justify-between items-center mb-3">
          <span>Priya (2 km away)</span>
          <button
            onClick={() => setAssigned(true)}
            className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm font-medium"
          >
            Assign
          </button>
        </div>

        <div className="flex justify-between items-center">
          <span>Anjali (3 km away)</span>
          <button
            onClick={() => setAssigned(true)}
            className="bg-yellow-400 text-black px-4 py-1 rounded-lg text-sm font-medium"
          >
            Assign
          </button>
        </div>
      </div>

      {/* Status */}
      {assigned && (
        <div className="bg-green-900 text-green-300 rounded-xl p-4">
          Rider successfully assigned ✅
        </div>
      )}
    </div>
  )
}
