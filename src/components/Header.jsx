import {months} from '../components/constants';

export default function Header({month,year,onPrev,onNext,onToday}) {
  return (
    <div className="text-center flex flex-col items-center gap-2">
      {/* Title */}
      <div className="flex items-center gap-3">
        <span className="text-xl">🌈</span>
        <h1 className="text-3xl font-bold text-amber-900 tracking-tight">
          Mood Garden
        </h1>
        <span className="text-xl">🌈</span>
      </div>
 
      {/* Month Navigation */}
      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform text-sm"
        >
          ◀
        </button>
        <div className="flex flex-col min-w-30">
          <span className="text-xl font-bold text-amber-900">
            {months[month]}
          </span>
          <span className="text-sm font-semibold text-amber-700">{year}</span>
        </div>
        <button
          onClick={onNext}
          className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform text-sm"
        >
          ▶
        </button>
      </div>
 
      {/* Today Button */}
      <button
        onClick={onToday}
        className="px-5 py-1 rounded-full border-2 border-yellow-400 bg-yellow-100 text-yellow-800 font-bold text-sm hover:bg-yellow-200 transition-colors"
      >
        Today
      </button>
    </div>
  );
}