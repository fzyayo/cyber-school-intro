import { Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";

export const CTASection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with pixel grid */}
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="absolute inset-0" style={{
        background: 'var(--gradient-bg)'
      }} />

      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <Sparkles className="w-16 h-16 text-primary mx-auto animate-pixel-glow" />
          </div>

          <h2 className="font-pixel text-3xl md:text-4xl text-primary mb-6">
            ГОТОВЫ СТАТЬ ЭКСПЕРТОМ?
          </h2>

          <p className="text-xl text-foreground mb-12 max-w-2xl mx-auto">
            Полный курс "Ведение соцсетей для тату-мастеров" включает 20+ часов обучения, практические задания и поддержку 24/7
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-3d hover-3d pixel-grid bg-card p-6 rounded-lg border-2 border-primary/50" style={{
              boxShadow: 'var(--shadow-3d)'
            }}>
              <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-pixel text-xs text-foreground mb-2">РОСТ КЛИЕНТОВ</h3>
              <p className="text-sm text-muted-foreground">+300% записей через TikTok и Instagram</p>
            </div>

            <div className="card-3d hover-3d pixel-grid bg-card p-6 rounded-lg border-2 border-primary/50" style={{
              boxShadow: 'var(--shadow-3d)'
            }}>
              <Users className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-pixel text-xs text-foreground mb-2">КОМЬЮНИТИ</h3>
              <p className="text-sm text-muted-foreground">500+ активных учеников и выпускников</p>
            </div>

            <div className="card-3d hover-3d pixel-grid bg-card p-6 rounded-lg border-2 border-primary/50" style={{
              boxShadow: 'var(--shadow-3d)'
            }}>
              <Zap className="w-10 h-10 text-success mx-auto mb-4" />
              <h3 className="font-pixel text-xs text-foreground mb-2">БЫСТРЫЙ СТАРТ</h3>
              <p className="text-sm text-muted-foreground">Первые результаты через 2 недели</p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="card-3d hover-3d pixel-grid bg-card p-8 rounded-lg border-2 border-primary mb-8 max-w-md mx-auto" style={{
            boxShadow: 'var(--pixel-glow), var(--shadow-3d)'
          }}>
            <div className="mb-6">
              <p className="font-pixel text-xs text-secondary mb-2">СПЕЦИАЛЬНАЯ ЦЕНА</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-muted-foreground line-through">15,000₽</span>
                <span className="font-pixel text-4xl text-primary">12,000₽</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Скидка 20% для участников демо-урока</p>
            </div>

            <div className="space-y-2 mb-6 text-left">
              <div className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span className="text-sm">20+ часов видео уроков</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span className="text-sm">Готовые скрипты и шаблоны</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span className="text-sm">Обратная связь от преподавателей</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span className="text-sm">Доступ к закрытому сообществу</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span className="text-sm">Сертификат об окончании</span>
              </div>
            </div>

            <Button
              className="btn-3d w-full font-pixel text-xs py-6 border-2 border-primary"
              style={{
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-3d)'
              }}
            >
              ЗАПИСАТЬСЯ НА КУРС
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            * Количество мест ограничено. Следующий поток стартует через 2 недели
          </p>
        </div>
      </div>
    </div>
  );
};