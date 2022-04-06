function groupByMap<ArrElem, CBResult>(arr: ArrElem[], callback: (elem: ArrElem) => CBResult): any {
  let result: Map<CBResult, ArrElem[]> = new Map()
  arr.forEach((elem) => {
    const key: CBResult = callback(elem);
    const resultItem: ArrElem[] | undefined = result.get(key)
    resultItem ? result.set(key, [...resultItem, elem]) : result.set(key, [elem])
  });
  
  return Object.fromEntries(result.entries());
}

function groupByObj<ArrElem>(arr: ArrElem[], callback: (elem: ArrElem) => number): any {
  let result: {[key: number]: ArrElem[]} = {}
  arr.forEach((elem) => {
    const key: number = callback(elem);
    const resultItem: ArrElem[] | undefined = result[key]
    resultItem ? result[key] = [...resultItem, elem] : result[key] = [elem]
  });
  
  return result;
}

console.log(groupByObj([1.2, 1.1, 2.3, 0.4], Math.floor));
console.log(groupByObj(['one', 'two', 'three'], (el) => el.length));

enum Gender {
  Male,
  Female,
}

console.log(
  groupByObj(
    [
      { g: Gender.Male, n: 'A' },
      { g: Gender.Female, n: 'B' },
      { g: Gender.Female, n: 'C' },
    ],
    (el) => el.g 
  )
);
