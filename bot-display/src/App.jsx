import React, { useState, useEffect } from 'react'; 
import LeftSide from './components/LeftSide';
import RightSideTop from './components/RightSideTop';
import BookAMeeting from './components/BookAMeeting'; 
import SurveyBox from './components/SurveyBox'
const FuturisticControlPanel = () => {
  const [glowIntensity, setGlowIntensity] = useState(0.6);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => {
        const newValue = prev + (Math.random() * 0.05 - 0.025);
        return Math.max(0.5, Math.min(0.8, newValue));
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleHover = section => {
    setActiveSection(section);
  };

  const handleLeave = () => {
    setActiveSection(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-cyan-500/5 via-green-400/10 to-blue-500/5"
          style={{ transform: 'skewY(-5deg)', top: '20%' }}
        />
        <div
          className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-cyan-500/5 via-green-400/10 to-blue-500/5"
          style={{ transform: 'skewY(3deg)', top: '60%' }}
        />
      </div>

      <div className="w-full max-w-6xl h-screen max-h-screen relative z-10 p-8">
        
        {/* Main asymmetric layout */}
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-5/6">
          {/* Left tall panel - System Status */}
          <div
            className={`col-span-3 row-span-6 rounded-2xl p-6 flex flex-col transition-all duration-300 ${activeSection === 'status' ? 'bg-black/80' : 'bg-black/60'}`}
            style={{
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 ${20 + glowIntensity * 20}px rgba(6, 182, 212, ${glowIntensity * 0.5})`,
              borderLeft: '1px solid rgba(6, 182, 212, 0.3)',
              borderTop: '1px solid rgba(6, 182, 212, 0.3)',
            }}
            onMouseEnter={() => handleHover('status')}
            onMouseLeave={handleLeave}
          >
            <LeftSide />
          </div>

          {/* Right top large section - Primary Controls */}
          <div
            className={`col-span-9 row-span-4 rounded-2xl relative overflow-hidden flex transition-all duration-300 ${activeSection === 'primary' ? 'bg-black/80' : 'bg-black/60'}`}
            style={{
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 ${20 + glowIntensity * 20}px rgba(52, 211, 153, ${glowIntensity * 0.5})`,
              borderLeft: '1px solid rgba(52, 211, 153, 0.3)',
              borderTop: '1px solid rgba(52, 211, 153, 0.3)',
            }}
            onMouseEnter={() => handleHover('primary')}
            onMouseLeave={handleLeave}
          >
            <RightSideTop glowIntensity={glowIntensity} />
          </div>

          {/* Bottom right sections - Book a Meeting */}
          <div
            className={`col-span-4 row-span-2 rounded-2xl p-6 transition-all duration-300 ${activeSection === 'specs' ? 'bg-black/80' : 'bg-black/60'}`}
            style={{
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 ${20 + glowIntensity * 20}px rgba(6, 182, 212, ${glowIntensity * 0.5})`,
              borderLeft: '1px solid rgba(6, 182, 212, 0.3)',
              borderTop: '1px solid rgba(6, 182, 212, 0.3)',
            }}
            onMouseEnter={() => handleHover('specs')}
            onMouseLeave={handleLeave}
          >
            <BookAMeeting glowIntensity={glowIntensity} />
          </div>

          {/* Bottom right sections - our capabilites */}
          <div
            className={`col-span-5 row-span-2 rounded-2xl p-6 transition-all duration-300 ${activeSection === 'features' ? 'bg-black/80' : 'bg-black/60'}`}
            style={{
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 ${20 + glowIntensity * 20}px rgba(52, 211, 153, ${glowIntensity * 0.5})`,
              borderLeft: '1px solid rgba(52, 211, 153, 0.3)',
              borderTop: '1px solid rgba(52, 211, 153, 0.3)',
            }}
            onMouseEnter={() => handleHover('features')}
            onMouseLeave={handleLeave}
          >
            <SurveyBox glowIntensity={glowIntensity} />
          </div>
        </div>
      </div>

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          border: `1px solid rgba(52, 211, 153, ${glowIntensity})`,
          boxShadow: `inset 0 0 ${100 * glowIntensity}px rgba(52, 211, 153, ${glowIntensity * 0.5})`,
        }}
      />
    </div>
  );
};

export default FuturisticControlPanel;
