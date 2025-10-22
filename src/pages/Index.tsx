import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Pause, Play, Heart } from "lucide-react";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Scroll reveal for message
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Music Player */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleMusic}
          size="lg"
          className="rounded-full shadow-lg hover:scale-110 transition-transform"
          variant="default"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 mr-2" />
          ) : (
            <Play className="h-5 w-5 mr-2" />
          )}
          <Music className="h-5 w-5" />
        </Button>
      </div>

      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Photo Placeholder */}
          <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-romantic border-4 border-primary/20">
            <div className="w-full h-full bg-gradient-romantic flex items-center justify-center">
              <Heart className="w-24 h-24 text-primary/40 animate-pulse" />
              <p className="absolute bottom-4 text-sm text-muted-foreground">
                [Adicione sua foto aqui]
              </p>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
            Feliz Aniversário
          </h1>
          <p className="text-3xl md:text-4xl text-foreground font-light italic">
            minha princesa
          </p>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 px-4">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            showMessage
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="p-8 md:p-12 shadow-romantic bg-card/80 backdrop-blur-sm border-2 border-primary/10">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground">
              <p>
                E eu queria agradecer por cada sorriso seu, cada abraço apertado,
                cada momento que me faz sentir que estou exatamente onde deveria
                estar (do seu lado).
              </p>

              <p>
                Você é a razão de muitos dos meus sorrisos e o motivo pelo qual eu
                acredito que o amor de verdade existe. Seu jeito doce, seu coração
                enorme e essa luz que você carrega tornam tudo à sua volta mais
                bonito, continue sendo essa garota risonha e animada que você é,
                pode continuar sendo um pouco chatinha, que eu também gosto
                kakakakakaka
              </p>

              <p>
                Desejo que esse novo ciclo venha cheio de conquistas, sonhos
                realizados e que eu possa estar sempre por perto e dividir a vida
                com você, obrigado por fazer a minha vida mais feliz.
              </p>

              <p className="font-semibold text-primary text-2xl pt-4">
                Feliz 20 anos, meu amor. Te amo muito muito muito muito muito.
              </p>

              <p className="italic text-muted-foreground">
                Você é minha vida todinha, minha paixão, minha princesa rosa, meu
                coração e o meu amor todinho. MUÁ MUÁ MUÁ
              </p>

              <p className="text-sm text-muted-foreground/60 text-center">
                (não mostra isso pra ninguém)
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Photos Gallery */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
            Nossos Momentos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="aspect-square overflow-hidden shadow-romantic hover:scale-105 transition-transform duration-300 border-2 border-primary/10"
              >
                <div className="w-full h-full bg-gradient-romantic flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-primary/40 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Foto {i}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="flex justify-center items-center space-x-2 text-primary">
          <Heart className="w-6 h-6 animate-pulse" />
          <p className="text-xl">Com amor</p>
          <Heart className="w-6 h-6 animate-pulse" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
