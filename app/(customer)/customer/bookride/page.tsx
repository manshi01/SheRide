'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function BookRidePage() {
  const router = useRouter()

  const bookRide = () => {
    // later: call backend API
    router.push("/customer/ridestatus")
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6">

      {/* Header */}
      <div className="flex items-center mb-10">
        <Image src="/logo.jpeg" alt="Logo" width={36} height={36} />
        <span className="ml-2 text-lg font-semibold">SheRide</span>
      </div>

      <h1 className="text-2xl font-semibold mb-2">Book a Ride</h1>
      <p className="text-sm text-gray-400 mb-6">
        Safe bike rides with verified female riders
      </p>

      {/* Pickup */}
      <div className="bg-zinc-900 rounded-xl p-4 mb-4">
        <p className="text-sm text-gray-400">Pickup location</p>
        <p>HSR Layout, Bengaluru</p>
      </div>

      {/* Drop */}
      <div className="bg-zinc-900 rounded-xl p-4 mb-8">
        <p className="text-sm text-gray-400">Drop location</p>
        <p>Koramangala, Bengaluru</p>
      </div>

      {/* Book Button */}
      <button
        onClick={bookRide}
        className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold"
      >
        Book Ride
      </button>
    </div>
  )
}
