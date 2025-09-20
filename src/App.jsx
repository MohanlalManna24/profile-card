import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import dp from "./assets/photo2.jpg";
import whatsapp from "./assets/whatsapp.png";

const App = () => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <>
      <div className="body relative min-h-screen bg-gradient-to-r from-white-800 via-yellow-50 via-white-800 select-none">
        <div className=" main-container flex justify-center items-center m-auto min-h-screen">
          <div className="sub-container w-90 bg-gradient-to-b from-blue-900 via-gray-800 to-teal-700 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-inner-[inset_0_5px_15px_rgba(0,0,0,0.6)]">
            <div className="btn relative m-5 flex justify-between text-xl text-gray-600 cursor-pointer">
              <i
                tabIndex="0"
                onClick={handleHeartClick}
                className={`fa-solid fa-heart fa-beat outline-none ${
                  isHeartClicked ? "text-red-600" : "text-gray-100"
                }`}
              ></i>
              <i
                onClick={() =>
                  navigator.share({
                    url: "https://mohanlalmanna24.github.io/profile-card/",
                  })
                }
                className="fa-solid fa-share text-amber-50"
              ></i>
            </div>
            <div className="box bg-cyan-100 m-5 mt-15 mb-10 rounded-xl p-5">
              <div className="dp bg-black w-30 h-30 rounded-full m-auto -mt-18 border-8 border-white">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={dp}
                  alt="dp"
                />
              </div>
              <div className="green-circle w-5 h-5 bg-green-500 rounded-full relative -top-7 left-41 border-4 border-white"></div>
              <h1 className="text-3xl text-blue-900 font-bold text-center mt-2">
                Mohanlal Manna
              </h1>
              <p className="text-center mt-8 text-xl">
                Frontend Developer || Programmer{" "}
              </p>
              <a
                href="https://mohanlalmanna24.github.io/portfolio/"
                target="_blank"
              >
                <button className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white py-3 px-8 rounded-xl block m-auto mt-6 cursor-pointer transform transition-all duration-300 shadow-[0_8px_0_rgb(30,64,175),0_15px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_3px_0_rgb(30,64,175),0_6px_10px_rgba(0,0,0,0.25)] hover:translate-y-1 active:shadow-none active:translate-y-2 font-bold border-2 border-blue-400/50 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                  <span className="relative z-10 flex items-center justify-center">
                    View Full Profile
                    <svg
                      className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                  </span>
                </button>
              </a>
              <div className="social-media flex justify-center text-2xl text-gray-600 gap-8 mt-10">
                <a
                  href="https://www.facebook.com/developermohanlal"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f cursor-pointer hover:text-blue-600"></i>
                </a>
                <a
                  href="https://x.com/MannaMohan11293?t=PTxid_Fa2Xbi2_0Dkw215w&s=09"
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter cursor-pointer hover:text-sky-400"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohanlal-manna-64206b343"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-blue-700"></i>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="whatsappBtn">
          <a href="https://wa.me/919800779047" target="_blank">
            <img 
              className="fixed bottom-8 right-4 md:bottom-20 md:right-10 w-15 h-15 md:w-16 md:h-16 animate-bounce hover:animate-none hover:scale-110 transition-transform duration-300 z-50" 
              src={whatsapp} 
              alt="whatsapp" 
              title="chat with me"
            />
          </a>
        </div>

        <div className="footer absolute bottom-0 w-full">
          <div className="w-full h-10 bg-gradient-to-r from-blue-900 via-gray-800 to-teal-700"></div>
        </div>
      </div>
    </>
  );
};

export default App;
