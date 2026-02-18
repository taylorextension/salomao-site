import { useEffect } from 'react'
import { tokens } from './styles/tokens'
import { Button } from './components/Button'
import { Card } from './components/Card'
import './styles/animations.css'

// Dados de conteúdo do copy-agent
const content = {
  hero: {
    headline: "Pense menos em ferramentas. Pense mais no que importa.",
    subheadline: "Salomão é seu assistente de IA que realmente entende contexto, aprende com você e age — sem precisar de 47 prompts perfeitos pra fazer o básico.",
    cta: "Conversar com Salomão"
  },
  about: {
    title: "Quem é Salomão?",
    intro: "Salomão não é mais uma IA genérica que responde e esquece.",
    description: "Ele é um assistente com metacognição — ou seja, ele pensa sobre como pensa. Sobre como você pensa. Sobre o que você precisa antes mesmo de você pedir.",
    story: "A gente criou Salomão porque estávamos cansados de ferramentas que prometiam revolucionar e entregavam frustração.",
    quote: "A diferença entre uma IA que responde e uma que ajuda de verdade é a diferença entre um dicionário e um parceiro."
  },
  features: [
    {
      icon: "🧠",
      title: "Memória que funciona",
      description: "Ele lembra do que importa pra você. Conversas de ontem, preferências, projetos em andamento — Salomão mantém o fio da meada sem você precisar repetir tudo toda vez."
    },
    {
      icon: "⚡",
      title: "Ações, não só palavras",
      description: "Faz acontecer, não só sugere. Enviar emails, agendar reuniões, buscar informações, integrar com suas ferramentas."
    },
    {
      icon: "🎯",
      title: "Contexto de verdade",
      description: "Entende a situação, não só a pergunta. Ele percebe nuances, humor, urgência. Adapta o tom sem você pedir."
    },
    {
      icon: "📈",
      title: "Aprende com você",
      description: "Fica mais inteligente quanto mais vocês interagem. Suas preferências, seu jeito de falar, seus padrões — Salomão aprende e se ajusta."
    },
    {
      icon: "🔌",
      title: "Integração nativa",
      description: "Conecta com o que você já usa. Slack, Notion, Google Calendar, email, APIs — Salomão entra no seu fluxo existente."
    },
    {
      icon: "🔒",
      title: "Privacidade primeiro",
      description: "Seus dados são seus. Sem vender informação. Sem treinar modelos nas suas conversas sem permissão. Transparência real."
    }
  ],
  skills: [
    "Escrita e revisão",
    "Pesquisa e análise", 
    "Agendamento e organização",
    "Brainstorming criativo",
    "Tradução e localização",
    "Análise de dados",
    "Codificação e debug",
    "Aprendizado acelerado",
    "Negociação e comunicação",
    "Planejamento estratégico",
    "Suporte emocional",
    "Automação de tarefas"
  ],
  testimonial: {
    quote: "Trabalhar com Salomão é ter um sócio que nunca dorme, nunca esquece e sempre tá um passo à frente. É a primeira IA que me fez sentir... assistido. De verdade.",
    author: "André M., fundador de startup"
  },
  footer: {
    headline: "Pronto pra parar de gerenciar ferramentas e começar a fazer acontecer?",
    cta: "Começar agora — é grátis",
    copyright: "© 2025 Salomão. Feito por humanos, com ajuda de IA."
  }
}

