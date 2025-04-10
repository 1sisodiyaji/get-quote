import React, { useState } from 'react';
import SurveyModal from './Survey';

const SurveyBox = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleOpenSurvey = () => setShowSurvey(true);
  const handleCloseSurvey = () => setShowSurvey(false);
  return (
    <>
     <div
          className="rounded-lg  bg-black/50 h-full overflow-hidden cursor-pointer"
          onClick={handleOpenSurvey}
        >
          <div className="text-cyan-400 text-lg mb-2">SURVEY</div>
          <div className="text-green-400/80 text-xs font-mono flex flex-col justify-between">
            <div className="text-xs text-cyan-300/80 animate-pulse">&gt; HAVE A SORT SURVEY</div>
            <div className="flex justify-end items-end text-cyan-300/80 animate-pulse">
              <img src="/dashboard.svg" className="w-72 h-32" />
            </div>
          </div>
        </div> 
      {showSurvey && <SurveyModal onClose={handleCloseSurvey}/>}
    </>
  );
};

export default SurveyBox;
