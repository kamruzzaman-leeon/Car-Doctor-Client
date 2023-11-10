import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;
        
        createUser(email,password)
       .then(result=>{
          const user = result.user;
          console.log(user)
          // setUser(user)
       })
        .catch(error=>{
          console.log('error', error)
        }) 

    }
    return (
        <div className="hero h-min py-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
  
            <img src={img} alt="" />
  
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-5xl font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <p className='my-4 text-center'>Already Signed up  to Car Doctor?<Link className='text-primary font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;