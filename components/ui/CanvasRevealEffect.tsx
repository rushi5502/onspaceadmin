"use client";
import React, { useEffect, useRef } from "react";

interface CanvasRevealEffectProps {
  children: React.ReactNode;
  containerClassName?: string;
}

export const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({
  children,
  containerClassName = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context || !container) return;

    const { clientWidth: width, clientHeight: height } = container;

    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    context.clearRect(0, 0, width, height);

    // Draw initial effect
    context.fillStyle = "rgba(0, 0, 0, 0.5)";
    context.fillRect(0, 0, width, height);

    // Example reveal effect logic
    context.globalCompositeOperation = "destination-out";
    context.beginPath();
    context.arc(width / 2, height / 2, 100, 0, 2 * Math.PI);
    context.fill();

  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
