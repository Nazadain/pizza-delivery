import BottomNav from "./Components/BottomNav/BottomNav";
import TopNav from "./Components/TopNav/TopNav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <TopNav className="top__nav"></TopNav>
      <BottomNav className="bottom__nav"></BottomNav>
    </header>
  );
};

export default Header;
