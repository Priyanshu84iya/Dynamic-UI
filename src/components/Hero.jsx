import { motion } from 'framer-motion'
import { Button } from './Button'
import { useTheme } from '../context/ThemeContext'

export const Hero = () => {
  const { theme } = useTheme()
  const isLiquidGlass = theme.effects?.surface === 'liquid-glass'

  return (
    <motion.section
      className={[
        'grid gap-[var(--space-6)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-7)] shadow-sm md:grid-cols-[1.2fr_0.8fr]',
        isLiquidGlass ? 'liquid-glass-surface liquid-glass-hero' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={
        isLiquidGlass
          ? {
              y: -4,
              transition: { type: 'spring', stiffness: 120, damping: 18 },
            }
          : undefined
      }
    >
      <div className="space-y-[var(--space-4)]">
        <p className="text-[var(--font-size-xs)] uppercase tracking-[0.4em] text-[var(--color-muted)]">
          Adaptive Experience
        </p>
        <h2 className="text-[var(--font-size-2xl)] font-semibold text-[var(--color-text)]">
          Switch entire design languages instantly without a reload.
        </h2>
        <p className="text-[var(--font-size-md)] text-[var(--color-muted)]">
          Each style modifies typography, spacing, radii, borders, and shadow
          tokens through CSS variables — Tailwind utilities read directly from
          those tokens for a consistent visual system.
        </p>
        <div className="flex flex-wrap gap-[var(--space-3)]">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
        </div>
      </div>
      <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-[var(--space-5)]">
        <p className="text-[var(--font-size-sm)] text-[var(--color-muted)]">
          Highlights
        </p>
        <ul className="mt-[var(--space-3)] space-y-[var(--space-3)] text-[var(--font-size-sm)] text-[var(--color-text)]">
          <li>20 production-ready design tokens sets</li>
          <li>Context API powered theme switching</li>
          <li>Smooth transitions and component variety</li>
        </ul>
      </div>
    </motion.section>
  )
}
