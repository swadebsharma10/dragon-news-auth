import Header from '../components/Shared/Header';
import Navbar from '../components/Shared/Navbar';
import LeftSideNav from '../components/SideNav/LeftSideNav';
import RightSideNav from '../components/SideNav/RightSideNav';

const Home = () => {
      return (
            <>
                 <Header></Header>
                 <Navbar></Navbar>
                  
                  <section className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <div className='border'>
                              <LeftSideNav></LeftSideNav>
                        </div>
                        <div className='md:col-span-2 border'>
                              <h2 className="text-4xl">News are coming soon</h2>
                        </div>
                        <div className='border'>
                              <RightSideNav></RightSideNav>
                        </div>
                  </section>
            </>
      );
};

export default Home;