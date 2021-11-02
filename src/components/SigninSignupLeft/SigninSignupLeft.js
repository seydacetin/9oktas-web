import {Link} from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';

import './SigninSignupLeft.css'

export default function SigninSignupLeft() {
  return (
    <div className="welcome-wrapper">
      <h2 className="welcome-header">9oktas.com Sitesine Hoşgeldiniz</h2>
      <div className="cizgi" style={{background:'#f8ffff',width:'35%'}}></div>
      <p className="welcome-p">
        Dijital varlıklarınızı güvenle saklayabilmek için en ideal bulut yedekleme platformu.
      </p>
      <p className="welcome-p">
        Şimdi üye olun ve dijital varlıklarınızı 9oktas farkıyla saklayın.
      </p>
      <p className="welcome-p">
        Zaten bir hesabın var mı ?
      </p>
      <Link to='/signin'>
        <CustomButton style={{marginTop:'5%'}} type='submit' isTransparent >
          GİRİŞ YAP
        </CustomButton>
      </Link>
    </div>
  )
}
