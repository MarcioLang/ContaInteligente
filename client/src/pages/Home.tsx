import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, TrendingUp, Shield, FileText, Lock, Users, HelpCircle, MessageCircle, X, Clock3, BadgeCheck, FileSearch, Calculator, CircleHelp } from "lucide-react";
import { useMemo, useState } from "react";

type Answer = "sim" | "nao" | "as_vezes" | "";

const WHATSAPP_NUMBER = "5561995788904";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaSource, setCtaSource] = useState("landing");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [answer1, setAnswer1] = useState<Answer>("");
  const [answer2, setAnswer2] = useState<Answer>("");
  const [answer3, setAnswer3] = useState<Answer>("");

  const openQualificationModal = (source: string) => {
    setCtaSource(source);
    setIsModalOpen(true);
  };

  const resetModal = () => {
    setName("");
    setProfession("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setCtaSource("landing");
    setIsModalOpen(false);
  };

  const whatsappUrl = useMemo(() => {
    const parts = [
      "Olá! Vim pela landing page da ContaInteligente e quero solicitar a análise gratuita.",
      `Origem do clique: ${ctaSource}`,
      name ? `Nome: ${name}` : "",
      profession ? `Profissão: ${profession}` : "",
      answer1 ? `1) Atua como profissional liberal com CNPJ ativo? ${answer1}` : "",
      answer2 ? `2) Faz transferências PJ→PF sem critério fixo? ${answer2}` : "",
      answer3 ? `3) Já teve dificuldade com impostos por falta de provisão? ${answer3}` : "",
      "Pode me orientar sobre o próximo passo?",
    ].filter(Boolean);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join("\n"))}`;
  }, [answer1, answer2, answer3, ctaSource, name, profession]);

  const canContinue = Boolean(answer1 && answer2 && answer3);

  const handleContinueWhatsApp = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
    setIsModalOpen(false);
  };

  const faqItems = [
    {
      pergunta: "Meus dados são seguros?",
      resposta:
        "Sim. Pedimos apenas o necessário para a análise, tratamos tudo com sigilo e nunca pedimos senha bancária. Você pode começar até com DRE ou balancete, se já tiver contador.",
    },
    {
      pergunta: "Isso substitui meu contador?",
      resposta:
        "Não. A ContaInteligente complementa a contabilidade tradicional. O contador cuida das obrigações; nós ajudamos você a definir retirada segura, provisão e caixa com clareza mensal.",
    },
    {
      pergunta: "O que eu recebo na análise gratuita?",
      resposta:
        "Você recebe um diagnóstico rápido com semáforo de risco (verde, amarelo ou vermelho), um resumo dos números principais e um próximo passo claro para não continuar no escuro.",
    },
    {
      pergunta: "Quanto tempo leva para ver valor?",
      resposta:
        "Na primeira análise você já entende seu cenário atual. No acompanhamento mensal, o valor aparece na previsibilidade: retirada com regra, provisão em dia e menos susto com caixa.",
    },
    {
      pergunta: "E se eu já for organizado?",
      resposta:
        "Ótimo. Nesse caso, nosso trabalho é validar tecnicamente a sua regra atual, ajustar o que precisar e te dar mais segurança para continuar crescendo sem improviso.",
    },
    {
      pergunta: "Como funciona o plano mensal?",
      resposta:
        "Depois da análise gratuita, se fizer sentido, você pode contratar o acompanhamento mensal por R$ 297. Nele revisamos seus números, ajustamos retirada e provisão e entregamos um relatório simples e objetivo.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/images/logo-blue.png" alt="ContaInteligente Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">ContaInteligente</span>
              <span className="text-xs text-secondary font-medium">Segurança Fiscal PJ/PF</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition">Como Funciona</a>
            <a href="#quem-deve" className="text-sm text-muted-foreground hover:text-foreground transition">Quem Deve Fazer</a>
            <a href="#plano" className="text-sm text-muted-foreground hover:text-foreground transition">Plano Mensal</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition">Dúvidas</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container py-20 md:py-28 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BadgeCheck className="w-4 h-4" /> Atendimento humano com apoio técnico de contadora
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Descubra se você está retirando dinheiro demais da sua empresa
              </h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-medium">
                Muitos profissionais com CNPJ faturam bem, mas retiram dinheiro sem critério e só percebem o problema quando o imposto chega ou o caixa aperta.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                A análise gratuita mostra quanto você pode retirar com segurança, se sua provisão de imposto está correta e se existe risco financeiro invisível hoje na sua operação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto" onClick={() => openQualificationModal("hero-cta")}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fazer análise gratuita
                </Button>
                <a href="#como-funciona">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Ver Como Funciona
                  </Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                Leva menos de <span className="font-semibold text-foreground">30 segundos</span>. Prefere falar direto? {" "}
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da ContaInteligente e gostaria de fazer a análise gratuita de segurança fiscal.")}`} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                  Falar no WhatsApp
                </a>
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Sem call de vendas agressiva</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Você recebe um diagnóstico, não só uma promessa</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/images/hero-background.jpg" alt="Profissional analisando finanças da empresa" className="rounded-2xl shadow-2xl w-full object-cover h-96 md:h-full" />
              <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-border">
                <div className="text-sm font-medium text-foreground mb-1">O que você recebe na análise</div>
                <div className="text-sm text-muted-foreground">Semáforo de risco + próximos passos + visão clara de retirada e provisão.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-primary/5 border-y border-border">
        <div className="container grid md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-secondary mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Processo técnico e humano</p>
              <p className="text-muted-foreground">Diagnóstico guiado por método, sem depender de software automático.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-secondary mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Sigilo e privacidade</p>
              <p className="text-muted-foreground">Pedimos apenas o necessário e nunca solicitamos senha bancária.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock3 className="w-5 h-5 text-secondary mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Primeiro passo rápido</p>
              <p className="text-muted-foreground">Você responde 3 perguntas e já entendemos se faz sentido avançar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que você descobre na análise gratuita</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Em poucos minutos você entende o que hoje está no improviso: retirada, provisão, risco e saúde financeira da PJ.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border border-border shadow-sm">
              <Calculator className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Retirada segura</h3>
              <p className="text-sm text-muted-foreground">Quanto você pode retirar da empresa sem comprometer o caixa e o próximo mês.</p>
            </Card>
            <Card className="p-6 border border-border shadow-sm">
              <AlertCircle className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-foreground mb-2">Risco fiscal</h3>
              <p className="text-sm text-muted-foreground">Se existe risco de imposto inesperado ou provisão insuficiente no cenário atual.</p>
            </Card>
            <Card className="p-6 border border-border shadow-sm">
              <FileText className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-bold text-foreground mb-2">Provisão de imposto</h3>
              <p className="text-sm text-muted-foreground">Se o valor reservado hoje é suficiente para não transformar o DAS em susto.</p>
            </Card>
            <Card className="p-6 border border-border shadow-sm">
              <TrendingUp className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold text-foreground mb-2">Saúde da PJ</h3>
              <p className="text-sm text-muted-foreground">Se sua empresa está operando com segurança ou se o caixa está sendo pressionado sem você perceber.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Os 3 riscos mais comuns em profissionais liberais PJ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">É isso que normalmente está por trás do medo de “tirar dinheiro e se enrolar depois”.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Mistura de contas PJ e PF</h3>
              <p className="text-muted-foreground mb-4">Você usa a empresa para resolver gastos pessoais sem perceber o impacto no caixa e na leitura real do negócio.</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-red-600">Sinal típico: dinheiro sai da PJ sempre que surge uma necessidade pessoal</p>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Retirada sem regra</h3>
              <p className="text-muted-foreground mb-4">Você fatura bem, mas não tem uma régua clara para saber quanto pode tirar sem comprometer o mês seguinte.</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-orange-600">Sinal típico: decisão de retirada baseada na urgência, não em critério</p>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Provisão fraca de impostos</h3>
              <p className="text-muted-foreground mb-4">O imposto não está “caro”: ele só chega sem planejamento. E isso faz parecer que o dinheiro desapareceu.</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-yellow-600">Sinal típico: pagar guia no susto ou perto do vencimento</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Como a análise gratuita funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Você não precisa entender de contabilidade para receber valor. Nós organizamos o raciocínio para você.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {[
              { n: "1", title: "Entendemos seu cenário", text: "Você responde 3 perguntas rápidas e, se fizer sentido, avançamos para a análise." },
              { n: "2", title: "Lemos os seus números", text: "Receita, custos, retirada e provisão entram numa lógica simples e defensável." },
              { n: "3", title: "Apontamos o risco", text: "Você recebe um semáforo claro: verde, amarelo ou vermelho." },
              { n: "4", title: "Mostramos o próximo passo", text: "Sem enrolação: quanto ajustar, o que reservar e onde está o ponto de atenção." },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 font-bold text-2xl text-primary">{item.n}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
                {idx < 3 && <div className="hidden md:block absolute top-8 -right-3 w-6 h-1 bg-border" />}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <FileSearch className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">O que você recebe</h3>
              </div>
              <p className="text-sm text-muted-foreground">Semáforo de risco, leitura dos números principais e uma recomendação clara do que ajustar primeiro.</p>
            </Card>
            <Card className="p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">O que analisamos</h3>
              </div>
              <p className="text-sm text-muted-foreground">Receita, retirada PJ→PF, provisão de impostos, custos fixos e sinais de mistura entre empresa e pessoal.</p>
            </Card>
            <Card className="p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <CircleHelp className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">O que não fazemos</h3>
              </div>
              <p className="text-sm text-muted-foreground">Não pedimos senha bancária e não substituímos seu contador. Nosso foco é clareza e prevenção mensal.</p>
            </Card>
          </div>

          <div className="mt-16 bg-muted/30 rounded-2xl border border-border p-8 md:p-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Exemplo do que identificamos em uma análise</h3>
              <p className="text-muted-foreground">Profissional liberal PJ com faturamento médio de R$ 27 mil.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 border border-border shadow-sm">
                <p className="text-sm text-muted-foreground mb-2">Retirada atual</p>
                <p className="text-3xl font-bold text-orange-600 mb-2">R$ 18.000</p>
                <p className="text-sm text-muted-foreground">Acima do ideal para manter segurança financeira e caixa saudável.</p>
              </Card>
              <Card className="p-6 border border-border shadow-sm">
                <p className="text-sm text-muted-foreground mb-2">Retirada segura sugerida</p>
                <p className="text-3xl font-bold text-green-600 mb-2">R$ 12.500</p>
                <p className="text-sm text-muted-foreground">Faixa que mantém provisão adequada e reduz sustos futuros.</p>
              </Card>
              <Card className="p-6 border border-border shadow-sm">
                <p className="text-sm text-muted-foreground mb-2">Risco identificado</p>
                <p className="text-xl font-bold text-red-600 mb-2">Provisão insuficiente</p>
                <p className="text-sm text-muted-foreground">Possível diferença futura de aproximadamente R$ 9 mil se nada mudar.</p>
              </Card>
              <Card className="p-6 border border-border shadow-sm">
                <p className="text-sm text-muted-foreground mb-2">Ajuste sugerido</p>
                <p className="font-semibold text-foreground mb-2">Separar provisão mensal e definir retirada fixa</p>
                <p className="text-sm text-muted-foreground">Clareza simples, sem depender de improviso mês a mês.</p>
              </Card>
            </div>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Você recebe algo nessa linha: um semáforo de risco + leitura dos números principais + próximo passo claro.
            </div>
          </div>
        </div>
      </section>

      <section id="quem-deve" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quem deve fazer essa análise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A análise é especialmente útil para profissionais liberais com CNPJ que faturam bem, mas ainda tomam decisões financeiras no improviso.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {["Médicos", "Dentistas", "Advogados", "Profissionais Liberais"].map((profissao, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-sm hover:shadow-md transition text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{profissao}</h3>
                <p className="text-sm text-muted-foreground mt-2">Com CNPJ e retirada mensal da empresa</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border border-primary/20 bg-blue-50 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Você é um bom candidato se:</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><p>Tem CNPJ ativo e faz retiradas da empresa para sua vida pessoal</p></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><p>Já teve dúvida sobre quanto poderia tirar sem comprometer impostos ou caixa</p></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" /><p>Quer uma visão simples, mensal e técnica do seu negócio</p></div>
              </div>
            </Card>
            <Card className="p-8 border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4">Mesmo se você já for organizado</h3>
              <p className="text-muted-foreground mb-4">A ContaInteligente ainda pode ajudar se você quiser validar tecnicamente sua regra atual de retirada, revisar sua provisão e ganhar previsibilidade para crescer com mais segurança.</p>
              <p className="text-sm text-muted-foreground">Em outras palavras: não é só para quem está perdido. Também é para quem quer confirmar se está no caminho certo.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Situações reais que encontramos na análise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Exemplos simples para você perceber se existe o mesmo risco aí na sua operação.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 border-0 shadow-sm">
              <h3 className="font-bold text-foreground mb-3">Médico</h3>
              <p className="text-sm text-muted-foreground mb-3">Faturamento médio: <span className="font-semibold text-foreground">R$ 38 mil</span></p>
              <p className="text-sm text-muted-foreground mb-3">Retirava quase todo o dinheiro da empresa para despesas pessoais e do mês.</p>
              <p className="text-sm font-medium text-red-600">→ risco de imposto inesperado e caixa pressionado no mês seguinte</p>
            </Card>
            <Card className="p-8 border-0 shadow-sm">
              <h3 className="font-bold text-foreground mb-3">Dentista</h3>
              <p className="text-sm text-muted-foreground mb-3">Faturamento médio: <span className="font-semibold text-foreground">R$ 22 mil</span></p>
              <p className="text-sm text-muted-foreground mb-3">Misturava despesas pessoais e da clínica no cartão PJ sem critério claro.</p>
              <p className="text-sm font-medium text-orange-600">→ retirada sem critério e dificuldade para entender o lucro real</p>
            </Card>
            <Card className="p-8 border-0 shadow-sm">
              <h3 className="font-bold text-foreground mb-3">Advogado</h3>
              <p className="text-sm text-muted-foreground mb-3">Faturamento médio: <span className="font-semibold text-foreground">R$ 16 mil</span></p>
              <p className="text-sm text-muted-foreground mb-3">Pagava o imposto, mas sem provisão e sem reserva para meses mais fracos.</p>
              <p className="text-sm font-medium text-red-600">→ risco de falta de caixa e aperto quando o faturamento oscila</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por que confiar na ContaInteligente</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Não prometemos milagre. Entregamos leitura clara, processo humano e orientação prática.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-sm">
              <Shield className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-bold text-foreground mb-3">Base técnica e processo</h3>
              <p className="text-muted-foreground text-sm">A análise é conduzida com método e apoio técnico de contadora, focando em retirada, provisão e caixa — não em discurso genérico.</p>
            </Card>
            <Card className="p-8 border-0 shadow-sm">
              <Users className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-bold text-foreground mb-3">Atendimento individual</h3>
              <p className="text-muted-foreground text-sm">Cada realidade é diferente. O objetivo é interpretar seu cenário, e não encaixar você em uma planilha pronta.</p>
            </Card>
            <Card className="p-8 border-0 shadow-sm">
              <Lock className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-bold text-foreground mb-3">Privacidade e bom senso</h3>
              <p className="text-muted-foreground text-sm">Você pode começar até com DRE ou balancete. Quando usamos extratos, o foco é leitura financeira, sem pedir acesso à conta.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-primary/5">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Por que fazemos a análise gratuita</h2>
          <p className="text-lg text-muted-foreground">Abrimos alguns diagnósticos por semana para ajudar profissionais liberais a entenderem seu cenário financeiro antes que o problema apareça no imposto ou no caixa.</p>
          <p className="text-sm text-muted-foreground mt-4">O objetivo não é te empurrar uma venda. É te mostrar, com clareza, se existe risco hoje e qual seria o próximo passo mais inteligente.</p>
        </div>
      </section>

      <section id="plano" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Plano Mensal ContaInteligente</h2>
            <p className="text-lg text-muted-foreground">Depois da análise gratuita, se fizer sentido, você pode seguir com acompanhamento mensal para manter retirada, provisão e caixa sob controle.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-2 border-primary shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">R$ 297/mês</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Acompanhamento profissional</h3>
              <p className="text-muted-foreground text-sm mb-6">Ideal para quem quer acompanhamento simples, recorrente e técnico — sem viver decidindo retirada e imposto no improviso.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" /><span className="text-sm text-foreground">Análise inicial completa de risco fiscal e financeiro</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" /><span className="text-sm text-foreground">Definição e revisão da regra de retirada</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" /><span className="text-sm text-foreground">Acompanhamento mensal com relatório simples</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" /><span className="text-sm text-foreground">Ajustes de provisão de impostos e alertas</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" /><span className="text-sm text-foreground">Suporte via WhatsApp + revisão trimestral</span></li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6" onClick={() => openQualificationModal("plano-r297")}>Quero começar pela análise gratuita</Button>
              <p className="text-xs text-muted-foreground text-center mt-4">Cancele quando quiser. Primeiro precisa fazer sentido, depois vira rotina.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dúvidas frequentes</h2>
            <p className="text-lg text-muted-foreground">Respostas curtas, honestas e sem contabilidade difícil.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <Card key={idx} className="p-6 border-0 shadow-sm cursor-pointer hover:shadow-md transition" onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-foreground flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item.pergunta}
                  </h3>
                  <span className="text-primary font-bold text-xl">{expandedFaq === idx ? "−" : "+"}</span>
                </div>
                {expandedFaq === idx && (
                  <p className="text-muted-foreground mt-4 pt-4 border-t border-border">{item.resposta}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Se você ainda decide retirada e imposto no improviso, a análise gratuita já pode te dar clareza</h2>
            <p className="text-lg text-white/90 mb-8">Responda 3 perguntas, fale com a ContaInteligente e entenda se existe risco invisível hoje no seu negócio.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => openQualificationModal("cta-final")}>Fazer análise gratuita</Button>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da ContaInteligente e quero falar sobre a análise gratuita.")}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">Falar direto no WhatsApp</Button>
              </a>
            </div>
            <p className="text-sm text-white/70 mt-6">✓ Diagnóstico, não pressão | ✓ Atendimento humano | ✓ Sem pedir senha bancária</p>
          </div>
        </div>
      </section>

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
              <p className="text-sm text-white/60">Clareza sobre retirada, provisão e caixa para profissionais liberais com CNPJ.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#como-funciona" className="hover:text-white transition">Como Funciona</a></li>
                <li><a href="#quem-deve" className="hover:text-white transition">Quem Deve Fazer</a></li>
                <li><a href="#plano" className="hover:text-white transition">Plano Mensal</a></li>
                <li><a href="#faq" className="hover:text-white transition">Dúvidas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white transition" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="mailto:containteligentefiscal@gmail.com" className="hover:text-white transition">E-mail</a></li>
                <li><a href="https://instagram.com/containteligente.fiscal" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Nota importante</h4>
              <p className="text-sm text-white/60">A ContaInteligente complementa a contabilidade tradicional com leitura mensal de retirada, provisão, caixa e próximos passos claros.</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 ContaInteligente. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => openQualificationModal("whatsapp-flutuante")}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 transition px-4 h-14 flex items-center justify-center gap-2"
        aria-label="Abrir WhatsApp da ContaInteligente"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button type="button" onClick={resetModal} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground" aria-label="Fechar modal">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-foreground mb-2">Análise gratuita de segurança PJ/PF</h3>
            <p className="text-sm text-muted-foreground mb-6">Leva menos de 30 segundos. Suas respostas servem apenas para entendermos seu cenário e orientar o próximo passo. Sem pressão comercial.</p>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Seu nome (opcional)</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20" placeholder="Ex.: Dr. João" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Profissão (opcional)</label>
                <input value={profession} onChange={(e) => setProfession(e.target.value)} className="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20" placeholder="Ex.: Médico, Dentista, Advogado" />
              </div>

              <QuestionBlock
                title="1) Você atua hoje como profissional liberal com CNPJ ativo?"
                value={answer1}
                onChange={setAnswer1}
                options={[{ value: "sim", label: "Sim" }, { value: "nao", label: "Não" }]}
              />
              <QuestionBlock
                title="2) Você realiza transferências da conta PJ para sua conta pessoal sem um critério fixo?"
                value={answer2}
                onChange={setAnswer2}
                options={[{ value: "sim", label: "Sim" }, { value: "as_vezes", label: "Às vezes" }, { value: "nao", label: "Não" }]}
              />
              <QuestionBlock
                title="3) Você já teve dificuldade para pagar impostos por falta de provisão adequada?"
                value={answer3}
                onChange={setAnswer3}
                options={[{ value: "sim", label: "Sim" }, { value: "as_vezes", label: "Quase aconteceu" }, { value: "nao", label: "Não" }]}
              />
            </div>

            <div className="bg-muted/40 border border-border rounded-xl p-4 mt-6 mb-6 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Privacidade e sigilo</p>
              <p>Você não precisa informar senha bancária. Nosso primeiro passo é entender seu cenário com base nas respostas e, se fizer sentido, seguir com a análise.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="w-full" onClick={resetModal}>Cancelar</Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={handleContinueWhatsApp} disabled={!canContinue}>
                Continuar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type QuestionBlockProps = {
  title: string;
  value: Answer;
  onChange: (value: Answer) => void;
  options: { value: Answer; label: string }[];
};

function QuestionBlock({ title, value, onChange, options }: QuestionBlockProps) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              value === option.value
                ? "bg-primary text-white border-primary"
                : "bg-white text-foreground border-border hover:border-primary/40"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
