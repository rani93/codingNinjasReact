import React from "react";
// import './styles.css';
import styled from "styled-components";

const Title = styled.div`
        font-size: 30px;
        color:white;
        font-weight: bold;
        text-transform: uppercase;

`;

const CartCount = styled.span`
        background: ${(props)=> props.color};
        border-radius:50%;
        padding: 4px 8px;
        position: absolute;
        right:13px;
        top:-4px;
        font-size: 12px;
        visibility: ${(props)=>props.show? "visible":"hidden"};
`;



 class Navbar extends React.Component{
    render(){
    return(
        <>
        <div className="nav" 
        //    style={{   first way of styling
        //     display: "flex",
        //     flexWrap: "nowrap",
        //     flexDirection:"row",
        //     justifyContent:"space-between", 
        //    }}
        style={styles.nav}//second way of styling
        >
            {/* <div style={styles.title}>Movie-App</div> */}
            <Title>MOVIE APP</Title>
            <div style={styles.cartContainer}>
                <img alt="Cart icon " src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" style={styles.cartIcon}/>
                {/* <span style={styles.cartCount}>0</span> */}
                <CartCount color="yellow" show={true}>0</CartCount>
            </div>
        </div>
        </>

        // by using style component



        )
    }

}
export default Navbar;

const styles ={
    nav:{
        display: "flex",
flexWrap: "nowrap",
flexDirection:"row",
justifyContent:"space-between",
alignItem:"center",
            
    },
//   title:{fontSize: 30,
//         color:"white",
//         fontWeight:"bold",
//         textTransform:"uppercase"},
    
    cartContainer:{
        position:"relative",
        cursor:"pointer",
        
    },
    cartIcon:{
        height:48,
        marginRight:20,
    },
    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding: "4px 8px",
        position:"absolute",
        right:10,
        top:-4,

    }

}