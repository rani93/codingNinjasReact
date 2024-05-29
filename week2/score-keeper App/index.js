let score = 0;
let wicket = 0;
let ballWiseResult =[];

function addSum(num){
    if(wicket<10)
        {
            ballWiseResult.push(num);
            score+=num;
            element.render(<App/>)
        }
    
    

}

function addWicket(){
    if(wicket<10)
    {
        ballWiseResult.push("W");
        wicket+=1;
        element.render(<App/>)
    }
    
}
const Result =()=>(
    
    <div>
        {

            ballWiseResult.map((res,index)=>(
            <>
            {(index%6 ===0 ? <br></br>: null)}
            <span style={res === "W" ? { color: 'red' } : {}}> {/* Corrected style object */}
                        {res === 0 ? <strong>.</strong> : res}
                    </span> &nbsp; &nbsp;
            </>))
        }
    </div>
)
const  ScoreButton = ()=>(

    <div>
        <button onClick={()=>{addSum(0)}}>0</button>
        <button onClick={()=>{addSum(1)}}>1</button>
        <button onClick={()=>{addSum(2)}}>2</button>
        <button onClick={()=>{addSum(3)}}>3</button>
        <button onClick={()=>{addSum(4)}}>4</button>
        <button onClick={()=>{addSum(5)}}>5</button>
        <button onClick={()=>{addSum(6)}}>6</button>
        <button onClick={()=>{addWicket()}}>wicket</button>

    </div>
    
)
const App=()=>(
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE:{score}/{wicket}</h2>
    <ScoreButton/>
    <Result/>
    </>
    

)
const element =ReactDOM.createRoot(document.getElementById("root"));
element.render(<App/>)

//whenever we are creating the function we dont need to write like clickOne() like this as it automaticall call the fnction eventhough we are not clicking the one
// the right way is  we have to write only clickOne


