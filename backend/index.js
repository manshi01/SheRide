const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("SheRide Backend is running")
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})
app.post("/login", (req, res) => {
  const { phone } = req.body

  if (!phone) {
    return res.status(400).json({ message: "Phone required" })
  }

  // simulate OTP
  res.json({
    message: "OTP sent",
    otp: "123456" // for testing
  })
})
app.post("/verify-otp", (req, res) => {
  const { otp } = req.body

  if (otp === "123456") {
    res.json({ success: true })
  } else {
    res.status(401).json({ success: false })
  }
})
app.post("/select-role", (req, res) => {
  const { phone, role } = req.body

  res.json({
    message: "Role saved",
    role
  })
})
