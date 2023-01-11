import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-greyish relative">
      <div className="max-w-[1170px] mx-auto ">
        <Header />
        <Navbar />
        <div className="font-inter">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
