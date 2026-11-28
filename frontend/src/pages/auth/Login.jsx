
import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-100 px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-sky-600">
            BookStore
          </h1>

          <h2 className="text-2xl font-semibold text-slate-800 mt-5">
            Welcome Back!
          </h2>

          <p className="text-gray-500 mt-2">
            Please login to your account
          </p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-5">

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />

          </div>

          {/* Password */}
          <div className="mb-4">

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-20 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-sky-600 hover:text-sky-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between mb-6">

            <label className="flex items-center gap-2 text-sm text-gray-600">

              <input
                type="checkbox"
                className="w-4 h-4 accent-sky-600"
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-sky-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <div className="text-center mt-7">

          <p className="text-sm text-gray-600">
            Don't have an account?

            <Link
              to="/register"
              className="text-sky-600 font-semibold ml-1 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;
