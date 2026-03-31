import React from "react";
import { Home, RefreshCcw, Ghost } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Ghost size={80} className="text-gray-700 animate-bounce" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-white/10 blur-md rounded-full" />
          </div>
        </div>

        {/* Error Text */}
        <h1 className="text-8xl font-bold text-white mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          Lost in the Shadows?
        </h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          The page you are looking for has vanished into the Hidden World. It
          might have been moved, deleted, or never existed in this realm.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={"/home"}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 text-gray-600 text-sm font-medium tracking-widest uppercase">
        Kage Sekai
      </div>
    </div>
  );
};

export default ErrorPage;
