// const width = 100
const perfData = window.performance.timing // The PerformanceTiming interface represents timing-related performance information for the given page.
const EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart)
const time = parseInt((EstimatedTime / 1000) % 60) * 100
console.log(time)
// Loadbar Animation
// $('.loadbar').animate(
//   {
//     width: width + '%'
//   },
//   time
// )
// // Loadbar Glow Animation
// $('.glow').animate(
//   {
//     width: width + '%'
//   },
//   time
// )
// const animateValue = (id, start, end, duration) => {
//   const range = end - start
//   const increment = end > start ? 1 : -1
//   const stepTime = Math.abs(Math.floor(duration / range))
//   const obj = $(id)
//   let current = start
//   const timer = setInterval(function () {
//     current += increment
//     $(obj).text(current + '%')
//     // obj.innerHTML = current;
//     if (current === end) {
//       clearInterval(timer)
//     }
//   }, stepTime)
// }
// Percentage Increment Animation
// const PercentageID = $('#precent')
// const start = 0
// const end = 100
// const durataion = time
// animateValue(PercentageID, start, end, durataion)
// Fading Out Loadbar on Finised
setTimeout(function () {
  console.log("load completed")
}, time)
