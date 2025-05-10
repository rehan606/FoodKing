import React, { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);

const Register = () => {

    const [passwordError, setPasswordError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const { createUser, setUser, updateUser } = useContext(AuthContext);

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
        setPasswordError(
            "Password must be at least 6 characters long and include both uppercase and lowercase letters."
        );
        return false;
        }
        setPasswordError("");
        return true;
    };


    const handleRegister = (e) => {
        e.preventDefault();
    
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        if (!validatePassword(password)) return;
    
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUser({ displayName: name, photoURL: photo })
                .then(() => {
                    // navigate(location?.state ? location.state : "/");
                    navigate('/')
        
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Login Successful!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch((error) => {
                    console.log(error.message);
                    Swal.fire({
                    title: "Error",
                    text: "Register Failed: " + error.message,
                    icon: "error",
                    });
                });
            // console.log(result.user);
            })
            .catch((error) => {
            console.log(error.message);
        });
    };

    // Login with Google
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user);
            
            navigate("/");
            
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Congratulations!",
                text: "Google Login Successful!",
                showConfirmButton: false,
                timer: 1500
            });

        })
        .catch((error) => {
            Swal.fire({
            title: "Error",
            text: "Google Login Failed: " + error.message,
            icon: "error",
            });
            setUser(null);
        });
    };


    return (
        <div className="loginbg">
            <div className="w-11/12 mx-auto flex   justify-center items-center min-h-screen  p-4">
                <div className="w-full md:w-8/12 lg:w-4/12">
                    <form
                        onSubmit={handleRegister}
                        className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
                    >
                        <h2 className="text-2xl font-semibold text-center mb-6 dark:text-white">
                        Create an account
                        </h2>

                        {/* Name */}
                        <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-black bg-gray-200 dark:bg-gray-800 dark:text-white dark:focus:ring-gray-800"
                            required
                        />
                        </div>

                        {/* Photo URL */}
                        <div className="mb-4">
                        <label
                            htmlFor="photo"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            placeholder="Enter your photo URL"
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-black bg-gray-200 dark:bg-gray-800 dark:text-white dark:focus:ring-gray-800"
                            required
                        />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Username or Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-black bg-gray-200 dark:bg-gray-800 dark:text-white dark:focus:ring-gray-800"
                            required
                        />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-white"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-black bg-gray-200 dark:bg-gray-800 dark:text-white dark:focus:ring-gray-800"
                            required
                            />
                            <button
                            type="button"
                            className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                            onClick={togglePasswordVisibility}
                            >
                            {passwordVisible ? "🙈" : "👁️"}
                            </button>
                        </div>
                        {passwordError && (
                            <p className="text-sm text-red-600 mt-1">{passwordError}</p>
                        )}
                        </div>

                        {/* Terms and Conditions */}
                        <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                            required
                        />
                        <label
                            htmlFor="terms"
                            className="ml-2 block text-sm text-gray-700 dark:text-white"
                        >
                            I agree to the{" "}
                            <a href="#" className="text-orange-500 hover:underline ">
                            Terms and Conditions
                            </a>
                        </label>
                        </div>

                        {/* Submit Button */}
                        <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                        Create an account
                        </button>

                        {/* Already have an account */}
                        <p className="text-center text-sm text-gray-600 mt-4 dark:text-white">
                        Already have an account?{" "}
                        <Link
                            to="/auth/login"
                            className="text-orange-500 hover:underline"
                        >
                            Login
                        </Link>
                        </p>

                        {/* Divider */}
                        <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white dark:bg-gray-900 px-2 text-gray-500"> Or </span>
                        </div>
                        </div>

                        {/* Google Login Button */}
                        <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                        <span className="mr-2 font-bold">G</span> Continue with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
