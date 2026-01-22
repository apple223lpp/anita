import React from 'react';
import { motion } from 'motion/react';
import faceImg from 'figma:asset/82c3d3aacb58f6fd2fae8c4fee1930ab51591324.png';

export function FaceUniverse() {
  return (
    <div className="absolute top-0 left-0 w-full h-[900px] flex items-center justify-center overflow-hidden pointer-events-none select-none">
      <motion.div 
        className="relative flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 
            Container for the face. 
            We use overflow-hidden to crop out the radiating rays from the original image,
            focusing only on the central "face" (text circle).
        */}
        <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full overflow-hidden relative flex items-center justify-center z-10">
             {/* 
                Scale up the image to zoom into the center face and push rays outside the container.
                The rays are likely surrounding the center. 
                Adjust scale as needed. 
             */}
             <motion.img 
                src={faceImg} 
                alt="" 
                className="absolute w-[180%] h-[180%] max-w-none object-cover opacity-90"
                style={{ objectPosition: 'center' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
             />
             
             {/* Inner glow to soften the cropped edges */}
             <div className="absolute inset-0 rounded-full shadow-[inset_0_0_100px_#050505]" />
        </div>

        {/* Ambient Glow behind the face */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#12E669]/5 rounded-full blur-[100px] -z-10" />
      </motion.div>
    </div>
  );
}
