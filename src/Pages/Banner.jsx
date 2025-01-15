import { easeOut } from "motion";
import { motion } from "motion/react";
import team1 from "../assets/photos/team1.jpg";
import team2 from "../assets/photos/team2.jpg";

const Banner = () => {
    return (
        <div className="hero min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 overflow-hidden">
          <motion.img
            src={team1}
            animate={{y:[30,50,30]}}
            transition={{duration:10,repeat:Infinity}}
            className="max-w-sm max-h-48 border-l-[6px] border-b-[6px] border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl" />
          <motion.img
            src={team2}
            animate={{x:[100,120,100]}}
            transition={{duration:15,delay:4,repeat:Infinity}}
            className="max-w-sm max-h-48 md:border-l-[6px] lg:border-l-[6px] border-b-[6px] border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl" />
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.h1 
            animate={{ x:[0,30,0 ]}}
            transition={{duration:5, delay:1,ease:easeOut,repeat:Infinity}}
            className="text-5xl font-bold overflow-hidden">
                Shape Your Future with <motion.span
                animate={{color:["#ea8e09","#ea1309"]}}
                transition={{duration:2, repeat:Infinity}}
                > CareerQuartz</motion.span>
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn bg-blue-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;