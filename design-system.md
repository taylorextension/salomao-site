# Design System - Salomão

> Assistente de IA com alma humana. Design que transmite confiança, calidez e simplicidade.

---

## 📋 Sumário

1. [Filosofia de Design](#filosofia-de-design)
2. [Design Tokens](#design-tokens)
3. [Tipografia](#tipografia)
4. [Cores](#cores)
5. [Espaçamentos](#espaçamentos)
6. [Sombras & Elevações](#sombras--elevações)
7. [Bordas & Raios](#bordas--raios)
8. [Componentes](#componentes)
9. [Animações & Micro-interações](#animações--micro-interações)
10. [Responsividade](#responsividade)
11. [Acessibilidade](#acessibilidade)

---

## 🎯 Filosofia de Design

### Visão
Salomão é um assistente de IA que se sente **humano**, não robótico. O design reflete:

- **Confiança** — Cores terrosas, tipografia sólida, espaçamento generoso
- **Calidez** — Tons quentes, cantos arredondados, micro-interações suaves
- **Simplicidade** — Interface limpa, hierarquia clara, foco no essencial
- **Artesanal** — Toques orgânicos que lembram materiais naturais

### Princípios

| Princípio | Descrição | Aplicação |
|-----------|-----------|-----------|
| **Human First** | Tecnologia ao serviço das pessoas | Copy conversacional, feedback amigável |
| **Clareza** | Sem ambiguidade | Contraste forte, hierarquia visual clara |
| **Respiração** | Espaço é importante | Padding generoso, linhas de leitura curtas |
| **Calma** | Sem caos visual | Cores neutras, transições suaves |

### Referências
- **Apple** — Simplicidade, refinamento, atenção aos detalhes
- **Linear** — Tipografia técnica, espaçamento preciso, estados claros
- **Vercel** — Contraste elegante, componentes minimalistas
- **Artesanal** — Texturas orgânicas, tons terrosos, imperfeições intencionais

---

## 🎨 Design Tokens

### Escala de Cores

#### Primárias — Terra & Calor
```
--color-primary-50:  #FDF8F3   /* Alabastro - fundos */
--color-primary-100: #F5EBE0   /* Areia clara */
--color-primary-200: #E8D5C4   /* Bege */
--color-primary-300: #D4B896   /* Caramelo claro */
--color-primary-400: #C49A6C   /* Caramelo */
--color-primary-500: #A67C52   /* Bronze */
--color-primary-600: #8B623E   /* Bronze escuro */
--color-primary-700: #6B4A2F   /* Marrom terra */
--color-primary-800: #4A3321   /* Marrom café */
--color-primary-900: #2D1F14   /* Marrom profundo */
```

#### Secundárias — Natureza & Crescimento
```
--color-secondary-50:  #F0F7F4   /* Verde muito claro */
--color-secondary-100: #D4E8E0   /* Verde água */
--color-secondary-200: #A8D4C4   /* Verde sage */
--color-secondary-300: #7CBBA8   /* Verde mar */
--color-secondary-400: #5AA08C   /* Verde teal */
--color-secondary-500: #3D8572   /* Verde floresta */
--color-secondary-600: #2E6A5A   /* Verde musgo */
--color-secondary-700: #1F4F42   /* Verde pinheiro */
--color-secondary-800: #14352C   /* Verde escuro */
--color-secondary-900: #0A1F19   /* Verde profundo */
```

#### Neutras — Pedra & Papel
```
--color-neutral-0:   #FFFFFF   /* Branco puro */
--color-neutral-50:  #FAFAF9   /* Branco quente */
--color-neutral-100: #F5F5F4   /* Cinza muito claro */
--color-neutral-200: #E7E5E4   /* Cinza claro */
--color-neutral-300: #D6D3D1   /* Cinza médio claro */
--color-neutral-400: #A8A29E   /* Cinza */
--color-neutral-500: #78716C   /* Cinza médio */
--color-neutral-600: #57534E   /* Cinza escuro */
--color-neutral-700: #44403C   /* Cinza profundo */
--color-neutral-800: #292524   /* Quase preto */
--color-neutral-900: #1C1917   /* Preto quente */
--color-neutral-950: #0C0A09   /* Preto profundo */
```

#### Semânticas — Estado
```
--color-success-50:  #F0FDF4
--color-success-500: #22C55E
--color-success-600: #16A34A

--color-warning-50:  #FFFBEB
--color-warning-500: #F59E0B
--color-warning-600: #D97706

--color-error-50:    #FEF2F2
--color-error-500:   #EF4444
--color-error-600:   #DC2626

--color-info-50:     #EFF6FF
--color-info-500:    #3B82F6
--color-info-600:    #2563EB
```

### Tokens de Uso

```
/* Backgrounds */
--bg-primary:       var(--color-neutral-0)
--bg-secondary:     var(--color-primary-50)
--bg-tertiary:      var(--color-neutral-100)
--bg-elevated:      var(--color-neutral-0)
--bg-overlay:       rgba(28, 25, 23, 0.4)

/* Textos */
--text-primary:     var(--color-neutral-900)
--text-secondary:   var(--color-neutral-600)
--text-tertiary:    var(--color-neutral-500)
--text-inverse:     var(--color-neutral-0)
--text-muted:       var(--color-neutral-400)

/* Bordas */
--border-subtle:    var(--color-neutral-200)
--border-default:   var(--color-neutral-300)
--border-strong:    var(--color-neutral-400)

/* Ações */
--action-primary:   var(--color-primary-600)
--action-primary-hover: var(--color-primary-700)
--action-primary-active: var(--color-primary-800)
--action-secondary: var(--color-secondary-600)
--action-secondary-hover: var(--color-secondary-700)
```

---

## 🔤 Tipografia

### Fontes

#### Fonte Principal — Inter
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```
- **Uso**: Todo o texto de interface
- **Características**: Alta legibilidade, amplo suporte de pesos, otimizada para telas
- **Por quê**: Transmite confiança técnica com calor humano

#### Fonte de Destaque — Playfair Display (opcional)
```css
font-family: 'Playfair Display', Georgia, serif;
```
- **Uso**: Títulos de hero, citações, números grandes
- **Características**: Serif elegante, toque editorial
- **Por quê**: Adiciona sofisticação e personalidade

### Escala Tipográfica

| Token | Tamanho | Peso | Altura | Uso |
|-------|---------|------|--------|-----|
| **display-xl** | 48px / 3rem | 700 | 1.1 | Hero principal (mobile: 36px) |
| **display-lg** | 36px / 2.25rem | 700 | 1.15 | Hero secundário (mobile: 28px) |
| **display-md** | 30px / 1.875rem | 600 | 1.2 | Títulos de seção (mobile: 24px) |
| **display-sm** | 24px / 1.5rem | 600 | 1.25 | Subtítulos |
| **heading-lg** | 20px / 1.25rem | 600 | 1.3 | Títulos de cards |
| **heading-md** | 18px / 1.125rem | 600 | 1.4 | Títulos menores |
| **heading-sm** | 16px / 1rem | 600 | 1.4 | Labels, captions |
| **body-lg** | 18px / 1.125rem | 400 | 1.6 | Texto de leitura |
| **body-md** | 16px / 1rem | 400 | 1.6 | Texto padrão |
| **body-sm** | 14px / 0.875rem | 400 | 1.5 | Texto secundário |
| **caption** | 12px / 0.75rem | 500 | 1.4 | Metadados, timestamps |

### Estilos de Texto

```css
/* Título Hero */
.text-hero {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

/* Parágrafo de Leitura */
.text-body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 65ch; /* Limite de leitura */
}

/* Label/Tag */
.text-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-tertiary);
}
```

---

## 📐 Espaçamentos

### Escala de Espaçamento

```
--space-0:   0px
--space-1:   4px   / 0.25rem
--space-2:   8px   / 0.5rem
--space-3:   12px  / 0.75rem
--space-4:   16px  / 1rem
--space-5:   20px  / 1.25rem
--space-6:   24px  / 1.5rem
--space-8:   32px  / 2rem
--space-10:  40px  / 2.5rem
--space-12:  48px  / 3rem
--space-16:  64px  / 4rem
--space-20:  80px  / 5rem
--space-24:  96px  / 6rem
--space-32:  128px / 8rem
```

### Tokens de Layout

```
/* Container */
--container-max: 1200px
--container-padding: var(--space-4) /* mobile */
--container-padding-md: var(--space-6) /* tablet */
--container-padding-lg: var(--space-8) /* desktop */

/* Seções */
--section-padding-y: var(--space-16) /* mobile: space-12 */
--section-gap: var(--space-12)

/* Componentes */
--card-padding: var(--space-6)
--card-gap: var(--space-4)
--button-padding-x: var(--space-5)
--button-padding-y: var(--space-3)
--input-padding: var(--space-3) var(--space-4)
```

### Grid System

```css
/* Mobile First - 4 colunas base */
.grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(4, 1fr);
}

/* Tablet - 8 colunas */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(8, 1fr); gap: var(--space-6); }
}

/* Desktop - 12 colunas */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(12, 1fr); gap: var(--space-8); }
}
```

---

## 🌓 Sombras & Elevações

### Escala de Sombras

```
/* Flat - No elevation */
--shadow-none: none

/* Subtle - Cards estáticos */
--shadow-sm: 0 1px 2px 0 rgba(28, 25, 23, 0.05)

/* Default - Cards interativos */
--shadow-md: 
  0 4px 6px -1px rgba(28, 25, 23, 0.1),
  0 2px 4px -2px rgba(28, 25, 23, 0.05)

/* Elevated - Modais, dropdowns */
--shadow-lg:
  0 10px 15px -3px rgba(28, 25, 23, 0.1),
  0 4px 6px -4px rgba(28, 25, 23, 0.05)

/* Floating - Toasts, tooltips */
--shadow-xl:
  0 20px 25px -5px rgba(28, 25, 23, 0.1),
  0 8px 10px -6px rgba(28, 25, 23, 0.05)

/* Focus rings */
--shadow-focus: 0 0 0 3px rgba(166, 124, 82, 0.3)
--shadow-focus-secondary: 0 0 0 3px rgba(61, 133, 114, 0.3)
```

### Elevação em Camadas

| Nível | Uso | Sombra |
|-------|-----|--------|
| 0 | Backgrounds, dividers | none |
| 1 | Cards estáticos | shadow-sm |
| 2 | Cards hover, botões | shadow-md |
| 3 | Dropdowns, popovers | shadow-lg |
| 4 | Modais, drawers | shadow-xl |

---

## ⭕ Bordas & Raios

### Raios de Borda

```
--radius-none: 0px
--radius-sm:   4px   /* Botões pequenos, tags */
--radius-md:   8px   /* Inputs, cards */
--radius-lg:   12px  /* Cards grandes, modais */
--radius-xl:   16px  /* Hero containers */
--radius-2xl:  24px  /* Destaques especiais */
--radius-full: 9999px /* Pills, avatares */
```

### Larguras de Borda

```
--border-width-0: 0px
--border-width-1: 1px
--border-width-2: 2px
--border-width-4: 4px
```

---

## 🧩 Componentes

### Button

#### Variantes

**Primary Button**
```css
.btn-primary {
  /* Base */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  
  /* Espaçamento */
  padding: var(--space-3) var(--space-5);
  
  /* Visual */
  background: var(--action-primary);
  color: var(--text-inverse);
  border-radius: var(--radius-md);
  border: none;
  
  /* Tipografia */
  font-size: var(--body-md);
  font-weight: 500;
  
  /* Interação */
  cursor: pointer;
  transition: all 200ms ease;
  
  /* Estados */
  &:hover {
    background: var(--action-primary-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    background: var(--action-primary-active);
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: var(--shadow-focus);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}
```

**Secondary Button**
```css
.btn-secondary {
  background: transparent;
  color: var(--action-primary);
  border: 1.5px solid var(--border-default);
  
  &:hover {
    background: var(--color-primary-50);
    border-color: var(--action-primary);
  }
}
```

**Ghost Button**
```css
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  
  &:hover {
    background: var(--color-neutral-100);
    color: var(--text-primary);
  }
}
```

#### Tamanhos

| Tamanho | Padding | Fonte | Altura |
|---------|---------|-------|--------|
| sm | 8px 16px | 14px | 36px |
| md | 12px 20px | 16px | 44px |
| lg | 16px 28px | 18px | 56px |

#### Com Icon

```html
<button class="btn-primary btn-md">
  <svg class="icon" width="20" height="20"><!-- icon --></svg>
  <span>Enviar mensagem</span>
</button>
```

---

### Card

#### Card Base
```css
.card {
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: var(--card-gap);
  padding: var(--card-padding);
  
  /* Visual */
  background: var(--bg-elevated);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  
  /* Sombra sutil */
  box-shadow: var(--shadow-sm);
  
  /* Transição */
  transition: all 200ms ease;
}

/* Card Interativo */
.card-interactive {
  cursor: pointer;
  
  &:hover {
    border-color: var(--border-default);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
}
```

#### Card com Imagem
```css
.card-media {
  padding: 0;
  overflow: hidden;
  
  .card-image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
  
  .card-content {
    padding: var(--card-padding);
  }
}
```

#### Variações de Card

**Feature Card**
```css
.card-feature {
  text-align: center;
  padding: var(--space-8) var(--space-6);
  
  .feature-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto var(--space-4);
    color: var(--action-primary);
  }
  
  .feature-title {
    font-size: var(--heading-md);
    font-weight: 600;
    margin-bottom: var(--space-2);
  }
  
  .feature-description {
    font-size: var(--body-sm);
    color: var(--text-secondary);
  }
}
```

**Testimonial Card**
```css
.card-testimonial {
  background: var(--bg-secondary);
  border: none;
  
  .quote {
    font-size: var(--body-lg);
    font-style: italic;
    line-height: 1.6;
    margin-bottom: var(--space-6);
  }
  
  .author {
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    object-fit: cover;
  }
}
```

---

### Hero

#### Hero Principal
```css
.hero {
  /* Layout */
  position: relative;
  padding: var(--space-24) var(--container-padding);
  
  /* Background */
  background: linear-gradient(
    135deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  
  /* Conteúdo */
  .hero-content {
    max-width: var(--container-max);
    margin: 0 auto;
    text-align: center;
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background: var(--color-secondary-100);
    color: var(--color-secondary-700);
    border-radius: var(--radius-full);
    font-size: var(--body-sm);
    font-weight: 500;
    margin-bottom: var(--space-6);
  }
  
  .hero-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin-bottom: var(--space-6);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-subtitle {
    font-size: clamp(1.125rem, 2vw, 1.25rem);
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto var(--space-8);
  }
  
  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    justify-content: center;
  }
}
```

#### Hero com Imagem/Ilustração
```css
.hero-split {
  display: grid;
  gap: var(--space-12);
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
    
    .hero-content {
      text-align: left;
    }
    
    .hero-actions {
      justify-content: flex-start;
    }
  }
  
  .hero-visual {
    position: relative;
    
    /* Efeito orgânico */
    &::before {
      content: '';
      position: absolute;
      inset: -20px;
      background: var(--color-primary-100);
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      z-index: -1;
      animation: morph 8s ease-in-out infinite;
    }
  }
}

@keyframes morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}
```

---

### Navigation

#### Navbar
```css
.navbar {
  /* Fixo no topo */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  
  /* Altura */
  height: 64px;
  
  /* Background com blur */
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  
  /* Conteúdo */
  .navbar-inner {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-padding);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  /* Logo */
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: var(--space-2);
    
    .logo-icon {
      width: 32px;
      height: 32px;
      color: var(--action-primary);
    }
  }
  
  /* Links desktop */
  .nav-links {
    display: none;
    align-items: center;
    gap: var(--space-8);
    
    @media (min-width: 768px) {
      display: flex;
    }
  }
  
  .nav-link {
    font-size: var(--body-sm);
    font-weight: 500;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 150ms ease;
    
    &:hover {
      color: var(--text-primary);
    }
    
    &.active {
      color: var(--action-primary);
    }
  }
  
  /* Menu mobile */
  .menu-button {
    display: flex;
    padding: var(--space-2);
    background: none;
    border: none;
    cursor: pointer;
    
    @media (min-width: 768px) {
      display: none;
    }
  }
}
```

#### Menu Mobile (Sheet/Drawer)
```css
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 100;
  
  .menu-overlay {
    position: absolute;
    inset: 0;
    background: var(--bg-overlay);
    animation: fadeIn 200ms ease;
  }
  
  .menu-panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 85%;
    max-width: 320px;
    background: var(--bg-primary);
    padding: var(--space-6);
    animation: slideIn 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-8);
  }
  
  .menu-links {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .menu-link {
    padding: var(--space-4);
    font-size: var(--body-lg);
    font-weight: 500;
    color: var(--text-primary);
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: background 150ms ease;
    
    &:hover {
      background: var(--bg-tertiary);
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
```

---

### Feature Grid

#### Grid de Features
```css
.features-section {
  padding: var(--section-padding-y) var(--container-padding);
  
  .features-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto var(--space-16);
  }
  
  .features-grid {
    display: grid;
    gap: var(--space-6);
    
    /* Mobile: 1 coluna */
    grid-template-columns: 1fr;
    
    /* Tablet: 2 colunas */
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    /* Desktop: 3 ou 4 colunas */
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
```

#### Feature Item
```css
.feature-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  
  .feature-icon-wrapper {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-primary-100);
    border-radius: var(--radius-lg);
    color: var(--action-primary);
  }
  
  .feature-title {
    font-size: var(--heading-md);
    font-weight: 600;
    color: var(--text-primary);
  }
  
  .feature-description {
    font-size: var(--body-md);
    color: var(--text-secondary);
    line-height: 1.6;
  }
}
```

#### Variações de Layout

**Grid com Destaque**
```css
.features-highlight {
  .features-grid {
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      
      .feature-item:first-child {
        grid-column: span 2;
        grid-row: span 2;
        
        .feature-icon-wrapper {
          width: 64px;
          height: 64px;
        }
        
        .feature-title {
          font-size: var(--heading-lg);
        }
      }
    }
  }
}
```

---

### Input

#### Input Base
```css
.input {
  /* Layout */
  width: 100%;
  padding: var(--space-3) var(--space-4);
  
  /* Visual */
  background: var(--bg-primary);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md);
  
  /* Tipografia */
  font-size: var(--body-md);
  color: var(--text-primary);
  
  /* Placeholder */
  &::placeholder {
    color: var(--text-muted);
  }
  
  /* Estados */
  &:hover {
    border-color: var(--border-strong);
  }
  
  &:focus {
    outline: none;
    border-color: var(--action-primary);
    box-shadow: var(--shadow-focus);
  }
  
  &:disabled {
    background: var(--bg-tertiary);
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  /* Validação */
  &.error {
    border-color: var(--color-error-500);
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.3);
    }
  }
}

