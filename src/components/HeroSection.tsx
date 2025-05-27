
import { Sun, Moon, Droplet, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden bg-mystical-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-leaves opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sun className="h-12 w-12 text-golden-400 opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Moon className="h-10 w-10 text-water-300 opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Droplet className="h-8 w-8 text-water-400 opacity-60" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <Wind className="h-14 w-14 text-forest-300 opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Título Principal */}
          <div className="mb-8">
            <h1 className="font-mystical text-6xl md:text-8xl font-bold mb-4 text-shadow-glow animate-gentle-pulse">
              Iara Guimarães
            </h1>
            <div className="w-32 h-1 bg-golden-gradient mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-forest-100 font-light leading-relaxed">
              Artista e Praticante Espiritual
            </p>
          </div>

          {/* Subtítulo Inspirador */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-forest-50 leading-relaxed font-light italic">
              "Onde a palavra vira canto e o canto vira caminho"
            </p>
            <p className="text-base md:text-lg text-forest-200 mt-4 leading-relaxed">
              Uma jornada pelos elementos que nos sustentam: o Sol, a Lua, o Mar, o Vento, a Floresta
            </p>
          </div>

          {/* Elementos Visuais */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-golden-gradient rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm text-forest-200">Sol</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-water-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Moon className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm text-forest-200">Lua</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-forest-gradient rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Droplet className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm text-forest-200">Água</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 bg-earth-gradient rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm text-forest-200">Vento</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-golden-gradient hover:scale-105 transition-transform text-white border-none px-8 py-3 text-lg font-medium"
            >
              Conheça Minha Jornada
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-forest-200 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-forest-200 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
