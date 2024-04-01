import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import SectionHeading from "../misc/Headings.jsx";
import quotesLeftIcon from "../../images/quotes-l.svg";
import quotesRightIcon from "../../images/quotes-r.svg";
import arrowLeftIcon from "../../images/arrow-left-2-icon.svg";
import arrowRightIcon from "../../images/arrow-right-2-icon.svg";
import svgDecoratorBlob1 from "../../images/svg-decorator-blob-4.svg";
import svgDecoratorBlob2 from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = styled.div`relative`;
const Content = styled.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = styled.div`flex flex-col items-center`;
const HeadingDescription = styled.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const TestimonialSliderContainer = styled.div`mt-24`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = styled.div`flex flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none
  img {
    rounded
  }
`;
const TextContainer = styled.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = styled.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = styled.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = styled.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = styled.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = styled.p`font-medium text-sm`;

const QuotesLeft = styled.img.attrs({ src: quotesLeftIcon })`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = styled.img.attrs({ src: quotesRightIcon })`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  absolute top-0 h-full flex items-end md:items-center z-20
  button {
    text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0
    svg {
      w-8
    }
  }
`;

const NextArrow = ({ onClick }) => (
  <SliderControlButtonContainer className="right-0">
    <button onClick={onClick}>
      <img src={arrowRightIcon} alt="Next" />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ onClick }) => (
  <SliderControlButtonContainer className="left-0">
    <button onClick={onClick}>
      <img src={arrowLeftIcon} alt="Previous" />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = styled.img.attrs({ src: svgDecoratorBlob1 })`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = styled.img.attrs({ src: svgDecoratorBlob2 })`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;
export default () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Charlotte Hale",
      customerTitle: "CEO, Delos Inc."
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Adam Cuppy",
      customerTitle: "Founder, EventsNYC"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Steven Marcetti",
      customerTitle: "Event Manager, Brite"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <SectionHeading>Our Awesome Customers</SectionHeading>
          <HeadingDescription></HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer>
                <TextContainer>
                  <QuoteContainer>
                    <QuotesLeft />
                    <Quote>{testimonial.quote}</Quote>
                    <QuotesRight />
                  </QuoteContainer>
                  <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo>
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};