import { Calendar1Icon, CalendarArrowUp, ProjectorIcon } from 'lucide-react';

const BookAMeeting = ({ glowIntensity }) => {
  const handleRedirectToMeeting = () => {
    window.open('https://calendly.com/radius-ois/radius-ois-product-demonstration', '_blank');
  };
  return (
    <>
      <div className="h-full flex flex-col items-center justify-between cursor-pointer" onClick={handleRedirectToMeeting}>
        <div className="text-cyan-400 font-light text-lg tracking-wider mb-3 text-center">
          BOOK A DEMO
        </div>
        <CalendarArrowUp className="w-24 h-24 text-green-300 mx-auto" />
      </div>
    </>
  );
};

export default BookAMeeting;
