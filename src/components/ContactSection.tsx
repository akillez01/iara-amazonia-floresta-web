
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const services = [
    {
      title: "Aulas de Percussão",
      description: "Aprenda os ritmos sagrados da tradição afro-brasileira",
      location: "Terreiro ou domicílio",
      icon: "🥁"
    },
    {
      title: "Aulas de Canto",
      description: "Desenvolva sua voz através dos pontos e mantras espirituais", 
      location: "Terreiro ou domicílio",
      icon: "🎵"
    },
    {
      title: "Trabalhos Espirituais",
      description: "Cerimônias e rituais de cura e conexão espiritual",
      location: "Diversos locais",
      icon: "🌿"
    },
    {
      title: "Terapia Espiritual",
      description: "Acompanhamento terapêutico integrando espiritualidade",
      location: "Brasília",
      icon: "💫"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-forest-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-leaves opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-mystical text-4xl md:text-5xl font-bold text-white mb-6">
            Conecte-se Comigo
          </h2>
          <div className="w-24 h-1 bg-golden-gradient mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-forest-100 max-w-3xl mx-auto leading-relaxed">
            Compartilho conhecimentos através de aulas, trabalhos espirituais e terapia. 
            Entre em contato para iniciar sua jornada de conexão interior.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h3 className="font-mystical text-2xl font-semibold text-center text-white mb-12">
            Serviços Oferecidos
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/90 backdrop-blur-sm border-none">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-mystical text-lg font-semibold text-forest-800 mb-2 group-hover:text-golden-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-forest-700 text-sm leading-relaxed mb-2">
                        {service.description}
                      </p>
                      <div className="flex items-center text-xs text-golden-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        {service.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <Card className="bg-white/95 backdrop-blur-sm border-none">
              <CardContent className="p-8">
                <h3 className="font-mystical text-xl font-semibold text-forest-800 mb-6 flex items-center">
                  <Heart className="h-6 w-6 mr-3 text-golden-600" />
                  Entre em Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-forest-600" />
                    <div>
                      <p className="font-medium text-forest-800">Localização</p>
                      <p className="text-forest-600">Brasília, DF</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-forest-600" />
                    <div>
                      <p className="font-medium text-forest-800">Email</p>
                      <p className="text-forest-600">contato@iaraguimaraes.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-forest-600" />
                    <div>
                      <p className="font-medium text-forest-800">Telefone</p>
                      <p className="text-forest-600">(61) 99999-9999</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-forest-200">
                  <p className="text-sm text-forest-600 leading-relaxed">
                    Atualmente estudando radiologia em Brasília e oferecendo aulas tanto no terreiro 
                    quanto na casa dos alunos. Experiência internacional com trabalhos espirituais 
                    em diversos países da Europa.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-white/95 backdrop-blur-sm border-none">
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="font-mystical text-xl font-semibold text-forest-800 mb-4">
                    Inicie Sua Jornada
                  </h3>
                  <p className="text-forest-700 leading-relaxed mb-8">
                    Venha descobrir os caminhos da percussão, do canto sagrado e da conexão espiritual. 
                    Cada jornada é única e transformadora.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-golden-gradient hover:scale-105 transition-transform text-white border-none"
                    >
                      Agendar uma Conversa
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-forest-300 text-forest-700 hover:bg-forest-50"
                    >
                      Conhecer os Trabalhos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-forest-200/30">
            <blockquote className="font-mystical text-xl md:text-2xl text-forest-800 italic leading-relaxed">
              "A floresta nos pertence. A Lua nos escuta. O Vento nos chama. 
              Que cada brilho aqui aceso siga iluminando seu próprio caminho."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
