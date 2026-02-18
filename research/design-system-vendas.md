# Design System - E-book TDAH para Pais
## Página de Vendas

---

## 🎯 Visão Geral

Este design system foi criado para uma página de vendas de e-book sobre TDAH direcionado a pais. O objetivo é transmitir **autoridade com empatia** — um tom acolhedor mas profissional que gere confiança e facilite a conversão.

### Princípios de Design
1. **Clareza acima de tudo** - Informação organizada e fácil de processar
2. **Empatia visual** - Cores e formas que acalmam, não sobrecarregam
3. **Confiança** - Tipografia e espaçamento que transmitem profissionalismo
4. **Ação** - CTAs claros e convidativos sem serem agressivos

---

## 🎨 Paleta de Cores

### Cores Primárias
| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary-600` | `#2563EB` | CTAs principais, links |
| `--color-primary-500` | `#3B82F6` | Hover states, destaques |
| `--color-primary-700` | `#1D4ED8` | Active states |

### Cores de Destaque (Acento)
| Token | Hex | Uso |
|-------|-----|-----|
| `--color-accent-500` | `#F59E0B` | Alertas positivos, badges |
| `--color-accent-400` | `#FBBF24` | Ícones de benefício |
| `--color-accent-600` | `#D97706` | Hover em elementos de destaque |

### Cores Neutras
| Token | Hex | Uso |
|-------|-----|-----|
| `--color-neutral-900` | `#111827` | Texto principal (títulos) |
| `--color-neutral-700` | `#374151` | Texto secundário |
| `--color-neutral-500` | `#6B7280` | Texto terciário, legendas |
| `--color-neutral-300` | `#D1D5DB` | Bordas sutis |
| `--color-neutral-100` | `#F3F4F6` | Backgrounds alternados |
| `--color-neutral-50` | `#F9FAFB` | Background principal |
| `--color-white` | `#FFFFFF` | Cards, superfícies |

### Cores de Feedback
| Token | Hex | Uso |
|-------|-----|-----|
| `--color-success-500` | `#10B981` | Checkmarks, confirmações |
| `--color-error-500` | `#EF4444` | Erros de formulário |

### Gradiente Principal
```css
--gradient-hero: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%);
--gradient-warm: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
```

---

## 🔤 Tipografia

### Fontes

**Fonte Principal (Títulos):** `Inter`
- Peso: 600-700 para títulos
- Transmite modernidade e confiança
- Excelente legibilidade em todos os tamanhos

**Fonte Secundária (Body):** `Inter` ou `Source Sans Pro`
- Peso: 400 (regular), 500 (medium)
- Altura de linha generosa para leitura confortável

**Fonte de Destaque (CTAs):** `Inter`
- Peso: 600
- Letter-spacing levemente aumentado para impacto

### Escala Tipográfica

| Elemento | Tamanho Mobile | Tamanho Desktop | Peso | Line-height | Letter-spacing |
|----------|---------------|-----------------|------|-------------|----------------|
| H1 | 2rem (32px) | 3.5rem (56px) | 700 | 1.1 | -0.02em |
| H2 | 1.75rem (28px) | 2.5rem (40px) | 700 | 1.2 | -0.01em |
| H3 | 1.5rem (24px) | 1.875rem (30px) | 600 | 1.3 | 0 |
| H4 | 1.25rem (20px) | 1.25rem (20px) | 600 | 1.4 | 0 |
| Body Large | 1.125rem (18px) | 1.25rem (20px) | 400 | 1.7 | 0 |
| Body | 1rem (16px) | 1rem (16px) | 400 | 1.6 | 0 |
| Body Small | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.5 | 0 |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 500 | 1.4 | 0.01em |
| Button | 1rem (16px) | 1.125rem (18px) | 600 | 1 | 0.02em |

### CSS Tipografia
```css
/* Importação Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* Font Families */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.5rem;    /* 40px */
  --font-size-5xl: 3.5rem;    /* 56px */
  
  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.2;
  --line-height-normal: 1.3;
  --line-height-relaxed: 1.4;
  --line-height-loose: 1.6;
  --line-height-xl: 1.7;
}

/* Classes de Tipografia */
.text-h1 {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: -0.02em;
  color: var(--color-neutral-900);
}

.text-h2 {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-snug);
  letter-spacing: -0.01em;
  color: var(--color-neutral-900);
}

.text-h3 {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-900);
}

.text-body-large {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-xl);
  color: var(--color-neutral-700);
}

.text-body {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-loose);
  color: var(--color-neutral-700);
}
```

