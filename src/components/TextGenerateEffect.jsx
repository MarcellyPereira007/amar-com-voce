import { useEffect, useMemo, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "../lib/utils";

export default function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.1,
  delayGeral = 0
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-10%" });

  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    if (isInView && scope.current) {
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { 
          duration: duration, 
          delay: stagger(staggerDelay, { startDelay: delayGeral }) 
        }
      );
    }
  }, [isInView, animate, duration, filter, scope, staggerDelay, delayGeral]);

  return (
    <div className={cn("font-corpo text-3xl md:text-4xl text-tinta-escura leading-10", className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className="opacity-0 inline-block will-change-transform will-change-filter"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}