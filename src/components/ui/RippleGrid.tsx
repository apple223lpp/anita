import React, { useEffect, useRef } from 'react';

interface RippleGridProps {
  gridColor?: string;
  gridSize?: number; // Cell size in pixels
  gridThickness?: number; // Line thickness
  rippleIntensity?: number;
  mouseInteraction?: boolean;
  mouseInteractionRadius?: number;
  enableRainbow?: boolean;
  opacity?: number;
  className?: string;
}

export const RippleGrid: React.FC<RippleGridProps> = ({
  gridColor = '#ffffff',
  gridSize = 40,
  gridThickness = 1,
  rippleIntensity = 0.2,
  mouseInteraction = true,
  mouseInteractionRadius = 100,
  enableRainbow = false,
  opacity = 0.5,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);

  // Grid state
  const pointsRef = useRef<{ x: number; y: number; originX: number; originY: number; vx: number; vy: number }[]>([]);
  const rowsRef = useRef(0);
  const colsRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle Resize
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        initGrid(canvas.width, canvas.height);
      }
    };

    // Initialize Grid Points
    const initGrid = (width: number, height: number) => {
      // Ensure reasonable grid size to prevent performance issues
      const safeGridSize = Math.max(gridSize, 10); 
      
      const cols = Math.ceil(width / safeGridSize) + 1;
      const rows = Math.ceil(height / safeGridSize) + 1;
      
      rowsRef.current = rows;
      colsRef.current = cols;

      const points = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * safeGridSize;
          const py = y * safeGridSize;
          points.push({
            x: px,
            y: py,
            originX: px,
            originY: py,
            vx: 0,
            vy: 0,
          });
        }
      }
      pointsRef.current = points;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // Mouse Leave
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    if (mouseInteraction) {
        // Attach to window or parent? Ideally the container.
        // For better UX, we attach to the canvas itself or parent.
        // If the canvas is covered by other elements (pointer-events-none), we might need global listener
        // But let's assume it catches events or we use a global listener if needed.
        // Since it's a background, we might want window listener if elements block it.
        // Let's use local first.
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation Loop
    let animationFrameId: number;

    const render = () => {
      if (!ctx || !canvas) return;
      
      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update Physics
      const points = pointsRef.current;
      const mouse = mouseRef.current;
      
      // Physics constants
      // Adjust friction and ease based on "intensity" sort of
      const friction = 0.9;
      const ease = 0.1;
      // Convert user radius prop to pixels roughly if it's small, or use as is if large.
      // User passed "1.2". If that's a factor of gridSize? Or relative? 
      // If it's 1.2, it's tiny in pixels. Let's assume it's a multiplier of gridSize if < 10.
      const radius = mouseInteractionRadius < 10 ? mouseInteractionRadius * Math.max(gridSize, 20) * 5 : mouseInteractionRadius;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        // Distance to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < radius) {
          const angle = Math.atan2(dy, dx);
          const force = (radius - dist) / radius; // 0 to 1
          const push = force * rippleIntensity * 20; // Scale intensity
          
          p.vx -= Math.cos(angle) * push;
          p.vy -= Math.sin(angle) * push;
        }

        // Return to origin (spring)
        const ox = p.originX - p.x;
        const oy = p.originY - p.y;
        
        p.vx += ox * ease;
        p.vy += oy * ease;
        
        // Friction
        p.vx *= friction;
        p.vy *= friction;
        
        // Update
        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw Lines
      ctx.beginPath();
      // Adjust opacity
      ctx.globalAlpha = opacity;
      
      // We clamp thickness. User passed 15. That's huge. 
      // If it is > 5, maybe we treat it as 1.5? Or maybe they really want thick lines.
      // Let's trust the user but cap it at gridSize / 2 so it doesn't fill the screen.
      const safeThickness = Math.min(gridThickness, Math.max(gridSize, 10) / 2);
      ctx.lineWidth = safeThickness;
      
      if (enableRainbow) {
          // Complex drawing for rainbow (stroke per line) - omitted for performance unless requested
          // If enabled, we might just cycle color
          const hue = (timeRef.current * 0.5) % 360;
          ctx.strokeStyle = `hsl(${hue}, 70%, 50%)`;
      } else {
          ctx.strokeStyle = gridColor;
      }

      // Draw grid lines
      const cols = colsRef.current;
      const rows = rowsRef.current;
      
      // Horizontal lines
      for (let y = 0; y < rows; y++) {
          // Move to first point in row
          const startIdx = y * cols;
          ctx.moveTo(points[startIdx].x, points[startIdx].y);
          
          for (let x = 1; x < cols; x++) {
              const idx = startIdx + x;
              ctx.lineTo(points[idx].x, points[idx].y);
          }
      }

      // Vertical lines
      for (let x = 0; x < cols; x++) {
          // Move to first point in col
          const startIdx = x;
          ctx.moveTo(points[startIdx].x, points[startIdx].y);
          
          for (let y = 1; y < rows; y++) {
              const idx = y * cols + x;
              ctx.lineTo(points[idx].x, points[idx].y);
          }
      }
      
      ctx.stroke();
      ctx.globalAlpha = 1;

      timeRef.current++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mouseInteraction) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridColor, gridSize, gridThickness, rippleIntensity, mouseInteraction, mouseInteractionRadius, enableRainbow, opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
};

export default RippleGrid;
