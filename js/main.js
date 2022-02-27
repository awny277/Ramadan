var x = document.getElementById("audio");
function enableAutoplay() {
  x.load();
  x.autoplay = true;
  x.currentTime = 9;
}
function pauseBtn() {
  x.pause();
}

// window.onload = function () {
//   document.getElementById("play").click();
// };

// x.addEventListener("canplaythrough", function () {
//   this.currentTime = 12;
//   this.play();
// });

(function () {
  const remainingTimeElement = document.querySelector(
    ".container__remainingTime"
  );
  //تاريخ اليوم و الشهر و السنه الميلادي
  const todayGeorgianDate = moment(); //Tue Feb 22 2022
  // تاريخ اليوم و الشهر و السنه الهجري
  const todayHijriFormat = todayGeorgianDate.format("iYYYY/iM/iD"); // 1443/7/21
  // تاريخ اليوم و الشهر و السنه الهجري بالميلادي
  const todayHijriDate = moment(todayHijriFormat, "iYYYY/iM/iD"); // 2022-02-22
  // تاريخ السنه الهجرية
  const thisHijriYear = parseInt(todayGeorgianDate.format("iYYYY/iM/iD")); //1443
  // تاريخ اول يوم رمضان في السنه الميلادية
  let ramadanDate = moment(`${thisHijriYear}/9/1 `, "iYYYY/iM/iD"); //2022-04-02
  // حساب عدد ايام شهر رمضان
  let daysInRamadan = ramadanDate.daysInMonth(); // 30
  // عدد الايام المتبقية علي شهر رمضان
  let diffr = todayHijriDate.diff(ramadanDate, "days"); // -39
  if (diffr >= 0) {
    if (diffr <= daysInRamadan) {
      // during ramadan
      document
        .querySelector("container")
        .classList.add("container--duringRamadan");
      diffr = daysInRamadan - diffr;
    } else {
      //after Ramadan
      const nextYearHijri = thisHijriYear + 1;
      ramadanDate = moment(`${nextYearHijri}/9/1`, "iYYYY/iM/iD");
      diffr = todayGeorgianDate.diff(ramadanDate, "days");
    }
  }

  // remainingTimeElement.textContent = Math.abs(diffr).toLocaleString("ar-sa");

  let ramadanday = new Date(ramadanDate).getTime();
  let zero = 0;
  let counter = setInterval(() => {
    let today = new Date().getTime();
    let diffrent = ramadanday - today;
    let dayes = Math.floor(diffrent / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffrent % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
    let minutes = Math.floor((diffrent % (1000 * 60 * 60)) / 1000 / 60);
    let second = Math.floor((diffrent % (1000 * 60)) / 1000);

    remainingTimeElement.innerHTML =
      dayes < 10
        ? `${zero.toLocaleString("ar-sa")}${dayes.toLocaleString("ar-sa")}`
        : dayes.toLocaleString("ar-sa");
    let timeHour = document.querySelector(".container__remainingHour");
    timeHour.innerHTML =
      hours < 10
        ? `${zero.toLocaleString("ar-sa")}${hours.toLocaleString("ar-sa")}`
        : hours.toLocaleString("ar-sa");
    let timeminutes = document.querySelector(".container__remainingMin");
    timeminutes.innerHTML =
      minutes < 10
        ? `${zero.toLocaleString("ar-sa")}${minutes.toLocaleString("ar-sa")}`
        : minutes.toLocaleString("ar-sa");
    let timesecond = document.querySelector(".container__remainingSec");
    timesecond.innerHTML =
      second < 10
        ? `${zero.toLocaleString("ar-sa")}${second.toLocaleString("ar-sa")}`
        : second.toLocaleString("ar-sa");
    if (diffrent < 0) {
      clearInterval(counter);
    }
  }, 1000);

  // console.log(todayGeorgianDate);
  // console.log(todayHijriFormat);
  // console.log(todayHijriDate);
  // console.log(thisHijriYear);
  // console.log(ramadanDate);
  // console.log(daysInRamadan);
  // console.log(diffr);
})();
