import { Play } from "lucide-react";
import { Button } from "./ui/button";

interface VideoPlayerProps {
  title: string;
  description: string;
  onComplete: () => void;
}

export const VideoPlayer = ({ title, description, onComplete }: VideoPlayerProps) => {
  return (
    <div className="card-3d hover-3d pixel-grid bg-card p-6 rounded-lg border-2 border-primary" style={{
      boxShadow: 'var(--shadow-3d)'
    }}>
      <h2 className="font-pixel text-lg text-primary mb-4">{title}</h2>
      
      {/* Video Placeholder with Pixel Art Style */}
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border-2 border-primary/50 mb-4">
        <div className="absolute inset-0 flex items-center justify-center" style={{
          background: 'var(--gradient-card)'
        }}>
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary animate-pulse-glow">
              <Play className="w-10 h-10 text-primary fill-primary" />
            </div>
            <p className="text-muted-foreground text-sm px-4">
              Видео урок загружается...
            </p>
          </div>
        </div>
        
        {/* Pixel Grid Overlay */}
        <div className="absolute inset-0 pixel-grid opacity-30 pointer-events-none" />
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <Button
        onClick={onComplete}
        className="btn-3d w-full font-pixel text-xs py-6 border-2 border-primary"
        style={{
          background: 'var(--gradient-primary)',
          boxShadow: 'var(--shadow-3d)'
        }}
      >
        ЗАВЕРШИТЬ УРОК
      </Button>
    </div>
  );
};