function findMatching(drivers, obj) {
  return drivers.filter((element) => {
    return element.toLowerCase().startsWith(obj.toLowerCase());
  })
}

function fuzzyMatch(drivers, obj) {
  return drivers.filter((element) => {
    return element.toLowerCase().startsWith(obj.toLowerCase());
  })
}

// function matchName(drivers, obj) {
//   return drivers.filter((element) => {
//     return element.toLowerCase().startsWith(obj.toLowerCase());
//   })
// }

// function matchName(drivers, string) {
//   return drivers.filter((element) => {
//     return drivers.name = string 
//   })
// }
//   let matchDriver = drivers.filter(drivers => drivers.name = string)
//   return matchDriver
// }

// function matchName(drivers, string) {
//   let result = drivers.filter(drivers => drivers.name === string)
//   return result
// }
// console.log(matchName(drivers, string))

function matchName(drivers, string) {
  let result = drivers.filter(drivers => drivers.name === string)
  return result
}
console.log(matchName(drivers, 'Bobby'))