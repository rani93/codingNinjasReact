function App(){
    let student =[
        {
            name:"rani",
            class:"10",
            rollno:"2"
        },
        {
            name:"rani singh",
            class:"11",
            rollno:"23"
        },
        {
            name:"rani kumari",
            class:"110",
            rollno:"253"
        }

    ];
    return(
        <>
        <h1>
            Student Details
        </h1>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>class</th>
                <th>rollno</th>
            </tr>
            </thead>
            <tbody>
            {
                student.map((stu)=>
                    (
                        <tr>
                            <td>{stu.name}</td>
                            <td>{stu.class}</td>
                            <td>{stu.rollno}</td>
                        </tr>
                    )

                )
            }
            </tbody>

        </table>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
