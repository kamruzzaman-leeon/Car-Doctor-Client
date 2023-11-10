import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email= form.email.value;
    const password= form.password.value;
    console.log(email,password)
    // form.reset();
    signIn(email,password)
    .then(res=>{
      const user = res.user;
      console.log(user)
    })
    .catch(error=>console.log(error))
    }
   
  
  return (
    <div className="hero h-min py-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-12">

          <img src={img} alt="" />

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"
                name='password'
                placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='my-4 text-center'>New to Car Doctor?<Link className='text-primary font-bold' to='/signup'>Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;