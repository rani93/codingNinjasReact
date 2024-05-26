const ele = (<div>
    <h1>heading</h1>
    <p>paragraph</p>
</div>);
ReactDOM.createRoot(document.getElementById("root")).render(ele);


// one variable should have only one parent element as in this div is the parent element which contain h1 and p


// in this an unnecessay parent element is created what if i want want to create this parent element here the concept of react fragment came in picture here is the example of this


const frag = (<React.Fragment>
<h1>fragment heading</h1>
    <p>fragment paragraph</p>
</React.Fragment>)

ReactDOM.createRoot(document.getElementById("root")).render(frag);


// at an instance only one thing is going to render either above or lower one at a time u have to comment out another one





