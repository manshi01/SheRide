'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function CustomerHome() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="ml-2 text-lg font-semibold">SheRide</span>
        </div>
        <span className="text-sm text-gray-400">Bengaluru</span>
      </div>

      {/* Greeting */}
      <h1 className="text-2xl font-semibold mb-2">
        Where are you going?
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        Safe rides by verified women riders
      </p>

      {/* Pickup */}
      <div className="bg-zinc-900 rounded-xl p-4 mb-4">
        Pickup location
      </div>

      {/* Drop */}
      <div className="bg-zinc-900 rounded-xl p-4 mb-8">
        Drop location
      </div>

      {/* CTA */}
      <button
        onClick={() => router.push("/customer/book-ride")}
        className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold"
      >
        Book Ride
      </button>

      {/* Safety */}
      <div className="mt-6 text-sm text-gray-400">
        ✔ Only verified female riders <br />
        ✔ SOS available anytime
      </div>
    </div>
  )
}
