import HeaderMenu from "./Header";
import Footer from "./Footer";
import data from "~/utils/seed.json";
const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col items-stretch ">
      <HeaderMenu links={data.links} />
      <main className=" mt-[80px] grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
