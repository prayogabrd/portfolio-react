// src/components/Footer.tsx
import React from "react";
import FontAwesomeIcon from "../assets/fontawesome@6.7.2/";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative mt-16 overflow-clip py-10 px-4 md:px-0 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="md:container md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Kolom Kiri: Informasi Kontak */}
          <div className="md:col-span-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Get in Touch
            </h3>
            <p className="text-sm md:text-base mb-1">
              Mail me for partnership:
            </p>
            <a
              href="mailto:prayogabrd@aol.com"
              className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              prayogabrd@aol.com
            </a>
          </div>

          {/* Kolom Tengah: Sosial Media */}
          <div className="md:col-span-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-2 text-sm md:text-base">
              <a
                href="https://x.com/prayogabrdd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center gap-x-2"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-x-twitter text-lg"
                />{" "}
                Twitter
              </a>
              <a
                href="https://www.instagram.com/prayogabrd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center gap-x-2"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-instagram text-lg"
                />{" "}
                Instagram
              </a>
              <a
                href="https://github.com/prayogabrd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center gap-x-2"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-github text-lg"
                />{" "}
                GitHub
              </a>
              <a
                href="https://www.tiktok.com/@prayogabrd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 flex items-center gap-x-2"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-tiktok text-lg"
                />{" "}
                TikTok
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Powered By */}
          <div className="md:col-span-1 flex md:justify-end items-start md:items-center">
            <div
              className="flex items-center gap-x-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-md dark:shadow-lg"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-github-alt text-3xl text-gray-700 dark:text-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Powered by
                </span>
                <span className="text-base font-bold text-gray-900 dark:text-gray-100">
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <hr className="border-gray-300 dark:border-gray-700 my-8" />

        {/* Bagian Copyright */}
        <div className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} PrayogaBRd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
