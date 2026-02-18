import { useEffect } from 'react'
import './styles/vendas.css'

// Icones SVG
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

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
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
          Descubra O Segredo Que Pais De Crianças Com TDAH Estao Usando Para
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

        {[
          { num: "01", titulo: "O Que E TDAH (De Verdade)?", desc: "Entenda a neurobiologia por tras do TDAH sem termos medicos complicados.", ganho: "Clareza para deixar a culpa de lado." },
          { num: "02", titulo: "Desatencao ou Desinteresse?", desc: "Aprenda a distinguir quando e TDAH e quando e falta de estimulo.", ganho: "Capacidade de reativar o interesse." },
          { num: "03", titulo: "O Cerebro do Seu Filho", desc: "Uma viagem pela neurociencia acessivel. Entenda dopamina e neuroplasticidade.", ganho: "Compreensao profunda para lutar POR seu filho." },
          { num: "04", titulo: "O Poder do Reconhecimento", desc: "A 'Proporcao Magica' de Gottman. Aprenda a validar seu filho.", ganho: "Relacionamento profundo baseado em confianca." },
          { num: "05", titulo: "Escola: Aliada ou Vilã?", desc: "Conheca a Lei 14.254/2021. Aprenda que adaptacoes pedir e como negociar.", ganho: "Um filho se sentindo apoiado na escola." },
          { num: "06", titulo: "Medicacao: Sim ou Nao?", desc: "Tudo sobre medicacao e suplementos com evidencia cientifica.", ganho: "Decisoes informadas com os medicos." },
          { num: "07", titulo: "Suplementos e Alimentacao", desc: "O que a ciencia diz sobre omega-3, zinco, magnesio e alimentacao.", ganho: "O que incluir e o que evitar na dieta." },
          { num: "08", titulo: "Ansiedade, Sono e Emocoes", desc: "O TDAH raramente viaja sozinho. Entenda como ansiedade e sono afetam tudo.", ganho: "Menos explosoes, mais noites tranquilas." },
          { num: "09", titulo: "3 Passos Para Lidar com TDAH", desc: "Um framework simples: Entender → Observar → Atuar. Plano de acao de 7 dias.", ganho: "Saber exatamente o que fazer." },
          { num: "10", titulo: "Voce Nao Esta Sozinho", desc: "TDAH como potencial. Celebrando pequenas vitorias. Construindo uma rede de apoio.", ganho: "Esperanca e comunidade." }
        ].map((mod) => (
          <div className="modulo" key={mod.num}>
            <div className="modulo-header">
              <span className="modulo-num">{mod.num}</span>
              <span className="modulo-titulo">{mod.titulo}</span>
            </div>
            <p className="modulo-desc">{mod.desc}</p>
            <div className="modulo-ganho"><strong>Voce vai ganhar:</strong> {mod.ganho}</div>
          </div>
        ))}
      </section>

      {/* DEPOIMENTOS */}
      <section className="section section-cinza">
        <div className="section-tag">Provas Reais</div>
        
        <h2>O Que Pais Reais Estao Dizendo</h2>

        <div className="depoimento">
          <p className="depoimento-texto">
            "Meu filho faz terapia ha anos, mas so quando comecei a aplicar as estrategias em casa vimos resultados. 
            A evolucao foi exponencial."
          </p>
          <div className="depoimento-autor">
            <strong>Andre S.</strong> — <span>pai de Gabriel (8 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "Passei meses culpando os medicos. Hoje entendo que o tratamento e uma equipe: medicos, terapeutas, 
            escola e eu. Este guia me ensinou a ser a ponte."
          </p>
          <div className="depoimento-autor">
            <strong>Juliana R.</strong> — <span>mae de Enzo (6 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "As manhas eram um caos de gritos e atrasos. Com a tecnica do 'Reinicio Calmante' do guia, 
            hoje saimos de casa sorrindo. Parece magica, mas e so entender o cerebro deles."
          </p>
          <div className="depoimento-autor">
            <strong>Patricia D.</strong> — <span>mae de Sofia (11 anos)</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-tag">Duvidas Frequentes</div>
        
        <h2>Perguntas Frequentes</h2>

        <div className="faq-item">
          <h3>Este guia substitui acompanhamento medico?</h3>
          <p>Nao. O guia e um complemento para voce entender melhor seu filho e extrair o maximo dos profissionais. 
          Sempre mantenha o acompanhamento medico.</p>
        </div>

        <div className="faq-item">
          <h3>Como isso ajuda nas consultas?</h3>
          <p>Quando voce entende o TDAH, consegue descrever sintomas com precisao, fazer perguntas relevantes 
            e acompanhar o tratamento de forma mais efetiva.</p>
        </div>

        <div className="faq-item">
          <h3>Meu filho ja faz terapia, preciso deste guia?</h3>
          <p>A terapia e essencial, mas o que voce faz em casa tem impacto maior ainda. 
            O guia da as ferramentas para aplicar no dia a dia o que e discutido na terapia.</p>
        </div>

        <div className="faq-item">
          <h3>Quanto tempo para ver resultados?</h3>
          <p>Muitos pais relatam mudancas em 2-3 semanas, quando comecam a aplicar as estrategias consistentemente. 
            Cada crianca e diferente, mas a compreensao muda tudo.</p>
        </div>

        <div className="faq-item">
          <h3>Como vou receber o guia?</h3>
          <p>Acesso imediato apos a compra. Voce recebe um link para baixar o PDF e pode acessar 
            em qualquer dispositivo: celular, tablet ou computador.</p>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="section section-cinza">
        <div className="section-tag">Oferta de Lancamento</div>
        
        <h2>Escolha Agora...</h2>

        <div className="comparativo">
          <div className="comparativo-nao">
            <h3>Continuar Como Esta</h3>
            <ul>
              <li><IconX /> Continuar frustrado</li>
              <li><IconX /> Continuar sentindo que nao faz o suficiente</li>
              <li><IconX /> Mesmos resultados</li>
            </ul>
          </div>

          <div className="comparativo-sim">
            <div className="recomendado">RECOMENDADO</div>
            <h3>Transformar Hoje</h3>
            
            <ul>
              <li><IconCheck /> Investir no conhecimento</li>
              <li><IconCheck /> Mudar sua relacao com seu filho</li>
              <li><IconCheck /> Resultados em 2-3 semanas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="oferta">
        <div className="oferta-box">
          <div className="oferta-tag">Oferta de Lancamento</div>
          
          <h2 className="oferta-titulo">Guia Digital: TDAH</h2>
          
          <p className="oferta-subtitle">Entenda seu filho tao profundamente que voce se torna o melhor aliado de quem o ajuda.</p>

          <div className="preco">
            <div className="preco-antigo">De R$ 97,00</div>
            <div className="preco-novo">R$ 47,00</div>
            <div className="preco-parcela">ou 12x de R$ 4,74</div>
          </div>

          <button className="cta-button cta-large">
            COMPRAR AGORA
            <IconArrow />
          </button>

          <div className="urgencia">
            <strong>⚡ Este preco e por tempo limitado as primeiras 200 pessoas.</strong>
          </div>

          <div className="garantia">
            <IconLock />
            <div className="garantia-texto">
              <strong>Garantia de 7 Dias</strong>
              <p>Se em 7 dias voce nao sentir que este guia transformou sua compreensao sobre seu filho, 
                devolvemos 100% do seu dinheiro. Sem perguntas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>2026 — Todos os direitos reservados.</p>
        <p>Este site nao garante resultados especificos. Resultados podem variar. Material para fins educacionais.</p>
      </footer>
    </div>
  )
}

export default VendasPage
