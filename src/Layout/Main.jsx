import { Outlet } from "react-router-dom";


const Main = () => {
      return (
            <div className="max-w-6xl mx-auto font-poppins">
                  <Outlet></Outlet>
            </div>
      );
};

export default Main;