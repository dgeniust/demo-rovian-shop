import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ShopLayout = () => (
  <>
    <Header variant="shop" />
    <main className="pt-24">
      <Outlet />
    </main>
    <Footer variant="light" />
  </>
);

export default ShopLayout;