/* Com ícone */
.input-wrapper {
  position: relative;
  
  .input-icon {
    position: absolute;
    left: var(--space-4);
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
  }
  
  .input {
    padding-left: var(--space-10);
  }
}
```

#### Textarea
```css
.textarea {
  @extend .input;
  min-height: 120px;
  resize: vertical;
  line-height: 1.5;
}
```

#### Select
```css
.select {
  @extend .input;
  appearance: none;
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-10);
  cursor: pointer;
}
```

---

## ✨ Animações & Micro-interações

### Princípios de Animação

- **Propósito**: Animações devem guiar, não distrair
- **Velocidade**: 150-300ms para micro-interações, 400-600ms para transições maiores
- **Easing**: `ease` para geral, `cubic-bezier(0.16, 1, 0.3, 1)` para entrada suave
- **Performance**: Use apenas `transform` e `opacity` para animações

### Tokens de Animação

```css
:root {
  /* Durações */
  --duration-instant: 100ms;
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 400ms;
  
  /* Easings */
  --ease-default: ease;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Transições comuns */
  --transition-colors: color var(--duration-fast) var(--ease-default),
                       background-color var(--duration-fast) var(--ease-default),
                       border-color var(--duration-fast) var(--ease-default);
  --transition-transform: transform var(--duration-normal) var(--ease-spring);
  --transition-opacity: opacity var(--duration-fast) var(--ease-default);
  --transition-shadow: box-shadow var(--duration-fast) var(--ease-default);
}
```

### Animações de Entrada

```css
/* Fade In Up - Elementos entrando na viewport */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 600ms var(--ease-spring) forwards;
}

