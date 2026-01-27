import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2, AlertCircle, TrendingUp, Shield, FileText, Zap, Lock, Users, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

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
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition">Como Funciona</a>
            <a href="#para-quem" className="text-sm text-muted-foreground hover:text-foreground transition">Para Quem É</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition">Dúvidas</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                ✓ Serviço Conduzido por Contadora CRC
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Evite problemas fiscais antes que eles aconteçam
              </h1>
              <p className="text-lg text-muted-foreground mb-2 leading-relaxed font-medium">
                Saiba quanto você pode retirar da sua empresa com segurança.
              </p>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed italic">
                "O erro acontece no momento da decisão, mas o prejuízo vem depois."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Solicitar Análise Gratuita
                  </Button>
                </a>
                <a href="#como-funciona">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Ver Como Funciona
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Diagnóstico, não venda</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/hero-background.jpg" 
                alt="Profissional usando ContaInteligente" 
                className="rounded-2xl shadow-2xl w-full object-cover h-96 md:h-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="text-sm font-medium text-foreground mb-2">Multas Evitadas em 2025</div>
                <div className="text-3xl font-bold text-secondary">R$ 2.4M+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Autoridade */}
      <section className="py-16 bg-primary/5 border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Autoridade Técnica</h3>
                <p className="text-sm text-muted-foreground">Desenvolvido por contadora com 15 anos de experiência. Foco em prevenção fiscal, não em venda.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Atendimento Individual</h3>
                <p className="text-sm text-muted-foreground">Cada profissional tem necessidades únicas. Análise personalizada, não genérica.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Dados Protegidos</h3>
                <p className="text-sm text-muted-foreground">Seus dados não são compartilhados. Sigilo profissional garantido.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Dor */}
      <section id="como-funciona" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Os 3 Maiores Riscos dos Profissionais Liberais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Que o ContaInteligente identifica e previne
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Risco 1 */}
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Mistura de Contas PJ e PF
              </h3>
              <p className="text-muted-foreground mb-4">
                Você usa a conta da empresa para gastos pessoais sem perceber. A Receita Federal vê isso como desvio de recursos.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-red-600">
                  Risco: Multa que pode chegar a 75% do valor indevido
                </p>
              </div>
            </Card>

            {/* Risco 2 */}
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Não Sabe Quanto Pode Sacar
              </h3>
              <p className="text-muted-foreground mb-4">
                Você tira dinheiro da empresa sem saber se deixou reserva para impostos. Resultado: débito com a Receita.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-orange-600">
                  Risco: Débito + juros + multa por atraso
                </p>
              </div>
            </Card>

            {/* Risco 3 */}
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Descobre o Erro Tarde Demais
              </h3>
              <p className="text-muted-foreground mb-4">
                O erro acontece no momento da decisão, mas a multa chega meses depois, quando é muito tarde para corrigir.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-yellow-600">
                  Impacto: Prejuízo financeiro + estresse
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Solução */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como o ContaInteligente Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4 passos simples para clareza fiscal
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {/* Passo 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 font-bold text-2xl text-primary">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Analisamos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nosso especialista analisa seus dados financeiros para identificar riscos fiscais.
                </p>
              </div>
              {/* Linha conectora */}
              <div className="hidden md:block absolute top-8 -right-3 w-6 h-1 bg-border" />
            </div>

            {/* Passo 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 font-bold text-2xl text-secondary">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Definimos Regras
                </h3>
                <p className="text-sm text-muted-foreground">
                  Criamos regras seguras e personalizadas para sua situação específica.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 -right-3 w-6 h-1 bg-border" />
            </div>

            {/* Passo 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 font-bold text-2xl text-accent">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Orientamos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Você descobre exatamente quanto pode retirar sem risco fiscal.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 -right-3 w-6 h-1 bg-border" />
            </div>

            {/* Passo 4 */}
            <div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 font-bold text-2xl text-primary">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Acompanhamos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monitoramento mensal para garantir que tudo está em dia.
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16">
            <img 
              src="/images/dashboard-preview.png" 
              alt="Dashboard do ContaInteligente" 
              className="rounded-xl shadow-lg w-full border border-border"
            />
            <p className="text-xs text-muted-foreground text-center mt-3 italic">
              Imagem ilustrativa para demonstrar os indicadores analisados.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Para Quem É */}
      <section id="para-quem" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Para Quem É o ContaInteligente?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais liberais com CNPJ que querem segurança fiscal
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Médicos", "Dentistas", "Advogados", "Profissionais Liberais"].map((profissao, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-sm hover:shadow-md transition text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{profissao}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Com CNPJ e receita mensal
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl border border-primary/20 p-8">
            <p className="text-sm text-primary font-medium mb-4">💡 Como Funciona</p>
            <p className="text-muted-foreground mb-6 text-sm">
              A análise é conduzida por especialista, com apoio de processos estruturados. Não é um software automático — é um serviço personalizado focado na sua segurança fiscal.
            </p>
            <h3 className="text-xl font-bold text-foreground mb-6">Você é um bom candidato se:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Tem CNPJ e PF separados (ou quer separar)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Faz retiradas mensais da empresa</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Quer evitar multas e débitos</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Valoriza clareza e segurança</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Prova Social */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Situações Reais que Vemos com Frequência
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exemplos de profissionais que enfrentaram e resolveram os mesmos desafios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Situação 1 */}
            <Card className="p-8 border-0 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">DR</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Cirurgião Dentista</p>
                  <p className="text-sm text-muted-foreground">Profissional com consultório</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "Descobriu que estava deixando R$ 8.000 em risco fiscal por mês. Após análise, reorganizou a retirada e eliminou o problema."
              </p>
              <div className="flex text-accent">✓ Problema resolvido</div>
            </Card>

            {/* Situação 2 */}
            <Card className="p-8 border-0 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold">AV</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Advogada</p>
                  <p className="text-sm text-muted-foreground">Escritório com 2 sócios</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "Não sabia quanto cada sócio podia retirar com segurança. A análise definiu regras claras e eliminou a incerteza."
              </p>
              <div className="flex text-accent">✓ Problema resolvido</div>
            </Card>

            {/* Situação 3 */}
            <Card className="p-8 border-0 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">MD</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Médica</p>
                  <p className="text-sm text-muted-foreground">Clínica com equipe</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "Misturava PF e PJ sem perceber. Agora tem clareza total sobre fluxo de caixa e retiradas seguras."
              </p>
              <div className="flex text-accent">✓ Problema resolvido</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Preços */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planos Simples e Transparentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o plano que melhor se adequa ao seu negócio
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-2 border-primary shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Plano Profissional</h3>
              <p className="text-muted-foreground text-sm mb-6">O mais escolhido por profissionais que fazem retiradas mensais</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">R$ 297</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">Análise inicial completa de risco fiscal</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">Definição de regras seguras para retirada</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">Acompanhamento mensal</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">Relatórios para seu contador</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">Suporte via WhatsApp</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                Solicitar Análise Gratuita
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Outros planos disponíveis sob consulta. Fale conosco.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de FAQ */}
      <section id="faq" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respostas honestas para suas preocupações
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                pergunta: "Meus dados são seguros?",
                resposta: "Sim. Seus dados não são compartilhados com terceiros. Sigilo profissional garantido, assim como em um consultório ou escritório de advocacia."
              },
              {
                pergunta: "Isso é uma venda disfarçada?",
                resposta: "Não. Oferecemos um diagnóstico honesto. Se não fizer sentido para você, você fica com o diagnóstico e pode sair sem compromisso."
              },
              {
                pergunta: "Quanto tempo leva para ver resultados?",
                resposta: "A análise inicial leva 3-5 dias. Depois disso, você já sabe exatamente quanto pode retirar e quais são seus riscos reais."
              },
              {
                pergunta: "Preciso de contador para usar?",
                resposta: "Não é obrigatório, mas recomendamos. Se tiver um contador, ele pode usar o ContaInteligente para acompanhar suas finanças junto com você."
              },
              {
                pergunta: "E se eu não gostar?",
                resposta: "Você pode cancelar a qualquer momento, sem penalidades. Mas queremos que você fique porque vê valor real, não porque está preso."
              },
              {
                pergunta: "Como é a abordagem?",
                resposta: "Conversamos via WhatsApp ou email. Nada de call de vendas agressiva. Você controla o ritmo da conversa."
              }
            ].map((item, idx) => (
              <Card 
                key={idx}
                className="p-6 border-0 shadow-sm cursor-pointer hover:shadow-md transition"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-foreground flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item.pergunta}
                  </h3>
                  <span className="text-primary font-bold text-xl">
                    {expandedFaq === idx ? "−" : "+"}
                  </span>
                </div>
                {expandedFaq === idx && (
                  <p className="text-muted-foreground mt-4 pt-4 border-t border-border">
                    {item.resposta}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Saber Quanto Você Pode Retirar Sem Risco?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Comece com uma análise de risco gratuita. Sem cartão de crédito, sem compromisso.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                required
              />
              <Button 
                type="submit"
                className="bg-white text-primary hover:bg-white/90"
              >
                {submitted ? "✓ Enviado!" : "Solicitar Análise"}
              </Button>
            </form>

            <p className="text-sm text-white/70 mt-6">
              ✓ Análise em até 24h | ✓ Sem spam | ✓ Cancelar a qualquer momento
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">C</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">ContaInteligente</span>
                  <span className="text-xs text-white/60">Segurança Fiscal PJ/PF</span>
                </div>
              </div>
              <p className="text-sm text-white/60">
                Gestão financeira segura para profissionais liberais.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#como-funciona" className="hover:text-white transition">Como Funciona</a></li>
                <li><a href="#para-quem" className="hover:text-white transition">Para Quem É</a></li>
                <li><a href="#faq" className="hover:text-white transition">Dúvidas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 ContaInteligente. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
