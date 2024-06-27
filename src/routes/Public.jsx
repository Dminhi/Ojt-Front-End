import CustomFooter from "../layouts/public/Footer";
import CustomHeader from "../layouts/public/Header";
import { Outlet } from "react-router-dom";
import UnderHeader from "../layouts/public/UnderHeader";

export default function Public() {
  return (
    <div>
      <CustomHeader></CustomHeader>
      <UnderHeader></UnderHeader>
      <Outlet></Outlet>
      <CustomFooter />
    </div>
  );
}
