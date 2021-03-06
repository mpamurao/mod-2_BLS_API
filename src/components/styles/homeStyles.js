// to use material ui styles in class components
// have to use Higher-Order Component API {withStyles} 
// instead of Hook API {makeStyles}

const homeStyles = {
    home:{
        paddingBottom:"3rem",
    },
    homeTitle: {
        borderBottom:"3px solid",
        padding:"1.2rem 1rem 0.5rem 1rem",
        fontSize:"1.4rem",
        fontWeight:"900",
    },
    formControl:{
        minWidth:"200px",
        justifyContent:"center",
        margin:"1rem 1rem 1rem 1rem",
    },
    error:{
        color:"red",
        padding:"0.8rem 1rem 1rem 1rem",
        fontWeight:"900",
    },
    li:{
        marginLeft:"1rem",
    },
}


export default homeStyles;