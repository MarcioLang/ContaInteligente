import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Shield, Users, FileText, TrendingUp, MessageCircle } from "lucide-react";

export default function HowItWorks() {
  const whatsappMessage = encodeURIComponent("Olá, vim pela ContaInteligente. Gostaria de entender se tenho algum risco fiscal hoje e quanto posso retirar da empresa com segurança.");
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo-blue.png" 
              alt="ContaInteligente Logo" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">ContaInteligente</span>
              <span className="text-xs text-secondary font-medium">Segurança Fiscal PJ/PF</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Voltar</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Como Funciona a Análise
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Um processo simples, transparente e focado na sua segurança fiscal.
            </p>
          </div>
        </div>
      </section>

      {/* Processo em 4 Passos */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Os 4 Passos da Análise
            </h2>

            <div className="space-y-8">
              {/* Passo 1 */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary transition">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Conversa Inicial (WhatsApp)
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Você entra em contato conosco via WhatsApp com uma mensagem simples. Respondemos em até 2 horas com um diagnóstico inicial e próximos passos.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Rápido e sem compromisso</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Passo 2 */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary transition">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Coleta de Informações
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Você compartilha informações básicas sobre sua empresa (regime tributário, faturamento, retiradas mensais). Tudo é feito de forma segura e confidencial.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Dados protegidos e confidenciais</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Passo 3 */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary transition">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Análise Especializada
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Nossa contadora CRC com 15 anos de experiência analisa sua situação fiscal, identifica riscos e oportunidades de otimização. Você recebe um relatório claro e objetivo.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Análise profissional e especializada</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Passo 4 */}
              <Card className="p-8 border-2 border-primary/20 hover:border-primary transition">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Orientação e Acompanhamento
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Você recebe orientações claras sobre como proceder, com suporte contínuo via WhatsApp. Se desejar, pode contratar um plano de acompanhamento mensal.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Suporte contínuo e orientação prática</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Precisa Saber */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              O Que Você Precisa Saber
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-0 shadow-sm">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Dados Seguros</h3>
                    <p className="text-sm text-muted-foreground">
                      Seus dados são protegidos com as melhores práticas de segurança. Nunca compartilhamos informações com terceiros.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-sm">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Atendimento Personalizado</h3>
                    <p className="text-sm text-muted-foreground">
                      Cada análise é única. Não usamos templates genéricos. Você recebe orientação específica para sua situação.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-sm">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Relatório Completo</h3>
                    <p className="text-sm text-muted-foreground">
                      Você recebe um relatório escrito com todos os detalhes, recomendações e próximos passos.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-sm">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Otimização Contínua</h3>
                    <p className="text-sm text-muted-foreground">
                      Com o plano de acompanhamento, você tem suporte mensal para garantir que tudo está em dia.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A primeira conversa é sem compromisso. Vamos entender sua situação e mostrar como podemos ajudar.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar Conversa no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">ContaInteligente</h4>
              <p className="text-sm text-muted-foreground">
                Segurança fiscal para profissionais liberais que querem crescer sem medo.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition">Início</a></li>
                <li><a href="/" className="hover:text-foreground transition">Como Funciona</a></li>
                <li><a href="/" className="hover:text-foreground transition">Dúvidas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Contato</h4>
              <p className="text-sm text-muted-foreground">
                Disponível via WhatsApp<br />
                Resposta em até 2 horas
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 ContaInteligente. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
