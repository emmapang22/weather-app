export const dynamicBackgroundColors = () => {
  const currentTime = new Date().getHours();
  const heading = document.getElementById("main-heading") as HTMLHeadingElement;

  if (currentTime >= 4 && currentTime < 10) {
    document.body.classList.add("from-amber-200", "to-cyan-200");
  } else if (currentTime >= 10 && currentTime < 16) {
    document.body.classList.add("from-cyan-200", "to-blue-400");
  } else if (currentTime >= 16 && currentTime < 22) {
    document.body.classList.add("from-purple-400", "to-indigo-800");
    heading.classList.add("text-white");
  } else {
    document.body.classList.add("from-blue-950", "to-slate-950");
    heading.classList.add("text-white");
  }
};
