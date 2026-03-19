import React from 'react'
import FadeContent from '@/components/FadeContent';

const skillWords = [
    "React JS",
    "Next JS",
    "TypeScript",
    "Express JS",
    "Prisma ORM",
    "Mongoose ORM",
    "SQL",
    "MongoDB",
    "Bootstrap CSS",
    "Tailwind CSS",
    "Shadcn UI",
    "Golang",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
];

const row1 = [...skillWords];
const row2 = [skillWords[3], skillWords[7], skillWords[1], skillWords[9], skillWords[5], skillWords[0], skillWords[8], skillWords[2], skillWords[6], skillWords[4]];
const row3 = [skillWords[6], skillWords[2], skillWords[8], skillWords[4], skillWords[0], skillWords[9], skillWords[3], skillWords[5], skillWords[7], skillWords[1]];

interface MarqueeRowProps {
    words: string[];
    direction?: "left" | "right";
    speed?: "normal" | "slow";
}

const MarqueeRow = ({ words, direction = "left", speed = "normal" }: MarqueeRowProps) => {
    const animClass =
        direction === "left"
            ? speed === "slow"
                ? "animate-scroll-left-slow"
                : "animate-scroll-left"
            : "animate-scroll-right";

    const items = [...words, ...words, ...words, ...words];

    return (
        <div className="marquee-fade overflow-hidden py-1 md:py-3">
            <div className={`flex w-max gap-4 ${animClass}`}>
                {items.map((word, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center rounded-lg border border-border bg-background 
                        px-5 py-2.5 text-xs md:text-sm font-medium text-foreground transition-colors 
                        hover:border-primary/40 hover:text-primary whitespace-nowrap select-none"
                    >
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <FadeContent
            className="w-full md:w-[70%]"
        >

            <div className="w-full space-y-1">
                <MarqueeRow words={row1} direction="left" />
                <MarqueeRow words={row2} direction="right" speed="slow" />
                <MarqueeRow words={row3} direction="left" speed="slow" />
            </div>

        </FadeContent >
    )
}

export default Skills