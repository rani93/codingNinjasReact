const Hed = ()=>{
    const name = "Rani";
    const age = 10;

    return(<>
    <h1>let's create javaScript {name}'s age is{age}</h1></>);

}
ReactDOM.createRoot(document.getElementById("root")).render(<Hed/>)