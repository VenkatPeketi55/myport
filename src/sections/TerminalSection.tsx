import { useMemo, useState } from 'react'
import { GlassCard } from '../components/GlassCard'
import { SectionHeading } from '../components/SectionHeading'
import { terminalCommands } from '../data/portfolio'

const initialOutput = terminalCommands.find((item) => item.command === 'help')?.lines ?? []

export function TerminalSection() {
  const [command, setCommand] = useState('')
  const [output, setOutput] = useState<string[]>(initialOutput)

  const commandsMap = useMemo(
    () => new Map(terminalCommands.map((item) => [item.command, item.lines])),
    [],
  )

  return (
    <section
      id="terminal"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="terminal-heading"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Developer Terminal"
          title="A fake interactive terminal for the terminal-loving version of the story."
          description="Type `help`, `about`, `skills`, `projects`, `contact`, `resume`, or `clear` to explore the profile from a command-line lens."
          titleId="terminal-heading"
        />

        <GlassCard glow className="overflow-hidden p-0">
          <div className="terminal-shell rounded-none p-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>

            <div className="min-h-[280px] space-y-2 font-mono text-sm leading-7 text-[color:var(--text-secondary)]">
              {output.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>

            <form
              className="mt-6 flex flex-wrap items-center gap-3 rounded-[24px] border border-[color:var(--border)] bg-[color:var(--panel-soft)] px-4 py-4"
              onSubmit={(event) => {
                event.preventDefault()

                const normalizedCommand = command.trim().toLowerCase()

                if (!normalizedCommand) {
                  return
                }

                if (normalizedCommand === 'clear') {
                  setOutput([])
                  setCommand('')
                  return
                }

                setOutput([
                  `> ${normalizedCommand}`,
                  ...(commandsMap.get(normalizedCommand) ?? [
                    'Command not found. Try: help, about, skills, projects, contact, resume, clear',
                  ]),
                ])
                setCommand('')
              }}
            >
              <span className="text-[color:var(--accent-secondary)]">$</span>
              <input
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                className="flex-1 bg-transparent text-[color:var(--text-primary)] outline-none"
                placeholder="type a command..."
              />
            </form>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
