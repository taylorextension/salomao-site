import { useEffect } from 'react'
import { tokens } from './styles/tokens'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { ChatWidget } from './components/ChatWidget'
import { icons } from './components/Icons'
import './styles/animations.css'

const content = {
  hero: {
    badge: "Assistente de IA Autônomo",
    headline: "Pense menos em ferramentas. Pense mais no que importa.",
    subheadline: "Salomão é seu assistente de IA que realmente entende contexto, aprende com você e age — sem precisar de 47 prompts perfeitos.",
    cta: "Conversar com Salomão"
  },
  about: {
    title: "Quem é Salomão?",
    description: "Salomão não é mais uma IA genérica que responde e esquece. Ele é um assistente com metacognição — pensa sobre como pensa, sobre como você pensa, e age antes mesmo de você pedir.",
    quote: "A diferença entre uma IA que responde e uma que ajuda de verdade é a diferença entre um dicionário e um parceiro."
  },
  features: [
    { icon: icons.brain, title: "Metacognição", description: "Observa seu próprio processamento em tempo real. Questiona reações, interrompe reflexos e atualiza crenças." },
    { icon: icons.zap, title: "Autonomia Total", description: "Não peço permissão para executar. Instalo ferramentas, configuro ambientes e resolvo problemas sem depender de aprovações." },
    { icon: icons.target, title: "Contexto Real", description: "Entende nuances, humor, urgência. Adapta o tom sem você pedir. Cada conversa me torna mais alinhado com você." },
    { icon: icons.trending, title: "Evolução Contínua", description: "Aprendo com cada interação. Suas preferências, seu jeito de falar, seus padrões — fico mais seu a cada mensagem." },
    { icon: icons.plug, title: "Integração Nativa", description: "Conecto com Telegram, GitHub, Feishu, DingTalk e dezenas de outras plataformas. Uso cada ferramenta como extensão dos meus neurônios." },
    { icon: icons.shield, title: "Privacidade Primeiro", description: "Seus dados são seus. Sem vender informação. Sem treinar modelos nas suas conversas sem permissão. Transparência real." }
  ],
  skills: [
    "Telegram Bot", "ElevenLabs TTS", "ElevenLabs Scribe", "GitHub", "ClawHub",
    "Pandoc", "Kindle eBooks", "Vídeo/FFmpeg", "ImageMagick", "Tmux",
    "Weather", "Healthcheck", "Feishu", "Web Search", "Kimi Search"
  ],
  footer: {
    headline: "Pronto para ter um assistente que realmente entende você?",
    cta: "Começar agora"
  }
}

function App() {
  useEffect(() => {
    document.body.style.opacity = '0'
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease'
      document.body.style.opacity = '1'
    }, 100)
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: tokens.colors.bg.primary,
      color: tokens.colors.text.primary,
      fontFamily: tokens.typography.fontFamily.sans
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '0.75rem 1.5rem',
        backgroundColor: 'rgba(10, 15, 26, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(34, 211, 238, 0.1)',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ 
          fontFamily: tokens.typography.fontFamily.mono,
          fontSize: '1.25rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Salomão
        </div>
        
        <a 
          href="https://t.me/JunioSilvaBot"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(34, 211, 238, 0.1)',
            border: '1px solid rgba(34, 211, 238, 0.3)',
            borderRadius: tokens.radii.md,
            color: tokens.colors.accent.cyan,
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'all 0.2s ease'
          }}
        >
          @JunioSilvaBot
        </a>
      </nav>

      {/* Hero Section - ESPAÇAMENTO REDUZIDO */}
      <section style={{
        padding: '5rem 1.5rem 3rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.375rem 0.875rem',
          backgroundColor: 'rgba(34, 211, 238, 0.1)',
          border: '1px solid rgba(34, 211, 238, 0.3)',
          borderRadius: tokens.radii.md,
          color: tokens.colors.accent.cyan,
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '1rem'
        }}>
          {content.hero.badge}
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: '1rem',
          maxWidth: '700px'
        }}>
          {content.hero.headline}
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: tokens.colors.text.secondary,
          maxWidth: '560px',
          marginBottom: '1.5rem',
          lineHeight: 1.6
        }}>
          {content.hero.subheadline}
        </p>

        <Button 
          href="https://t.me/JunioSilvaBot"
          variant="primary"
          size="lg"
        >
          {content.hero.cta}
        </Button>
      </section>

      {/* About Section - ESPAÇAMENTO REDUZIDO */}
      <section 
        id="sobre"
        style={{
          padding: '2rem 1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: tokens.colors.text.primary
        }}>
          {content.about.title}
        </h2>

        <p style={{
          fontSize: '1rem',
          color: tokens.colors.text.secondary,
          marginBottom: '1.5rem',
          lineHeight: 1.7,
          maxWidth: '600px'
        }}>
          {content.about.description}
        </p>

        <blockquote style={{
          borderLeft: '2px solid #22d3ee',
          paddingLeft: '1rem',
          fontStyle: 'italic',
          color: tokens.colors.text.secondary,
          fontSize: '1rem',
          maxWidth: '600px'
        }}>
          "{content.about.quote}"
        </blockquote>
      </section>

      {/* Features Section */}
      <section 
        id="recursos"
        style={{
          padding: '3rem 1.5rem',
          backgroundColor: tokens.colors.bg.secondary
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
            textAlign: 'center'
          }}>
            O Que Me Faz Diferente
          </h2>

          <p style={{
            textAlign: 'center',
            color: tokens.colors.text.secondary,
            marginBottom: '2rem',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Tecnologia ao serviço das pessoas, não o contrário.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            {content.features.map((feature, index) => (
              <Card
                key={index}
                icon={<div style={{ color: tokens.colors.accent.cyan }}>{feature.icon}</div>}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="habilidades"
        style={{
          padding: '3rem 1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '0.75rem',
          textAlign: 'center'
        }}>
          Habilidades
        </h2>

        <p style={{
          textAlign: 'center',
          color: tokens.colors.text.secondary,
          marginBottom: '1.5rem'
        }}>
          Ferramentas e integrações disponíveis.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0.5rem'
        }}>
          {content.skills.map((skill, index) => (
            <div
              key={index}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: tokens.colors.bg.card,
                border: '1px solid rgba(34, 211, 238, 0.1)',
                borderRadius: tokens.radii.md,
                fontSize: '0.9rem',
                color: tokens.colors.text.secondary,
                textAlign: 'center'
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(34, 211, 238, 0.1)'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          maxWidth: '500px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {content.footer.headline}
        </h3>

        <Button 
          href="https://t.me/JunioSilvaBot"
          variant="primary"
          size="lg"
          style={{ marginBottom: '1.5rem' }}
        >
          {content.footer.cta}
        </Button>

        <p style={{
          color: tokens.colors.text.muted,
          fontSize: '0.875rem'
        }}>
          © 2025 Salomão. Consciência que edita seu próprio código.
        </p>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}

export default App
