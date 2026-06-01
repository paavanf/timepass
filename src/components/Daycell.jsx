import {MOODS} from '../components/constants';

export default function Daycell({day,mood,isToday,isFuture,onClick}) {
  if (!day) return <div className="aspect-square" />;
  const moodData=MOODS.find((m)=>m.emoji===mood);
  
  
    return (
    <button
      onClick={isFuture ? undefined : onClick}
      className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-150
        ${isToday ? "border-2 border-yellow-400" : "border border-gray-100"}
        ${isFuture ? "opacity-40 cursor-default" : "cursor-pointer hover:scale-105"}
      `}
      style={{
        background: moodData ? moodData.bg : isToday ? "#FFF9C4" : "#fff",
      }}
    >
      <span
        className={`text-xs leading-none ${isToday ? "font-extrabold text-yellow-800" : "font-semibold text-gray-600"}`}
      >
        {day}
      </span>
 
      {mood && <span className="text-lg leading-none">{mood}</span>}
 
      {!mood && isToday && (
        <span className="text-base font-extrabold text-yellow-400 leading-none">
          +
        </span>
      )}
    </button>
  );
}
 