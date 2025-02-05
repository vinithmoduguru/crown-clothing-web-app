import { Outlet } from "react-router";
import Directory from "../Directory/Directory";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};
export default Home;
