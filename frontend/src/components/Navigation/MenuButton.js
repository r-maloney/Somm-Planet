import { Button, Wrapper, Menu, MenuItem } from "react-aria-menubutton";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Navigation.css";

const MenuButton = () => {
  let history = useHistory();
  const countries = useSelector((state) => Object.values(state.country));

  const menuItems = countries.map((country) => (
    <li key={country.id} className='country__menu-menuItem'>
      <MenuItem value={country.id}>{country.name}</MenuItem>
    </li>
  ));

  const handleSelection = (value, event) => {
    history.push(`/countries/${value}}`);
  };

  return (
    <Wrapper className='country__menu' onSelection={handleSelection}>
      <Button className='country__menu-button'>Countries</Button>
      <Menu className='country__menu-menu'>
        <h2 className='country__menu-header'>Explore Countries</h2>
        <ul>{menuItems}</ul>
      </Menu>
    </Wrapper>
  );
};

export default MenuButton;