---

## 📐 Espaçamentos e Grids

### Sistema de Espaçamento (8px base)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 0.25rem (4px) | Micro ajustes |
| `--space-2` | 0.5rem (8px) | Ícones + texto |
| `--space-3` | 0.75rem (12px) | Padding interno pequeno |
| `--space-4` | 1rem (16px) | Padding padrão |
| `--space-6` | 1.5rem (24px) | Gap entre elementos |
| `--space-8` | 2rem (32px) | Seções internas |
| `--space-12` | 3rem (48px) | Espaçamento entre blocos |
| `--space-16` | 4rem (64px) | Seções médias |
| `--space-20` | 5rem (80px) | Seções grandes |
| `--space-24` | 6rem (96px) | Hero sections |

### CSS Espaçamentos
```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
}
```

### Grid System

**Container:**
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);   /* 16px mobile */
  padding-right: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--space-6);  /* 24px tablet+ */
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--space-8);  /* 32px desktop */
    padding-right: var(--space-8);
  }
}
```

**Grid de Benefícios (3 colunas desktop, 1 coluna mobile):**
```css
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }
}

@media (min-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Grid de Depoimentos (2 colunas desktop):**
```css
.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }
}
```

---

## 🧩 Componentes

### 1. Botão CTA (Call-to-Action)

**Variantes:**
- `primary` - Azul, ação principal
- `secondary` - Branco com borda, ação secundária
- `accent` - Laranja, destaque especial (ofertas)

**Especificações:**
```css
/* Base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-8);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.02em;
  text-decoration: none;
  border-radius: 0.5rem; /* 8px */
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 56px;
}

/* Primary */
.btn-primary {
  background: var(--color-primary-600);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
}

.btn-primary:hover {
  background: var(--color-primary-700);
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -2px rgba(37, 99, 235, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px -1px rgba(37, 99, 235, 0.2);
}

/* Secondary */
.btn-secondary {
  background: white;
  color: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.btn-secondary:hover {
  background: var(--color-primary-50);
  border-color: var(--color-primary-700);
}

/* Accent (para ofertas especiais) */
.btn-accent {
  background: var(--color-accent-500);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(245, 158, 11, 0.3);
}

.btn-accent:hover {
  background: var(--color-accent-600);
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -2px rgba(245, 158, 11, 0.4);
}

/* Large (Hero) */
.btn-large {
  padding: var(--space-5) var(--space-10);
  font-size: var(--font-size-xl);
  min-height: 64px;
  border-radius: 0.75rem;
}

/* Full Width (Mobile) */
.btn-full {
  width: 100%;
}
```

**Exemplo Visual:**
```
┌─────────────────────────────────┐
│  [Ícone] Quero Ajudar Meu Filho │
│         (btn-primary)           │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│   Ver Conteúdo do E-book        │
│        (btn-secondary)          │
└─────────────────────────────────┘
```

---

### 2. Card de Benefício

**Estrutura:**
```
┌─────────────────────────────────────┐
│  ┌─────┐                            │
│  │ 😊  │  Título do Benefício       │
│  └─────┘                            │
│                                     │
│  Descrição do benefício em texto    │
│  que explica o valor para o pai.    │
└─────────────────────────────────────┘
```

**CSS:**
```css
.benefit-card {
  background: white;
  border-radius: 1rem; /* 16px */
  padding: var(--space-6);
  border: 1px solid var(--color-neutral-200);
  transition: all 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary-200);
}

.benefit-icon {
  width: 48px;
  height: 48px;
  background: var(--color-primary-100);
  color: var(--color-primary-600);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
  font-size: 1.5rem;
}

.benefit-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-2);
}

.benefit-description {
  font-size: var(--font-size-base);
  color: var(--color-neutral-600);
  line-height: var(--line-height-loose);
}
```

---

### 3. Card de Depoimento

**Estrutura:**
```
┌─────────────────────────────────────┐
│  "                                 │
│  O e-book mudou completamente       │
│  nossa rotina. Meu filho está       │
│  muito mais focado e eu finalmente  │
│  entendo como ajudá-lo."            │
│                                     │
│  ─────────────────────────────────  │
│  ┌────┐  Maria Silva                │
│  │ 👩 │  Mãe do Pedro, 8 anos       │
│  └────┘                             │
└─────────────────────────────────────┘
```

**CSS:**
```css
.testimonial-card {
  background: var(--color-neutral-50);
  border-radius: 1rem;
  padding: var(--space-8);
  position: relative;
}

.testimonial-quote {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-xl);
  color: var(--color-neutral-700);
  font-style: italic;
  margin-bottom: var(--space-6);
}

.testimonial-quote::before {
  content: '"';
  font-size: 4rem;
  color: var(--color-primary-200);
  position: absolute;
  top: var(--space-4);
  left: var(--space-6);
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-neutral-200);
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary-100);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.testimonial-name {
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-900);
  font-size: var(--font-size-base);
}

.testimonial-role {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
}
```

---

### 4. Seção de Preço

**Estrutura:**
```
┌─────────────────────────────────────┐
│                                     │
│      Invista no Futuro do Seu       │
│              Filho                  │
│                                     │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │      E-book Completo        │    │
│  │                             │    │
│  │      De R$ 97,00            │    │
│  │      Por R$ 47,00           │    │
│  │      ✓ 120 páginas          │    │
│  │      ✓ Bônus inclusos       │    │
│  │      ✓ Acesso vitalício     │    │
│  │                             │    │
│  │  [Comprar Agora]            │    │
│  │                             │    │
│  │  7 dias de garantia         │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

**CSS:**
```css
.pricing-section {
  background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-800) 100%);
  padding: var(--space-20) 0;
  color: white;
}

