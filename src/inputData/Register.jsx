import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'


const Register = () => {
    const { userRegistration } = useContext(AuthContext)
    const [passwordValid,setPasswordValid]=useState("")
    const navigate = useNavigate()

    const handleRegistration = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password);

        setPasswordValid('')

        if(password.length < 6){
            setPasswordValid('Please password add minimum 6 characters')
            return;
        }else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)){
            setPasswordValid('Use must one uppercase, one lowercase, one number and one special character')
            return;
        }
        

        userRegistration(email, password)
            .then(user => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registration Succesfull',
                    showConfirmButton: false,
                    timer: 2000
                })
                updateProfile(user.user, {
                    displayName: name
                })
                    .then(
                        navigate('/')
                    )
                    .catch()
            })
            .catch()
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration Here</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            {
                                passwordValid &&  <h2 className="text-center my-5 font-semibold text-red-600">{passwordValid}</h2>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <h2 className="text-center my-5 font-semibold">I have Already an account <Link to="/login"><span className="py-1 px-3 bg-green-600 rounded-lg text-white font-semibold">Login</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;