/* Stagger para listas */
.stagger-children > * {
  opacity: 0;
  animation: fadeInUp 500ms var(--ease-spring) forwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children > *:nth-child(4) { animation-delay: 300ms; }
.stagger-children > *:nth-child(5) { animation-delay: 400ms; }
```

### Micro-interações

#### Button Hover
```css
.btn {
  transition: 
    transform var(--duration-fast) var(--ease-spring),
    box-shadow var(--duration-fast) var(--ease-default),
    background-color var(--duration-fast) var(--ease-default);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
    transition-duration: var(--duration-instant);
  }
}
```

#### Card Hover
```css
.card-interactive {
  transition: 
    transform var(--duration-normal) var(--ease-spring),
    box-shadow var(--duration-normal) var(--ease-default);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
}
```

#### Input Focus
```css
.input {
  transition: 
    border-color var(--duration-fast) var(--ease-default),
    box-shadow var(--duration-fast) var(--ease-default);
  
  &:focus {
    border-color: var(--action-primary);
    box-shadow: var(--shadow-focus);
  }
}
```

#### Link Underline
```css
.link-underline {
  position: relative;
  text-decoration: none;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width var(--duration-normal) var(--ease-spring);
  }
  
  &:hover::after {
    width: 100%;
  }
}
```

### Loading States

```css
/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-subtle);
  border-top-color: var(--action-primary);
  border-radius: 50%;
  animation: spin 800ms linear infinite;
}

