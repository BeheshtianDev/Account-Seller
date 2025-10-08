import Navbar from "../../Navbar";
import ButtonHighlight from "../../ButtonHighlight";
import MobileMenu from "../../MobileMenu";
const Header = () => {
  return (
    <div className="w-full flex justify-between items-start px-[3vw] pt-7 z-50 fixed top-0">
      <MobileMenu />
      <Navbar />
      <ButtonHighlight />
    </div>
  );
};

export default Header;
