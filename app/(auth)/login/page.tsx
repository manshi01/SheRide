'use client'

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function LoginPage() {
  const [phone, setPhone] = useState("")
  const router = useRouter()

  const handleNext = () => {
    if (phone.length === 10) {
      router.push("/otp") // next screen
    }
  }
const sendOtp = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ phone })
    }
  )

  const data = await res.json()

  if (res.ok) {
    router.push("/otp")
  }
}

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6">
      
      {/* Logo */}
      <div className="flex items-center mb-16">
        <Image
          src="/logo.jpeg"   // put logo inside public/logo.jpeg
          alt="Logo"
          width={70}
          height={70}
        />
        {/* <span className="ml-2 text-lg font-semibold">SheRide</span> */}
      </div>

      {/* Content */}
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-semibold mb-2">
          Enter your mobile number
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          We’ll send you an OTP to verify
        </p>


        {/* Phone Input */}
        <div className="flex items-center bg-zinc-900 rounded-xl px-4 py-3 mb-6">
          <span className="text-gray-400 mr-2">+91</span>
          <input
            type="tel"
            placeholder="10 digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            maxLength={10}
            className="bg-transparent outline-none text-white w-full"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={sendOtp}
          disabled={phone.length !== 10}
          className={`w-full py-3 rounded-xl font-semibold transition
            ${
              phone.length === 10
                ? "bg-yellow-400 text-black"
                : "bg-zinc-700 text-gray-400 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}
