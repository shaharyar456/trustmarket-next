"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const BackgroundEffect = dynamic(() => import("./BackgroundEffect"), {
  ssr: false,
});

const HomePage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white font-sans">
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-3 md:px-4 md:py-3 md:hidden z-50">
          <h1 className="text-base font-bold md:text-lg">TrustMarket</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 text-white md:p-2"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl md:text-2xl" />
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full bg-black text-white p-6 transition-transform duration-300 z-40 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 w-64`}
        >
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-xl font-bold">TrustMarket</h1>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>
          <nav>
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer hover:text-gray-300"
              onClick={() => (window.location.href = "https://trustmarket.ca")}
            >
              <FontAwesomeIcon icon={faGlobe} className="text-lg" />
              <span className="text-sm md:text-base font-medium">Explore</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-auto text-sm"
              />
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-transparent flex flex-col items-center justify-center md:ml-64 p-8">
          <div className="max-w-4xl mx-auto text-center mt-6 md:mt-10">
            <div className="mb-10">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-5xl text-white mb-4"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Explore New Local Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-4">Coming Soon</p>
            <p className="text-base md:text-lg text-gray-300">
              We&apos;re working hard to bring you something extraordinary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
