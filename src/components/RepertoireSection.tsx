
import { Sun, Trees, Star, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RepertoireSection = () => {
  const musicBlocks = [
    {
      title: "Bloco da Luz e do Pertencimento",
      icon: Sun,
      theme: "Brilho, pertencimento e a natureza como origem",
      color: "bg-golden-gradient",
      songs: [
        "Brilho do Sol",
        "Naturalmente", 
        "Sou Filho das Águas Brancas",
        "Plantador"
      ],
      evocations: [
        "O Sol que me aquece, também me guia",
        "Estamos aqui naturalmente e isso basta"
      ]
    },
    {
      title: "Bloco da Floresta e da Cura",
      icon: Trees,
      theme: "A floresta como casa e a força dos seres naturais",
      color: "bg-forest-gradient",
      songs: [
        "Da Floresta",
        "Peço aos Seres da Floresta",
        "Força do Trovão"
      ],
      evocations: [
        "Momento de pausa silenciosa",
        "Palmas suaves com o público",
        "Atmosfera de concentração e escuta interior"
      ]
    },
    {
      title: "Bloco dos Astros e do Mistério",
      icon: Star,
      theme: "Os astros como guias e manifestações divinas",
      color: "bg-water-600",
      songs: [
        "No Sol, na Lua, na Terra, no Mar",
        "Confio no Sol, Confio na Lua",
        "Cheguei em um Trono"
      ],
      evocations: [
        "Invocação aos astros",
        "Conexão com o divino",
        "Mistério e transcendência"
      ]
    }
  ];

  return (
    <section id="repertorio" className="py-20 bg-gradient-to-b from-earth-50 to-forest-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-mystical text-4xl md:text-5xl font-bold text-forest-800 mb-6">
            Repertório Musical
          </h2>
          <div className="w-24 h-1 bg-golden-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto leading-relaxed">
            Uma jornada musical organizada em blocos temáticos que abordam os elementos sagrados, 
            a conexão com a natureza e a espiritualidade ancestral.
          </p>
        </div>

        {/* Music Blocks */}
        <div className="max-w-6xl mx-auto space-y-8">
          {musicBlocks.map((block, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-none bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className={`${block.color} text-white relative`}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <block.icon className="w-full h-full" />
                </div>
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <block.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-mystical text-2xl font-bold">
                      {block.title}
                    </CardTitle>
                    <p className="text-white/90 mt-2 leading-relaxed">
                      {block.theme}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Songs */}
                  <div>
                    <h4 className="font-mystical text-lg font-semibold text-forest-800 mb-4 flex items-center">
                      <Music className="h-5 w-5 mr-2 text-golden-600" />
                      Músicas
                    </h4>
                    <div className="space-y-2">
                      {block.songs.map((song, songIndex) => (
                        <Badge 
                          key={songIndex} 
                          variant="outline" 
                          className="mr-2 mb-2 px-3 py-2 text-forest-700 border-forest-300 hover:bg-forest-50 transition-colors"
                        >
                          {song}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Evocations */}
                  <div>
                    <h4 className="font-mystical text-lg font-semibold text-forest-800 mb-4">
                      Evocações e Momentos
                    </h4>
                    <div className="space-y-3">
                      {block.evocations.map((evocation, evocIndex) => (
                        <div key={evocIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-golden-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-forest-700 italic leading-relaxed">
                            "{evocation}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border border-forest-200/30">
            <CardContent className="p-8 text-center">
              <h3 className="font-mystical text-2xl font-semibold text-forest-800 mb-6">
                Estrutura do Espetáculo
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-forest-700 mb-3">Abertura</h4>
                  <p className="text-forest-600 leading-relaxed">
                    <strong>Chamado aos elementos</strong> (3-5 min) com ambiente sonoro de natureza 
                    ou música instrumental suave. Iara se posiciona no centro do círculo.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-700 mb-3">Encerramento</h4>
                  <p className="text-forest-600 leading-relaxed">
                    <strong>Caminho aberto</strong> com música final escolhida pelo público 
                    ou repetição de "Brilho do Sol". Finaliza com todos de pé fazendo "Ei-Aei-Aou".
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RepertoireSection;
