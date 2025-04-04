"use strict";
function checkValid(str) {
    const map = new Map();
    for (const element of str) {
        if (element === '(') {
            if (map.has(element)) {
                map.set(element, map.get(element) + 1);
            }
            else {
                map.set(element, 1);
            }
        }
        else if (element === ')') {
            map.set('(', map.get('(') - 1);
        }
        if (element === '[') {
            if (map.has(element)) {
                map.set(element, map.get(element) + 1);
            }
            else {
                map.set(element, 1);
            }
        }
        else if (element === ']') {
            map.set('[', map.get('{') - 1);
        }
        if (element === '{') {
            if (map.has(element)) {
                map.set(element, map.get(element) + 1);
            }
            else {
                map.set(element, 1);
            }
        }
        else if (element === '}') {
            map.set('{', map.get('{') - 1);
        }
    }
    for (const [key, value] of map) {
        if (value !== 0) {
            console.log(`${key},${value}`);
            return false;
        }
    }
    return true;
}
function isValid(s) {
    let st = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            st.push(s[i]);
        }
        else {
            if (st.length > 0 &&
                ((st[st.length - 1] === "(" && s[i] === ")") ||
                    (st[st.length - 1] === "{" && s[i] === "}") ||
                    (st[st.length - 1] === "[" && s[i] === "]"))) {
                st.pop();
            }
            else {
                return false;
            }
        }
    }
    if (st.length === 0)
        return true;
    return false;
}
// console.log(isValid("(())"));
// console.log(isValid("((){}}})"));
console.log(checkValid("()"));
console.log(checkValid("())"));
console.log(checkValid("(())"));
console.log(checkValid("()()"));
console.log(checkValid("({()})"));
console.log(checkValid("({()(})"));
