import { motion } from 'framer-motion'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <motion.header
      className="border-b border-[var(--color-border)]"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-[var(--space-4)] px-[var(--space-6)] py-[var(--space-5)]">
        <div>
          <p className="text-[var(--font-size-xs)] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Design System Lab
          </p>
          <h1 className="text-[var(--font-size-2xl)] font-semibold text-[var(--color-text)]">
            Dynamic UI Theme Switcher
          </h1>
        </div>
        <Navbar />
      </div>
    </motion.header>
  )
}
