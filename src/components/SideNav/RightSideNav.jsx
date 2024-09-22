import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import Qzone1 from '../../assets/photo/qZone1.png';
import Qzone2 from '../../assets/photo/qZone2.png';
import Qzone3 from '../../assets/photo/qZone3.png';

const RightSideNav = () => {
  return (
    <section className="p-4">
      <div className="mb-6">
      <h2 className="font-bold mb-6">Login With Us!</h2>
      <div className="space-y-5">
        <button className="btn btn-outline btn-primary w-full">
        <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline btn-secondary w-full">
        <FaGithub/>
          Login with Github
        </button>
      </div>
      </div>
      <h2 className="font-bold mb-6">Find With Us!</h2>
      <div className="space-y-4 border border-purple-400 rounded p-4">
        <button className="btn btn-outline btn-primary w-full">
        <FaYoutube />
          Youtube
        </button>
        <button className="btn btn-outline btn-secondary w-full">
        <FaTwitter/>
          Twitter
        </button>
        <button className="btn btn-outline btn-success w-full">
        <FaFacebook/>
          FaceBook
        </button>
      </div>
      <h2 className="text-xl font-bold mb-6">Q Zone!</h2>
      <div>
          <img src={Qzone1} alt="" />  
          <img src={Qzone2} alt="" />  
          <img src={Qzone3} alt="" />  
      </div>
    </section>
  );
};

export default RightSideNav;
