import { motion } from 'framer-motion';
import TextGenerateEffect from './TextGenerateEffect';

import imgCosmos from '../assets/images/cosmos.png';
import imgFoguinho from '../assets/images/foguinho.png';
import imgCometa from '../assets/images/cometa.png';

export default function SectionMedos() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto h-[750px] mt-20 px-10">
      
      <div className="absolute top-0 left-0 max-w-400">
        <TextGenerateEffect 
          delayGeral={0} 
          words="Desde os tempos mais antigos, o medo sempre foi um companheiro fiel da humanidade." 
        />
      </div>

      <motion.img 
        src={imgFoguinho}
        alt="Fogo"
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 2.5, duration: 2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-10%" }}
        className="absolute top-0 right-[-3%] w-50 mix-blend-multiply pointer-events-none" 
      />

      <div className="absolute top-[12%] right-[8%] max-w-300 text-right">
        <TextGenerateEffect 
          delayGeral={1.5} 
          words="Havia o medo do fogo que queimava," 
        />
      </div>

      <div className="absolute top-[24%] right-[30%] max-w-300 text-right">
        <TextGenerateEffect 
          delayGeral={2.7}
          words="o medo da luz que cegava," 
        />
      </div>

      <motion.img 
        src={imgCometa}
        alt="Cometa"
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", x: -20, y: -20 }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
        transition={{ delay: 2.8, duration: 2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-20%" }}
        className="absolute top-[20%] right-[10%] w-80 mix-blend-multiply pointer-events-none" 
      />

      <div className="absolute top-[36%] right-[30%] max-w-130 text-right">
        <TextGenerateEffect 
          delayGeral={3.5} 
          words="o medo da escuridão profunda e de tudo aquilo que nos confrontava." 
        />
      </div>

      <motion.img 
        src={imgCosmos}
        alt="Cosmos"
        initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 5, duration: 3, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-10%" }}
        className="absolute top-[-5%] left-[-5%] w-200 mix-blend-multiply opacity-90 pointer-events-none" 
      />

      <div className="absolute top-[58%] right-0 max-w-300 text-right">
        <TextGenerateEffect 
          delayGeral={4} 
          words="O medo, afinal, nasce daquilo que não dominamos" 
        />
      </div>

      <div className="absolute top-[70%] right-[0%] max-w-250 text-right">
        <TextGenerateEffect 
          delayGeral={4.2} 
          words="Ele surge sorrateiro diante do que é novo, daquela sensação incômoda de que vamos nos desorganizar, nos enrolar e, inevitavelmente, nos complicar." 
        />
      </div>

    </section>
  );
}