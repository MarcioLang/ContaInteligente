# 🚀 Guia de Deploy no Netlify - ContaInteligente

## ✅ Projeto Pronto para Netlify

Este projeto foi **otimizado e testado** para funcionar perfeitamente no Netlify. Todas as dependências privadas do Manus foram removidas.

---

## 📋 Pré-requisitos

- Conta no Netlify (https://netlify.com)
- Repositório Git (GitHub, GitLab ou Bitbucket)
- Node.js 18+ instalado localmente (opcional, Netlify instala automaticamente)

---

## 🔧 Opção 1: Deploy via Git (Recomendado)

### 1. Fazer Push do Projeto para GitHub

```bash
git init
git add .
git commit -m "Projeto ContaInteligente pronto para Netlify"
git branch -M main
git remote add origin https://github.com/seu-usuario/conta-inteligente-lp.git
git push -u origin main
```

### 2. Conectar no Netlify

1. Acesse https://app.netlify.com
2. Clique em **"New site from Git"**
3. Selecione seu repositório (GitHub/GitLab/Bitbucket)
4. Netlify detectará automaticamente:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **"Deploy"**

✅ **Pronto!** Seu site estará online em minutos.

---

## 🔧 Opção 2: Deploy via Netlify Drop (Sem Git)

### 1. Fazer Build Localmente

```bash
npm install
npm run build
```

### 2. Upload para Netlify

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `dist/` para a área de upload
3. Pronto! Seu site está online

---

## 📁 Estrutura do Projeto

```
conta-inteligente-lp/
├── client/                  # Código React
│   ├── src/
│   │   ├── pages/          # Páginas (Home.tsx, HowItWorks.tsx)
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── App.tsx         # Rotas
│   │   └── index.css       # Estilos Tailwind
│   ├── public/
│   │   └── images/         # Imagens (logo, hero, etc)
│   └── index.html          # HTML principal
├── vite.config.ts          # Configuração Vite (simplificada)
├── package.json            # Dependências (sem Manus)
├── netlify.toml            # Configuração Netlify
└── dist/                   # Build gerado (não fazer push)
```

---

## ✨ Funcionalidades Mantidas

✅ **Landing Page Completa** - Hero, seções, FAQ, preços
✅ **Integração WhatsApp** - Botão com mensagem pré-preenchida
✅ **Página "Como Funciona"** - 4 passos detalhados
✅ **Design Premium** - Logo, cores, tipografia
✅ **Responsivo** - Mobile, tablet, desktop
✅ **Otimizado para SEO** - Meta tags, estrutura semântica

---

## 🔮 Preparado para Futuras Melhorias

A estrutura permite fácil expansão:

### Backend/API
```bash
npm install express cors dotenv
# Criar pasta server/ com rotas
```

### Banco de Dados
```bash
npm install supabase @supabase/supabase-js
# Conectar ao Supabase
```

### Autenticação
```bash
npm install next-auth
# Implementar login de usuários
```

### E-mail
```bash
npm install nodemailer
# Enviar confirmações por email
```

---

## 🛠️ Troubleshooting

### Build falha no Netlify

**Solução:** Verifique se o `package.json` está correto:
```bash
npm install
npm run build
```

### Página em branco após deploy

**Solução:** Verifique se `netlify.toml` está configurado corretamente (deve estar na raiz do projeto).

### WhatsApp não abre

**Solução:** Certifique-se de que o link está correto no arquivo `client/src/pages/Home.tsx`:
```tsx
const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;
```

---

## 📊 Variáveis de Ambiente (Futuro)

Se precisar de variáveis de ambiente, crie um arquivo `.env` na raiz:

```
VITE_API_URL=https://sua-api.com
VITE_WHATSAPP_NUMBER=5511999999999
```

E no Netlify, vá para **Site settings → Build & deploy → Environment** e adicione as variáveis.

---

## 🎯 Próximos Passos

1. **Domínio Customizado** - Vá para Netlify → Site settings → Domain management
2. **SSL Automático** - Netlify ativa automaticamente
3. **Analytics** - Ative em Netlify → Site settings → Analytics
4. **Formulário de Contato** - Use Netlify Forms (adicionar `name="contact"` ao form)

---

## 📞 Suporte

Qualquer dúvida sobre o deploy, consulte:
- [Documentação Netlify](https://docs.netlify.com)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

**Seu site ContaInteligente está pronto para o mundo! 🚀**
