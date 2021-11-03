import {useState} from 'react';

import FormInput from "../FormInput/FormInput"
import CustomButton from '../CustomButton/CustomButton';

import './SigninRight.css';

export default function SigninSignupRight() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleChange = e => {
    const {value,name} = e.target;
    switch(name){
      case 'password':
        setPassword(value)
        break;
      case 'username':
        setUsername(value)
        break;
      default:
        break;
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({username,password});
    setUsername('');
    setPassword('');
  }

  return (
    <div className="sign-in-wrapper">
    <div className="sign-in-sub-wrapper">
      <h2 className="title">Giriş Yap</h2>
      <div className="cizgi" style={{background:'#00a2ff',width:'21%'}}></div>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="username"
          value={username}
          handleChange={handleChange}
          label="Kullanıcı Adı"
          required
        />
        <FormInput 
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Şifre"
          required
        />
        <CustomButton type='submit'>
          GİRİŞ YAP
        </CustomButton>
      </form>
      <a href="/signup" className="forgotPassword">
        Şifremi unuttum
      </a>
    </div>
    </div>
  )
}
