import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/apiServer";

export const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        let user = {
            email: emailValue,
            password: passwordValue,
        };
        getHandler(user);
        // do something with emailValue and passwordValue
    };

    // const handleSubmit = (e) => {
    // e.preventDefault();
    // if (email === "admin@Ordo.com" && password === "12345678") {
    //     let user = {
    //         email: email,
    //         password: password,
    //     };

    // console.log("this is user", user);
    // getHandler(user);
    // setLoggedIn(true);
    // dispatch(user({ email, password }))
    //     .then(() => {
    //         setLoggedIn(true);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }
    // if (email !== "admin@Ordo.com" && password !== "12345678") {
    // alert("Invalid Email and Password");
    // }
    // };
    const getHandler = async (user) => {
        if (user.email === "admin@ordo.com" || user.password === "12345678") {
            let data = await login(user.email, user.password);
            // alert("Please fill all the fields");
            setLoggedIn(true);
            return data;
        } else {
            alert("Invalid Email and Password");
        }
        // dispatch(setFood(data));
        // setPassword(data);

        // return data;
    };

    if (loggedIn) {
        navigate("/dashboard");
    }

    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-yellow-700 underline">
                        Sign in
                    </h1>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                id="email"
                                ref={emailRef}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                id="password"
                                ref={passwordRef}
                            />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-700 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
