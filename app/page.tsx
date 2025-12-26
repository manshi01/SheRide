"use client"

import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Book a Ride</h1>

      <div className="card mb-4">
        <p className="text-sm text-muted">Pickup Location</p>
        <p className="text-base">HSR Layout, Bengaluru</p>
      </div>

      <Button className="btn-primary w-full" color="red" size="lg" cursor="pointer">
        Find Rider
      </Button>
    </div>
  )
}