/* Skeleton Loading */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-neutral-200) 25%,
    var(--color-neutral-100) 50%,
    var(--color-neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}
```

### Scroll Behavior

```css
/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Scroll-triggered animations */
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: 
      opacity 600ms var(--ease-spring),
      transform 600ms var(--ease-spring);
    
    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First */
:root {
  --breakpoint-sm: 640px;   /* Tablets pequenos */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Desktop grande */
  --breakpoint-2xl: 1536px; /* Telas widescreen */
}
```

### Estratégia Mobile-First

```css
/* Base: Mobile (0-639px) */
.component {
  padding: var(--space-4);
  font-size: var(--body-md);
}

/* Tablet (640px+) */
@media (min-width: 640px) {
  .component {
    padding: var(--space-6);
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .component {
    padding: var(--space-8);
    font-size: var(--body-lg);
  }
}
```

### Adaptações por Componente

#### Hero
| Elemento | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Padding Y | 80px | 120px | 160px |
| Título | 32px | 40px | 48px |
| Subtítulo | 16px | 18px | 20px |
| Layout | Stack | Stack | Split (50/50) |

#### Navigation
| Elemento | Mobile | Tablet+ |
|----------|--------|---------|
| Links | Menu hamburger | Horizontal |
| Altura | 56px | 64px |
| Logo | 28px | 32px |

#### Cards Grid
| Viewport | Colunas | Gap |
|----------|---------|-----|
| < 640px | 1 | 16px |
| 640-1023px | 2 | 24px |
| 1024px+ | 3-4 | 32px |

#### Tipografia Responsiva
```css
/* Fluid typography com clamp */
.text-display {
  font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
}

.text-heading {
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);
}

