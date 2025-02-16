"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { storage } from "../firebase"; // Make sure your Firebase is properly initialized here
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // Brand icon
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Solid icon

const LiltkeysPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesRef = ref(storage, "liltkeys/");
        const imageList = await listAll(imagesRef);
        const urls = await Promise.all(
          imageList.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { name: item.name, url };
          })
        );

        setImageUrls(urls.map((item) => item.url));

        const tenJpg = urls.find((item) => item.name === "10.jpg");
        if (tenJpg) {
          setProfileImage(tenJpg.url);
        } else {
          setProfileImage(urls[0]?.url);
        }
      } catch (error) {
        console.error("Error fetching images from Firebase: ", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="flex h-full bg-gray-100">
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
      <div className="md:ml-64 flex-1 px-8 py-6 mt-16 md:mt-0">
        <header className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full animate-pulse" />
            )}
            <div>
              <h1 className="text-base md:text-xl font-bold text-gray-900">
                LILTKEYS
              </h1>
              <p className="text-xs md:text-sm text-gray-600">
                Custom Painted Keychain
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-gray-800 font-medium text-sm md:text-base">
              Contact
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/liltkeys/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-base md:text-xl"
                />
              </a>
              <a
                href="mailto:liltkeys@gmail.com"
                className="text-gray-700 hover:text-gray-800"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-base md:text-xl"
                />
              </a>
            </div>
          </div>
        </header>

        {/* Accepting Orders Section */}
        <section className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md mb-16">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
            🖌 Hand-Painted Keychains, Made Just for You! 🎨
          </h2>
          <div className="text-left space-y-2 md:space-y-3">
            <p className="text-sm md:text-base text-gray-700">
              Starting at <strong>$15 - $40</strong>, each keychain is a{" "}
              <strong>unique, custom-painted masterpiece</strong> crafted with
              precision and passion.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              📍{" "}
              <strong>Available for Pickup & Shipping (Toronto Based)</strong>
            </p>
            <p className="text-sm md:text-base text-gray-700">
              💡 <strong>Personalized Designs</strong> – Have a vision? Let’s
              make it happen!
            </p>
            <p className="text-sm md:text-base text-gray-700">
              🖌 <strong>Canvases, Murals, Fabric Work & Leather Orders</strong>
            </p>
            <p className="text-sm md:text-base text-gray-700">
              🎁 <strong>Perfect for Gifts, Accessories & Collectibles</strong>
            </p>
            <p className="text-sm md:text-base text-gray-700">
              🔹 <strong>Custom Requests Welcome!</strong> Whether it's your
              favorite anime character, a beloved pet, or a unique concept, I’ll
              bring it to life with detailed, hand-painted designs.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              ✨ <em>"Ask me to attempt anything, I'll try my best!"</em> ✨
            </p>
          </div>
        </section>

        {/* Latest Works Section */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageUrls.length > 0 ? (
              imageUrls
                .filter((url) => !url.includes("10.jpg")) // Exclude 10.jpg
                .map((url, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src={url}
                      alt={`Image ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))
            ) : (
              <p>Loading images...</p>
            )}
          </div>
        </section>

        <footer className="text-center text-gray-600 mt-12">
          © 2025 LILTKEYS. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LiltkeysPage;
