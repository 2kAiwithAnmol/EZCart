import React from "react";

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg"/>
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg"/>
                    <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg"/>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
                </form>
                <p className="mt-4 text-center text-sm">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
            </div>
        </div>
    )
}
export default Signup