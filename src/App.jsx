import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import MenuItem from "./components/MenuItem.jsx";

const menuItem = {
  id: 1,
  iceCream: {
    id: 3,
    name: "Mora silvestre",
    imagePath: "images/mora.svg",
  },
  description: "Mora de Ambato con un toque de limón.",
  price: 12,
  inStock: false,
};
const menuItem2 = {
  id: 2,
  iceCream: {
    id: 4,
    name: "Pistacho",
    imagePath: "images/pistacho.svg",
  },
  description: "Sabor suave con trozos de nuez.",
  price: 1,
  inStock: true,
};

const App = () => {
  return (
    <>
      <main>
        <br />
        <Header />
        <Menu>
          <MenuItem menuItem={menuItem} />
          <br />
          <MenuItem menuItem={menuItem2} />
        </Menu>
      </main>
      <br />
      <Footer />
    </>
  );
};
export default App;
