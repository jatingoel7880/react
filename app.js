import React from "react";
import ReactDOM  from "react-dom/client";

//part of react 
// const heading=React.createElement("h1",{id: "heading"},"Hello World from React!");
//part of react DOM. all the react code will run. rendering inside the root
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



/** 
 * 
 * <div id="parent">
 *       <div id="child">
 *         <h1>I'm an h1 tag</h1>
 *         <h2>I'm an h1 tag</h2>
 *        </div>
 * </div>
 * 
 */

// const parent=React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
//give two elements as siblings then create an array of childrens 
//array of children if have two or more children at same level like above h1 and h2 
// [React.createElement("h1",{}, "I'm an h1 tag"),
// React.createElement("h2",{}, "I'm an h2 tag")]));


// root.render(parent);
// console.log(parent);


/** 
 * 
 * <div id="parent2">
 *     <div id="child">
 *         <h1>I'm an h1 tag</h1>
 *         <h2>I'm an h1 tag</h2>
 *     </div>
 *     <div id="child">
 *         <h1>I'm an h1 tag</h1>
 *         <h2>I'm an h1 tag</h2>
 *     </div>
 * </div>
 * 
 */

const parent2=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{}, "I'm an h1 tag"),
React.createElement("h2",{}, "I'm an h2 tag")]),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{}, "I'm an h1 tag"),
React.createElement("h2",{}, "I'm an h2 tag")])]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);

//The above code looks so tedious and hetic.
// So resolve this issue JSX is used to work with tags  