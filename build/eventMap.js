"use strict";
// Given EventMap type below, create a typesafe function addEventListener who accept 	two argument. 
// first one is type of event and second argument is data associated with given event.
const e = {
    click: { x: 6, y: 6 },
    keypress: { key: '55' }
};
function addEventListener(event, data) {
    console.log(data);
}
addEventListener(e, e.keypress);
