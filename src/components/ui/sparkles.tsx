"use client";
import React, { useEffect, useState, useCallback } from "react";

export const SparklesCore = (props: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const {
    id,
    background,
    minSize,
    maxSize,
    particleDensity,
    className,
    particleColor,
  } = props;

  const [sparkles, setSparkles] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
      scale: number;
    }[]
  >([]);

  const animate = useCallback(() => {
    const canvas = document.getElementById(id || "sparkles-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparkles.forEach((sparkle) => {
      sparkle.x += (Math.random() - 0.5) * 2;
      sparkle.y += (Math.random() - 0.5) * 2;
      ctx.beginPath();
      ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, 2 * Math.PI);
      ctx.fillStyle = sparkle.color;
      ctx.globalAlpha = sparkle.scale;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }, [id, sparkles]);

  useEffect(() => {
    const canvas = document.getElementById(id || "sparkles-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const initSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < (particleDensity || 20); i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize || 2) + (minSize || 0.5),
          color: particleColor || "#FFFFFF",
          scale: Math.random() * 0.5 + 0.5,
        });
      }
      setSparkles(newSparkles);
    };

    initSparkles();
    window.addEventListener("resize", initSparkles);

    animate();

    return () => {
      window.removeEventListener("resize", initSparkles);
    };
  }, [id, maxSize, minSize, particleColor, particleDensity, animate]);

  return (
    <div className={`relative w-full h-full ${className || ""}`}>
      <canvas
        id={id || "sparkles-canvas"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: background || "transparent",
        }}
      ></canvas>
    </div>
  );
}; 