import SigninSignupLeft from '../../components/SigninSignupLeft/SigninSignupLeft';

import SigninSignupRight from '../../components/SigninSignupRight/SigninSignupRight';

import './Signup.css';

export default function Signin() {
  return (
    <div className="sign-in-container">
      <div className="sign-in-left">
        <SigninSignupLeft />
      </div>
      <div className="sign-in-right">
        <SigninSignupRight />
      </div>
    </div>
  )
}
