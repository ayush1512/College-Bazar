import React from "react";
// import SvgDotPatternIcon from "../../images/dot-pattern.svg";
import SectionHeading from "../misc/Headings.jsx";


export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
      subtitle: "Paid",
      title: "Loachella, NYC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      subtitle: "Free",
      title: "Rock In Rio, Upstate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "Exclusive",
      title: "Lollapalooza, Manhattan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com"
    }
  ];

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
        <div className="flex flex-col items-center">
          <SectionHeading>Popular Events</SectionHeading>
          <p className="mt-4 font-medium text-gray-600 text-center max-w-sm">
            Here are some of the most popular events in New York City curated by professionals.
          </p>
        </div>

        <div className="mt-16">
          {cards.map((card, i) => (
            <div key={i} className={`mt-24 md:flex justify-center items-center ${i % 2 === 1 ? "flex-row-reverse" : "flex-row"}`}>
              <div className={`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`} style={{ backgroundImage: `url("${card.imageSrc}")` }}></div>
              <div className="mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8">
                <div className="font-bold tracking-wide text-secondary-100">{card.subtitle}</div>
                <h4 className="text-3xl font-bold text-gray-900">{card.title}</h4>
                <p className="mt-2 text-sm leading-loose">{card.description}</p>
                <a href={card.url} className="inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500">See Event Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="../../images/dot-pattern.svg" className="-z-10 absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 opacity-25 text-primary-500 fill-current w-24" />
      <img src="../../images/dot-pattern.svg" className="-z-10 absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 opacity-25 text-primary-500 fill-current w-24" />
      <img src="../../images/dot-pattern.svg" className="-z-10 absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 opacity-25 text-primary-500 fill-current w-24" />
      <img src="../../images/dot-pattern.svg" className="-z-10 absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 opacity-25 text-primary-500 fill-current w-24" />
    </div> 
  );
};