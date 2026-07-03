import { motion } from "framer-motion";
//import hero from "../assets/hero.png";
export default function Hero() {

return(

<section className="bg-linear-to-r from-blue-700 to-indigo-700 text-white">

<div className="max-w-7xl mx-auto px-8 py-24">

<motion.h1

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

className="text-5xl font-bold">

Find Your Dream Insurance Job

</motion.h1>

<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.5}}

className="mt-6 text-xl max-w-2xl">

Join top insurance companies across the GCC and
take the next step in your career.

</motion.p>

<button

className="mt-10 bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl">

Apply Today

</button>

</div>

</section>

)

}