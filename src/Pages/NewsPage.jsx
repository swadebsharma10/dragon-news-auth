import { useParams } from "react-router-dom";
import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";
import RightSideNav from "../components/SideNav/RightSideNav";


const NewsPage = () => {
      const {id} = useParams();
      return (
            <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                  <div className="col-span-3">
                        <h2 className="text-2xl">News details {id}</h2>
                  </div>
                  <div>
                        <RightSideNav></RightSideNav>
                  </div>
            </div>
            </>
      );
};

export default NewsPage;