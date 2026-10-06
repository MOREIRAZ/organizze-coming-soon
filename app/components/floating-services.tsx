"use client";

import React from "react";
import { motion } from "motion/react";

export function FloatingServices () {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      name: "Booking Systems",
      position: { top: "15%", left: "10%" },
      mobilePosition: { top: "12%", left: "5%" },
      rotation: -5,
      delay: 0,
      color: "rgba(240, 99, 44, 0.4)", // Organizze vivid orange
      glow: "rgba(240, 99, 44, 0.15)",
    },
    {
      name: "E-Commerce",
      position: { top: "15%", right: "10%" },
      mobilePosition: { top: "25%", right: "5%" },
      rotation: 5,
      delay: 0.5,
      color: "rgba(240, 139, 51, 0.4)", // Organizze orange
      glow: "rgba(240, 139, 51, 0.12)",
    },
    {
      name: "Live-Commerce",
      position: { bottom: "15%", left: "10%" },
      mobilePosition: { bottom: "25%", left: "5%" },
      rotation: 3,
      delay: 1,
      color: "rgba(229, 191, 161, 0.4)", // Organizze light orange
      glow: "rgba(229, 191, 161, 0.1)",
    },
    {
      name: "Automation",
      position: { bottom: "15%", right: "10%" },
      mobilePosition: { bottom: "12%", right: "5%" },
      rotation: -3,
      delay: 1.5,
      color: "rgba(224, 90, 41, 0.4)", // Derived Organizze orange
      glow: "rgba(224, 90, 41, 0.12)",
    },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {services.map((service, index) => (
        <motion.div
          key={service.name}
          className={`absolute flex items-center justify-center backdrop-blur-sm rounded-sm overflow-hidden ${isMobile ? 'px-3 py-1.5' : 'px-6 py-3'}`}
          style={{
            ...(isMobile ? service.mobilePosition : service.position),
            rotate: service.rotation,
            border: `1px solid ${service.color}`,
            boxShadow: `0 0 20px -5px ${service.glow}`,
            backgroundColor: service.color.replace('0.4', '0.05'),
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: service.delay },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: service.delay,
            },
          }}
        >
          <div className="absolute top-1 right-1 opacity-50">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 0V6M0 3H6" stroke={service.color} strokeWidth="1" />
            </svg>
          </div>

          <div
            className="absolute bottom-0 left-0 w-2 h-2 border-b border-l"
            style={{ borderColor: service.color, opacity: 0.5 }}
          />

          <span
            className="absolute bottom-1 right-1.5 text-[8px] font-mono leading-none tracking-tighter opacity-60"
            style={{ color: service.color }}
          >
            0{index + 1}
          </span>

          <span
            className={`font-mono tracking-widest uppercase ${isMobile ? 'text-[10px]' : 'text-xs'}`}
            style={{ color: service.color.replace('0.4', '0.9') }}
          >
            {service.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
