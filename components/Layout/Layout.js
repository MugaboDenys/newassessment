import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-greyish relative">
      <div className="max-w-[1170px] mx-auto ">
        <Navbar />
        <div className="font-inter">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
