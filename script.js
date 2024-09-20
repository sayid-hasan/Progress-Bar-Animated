let circle = document.querySelector("circle");
let percentage = document.getElementById("number");
percentage.innerHTML = "0%";
circle.style.strokeDashoffset = 0;
window.onload = () => {
  setInterval(() => {
    if (parseInt(percentage.innerHTML) === 80) {
      clearInterval();
    } else {
      percentage.innerHTML = parseInt(percentage.innerHTML) + 1 + "%";
      let multificatedVal = 439 - 4.39 * parseInt(percentage.innerHTML);

      circle.style.strokeDashoffset = multificatedVal;
    }
  }, 40);
};
