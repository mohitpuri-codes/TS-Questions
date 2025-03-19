// Given EventMap type below, create a typesafe function addEventListener who accept 	two argument. 
// first one is type of event and second argument is data associated with given event.
 
type EventMap = {
  click: { x: number; y: number };
  keypress: { key: string };
} ;

const e:EventMap={
  click:{x:6,y:6},
  keypress:{key:'55'}
} 

type SecondArg = typeof e[keyof typeof e]
 
function addEventListener<T extends EventMap,U extends SecondArg>(event:T, data:U){
console.log(data);
}

addEventListener(e,e.keypress)


// type Events={type:"click",event:MouseEvent}|{type:"focus",event:FocusEvent}|{type:"keydown",event:KeyboardEvent}
// it should be {type:"click",event:MouseEvent} from Events type. Do not hard-code it. use some utility type to extract click event type.
// type ClickEvent= Extract<Event,{type:'click'} >

 
type Events={type:"click",event:MouseEvent}|{type:"focus",event:FocusEvent}|{type:"keydown",event:KeyboardEvent}
 
// exclude keydown event from Events type.
type NotKeyDown= Exclude<Events,{type:'keydown'}>