import { useLoaderData } from 'react-router-dom';
import BreakingNews from '../components/Common/BreakingNews';
import Header from '../components/Shared/Header';
import Navbar from '../components/Shared/Navbar';
import LeftSideNav from '../components/SideNav/LeftSideNav';
import RightSideNav from '../components/SideNav/RightSideNav';
import NewsCard from '../components/Common/NewsCard';

const Home = () => {

      const news= useLoaderData();
     

      return (
            <>
                 <Header></Header>
                 <BreakingNews></BreakingNews>
                 <Navbar></Navbar>
                  
                  <section className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <div className=''>
                              <LeftSideNav></LeftSideNav>
                        </div>
                        <div className='md:col-span-2 '>
                              {
                                    news.map(aNews => <NewsCard
                                    key={aNews._id}
                                    news={aNews}
                                    ></NewsCard>)
                              }
                        </div>
                        <div className=''>
                              <RightSideNav></RightSideNav>
                        </div>
                  </section>
            </>
      );
};

export default Home;