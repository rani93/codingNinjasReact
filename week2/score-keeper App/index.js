let score = 0;
let wicket = 0;

function addSum(num){
    
    score+=num;
    element.render(<App/>)

}
const App=()=>(
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE:{score}/{wicket}</h2>
    <div>
        <button onClick={()=>{addSum(1)}}>1</button>
        <button onClick={()=>{addSum(2)}}>2</button>
        <button onClick={()=>{addSum(3)}}> 3</button>
        <button onClick={()=>{addSum(4)}}>4</button>
        <button onClick={()=>{addSum(5)}}>5</button>
        <button onClick={()=>{addSum(6)}}>6</button>
        <button onClick={()=>{addSum()}}>wicket</button>

    </div>
    </>
)
const element =ReactDOM.createRoot(document.getElementById("root"));
element.render(<App/>)

//whenever we are creating the function we dont need to write like clickOne() like this as it automaticall call the fnction eventhough we are not clicking the one
// the right way is  we have to write only clickOne


