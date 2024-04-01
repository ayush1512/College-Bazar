import React from "react";
// import SvgDotPatternIcon from "../../images/dot-pattern.svg"

export default () => {
  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div className="p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Organize an Event</h2>
            <form action="#" className="mt-4">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="sm:w-5/12 flex flex-col">
                  <div className="relative py-5 mt-6">
                    <label htmlFor="name-input" className="absolute top-0 left-0 tracking-wide font-semibold text-sm">Your Name</label>
                    <input id="name-input" type="text" name="name" placeholder="E.g. John Doe" className="w-full bg-transparent text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 focus:border-pink-400 focus:outline-none transition duration-200" />
                  </div>
                  <div className="relative py-5 mt-6">
                    <label htmlFor="email-input" className="absolute top-0 left-0 tracking-wide font-semibold text-sm">Your Email Address</label>
                    <input id="email-input" type="email" name="email" placeholder="E.g. john@mail.com" className="w-full bg-transparent text-base font-medium tracking-wide border-b-2 py-2 focus:border-pink-400 focus:outline-none transition duration-200" />
                  </div>
                </div>
                <div className="sm:w-5/12 flex flex-col">
                  <div className="relative py-5 mt-6 flex-1">
                    <label htmlFor="name-input" className="absolute top-0 left-0 tracking-wide font-semibold text-sm">Your Message</label>
                    <textarea id="message-input" name="message" placeholder="E.g. Details about your event" className="w-full h-24 sm:h-full resize-none bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 focus:border-pink-400 focus:outline-none transition duration-200"></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" value="Submit" className="w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 focus:-translate-y-px focus:shadow-xl">Submit</button>
            </form>
          </div>
          <img src="../../images/dot-pattern.svg" className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24" />
        </div>
      </div>
    </div>
  );
};