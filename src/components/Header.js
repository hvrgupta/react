import { APP_LOGO } from "../utils/constants";

export const HeaderComponent = () => (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' 
            src={APP_LOGO} alt='app=logo'>
            </img>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

