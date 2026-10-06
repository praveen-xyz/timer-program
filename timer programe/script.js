function updateclock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  const meridian = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  hours = hours.toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
  document.getElementById("time").textContent = timeString;
}

updateclock();
setInterval(updateclock, 1000);
