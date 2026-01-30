import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const navItems = [
    { label: 'Overview', href: '/overview' },
    { label: 'Components', href: '/components' },
    { label: 'Guidelines', href: '/guidelines' },
    { label: 'Tokens', href: '/tokens' },
  ]

  return (
    <nav className="flex flex-wrap items-center gap-[var(--space-4)] text-[var(--font-size-sm)] text-[var(--color-muted)]">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            [
              'rounded-[var(--radius-pill)] border px-[var(--space-3)] py-[var(--space-2)] transition-colors',
              isActive
                ? 'border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text)]'
                : 'border-transparent hover:border-[var(--color-border)] hover:text-[var(--color-text)]',
            ]
              .filter(Boolean)
              .join(' ')
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
