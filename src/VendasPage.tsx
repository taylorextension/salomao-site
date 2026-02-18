import { useEffect } from 'react'
import './styles/vendas.css'

const VendasPage = () => {
  useEffect(() => {
    // Desativar zoom
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
      {/* HERO - Largura Total */}
      <section className="hero">
        <div className="hero-badge">🔒 Garantia Blindada de 7 Dias</div>
        
        <h1 className="hero-title">
          Descubra O Segredo Que Pais De Crianças Com TDAH Estão Usando Para
          <span className="highlight"> Transformar Seus Filhos Em Apenas 2‑3 Semanas</span>
        </h1>

        <p className="hero-subtitle">
          Sem depender apenas de consultas médicas caras. Sem sentir-se um pai incompetente. Sem culpa.
        </p>

        <button className="cta-button" onClick={scrollToOferta}>
          QUERO TRANSFORMAR MEU FILHO
          <span className="cta-arrow">→</span>
        </button>

        <div className="hero-pain">
          <p className="pain-title">Se você se identifica com qualquer uma dessas situações:</p>
          <ul className="pain-list">
            <li>😔 Seu filho se sente "diferente" ou "errado"</li>
            <li>💸 Já gastou fortunas em terapias sem resultado</li>
            <li>⏱️ Consultas médicas são rápidas demais</li>
            <li>🏫 A escola reclama mas não ajuda</li>
            <li>😓 Cansado de ser julgado como pai</li>
          </ul>
          <p className="pain-continue">👇 Continue lendo...</p>
        </div>
      </section>

      {/* STORY */}
      <section className="story">
        <div className="section-tag">ENTENDA COMO FUNCIONA</div>
        
        <h2 className="story-title">
          "Eu Achava Que Estava Fazendo Tudo Certo... Até Perceber O Que Faltava"
        </h2>

        <div className="story-content">
          <p>
            Quando meu filho recebeu o diagnóstico de TDAH, eu achei que a solução fosse simples: 
            levar nos profissionais, seguir as orientações e esperar melhorar.
          </p>
          
          <p className="story-problem">
            Mas não foi bem assim.
          </p>
          
          <ul className="story-list">
            <li>As consultas médicas eram rápidas.</li>
            <li>Os psicólogos davam orientações genéricas.</li>
            <li>A escola reclamava dos comportamentos, mas não oferecia soluções.</li>
          </ul>
          
          <p>
            Eu sentia que estava fazendo tudo "certo", mas nada funcionava.
          </p>

          <div className="turning-point">
            <h3>🎯 O Momento da Virada</h3>
            <p>
              Foi quando percebi: eu não precisava substituir os profissionais. 
              Eu precisava <strong>ENTENDER</strong> meu filho o suficiente para extrair 
              o <strong>MÁXIMO</strong> do que cada um podia oferecer.
            </p>
            
            <p>
              Quando comecei a compreender como o cérebro dele funcionava — por que ele perdia o foco, 
              por que explosões emocionais aconteciam — <span className="highlight">tudo mudou</span>.
            </p>
            
            <ul className="results-list">
              <li>✅ As consultas com o neuropediatra se tornaram mais produtivas.</li>
              <li>✅ As sessões de terapia renderam mais.</li>
              <li>✅ A escola se tornou parceira.</li>
            </ul>
            
            <p className="origin">
              📚 <strong>Este guia nasceu dessa transformação.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="conteudo">
        <div className="section-tag">O QUE VOCÊ VAI ENCONTRAR</div>
        
        <h2 className="section-title">
          O "Guia Digital: TDAH" é uma conversa franca, acolhedora e baseada em ciência.
        </h2>

        <div className="modulos">
          {[
            {
              num: "01",
              title: "O Que É TDAH (De Verdade)?",
              desc: "Entenda a neurobiologia por trás do TDAH sem termos médicos complicados. Descubra por que seu filho foca em videogames mas não na lição.",
              ganho: "Clareza para deixar a culpa de lado."
            },
            {
              num: "02",
              title: "Desatenção ou Desinteresse?",
              desc: "Aprenda a distinguir quando é TDAH e quando é falta de estímulo. Descubra o poder do espelhamento.",
              ganho: "Capacidade de reativar o interesse pelo aprendizado."
            },
            {
              num: "03",
              title: "O Cérebro do Seu Filho",
              desc: "Uma viagem pela neurociência acessível. Entenda dopamina, córtex pré-frontal e neuroplasticidade.",
              ganho: "Compreensão profunda para lutar POR seu filho."
            },
            {
              num: "04",
              title: "O Poder do Reconhecimento",
              desc: "A 'Proporção Mágica' de Gottman (5 positivos para 1 negativo). Aprenda a validar seu filho.",
              ganho: "Relacionamento profundo baseado em confiança."
            },
            {
              num: "05",
              title: "Escola: Aliada ou Vilã?",
              desc: "Conheça a Lei 14.254/2021 que garante direitos. Aprenda que adaptações pedir e como negociar.",
              ganho: "Um filho se sentindo apoiado na escola."
            },
            {
              num: "06",
              title: "Medicação: Sim ou Não?",
              desc: "Tudo sobre medicação (quando indicada, efeitos colaterais) e suplementos com evidência.",
              ganho: "Decisões informadas com os médicos."
            },
            {
              num: "07",
              title: "Suplementos e Alimentação",
              desc: "O que a ciência diz sobre ômega-3, zinco, magnésio e alimentação.",
              ganho: "O que incluir e o que evitar na dieta."
            },
            {
              num: "08",
              title: "Ansiedade, Sono e Emoções",
              desc: "O TDAH raramente viaja sozinho. Entenda como ansiedade e sono afetam tudo.",
              ganho: "Menos explosões, mais noites tranquilas."
            },
            {
              num: "09",
              title: "3 Passos Para Lidar com TDAH",
              desc: "Um framework simples: Entender → Observar → Atuar. Plano de ação de 7 dias.",
              ganho: "Saber exatamente o que fazer."
            },
            {
              num: "10",
              title: "Você Não Está Sozinho(a)",
              desc: "TDAH como potencial. Celebrando pequenas vitórias. Construindo uma rede de apoio.",
              ganho: "Esperança e comunidade."
            }
          ].map((mod) => (
            <div key={mod.num} className="modulo">
              <div className="modulo-num">{mod.num}</div>
              <h3 className="modulo-title">{mod.title}</h3>
              <p className="modulo-desc">{mod.desc}</p>
              <div className="modulo-ganho">
                <span>🎁 Você vai ganhar:</span> {mod.ganho}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depoimentos">
        <div className="section-tag">PROVAS REAIS</div>
        
        <h2 className="section-title">O Que Pais Reais Estão Dizendo</h2>

        <div className="depoimentos-grid">
          <div className="depoimento">
            <div className="depoimento-stars">⭐⭐⭐⭐⭐</div>
            <p className="depoimento-text">
              "Quando comecei a entender que meu filho não estava sendo desobediente, 
              mas que o cérebro dele funcionava diferente, minha abordagem mudou completamente."
            </p>
            <div className="depoimento-autor">
              <strong>Carla M.</strong>
              <span>mãe de Pedro (9 anos)</span>
            </div>
          </div>

          <div className="depoimento">
            <div className="depoimento-stars">⭐⭐⭐⭐⭐</div>
            <p className="depoimento-text">
              "Antes eu ia aos médicos sem saber o que perguntar. Depois que entendi o básico da neurociência, 
              consegui descrever os sintomas com precisão."
            </p>
            <div className="depoimento-autor">
              <strong>Rodrigo T.</strong>
              <span>pai de Valentina (7 anos)</span>
            </div>
          </div>

          <div className="depoimento">
            <div className="depoimento-stars">⭐⭐⭐⭐⭐</div>
            <p className="depoimento-text">
              "A escola sempre reclamava. Com as informações deste guia, soube pedir as adaptações certas citando a lei. 
              Hoje temos uma professora parceira."
            </p>
            <div className="depoimento-autor">
              <strong>Fernanda L.</strong>
              <span>mãe de Lucas (10 anos)</span>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="oferta">
        <div className="oferta-box">
          <div className="oferta-tag">OFERTA ESPECIAL</div>
          
          <h2 className="oferta-title">Guia Digital: TDAH</h2>
          
          <p className="oferta-subtitle">O guia completo para pais que querem entender e ajudar seus filhos</p>

          <div className="preco">
            <div className="preco-antigo">De R$ 197,00</div>
            <div className="preco-novo">R$ 97,00</div>
            <div className="preco-parcela">ou 12x de R$ 9,74</div>
          </div>

          <button className="cta-button cta-large">
            QUERO ACESSO AGORA
            <span className="cta-arrow">→</span>
          </button>

          <div className="garantia">
            <div className="garantia-icone">🔒</div>
            <div className="garantia-texto">
              <strong>Garantia Blindada de 7 Dias</strong>
              <p>Se você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
            </div>
          </div>

          <div className="selos">
            <div className="selo">🔒 Pagamento Seguro</div>
            <div className="selo">📱 Acesso Imediato</div>
            <div className="selo">💯 Garantia 7 Dias</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Guia Digital TDAH. Todos os direitos reservados.</p>
        <p className="footer-disclaimer">
          Este material não substitui orientação médica. Sempre consulte profissionais qualificados.
        </p>
      </footer>
    </div>
  )
}

export default VendasPage
