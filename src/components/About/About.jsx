import Lottie from "lottie-react";
import img from '../../assets/animation.json';

const About = () => {
    return (
        <div className="flex md:flex-row  flex-col-reverse sm:items-start md:items-center mt-10 gap-10 space-y-7">
            {/* width="640" height="360" */}
            {/* w-7/12 md:w-10/12 */}
            <div className="">
                <Lottie className="w-full" animationData={img}>
                </Lottie>
            </div>
            <div className='flex-grow'>
                <h3 className='text-center md:text-start text-4xl font-extrabold mb-8'>About Me <span className="text-pink-800 font-extrabold">_</span></h3>
                <p className="text-center md:text-start">I'm Rakibul Hasan. I have completed a diploma in Computer Engineering from Kurigram Polytechnic Institute. I'm a Junior Web Developer with a strong passion for technology and coding. My journey so far has equipped me with proficiency in ReactJS, JavaScript, Tailwind CSS, HTML, CSS, and ensuring mobile and all-device responsiveness.
                    <br />
                    <br />
                    I'm committed to continuous learning and love tackling new challenges. My goal is to become a proficient full-stack developer, constantly improving my skills and staying updated with the latest tech advancements.</p>
            </div>
        </div>
    );
};

export default About;