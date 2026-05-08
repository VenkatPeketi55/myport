import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Send, Sparkles, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { aiRecommendations, askMeAnswers, portfolioMeta } from '../data/portfolio'
import { cn } from '../lib/cn'

interface ChatMessage {
  role: 'user' | 'assistant'
  text: string
}

function answerPrompt(input: string) {
  const normalized = input.toLowerCase()

  const faqMatch = askMeAnswers.find((item) =>
    item.question.toLowerCase().split(' ').some((word) => normalized.includes(word)),
  )

  if (faqMatch) {
    return faqMatch.answer
  }

  const recommendation = aiRecommendations.find((item) =>
    normalized.includes(item.title.toLowerCase().split(' ')[0]) ||
    normalized.includes(item.matchingProjects[0].toLowerCase().split(' ')[0]),
  )

  if (recommendation) {
    return `${recommendation.explanation} Suggested projects: ${recommendation.matchingProjects.join(', ')}.`
  }

  if (normalized.includes('contact') || normalized.includes('hire')) {
    return `The fastest path is ${portfolioMeta.email} or WhatsApp. For a scheduled intro, use the Calendly link in the contact section.`
  }

  return 'I can help with projects, strengths, contact details, and which portfolio piece best fits a specific role or product brief.'
}

export function AskMeWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'Ask me anything about Aarav’s projects, stack, hiring fit, or product strengths.',
    },
  ])

  const quickPrompts = useMemo(() => portfolioMeta.aiPrompts.slice(0, 3), [])

  const submitPrompt = (prompt: string) => {
    const trimmedPrompt = prompt.trim()

    if (!trimmedPrompt) {
      return
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: 'user', text: trimmedPrompt },
      { role: 'assistant', text: answerPrompt(trimmedPrompt) },
    ])
    setInput('')
  }

  return (
    <>
      <div className="fixed bottom-22 right-4 z-[65] hidden lg:block">
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="mb-4 w-[360px] overflow-hidden rounded-[30px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] shadow-[0_28px_90px_var(--shadow)] backdrop-blur-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between border-b border-[color:var(--border)] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-soft)]">
                    <Bot className="h-5 w-5 text-[color:var(--accent-secondary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--text-primary)]">
                      Ask me anything
                    </p>
                    <p className="text-xs text-[color:var(--text-muted)]">
                      Local portfolio AI guide
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-soft)] text-[color:var(--text-primary)]"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close AI assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[380px] space-y-3 overflow-y-auto px-5 py-4">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={cn(
                      'max-w-[92%] rounded-[22px] px-4 py-3 text-sm leading-7',
                      message.role === 'assistant'
                        ? 'mr-auto bg-[color:var(--panel-soft)] text-[color:var(--text-secondary)]'
                        : 'ml-auto bg-[linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))] text-white',
                    )}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <div className="border-t border-[color:var(--border)] px-5 py-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      className="theme-chip text-left"
                      onClick={() => submitPrompt(prompt)}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                      {prompt}
                    </button>
                  ))}
                </div>
                <form
                  className="flex gap-3"
                  onSubmit={(event) => {
                    event.preventDefault()
                    submitPrompt(input)
                  }}
                >
                  <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    className="input-shell flex-1 !rounded-full"
                    placeholder="Ask about projects, fit, or skills"
                  />
                  <button type="submit" className="btn-primary inline-flex h-12 w-12 items-center justify-center !px-0">
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          className="btn-primary inline-flex items-center gap-3 rounded-full px-5 py-3 shadow-[0_20px_50px_var(--shadow)]"
          onClick={() => setIsOpen((open) => !open)}
        >
          <Bot className="h-4 w-4" />
          Ask me anything
        </button>
      </div>
    </>
  )
}
