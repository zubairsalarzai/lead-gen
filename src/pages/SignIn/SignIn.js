import React from 'react'
import './SignIn.css'
import logo2 from '../assets/logo2.jpg'

import { Input } from 'antd';
import { UserOutlined ,LockOutlined } from '@ant-design/icons';

function SignIn() {
   
  return (
    <div className='signIn'>
        <div className='signIn1'>
            <img src={logo2} alt=''/>
            <div className='loginContent'>
            <h2>Sign In to Lead-Gen</h2>
            
            <i class="fa fa-facebook-square fa-2x fa-fw" aria-hidden="true"></i>
            <i class="fa fa-twitter-square fa-2x fa-fw" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square fa-2x fa-fw" aria-hidden="true"></i>
            <p>or use your email account</p>
            <div className='inputfield'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                <Input size="large" placeholder="Email" prefix={<UserOutlined />} />

                </div>

                <div className='col-3'></div>

            </div>
            <br/>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                <Input size="large" placeholder="Password" prefix={<LockOutlined />} />

                </div>

                <div className='col-3'></div>

            </div>

            </div>
            <a>Forget Password?</a>
            
           <div className='signIn1button'>
           <br/>
           <button type="button" className="btn btn-primary">SIGN IN</button>

           </div>

            </div>
           
        </div>
        <div className='signIn2'>
            <div className='signIn2text'>
            <h2>Didn't have an account</h2>
            <p>Simply create your account by click the sign up button</p>
            <button type="button" className="btn btn-primary">SIGN UP</button>
            </div>
           

        </div>
    </div>
  )
}

export default SignIn