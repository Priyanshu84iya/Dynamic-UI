import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const variantClasses = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-on-primary)] border-[var(--color-primary)] shadow-md hover:-translate-y-0.5 hover:shadow-lg',
  secondary:
    'bg-[var(--color-secondary)] text-[var(--color-on-secondary)] border-[var(--color-secondary)] shadow-sm hover:-translate-y-0.5 hover:shadow-md',
}

export const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
}) => {
  const { theme } = useTheme()
  const isBrutal = theme.effects?.surface === 'neo-brutal' || theme.effects?.surface === 'brutal'
  const isLiquidGlass = theme.effects?.surface === 'liquid-glass'

  const baseClasses =
    'inline-flex items-center justify-center gap-2 border-[var(--border-width)] px-[var(--space-5)] py-[var(--space-2)] text-[var(--font-size-sm)] font-medium transition-[transform,box-shadow,background-color,color,border-color] duration-300'

  const shapeClass = isBrutal ? 'rounded-[var(--radius-sm)]' : 'rounded-[var(--radius-pill)]'

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={[
        baseClasses,
        shapeClass,
        variantClasses[variant],
        isLiquidGlass ? 'liquid-glass-interactive' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      whileHover={
        isLiquidGlass
          ? { scale: 1.02, y: -2, transition: { type: 'spring', stiffness: 140, damping: 14 } }
          : undefined
      }
      whileTap={
        isLiquidGlass
          ? { scale: 0.98, transition: { type: 'spring', stiffness: 180, damping: 16 } }
          : undefined
      }
    >
      {children}
    </motion.button>
  )
}
