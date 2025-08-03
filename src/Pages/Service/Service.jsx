import React, { useState } from 'react';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import { FaCircle, FaRobot, FaUserEdit, FaRecycle } from 'react-icons/fa';

import resumeImg from '../../assets/resume_bg.png'; // Your resume background image
import faqFooterBg from '../../assets/faq_footer_bkg.png'; // Background for FAQ/Footer

const plans = [
    {
        name: 'Basic',
        price: '$29',
        per: '/month',
        features: ['Access to gym', 'Basic equipment', 'Locker room access', 'Free parking'],
        highlight: false,
    },
    {
        name: 'Premium',
        price: '$29',
        per: '/month',
        features: ['Access to gym', 'Basic equipment', 'Locker room access', 'Free parking'],
        highlight: true,
    },
    {
        name: 'Elite',
        price: '$29',
        per: '/month',
        features: ['Access to gym', 'Basic equipment', 'Locker room access', 'Free parking'],
        highlight: false,
    },
];

const features = [
    'AI-powered draft based on your input',
    'Human expert editing for clarity and impact',
    'Industry-specific keyword optimization',
    'Choice of 3–5 resume templates',
    'PDF and DOCX delivery formats',
    '2 free revisions included',
];

const faqData = [
    {
        question: 'How does AI convert text to video, automatically?',
        answer:
            'It enables us to focus more on content rather than polishing animations manually. Thanks to the Figma plugin, workflow is smoother.',
        image: '/vite.svg',
    },
    {
        question: 'What tech powers the AI video generator?',
        answer: 'AI uses deep learning and text-to-scene tools to create animations based on your input.',
        image: '/vite.svg',
    },
    {
        question: 'Can I customize the generated videos?',
        answer: 'Yes, you can adjust scenes, characters, and voiceovers using our intuitive editor.',
        image: '/vite.svg',
    },
    {
        question: 'Is this suitable for marketing or education?',
        answer: 'Absolutely! The platform supports templates for both educational and promotional use cases.',
        image: '/vite.svg',
    },
];

const footerSections = ['Product', 'Support', 'Resources', 'About'];
const footerLinks = [
    'What’s New',
    'Design',
    'Collaboration',
    'Prototyping',
    'Developer Handoff',
    'All Features',
];

