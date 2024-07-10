import style from "styled-components";
let Button = style.button`
background-color:${(props)=>props.bg};
`;

let Container = style.div`
flex:${(props)=>props.flex};

`;

export {Button, Container};