.pricing-card {
  background: white;
  border-radius: 1.5rem;
  padding: var(--space-10);
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.25);
}

.pricing-badge {
  display: inline-block;
  background: var(--color-accent-500);
  color: white;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  padding: var(--space-2) var(--space-4);
  border-radius: 9999px;
  margin-bottom: var(--space-4);
}

.pricing-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-neutral-900);
  margin-bottom: var(--space-6);
}

.pricing-original {
  font-size: var(--font-size-lg);
  color: var(--color-neutral-400);
  text-decoration: line-through;
  margin-bottom: var(--space-2);
}

.pricing-current {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-600);
  margin-bottom: var(--space-6);
}

.pricing-current span {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-8) 0;
  text-align: left;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  color: var(--color-neutral-700);
  font-size: var(--font-size-base);
}

.pricing-features li::before {
  content: '✓';
  color: var(--color-success-500);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.pricing-guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-neutral-200);
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
}
```

---

## ✨ Animações

### Transições Base
```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-bounce: 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Hover Effects
```css
/* Cards */
.card-hover {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
}

/* Botões */
.btn-hover {
  transition: all var(--transition-fast);
}

.btn-hover:hover {
  transform: translateY(-2px);
}

.btn-hover:active {
  transform: translateY(0);
}

/* Links */
.link-hover {
  position: relative;
  text-decoration: none;
}

.link-hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width var(--transition-base);
}

.link-hover:hover::after {
  width: 100%;
}
```

### Scroll Animations (CSS)
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}

/* Stagger delays para múltiplos elementos */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }

/* Scale In (para ícones) */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.4s var(--transition-bounce) forwards;
}
```

### Intersection Observer (JavaScript)
```javascript
// Adicionar classe quando elemento entra na viewport
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Uso: document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```

---

## 📱 Responsividade (Mobile-First)

### Breakpoints
```css
/* Mobile First - Base styles para mobile */

/* Tablet */
@media (min-width: 768px) {
  /* Ajustes tablet */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Ajustes desktop */
}

/* Large Desktop */
@media (min-width: 1280px) {
  /* Ajustes large desktop */
}
```

### Padrões Responsivos

**Tipografia:**
```css
/* Mobile (default) */
h1 { font-size: 2rem; }
h2 { font-size: 1.75rem; }

/* Tablet+ */
@media (min-width: 768px) {
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
}

/* Desktop+ */
@media (min-width: 1024px) {
  h1 { font-size: 3.5rem; }
  h2 { font-size: 2.5rem; }
}
```

**Espaçamento de Seções:**
```css
.section {
  padding-top: var(--space-16);    /* 64px mobile */
  padding-bottom: var(--space-16);
}

@media (min-width: 768px) {
  .section {
    padding-top: var(--space-20);  /* 80px tablet+ */
    padding-bottom: var(--space-20);
  }
}

@media (min-width: 1024px) {
  .section {
    padding-top: var(--space-24);  /* 96px desktop */
    padding-bottom: var(--space-24);
  }
}
```

**Botões:**
```css
.btn {
  width: 100%; /* Full width no mobile */
}

