import { MessageSquare, Ratio, Sunset, Zap } from 'lucide-react'
import React from 'react'

const LeftSide = () => {
  return (
    <>
      <div className="text-cyan-400 font-light text-lg tracking-wider mb-6"><a href='https://radius-ois.ai' target='_blank'>VISIT RADIUS</a></div>

      <div className="flex-1 flex flex-col justify-around">
        <div className="grid grid-cols-1 gap-2 w-full">
          {[
            { label: "MULTICHANNEL SUPPORT", data: '24X7', icon: <MessageSquare size={20} /> },
            { label: "INTEGRATED SOLUTIONS", data: '45+', icon: <Ratio size={20} /> },
            { label: "YEARS OF TECHNOLOGY", data: '10+', icon: <Sunset size={20} /> },
            { label: "FEATURES WE OFFER", data: '500+', icon: <Zap size={20} /> },
            { label: "AVG TEAM EXPERIENCE", data: '100+', icon: <Zap size={20} /> },
            { label: "BESPOKE SOLUTIONS DEVELOPED", data: '10+', icon: <Zap size={20} /> },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start justify-center rounded-xl  shadow-md transition-transform hover:scale-105 mb-2"
            >
              <div className="text-cyan-300 text-xl font-bold mb-2">{metric.data}</div>
              <div className="flex items-center gap-2 text-green-300">
                {/* <span className="text-green-300 text-xs">{metric.icon}</span> */}
                <span className="text-green-200 font-mono text-xs text-center">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-4 border border-green-900/30 rounded-lg p-3 bg-black/50 h-1/3 overflow-hidden text-cyan-200">
          there will be something like rewards we can showcase
        </div>
      </div>

    </>
  )
}

export default LeftSide