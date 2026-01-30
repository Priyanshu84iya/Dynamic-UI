import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export const StyleSwitcher = () => {
  const { themes, themeId, setThemeById } = useTheme()

  return (
    <motion.section
      className="theme-card grid gap-[var(--space-4)] p-[var(--space-5)]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div>
        <p className="text-[var(--font-size-xs)] uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Design Style Switcher
        </p>
        <h2 className="mt-[var(--space-2)] text-[var(--font-size-lg)] font-semibold text-[var(--color-text)]">
          Select a design language to re-skin the entire UI
        </h2>
      </div>
      <div className="grid gap-[var(--space-3)]">
        {themes.map((theme) => (
          <motion.button
            key={theme.id}
            type="button"
            onClick={() => setThemeById(theme.id)}
            className={[
              'theme-button w-full flex flex-col items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--color-border)] px-[var(--space-4)] py-[var(--space-3)] text-left transition-transform duration-300 hover:-translate-y-0.5',
              themeId === theme.id
                ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-md ring-2 ring-[var(--color-accent)]'
                : 'bg-[var(--color-surface)] text-[var(--color-text)]',
            ]
              .filter(Boolean)
              .join(' ')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-[var(--font-size-sm)] font-semibold">
              {theme.name}
            </span>
            <span className="text-[var(--font-size-xs)] opacity-80">
              {theme.description}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.section>
  )
}
