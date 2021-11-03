import {useState} from 'react';

import FormInput from "../FormInput/FormInput"
import CustomButton from '../CustomButton/CustomButton';

import './SignupRight.css';

export default function SigninSignupRight() {
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [secondPassword,setSecondPassword]=useState('');

  const handleChange = e => {
    const {value,name} = e.target;
    switch(name){
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      case 'secondPassword':
        setSecondPassword(value)
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
    console.log({email,username,password,secondPassword});
    setEmail('');
    setUsername('');
    setPassword('');
    setSecondPassword('');
  }

  return (
    <div className="sign-up-wrapper">
    <div className="sign-up-sub-wrapper">
      <h2 className="title">Kayıt Ol</h2>
      <div className="cizgi" style={{background:'#00a2ff',width:'21%'}}></div>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
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
        <FormInput 
          name="secondPassword"
          type="password"
          value={secondPassword}
          handleChange={handleChange}
          label="Şifre tekrarı"
          required
        />
        <CustomButton type='submit'>
          KAYIT OL
        </CustomButton>
      </form>
    </div>
    </div>
  )
}