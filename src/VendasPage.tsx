import { useState } from 'react'
import { useEffect } from 'react'
import './styles/vendas.css'

// Icones SVG
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const IconLock = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const IconChevron = ({ open }: { open: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

// Componente FAQ Expansível
const FAQItem = ({ pergunta, resposta }: { pergunta: string; resposta: string }) => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-header">
        <h3>{pergunta}</h3>
        <IconChevron open={open} />
      </div>
      <div className="faq-content" style={{ maxHeight: open ? '200px' : '0', overflow: 'hidden', transition: 'maxHeight 0.3s ease' }}>
        <p>{resposta}</p>
      </div>
    </div>
  )
}

const VendasPage = () => {
  useEffect(() => {
    const viewport = document.querySelector('meta[name=viewport]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    }
  }, [])

  const scrollToProblema = () => {
    document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToOferta = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="vendas-page">
      {/* HERO */}
      <section className="hero">
        <a className="brand-logo" href="/" aria-label="Página inicial">
          <img
            src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2218%22%20height%3D%2229%22%20viewBox%3D%220%200%2018%2029%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-fc-idx%3D%220%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.0023%204.86847C14.0023%204.27515%2013.7658%203.70609%2013.3447%203.2863L11.7281%201.67969L2.31641%2011.0521C1.84958%2011.5162%201.47921%2012.0673%201.22652%2012.674C0.973819%2013.2808%200.84375%2013.9312%200.84375%2014.588C0.84375%2015.2448%200.973819%2015.8952%201.22652%2016.502C1.47921%2017.1087%201.84958%2017.6598%202.31641%2018.1238L3.89702%2019.7011C3.69238%2018.727%203.73484%2017.7175%204.02053%2016.7639C4.30622%2015.8102%204.82614%2014.9425%205.53327%2014.2393L13.3447%206.45065C13.7658%206.03086%2014.0023%205.4618%2014.0023%204.86847ZM13.3424%2011.0375C13.7649%2011.4609%2014.0022%2012.0347%2014.0022%2012.6329C14.0022%2013.2312%2013.7649%2013.805%2013.3424%2014.2284L9.38858%2018.1839C8.8241%2018.7451%208.37672%2019.4129%208.07241%2020.1486C7.76811%2020.8842%207.61295%2021.673%207.61595%2022.4692C7.61692%2022.8845%207.65997%2023.2986%207.74446%2023.7053L6.18599%2022.1033C5.23793%2021.1533%204.70544%2019.8658%204.70544%2018.5235C4.70544%2017.1811%205.23793%2015.8936%206.18599%2014.9437L11.7279%209.40254L13.3424%2011.0375ZM13.3021%2022.7473C13.5238%2022.9594%2013.7%2023.2126%2013.8202%2023.492C13.9405%2023.7714%2014.0024%2024.0714%2014.0024%2024.3745C14.0024%2024.6776%2013.9405%2024.9776%2013.8202%2025.257C13.7%2025.5365%2013.5238%2025.7896%2013.3021%2026.0017L11.6954%2027.5671L10.0621%2025.9692C9.16557%2025.092%208.63499%2023.9208%208.57339%2022.6831C8.51179%2021.4454%208.92357%2020.2295%209.72873%2019.2716L13.3021%2022.7473Z%22%20fill%3D%22%23fff%22%20style%3D%22fill%3A%20rgb(255%2C%20255%2C%20255)%20!important%3B%22%2F%3E%3C%2Fsvg%3E"
            alt="Logo"
          />
          <span>ENTENDENDO O TDAH</span>
        </a>

        <div className="hero-badge">GUIA DIGITAL: ENTENDENDO TDAH</div>
        
        <h1 className="hero-title">
          Como Pais de Crianças com TDAH Estão Finalmente Entendendo Seus Filhos —
          <span className="highlight"> E Parando de Lutar Contra Eles</span>
        </h1>

        <p className="hero-subtitle">
          Seu filho não tem um cérebro com defeito. Ele tem um cérebro poderoso demais para um mundo que insiste em pedir que ele fique pequeno.<br />
          Este guia te mostra como lutar <strong>por</strong> ele, não <strong>contra</strong> ele.
        </p>

        <div className="hero-imagem-container">
          <img src="./capa-ebook.png" alt="Entendendo o TDAH - Um guia prático e acolhedor" className="hero-imagem" />
        </div>

        <button className="cta-button" onClick={scrollToProblema}>
          QUERO ENTENDER MEU FILHO
          <IconArrow />
        </button>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="section">
        <div className="section-tag">Você se identifica?</div>
        
        <div className="problemas-lista">
          <div className="problema-item"><IconX /> <span>Seu filho se sente "diferente" ou "errado"</span></div>
          <div className="problema-item"><IconX /> <span>Já gastou fortunas em terapias sem resultado</span></div>
          <div className="problema-item"><IconX /> <span>Consultas médicas são rápidas demais</span></div>
          <div className="problema-item"><IconX /> <span>A escola reclama mas não ajuda</span></div>
          <div className="problema-item"><IconX /> <span>Cansado de ser julgado como pai</span></div>
        </div>
      </section>

      {/* STORY */}
      <section className="section section-cinza">
        <div className="section-tag">A História Real</div>
        
        <h2>"Eu Achava Que Estava Fazendo Tudo Certo... Até Perceber O Que Faltava"</h2>

        <p>
          Quando meu filho recebeu o diagnóstico de TDAH, eu achei que a solução fosse simples: 
          levar nos profissionais, seguir as orientações e esperar melhorar. Mas não foi bem assim.
        </p>
        
        <div className="story-lista">
          <div className="story-item">As consultas médicas eram rápidas</div>
          <div className="story-item">Os psicólogos davam orientações genéricas</div>
          <div className="story-item">A escola reclamava dos comportamentos, mas não oferecia soluções</div>
        </div>

        <div className="destaque">
          <h3>O Momento da Virada</h3>
          <p>
            Foi quando percebi: eu não precisava substituir os profissionais. 
            Eu precisava ENTENDER meu filho o suficiente para extrair o MÁXIMO do que cada um podia oferecer.
          </p>
          <p>
            Quando comecei a compreender como o cérebro dele funcionava — por que ele perdia o foco, 
            por que explosões emocionais aconteciam — tudo mudou.
          </p>
        </div>
      </section>

      {/* CONTEUDO */}
      <section className="section">
        <div className="section-tag">O Que Você Vai Encontrar</div>
        
        <h2>O "Entendendo o TDAH" é uma conversa franca, acolhedora e baseada em ciência.</h2>

        {[
          { num: "01", titulo: "O Que É TDAH (De Verdade)?", desc: "Entenda a neurobiologia por trás do TDAH sem termos médicos complicados.", ganho: "Clareza para deixar a culpa de lado." },
          { num: "02", titulo: "Desatenção ou Desinteresse?", desc: "Aprenda a distinguir quando é TDAH e quando é falta de estímulo.", ganho: "Capacidade de reativar o interesse." },
          { num: "03", titulo: "O Cérebro do Seu Filho", desc: "Uma viagem pela neurociência acessível. Entenda dopamina e neuroplasticidade.", ganho: "Compreensão profunda para lutar POR seu filho." },
          { num: "04", titulo: "O Poder do Reconhecimento", desc: "A 'Proporção Mágica' de Gottman. Aprenda a validar seu filho.", ganho: "Relacionamento profundo baseado em confiança." },
          { num: "05", titulo: "Escola: Aliada ou Vilã?", desc: "Conheça a Lei 14.254/2021. Aprenda que adaptações pedir e como negociar.", ganho: "Um filho se sentindo apoiado na escola." },
          { num: "06", titulo: "Medicação: Sim ou Não?", desc: "Tudo sobre medicação e suplementos com evidência científica.", ganho: "Decisões informadas com os médicos." },
          { num: "07", titulo: "Suplementos e Alimentação", desc: "O que a ciência diz sobre ômega-3, zinco, magnésio e alimentação.", ganho: "O que incluir e o que evitar na dieta." },
          { num: "08", titulo: "Ansiedade, Sono e Emoções", desc: "O TDAH raramente viaja sozinho. Entenda como ansiedade e sono afetam tudo.", ganho: "Menos explosões, mais noites tranquilas." },
          { num: "09", titulo: "3 Passos Para Lidar com TDAH", desc: "Um framework simples: Entender → Observar → Atuar. Plano de ação de 7 dias.", ganho: "Saber exatamente o que fazer." },
          { num: "10", titulo: "Você Não Está Sozinho", desc: "TDAH como potencial. Celebrando pequenas vitórias. Construindo uma rede de apoio.", ganho: "Esperança e comunidade." }
        ].map((mod) => (
          <div className="modulo" key={mod.num}>
            <div className="modulo-header">
              <span className="modulo-num">{mod.num}</span>
              <span className="modulo-titulo">{mod.titulo}</span>
            </div>
            <p className="modulo-desc">{mod.desc}</p>
            <div className="modulo-ganho"><strong>Você vai ganhar:</strong> {mod.ganho}</div>
          </div>
        ))}
      </section>

      {/* DEPOIMENTOS */}
      <section className="section section-cinza">
        <div className="section-tag">Provas Reais</div>
        
        <h2>O Que Pais Reais Estão Dizendo</h2>

        <div className="depoimento">
          <p className="depoimento-texto">
            "Meu filho faz terapia há anos, mas só quando comecei a aplicar as estratégias em casa vimos resultados. 
            A evolução foi exponencial."
          </p>
          <div className="depoimento-autor">
            <strong>André S.</strong> — <span>pai de Gabriel (8 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "Passei meses culpando os médicos. Hoje entendo que o tratamento é uma equipe: médicos, terapeutas, 
            escola e eu. Este guia me ensinou a ser a ponte."
          </p>
          <div className="depoimento-autor">
            <strong>Juliana R.</strong> — <span>mãe de Enzo (6 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "As manhãs eram um caos de gritos e atrasos. Com a técnica do 'Reinício Calmante' do guia, 
            hoje saímos de casa sorrindo. Parece mágica, mas é só entender o cérebro deles."
          </p>
          <div className="depoimento-autor">
            <strong>Patrícia D.</strong> — <span>mãe de Sofia (11 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "Finalmente entendi por que meu filho reage daquele jeito. Agora sei como ajudar em vez de só frustrar."
          </p>
          <div className="depoimento-autor">
            <strong>Carlos M.</strong> — <span>pai de Lucas (9 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "O guia me deu ferramentas práticas que funcionam no dia a dia. Não é teoria, é aplicação real."
          </p>
          <div className="depoimento-autor">
            <strong>Fernanda L.</strong> — <span>mãe de Maria (7 anos)</span>
          </div>
        </div>

        <div className="depoimento">
          <p className="depoimento-texto">
            "Recomendo para todos os pais que se sentem perdidos. Este guia é um mapa na jornada do TDAH."
          </p>
          <div className="depoimento-autor">
            <strong>Ricardo B.</strong> — <span>pai de Pedro (10 anos)</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-tag">Dúvidas Frequentes</div>
        
        <h2>Perguntas Frequentes</h2>

        <FAQItem 
          pergunta="Este guia substitui acompanhamento médico?"
          resposta="Não. O guia é um complemento para você entender melhor seu filho e extrair o máximo dos profissionais. Sempre mantenha o acompanhamento médico."
        />

        <FAQItem 
          pergunta="Como isso ajuda nas consultas?"
          resposta="Quando você entende o TDAH, consegue descrever sintomas com precisão, fazer perguntas relevantes e acompanhar o tratamento de forma mais efetiva."
        />

        <FAQItem 
          pergunta="Meu filho já faz terapia, preciso deste guia?"
          resposta="A terapia é essencial, mas o que você faz em casa tem impacto maior ainda. O guia dá as ferramentas para aplicar no dia a dia o que é discutido na terapia."
        />

        <FAQItem 
          pergunta="Quanto tempo para ver resultados?"
          resposta="Muitos pais relatam mudanças significativas quando começam a aplicar as estratégias consistentemente. Cada criança é diferente, mas a compreensão muda tudo desde o primeiro capítulo."
        />

        <FAQItem 
          pergunta="Como vou receber o guia?"
          resposta="Acesso imediato após a compra. Você recebe um link para baixar o PDF e pode acessar em qualquer dispositivo: celular, tablet ou computador."
        />
      </section>

      {/* COMPARATIVO */}
      <section className="section section-cinza">
        <div className="section-tag">Oferta de Lançamento</div>
        
        <h2>Escolha Agora...</h2>

        <div className="comparativo">
          <div className="comparativo-nao">
            <h3>Continuar Como Está</h3>
            <div className="comparativo-lista">
              <div className="comparativo-item-nao"><IconX /> <span>Continuar frustrado</span></div>
              <div className="comparativo-item-nao"><IconX /> <span>Continuar sentindo que não faz o suficiente</span></div>
              <div className="comparativo-item-nao"><IconX /> <span>Mesmos resultados</span></div>
            </div>
          </div>

          <div className="comparativo-sim">
            <div className="recomendado">RECOMENDADO</div>
            <h3>Transformar Hoje</h3>
            
            <div className="comparativo-lista">
              <div className="comparativo-item-sim"><IconCheck /> <span>Investir no conhecimento</span></div>
              <div className="comparativo-item-sim"><IconCheck /> <span>Mudar sua relação com seu filho</span></div>
              <div className="comparativo-item-sim"><IconCheck /> <span>Ver seu filho com outros olhos</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="oferta">
        <div className="oferta-box">
          <div className="oferta-tag">Oferta de Lançamento</div>
          
          <h2 className="oferta-titulo">Entendendo o TDAH</h2>
          
          <p className="oferta-subtitle">Entenda seu filho tão profundamente que você se torna o melhor aliado de quem o ajuda.</p>

          <div className="preco">
            <div className="preco-antigo">De R$ 97,00</div>
            <div className="preco-novo">R$ 47,00</div>
            <div className="preco-parcela">ou 12x de R$ 4,74</div>
          </div>

          <button className="cta-button cta-large" onClick={scrollToOferta}>
            COMPRAR AGORA
            <IconArrow />
          </button>

          <p className="urgencia-discreta">desconto apenas para as primeiras 100 pessoas</p>

          <div className="garantia">
            <IconLock />
            <div className="garantia-texto">
              <strong>Garantia de 7 Dias</strong>
              <p>Se em 7 dias você não sentir que este guia transformou sua compreensão sobre seu filho, 
                devolvemos 100% do seu dinheiro. Sem perguntas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>2026 — Todos os direitos reservados.</p>
        <p>Este site não garante resultados específicos. Resultados podem variar. Material para fins educacionais.</p>
      </footer>
    </div>
  )
}

export default VendasPage
