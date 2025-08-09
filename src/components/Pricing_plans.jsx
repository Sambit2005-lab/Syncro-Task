import React from "react";

const features = [
    "Everything in PREVIEW plus:",
    "Full Figma Design System",
    "Licenses",
    "Templates",
    "Some limited updates",
    "Free Limited updates",
    "Unlimited users",
];

const PricingPlans = () => {
    return (
        <div
            className="
        min-h-screen min-w-full
        bg-[#180c27]
        px-[clamp(0.5rem,7vw,8rem)] py-[clamp(1.2rem,6vw,4rem)]
        flex flex-col items-center box-border
      "
        >
            {/* Heading Block */}
            <div className="flex justify-start items-center gap-x-6 sm:gap-x-8 mb-8 flex-nowrap min-w-0 w-full">
                <h2 className="shrink font-bold text-white leading-[1.15] text-[clamp(1.15rem,5vw,2rem)] sm:text-[clamp(1.5rem,3vw,2.5rem)]">
                    Pricing Plans of<br />
                    Your Art Journey
                </h2>
                <div className="flex flex-col justify-center gap-y-2 shrink-0">
                    <div className="w-[80px] sm:w-[100px] h-[3px] rounded bg-[#9333ea]" />
                    <div className="w-[48px] sm:w-[60px] h-[3px] rounded bg-[#9333ea]" />
                </div>
            </div>






            {/* Cards Container */}
            <div
                className="
          w-full
          flex flex-wrap justify-center items-stretch gap-[clamp(0.7rem,3vw,2.2rem)]
          mt-1.5
          box-border
        "
            >
                {/* --- PREVIEW CARD --- */}
                <div
                    className={`
            bg-[#0a0a0a]
            border border-[#434350]
            rounded-[20px]
            w-[min(97vw,324px)]
            min-w-[clamp(170px,49vw,310px)]
            max-w-[98vw]
            p-[clamp(1rem,2.1vw,2rem)] px-[clamp(1rem,4vw,1.7rem)]
            text-white
            flex flex-col items-start
            min-h-[430px]
            mx-auto
            box-border
            shadow-[0_4px_32px_0_rgba(60,40,90,0.2)]
          `}
                >
                    <h3 className="uppercase text-white font-bold text-[clamp(0.99rem,1.3vw,1.21rem)] tracking-[1.2px] mb-[15px] w-full text-left">
                        PREVIEW
                    </h3>
                    <div className="text-[#e2e1ec] text-[clamp(0.85rem,1.05vw,1rem)] mt-[-8px] mb-2 text-left w-full">
                        For individual creators and solopreneurs who want the complete design system &amp; updates forever.
                    </div>
                    <p className="text-white font-bold text-[clamp(1.3rem,6vw,2.6rem)] leading-[1] mt-[10px] mb-[14px] w-full text-left">
                        FREE
                    </p>
                    <button
                        className="
              block
              w-[175px] max-w-[95%]
              py-[11px]
              rounded-[25px]
              font-semibold
              text-[clamp(0.83rem,1vw,1rem)]
              text-[#262c31]
              bg-gradient-to-r from-[#e5e6ea] to-[#fafcff]
              shadow-[0_2px_20px_0_rgba(125,100,200,0.13)]
              cursor-pointer
              transition
              hover:filter hover:brightness-[0.93] hover:from-[#f2e6fa]
              hover:to-[#fafcff] hover:text-[#9333ea]
              mb-[18px]
              self-start
            "
                    >
                        Get it Now!
                    </button>
                    <ul className="list-none p-0 m-0 mt-[10px] w-full text-[clamp(0.92rem,1vw,1.08rem)] text-[#e6e6f2]">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className="relative pl-[26px] mb-0.5 pb-0.5 font-normal leading-[1.45] text-left"
                                style={{
                                    // SVG bullet as background image for ::before
                                    position: "relative",
                                }}
                            >
                <span
                    style={{
                        content: "''",
                        display: "inline-block",
                        width: 17,
                        height: 17,
                        marginRight: 7,
                        marginBottom: -3.5,
                        verticalAlign: "middle",
                        background:
                            "url(\"data:image/svg+xml;utf8,<svg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='9' cy='9' r='9' fill='%239333ea'/><path d='M5 9.8l2.1 2.1 5-5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\") no-repeat center / contain",
                        position: "absolute",
                        left: 0,
                        top: "calc(50% - 8.5px)",
                    }}
                    aria-hidden="true"
                ></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* --- SOLO CARD --- */}
                <div
                    className={`
            bg-[linear-gradient(180deg,#000_0%,#326678_22.21%,#fff_47.69%,#188dae_58.32%,#033c79_76.63%,#020204_100%)]
            border border-[#4198d2]
            rounded-[20px]
            w-[min(97vw,324px)]
            min-w-[clamp(170px,49vw,310px)]
            max-w-[98vw]
            p-[clamp(1rem,2.1vw,2rem)] px-[clamp(1rem,4vw,1.7rem)]
            text-white
            flex flex-col items-start
            min-h-[430px]
            mx-auto
            box-border
            shadow-[0_4px_32px_0_rgba(60,40,90,0.2)]
          `}
                >
                    <h3 className="uppercase text-white font-bold text-[clamp(0.99rem,1.3vw,1.21rem)] tracking-[1.2px] mb-[15px] w-full text-left">
                        SOLO PRO
                    </h3>
                    <div className="text-[#e2e1ec] text-[clamp(0.85rem,1.05vw,1rem)] mt-[-8px] mb-2 text-left w-full">
                        For individual creators and solopreneurs who want the complete design system &amp; updates forever.
                    </div>
                    <p className="text-white font-bold text-[clamp(1.3rem,6vw,2.6rem)] leading-[1] mt-[10px] mb-[14px] w-full text-left">
                        $60 <span className="text-[#e1e0fa] text-[clamp(0.7rem,1.2vw,1rem)] font-normal">USD</span>
                        <br />
                        <span className="block text-[#b5a7f8] text-[clamp(0.75rem,1vw,0.96rem)] mt-[2px] leading-[1.1]">
              One time purchase
            </span>
                    </p>
                    <button
                        className="
              block
              w-[175px] max-w-[95%]
              py-[11px]
              rounded-[25px]
              font-semibold
              text-[clamp(0.83rem,1vw,1rem)]
              text-[#262c31]
              bg-gradient-to-r from-[#e5e6ea] to-[#fafcff]
              shadow-[0_2px_20px_0_rgba(125,100,200,0.13)]
              cursor-pointer
              transition
              hover:filter hover:brightness-[0.93] hover:from-[#f2e6fa]
              hover:to-[#fafcff] hover:text-[#9333ea]
              mb-[18px]
              self-start
            "
                    >
                        Get it Now!
                    </button>
                    <ul className="list-none p-0 m-0 mt-[10px] w-full text-[clamp(0.92rem,1vw,1.08rem)] text-[#e6e6f2]">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className="relative pl-[26px] mb-0.5 pb-0.5 font-normal leading-[1.45] text-left"
                                style={{
                                    position: "relative",
                                }}
                            >
                <span
                    style={{
                        content: "''",
                        display: "inline-block",
                        width: 17,
                        height: 17,
                        marginRight: 7,
                        marginBottom: -3.5,
                        verticalAlign: "middle",
                        background:
                            "url(\"data:image/svg+xml;utf8,<svg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='9' cy='9' r='9' fill='%239333ea'/><path d='M5 9.8l2.1 2.1 5-5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\") no-repeat center / contain",
                        position: "absolute",
                        left: 0,
                        top: "calc(50% - 8.5px)",
                    }}
                    aria-hidden="true"
                ></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* --- TEAM CARD --- */}
                <div
                    className={`
            bg-[linear-gradient(180deg,#000_0%,#4d1561_22.21%,#fff_47.69%,#7d0ba8_59.57%,#2a0270_76.63%,#020204_100%)]
            border border-[#9333ea]
            rounded-[20px]
            w-[min(97vw,324px)]
            min-w-[clamp(170px,49vw,310px)]
            max-w-[98vw]
            p-[clamp(1rem,2.1vw,2rem)] px-[clamp(1rem,4vw,1.7rem)]
            text-white
            flex flex-col items-start
            min-h-[430px]
            mx-auto
            box-border
            shadow-[0_4px_32px_0_rgba(60,40,90,0.2)]
          `}
                >
                    <h3 className="uppercase text-white font-bold text-[clamp(0.99rem,1.3vw,1.21rem)] tracking-[1.2px] mb-[15px] w-full text-left">
                        TEAM PRO
                    </h3>
                    <div className="text-[#e2e1ec] text-[clamp(0.85rem,1.05vw,1rem)] mt-[-6px] mb-2 text-left w-full">
                        For teams and commercial organizations who want the complete design system, updates, and team-friendly license.
                    </div>
                    <p className="text-white font-bold text-[clamp(1.3rem,6vw,2.6rem)] leading-[1] mt-[10px] mb-[14px] w-full text-left">
                        $180 <span className="text-[#e1e0fa] text-[clamp(0.7rem,1.2vw,1rem)] font-normal">USD</span>
                        <br />
                        <span className="block text-[#b5a7f8] text-[clamp(0.75rem,1vw,0.96rem)] mt-[2px] leading-[1.1]">
              One time purchase
            </span>
                    </p>
                    <button
                        className="
              block
              w-[175px] max-w-[95%]
              py-[11px]
              rounded-[25px]
              font-semibold
              text-[clamp(0.83rem,1vw,1rem)]
              text-[#262c31]
              bg-gradient-to-r from-[#e5e6ea] to-[#fafcff]
              shadow-[0_2px_20px_0_rgba(125,100,200,0.13)]
              cursor-pointer
              transition
              hover:filter hover:brightness-[0.93] hover:from-[#f2e6fa]
              hover:to-[#fafcff] hover:text-[#9333ea]
              mb-[18px]
              self-start
            "
                    >
                        Get it Now!
                    </button>
                    <ul className="list-none p-0 m-0 mt-[10px] w-full text-[clamp(0.92rem,1vw,1.08rem)] text-[#e6e6f2]">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className="relative pl-[26px] mb-0.5 pb-0.5 font-normal leading-[1.45] text-left"
                                style={{
                                    position: "relative",
                                }}
                            >
                <span
                    style={{
                        content: "''",
                        display: "inline-block",
                        width: 17,
                        height: 17,
                        marginRight: 7,
                        marginBottom: -3.5,
                        verticalAlign: "middle",
                        background:
                            "url(\"data:image/svg+xml;utf8,<svg width='18' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='9' cy='9' r='9' fill='%239333ea'/><path d='M5 9.8l2.1 2.1 5-5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\") no-repeat center / contain",
                        position: "absolute",
                        left: 0,
                        top: "calc(50% - 8.5px)",
                    }}
                    aria-hidden="true"
                ></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;
