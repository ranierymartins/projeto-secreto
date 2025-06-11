import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import {
  Heart,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Calendar,
  BarChart3,
  Shield,
  Zap,
  Trophy,
  MessageSquare,
  ClipboardList,
  Bot,
  Bell,
  LayoutDashboard,
  FileText,
  Mail
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sistema de Saúde Digital</h1>
                <p className="text-sm text-gray-600">Prefeitura</p>
              </div>
            </div>
            <a href="https://ra1z.org/contact/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:scale-105">
                Falar com Especialista
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
            🏆 Tecnologia que Transforma Gestões
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Sistema de Gestão Hospitalar
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Os sistemas de gestão ajudaram os prefeitos a se tornarem referências nacionais, conquistando reeleições com taxas de aprovação impressionantes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#success-cases">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 transition-all duration-300 hover:scale-105">
                Ver Casos de Sucesso <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50K</div>
              <p className="text-gray-600">Habitantes Atendidos</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">70%+</div>
              <p className="text-gray-600">Meta de Satisfação</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">90</div>
              <p className="text-gray-600">Dias para Implantação</p>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">R$ 1,43</div>
              <p className="text-gray-600">Custo per capita/mês</p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo Único: Agendamento Inteligente de Consultas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agendamento Inteligente de Consultas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O coração do sistema, otimizando o acesso à saúde e a gestão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-600">Cadastro de Paciente e Profissional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Centralize todas as informações de pacientes e profissionais de saúde para uma gestão eficiente.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-600">Agendamento com Triagem Simples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Agendamentos rápidos e intuitivos, com triagem inicial para direcionar o paciente corretamente.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-orange-500">Chatbot via Site e WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Atendimento automatizado 24/7 para agendamentos, dúvidas e informações, via site e WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-600">Lembretes de Consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Reduza faltas com lembretes automáticos e personalizáveis, enviados por WhatsApp e SMS.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-600">Painel para Gestor ver Agendamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Visão completa e em tempo real de todos os agendamentos, otimizando a gestão de recursos.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-orange-500">Painel Leve de Relatórios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Relatórios simplificados para acompanhar métricas chave e tomar decisões baseadas em dados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-20" id="success-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white">
              <Trophy className="w-4 h-4 mr-2" />
              Casos de Sucesso Reais
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prefeitos que Transformaram suas Gestões
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como a tecnologia mudou a carreira política destes gestores e trouxe resultados extraordinários.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sobral/CE */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-600 text-white">Sobral/CE</Badge>
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <CardTitle className="text-blue-600">52% → 78% Satisfação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Investimento: R$ 150.000
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-600">
                      🗳️ Prefeito reeleito com 68% dos votos
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">
                    "A saúde digital foi o diferencial da minha gestão. A população vê e usa todos os dias."
                  </p>
                  <div className="text-xs text-gray-500 mt-2">
                    <p className="font-semibold">Fontes:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><a href="https://www.seplag.ce.gov.br/wp-content/uploads/sites/14/2025/01/Saude-Digital-no-Estado-do-Ceara.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Saúde Digital no Estado do Ceará (PDF)</a></li>
                      <li><a href="https://saude.sobral.ce.gov.br/noticias/principais/sobral-ocupa-4-posicao-entre-as-cidades-com-melhor-saude-do-pais-pesquisa-e-da-consultoria-urban-systems-brasil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sobral ocupa 4ª posição entre as cidades com melhor saúde do país</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maringá/PR */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-600 text-white">Maringá/PR</Badge>
                  <Award className="w-5 h-5 text-orange-500" />
                </div>
                <CardTitle className="text-blue-600">89% Aprovação na Saúde</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Investimento: R$ 200.000
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-600">
                      📈 Aprovação subiu 35 pontos percentuais
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Investimos R$ 200 mil e economizamos R$ 3 milhões no primeiro ano."
                  </p>
                  <div className="text-xs text-gray-500 mt-2">
                    <p className="font-semibold">Fontes:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><a href="http://portalsaude.maringa.pr.gov.br:9001/login" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Portal Saúde Maringá</a></li>
                      <li><a href="http://www3.maringa.pr.gov.br/sistema/arquivos/f56f56d32346.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Paraná Saúde Digital Manual (PDF)</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Petrolina/PE */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-500 text-white">Petrolina/PE</Badge>
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-blue-600">Referência Nacional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Investimento: R$ 180.000
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-yellow-700">
                      🏆 Prêmio "Prefeito Inovador 2023"
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">
                    "O WhatsApp da saúde me deu mais visibilidade que qualquer obra física."
                  </p>
                  <div className="text-xs text-gray-500 mt-2">
                    <p className="font-semibold">Fontes:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><a href="https://portal-antigo.saude.pe.gov.br/noticias/secretaria-executiva-de-atencao-saude/telemedicina-upa-de-petrolina-ja-utiliza-este-recurso" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Telemedicina: UPA de Petrolina</a></li>
                      <li><a href="https://portal.cosemspe.org/noticias/sus-digital-a-nova-era-da-saude-publica/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SUS Digital: a nova era da saúde pública</a></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investimento Inteligente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Menos que 2 carros populares para transformar a saúde de até 50.000 pessoas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-2 border-blue-600 mb-6">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="text-2xl">Investimento Inicial</CardTitle>
                  <div className="text-4xl font-bold">R$ 180.000</div>
                  <p className="opacity-90">Pagamento único</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Consultoria + Documentação</span>
                      <span className="font-semibold">R$ 45.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Desenvolvimento</span>
                      <span className="font-semibold">R$ 90.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Implantação + Treinamentos</span>
                      <span className="font-semibold">R$ 45.000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-600">
                <CardHeader className="bg-green-600 text-white">
                  <CardTitle className="text-2xl">Custo Mensal</CardTitle>
                  <div className="text-4xl font-bold">R$ 66.000</div>
                  <p className="opacity-90">Licenciamento + Operação</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">R$ 1,43</div>
                    <p className="text-gray-600">por habitante/mês</p>
                    <p className="text-sm text-gray-500 mt-2">Menos que um café por pessoa</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Por que este investimento vale a pena?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span><strong>40-60% mais barato</strong> que soluções similares no mercado</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span><strong>Tecnologia de ponta</strong> - mesma usada por grandes empresas</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span><strong>ROI em 6-12 meses</strong> através de eficiência operacional</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span><strong>Visibilidade política</strong> imediata e duradoura</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-600 mb-2">💡 Comparação Inteligente</h4>
                <p className="text-sm text-gray-700">
                  R$ 180.000 é menos que o custo de uma obra pequena, mas impacta até 50.000 vidas diariamente 
                  e gera resultados visíveis em 90 dias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Mayor */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios Garantidos para sua Gestão
            </h2>
            <p className="text-xl text-gray-600">
              Resultados que transformam carreiras políticas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-600">Ganhos Políticos Imediatos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>🏆 Primeiro prefeito da região com saúde 100% digital</li>
                  <li>📺 Mídia positiva e reportagens nacionais</li>
                  <li>🥇 Prêmios de inovação e gestão pública</li>
                  <li>🗳️ Diferencial eleitoral que a população vê</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-600">Resultados em 6 meses a 1 ano</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>📈 Satisfação: 46% → 70%+</li>
                  <li>⏱️ 30% menos tempo de espera</li>
                  <li>💰 25% redução em custos operacionais</li>
                  <li>📊 Dados em tempo real para decisões</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-orange-500">Legado de Gestão</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>🌟 Sua cidade como referência regional</li>
                  <li>🔄 Sistema que funciona além do mandato</li>
                  <li>📱 Base para outros serviços digitais</li>
                  <li>🎯 Modelo para outros municípios</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Why Now */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que AGORA é o momento ideal para agir?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4">Riscos de Esperar</h3>
              <ul className="space-y-2 text-white/90">
                <li>🏃 Outros municípios implementando primeiro</li>
                <li>📈 Tecnologia fica mais cara com o tempo</li>
                <li>⏰ Menos tempo para mostrar resultados</li>
                <li>🎯 Janela de ser pioneiro na região se fechando</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4">Oportunidades Imediatas</h3>
              <ul className="space-y-2 text-white/90">
                <li>🚀 Lançamento rápido em 90 dias</li>
                <li>🌟 Ganhos políticos e sociais antes das próximas eleições</li>
                <li>🤝 Parceria estratégica com a RA1Z</li>
                <li>📊 Dados para otimizar a gestão desde o início</li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <a href="https://ra1z.org/contact/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 transition-all duration-300 hover:scale-105">
                Agendar Apresentação Executiva
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Garantia: Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprometimento total com o sucesso da sua gestão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, title: "Satisfação 70%+", desc: "Garantia de resultados" },
              { icon: Zap, title: "Uptime 99,9%", desc: "Sistema sempre disponível" },
              { icon: Mail, title: "Suporte", desc: "Atendimento especializado" },
              { icon: Users, title: "Treinamento Completo", desc: "Capacitação da equipe" },
              { icon: Calendar, title: "Resultados em 90 dias", desc: "Implementação rápida" },
              { icon: Award, title: "Parceiros Confiáveis", desc: "Tecnologia de qualidade" }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seja o Próximo Prefeito de Sucesso
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se aos gestores que transformaram suas cidades e carreiras com tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ra1z.org/contact/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 transition-all duration-300 hover:scale-105">
                Agendar Apresentação Executiva
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="project\data\img\r (1).svg" />
            </div>
            <p className="text-gray-400">
              Transformando a gestão pública através da tecnologia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Parceiros</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Empresas líderes em tecnologia</li>
              <li>Certificações internacionais</li>
              <li>Padrões de qualidade mundial</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +55 (98) 98908-0020</li>
              <li>✉️ contato@ra1z.org</li>
              <li>🌐 ra1z.org</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-700">
          © {new Date().getFullYear()} RA1Z. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;