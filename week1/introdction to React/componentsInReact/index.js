function App(){
    return(<>
    <h1>fragment heading</h1>
    <p>fragment paragraph</p>
    </>)
}

// ReactDOM.createRoot(document.getElementById("root")).render(App());

//thing to be remember that if you write App() inside render then it will not be consider as component it will be consider as an function if u want to consider that thing as an component then u have to write it as <App/>

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
// difference between them 

// Context and Usage:
// Function Call: Executes a function and uses its return value.
// Component Call: Tells React to render a component, potentially involving lifecycle methods and state management.
// Output:
// Function Call: Can return any JavaScript value.
// Component Call: Should return a React element, null, or false.
// Management by React:
// Function Call: Not managed by React (unless it's a hook or related to state/effects).
// Component Call: Managed by React, including re-rendering on state or props changes.


