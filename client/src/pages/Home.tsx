import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, AlertCircle, TrendingUp, Shield, Lock, 
  MessageCircle, X, Clock3, BadgeCheck 
} from "lucide-react";
import { useMemo, useState, useCallback } from "react";

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

  // Abre a modal e registra de onde veio o clique
  const openQualificationModal = useCallback((source: string) => {
    setCtaSource(source);
    setIsModalOpen(true);
  }, []);

  // Limpa o formulário e fecha a modal
  const resetModal = useCallback(() => {
    setName("");
    setProfession("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setCtaSource("landing");
    setIsModalOpen(false);
  }, []);

  // Verifica se todas as perguntas foram respondidas
  const canContinue = Boolean(answer1 && answer2 && answer3);

  // Lógica de redirecionamento aprimorada para evitar fechamento no PC
  const handleContinueWhatsApp = () => {
    const parts = [
      "Olá! Vim pela landing page da ContaInteligente e quero solicitar a análise gratuita.",
      `Origem: ${ctaSource}`,
      name ? `Nome: ${name}` : "",
      profession ? `Profissão: ${profession}` : "",
      answer1 ? `1) Possui CNPJ ativo? ${answer1}` : "",
      answer2 ? `2) Transferências PJ→PF sem critério? ${answer2}` : "",
      answer3 ? `3) Dificuldade com impostos? ${answer3}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join("\n"))}`;
    
    // MELHORIA: window.location.assign é mais estável que window.open para disparar o WhatsApp
    window.location.assign(url);
    setIsModalOpen(false);
  };

  const faqItems = [
    { pergunta: "Meus dados são seguros?", resposta: "Sim. Pedimos apenas o necessário para a análise técnica e nunca pedimos senha bancária." },
    { pergunta: "Isso substitui meu contador?", resposta: "Não. Somos um braço de consultoria financeira para organizar sua retirada e provisão mensal." },
    { pergunta: "O que recebo na análise?", resposta: "Um diagnóstico rápido com semáforo de risco e orientação para o seu próximo passo fiscal." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">ContaInteligente</span>
          </div>
          <Button variant="outline" className="hidden md:flex" onClick={() => openQualificationModal("header-cta")}>
            Análise Gratuita
          </Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <BadgeCheck className="w-4 h-4" /> Especialistas em Segurança Fiscal para PJ
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Pare de retirar dinheiro da sua empresa no escuro
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Descubra através de uma análise técnica se sua retirada de lucro está colocando seu patrimônio em risco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-16 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20" onClick={() => openQualificationModal("hero-main")}>
              Iniciar Análise Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Proteção Fiscal", desc: "Evite a confusão patrimonial entre PJ e PF." },
            { icon: TrendingUp, title: "Lucro Real", desc: "Saiba quanto você realmente pode tirar por mês." },
            { icon: Clock3, title: "Provisão", desc: "Nunca mais seja pego de surpresa pelo imposto." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition">
              <item.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  className="w-full p-5 text-left flex justify-between items-center font-semibold"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  {item.pergunta}
                  <X className={`w-5 h-5 transition-transform ${expandedFaq === i ? "rotate-0" : "rotate-45"}`} />
                </button>
                {expandedFaq === i && <div className="px-5 pb-5 text-slate-600">{item.resposta}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE */}
      <button
        onClick={() => openQualificationModal("float-button")}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold px-0 group-hover:px-2">Falar no WhatsApp</span>
      </button>

      {/* MODAL MELHORADA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative animate-in zoom-in-95 duration-200">
            <button onClick={resetModal} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-2">Análise de Segurança</h3>
            <p className="text-slate-500 text-sm mb-8 italic">Responda para liberar o acesso ao consultor.</p>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Nome</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary" placeholder="João..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-400">Profissão</label>
                  <input value={profession} onChange={(e) => setProfession(e.target.value)} className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary" placeholder="Médico..." />
                </div>
              </div>

              <div className="space-y-5 py-6 border-t border-slate-100">
                <QuestionBlock title="1) Possui CNPJ ativo?" value={answer1} onChange={setAnswer1} options={[{ value: "sim", label: "Sim" }, { value: "nao", label: "Não" }]} />
                <QuestionBlock title="2) Transfere PJ→PF sem critério?" value={answer2} onChange={setAnswer2} options={[{ value: "sim", label: "Sim" }, { value: "as_vezes", label: "Às vezes" }, { value: "nao", label: "Não" }]} />
                <QuestionBlock title="3) Já teve susto com imposto?" value={answer3} onChange={setAnswer3} options={[{ value: "sim", label: "Sim" }, { value: "as_vezes", label: "Quase" }, { value: "nao", label: "Não" }]} />
              </div>

              {/* BOTÕES AJUSTADOS: Continuar em cima, Cancelar embaixo */}
              <div className="flex flex-col gap-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20" 
                  onClick={handleContinueWhatsApp} 
                  disabled={!canContinue}
                >
                  Continuar no WhatsApp
                </Button>
                <Button variant="ghost" className="w-full h-12 text-slate-400 font-medium" onClick={resetModal}>
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// COMPONENTE DE PERGUNTA
function QuestionBlock({ title, value, onChange, options }: { title: string, value: Answer, onChange: (v: Answer) => void, options: { value: Answer, label: string }[] }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-slate-700">{title}</p>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`flex-1 py-2 rounded-xl text-sm font-medium border-2 transition ${
              value === opt.value ? "bg-primary border-primary text-white" : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}