@media (min-width: 640px) {
  .btn {
    width: auto;
  }
}
```

---

## 🎯 Guidelines de Uso

### Hierarquia Visual

1. **Título Principal (H1)**
   - Apenas 1 por página
   - Deve comunicar o benefício principal
   - Usar em conjunto com subtítulo descritivo

2. **Títulos de Seção (H2)**
   - Separar grandes blocos de conteúdo
   - Manter consistente ao longo da página
   - Sempre seguido de conteúdo relevante

3. **Títulos de Cards (H3)**
   - Usar para benefícios, tópicos
   - Manter curtos (máx 6 palavras)

### Cores por Contexto

| Contexto | Cor | Uso |
|----------|-----|-----|
| CTAs Principais | `--color-primary-600` | Botões de compra, ações principais |
| Destaque/Oferta | `--color-accent-500` | Badge de desconto, urgência |
| Feedback Positivo | `--color-success-500` | Checkmarks, confirmações |
| Texto Principal | `--color-neutral-900` | Títulos, texto importante |
| Texto Secundário | `--color-neutral-700` | Parágrafos, descrições |

### Boas Práticas

1. **CTAs**
   - Usar verbos de ação: "Quero", "Começar", "Garantir"
   - Evitar "Clique aqui" ou "Saiba mais"
   - Manter consistente na página

2. **Cards**
   - Manter padding generoso (mínimo 24px)
   - Usar sombra sutil, nunca pesada
   - Hover deve ser suave, não dramático

3. **Depoimentos**
   - Incluir nome e contexto (mãe de...)
   - Foto/avatar aumenta credibilidade
   - Aspas grandes como elemento visual

4. **Preço**
   - Sempre mostrar preço original riscado
   - Destacar economia
   - Garantia próxima ao botão de compra

### Acessibilidade

- Contraste mínimo 4.5:1 para texto
- Botões mínimo 44x44px para touch
- Foco visível em todos elementos interativos
- Alt text em todas imagens

---

## 📦 CSS Completo (Tokens)

```css
/* ========================================
   DESIGN SYSTEM - E-BOOK TDAH
   Tokens CSS Completos
   ======================================== */

:root {
  /* Cores Primárias */
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;
  --color-primary-800: #1E40AF;
  --color-primary-900: #1E3A8A;

  /* Cores de Destaque */
  --color-accent-50: #FFFBEB;
  --color-accent-100: #FEF3C7;
  --color-accent-200: #FDE68A;
  --color-accent-300: #FCD34D;
  --color-accent-400: #FBBF24;
  --color-accent-500: #F59E0B;
  --color-accent-600: #D97706;
  --color-accent-700: #B45309;

  /* Cores Neutras */
  --color-neutral-50: #F9FAFB;
  --color-neutral-100: #F3F4F6;
  --color-neutral-200: #E5E7EB;
  --color-neutral-300: #D1D5DB;
  --color-neutral-400: #9CA3AF;
  --color-neutral-500: #6B7280;
  --color-neutral-600: #4B5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1F2937;
  --color-neutral-900: #111827;

  /* Cores de Feedback */
  --color-success-50: #ECFDF5;
  --color-success-500: #10B981;
  --color-success-600: #059669;
  --color-error-50: #FEF2F2;
  --color-error-500: #EF4444;
  --color-error-600: #DC2626;

  /* Tipografia */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.5rem;
  --font-size-5xl: 3.5rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.1;
  --line-height-snug: 1.2;
  --line-height-normal: 1.3;
  --line-height-relaxed: 1.4;
  --line-height-loose: 1.6;
  --line-height-xl: 1.7;

  /* Espaçamentos */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Bordas */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-primary: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
  --shadow-primary-lg: 0 8px 12px -2px rgba(37, 99, 235, 0.3);

  /* Transições */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-bounce: 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 📋 Checklist de Implementação

- [ ] Importar fonte Inter do Google Fonts
- [ ] Configurar tokens CSS no `:root`
- [ ] Implementar container responsivo
- [ ] Criar componente Button com variantes
- [ ] Criar componente BenefitCard
- [ ] Criar componente TestimonialCard
- [ ] Criar componente PricingCard
- [ ] Adicionar animações de scroll
- [ ] Testar em mobile (320px+)
- [ ] Testar contraste de cores
- [ ] Verificar foco em elementos interativos

---

*Design System criado para E-book TDAH - Última atualização: Fevereiro 2026*
