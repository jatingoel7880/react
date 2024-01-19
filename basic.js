

//React Element
//React.createElement => ReactElement -JS Object => HTMLElement(render)
const heading= React.createElement("h1",{id:"heading"},"Namaste");


//JSX is not direclty understandable by JS Engine so JSX is first converted
//or transpiled into React.createElement before it reaches the JS Engine by PARCEL (- Babel)
//JSX heading JSX is like html but not html 
const jsxheading=<h1 id="heading">Namaste and Welcome to you</h1>

// const heading1=(
// <h1 className="head">Namaste and Welcome</h1>
// ) 

//Both ReactElement and JSX have same functionality but prefer JSX over React ELement 

//React Functional component
//it is a normal js function that just return some piece of jsx code
//Two ways:- 
// const HeadingComponent=()=>{
//     return <h1 className="heading"> Namaste Hello </h1>;
// }

//by arrow function
const Title=()=>( 
    <h1 className="head">Namaste and Welcome</h1>
    );

//or by normal function 
// const Title1=function(){ 
//     return (
//         <h1 className="head">Namaste and Welcome</h1>
//         )
//     };



//react element 
const Title1=( 
    <h1 className="head">Namaste and Welcome</h1>
    );


const number=10000;//js expression 

//js expression can be writeen inside the funtion within {}
const HeadingComponen1=()=>(
    <div id="container">
     {/* way of putting function component  */}
    <Title/>
     {/*another way of putting functional component within {}  */}
    {Title()} 
    {/* another way of putting functional component  */}
    <Title></Title>
    {/* way of putting react element inside a component */}
    {Title1} 
    {number}
    {/* component with an another component is called component composition */}
     <h1 className="heading"> Namaste Hello </h1>
     </div>
);


//if want to run functional component then how to do
// root.render(<HeadingComponen1/>);

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponen1/>);