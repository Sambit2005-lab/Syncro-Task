import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        title: "Easy to Understand",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ipsum similique, eveniet!",
        name: "Nabin Agrawal",
        role: "Student",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        title: "Very Helpful",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ipsum similique, eveniet!",
        name: "Ravi Kumar",
        role: "Developer",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
        title: "Excellent Resource",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ipsum similique, eveniet!",
        name: "Priya Sharma",
        role: "Designer",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
        title: "Superb UI",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ipsum similique, eveniet!",
        name: "Aman Verma",
        role: "Student",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
        title: "Great Content",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ipsum similique, eveniet!",
        name: "Sneha Roy",
        role: "Freelancer",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
        title: "Great Content",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ipsum similique, eveniet!",
        name: "Sneha Roy",
        role: "Freelancer",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
        title: "Great Content",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ipsum similique, eveniet!",
        name: "Sneha Roy",
        role: "Freelancer",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    },
];

const About_us = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mouse drag-to-scroll handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };
    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            className="
        w-full min-h-[370px] px-4 py-8 box-border text-white
        bg-[rgba(40,20,90,0.9)]
        bg-[url('../src/assets/about_us_bkg.svg')]
        bg-cover bg-center relative
        sm:px-8 sm:py-12 md:px-16 md:py-16
      "
            style={{
                backgroundBlendMode: "overlay",
            }}
        >
            {/* Header */}
            <div className="flex flex-col items-start mb-8">
        <span className="bg-white/10 text-white px-4 py-1 rounded-full text-xs font-bold mb-2">
          Testimonials
        </span>
                <h2 className="text-2xl md:text-3xl font-bold m-0">What they say about us?</h2>
            </div>
            {/* Testimonial Cards - Horizontal scroll */}
            <div
                ref={scrollRef}
                className="
          flex gap-4 overflow-x-auto overflow-y-hidden pb-4
          scroll-snap-x scroll-snap-mandatory
          touch-pan-x cursor-grab select-none
          scrollbar-hide
        "
                style={{
                    WebkitOverflowScrolling: "touch",
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="
              bg-[rgba(120,123,123,0.45)] border border-[rgba(120,123,123,1)]
              rounded-xl p-6
              min-w-[270px] max-w-[300px] flex-[0_0_auto]
              scroll-snap-align-start transition-transform duration-300
              hover:-translate-y-1
              shadow
            "
                    >
                        <h3 className="text-lg font-bold mb-2">{t.title}</h3>
                        <p className="text-sm leading-[1.4] mb-4 text-white/85">{t.text}</p>
                        <div className="flex items-center justify-between gap-3 mt-auto">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-11 h-11 rounded-full object-cover border-2 border-white"
                            />
                            <div className="flex flex-col flex-1 min-w-0 ml-2">
                                <span className="font-semibold truncate">{t.name}</span>
                                <span className="text-xs opacity-70">{t.role}</span>
                            </div>
                            <div className="flex gap-0.5 ml-auto">
                                {[...Array(5)].map((_, idx) => (
                                    <FaStar key={idx} className="text-yellow-400 text-base" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Hide scrollbar for all browsers, including webkit */}
            <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        /* Show grab cursor only while dragging */
        .cursor-grab:active { cursor: grabbing; }
      `}</style>
        </div>
    );
};

export default About_us;
