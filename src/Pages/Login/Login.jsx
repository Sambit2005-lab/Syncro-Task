import React from "react";
import bgImg from "../../assets/bkg.png"; // Adjust the path if Sign_up.jsx and assets are in different folders

const Login = () => {
    return (
        <div
            className="min-h-screen w-full flex items-center justify-center bg-center bg-cover p-4"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="w-full max-w-md bg-white/5 border border-white/15 backdrop-blur-xl rounded-2xl p-8 text-white shadow-[0_0_30px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-semibold mb-1">Login</h2>
                <p className="text-[0.95rem] text-[#cfcfcf] mb-6">Start your 7-day free trial.</p>

                <form className="flex flex-col gap-5">
                    <label className="flex flex-col text-[0.875rem]">
                        <span>Name*</span>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="mt-2 p-3 rounded-lg border border-white/15 bg-white/10 text-white text-[0.95rem] placeholder-[#aaa] focus:outline-none"
                        />
                    </label>
                    <label className="flex flex-col text-[0.875rem]">
                        <span>Email*</span>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="mt-2 p-3 rounded-lg border border-white/15 bg-white/10 text-white text-[0.95rem] placeholder-[#aaa] focus:outline-none"
                        />
                    </label>
                    <label className="flex flex-col text-[0.875rem]">
                        <span>Password*</span>
                        <input
                            type="password"
                            placeholder="Create a password"
                            required
                            className="mt-2 p-3 rounded-lg border border-white/15 bg-white/10 text-white text-[0.95rem] placeholder-[#aaa] focus:outline-none"
                        />
                        <small className="mt-2 text-[0.75rem] text-[#b9b9b9]">Must be at least 9 characters.</small>
                    </label>
                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-gradient-to-r from-[#b667f1] to-[#9c3df3] rounded-lg text-white font-semibold text-[0.95rem] border-none cursor-pointer hover:opacity-90 transition"
                    >
                        Create account
                    </button>
                </form>

                <hr className="my-7 border-0 h-px bg-white/15" />

                <div className="flex flex-wrap gap-4 justify-between sm:flex-nowrap">
                    <button
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-black rounded-lg text-white text-[0.85rem] font-medium border-none cursor-pointer hover:bg-[#1a1a1a] transition"
                    >
                        <img
                            src="https://img.icons8.com/fluency/48/google-logo.png"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Login with Google
                    </button>
                    <button
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-black rounded-lg text-white text-[0.85rem] font-medium border-none cursor-pointer hover:bg-[#1a1a1a] transition"
                    >
                        <img
                            src="https://img.icons8.com/office/40/mac-os.png"
                            alt="Apple"
                            className="w-5 h-5"
                        />
                        Login with Apple
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
