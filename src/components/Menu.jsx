import MenuItem from "./MenuItem";  
const Menu = ({ children }) => {
    return(

        <section className="menu" aria-labelledy="menu-title">
        <h2 id="menu-title">Sabores de hoy </h2>
        {children}
        </section>

    ); 
};  
export default Menu; 