import React, { useState, useRef, useEffect } from 'react';
import { PartyPopper, Sparkle, Star } from 'lucide-react';
import ReactDOM from 'react-dom';

const SurveyModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ q1: 0, q2: 0, q3: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [animation, setAnimation] = useState('fadeIn');
  const formRef = useRef(null);

  const questions = [
    'How would you rate your experience with RADIUS at the booth?',
    'How helpful was our Demo / Walkthrough?',
    'Would you like to explore RADIUS further after this event?',
  ];

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const goToNextQuestion = () => {
    setAnimation('fadeOut');

    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
      setAnimation('fadeIn');
    }, 400);
  };

  const formatTime = (date) => {
    const pad = n => n.toString().padStart(2, '0');
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  };

  const handleStarClick = rating => {
    const key = `q${step + 1}`; 
    const updatedFormData = { ...formData, [key]: rating }; 
    setFormData(updatedFormData); 
    if (step === questions.length - 1) {
      setAnimation('fadeOut'); 
      setTimeout(() => { 
        handleSubmit(updatedFormData);
      }, 400);
    } else { 
      goToNextQuestion();
    }
  };

  const handleSubmit = async (finalData = null) => {
    try {
      setIsSubmitting(true); 
      const dataToUse = finalData || formData;
      
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('TimeStamp', formatTime(new Date()));
      formDataToSubmit.append('question1', dataToUse.q1);
      formDataToSubmit.append('question2', dataToUse.q2);
      formDataToSubmit.append('question3', dataToUse.q3);
      
      await fetch(
        'https://script.google.com/macros/s/AKfycbzM2_sLX1dsf3hcjO3FvsbkUJrqIX4WO4b5Ml9eYOQdCYfkLD_aQGkXtyWNMZt2AF1j/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formDataToSubmit,
        }
      );

      setSubmitted(true); 
      setTimeout(onClose, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = value => {
    return Array(5)
      .fill()
      .map((_, i) => (
        <Star
          key={i}
          size={45}
          className={`cursor-pointer transition-all hover:scale-125 ${
            i < value ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500 hover:text-yellow-300'
          }`}
          onClick={() => handleStarClick(i + 1)}
        />
      ));
  };

  const animationStyle = {
    animation: `${animation} 0.4s ease-in-out forwards`,
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-center items-center" onClick={onClose}>
      <div
        className="bg-gradient-to-br from-green-500/5 to-cyan-500/5 border border-green-600 text-green-200 rounded-2xl p-6 w-[600px] min-h-72 shadow-[0_0_6px_#00ff88] flex flex-col justify-between items-center"
        style={{ animation: 'fadeIn 0.3s ease-in-out' }}
      >
        <div
          className="relative bg-gradient-to-br from-green-900/20 to-cyan-900/20 border border-green-600/60 text-green-200 
                  rounded-2xl p-8 w-full z-10
                  flex flex-col justify-between items-center transition-transform duration-300 hover:scale-105"
          style={{
            boxShadow: '0 0 25px rgba(0, 255, 136, 0.3), inset 0 0 15px rgba(0, 255, 136, 0.1)',
            animation: 'fadeIn 0.5s ease-in-out',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Top decorative element */}
          <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70 rounded-t-2xl"></div>

          {/* Progress Bar */}
          <div className="h-2 w-full bg-gray-800/60 rounded-full overflow-hidden mb-8">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-500"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>

          {!submitted ? (
            <>
              <div className="flex flex-col items-center w-full" style={animationStyle}>
                <h2 className="text-2xl font-mono text-cyan-300 mb-8 text-center">
                  {questions[step]}
                </h2>

                <div className="flex justify-center gap-3 mb-8 transition-all">
                  {renderStars(formData[`q${step + 1}`])}
                </div>

                <div className="text-sm text-cyan-300/70 mt-4">
                  Question {step + 1} of {questions.length}
                </div>
              </div>

              {isSubmitting && (
                <div className="flex items-center gap-2 text-cyan-400 mt-4">
                  <svg
                    className="animate-spin h-5 w-5 text-cyan-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </div>
              )}
            </>
          ) : (
            <div
              className="flex flex-col items-center justify-center gap-6 text-green-400 text-center py-6"
              style={{ animation: 'fadeIn 0.5s ease-in-out' }}
            >
              <h2 className="text-3xl font-bold">Thank you for your feedback!</h2>
              <p className="text-xl text-green-300/80">Enjoy the rest of the experience 🚀</p>
              <div className="flex gap-6 items-center mt-4">
                <PartyPopper
                  className="text-orange-400"
                  style={{ animation: 'bounce 1s infinite' }}
                  size={50}
                />
                <Sparkle
                  className="text-green-200"
                  style={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}
                  size={40}
                />
                <PartyPopper
                  className="text-yellow-400 rotate-180"
                  style={{ animation: 'bounce 1s infinite' }}
                  size={50}
                />
              </div>
            </div>
          )}

          {/* Hidden form for backup traditional submission */}
          <form
            ref={formRef}
            method="POST"
            action="https://script.google.com/macros/s/AKfycbzM2_sLX1dsf3hcjO3FvsbkUJrqIX4WO4b5Ml9eYOQdCYfkLD_aQGkXtyWNMZt2AF1j/exec"
            style={{ display: 'none' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="hidden" name="question1" value={formData.q1} />
            <input type="hidden" name="question2" value={formData.q2} />
            <input type="hidden" name="question3" value={formData.q3} />
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SurveyModal;