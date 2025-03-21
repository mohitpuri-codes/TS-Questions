function checkValid(str:string):boolean{
  const map = new Map<string,number>() 
  for (const element of str) {
    if(element === '(' ){
      if(map.has(element)){
        map.set(element,map.get(element)!+1)
      }else{
        map.set(element,1)
      }
    }else if( element === ')' ){
      map.set('(',map.get('(')!-1);
    }
    if(element === '[' ){
      if(map.has(element)){
        map.set(element,map.get(element)!+1)
      }else{
        map.set(element,1)
      }
    }else if( element === ']' ){
      map.set('[',map.get('{')!-1);
    }
    if(element === '{' ){
      if(map.has(element)){
        map.set(element,map.get(element)!+1)
      }else{
        map.set(element,1)
      }
    }else if( element === '}' ){
      map.set('{',map.get('{')!-1);
    }
  }
  for (const [key,value] of map) {
    if(value!==0) {
      console.log(`${key},${value}`);     
      return false}

  }
  return true
}

console.log(checkValid('()'));
console.log(checkValid('())'));
console.log(checkValid('(())'));
console.log(checkValid('()()'));
console.log(checkValid('({()})'));
console.log(checkValid('({()(})'));
