import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export const Card = ({ title, eyebrow, children, footer }) => {
  const { theme } = useTheme()
  const surfaceStyle = theme.effects?.surface

  const variantClasses = {
    glass: 'glass-surface',
    neumorph: 'neumorph-surface',
    clay: 'clay-surface',
    aurora: 'aurora-surface',
    brutal: 'brutal-surface',
    'neo-brutal': 'neo-brutal-surface',
    anti: 'anti-surface',
    spatial: 'spatial-surface',
    'liquid-glass': 'liquid-glass-surface',
  }

  const isLiquidGlass = surfaceStyle === 'liquid-glass'

  return (
    <motion.article
      className={[
        'theme-card p-[var(--space-6)]',
        variantClasses[surfaceStyle] ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={
        isLiquidGlass
          ? {
              y: -6,
              scale: 1.01,
              transition: { type: 'spring', stiffness: 120, damping: 16 },
            }
          : undefined
      }
    >
      {eyebrow && (
        <p className="text-[var(--font-size-xs)] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      )}
      <h3 className="mt-[var(--space-2)] text-[var(--font-size-lg)] font-semibold text-[var(--color-text)]">
        {title}
      </h3>
      <div className="mt-[var(--space-3)] text-[var(--font-size-sm)] text-[var(--color-muted)]">
        {children}
      </div>
      {footer && (
        <div className="mt-[var(--space-5)] flex items-center justify-between">
          {footer}
        </div>
      )}
    </motion.article>
  )
}
