"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const messages = [
    "jab",
    "direto",
    "cruzado",
    "uppercut",
    "2xjab",
    "2xcruzado",
    "2xuppercut",
    "jab, uppercut",
    "cruzado uppercut",
    "jab, cruzado",
    "jab, cruzado, uppercut",
    "jab, uppercut, cruzado",
    "jab, direto",
    "direto, uppercut",
    "direto, uppercut",
    "direto, cruzado",
    "direto, cruzado, uppercut",
    "direto, uppercut, cruzado",
  ]

  const [currentMessage, setCurrentMessage] = useState("")
  const [timeInterval, setTimeInterval] = useState(2000)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)])
    }, timeInterval)
    return () => clearInterval(interval)
  })

  return (
    <main style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <h1 style={{
        fontSize: "7vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        textAlign: "center",
        lineHeight: "1",
        textTransform: "uppercase"
      }}>
        {currentMessage}
      </h1>

    </main >
  );
}