// Reusable heading block component with consistent styling & underline lines
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
            {/* Navbar */}
            <nav className="max-w-full flex justify-between items-center px-6 md:px-16 py-5 bg-gradient-to-b from-[#160d27f2] to-[#160d27f2] fixed top-0 left-0 w-full z-50">
                <a href="#" className="text-[#e1d5f9] font-bold text-[clamp(1rem,2.5vw,2rem)] tracking-wide">
                    {/* Brand - Insert logo/text here if needed */}
                </a>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-9 h-9 p-1.5 justify-center items-center border-none bg-transparent cursor-pointer"
                    aria-label="Toggle Menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
                    <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
                    <span className="block w-6 h-[3px] bg-white rounded transition-all"></span>
                </button>

                {/* Menu */}
                <div
                    className={`flex items-center gap-8 transition-all duration-300 ${
                        menuOpen
                            ? 'absolute top-full left-0 w-full flex-col bg-[#16072d] p-6 pt-8 md:static md:flex-row md:bg-transparent md:p-0'
                            : 'hidden md:flex'
                    }`}
                >
                    <ul className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-auto mb-6 md:mb-0">
                        {['Home', 'About Us', 'Custom Service', 'Pricing', 'Contact'].map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="uppercase font-semibold text-[clamp(0.78rem,1vw,1rem)] text-[#e1d5f9] rounded px-3 py-1 transition hover:bg-[#1d0537] hover:text-[#d4adfc]"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
                        <button className="border border-white text-white px-5 py-2 rounded-md font-semibold uppercase text-[clamp(0.72rem,1vw,1rem)] hover:opacity-80 transition w-full md:w-auto">
                            Log In
                        </button>
                        <button className="bg-gradient-to-r from-[#d946ef] to-[#9333ea] text-white px-5 py-2 rounded-md font-semibold uppercase text-[clamp(0.72rem,1vw,1rem)] hover:opacity-80 transition w-full md:w-auto">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-[72px] md:h-[88px]" />

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
                    <p className="text-[#cccccc] text-[clamp(0.9rem,2vw,1rem)] mb-12">AI-Generated. Human-Perfected. Land More Interviews</p>
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
                        Get a professionally written, ATS-optimized resume crafted using smart AI tools and refined by human experts. Designed for job seekers, students, and professionals across all industries.
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

            {/* How It Works Section */}
            <section className="bg-[#160d27] py-16 px-8 md:px-40 flex flex-col max-w-full">
                <HeadingBlock text="How it Works: AI + Human Workflow" />
                <div className="flex flex-wrap justify-around gap-8 max-w-5xl w-full">
                    {/* Uncomment and adjust your steps here if needed */}
                </div>
            </section>

            {/* Delivery Plans */}
            <section className="bg-gradient-to-b from-[#160d27] to-[#1b0b25] py-16 px-6 md:px-16 text-center max-w-full">
                <div className="max-w-6xl mx-auto text-left px-6 md:px-16">
                    <HeadingBlock text="Estimated Delivery Time" />
                    <p className="text-[#ccc] text-[clamp(0.9rem,1.5vw,1rem)] mb-12 mt-[-2rem] max-w-3xl">
                        Delivery in 1–3 days depending on your plan. Expedited option available.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col items-center rounded-xl p-6 shadow-md shadow-black/30 min-w-[280px] max-w-[320px] flex-1 transition-transform hover:-translate-y-1 ${
                                    plan.highlight ? 'bg-gradient-to-tr from-[#a558f3] to-[#6f2dbd] text-white' : 'bg-[#2c2c2e] text-gray-300'
                                }`}
                            >
                                <h3 className="text-[clamp(1.1rem,2vw,1.25rem)] font-semibold mb-4 text-center">{plan.name}</h3>
                                <div className="flex items-baseline justify-center gap-1 mb-4">
                                    <span className="text-[clamp(1.5rem,3vw,2rem)] font-bold">{plan.price}</span>
                                    <span className="text-[clamp(0.75rem,1.5vw,0.9rem)] text-gray-400 pt-0.5">{plan.per}</span>
                                </div>
                                <ul className="list-none text-left mb-8 w-full space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="text-[clamp(0.8rem,1.3vw,0.95rem)] flex items-center gap-2">
                                            <FaCircle className="text-[#a558f3] flex-shrink-0 text-[0.6rem]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full max-w-xs py-2.5 rounded-lg font-semibold cursor-pointer transition-colors
                    ${
                                        plan.highlight
                                            ? 'bg-transparent border-white border-[1.5px] text-white hover:bg-white hover:text-[#6f2dbd]'
                                            : 'bg-transparent border-[#a558f3] border-[1.5px] text-[#a558f3] hover:bg-[#a558f3] hover:text-white'
                                    }`}
                                >
                                    Get started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ & Footer Container */}
            <div
                className="relative py-16 px-6 md:px-16 bg-cover bg-center"
                style={{ backgroundImage: `url(${faqFooterBg.src || faqFooterBg})` }}
            >
                {/* Removed orbit animation and dots as requested */}

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-center mb-8 justify-center md:justify-start">
                        <HeadingBlock text="FAQ" />
                    </div>
                    <div className="flex flex-col gap-6">
                        {faqData.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-md shadow-sm overflow-hidden relative"
                            >
                                {activeIndex !== idx ? (
                                    <div
                                        className="flex justify-between items-center p-4 cursor-pointer font-semibold text-[clamp(0.9rem,2vw,1rem)] text-black bg-gray-100"
                                        onClick={() => toggleAccordion(idx)}
                                        aria-expanded={activeIndex === idx}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="w-9 h-9 flex justify-center items-center border-2 border-[#7028e4] bg-white text-[#7028e4] rounded-full text-xl transition-transform hover:scale-110 shadow-md shadow-[#7028e4]/50">
                                            <IoAddOutline />
                                        </span>
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap items-center bg-gradient-to-tr from-pink-400 via-purple-700 to-purple-900 text-white p-6 gap-6 relative">
                                        <img
                                            src={faq.image}
                                            alt="faq visual"
                                            className="object-contain rounded-lg flex-shrink-0 w-[clamp(150px,25vw,200px)] h-auto"
                                        />
                                        <div className="flex-1 min-w-[220px]">
                                            <h3 className="text-[clamp(0.95rem,2vw,1rem)] font-bold mb-2">{faq.question}</h3>
                                            <p className="text-[clamp(0.9rem,1.8vw,0.95rem)] text-gray-200 leading-relaxed">{faq.answer}</p>
                                        </div>
                                        <span
                                            onClick={() => toggleAccordion(idx)}
                                            className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-gray-300"
                                            aria-label="Collapse Answer"
                                        >
                                            <IoRemoveOutline />
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <footer className="mt-20 px-2 md:px-6 text-white">
                        <div className="flex flex-wrap justify-between gap-8 mb-12 max-w-6xl mx-auto">
                            {footerSections.map((section, idx) => (
                                <div key={idx} className="flex flex-col min-w-[180px] flex-1 max-w-[220px]">
                                    <h3 className="text-[clamp(0.9rem,2vw,1rem)] mb-4 text-yellow-400">// {section}</h3>
                                    <ul className="list-none p-0 m-0 space-y-2">
                                        {footerLinks.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-[clamp(0.75rem,1.5vw,0.9rem)] cursor-pointer hover:text-yellow-400 transition-colors"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <hr className="border-t border-gray-800 mb-12" />

                        <div className="flex flex-col md:flex-row gap-10 justify-between items-start md:items-center flex-wrap max-w-6xl mx-auto mb-12">
                            <div className="flex-1 min-w-[280px]">
                                <h4 className="text-[clamp(1rem,2vw,1.2rem)] mb-2">Never miss an update</h4>
                                <p className="text-sm text-gray-400 max-w-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolor?</p>
                            </div>
                            <div className="flex-1 min-w-[280px] max-w-md flex flex-col gap-3 w-full">
                                <form className="flex gap-2 w-full max-w-md">
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="flex-grow rounded-l-md px-3 py-2 bg-white/10 text-white text-sm focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-yellow-400 text-black px-5 py-2 rounded-r-md font-semibold text-sm hover:bg-yellow-300 transition"
                                    >
                                        Join
                                    </button>
                                </form>
                                <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer select-none">
                                    <input type="checkbox" className="accent-yellow-400 w-4 h-4 cursor-pointer" />
                                    I agree to receive emails
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4 max-w-6xl mx-auto border-t border-gray-900 pt-6">
                            <p>
                                ©2025 by <span className="text-yellow-400 font-semibold">Code-X-Novas</span>
                            </p>
                            <div className="flex gap-6 flex-wrap">
                                <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
                                <a href="#" className="hover:text-yellow-400 transition">Terms of Service</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            {/* Remove orbit keyframe style since orbit is removed */}
        </div>
    );
};

export default Service;
