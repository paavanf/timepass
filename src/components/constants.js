//mood data
export const MOODS = [
  { emoji: "😄", label: "Happy", color: "#FFD93D", bg: "#FFF8E1" },
  { emoji: "😌", label: "Calm", color: "#81C784", bg: "#E8F5E9" },
  { emoji: "😐", label: "Meh", color: "#90A4AE", bg: "#ECEFF1" },
  { emoji: "😢", label: "Sad", color: "#64B5F6", bg: "#E3F2FD" },
  { emoji: "😡", label: "Angry", color: "#E57373", bg: "#FFEBEE" },
  { emoji: "😰", label: "Anxious", color: "#CE93D8", bg: "#F3E5F5" },
  { emoji: "🥰", label: "Loved", color: "#F48FB1", bg: "#FCE4EC" },
  { emoji: "🤩", label: "Excited", color: "#FFB74D", bg: "#FFF3E0" },
];
export const days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
export const months=["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
export const map = (y, m, d) =>
  `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;//proper convert karne k liye
export const loadMoods=()=>{
    try{
        const mood=localStorage.getItem("mood-data");
        return mood?JSON.parse(mood):{};
    }
    catch{
        return {};
    }
};//data save kiya tha wapas kaise laun
export const saveMoods=(mood)=>{
    try{
        localStorage.setItem("mood-data",JSON.stringify(mood));
    }
    catch(e)
    {
        console.error("Save failed:",e);
    }
};//data ko browser pe save kaise karun