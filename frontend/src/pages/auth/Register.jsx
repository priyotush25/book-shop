
import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    console.log("Register Data:", formData);
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
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Join our BookStore community today
          </p>

        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="mb-5">

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />

          </div>

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
          <div className="mb-5">

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                minLength={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-20 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-sky-600 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {/* Confirm Password */}
          <div className="mb-5">

            <label className="block text-sm font-medium text-slate-700 mb-2">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                minLength={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-20 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-sky-600 font-medium"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {/* Terms & Conditions */}
          <div className="mb-6">

            <label className="flex items-start gap-2 text-sm text-gray-600">

              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 accent-sky-600"
              />

              <span>
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-sky-600 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </span>

            </label>

          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <div className="text-center mt-7">

          <p className="text-sm text-gray-600">
            Already have an account?

            <Link
              to="/login"
              className="text-sky-600 font-semibold ml-1 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;
