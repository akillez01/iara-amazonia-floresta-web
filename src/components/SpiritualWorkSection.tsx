
import { Sun, Moon, Droplet, Wind, Trees, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SpiritualWorkSection = () => {
  const elements = [
    {
      icon: Sun,
      title: "Sol",
      description: "O Sol que me aquece, também me guia",
      color: "text-golden-500",
      bgColor: "bg-golden-100"
    },
    {
      icon: Moon,
      title: "Lua",
      description: "A Lua nos escuta em silêncio sagrado",
      color: "text-water-500",
      bgColor: "bg-water-100"
    },
    {
      icon: Droplet,
      title: "Águas",
      description: "Das águas brancas vem a purificação",
      color: "text-water-600",
      bgColor: "bg-water-50"
    },
    {
      icon: Wind,
      title: "Vento",
      description: "O Vento nos chama para a liberdade",
      color: "text-forest-500",
      bgColor: "bg-forest-50"
    },
    {
      icon: Trees,
      title: "Floresta",
      description: "A Floresta é nossa casa ancestral",
      color: "text-forest-600",
      bgColor: "bg-forest-100"
    },
    {
      icon: Star,
      title: "Astros",
      description: "Os astros como guias e manifestações divinas",
      color: "text-golden-600",
      bgColor: "bg-golden-50"
    }
  ];

  const ceremonies = [
    {
      title: "Chamado aos Elementos",
      duration: "3 a 5 minutos",
      description: "Abertura em ambiente sonoro de natureza (vento, floresta, água) ou música instrumental suave. Uma jornada pelos elementos que nos sustentam.",
      icon: Wind
    },
    {
      title: "Momento de Concentração",
      duration: "Variável",
      description: "Pausa silenciosa ou palmas suaves com o público para criar atmosfera de concentração e escuta interior.",
      icon: Moon
    },
    {
      title: "Caminho Aberto",
      duration: "Encerramento",
      description: "Música final escolhida pelo público ou repetição de 'Brilho do Sol' para fechar em círculo. Todos de pé fazendo o 'Ei-Aei-Aou'.",
      icon: Sun
    }
  ];

  return (
    <section id="trabalho" className="py-20 bg-mystical-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-leaves opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-mystical text-4xl md:text-5xl font-bold text-white mb-6">
            Trabalho Espiritual
          </h2>
          <div className="w-24 h-1 bg-golden-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-forest-100 max-w-3xl mx-auto leading-relaxed">
            Uma prática que enfatiza a importância da natureza e da conexão interior, 
            onde cada elemento possui sua força e ensinamento sagrado.
          </p>
        </div>

        {/* Elements Grid */}
        <div className="mb-20">
          <h3 className="font-mystical text-2xl font-semibold text-center text-white mb-12">
            Os Elementos Sagrados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {elements.map((element, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/90 backdrop-blur-sm border-none">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${element.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <element.icon className={`h-8 w-8 ${element.color}`} />
                  </div>
                  <h4 className="font-mystical text-lg font-semibold text-forest-800 mb-2">
                    {element.title}
                  </h4>
                  <p className="text-sm text-forest-600 leading-relaxed italic">
                    {element.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ceremony Structure */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-mystical text-2xl font-semibold text-center text-white mb-12">
            Estrutura das Cerimônias
          </h3>
          <div className="space-y-6">
            {ceremonies.map((ceremony, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-none hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-forest-gradient rounded-full flex items-center justify-center">
                      <ceremony.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-mystical text-lg text-forest-800">
                        {ceremony.title}
                      </CardTitle>
                      <span className="text-sm text-golden-600 font-medium">
                        {ceremony.duration}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-700 leading-relaxed">
                    {ceremony.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-forest-200/30">
            <p className="font-mystical text-xl md:text-2xl text-forest-800 italic leading-relaxed">
              "Estamos aqui naturalmente e isso basta"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualWorkSection;
