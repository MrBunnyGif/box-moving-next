"use client"
import { useEffect, useState } from "react";
import SettingsIcon from "./icons/SettingsIcon"

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

export default function Home() {

  const [currentMessage, setCurrentMessage] = useState("3 2 1...")
  const [timeInterval, setTimeInterval] = useState(2000)
  const [showSettings, setShowSettings] = useState(false)

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeInterval(event.target.valueAsNumber * 1000)
  }

  const toggleSettings = () => {
    setShowSettings(prev => !prev)
  }

  const closeSettings = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if ((e.target as HTMLElement).classList.contains("settings-element") || !showSettings) return
    setShowSettings(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)])
    }, timeInterval)
    return () => clearInterval(interval)
  }, [timeInterval])

  return (
    <main
      onClick={e => closeSettings(e)}
      style={{
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
      {/* TODO: Fix button color on black background*/}
      <button
        type="button"
        className="text-white bg-gray-300 rounded-full p-2.5 cursor-pointer fixed bottom-0 right-0 m-4"
        onClick={toggleSettings}
      >
        <SettingsIcon />
      </button>
      {/* TODO: add max length to input */}
      {
        showSettings &&
        <div className="fixed bottom-0 right-16 m-4 shadow-md p-2 rounded-2xl settings-element">
          <label htmlFor="time-interval-range" className="settings-element">
            <h4 className="settings-element">
              Tempo: <b className="settings-element">{(timeInterval / 1000).toFixed(2)}s</b>
            </h4>
          </label>
          <input
            onChange={handleRangeChange}
            min={1}
            max={4}
            step={0.25}
            value={timeInterval / 1000}
            type="range"
            name="time-interval-range"
            id="time-interval-range"
            className="w-2xs rounded-lg cursor-pointer settings-element"
          />
        </div>
      }
    </main >
  );
}
