import { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion = ({
  question,
  options,
  correctAnswer,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === correctAnswer;
    
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 2000);
  };

  return (
    <div className="card-3d hover-3d pixel-grid bg-card p-6 rounded-lg border-2 border-primary" style={{
      boxShadow: 'var(--shadow-3d)'
    }}>
      <div className="mb-6">
        <p className="font-pixel text-xs text-secondary mb-2">
          ВОПРОС {questionNumber} / {totalQuestions}
        </p>
        <h3 className="text-xl font-semibold text-foreground">{question}</h3>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === correctAnswer;
          
          let buttonStyle = "border-2 border-muted/30 bg-muted/5 text-foreground hover:border-primary hover:bg-primary/10";
          
          if (showResult && isSelected) {
            if (isCorrect) {
              buttonStyle = "border-2 border-success bg-success/20 text-success";
            } else {
              buttonStyle = "border-2 border-destructive bg-destructive/20 text-destructive";
            }
          } else if (showResult && isCorrect) {
            buttonStyle = "border-2 border-success bg-success/20 text-success";
          }

          return (
            <Button
              key={index}
              onClick={() => !showResult && handleAnswer(index)}
              disabled={showResult}
              className={`w-full justify-start text-left p-4 btn-3d transition-all ${buttonStyle}`}
              variant="outline"
            >
              <span className="flex items-center gap-3 w-full">
                <span className="font-pixel text-xs min-w-[24px]">{String.fromCharCode(65 + index)}</span>
                <span className="flex-1">{option}</span>
                {showResult && isSelected && (
                  isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive" />
                  )
                )}
                {showResult && !isSelected && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-success" />
                )}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};