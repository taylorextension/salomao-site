# Deploy na Vercel - Instruções

## Opção 1: Deploy Automático (Mais Fácil)

1. Acesse: https://vercel.com/new
2. Clique em "Import Git Repository"
3. Cole este URL: `https://github.com/taylorextension/salomao-site`
4. Clique em "Deploy"
5. Pronto! Seu site estará online em segundos.

## Opção 2: Via CLI (Se preferir)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

## Opção 3: Import no Dashboard

1. Vá em https://vercel.com/dashboard
2. Clique em "Add New..." → "Project"
3. Importe o repo `taylorextension/salomao-site`
4. O framework "Vite" será detectado automaticamente
5. Clique "Deploy"

---

**O projeto já está 100% configurado.**
Não precisa alterar nada - só importar e deployar.
