'use client';

import Image from 'next/image'
import Link from 'next/link';
import {
    Calendar,
    MapPin,
    Clock,
    UserPlus,
    MessageSquare,
    Music,
    Lightbulb,
    Target,
    HelpingHand,
    PoundSterling,
    Hammer,
    Info,
    Merge, Users, Coffee, Presentation, TrendingUp, Heading1
} from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React, {useState, useEffect} from "react";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";
import CountdownTimer from "@/app/components/CountdownTimer";

// Note: Metadata should be in a separate layout.tsx or page.tsx file as a server component
// This is a client component so we've removed the metadata export

const ParallaxBackground = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if we're on mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Run on mount and when window resizes
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            {/* Fixed Background Image with Parallax Effect */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/disrkguox/image/upload/w_1920/v1742976209/sam-knight-jhpL88kP7Y8-unsplash_rvxhux.jpg')",
                    backgroundAttachment: isMobile ? "scroll" : "fixed" // Use scroll on mobile
                }}
            />

            {/* Semi-transparent overlay to improve content readability */}
            <div className="fixed top-0 left-0 w-full h-full bg-white/10 z-10"/>
        </>
    );
};

export default function Home() {
    return (
        <div className="relative w-full overflow-x-hidden">
            {/* Background component (stays fixed) */}
            <ParallaxBackground/>

            {/* First Section - Full height with Carousel */}
            <section className="relative z-20 flex items-center justify-center w-full my-10 md:my-8 md:mb-36 px-4 md:py-0">
                <div
                    className="w-full max-w-3xl mx-auto flex flex-col gap-6 md:gap-10 bg-asi-darkBlue/80 rounded-2xl backdrop-blur-md p-6 md:px-10 shadow">
                    {/* Top row with logo and countdown side by side */}
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
                        {/* Logo */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <Image
                                src="https://res.cloudinary.com/disrkguox/image/upload/w_500/v1743532070/Logo-2_jdykpt.png"
                                width={400}
                                height={400}
                                alt={"ASI Convention Logo"}
                                className="w-auto h-auto pb-10 max-h-[150px] object-contain"
                                priority
                            />
                        </div>

                        {/* Vertical divider (visible only on md screens and up) */}
                        <div className="hidden md:block h-24 w-px bg-white/20"></div>

                        {/* Horizontal divider (visible only on mobile) */}
                        <div className="md:hidden w-full h-px bg-white/20"></div>

                        {/* Countdown Timer */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                            <CountdownTimer
                                targetDate={new Date("2025-06-21")}
                                numberClassName="font-bold text-3xl text-white"
                                labelClassName="text-xs text-white/70 uppercase tracking-wider"
                                gridClassName="grid grid-cols-4 gap-2"
                                containerClassName="w-auto"
                            />
                        </div>
                    </div>

                    {/* Horizontal divider between top and bottom sections */}
                    <div className="w-full h-px md:-mt-10 bg-white/20"></div>

                    {/* Date and Location */}
                    <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-2 sm:gap-6">
                        <div className="flex items-center bg-white/10 rounded-2xl p-2">
                            <Calendar className="h-4 w-4 text-white mr-2"/>
                            <span className="text-base md:text-lg text-white font-light">21 June, 2025</span>
                        </div>
                        <div className="flex items-center bg-white/10 rounded-2xl p-2">
                            <MapPin className="h-4 w-4 text-white mr-2"/>
                            <span
                                className="text-base md:text-lg text-white font-light">Daventry, Northamptonshire</span>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-white font-light">
                        Come join us for the first annual ASI UK convention. Learn how God is working through your
                        fellow lay members of the church to share Christ in the marketplace. Don't miss out on this
                        opportunity to network with like-minded Adventist professionals, entrepreneurs, and ministries
                        who share the same
                        mission of sharing God's love and the exciting message of Jesus' soon return!
                    </p>

                    {/* Content section with conference details (1/2) and presenters (1/2) */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Conference Details - 1/2 width on desktop */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-lg font-normal text-white mb-3 text-center">Why Attend?</h3>
                            <ul className="space-y-3 text-white font-light text-sm">
                                <li className="flex items-start">
                                    <Lightbulb className="h-4 w-4 text-white mr-2 mt-1"/>
                                    <span>Learn practical approaches to marketplace evangelism</span>
                                </li>
                                <li className="flex items-start">
                                    <Users className="h-4 w-4 text-white mr-2 mt-1"/>
                                    <span>Connect with fellow Christian professionals</span>
                                </li>
                                <li className="flex items-start">
                                    <Coffee className="h-4 w-4 text-white mr-2 mt-1"/>
                                    <span>Enjoy fellowship over a provided lunch and refreshments</span>
                                </li>
                            </ul>
                        </div>

                        {/* Vertical divider (visible only on md screens and up) */}
                        <div className="hidden md:block h-auto w-px bg-white/20 self-stretch"></div>

                        {/* Presenters - 1/2 width on desktop */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-lg font-normal text-white mb-3 text-center">Featured Presenters</h3>
                            <div className="flex flex-wrap justify-center gap-10">
                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 border-2 border-white mb-2">
                                        <Image
                                            src="https://res.cloudinary.com/disrkguox/image/upload/w_200/v1743533994/jwong_qa4c9p_4e7a8c.jpg"
                                            width={200}
                                            height={200}
                                            alt="Johnny Wong"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-sm text-white text-center">Johnny Wong</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 border-2 border-white mb-2">
                                        <Image
                                            src="https://res.cloudinary.com/disrkguox/image/upload/w_200/v1743534051/csalcianu_mlopct_dddaf5.jpg"
                                            width={200}
                                            height={200}
                                            alt="Christian Salcianu"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-sm text-white text-center">Christian Salcianu</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Button in its own row */}
                    <div className="flex justify-center mt-2">
                        <Link
                            href="/convention"
                            className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-8 rounded-lg inline-block font-medium transition-colors duration-200"
                        >
                            Convention Information
                        </Link>
                    </div>
                </div>
            </section>

            {/* Combined Section with Project Funding and Membership */}
            <section className="relative z-20 w-full bg-white/90 backdrop-blur-md">
                <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row px-4 py-12 md:py-16">
                    {/* Project Funding Column */}
                    <div className="w-full md:w-1/2 md:pr-8 pb-8 md:pb-0 flex flex-col items-center text-center">
                        <div className="flex items-center mb-4 md:mb-6">
                            <Hammer className="mr-2 h-5 w-5 md:h-6 md:w-6 text-asi-blue"/>
                            <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">Project
                                Funding</h2>
                        </div>
                        <p className="text-sm text-left md:text-base mb-4 max-w-md flex-grow">
                            Do you have a ministry or evangelistic project that needs support? ASI UK has a project
                            funding
                            programme designed specifically to financially support laypeople with a passion for
                            ministry.
                            The 2025 ASI UK project funding application process is now closed - check out the approved applications for this year.
                        </p>
                        <div className="mt-auto">
                            <Link
                                href="/projects"
                                className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-4 rounded inline-block"
                            >
                                Project Application Information
                            </Link>
                        </div>
                    </div>

                    {/* Vertical divider (visible only on md screens and up) */}
                    <div className="hidden md:block h-auto w-px bg-asi-blue/20 self-stretch"></div>

                    {/* Horizontal divider (visible only on mobile) */}
                    <div className="md:hidden w-full h-px bg-asi-blue/20 mb-8"></div>

                    {/* Membership Column */}
                    <div className="w-full md:w-1/2 md:pl-8 flex flex-col items-center text-center">
                        <div className="flex items-center mb-4 md:mb-6">
                            <Merge className="mr-2 h-5 w-5 md:h-6 md:w-6 text-asi-blue"/>
                            <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">Join ASI</h2>
                        </div>
                        <p className="text-sm text-left md:text-base mb-4 max-w-md flex-grow">
                            Are you an Adventist professional, entrepreneur, or ministry leader with a desire to spread
                            the love of Christ in your sphere of influence? ASI UK is designed specifically for you.
                        </p>
                        <div className="mt-auto">
                            <Link
                                href="/membership"
                                className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-4 rounded inline-block"
                            >
                                Membership Information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-20 flex items-center justify-center w-full my-10 md:my-36 px-4 md:py-0">
                <div
                    className="w-full max-w-3xl mx-auto flex flex-col gap-6 md:gap-10 bg-white/90 rounded-2xl backdrop-blur-md p-6 md:px-10 shadow">

                    <div className="flex items-center">
                        {/*<Info className="mr-2 h-5 w-5 md:h-6 md:w-6 text-asi-blue"/>*/}
                        <h2 className="text-2xl md:text-3xl text-asi-blue font-bold leading-none">About ASI</h2>
                    </div>

                    <p className={""}>Adventist-laymen's Services and Industries (ASI) is a dynamic organization that unites Seventh-day Adventist business owners, professionals, and supporting ministries in a shared mission. The organization is dedicated to supporting the Seventh-day Adventist Church through a unique approach that integrates faith with professional life.</p>

                    {/* Call to Action Button in its own row */}
                    <div className="flex justify-center mt-2">
                        <Link
                            href="/about"
                            className="bg-asi-blue hover:bg-blue-700 text-white py-2 px-8 rounded-lg inline-block font-medium transition-colors duration-200"
                    >
                        Learn More
                    </Link>
                </div>
        </div>
</section>
</div>
)
}