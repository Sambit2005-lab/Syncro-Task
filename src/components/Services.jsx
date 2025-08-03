import React from "react";
import {
    FaFileAlt,
    FaChartBar,
    FaPenFancy,
    FaCheckCircle,
    FaEnvelopeOpenText,
    FaTools,
} from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";

const services = [
    {
        icon: <FaFileAlt />,
        title: "Resume Creation",
        desc: "Create a standout resume tailored to your goals. Choose styling that fits your domain + optimize keywords and layout to impress recruiters and land your dream job faster!",
    },
    {
        icon: <HiOutlineDocumentReport />,
        title: "Business Report",
        desc: "Free, easy, flexible builder. Fill in your data, pick a template, and download instantly. No experience needed — let your charm pop louder!",
    },
    {
        icon: <FaPenFancy />,
        title: "Pitch Deck Design",
        desc: "From concept to boardroom in 5 minutes — no design experience required.",
    },
    {
        icon: <MdOutlineAnalytics />,
        title: "Data Visualisation",
        desc: "Convert raw numbers into boardroom-ready visuals and presentations in seconds. No fluff — no coding or design expertise required.",
    },
    {
        icon: <FaEnvelopeOpenText />,
        title: "Blog Post Drafting",
        desc: "From spreadsheet chaos to elegant insights — effortlessly start storytelling today.",
    },
    {
        icon: <FaCheckCircle />,
        title: "Proofreading",
        desc: "Transform raw sentences into stunning, clean copy with just one click — no design skills needed.",
    },
    {
        icon: <FaChartBar />,
        title: "Social Media Content",
        desc: "Turn boring spreadsheets into stunning visual stories — no design skills needed.",
    },
    {
        icon: <FaTools />,
        title: "Project Planning Tools",
        desc: "Turn Chaotic Plans into Clear Roadmaps — Instantly.",
    },
];

const Services = () => {
    return (
        <section
            className="min-h-screen min-w-full bg-[#180c27] p-[clamp(2rem,6vw,4rem)] px-[clamp(1rem,6vw,10rem)] text-white
      flex flex-col items-center box-border"
        >
            {/* Heading Block */}
            <div className="mb-[clamp(1.2rem,5vw,2.6rem)] w-full flex flex-row flex-wrap items-center justify-start gap-[2vw]">
                <h2
                    className="text-left font-bold text-[clamp(1.1rem,4vw,2.35rem)]
          mb-2 mr-8 leading-[1.15] font-inter tracking-normal"
                >
                    Services we offer
                </h2>
                <div className="flex flex-col items-start justify-center mt-4 gap-5">
                    <div
                        className="h-[3px] rounded bg-[#9333ea]"
                        style={{ width: `clamp(45px,13vw,100px)` }}
                    />
                    <div
                        className="h-[3px] rounded bg-[#9333ea]"
                        style={{ width: `clamp(28px,9vw,60px)` }}
                    />
                </div>
            </div>

            {/* Services Grid */}
            <div
                className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(1rem,2.5vw,2.5rem)]
      w-full max-w-[1200px] mx-auto box-border"
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[rgba(30,18,44,0.92)] rounded-[1.2rem]
          p-[clamp(2rem,3vw,3rem)] text-center relative overflow-hidden transition-all
          shadow-[0_2px_20px_0_rgba(162,89,255,0.13)] text-white border-[1.5px] border-[rgba(190,128,255,0.08)]
          flex flex-col items-center box-border min-h-[320px]
          hover:bg-gradient-to-b hover:from-[#13041E] hover:to-[#9C32F4]
          hover:shadow-[-22px_23px_46.6px_-20px_rgba(158,51,247,1)] hover:z-30"
                    >
                        {/* Icon */}
                        <div
                            className="text-[2.6rem] mb-[clamp(1.1rem,2vw,1.7rem)] text-white flex-shrink-0
            drop-shadow-[0_2px_8px_rgba(120,36,250,0.10)]
            transition-opacity transition-[height,margin] duration-200"
                        >
                            {service.icon}
                        </div>
                        {/* Title */}
                        <h3
                            className="text-[clamp(1.3rem,2.5vw,1.6rem)] font-semibold leading-[1.3]
            mb-4 tracking-[0.01em] text-center text-white transition-colors duration-300 relative z-10"
                        >
                            {service.title}
                        </h3>
                        {/* Description */}
                        <p
                            className="text-[clamp(0.92rem,1.5vw,1rem)] leading-[1.4] text-[#ddd]
            m-0 mb-2 max-w-[88%] mx-auto transition-opacity transition-max-height duration-200"
                        >
                            {service.desc}
                        </p>
                        {/* Button */}
                        <button
                            className="opacity-0 pointer-events-none mt-[2.1rem] px-[clamp(0.85em,2vw,1.15em)] py-[clamp(0.85em,2vw,1.15em)]
            rounded-[0.9em] font-bold text-[clamp(1rem,1vw,1rem)] border-none text-white bg-[#a234fd]
            shadow-[0_1px_14px_0_rgba(147,51,234,0.21)] transition
            flex items-center gap-2.5 mx-auto min-w-[160px] max-w-[90%] justify-center
            hover:bg-[#a234fdcc] hover:shadow-[0_2px_30px_0_rgba(162,89,255,0.59)]
            hover:text-white
            card-hover:opacity-100 card-hover:pointer-events-auto
            "
                            type="button"
                            aria-label={`Get started with ${service.title}`}
                        >
                            Get Started <span className="text-[1.25em] ml-1">→</span>
                        </button>
                    </div>
                ))}
            </div>

            <style>{`
        /* Custom hover to show button */
        .grid > div:hover > button {
          opacity: 1 !important;
          pointer-events: auto !important;
          margin-top: clamp(4em, 21%, 7em);
          font-size: clamp(1.15rem, 2.6vw, 1.38rem);
          padding: clamp(1.1em, 3vw, 1.3em) clamp(2.6em, 5vw, 3.1em);
          transform: translateY(14px) scale(1.05);
          transition: opacity 0.18s, background 0.22s, color 0.22s, transform 0.18s, font-size 0.18s, padding 0.18s, margin-top 0.18s !important;
        }
        .grid > div:hover p {
          opacity: 0;
          max-height: 0;
          height: 0;
          margin: 0;
          pointer-events: none;
          transition: opacity 0.22s, max-height 0.22s !important;
        }
        .grid > div:hover h3 {
          color: white !important;
          text-shadow: 0 3px 22px #e3ceff95;
          z-index: 3;
          transition: color 0.3s !important;
        }
      `}</style>
        </section>
    );
};

export default Services;
