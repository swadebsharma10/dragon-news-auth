import { Link } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {loginUser} = useContext(AuthContext);

      const handleLogin = e =>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            loginUser(email, password)
            .then(result =>{
              const user = result.user;
              console.log('login user', user)
            })
            .catch(error =>{
              console.log(error.message)
            })
      }

  return (
    <section>
      <Navbar></Navbar>
      <div>
      <h2 className="text-xl font-bold text-center">Login Page here</h2>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center font-bold py-4">Don't Have an Account <Link to='/register' className="text-primary">Register</Link></p>
      </div>
      </div>
    </section>
  );
};

export default Login;
