
import { Trees, Heart, Sun, Moon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-gradient text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-leaves opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Name */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Trees className="h-8 w-8 text-golden-400 animate-leaf-sway" />
              <h3 className="font-mystical text-2xl font-bold">Iara Guimarães</h3>
            </div>
            <p className="text-earth-100 leading-relaxed">
              Artista e Praticante Espiritual
            </p>
          </div>

          {/* Elements */}
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center group cursor-pointer">
              <Sun className="h-8 w-8 text-golden-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-earth-200 mt-1">Sol</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <Moon className="h-8 w-8 text-water-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-earth-200 mt-1">Lua</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <Trees className="h-8 w-8 text-forest-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-earth-200 mt-1">Floresta</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <Heart className="h-8 w-8 text-golden-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-earth-200 mt-1">Amor</span>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center md:text-right">
            <p className="font-mystical text-sm italic text-earth-100 leading-relaxed">
              "Onde a palavra vira canto<br />
              e o canto vira caminho"
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-earth-300 my-8"></div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-earth-200 text-sm">
            © 2024 Iara Guimarães. Todos os direitos reservados.
          </p>
          <p className="text-earth-300 text-xs mt-2">
            Uma jornada pelos elementos que nos sustentam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