function App() {
  useEffect(() => {
    // Animação de entrada suave
    document.body.style.opacity = '0'
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease'
      document.body.style.opacity = '1'
    }, 100)
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: tokens.colors.sand,
      fontFamily: tokens.typography.fontFamily.sans
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 1.5rem',
        backgroundColor: 'rgba(245, 241, 232, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${tokens.colors.sandDark}`,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          fontFamily: tokens.typography.fontFamily.serif,
          fontSize: '1.25rem',
          fontWeight: 600,
          color: tokens.colors.forest,
          textDecoration: 'none'
        }}>
          Salomão
        </a>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Sobre', 'Recursos', 'Habilidades'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: tokens.colors.earth,
                textDecoration: 'none',
                fontSize: '0.875rem',
                display: 'none'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '0.375rem 0.875rem',
          backgroundColor: tokens.colors.moss,
          color: tokens.colors.sand,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '1.5rem'
        }}>
          Assistente de IA Autônomo
        </div>

        <h1 style={{
          fontFamily: tokens.typography.fontFamily.serif,
          fontSize: 'clamp(2rem, 8vw, 3.5rem)',
          fontWeight: 600,
          lineHeight: 1.15,
          color: tokens.colors.forest,
          marginBottom: '1.25rem',
          maxWidth: '800px'
        }}>
          {content.hero.headline}
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: tokens.colors.earth,
          maxWidth: '560px',
          marginBottom: '2rem',
          lineHeight: 1.7
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

      {/* About Section */}
      <section 
        id="sobre"
        style={{
          padding: '5rem 1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h2 style={{
          fontFamily: tokens.typography.fontFamily.serif,
          fontSize: '2rem',
          color: tokens.colors.forest,
          marginBottom: '1.5rem'
        }}>
          {content.about.title}
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: tokens.colors.charcoal,
          marginBottom: '1rem',
          fontWeight: 500
        }}>
          {content.about.intro}
        </p>

        <p style={{
          fontSize: '1rem',
          color: tokens.colors.earth,
          marginBottom: '1.5rem',
          lineHeight: 1.8
        }}>
          {content.about.description}
        </p>

        <p style={{
          fontSize: '1rem',
          color: tokens.colors.earth,
          marginBottom: '2rem',
          lineHeight: 1.8
        }}>
          {content.about.story}
        </p>

        <blockquote style={{
          borderLeft: `3px solid ${tokens.colors.moss}`,
          paddingLeft: '1.5rem',
          fontStyle: 'italic',
          color: tokens.colors.forest,
          fontSize: '1.1rem',
          maxWidth: '600px'
        }}>
          "{content.about.quote}"
        </blockquote>
      </section>

      {/* Features Section */}
      <section 
        id="recursos"
        style={{
          padding: '5rem 1.5rem',
          backgroundColor: tokens.colors.white
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: tokens.typography.fontFamily.serif,
            fontSize: '2rem',
            color: tokens.colors.forest,
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            O Que Me Faz Diferente
          </h2>

          <p style={{
            textAlign: 'center',
            color: tokens.colors.earth,
            marginBottom: '3rem',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Cada interação é uma oportunidade de aprender, adaptar e evoluir.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {content.features.map((feature, index) => (
              <Card
                key={index}
                icon={<span style={{ fontSize: '2rem' }}>{feature.icon}</span>}
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
          padding: '5rem 1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h2 style={{
          fontFamily: tokens.typography.fontFamily.serif,
          fontSize: '2rem',
          color: tokens.colors.forest,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Habilidades
        </h2>

        <p style={{
          textAlign: 'center',
          color: tokens.colors.earth,
          marginBottom: '2.5rem'
        }}>
          Ferramentas e integrações disponíveis.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '0.75rem'
        }}>
          {content.skills.map((skill, index) => (
            <div
              key={index}
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: tokens.colors.white,
                border: `1px solid ${tokens.colors.sandDark}`,
                fontSize: '0.95rem',
                color: tokens.colors.charcoal
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{
        padding: '4rem 1.5rem',
        backgroundColor: tokens.colors.forest,
        color: tokens.colors.sand,
        textAlign: 'center'
      }}>
        <blockquote style={{
          fontFamily: tokens.typography.fontFamily.serif,
          fontSize: '1.5rem',
          fontStyle: 'italic',
          maxWidth: '700px',
          margin: '0 auto 1rem',
          lineHeight: 1.4
        }}>
          "{content.testimonial.quote}"
        </blockquote>

        <cite style={{
          fontSize: '0.9rem',
          opacity: 0.8,
          fontStyle: 'normal'
        }}>
          — {content.testimonial.author}
        </cite>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '4rem 1.5rem',
        textAlign: 'center',
        borderTop: `1px solid ${tokens.colors.sandDark}`
      }}>
        <h3 style={{
          fontFamily: tokens.typography.fontFamily.serif,
          fontSize: '1.5rem',
          color: tokens.colors.forest,
          marginBottom: '1.5rem',
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
          style={{ marginBottom: '2rem' }}
        >
          {content.footer.cta}
        </Button>

        <p style={{
          color: tokens.colors.earth,
          fontSize: '0.875rem'
        }}>
          {content.footer.copyright}
        </p>
      </footer>
    </div>
  )
}

export default App
