import React from 'react'
import logo2 from '../assets/logo2.jpg'
import './SignUp.css'
import TextField from '@mui/material/TextField';
import { Input } from 'antd';
import { UserOutlined ,LockOutlined, MailOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';



function SignUp() {
    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        
      };
  return (
    <div className='signUp'>
        
        <div className='signUp1'>
            
            <div className='signUp1text'>
                <h2>Already have an account</h2>
                <p>Simply login to your account by click login button</p>
                <button type="button" className="btn btn-primary">SIGN IN</button>

            </div>
            
            
        </div>
        <div className='signUp2'>
        <div>
            <img src={logo2} alt=""/>
         </div>
        <div className='signUpContent'>
            <h2>Create Account</h2>
            
            <i class="fa fa-facebook-square fa-2x fa-fw" aria-hidden="true"></i>
            <i class="fa fa-twitter-square fa-2x fa-fw" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square fa-2x fa-fw" aria-hidden="true"></i>
            <p>or use your email account</p>
            <div className='inputfield'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                <Input size="large" placeholder="Full Name" prefix={<UserOutlined />} />

                </div>

                <div className='col-3'></div>
            </div>
            <br/>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6'>
                <Input size="large" placeholder="Email" prefix={ <MailOutlined />
} />

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
                <div>
           
           <button type="button" className="btn btn-primary">SIGN UP</button>

           </div>
            

            </div>
           
            {/*  */}
            

           
           
{/*  */}
            </div>
        </div>
        </div>
       


  
  )
}

export default SignUp