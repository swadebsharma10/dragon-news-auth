import moment from 'moment';
import logo from '../../assets/photo/logo.png';

const Header = () => {
      return (
            <div>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p className='font-bold'>{moment().format('LLLL')}</p>
            </div>
      );
};

export default Header;