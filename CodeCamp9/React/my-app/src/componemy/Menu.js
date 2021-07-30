import "./Menu.css";
function Menu() {
  return (
    <div>
      <ul className='menu'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
