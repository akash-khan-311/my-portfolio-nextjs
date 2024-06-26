'use client'
import { TypeAnimation } from "react-type-animation";

const TypeAnimationCom = () => {
    return (
        <span className='text-[#F31559]'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Md Akash Khan',
                2000,
                'Jr React JS Developer',
                2000,
                'Front End Developer',
                2000,
                'Jr MERN Stack Developer',
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
    )
}
export default TypeAnimationCom;