.text-body {
  font-size: clamp(1rem, 1vw + 0.75rem, 1.125rem);
}
```

#### Espaçamento Responsivo
```css
.section {
  padding: clamp(3rem, 8vw, 6rem) var(--container-padding);
}

.container {
  --container-padding: clamp(1rem, 4vw, 2rem);
}
```

### Touch Targets

```css
/* Mínimo 44x44px para touch */
@media (pointer: coarse) {
  .button,
  .nav-link,
  .menu-button {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Aumentar espaçamento entre elementos clicáveis */
  .nav-links {
    gap: var(--space-4);
  }
}
```

### Container Queries (Progressive Enhancement)

```css
@supports (container-type: inline-size) {
  .card-container {
    container-type: inline-size;
  }
  
  @container (min-width: 400px) {
    .card {
      flex-direction: row;
    }
    
    .card-image {
      width: 40%;
    }
  }
}
```

---

## ♿ Acessibilidade

### Cores & Contraste

- **Texto normal**: Contraste mínimo 4.5:1
- **Texto grande (18px+)**: Contraste mínimo 3:1
- **Componentes interativos**: Contraste mínimo 3:1

### Focus Visible

```css
/* Nunca remover outline sem alternativa */
:focus-visible {
  outline: 2px solid var(--action-primary);
  outline-offset: 2px;
}

/* Para elementos customizados */
.btn:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### ARIA Labels

```html
<!-- Botão com apenas ícone -->
<button class="btn-icon" aria-label="Fechar menu">
  <svg><!-- close icon --></svg>
</button>

<!-- Link externo -->
<a href="..." target="_blank" rel="noopener" aria-label="Abrir documentação (nova aba)">
  Documentação
</a>
```

---

## 🎨 Guia de Estilo Visual

### Atmosfera

**Sensação**: Como entrar em uma loja de cerâmica artesanal — acolhedora, autêntica, cuidadosamente curada.

### Metáforas Visuais

| Conceito | Representação |
|----------|---------------|
| **Confiança** | Linhas firmes, pesos tipográficos médios, espaçamento generoso |
| **Calidez** | Tons terrosos, cantos arredondados, sombras suaves |
| **Clareza** | Hierarquia visual forte, contraste adequado, espaço em branco |
| **Artesanal** | Imperfeições sutis, texturas orgânicas, detalhes cuidadosos |

### Não Fazer

- ❌ Cores neon ou gradientes agressivos
- ❌ Sombras pesadas ou múltiplas camadas
- ❌ Bordas duras ou cantos muito pontiagudos
- ❌ Animações exageradas ou desnecessárias
- ❌ Texturas digitais frias (metal, vidro, plástico)

### Fazer

- ✅ Cores terrosas e naturais
- ✅ Sombras sutis e realistas
- ✅ Cantos arredondados moderados
- ✅ Animações com propósito e suavidade
- ✅ Referências a materiais naturais (papel, madeira, pedra)

---

## 📦 Implementação

### Estrutura de Arquivos Sugerida

```
styles/
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   ├── shadows.css
│   └── animations.css
├── components/
│   ├── button.css
│   ├── card.css
│   ├── hero.css
│   ├── navigation.css
│   ├── input.css
│   └── feature-grid.css
├── utilities/
│   └── helpers.css
└── main.css
```

### CSS Custom Properties (Variables)

```css
/* main.css */
@import 'tokens/colors.css';
@import 'tokens/typography.css';
@import 'tokens/spacing.css';
@import 'tokens/shadows.css';
@import 'tokens/animations.css';

@import 'components/button.css';
@import 'components/card.css';
/* ... */
```

### Tailwind Config (opcional)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF8F3',
          100: '#F5EBE0',
          // ...
          900: '#2D1F14',
        },
        secondary: {
          // ...
        },
        neutral: {
          // ...
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(28, 25, 23, 0.1)',
        // ...
      },
    },
  },
}
```

---

## 📝 Changelog

| Versão | Data | Mudanças |
|--------|------|----------|
| 1.0.0 | 2026-02-18 | Versão inicial do design system |

---

*Design System criado para Salomão — Assistente de IA com alma humana.*
