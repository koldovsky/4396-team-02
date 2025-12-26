// https://www.codewars.com/kata/santaclausable-interface
function isSantaClausable(obj) {
  return typeof obj.sayHoHoHo === "function" &&
         typeof obj.distributeGifts === "function" &&
         typeof obj.goDownTheChimney === "function";
}
