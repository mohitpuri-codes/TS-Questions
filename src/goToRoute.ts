// convert this goToRoute function into GENERIC function that accepts string only
//  string must start with /
function goToRoute<T extends `/${string}`>(path:T){
console.log(path)
}
// goToRoute("https://google.com") // ts error
goToRoute("/user-detail") // no error

