import React, { useEffect, useRef } from 'react';

interface PixelCanvasProps {
  className?: string;
  gridSize?: number;
  color?: string;
}

export function PixelCanvas({ 
  className = "", 
  gridSize = 40,
  color = "#12E669" 
}: PixelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const pixelsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let cols = 0;
    let rows = 0;

    const initPixels = () => {
      pixelsRef.current = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          pixelsRef.current.push({
            c,
            r,
            x: c * gridSize,
            y: r * gridSize,
            alpha: 0,
            targetAlpha: 0,
            decay: Math.random() * 0.02 + 0.01,
            triggerDelay: Math.random() * 1000 // Random delay for idle animation
          });
        }
      }
    };

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      cols = Math.ceil(width / gridSize);
      rows = Math.ceil(height / gridSize);
      initPixels();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Random idle glitches
      if (Math.random() > 0.95) {
        const randomIndex = Math.floor(Math.random() * pixelsRef.current.length);
        const pixel = pixelsRef.current[randomIndex];
        if (pixel && pixel.alpha < 0.1) {
           pixel.alpha = Math.random() * 0.4; // Idle flicker intensity
        }
      }

      pixelsRef.current.forEach(pixel => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - (pixel.x + gridSize/2);
        const dy = mouseRef.current.y - (pixel.y + gridSize/2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Hover interaction
        if (dist < 150) {
           const intensity = 1 - dist / 150;
           pixel.alpha = Math.max(pixel.alpha, intensity * 0.8);
        }

        // Decay alpha
        if (pixel.alpha > 0) {
          pixel.alpha -= pixel.decay;
          if (pixel.alpha < 0) pixel.alpha = 0;
        }

        // Draw pixel
        if (pixel.alpha > 0.01) {
          ctx.fillStyle = color; // Use the theme color
          ctx.globalAlpha = pixel.alpha;
          // Draw a slightly smaller rect to create grid gap effect
          ctx.fillRect(pixel.x + 1, pixel.y + 1, gridSize - 2, gridSize - 2);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (container) {
          container.removeEventListener('mousemove', handleMouseMove);
          container.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSize, color]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-auto ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
