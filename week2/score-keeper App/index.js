let score = 0;
let wicket = 0;

function clickOne(){
    alert("1 is clicked!");
    score+=1;
    element.render(<App/>)

}
const App=()=>(
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE:{score}/{wicket}</h2>
    <div>
        <button onClick={clickOne}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>wicket</button>

    </div>
    </>
)
const element =ReactDOM.createRoot(document.getElementById("root"));
element.render(<App/>)

//whenever we are creating the function we dont need to write like clickOne() like this as it automaticall call the fnction eventhough we are not clicking the one
// the right way is  we have to write only clickOne
