function App(){
    let name = prompt("what is your name");
    let loggedin = false;
    return (
        <>
        <h1>
            hello {name}
        </h1>       
            <h1>hello
                {loggedin?"rani":"user"}!
            </h1>
    
        </>
    )
}





ReactDOM.createRoot(document.getElementById("root")).render(<App/>);





//noted
// 1.) In JSX, you cannot declare variables directly within the curly braces that are intended for rendering.
//this is not valid because you cannot declare variables directly within JSX. JSX is syntactic sugar for React.createElement() calls, and it expects expressions, not statements like variable declarations.

// for and operator it will take last truthy value and will show first false value

// example  {loggedIn && <p> lastvalue</p>}

// or is opposite of and operator





