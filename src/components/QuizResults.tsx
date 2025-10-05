import { Trophy, Star, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onContinue: () => void;
}

export const QuizResults = ({ score, totalQuestions, onContinue }: QuizResultsProps) => {
  const percentage = (score / totalQuestions) * 100;
  const isPassed = percentage >= 70;

  return (
    <div className="card-3d hover-3d pixel-grid bg-card p-8 rounded-lg border-2 border-primary text-center" style={{
      boxShadow: 'var(--shadow-3d)'
    }}>
      <div className="mb-6 animate-float">
        {isPassed ? (
          <div className="w-24 h-24 mx-auto rounded-full bg-success/20 flex items-center justify-center border-4 border-success animate-pulse-glow">
            <Trophy className="w-12 h-12 text-success" />
          </div>
        ) : (
          <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary">
            <Star className="w-12 h-12 text-primary" />
          </div>
        )}
      </div>

      <h2 className="font-pixel text-2xl text-primary mb-4">
        {isPassed ? 'ПОЗДРАВЛЯЕМ!' : 'ПОПРОБУЙТЕ ЕЩЕ!'}
      </h2>

      <div className="space-y-4 mb-8">
        <div className="p-6 rounded-lg border-2 border-primary/30" style={{
          background: 'var(--gradient-card)'
        }}>
          <p className="font-pixel text-4xl text-secondary mb-2">{score} / {totalQuestions}</p>
          <p className="text-muted-foreground">правильных ответов</p>
        </div>

        <div className="p-4 rounded-lg bg-muted/20 border border-muted/30">
          <p className="text-foreground text-lg">
            {isPassed
              ? 'Отличная работа! Вы готовы к полному курсу!'
              : 'Неплохо! Пройдите тест еще раз или сразу запишитесь на курс!'}
          </p>
        </div>
      </div>

      {isPassed && (
        <div className="mb-6 p-6 rounded-lg border-2 border-success/30 bg-success/10">
          <Sparkles className="w-8 h-8 text-success mx-auto mb-3 animate-pixel-glow" />
          <p className="font-pixel text-xs text-success mb-2">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</p>
          <p className="text-foreground">
            Только для выпускников демо-урока - <span className="font-bold text-primary">скидка 20%</span> на полный курс!
          </p>
        </div>
      )}

      <div className="space-y-3">
        <Button
          onClick={onContinue}
          className="btn-3d w-full font-pixel text-xs py-6 border-2 border-primary"
          style={{
            background: 'var(--gradient-primary)',
            boxShadow: 'var(--shadow-3d)'
          }}
        >
          ЗАПИСАТЬСЯ НА КУРС
        </Button>
        
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10"
        >
          Пройти тест заново
        </Button>
      </div>
    </div>
  );
};