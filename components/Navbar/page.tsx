"use client"
import { useState } from 'react';


const Navbar = () => {
  const [showTourDropdown, setShowTourDropdown] = useState(false);
  const [showDomesticDropdown, setShowDomesticDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const toggleTourDropdown = () => {
    setShowTourDropdown(!showTourDropdown);
    setShowDomesticDropdown(false);
  };

  const toggleDomesticDropdown = () => {
    setShowDomesticDropdown(!showDomesticDropdown);
  };

  return (
    <nav className="bg-white text-white p-4 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src="../../assets/navbar/logo.png" alt="Logo" className="h-8 mr-4" />
          <ul className="flex space-x-4">
            <li className="hover:text-orange-500  text-black px-2 py-1 rounded">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
              <button onClick={toggleTourDropdown}>Tour</button>
              {showTourDropdown && (
                <div className="absolute bg-white rounded mt-8 py-2 px-4 shadow-md">
                  <ul>
                    <li className="hover:text-orange-500  px-2 py-1  text-black rounded">
                      <a href="#">International</a>
                    </li>
                    <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
                      <button onClick={toggleDomesticDropdown}>Domestic</button>
                      {showDomesticDropdown && (
                        <div className="absolute  bg-white rounded ml-32 py-2 px-4 shadow-md">
                          <ul>
                            <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
                              <a href="#">North</a>
                            </li>
                            <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
                              <a href="#">South</a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
              <a href="#">Activities</a>
            </li>
            <li className="hover:text-orange-500 px-2 py-1 text-black rounded">
              <a href="#">Hotel</a>
            </li>
            <li className="hover:text-orange-500 px-2 py-1 text-black rounded">
              <a href="#">Car Rental</a>
            </li>
            <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
              <a href="#">Visa</a>
            </li>
            <li className="hover:text-orange-500  px-2 py-1 text-black rounded">
              <a href="#">Packages</a>
            </li>
            <li className="hover:text-orange-500 px-2 py-1  text-black rounded">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Make Your Own Trip
          </button>
          <div className="relative inline-block">
            <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
              Language
            </button>
            {showLanguageDropdown && (
              <ul className="absolute bg-white rounded mt-2 py-2 px-4 shadow-md">
                <li className="hover:text-orange-500 text-black px-2 py-1 rounded">
                  <a href="#">English</a>
                </li>
                <li className="hover:text-orange-500 text-black px-2 py-1 rounded">
                  <a href="#">French</a>
                </li>
              </ul>
            )}
          </div>
          <div className="relative inline-block">
            <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}>
              Currency
            </button>
            {showCurrencyDropdown && (
              <ul className="absolute bg-white rounded mt-2 py-2 px-4 shadow-md">
                <li className="hover:text-orange-500 px-2 py-1 text-black rounded">
                  <a href="#">USD</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
