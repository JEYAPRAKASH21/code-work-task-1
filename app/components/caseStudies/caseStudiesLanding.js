"use client";
import React from "react";
import Link from "next/link";

const CaseStudiesLanding = () => {
  return (
    <section className="relative w-full h-auto sm:h-[80vh] md:h-screen flex items-center bg-primary text-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/industry/840843081452.jpg")' }}
        />
        <div className="absolute inset-0 bg-primary/5" />
      </div>
     
     
      {/* Enhanced Content Container */}
      <div className="relative z-10 w-[85%] mx-auto px-4 text-left">
        
        
        {/* Enhanced Heading Container */}
        <div className="heading-container pt-7 sm:pt-7 md:pt-10 lg:pt-10 xl:pt-10 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary">
            <span className="text-secondary">Our Company </span>
            <span className="text-secondary">
              Case Study
            </span>
          </h1>
          
          {/* Decorative underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mt-4"></div>
        </div>

        {/* Enhanced Paragraph Container */}
        <div className="paragraph-container mb-8 space-y-6">
          <div className="relative">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-secondary/90 pl-6 font-light">
              Transforming <span className=" font-medium">Challenges</span> into <span className=" font-medium">Opportunities</span>.
            </p>
          </div>
          
        </div>

      </div>

      <Link
        href="/contact-ai-solutions"
        className="absolute left-36 bottom-6 z-10 inline-flex items-center justify-center px-8 py-3 border border-secondary text-secondary font-medium rounded-none bg-transparent hover:bg-primary/10 transition-colors"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default CaseStudiesLanding;
