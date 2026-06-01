import {MOODS} from '../components/constants';

export default function Moodselector({selected,onSelect,dateKey,isToday}) {
  return (
   <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-lg text-center">
      <p className="text-sm font-bold text-amber-900 mb-3">
        {isToday ? "How are you feeling today?" : `Mood for ${dateKey}`}
      </p>
 
      <div className="grid grid-cols-4 gap-2">
        {MOODS.map((m) => {
          const active = selected === m.emoji;
          return (
            <button
              key={m.emoji}
              onClick={() => onSelect(m.emoji)}
              title={m.label}
              className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-all duration-200 border-2
                ${active
                  ? "scale-110 shadow-lg"
                  : "border-transparent hover:bg-gray-50 scale-100"
                }`}
              style={{
                background: active ? m.bg : undefined,
                borderColor: active ? m.color : "transparent",
                boxShadow: active ? `0 4px 20px ${m.color}44` : undefined,
              }}
            >
              <span className="text-3xl">{m.emoji}</span>
              <span
                className={`text-xs ${active ? "font-bold" : "font-medium text-gray-500"}`}
                style={{ color: active ? m.color : undefined }}
              >
                {m.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}