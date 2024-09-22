import moment from 'moment';
import logo from '../../assets/photo/logo.png';

const Header = () => {
      return (
            <div className='text-center space-y-3 py-3'>
                <img className='mx-auto' src={logo} alt="Logo" />
                <p>Journalism Without Fear or Favour</p>
                <p className='font-bold'>{moment().format('LLLL')}</p>
            </div>
      );
};

export default Header;