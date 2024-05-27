const App = () => {
    let name ="Rani Singh";
    var age =10;
    const demo = null;
    var undef;
    let bool = true;
    return(<>
        <p>String: {name}</p>
        <p>Number:{age}</p>
        <p>null value: {demo}</p>
        <p>Undefined Value:{undef}</p>
        <p>bool:{bool}</p>
        </>);

    }

ReactDOM.createRoot(document.getElementById("root")).render(<App />);