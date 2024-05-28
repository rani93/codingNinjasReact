function Students(){
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
function Cars(){
    let car =[
        {
            name:"maruti",
            class:"101",
            rollno:"274"
        },
        {
            name:"sony",
            class:"11",
            rollno:"23"
        },
        {
            name:"honda",
            class:"110",
            rollno:"253"
        }

    ];
    return(
        <>
        <h1>
          Cars Details
        </h1>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>quantity</th>
                <th>number</th>
            </tr>
            </thead>
            <tbody>
            {
                car.map((stu)=>
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

function App(){
    // return(
    //     <>
    //     <Students/>
    //     <Cars/>
    //     </>
        
    // )

    //Rendering the components based on based on some conditions is called conditional rendering
    let showcase = false;
    if(showcase){
        return(
            <Students/>
        )
    }
    else{
        return <Cars/>
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
