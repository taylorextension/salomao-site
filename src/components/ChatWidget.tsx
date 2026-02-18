import { useState, useRef, useEffect } from 'react'
import { icons } from './Icons'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou o Salomão. Como posso ajudar você hoje?',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simular resposta da API (substituir por chamada real)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Estou processando sua mensagem. Para uma conversa completa, conecte-se via Telegram: @JunioSilvaBot',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(34, 211, 238, 0.3)',
            zIndex: 1000,
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ color: 'white' }}>{icons.message}</div>
        </button>
      )}

      {/* Janela do chat */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '380px',
            maxWidth: 'calc(100vw - 48px)',
            height: '500px',
            maxHeight: 'calc(100vh - 48px)',
            backgroundColor: '#151b2b',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            overflow: 'hidden',
            border: '1px solid rgba(34, 211, 238, 0.1)'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem'
                }}
              >
                🤖
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>Salomão</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                padding: '4px'
              }}
            >
              {icons.close}
            </button>
          </div>

          {/* Mensagens */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.isUser ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: msg.isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  backgroundColor: msg.isUser ? '#3b82f6' : '#1f2937',
                  color: 'white',
                  fontSize: '0.9rem',
                  lineHeight: 1.5
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '12px 16px',
                  backgroundColor: '#1f2937',
                  borderRadius: '16px 16px 16px 4px',
                  display: 'flex',
                  gap: '4px'
                }}
              >
                <span style={{ animation: 'bounce 1s infinite', color: '#22d3ee' }}>.</span>
                <span style={{ animation: 'bounce 1s infinite 0.2s', color: '#22d3ee' }}>.</span>
                <span style={{ animation: 'bounce 1s infinite 0.4s', color: '#22d3ee' }}>.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '16px 20px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              gap: '12px'
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: '#1f2937',
                color: 'white',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: inputValue.trim() ? '#3b82f6' : '#374151',
                border: 'none',
                cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'all 0.2s ease'
              }}
            >
              {icons.send}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
