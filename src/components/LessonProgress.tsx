import { CheckCircle2, Circle } from "lucide-react";

interface LessonProgressProps {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
}

export const LessonProgress = ({ currentStep, totalSteps, completedSteps }: LessonProgressProps) => {
  const progress = (completedSteps.length / totalSteps) * 100;

  return (
    <div className="card-3d hover-3d pixel-grid bg-card p-6 rounded-lg border-2 border-primary" style={{
      boxShadow: 'var(--shadow-3d)'
    }}>
      <h3 className="font-pixel text-sm text-primary mb-4">ПРОГРЕСС ОБУЧЕНИЯ</h3>
      
      {/* Progress Bar */}
      <div className="mb-6 relative">
        <div className="h-4 bg-muted rounded-full overflow-hidden border-2 border-primary/30">
          <div 
            className="h-full transition-all duration-1000 ease-out"
            style={{
              width: `${progress}%`,
              background: 'var(--gradient-primary)'
            }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-pixel">
          {Math.round(progress)}% завершено
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = completedSteps.includes(stepNumber);
          const isCurrent = currentStep === stepNumber;

          return (
            <div
              key={stepNumber}
              className={`flex items-center gap-3 p-3 rounded border-2 transition-all ${
                isCurrent
                  ? 'border-primary bg-primary/10 animate-pulse-glow'
                  : isCompleted
                  ? 'border-success bg-success/10'
                  : 'border-muted/30 bg-muted/5'
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
              ) : (
                <Circle className={`w-5 h-5 flex-shrink-0 ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`} />
              )}
              <span className={`text-sm ${isCurrent ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                {stepNumber === 1 && 'Введение и история'}
                {stepNumber === 2 && 'Важность соцсетей'}
                {stepNumber === 3 && 'Практические советы'}
                {stepNumber === 4 && 'Финальный тест'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};