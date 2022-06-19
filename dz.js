const isEmpty = (object) => {
   return Object.values(object).filter(el=>el!==null&&el!==undefined&&el!==NaN&&el!=='').length>0?false:true
};
console.log(isEmpty({ a: 1, b: undefined}))
console.log(isEmpty({ a: undefined}))

const isEqualDeep = (a,b) => {
   return JSON.stringify(a)===JSON.stringify(b)
};
const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };

console.log(isEqualDeep(data,data3))
console.log(isEqualDeep(data,data2))

const intersection = (firstObject, secondObject) => {
   for (let firstObjectKey in firstObject) {
      console.log(firstObjectKey+firstObject[firstObjectKey])
      for (let secondObjectKey in secondObject) {
         console.log(secondObjectKey+secondObject[secondObjectKey])
         if (firstObjectKey+firstObject[firstObjectKey]===secondObjectKey+secondObject[secondObjectKey]){
            return JSON.parse(`{"${firstObjectKey}":"${firstObject[firstObjectKey]}"}`)
         }
      }
   }
};

const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2));









