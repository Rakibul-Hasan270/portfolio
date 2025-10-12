import { motion } from "framer-motion";

const SkillsNxt = () => {
    const skills = [
        { src: "https://i.postimg.cc/FFG9wQP4/react.png", alt: "React" },
        { src: "https://i.ibb.co.com/6JT6JpqC/download.png", alt: "js" },
        { src: "https://i.ibb.co.com/ymmCcTnW/download-2.png", alt: "node" },
        { src: "https://i.ibb.co.com/LX5t5vBd/download-3.png", alt: "express" },
        { src: "https://i.ibb.co.com/KjCZbmq9/download-4.png", alt: "mongoDB" },
        { src: "https://i.postimg.cc/zB8rPdKv/Firebase.png", alt: "Firebase" },
        { src: "https://i.postimg.cc/C5JL432w/Tailwind.png", alt: "Tailwind CSS" },
        { src: "https://i.postimg.cc/Wz9TZMD3/Figma.png", alt: "Figma" },
        { src: "https://i.postimg.cc/FHkNfkhr/htnl5.png", alt: "HTML5" },
        { src: "https://i.postimg.cc/DyM7yPkp/github.png", alt: "GitHub" },
        { src: "https://i.postimg.cc/DyM7yPkp/github.png", alt: "GitHub" },
        { src: "https://i.postimg.cc/DyM7yPkp/github.png", alt: "GitHub" },
    ];

    return (
        <div className="mt-32 mb-32">
            <h3 className="text-center text-5xl font-extrabold mb-16">
                Skills & Tools
                <span className="text-pink-800 font-extrabold">_</span>
            </h3>

            {/* Grid Layout: 2 rows x 6 columns */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 place-items-center max-w-[650px] mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="border-2 border-pink-800 rounded-lg p-2"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: Math.random(),
                        }}
                    >
                        <img className="h-16 w-16" src={skill.src} alt={skill.alt} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsNxt;