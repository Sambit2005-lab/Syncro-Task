import React, { useState } from 'react';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import resumeImg from '../../assets/resume_bg.png';
import faqFooterBg from '../../assets/faq_footer_bkg.png';

// Plans data
const plans = [
    { name: 'Basic', price: '$29', per: '/month', features: ['Access to gym', 'Basic equipment', 'Locker room access', 'Free parking'], highlight: false },
    { name: 'Premium', price: '$29', per: '/month', features: ['Access to gym', 'Basic equipment', 'Locker room access', 'Free parking'], highlight: true },
    { name: 'Elite', price: '$29', per: '/month', features: ['Access to gym', 'Basic equipment', 'Locker room access', 'Free parking'], highlight: false },
];

// Features list
const features = [
    'AI-powered draft based on your input',
    'Human expert editing for clarity and impact',
    'Industry-specific keyword optimization',
    'Choice of 3–5 resume templates',
    'PDF and DOCX delivery formats',
    '2 free revisions included',
];

// FAQ data
const faqData = [
    { question: 'How does AI convert text to video, automatically?', answer: 'It enables us to focus more on content rather than polishing animations manually. Thanks to the Figma plugin, workflow is smoother.', image: '/vite.svg' },
    { question: 'What tech powers the AI video generator?', answer: 'AI uses deep learning and text-to-scene tools to create animations based on your input.', image: '/vite.svg' },
    { question: 'Can I customize the generated videos?', answer: 'Yes, you can adjust scenes, characters, and voiceovers using our intuitive editor.', image: '/vite.svg' },
    { question: 'Is this suitable for marketing or education?', answer: 'Absolutely! The platform supports templates for both educational and promotional use cases.', image: '/vite.svg' },
];

// Footer sections and links
const footerSections = ['Product', 'Support', 'Resources', 'About'];
const footerLinks = ['What’s New', 'Design', 'Collaboration', 'Prototyping', 'Developer Handoff', 'All Features'];

// Heading Block
const HeadingBlock = ({ text }) => (
    <div className="flex items-center mb-8">
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-white mr-8 leading-[2.15]">{text}</h2>
        <div className="flex flex-col gap-4 mt-4">
            <div className="w-24 h-1.5 bg-[#9333ea] rounded"></div>
            <div className="w-15 h-1.5 bg-[#9333ea] rounded"></div>
        </div>
    </div>
);

