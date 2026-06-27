import { useRef } from 'react';
import gsap from 'gsap';

import ratinhosImg from '../assets/images/ratinhos-rede.png';
import heroBg from '../assets/images/hero-bg.png';
import vetoresImg from '../assets/images/vetores-titulo.png';

function Hero() {

    const vetoresRef = useRef(null);
    const tituloRef = useRef(null);
    const ratinhosRef = useRef(null);

    const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    gsap.to(vetoresRef.current, { x: x * 15, y: y * 15, duration: 1, ease: "power2.out" });
    gsap.to(tituloRef.current, { x: x * 5, y: y * 5, duration: 1, ease: "power2.out" });
    gsap.to(ratinhosRef.current, { x: -x * 10, y: -y * 10, duration: 1, ease: "power2.out" });
  };

    return (

        <section
            className="w-full min-h-screen flex items-center justify-center relative overflow-hidden" onMouseMove={handleMouseMove}>

            <div className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-luminosity pointer-events-none z-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
            />

            {/* Wrapper do hero e conteudo */}
            <div className='w-full max-w-[1800px] mx-auto flex items-center justify-between px-10 relative z-10'>
                {/* Div do título - esquerda */}
                <div className='flex flex-col items-center relative w-1/2'>
                    <div className='relative flex justify-center items-center'>
                        <div
                            ref={vetoresRef}
                            className='absolute inset-0 pointer-events-none'
                        >
                            <img
                                src={vetoresImg}
                                alt="Decorações do título"
                                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] max-w-none object-contain'
                            />
                        </div>

                        <h1
                            ref={tituloRef}
                            className='relative z-10 text-[200px] leading-20 text-tinta-escura font-titulo efeito-titulo text-center mt-6'
                        >
                            Amar <br />
                            com você
                        </h1>
                    </div>
                    <h2 className="text-4xl text-tinta-escura font-subtitulo mt-6 relative z-10">
                        Marcelly & Rian
                    </h2>
                </div>

                {/* Imagem dos ratinhos */}
                <div className='w-1/2 flex justify-center relative z-10'>
                    <img
                        ref={ratinhosRef}
                        src={ratinhosImg}
                        alt="Dois ratinhos em uma rede"
                        className='w-full max-w-200 object-contain drop-shadow-xl'
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
