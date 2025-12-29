'use client'

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function OtpPage() {
  const router = useRouter()
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleBackspace = (index: number) => {
    if (otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handleVerify = () => {
    const code = otp.join("")
    if (code.length === 6) {
      // later: verify OTP with Firebase
     router.push("/select-role")
 // temporary redirect
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-6">

      {/* Logo */}
      <div className="flex items-center mb-16">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
        />
        <span className="ml-2 text-lg font-semibold">SheRide</span>
      </div>

      {/* Content */}
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-semibold mb-2">
          Enter OTP
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          We’ve sent a 6-digit code to your mobile number
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => e.key === "Backspace" && handleBackspace(index)}
              className="w-12 h-12 text-center text-xl rounded-xl bg-zinc-900 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={otp.join("").length !== 6}
          className={`w-full py-3 rounded-xl font-semibold transition
            ${
              otp.join("").length === 6
                ? "bg-yellow-400 text-black"
                : "bg-zinc-700 text-gray-400 cursor-not-allowed"
            }`}
        >
          Verify
        </button>

        {/* Resend */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Didn’t receive OTP?{" "}
          <span className="text-yellow-400 cursor-pointer">
            Resend
          </span>
        </p>
      </div>
    </div>
  )
}
