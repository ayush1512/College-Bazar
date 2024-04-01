import React from "react";
// import LogoImage from "../../images/logo.svg";
// import FacebookIcon from "../../images/facebook-icon.svg";
// import TwitterIcon from "../../images/twitter-icon.svg";
// import YoutubeIcon from "../../images/youtube-icon.svg";

export default () => {
  return (
    <div className="relative bg-gray-200 -mx-8 -mb-8 px-8">
      <div className="max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between">
        <div className="text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0">
          <div className="flex items-center justify-center md:justify-start">
            <img src="../../images/logo.svg" className="w-8" alt="logo" />
            <h5 className="ml-2 text-xl font-black text-primary-500">Treact Inc.</h5>
          </div>
          <p className="mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4">
            Treact is an Internet Technology company providing design resources such as website templates and themes.
          </p>
          <div className="mt-4">
            <a href="https://facebook.com" className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4">
              <img src="../../images/facebook-icon.svg"/>
            </a>
            <a href="https://twitter.com" className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4">
              <img src="../../images/twitter-icon.svg"/>
            </a>
            <a href="https://youtube.com" className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4">
              <img src="../../images/youtube-icon.svg"/>
            </a>
          </div>
        </div>
        <div className="md:w-1/5">
          <h5 className="font-bold">Quick Links</h5>
          <ul className="mt-4 text-sm font-medium">
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Blog</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">FAQs</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Support</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">About Us</a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/5">
          <h5 className="font-bold">Product</h5>
          <ul className="mt-4 text-sm font-medium">
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Log In</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Personal</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Business</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Team</a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/5">
          <h5 className="font-bold">Legal</h5>
          <ul className="mt-4 text-sm font-medium">
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">GDPR</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Privacy Policy</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Terms of Service</a>
            </li>
            <li className="mt-3">
              <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};