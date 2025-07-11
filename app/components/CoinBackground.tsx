"use client";

import { useEffect, useRef } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadImageShape } from "@tsparticles/shape-image";
import Particles from "@tsparticles/react";

export default function CoinsBackground() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!loadedRef.current) {
      loadImageShape(tsParticles);
      loadedRef.current = true;
    }
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full">
      <Particles
        id="coinParticles"
        options={{
          fullScreen: false,
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                width: 800,
              },
            },
            shape: {
              type: "image",
              options: {
                image: [
                  {
                    src: "/coin.svg",
                    width: 32,
                    height: 32,
                  },
                ],
              },
            },
            size: {
              value: { min: 12, max: 24 },
            },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom",
              gravity: {
                enable: true,
                acceleration: 9.81,
              },
              outModes: {
                default: "bounce",
              },
            },
            collisions: {
              enable: true,
              mode: "bounce",
            },
            life: {
              duration: {
                sync: false,
                value: 0,
              },
              count: 0,
              delay: {
                value: 0,
              },
            },
          },
        }}
      />
    </div>
  );
}
