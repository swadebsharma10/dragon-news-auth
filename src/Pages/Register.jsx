import { Link } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo,email, password);
    // create User
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error.message)
    })
  };

  return (
    <section>
      <Navbar></Navbar>
      <div>
        <h2 className="text-xl font-bold text-center">Register Page here</h2>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
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
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-bold py-4">
            Already Have an Account{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
