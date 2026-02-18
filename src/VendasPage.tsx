import { useEffect } from 'react'
import './styles/vendas.css'

// Ícones SVG
const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const IconLock = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const VendasPage = () => {
  useEffect(() => {
    const viewport = document.querySelector('meta[name=viewport]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    }
  }, [])

  const scrollToOferta = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="vendas-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">Garantia de 7 Dias</div>
        
        <h1 className="hero-title">
          Descubra O Segredo Que Pais De Crianças Com TDAH Estão Usando Para
          <span className="highlight"> Transformar Seus Filhos Em Apenas 2-3 Semanas</span>
        </h1>

        <p className="hero-subtitle">
          Sem depender apenas de consultas medicas caras. Sem sentir-se um pai incompetente. Sem culpa.
        </p>

        <button className="cta-button" onClick={scrollToOferta}>
          QUERO TRANSFORMAR MEU FILHO
          <IconArrow />
        </button>
      </section>

      {/* PROBLEMA */}
      <section className="section">
        <div className="section-tag">Voce se identifica?</div>
        
        <ul>
          <li>Seu filho se sente "diferente" ou "errado"</li>
          <li>Ja gastou fortunas em terapias sem resultado</li>
          <li>Consultas medicas sao rapidas demais</li>
          <li>A escola reclama mas nao ajuda</li>
          <li>Cansado de ser julgado como pai</li>
        </ul>
      </section>

      {/* STORY */}
      <section className="section section-cinza">
        <div className="section-tag">A Historia Real</div>
        
        <h2>"Eu Achava Que Estava Fazendo Tudo Certo... Ate Perceber O Que Faltava"</h2>

        <p>
          Quando meu filho recebeu o diagnostico de TDAH, eu achei que a solucao fosse simples: 
          levar nos profissionais, seguir as orientacoes e esperar melhorar. Mas nao foi bem assim.
        </p>
        
        <ul>
          <li>As consultas medicas eram rapidas</li>
          <li>Os psicologos davam orientacoes genericas</li>
          <li>A escola reclamava dos comportamentos, mas nao oferecia solucoes</li>
        </ul>

        <div className="destaque">
          <h3>O Momento da Virada</h3>
          <p>
            Foi quando percebi: eu nao precisava substituir os profissionais. 
            Eu precisava ENTENDER meu filho o suficiente para extrair o MAXIMO do que cada um podia oferecer.
          </p>
          <p>
            Quando comecei a compreender como o cerebro dele funcionava — por que ele perdia o foco, 
            por que explosoes emocionais aconteciam — tudo mudou.
          </p>
        </div>
      </section>

      {/* CONTEUDO */}
      <section className="section">
        <div className="section-tag">O Que Voce Vai Encontrar</div>
        
        <h2>O "Guia Digital: TDAH" e uma conversa franca, acolhedora e baseada em ciencia.</h2>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">01</span>
            <span className="modulo-titulo">O Que E TDAH (De Verdade)?</span>
          </div>
          <p className="modulo-desc">Entenda a neurobiologia por tras do TDAH sem termos medicos complicados.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Clareza para deixar a culpa de lado.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">02</span>
            <span className="modulo-titulo">Desatencao ou Desinteresse?</span>
          </div>
          <p className="modulo-desc">Aprenda a distinguir quando e TDAH e quando e falta de estimulo.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Capacidade de reativar o interesse.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">03</span>
            <span className="modulo-titulo">O Cerebro do Seu Filho</span>
          </div>
          <p className="modulo-desc">Uma viagem pela neurociencia acessivel. Entenda dopamina e neuroplasticidade.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Compreensao profunda para lutar POR seu filho.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">04</span>
            <span className="modulo-titulo">O Poder do Reconhecimento</span>
          </div>
          <p className="modulo-desc">A "Proporcao Magica" de Gottman. Aprenda a validar seu filho.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Relacionamento profundo baseado em confianca.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">05</span>
            <span className="modulo-titulo">Escola: Aliada ou Vilã?</span>
          </div>
          <p className="modulo-desc">Conheca a Lei 14.254/2021. Aprenda que adaptacoes pedir e como negociar.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Um filho se sentindo apoiado na escola.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">06</span>
            <span className="modulo-titulo">Medicacao: Sim ou Nao?</span>
          </div>
          <p className="modulo-desc">Tudo sobre medicacao e suplementos com evidencia cientifica.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Decisoes informadas com os medicos.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">07</span>
            <span className="modulo-titulo">Suplementos e Alimentacao</span>
          </div>
          <p className="modulo-desc">O que a ciencia diz sobre omega-3, zinco, magnesio e alimentacao.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> O que incluir e o que evitar na dieta.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">08</span>
            <span className="modulo-titulo">Ansiedade, Sono e Emocoes</span>
          </div>
          <p className="modulo-desc">O TDAH raramente viaja sozinho. Entenda como ansiedade e sono afetam tudo.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Menos explosoes, mais noites tranquilas.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">09</span>
            <span className="modulo-titulo">3 Passos Para Lidar com TDAH</span>
          </div>
          <p className="modulo-desc">Um framework simples: Entender → Observar → Atuar. Plano de acao de 7 dias.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Saber exatamente o que fazer.</div>
        </div>

        <div className="modulo">
          <div className="modulo-header">
            <span className="modulo-num">10</span>
            <span className="modulo-titulo">Voce Nao Esta Sozinho</span>
          </div>
          <p className="modulo-desc">TDAH como potencial. Celebrando pequenas vitorias. Construindo uma rede de apoio.</p>
          <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> Esperanca e comunidade.</div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section section-cinza">
        <div className="section-tag">Provas Reais</div>
        
        <h2>O Que Pais Reais Estao Dizendo</h2>

        <div className="depoimento">
          <p className="depoimento-texto">
            "Quando comecei a entender que meu filho nao estava sendo desobediente, 
            mas que o cerebro dele funcionava diferente, minha abordagem mudou completamente."
          </p>
          <div className="depoimento-autor">
            <strong>Carla M.</strong> — <span>mae de Pedro (9 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "Antes eu ia aos medicos sem saber o que perguntar. Depois que entendi o basico da neurociencia, 
            consegui descrever os sintomas com precisao."
          </p>
          <div className="depoimento-autor">
            <strong>Rodrigo T.</strong> — <span>pai de Valentina (7 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "A escola sempre reclamava. Com as informacoes deste guia, soube pedir as adaptacoes certas citando a lei. 
            Hoje temos uma professora parceira."
          </p>
          <div className="depoimento-autor">
            <strong>Fernanda L.</strong> — <span>mae de Lucas (10 anos)</span>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="oferta">
        <div className="oferta-box">
          <div className="oferta-tag">Oferta Especial</div>
          
          <h2 className="oferta-titulo">Guia Digital: TDAH</h2>
          
          <p className="oferta-subtitle">O guia completo para pais que querem entender e ajudar seus filhos</p>

          <div className="preco">
            <div className="preco-antigo">De R$ 197,00</div>
            <div className="preco-novo">R$ 97,00</div>
            <div className="preco-parcela">ou 12x de R$ 9,74</div>
          </div>

          <button className="cta-button">
            QUERO ACESSO AGORA
            <IconArrow />
          </button>

          <div className="garantia">
            <IconLock />
            <div className="garantia-texto">
              <strong>Garantia Blindada de 7 Dias</strong>
              <p>Se voce nao ficar satisfeito, devolvemos 100% do seu dinheiro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>2025 Guia Digital TDAH. Todos os direitos reservados.</p>
        <p>Este material nao substitui orientacao medica.</p>
      </footer>
    </div>
  )
}

export default VendasPage
