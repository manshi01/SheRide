'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SelectRolePage() {
  const router = useRouter()

const selectRole = async (role: "customer" | "rider") => {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/select-role`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phone: "9999999999",
        role
      })
    }
  )

  if (role === "customer") {
    router.push("/customer/home")
  } else {
    router.push("/rider/home")
  }
}


  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6">

      {/* Logo */}
      <div className="flex items-center mb-16">
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={40}
          height={40}
        />
        <span className="ml-2 text-lg font-semibold">SheRide</span>
      </div>

      {/* Content */}
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-semibold mb-2">
          Choose how you want to continue
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          You can change this later
        </p>

        {/* Customer Card */}
        <div
          onClick={() => selectRole("customer")}
          className="bg-zinc-900 rounded-2xl p-5 mb-6 cursor-pointer border border-transparent hover:border-yellow-400 transition"
        >
          <h2 className="text-lg font-medium mb-1">Customer</h2>
          <p className="text-sm text-gray-400">
            Book safe bike rides with verified female riders
          </p>
        </div>

        {/* Rider Card */}
        <div
          onClick={() => selectRole("rider")}
          className="bg-zinc-900 rounded-2xl p-5 cursor-pointer border border-transparent hover:border-yellow-400 transition"
        >
          <h2 className="text-lg font-medium mb-1">Rider</h2>
          <p className="text-sm text-gray-400">
            Earn by giving safe rides to women customers
          </p>
        </div>
      </div>
    </div>
  )
}
