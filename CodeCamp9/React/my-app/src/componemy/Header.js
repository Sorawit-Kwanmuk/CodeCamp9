import Menu from "./Menu";
function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img src='https://picsum.photos/id/237/50/50' alt='My Logo' />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
