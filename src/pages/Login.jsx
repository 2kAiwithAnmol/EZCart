import React , {useState} from "react";
import {useAuth} from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if(!email) {
            newErrors.email = "Email is required";
        } else if(!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email Format";
        }
        if(!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0) {
            login();
            navigate("/cart");
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-5 text-center">Login to EZCart</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">Don't have an account <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
        </div>
    )
}
export default Login