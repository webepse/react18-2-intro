import Affichage from "./Affichage";

const Membre = ({nom, children, age, handleChange, hideName}) => {
    // const nom = props.nom
    // const children = props.children
    // const {nom, children} = props
    return ( 
        <>
            <Affichage 
                nom={nom}
                age={age}
            />
            <input type="text" value={nom} onChange={handleChange}/>
            <button onClick={hideName}>X</button>
            { children ? <p>{children}</p> : null }
        </>
     );
}
 
export default Membre;