import { useState } from "react";
import { ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

interface StorySlide {
  icon?: string;
  title: string;
  content: string;
}

interface StoryCardProps {
  slides: StorySlide[];
  onComplete: () => void;
  lessonTitle: string;
}

export const StoryCard = ({ slides, onComplete, lessonTitle }: StoryCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="card-3d hover-3d pixel-grid bg-card rounded-lg border-2 border-primary" style={{
      boxShadow: 'var(--shadow-3d)'
    }}>
      {/* Header with Progress */}
      <div className="p-6 border-b-2 border-primary/30">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-pixel text-sm text-primary">{lessonTitle}</h2>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary animate-pixel-glow" />
            <span className="font-pixel text-xs text-muted-foreground">
              СЛАЙД {currentSlide + 1}/{slides.length}
            </span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Story Content */}
      <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
        <div className="text-center space-y-6 animate-fade-in">
          {slides[currentSlide].icon && (
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow border-2 border-primary/50">
              <span className="text-3xl">{slides[currentSlide].icon}</span>
            </div>
          )}
          
          <h3 className="font-pixel text-lg md:text-xl text-foreground leading-relaxed">
            {slides[currentSlide].title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            {slides[currentSlide].content}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 border-t-2 border-primary/30 flex items-center justify-between gap-4">
        <Button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          variant="outline"
          className="flex-1 md:flex-none font-pixel text-xs border-2 border-primary/50"
          style={{
            opacity: currentSlide === 0 ? 0.3 : 1
          }}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          НАЗАД
        </Button>

        <Button
          onClick={handleNext}
          className="btn-3d flex-1 md:flex-none font-pixel text-xs py-6 border-2 border-primary"
          style={{
            background: 'var(--gradient-primary)',
            boxShadow: 'var(--shadow-3d)'
          }}
        >
          {currentSlide === slides.length - 1 ? 'ЗАВЕРШИТЬ' : 'ДАЛЕЕ'}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
