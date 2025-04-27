import React from "react";
import Image from "next/image";
import { Buttons } from "../export_components";
const TemplateFourPortfolio = () => {
  return (
    <section className="mt-5">
      <div className="flex flex-col gap-5 text-darkBlue my-10">
        <h2 className="text-center font-bold">My Portfolio</h2>
        <div className="space-y-5 md:grid md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3 center-flexCol">
              <Image
                src={"/assets/portfolio.svg"}
                alt="portfolio"
                height={200}
                width={200}
              />
              <h2 className="text-center font-bold">Blog & Article Writing</h2>
              <Buttons
                label="Click here"
                className="!bg-darkBlue text-white font-bold rounded-lg text-xs px-15 "
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-darkBlue ">
        <div className="space-y-5 gap-5 md:grid md:grid-cols-3 py-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3 center-flexCol">
              <Image
                src={"/assets/portfolio.svg"}
                alt="portfolio"
                height={200}
                width={200}
              />
              <h2 className="text-center font-bold">Blog & Article Writing</h2>
              <Buttons
                label="Click here"
                className=" text-darkBlue font-bold rounded-lg text-xs px-15 "
              />
            </div>
          ))}
        </div>
      </div>
      {/* case study */}
      <div className="text-darkBlue py-10 space-y-5">
        <h2 className="font-bold text-sm lg:text-2xl">Case Study</h2>
        <div className="bg-gray200 p-5 text-sm lg:text-lg">
          <p className="">
            A brand in the health & wellness industry struggled with low organic
            traffic and poor audience engagement. By implementing a strategic
            content plan with well-researched SEO blog posts, we:
          </p>
          <ul className="list-none space-y-2">
            <li className="before:content-['✔'] before:mr-2">
              Increased organic traffic by 120%
            </li>
            <li className="before:content-['✔'] before:mr-2">
              Improved engagement with 2.5 min
            </li>
            <li className="before:content-['✔'] before:mr-2">
              Top 5 Google ranking
            </li>
          </ul>
        </div>
      </div>
      <div className="text-darkBlue pb-10 space-y-5">
        <div className="bg-gray200 p-5 text-sm lg:text-lg">
          <p className="">
            A small e-commerce business needed compelling product descriptions
            and a website copy overhaul to increase conversions. Through
            persuasive storytelling and targeted copywriting, we:
          </p>
          <ul className="list-none space-y-2">
            <li className="before:content-['✔'] before:mr-2">
              Increased product sales by 35% in 3 months
            </li>
            <li className="before:content-['✔'] before:mr-2">
              Improved customer engagement and reduced bounce rates
            </li>
            <li className="before:content-['✔'] before:mr-2">
              Strengthened the brand’s voice and trustworthiness
            </li>
          </ul>
          <p className="">
            By aligning the content with the brand’s identity and customer pain
            points, we transformed their website into a powerful sales tool. we:
          </p>
        </div>
      </div>
      {/* social */}
      <div className="text-darkBlue py-10 space-y-5">
        <p className="font-bold text-sm lg:text-2xl ">
          Social & Writing Platform Links
        </p>
        <div className="bg-darkBlue px-5 pt-10 pb-5 flex justify-between">
          <div className="center-flexCol gap-3">
            <p className="text-yellow font-bold lg:text-xl">LinkedIn</p>
            <Buttons
              label="Click here"
              className=" text-darkBlue font-bold rounded-lg text-xs px-10 "
            />
          </div>
          <div className="center-flexCol gap-3">
            <p className="text-yellow font-bold lg:text-xl">Medium</p>
            <Buttons
              label="Click here"
              className=" text-darkBlue font-bold rounded-lg text-xs px-10 "
            />
          </div>
        </div>
      </div>
      {/* why work for me */}
      <div className="py-5 space-y-5">
        <div className="flex flex-col text-darkBlue gap-5 mx-5">
          <p className="font-bold text-sm lg:text-2xl ">
            Why you should work with me?
          </p>
          <div className=" bg-darkBlue p-5 space-y-5 text-white text-sm lg:text-lg">
            <p>
              Results-Driven Writing – My content isn’t just about words; it’s
              about impact. I create content that educates, engages, and
              converts.
            </p>
            <p>
              SEO & Audience-Focused – I write with both search engines and
              humans in mind, ensuring maximum visibility and engagement.
            </p>
            <p>
              Versatility & Adaptability – From technical blogs to creative
              storytelling, I adapt my writing style to suit different
              industries and tones.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-darkBlue gap-5 ">
          <p className=" mx-5 font-bold text-sm lg:text-2xl ">
            Why you should work with me?
          </p>
          <div className=" bg-darkBlue py-5 px-10 space-y-5 text-white text-sm lg:text-lg">
            <p>
              Results-Driven Writing – My content isn’t just about words; it’s
              about impact. I create content that educates, engages, and
              converts.
            </p>
            <p>
              SEO & Audience-Focused – I write with both search engines and
              humans in mind, ensuring maximum visibility and engagement.
            </p>
          </div>
        </div>
		  </div>
		  
    </section>
  );
};

export default TemplateFourPortfolio;
