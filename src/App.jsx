import { useState,useEffect,useCallback } from 'react'
import {map,loadMoods,saveMoods} from './components/constants'
import Header from "./components/Header";
import MoodSelector from './components/Moodselector'
import CalendarGrid from './components/Calendargrid'
import MoodStats from './components/Moodstats'
import MoodLegend from './components/MoodLegend'
export default function App() {
  const today=new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [moods,setMoods] = useState({});
  const [selectedDay,setSelectedDay]=useState(today.getDate());
  //load saved data
  useEffect(()=>{
    setMoods(loadMoods())
  },[]);
  
  const handleSelectMood=useCallback((e)=>{
    const key=map(year,month,selectedDay);
    setMoods((prev)=>{
      const next={...prev};
      if(next[key]===e)delete next[key];
      else next[key]=e;
      saveMoods(next);
      return next;
    });
  },
[year,month,selectedDay]
)

const handlePrev=()=>{
  if(month===0)
  {
    setMonth(11);
    setYear((y)=>y-1);
  }
  else
    setMonth((m)=>m-1);
  setSelectedDay(1);
}

const handleNext=()=>{
  if(month===11)
  {
    setMonth(0);
    setYear((y)=>y+1);
  }
  else
    setMonth((m)=>m+1);
  setSelectedDay(1);
}
  

const handleToday = () => {
    setMonth(today.getMonth());
    setYear(today.getFullYear());
    setSelectedDay(today.getDate());
  };

   const isToday =
    year === today.getFullYear() &&
    month === today.getMonth() &&
    selectedDay === today.getDate();

    const currentKey=map(year,month,selectedDay);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50 flex justify-center p-6">
      <div className="max-w-md w-full flex flex-col gap-4 animate-fade-up">
        <Header
          month={month}
          year={year}
          onPrev={handlePrev}
          onNext={handleNext}
          onToday={handleToday}
        />
        <MoodSelector
          selected={moods[currentKey]}
          onSelect={handleSelectMood}
          dateKey={currentKey}
          isToday={isToday}
        />
        <CalendarGrid
          month={month}
          year={year}
          moods={moods}
          onDayClick={(d) => setSelectedDay(d)}
        />
        <MoodStats month={month} year={year} moods={moods} />
        <MoodLegend />
        <p className="text-center text-xs text-amber-700 font-semibold pb-3">
          tap a day → pick an emoji → grow your garden 🌻
        </p>
      </div>
    </div>
  );
}
 