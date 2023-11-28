const Membre = ({nom, children, age}) => {
    // const nom = props.nom
    // const children = props.children
    // const {nom, children} = props
    return ( 
        <>
            <h2 style={{backgroundColor: age < 35 ? 'dodgerblue':'crimson', color: 'white'}}>Membre :  {nom.toUpperCase()} age: {age}</h2>
            { children ? <p>{children}</p> : null }
        </>
     );
}
 
export default Membre;