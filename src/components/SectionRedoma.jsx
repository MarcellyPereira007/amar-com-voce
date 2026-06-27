import { motion } from 'framer-motion';
import TextGenerateEffect from './TextGenerateEffect';

import imgCobertor from '../assets/images/ratinho-cobertor.png';
import imgBrabuleta from '../assets/images/brabuleta.png';
import imgRedoma from '../assets/images/redoma.png';

export default function SectionRedoma() {
    return (
        <section className="relative w-full max-w-[1600px] mx-auto h-[1200px] mt-20 px-10">

            <div className="absolute top-[-12%] left-[15%] max-w-200 text-center">
                <TextGenerateEffect
                    delayGeral={0}
                    words="A gente passa a vida inteira construindo armaduras para não se machucar,"
                />
            </div>

            <motion.img
                src={imgCobertor}
                alt="Ratinho com cobertor"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 2, duration: 2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className="absolute top-[-23%] right-[-5%]  w-200 mix-blend-multiply pointer-events-none"
            />

            <div className="absolute top-0 right-[35%] max-w-300 text-center">
                <TextGenerateEffect
                    delayGeral={0.5}
                    words="tentando organizar o caos"
                />
            </div>

            <div className="absolute top-[8%] left-0 max-w-250 text-left">
                <TextGenerateEffect
                    delayGeral={1}
                    words="Mas aí, a gente descobre que o maior de todos os terrores não é um monstro desconhecido no escuro"
                />
            </div>

            <div className="absolute top-[16%] right-[40%] max-w-130 text-right">
                <TextGenerateEffect
                    delayGeral={2.5}
                    words="É um sentimento."
                />
            </div>

            <div className="absolute top-[23%] right-[35%] max-w-220 text-right">
                <TextGenerateEffect
                    delayGeral={2.5}
                    words="Porque nada é mais aterrorizante, nada nos rouba mais o controle das mãos do que o amor"
                />
            </div>
            
            <div className="absolute top-[35%] left-[22%] max-w-260 text-center">
                <TextGenerateEffect
                    delayGeral={3}
                    words='"O amor é um mestre, mas é preciso saber adquiri-lo,porque se adquire dificilmente, ao preço de um esforço prolongado; é preciso amar, não por um instante, mas até o fim”'
                />
            </div>

            <motion.img
                src={imgBrabuleta}
                alt="Cometa"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", x: -20, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }}
                transition={{ delay: 2.8, duration: 2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-20%" }}
                className="absolute top-[30%] left-[-5%] w-130 mix-blend-multiply pointer-events-none"
            />


            <div className="absolute top-[48%] right-0 max-w-300 text-right">
                <TextGenerateEffect
                    delayGeral={4}
                    words="O amor não é seguro."
                />
            </div>

            <div className="absolute top-[55%] right-[20%] max-w-300 text-right">
                <TextGenerateEffect
                    delayGeral={4}
                    words="O amor, na verdade, destrói"
                />
            </div>

            <div className="absolute top-[65%] right-[0%] max-w-190 text-right">
                <TextGenerateEffect
                    delayGeral={4.5}
                    words="Ele esmaga as nossas certezas absolutas, quebra as nossas defesas de vidro e nos obriga a olhar para as nossas próprias feridas."
                />
            </div>
            

            <motion.img
                src={imgRedoma}
                alt="Redoma"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 5, duration: 3, ease: "easeInOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className="absolute top-[50%] right-[50%] w-70 mix-blend-multiply opacity-90 pointer-events-none"
            />

            <div className="absolute top-[75%] left-[0%] max-w-140 text-center">
                <TextGenerateEffect
                    delayGeral={4.5}
                    words="Ele destrói quem nós éramos para abrir espaço para quem
nós podemos ser juntos."
                />
            </div>
            
            <div className="absolute top-[85%] right-[0%] max-w-250 text-right">
                <TextGenerateEffect
                    delayGeral={4.5}
                    words="É quase loucura  acordar um dia e perceber que você já não pertence apenas a si mesmo"
                />
            </div>

            <div className="absolute bottom-0 right-0 max-w-300 text-right">
                <TextGenerateEffect
                    delayGeral={4.5}
                    words="que a sua existência agora se entrelaça com a de outra pessoa."
                />
            </div>

        </section>
    );
}