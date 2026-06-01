import {MOODS} from '../components/constants';

export default function MoodLegend() {
  return (
     <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg">
      <p className="text-sm font-bold text-amber-900 mb-2 text-center">
        Mood Guide
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {MOODS.map((m) => (
          <div key={m.emoji} className="flex items-center gap-1">
            <span className="text-lg">{m.emoji}</span>
            <span className="text-xs font-semibold" style={{ color: m.color }}>
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}