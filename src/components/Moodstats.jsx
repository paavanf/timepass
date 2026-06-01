import {MOODS,map} from '../components/constants';

export default function Moodstats({month,year,moods}) {
    const counts={};
    MOODS.forEach((m)=>(counts[m.emoji]=0));
    const daysInMonth=new Date(year,month+1,0).getDate();
    let total=0;
    for (let index = 1; index <= daysInMonth; index++) {
        const mood = moods[map(year,month,index)];
        if(mood && counts[mood]!==undefined)
        {
            counts[mood]++;
            total++;
        }
    }


  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-lg text-center">
      <p className="text-sm font-bold text-amber-900 mb-3">
        Monthly Mood Snapshot
      </p>
 
      {total === 0 ? (
        <p className="text-sm text-amber-700 py-2">
          No moods logged yet this month. Tap a day to start! 🌱
        </p>
      ) : (
        <>
          {/* Color bar */}
          <div className="flex rounded-xl overflow-hidden h-9 mb-3">
            {MOODS.map((m) => {
              const pct = (counts[m.emoji] / total) * 100;
              if (pct === 0) return null;
              return (
                <div
                  key={m.emoji}
                  title={`${m.label}: ${counts[m.emoji]} day(s)`}
                  className="flex items-center justify-center transition-all duration-400"
                  style={{
                    width: `${pct}%`,
                    background: `linear-gradient(135deg, ${m.color}, ${m.color}cc)`,
                  }}
                >
                  {pct > 8 && <span className="text-base">{m.emoji}</span>}
                </div>
              );
            })}
          </div>
 
          {/* Counts */}
          <div className="flex justify-center flex-wrap gap-3 mb-2">
            {MOODS.filter((m) => counts[m.emoji] > 0).map((m) => (
              <div key={m.emoji} className="flex items-center gap-1 text-sm">
                <span>{m.emoji}</span>
                <span className="font-bold text-amber-900">
                  {counts[m.emoji]}
                </span>
              </div>
            ))}
          </div>
 
          <p className="text-xs text-amber-700">
            {total} of {daysInMonth} days logged
          </p>
        </>
      )}
    </div>
  );
}