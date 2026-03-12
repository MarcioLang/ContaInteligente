
import React, { useState } from "react";

const WHATSAPP_NUMBER = "5561995788904";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      "Olá, vim pela landing da ContaInteligente e gostaria de fazer a análise fiscal gratuita."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div>

      {/* HERO */}
      <section style={{padding:"80px 20px", textAlign:"center"}}>
        <h1>Descubra quanto você pode retirar da sua empresa sem correr risco fiscal</h1>

        <p>
        Muitos profissionais PJ retiram dinheiro sem critério e só percebem o problema
        quando o imposto chega ou o caixa aperta.
        </p>

        <button onClick={openModal} style={{padding:"14px 24px", marginTop:20}}>
          Fazer Diagnóstico Fiscal Gratuito
        </button>

        <p style={{marginTop:12}}>
          Prefere falar direto?{" "}
          <span style={{color:"#1fa463", cursor:"pointer"}} onClick={openWhatsApp}>
            Falar no WhatsApp
          </span>
        </p>

      </section>


      {/* SITUAÇÕES REAIS */}
      <section style={{padding:"60px 20px"}}>

        <h2 style={{textAlign:"center"}}>Situações reais que encontramos na análise</h2>

        <div style={{display:"flex", gap:30, justifyContent:"center", marginTop:40, flexWrap:"wrap"}}>

          <div style={{maxWidth:300}}>
            <h4>Médico</h4>
            <p>Faturamento médio: R$38k</p>
            <p>Retirava todo dinheiro da empresa</p>
            <p>→ risco de imposto inesperado</p>
          </div>

          <div style={{maxWidth:300}}>
            <h4>Dentista</h4>
            <p>Faturamento médio: R$22k</p>
            <p>Mistura despesas pessoais e da clínica</p>
            <p>→ retirada sem critério</p>
          </div>

          <div style={{maxWidth:300}}>
            <h4>Advogado</h4>
            <p>Faturamento médio: R$16k</p>
            <p>Pagava imposto sem provisão</p>
            <p>→ risco de faltar caixa</p>
          </div>

        </div>

      </section>


      {/* AUTORIDADE */}
      <section style={{padding:"60px 20px", background:"#f6f8fb"}}>

        <h2 style={{textAlign:"center"}}>Por que confiar na ContaInteligente</h2>

        <div style={{display:"flex", gap:30, justifyContent:"center", marginTop:40, flexWrap:"wrap"}}>

          <div style={{maxWidth:260}}>
            <h4>Base técnica</h4>
            <p>
            Processo estruturado para analisar retirada, provisão de imposto e risco fiscal.
            </p>
          </div>

          <div style={{maxWidth:260}}>
            <h4>Atendimento humano</h4>
            <p>
            Você fala com um especialista, não com automação genérica.
            </p>
          </div>

          <div style={{maxWidth:260}}>
            <h4>Sigilo total</h4>
            <p>
            Nenhuma senha bancária é solicitada e seus dados não são armazenados.
            </p>
          </div>

        </div>

      </section>


      {/* MODAL */}
      {isModalOpen && (

        <div style={{
          position:"fixed",
          top:0,
          left:0,
          width:"100%",
          height:"100%",
          background:"rgba(0,0,0,0.6)",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>

          <div style={{background:"#fff", padding:30, maxWidth:500}}>

            <h3>Análise gratuita de segurança PJ/PF</h3>

            <p style={{fontSize:14}}>
            Leva menos de 30 segundos. Suas respostas servem apenas para entender seu cenário.
            </p>

            <p>1️⃣ Você atua como profissional liberal com CNPJ?</p>
            <p>2️⃣ Você retira dinheiro da empresa sem regra fixa?</p>
            <p>3️⃣ Já teve dificuldade para pagar impostos?</p>

            <button onClick={openWhatsApp} style={{marginTop:20}}>
              Continuar no WhatsApp
            </button>

            <p style={{marginTop:10, cursor:"pointer"}} onClick={()=>setIsModalOpen(false)}>
              Cancelar
            </p>

          </div>

        </div>

      )}


      {/* WHATSAPP FLOAT */}
      <div
        onClick={openWhatsApp}
        style={{
          position:"fixed",
          right:20,
          bottom:20,
          background:"#25d366",
          padding:"14px 18px",
          borderRadius:40,
          color:"#fff",
          cursor:"pointer"
        }}
      >
        WhatsApp
      </div>


      {/* FOOTER */}
      <footer style={{padding:"50px 20px", marginTop:60, background:"#0f172a", color:"#fff"}}>

        <p><strong>ContaInteligente</strong></p>
        <p>Consultoria em segurança fiscal para profissionais liberais PJ</p>

        <p>WhatsApp: (61) 99578‑8904</p>
        <p>Email: containteligentefiscal@gmail.com</p>

        <p style={{marginTop:20, fontSize:13}}>
        Atendimento nacional
        </p>

      </footer>


    </div>
  );
}
