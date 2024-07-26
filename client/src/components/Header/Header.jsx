import BottomNav from "./Components/BottomNav/BottomNav";
import TopNav from "./Components/TopNav/TopNav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <TopNav></TopNav>
      <BottomNav></BottomNav>
    </header>
  );
};

export default Header;
