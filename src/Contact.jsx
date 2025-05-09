import React, { useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
 
  const submitBtnRef = useRef(null);
  const [buttonText, setButtonText] = useState("Contact Us");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <div className=" overflow-hidden grid sm:grid-cols-12 gap-6 sm:ml-28 ipadair:ml-0 ipadmac:ml-0">
        <img
          src="../assets/Mom-sKitchen.png"
          alt=""
          className="w-11/12 h-5/6 ml-5 mt-20 rounded-tr-3xl rounded-bl-3xl sm:block hidden sm:col-span-4 ipadair:hidden ipadmac:w-10/12"
        />
        <div id="form" className="mt-10 sm:col-span-4 sm:ml-16 ipadair:w-80 ipadmac:ml-10 ml-0">
          <h1 className="sm:text-6xl sm:text-left text-center text-blue-950 text-5xl ipadmac:text-5xl  font-bold mt-8">
            Contact Us
          </h1>
          <p className="sm:text-left text-center text-blue-950 font-semibold mt-4 ipadair:text-md ipadmac:text-md">
            Please fill this form below and our team <br /> will get back to you as soon as possible.
          </p>
          <form
            className="flex flex-col sm:items-start items-center mt-10"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target;
              const name = form[0].value.trim();
              const phone = form[1].value.trim();
              const email = form[2].value.trim();
              const message = form[3].value.trim();

              if (!name || !phone || !email || !message) {
                alert("Please fill in all fields.");
                return;
              }

              setIsLoading(true);
              setButtonText("Submitted");
              setIsSubmitted(false);

              setTimeout(() => {
                setIsLoading(false);
                setIsSubmitted(true);
                alert("Your form has been submitted successfully!");
                form.reset();
                setTimeout(() => {
                  setIsSubmitted(false);
                  setButtonText("Contact Us");
                }, 2000);
              }, 2000);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="placeholder:text-blue-950 border text-blue-950 border-blue-950 sm:opacity-70 opacity-90 shadow-lg rounded-lg p-2 sm:w-8/12 w-6/12 ipad:w-6/12 studio:w-10/12 mb-6"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="placeholder:text-blue-950 border text-blue-950 border-blue-950 sm:opacity-70 opacity-90 shadow-lg rounded-lg p-2 sm:w-8/12 w-6/12 ipad:w-6/12 studio:w-10/12 mb-6"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="placeholder:text-blue-950 border text-blue-950 border-blue-950 sm:opacity-70 opacity-90 shadow-lg rounded-lg p-2 sm:w-8/12 w-6/12 ipad:w-6/12 studio:w-10/12 mb-6"
              required
            />
            <textarea
              placeholder="Message"
              className="placeholder:text-blue-950 border text-blue-950 border-blue-950 sm:opacity-70 opacity-90 shadow-lg rounded-lg p-2 sm:w-8/12 w-6/12 ipad:w-6/12 studio:w-10/12 mb-6 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-950 text-white text-2xl font-mono font-bold rounded-3xl hover:scale-105 duration-700 shadow-lg p-2 sm:w-8/12 w-6/12 ipad:w-6/12 studio:w-10/12 mb-6 flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : isSubmitted ? (
                <>✅ {buttonText}</>
              ) : (
                buttonText
              )}
            </button>
          </form>
        </div>
        <div id="contact" className="sm:col-span-4 sm:ml-20 ipadair:mt-0 ipadair:ml-48  ipadair:w-80 ml-10 mt-10">
          <h1 className="sm:text-4xl text-3xl text-left font-bold text-blue-950 sm:mt-24">
            Contact us
          </h1>
          <h3 className="text-left text-2xl text-blue-950 mt-4 mb-16 ipadair:mb-6">
            hi@green.com
          </h3>
          <h1 className="sm:text-4xl text-3xl text-left font-bold text-blue-950 sm:mt-20">
            Based in
          </h1>
          <h3 className="text-left text-2xl text-blue-950 mt-4">
            New york, <br /> California, Ohio
          </h3>
          <div className="flex mt-24 mb-8 sm:justify-start justify-center gap-16">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-950 text-4xl hover:scale-105 duration-700"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-950 text-4xl hover:scale-105 duration-700"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-950 text-4xl hover:scale-105 duration-700"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
