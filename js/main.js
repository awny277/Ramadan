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

  remainingTimeElement.textContent = Math.abs(diffr).toLocaleString("ar-sa");

  // console.log(todayGeorgianDate);
  // console.log(todayHijriFormat);
  // console.log(todayHijriDate);
  // console.log(thisHijriYear);
  // console.log(ramadanDate);
  // console.log(daysInRamadan);
  // console.log(diffr);
})();
