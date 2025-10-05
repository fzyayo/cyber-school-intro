import { useState } from "react";
import { LessonProgress } from "@/components/LessonProgress";
import { VideoPlayer } from "@/components/VideoPlayer";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResults } from "@/components/QuizResults";
import { CTASection } from "@/components/CTASection";
import { BookOpen, Sparkles } from "lucide-react";

const quizQuestions = [
  {
    question: "Почему социальные сети важны для тату-мастера в 2025 году?",
    options: [
      "Это просто модно и все так делают",
      "Клиенты ищут мастеров онлайн, оценивая стиль и портфолио",
      "Для развлечения в свободное время",
      "Чтобы следить за конкурентами"
    ],
    correctAnswer: 1
  },
  {
    question: "Что важнее всего при ведении профиля тату-мастера?",
    options: [
      "Количество подписчиков любой ценой",
      "Уникальный визуальный стиль и концепция профиля",
      "Частые публикации без разбора",
      "Копирование успешных мастеров"
    ],
    correctAnswer: 1
  },
  {
    question: "Какой формат контента наиболее эффективен для привлечения клиентов?",
    options: [
      "Только фотографии готовых работ",
      "Разговорный формат в TikTok с показом процесса",
      "Профессиональные студийные фото",
      "Репосты чужого контента"
    ],
    correctAnswer: 1
  },
  {
    question: "Как правильно работать с клиентскими запросами в соцсетях?",
    options: [
      "Отвечать односложно и быстро",
      "Игнорировать сложные вопросы",
      "Терпеливо объяснять, предлагать индивидуальные эскизы",
      "Сразу называть цену без деталей"
    ],
    correctAnswer: 2
  },
  {
    question: "Сколько видео рекомендуется постить в TikTok ежедневно?",
    options: [
      "1 раз в неделю",
      "2-4 видео в день",
      "10+ видео в день",
      "Когда появится настроение"
    ],
    correctAnswer: 1
  }
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleVideoComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(4);
    }
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setQuizScore(quizScore + 1);
    }

    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
    } else {
      setCompletedSteps([...completedSteps, 4]);
      setShowQuizResults(true);
    }
  };

  const handleContinueToCourse = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 pixel-grid opacity-10" />
        <div className="absolute inset-0" style={{
          background: 'var(--gradient-bg)'
        }} />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float" />
        <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-accent/30 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative border-b-2 border-primary/30 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary animate-pixel-glow" />
              <h1 className="font-pixel text-lg md:text-xl text-primary">SBT SCHOOL</h1>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-sm text-muted-foreground hidden md:inline">Демо урок</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-6 py-2 rounded-full border-2 border-primary bg-primary/10 animate-pulse-glow">
            <span className="font-pixel text-xs text-primary">БЕСПЛАТНЫЙ ДЕМО УРОК</span>
          </div>
          <h2 className="font-pixel text-2xl md:text-4xl text-foreground mb-4">
            ВЕДЕНИЕ СОЦСЕТЕЙ<br />ДЛЯ ТАТУ-МАСТЕРОВ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, как превратить Instagram и TikTok в мощный инструмент привлечения клиентов
          </p>
        </div>

        {/* Lesson Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Sidebar - Progress */}
          <div className="lg:col-span-1">
            <LessonProgress
              currentStep={currentStep}
              totalSteps={4}
              completedSteps={completedSteps}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <VideoPlayer
                title="УРОК 1: МОЯ ИСТОРИЯ"
                description="Привет! Я хочу рассказать вам, как я стала тату-мастером и как социальные сети изменили вектор моей работы. Начиная с 15 лет и до сегодняшнего дня - весь путь от первых попыток на свинной коже до работы с клиентами по всему миру. Узнайте, как я использовала Instagram и TikTok для роста своей карьеры."
                onComplete={handleVideoComplete}
              />
            )}

            {currentStep === 2 && (
              <VideoPlayer
                title="УРОК 2: ПОЧЕМУ СОЦСЕТИ?"
                description="В 2025 году клиенты ищут тату-мастеров онлайн. Социальные сети позволяют: показать портфолио и уникальный стиль, установить доверительные отношения, получать записи напрямую, создать личный бренд. Даже локальным мастерам соцсети помогают расширять аудиторию и привлекать клиентов, готовых платить за качество."
                onComplete={handleVideoComplete}
              />
            )}

            {currentStep === 3 && (
              <VideoPlayer
                title="УРОК 3: ПРАКТИКА"
                description="Построение личного бренда начинается с определения стиля общения и концепции аккаунта. Используйте сторителлинг, создавайте уникальный визуальный стиль. В TikTok постите 2-4 видео в день в разговорном формате. Важно вести соцсети как вторую работу - составьте контент-план и придерживайтесь его. Отвечайте на комментарии, работайте с возражениями профессионально."
                onComplete={handleVideoComplete}
              />
            )}

            {currentStep === 4 && !showQuizResults && (
              <QuizQuestion
                question={quizQuestions[currentQuizQuestion].question}
                options={quizQuestions[currentQuizQuestion].options}
                correctAnswer={quizQuestions[currentQuizQuestion].correctAnswer}
                onAnswer={handleQuizAnswer}
                questionNumber={currentQuizQuestion + 1}
                totalQuestions={quizQuestions.length}
              />
            )}

            {showQuizResults && (
              <QuizResults
                score={quizScore}
                totalQuestions={quizQuestions.length}
                onContinue={handleContinueToCourse}
              />
            )}
          </div>
        </div>

        {/* CTA Section */}
        {completedSteps.includes(4) && <CTASection />}
      </main>

      {/* Footer */}
      <footer className="relative border-t-2 border-primary/30 backdrop-blur-md bg-background/80 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="font-pixel text-xs text-primary mb-2">SBT SCHOOL</p>
            <p className="text-sm text-muted-foreground">
              © 2025 Stop Bullying Tattoo. Инновационная онлайн школа татуировки
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;