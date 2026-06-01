import {days,map} from '../components/constants';
import Daycell from '../components/Daycell';
export default function Calendargrid({month,year,moods,onDayClick}) {
    const firstDay=new Date(year,month,1).getDay();
    const daysInMonth=new Date(year,month+1,0).getDate();
    const today=new Date();
    const isCurrentMonth=today.getFullYear()===year && today.getMonth()===month;
    const cells=[];
    for(let i=0;i<firstDay;i++)
        cells.push(null);
    for(let d=1;d<=daysInMonth;d++)
        cells.push(d);
    return (
     <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-1.5">
        {days.map((d) => (
          <div
            key={d}
            className="text-center text-[11px] font-bold text-amber-700 uppercase tracking-widest py-1"
          >
            {d}
          </div>
        ))}
      </div>
 
      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          const key = day ? map(year, month, day) : `empty-${i}`;
          const isDayToday = isCurrentMonth && day === today.getDate();
          const isFuture =
            year > today.getFullYear() ||
            (year === today.getFullYear() && month > today.getMonth()) ||
            (isCurrentMonth && day > today.getDate());
 
          return (
            <Daycell
              key={key}
              day={day}
              mood={day ? moods[map(year, month, day)] : null}
              isToday={isDayToday}
              isFuture={isFuture}
              onClick={() => day && onDayClick(day)}
            />
          );
        })}
      </div>
    </div>
  );
}