const Service = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="font-poppins text-white bg-gray-900">
            {/* ===== Navbar from Navbar_1 ===== */}
            <nav
                className="
        w-full max-w-full
        px-[clamp(0.8rem,2vw,1.8rem)]
        md:px-[clamp(1rem,5vw,4rem)]
        py-3
        bg-[#10001e]
        flex justify-between items-center
        relative z-50
        box-border
      "
            >
                <Link
                    to="/"
                    className="
          text-[#e1d5f9]
          font-bold
          text-[clamp(1rem,2.5vw,2rem)]
          tracking-wide
          no-underline
          select-none
        "
                    aria-label="Brand"
                >
                    {/*Brand*/}
                </Link>

                {/* Hamburger button */}
                <button
                    aria-label="Toggle Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
          md:hidden
          flex flex-col gap-1.5
          w-9 h-9 p-1.5
          justify-center items-center
          bg-transparent border-none cursor-pointer
          focus:outline-none
        "
                >
                    <span
                        className={`block w-6 h-[3px] bg-white rounded transition-all ${
                            menuOpen ? 'rotate-45 translate-y-[6px]' : ''
                        }`}
                    />
                    <span
                        className={`block w-6 h-[3px] bg-white rounded transition-all ${
                            menuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`block w-6 h-[3px] bg-white rounded transition-all ${
                            menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                        }`}
                    />
                </button>

                {/* Menu */}
                <div
                    className={`
          md:flex md:items-center
          gap-8
          transition-all duration-300 ease-in-out
          ${
                        menuOpen
                            ? 'absolute top-full left-0 w-full flex flex-col bg-[#16072d] p-6 pt-8 z-40 md:static md:flex-row md:bg-transparent md:p-0'
                            : 'hidden md:flex'
                    }
        `}
                >
                    <ul
                        className="
            list-none
            flex flex-col md:flex-row
            gap-[clamp(0.8rem,2vw,3rem)]
            m-0 p-0
            w-full md:w-auto
          "
                    >
                        {[
                            { label: 'Home', path: '/' },
                            { label: 'About Us', path: '/about_us' },
                            { label: 'Custom Service', path: '/custom-service' },
                            { label: 'Pricing', path: '/pricing' },
                            { label: 'Contact', path: '/contact' },
                        ].map((item, idx) => (
                            <li key={idx}>
                                <Link
                                    to={item.path}
                                    className="
                block text-[#e1d5f9] font-semibold uppercase
                text-[clamp(0.78rem,1vw,1rem)] rounded-md tracking-wide
                px-4 py-2 transition-colors duration-200
                hover:bg-[#1d0537] hover:text-[#d4adfc]
                focus:outline-none focus:bg-[#1d0537] focus:text-[#d4adfc]
              "
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="
            flex flex-col md:flex-row
            gap-3 md:gap-4
            w-full md:w-auto
            ml-0 md:ml-2
          "
                    >
                        <Link
                            to="/login"
                            className="
              w-full md:w-auto
              px-5 py-2
              border border-white
              rounded-md
              font-semibold
              uppercase
              text-[clamp(0.72rem,1vw,1rem)]
              bg-transparent
              text-white
              cursor-pointer
              transition-opacity duration-200
              hover:opacity-80
              focus:outline-none
              focus:ring-2 focus:ring-[#a879ff] focus:ring-offset-1
              text-center
            "
                            onClick={() => setMenuOpen(false)}
                        >
                            Log In
                        </Link>
                        <Link
                            to="/sign_up"
                            className="
              w-full md:w-auto
              px-5 py-2
              rounded-md
              font-semibold
              uppercase
              text-[clamp(0.72rem,1vw,1rem)]
              bg-gradient-to-r from-[#d946ef] to-[#9333ea]
              border-none
              text-white
              cursor-pointer
              transition-opacity duration-200
              hover:opacity-80
              focus:outline-none
              focus:ring-2 focus:ring-[#a879ff] focus:ring-offset-1
              text-center
            "
                            onClick={() => setMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>



            {/* Resume Creation */}
            <section
                className="flex flex-wrap items-center justify-between px-6 md:px-24 py-20 min-h-[90vh] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(22,13,39,0.95), rgba(22,13,39,0.95)), url(${resumeImg.src || resumeImg})`,
                }}
            >
                <div className="flex-1 max-w-lg z-10">
                    <h1 className="font-bold text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">Resume Creation</h1>
                    <h1 className="font-bold text-[clamp(1.8rem,4vw,2.5rem)] leading-tight mt-[-15px] mb-12">Service</h1>
                    <p className="text-[#cccccc] text-[clamp(0.9rem,2vw,1rem)] mb-12">
                        AI-Generated. Human-Perfected. Land More Interviews
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 border border-[#a879ff] rounded-full text-[#a879ff] text-sm hover:bg-[#a879ff] hover:text-black transition">
                            Place Order ↗
                        </button>
                        <button className="px-6 py-3 bg-white rounded-full text-black text-sm hover:bg-[#f0f0f0] transition">
                            See Example
                        </button>
                    </div>
                </div>
                <div className="flex-1 min-w-[280px] flex justify-center items-center z-10">
                    <img
                        src={resumeImg.src || resumeImg}
                        alt="Resume Sample"
                        className="max-w-full rounded-lg shadow-lg"
                        style={{ boxShadow: '0 0 15px rgba(0,0,0,0.5)' }}
                    />
                </div>
            </section>

            {/* Service Overview */}
            <section className="bg-[#160d27] py-16 px-8 md:px-40 flex justify-start">
                <div className="max-w-4xl w-full text-left">
                    <HeadingBlock text="Service Overview" />
                    <p className="text-[#cccccc] text-[clamp(0.9rem,2vw,1rem)] leading-relaxed mb-8 max-w-xl">
                        Get a professionally written, ATS-optimized resume crafted using smart AI tools and refined by human experts.
                    </p>
                    <ul className="list-none p-0 m-0 space-y-4 max-w-md">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-[#cccccc] text-[clamp(0.9rem,2vw,1rem)]">
                                <FaCircle className="text-[#a558f3] text-[0.6rem] mr-3 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-[#160d27] py-16 px-8 md:px-40 flex flex-col max-w-full">
                <HeadingBlock text="How it Works: AI + Human Workflow" />
                <div className="flex flex-wrap justify-around gap-8 max-w-5xl w-full"></div>
            </section>

            {/* Delivery Plans */}
            <section className="bg-gradient-to-b from-[#160d27] to-[#1b0b25] py-16 px-6 md:px-16 text-center max-w-full">
                <div className="max-w-6xl mx-auto text-left px-6 md:px-16">
                    <HeadingBlock text="Estimated Delivery Time" />
                    <div className="flex flex-wrap justify-center gap-8">
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col items-center rounded-xl p-6 shadow-md min-w-[280px] max-w-[320px] flex-1 transition-transform hover:-translate-y-1 ${
                                    plan.highlight
                                        ? 'bg-gradient-to-tr from-[#a558f3] to-[#6f2dbd] text-white'
                                        : 'bg-[#2c2c2e] text-gray-300'
                                }`}
                            >
                                <h3 className="mb-4">{plan.name}</h3>
                                <ul className="list-none text-left mb-8">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <FaCircle className="text-[#a558f3] text-[0.6rem]" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ & Footer */}
            <div
                className="relative py-16 px-6 md:px-16 bg-cover bg-center"
                style={{ backgroundImage: `url(${faqFooterBg.src || faqFooterBg})` }}
            >
                <div className="max-w-6xl mx-auto relative z-10">
                    <HeadingBlock text="FAQ" />
                    <div className="flex flex-col gap-6">
                        {faqData.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-md shadow-sm overflow-hidden relative">
                                {activeIndex !== idx ? (
                                    <div
                                        className="flex justify-between items-center p-4 cursor-pointer text-black bg-gray-100"
                                        onClick={() => toggleAccordion(idx)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="w-9 h-9 flex justify-center items-center border-2 border-[#7028e4] rounded-full text-xl">
                                            <IoAddOutline />
                                        </span>
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap items-center bg-gradient-to-tr from-pink-400 via-purple-700 to-purple-900 p-6 relative">
                                        <img src={faq.image} alt="" className="rounded-lg w-[200px]" />
                                        <div className="flex-1">{faq.answer}</div>
                                        <span onClick={() => toggleAccordion(idx)} className="absolute top-4 right-4">
                                            <IoRemoveOutline />
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
