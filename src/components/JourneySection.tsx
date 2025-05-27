
import { Heart, Compass, Trees, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const JourneySection = () => {
  const journeySteps = [
    {
      icon: Heart,
      title: "Origem e Resgate",
      description: "Nascida em São Luís de Montes Belos, Goiás, foi adotada com um ano de idade pela mãe de santo Valdelina Carvalho (Mãe Vanda), que a resgatou de maus-tratos e a introduziu ao caminho espiritual.",
      color: "bg-earth-gradient"
    },
    {
      icon: Trees,
      title: "Despertar Espiritual",
      description: "Aos 10 anos já tocava tambor e aprendia pontos no terreiro. Aos 14, através de seu irmão, conheceu o Santo Daime, iniciando uma profunda jornada de conexão com a natureza e espiritualidade.",
      color: "bg-forest-gradient"
    },
    {
      icon: Compass,
      title: "Caminhada Mundial",
      description: "Viajou extensivamente ministrando trabalhos espirituais, aulas de percussão e canto por diversos países da Europa: França, Holanda, Alemanha, Grécia, República Tcheca, Polônia, Espanha, Portugal, Bélgica e Inglaterra.",
      color: "bg-water-600"
    },
    {
      icon: Star,
      title: "Presente e Futuro",
      description: "Atualmente reside em Brasília, onde estuda radiologia e continua compartilhando conhecimentos, oferecendo aulas de percussão e canto, e atuando como terapeuta.",
      color: "bg-golden-gradient"
    }
  ];

  return (
    <section id="jornada" className="py-20 bg-gradient-to-b from-forest-50 to-earth-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-mystical text-4xl md:text-5xl font-bold text-forest-800 mb-6">
            Uma Jornada Espiritual
          </h2>
          <div className="w-24 h-1 bg-golden-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto leading-relaxed">
            Descubra a caminhada de uma alma dedicada às tradições da Umbanda e do Santo Daime, 
            tecendo pontes entre culturas e espalhando luz pelos quatro cantos do mundo.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {journeySteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-mystical text-xl font-semibold text-forest-800 mb-3 group-hover:text-golden-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-forest-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-forest-200/30">
            <blockquote className="font-mystical text-2xl md:text-3xl text-forest-800 italic leading-relaxed mb-4">
              "A floresta nos pertence. A Lua nos escuta. O Vento nos chama. 
              Que cada brilho aqui aceso siga iluminando seu próprio caminho."
            </blockquote>
            <cite className="text-lg text-golden-600 font-medium">— Iara Guimarães</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
