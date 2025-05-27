
import { Sun, Moon, Trees, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-forest border-b border-forest-200/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Trees className="h-8 w-8 text-forest-600 animate-leaf-sway" />
              <Leaf className="h-4 w-4 text-golden-500 absolute -top-1 -right-1 animate-gentle-pulse" />
            </div>
            <h1 className="font-mystical text-2xl font-bold text-forest-800">
              Iara Guimarães
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-forest-700 hover:text-golden-600 transition-colors font-medium">
              Início
            </a>
            <a href="#jornada" className="text-forest-700 hover:text-golden-600 transition-colors font-medium">
              Jornada
            </a>
            <a href="#trabalho" className="text-forest-700 hover:text-golden-600 transition-colors font-medium">
              Trabalho Espiritual
            </a>
            <a href="#repertorio" className="text-forest-700 hover:text-golden-600 transition-colors font-medium">
              Repertório
            </a>
            <a href="#contato" className="text-forest-700 hover:text-golden-600 transition-colors font-medium">
              Contato
            </a>
          </nav>

          <Button variant="outline" size="sm" className="md:hidden border-forest-300 text-forest-700">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
