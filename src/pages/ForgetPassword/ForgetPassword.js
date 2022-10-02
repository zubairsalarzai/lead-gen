import React from 'react'
import './ForgetPassword.css'
import logo2 from '../assets/logo2.jpg'
import { Input } from 'antd';
import { UserOutlined ,LockOutlined } from '@ant-design/icons';
function ForgetPassword() {
  return (
    <div className='forgetPassword'>
        <div className='forgetPassword1'>
        <img src={logo2} alt=''/>
         <div className='forgetPasswordContent'>
         <h2>Forget Password?</h2>
         <p>Please enter your email to get password</p>
         <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 p-1'>
                <Input size="large" placeholder="Email" prefix={<UserOutlined />} />

                </div>

                <div className='col-4'></div>

            </div>
               
           <div className='forgetPasswordButton'>
           <br/>
           <button type="button" className="btn btn-primary">RESET PASSWORD</button>

           </div>
            
         </div>
        </div>
        <div className='forgetPassword2'>
        <div className='forgetPassword2text'>
            <h2>Didn't have an account</h2>
            <p>Simply create your account by click the sign up button</p>
            <button type="button" className="btn btn-primary">SIGN UP</button>
            </div>
        </div>

    </div>
  )
}

export default ForgetPassword