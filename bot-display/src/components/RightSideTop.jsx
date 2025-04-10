import { AudioLines, FileCheck2, MessageSquare, Phone, UserCheck, VideoIcon } from 'lucide-react';

const RightSideTop = ({ glowIntensity }) => {
  return (
    <>
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-green-500/5 to-cyan-500/5" />
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <path
              d="M0,50 Q25,0 50,50 T100,50"
              stroke="rgba(52, 211, 153, 0.2)"
              strokeWidth="0.2"
              fill="none"
            />
            <path
              d="M0,60 Q25,10 50,60 T100,60"
              stroke="rgba(52, 211, 153, 0.15)"
              strokeWidth="0.2"
              fill="none"
            />
            <path
              d="M0,70 Q25,20 50,70 T100,70"
              stroke="rgba(52, 211, 153, 0.1)"
              strokeWidth="0.2"
              fill="none"
            />
            <path
              d="M0,40 Q25,90 50,40 T100,40"
              stroke="rgba(6, 182, 212, 0.2)"
              strokeWidth="0.2"
              fill="none"
            />
            <path
              d="M0,30 Q25,80 50,30 T100,30"
              stroke="rgba(6, 182, 212, 0.15)"
              strokeWidth="0.2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Controls content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="text-cyan-400 font-regular text-lg tracking-wider mb-6">
          LIVE COMMUNICATION WITH AGENT
        </div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {[
            { name: 'Video Channel', icon: <VideoIcon size={32} />, color: 'green' },
            { name: 'Call Channel', icon: <Phone size={32} />, color: 'cyan' },
            { name: 'Chat Channel', icon: <MessageSquare size={32} />, color: 'green' },
            { name: 'Agent Console', icon: <UserCheck size={32} />, color: 'cyan' },
            { name: 'Reporting Tool', icon: <FileCheck2 size={32} />, color: 'green' },
            { name: 'Playback and QA Tool', icon: <AudioLines size={32} />, color: 'cyan' },
          ].map((control, idx) => (
            <div
              key={idx}
              className={`rounded-xl flex flex-col justify-center items-center p-4 cursor-pointer group hover:scale-105 transition-transform duration-300`}
              style={{
                background: 'rgba(0,0,0,0.6)',
                boxShadow:
                  control.color === 'green'
                    ? `0 0 15px rgba(52, 211, 153, ${glowIntensity * 0.4})`
                    : `0 0 15px rgba(6, 182, 212, ${glowIntensity * 0.4})`,
                borderLeft:
                  control.color === 'green'
                    ? '1px solid rgba(52, 211, 153, 0.3)'
                    : '1px solid rgba(6, 182, 212, 0.3)',
                borderTop:
                  control.color === 'green'
                    ? '1px solid rgba(52, 211, 153, 0.3)'
                    : '1px solid rgba(6, 182, 212, 0.3)',
              }}
            >
              <div
                className={`mb-4 ${control.color === 'green' ? 'text-green-400' : 'text-cyan-400'} group-hover:scale-110 transition-transform duration-300`}
              >
                {control.icon}
              </div>
              <div
                className={`text-sm font-light ${control.color === 'green' ? 'text-green-300' : 'text-cyan-300'} tracking-wider uppercase`}
              >
                {control.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSideTop;
