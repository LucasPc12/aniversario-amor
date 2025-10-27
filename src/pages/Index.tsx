import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Pause, Play, Heart } from "lucide-react";
import fotoPrincipal from "@/assets/foto-principal.jpg";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.jpg";
import foto5 from "@/assets/foto5.jpg";
import foto6 from "@/assets/foto6.jpg";
import lisboaMusic from "@/assets/lisboa.mp3";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Scroll reveal for message
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    const audio = audioRef.current;
    if (!audio) return;

    // Sync playing state with audio element
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Try to autoplay
    const tryAutoplay = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log('Clique no botão play para iniciar a música');
      }
    };
    
    tryAutoplay();

    return () => {
      clearTimeout(timer);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    
    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } catch (error) {
      console.log('Error toggling music:', error);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const photos = [foto1, foto2, foto3, foto4, foto5, foto6];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Music Player */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
        <Card className="p-4 bg-card/95 backdrop-blur-md shadow-romantic border-2 border-primary/20">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button
                  onClick={toggleMusic}
                  size="icon"
                  className="rounded-full h-12 w-12 shadow-lg"
                  variant="default"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>
                <div>
                  <p className="text-sm font-semibold text-foreground">Música Secreta</p>
                  <p className="text-xs text-muted-foreground">segredooooo</p>
                </div>
              </div>
              <Music className="h-5 w-5 text-primary animate-pulse" />
            </div>
            
            <div className="space-y-1">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <audio
        ref={audioRef}
        src={lisboaMusic}
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Photo */}
          <div className="relative w-72 h-72 mx-auto mb-8 rounded-full overflow-hidden shadow-romantic border-4 border-primary/20">
            <img 
              src={fotoPrincipal} 
              alt="Minha princesa" 
              className="w-full h-full object-cover object-center"
            />
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
                Eu queria agradecer por cada sorriso seu, cada abraço apertado,
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
                Feliz 20 anos, meu amor. Eu te amo muito muito muito muito muito.
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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <Card
                key={i}
                className="aspect-square overflow-hidden shadow-romantic hover:scale-105 transition-transform duration-300 border-2 border-primary/10"
              >
                <img 
                  src={photo} 
                  alt={`Nosso momento ${i + 1}`} 
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
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
