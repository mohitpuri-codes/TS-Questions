// write a function that returns the first non-repeating character in a string
// ex.
// abbacded => "c"
// xxyyzz => ""
// axxyyzz => "a"

function firstNonRepeatChar(str: string):string{
  let res:string = '';
  let mp = new Map<string,number>();
  for (const element of str) {
    if(mp.has(element)){
      mp.set(element,(mp.get(element)!+1))
    }else{
      mp.set(element,1)
    }
  }
  for(let[key,value] of mp){
    if(value===1){
      res=key;
      break
    }
  }
  return res;
}

console.log(firstNonRepeatChar("abbacded"));
console.log(firstNonRepeatChar("xxyyzz"));
console.log(firstNonRepeatChar("axxyyzzacb"));
