import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { StyleSwitcher } from './StyleSwitcher'

export const Layout = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] lg:h-screen lg:overflow-hidden">
      <div className="grid lg:h-full lg:grid-cols-[360px_1fr]">
        <aside className="border-b border-[var(--color-border)] bg-[var(--color-surface)] lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:overflow-y-auto">
          <Header />
          <div className="mt-[var(--space-4)] px-[var(--space-6)] pb-[var(--space-6)]">
            <StyleSwitcher />
          </div>
        </aside>

        <section className="lg:h-screen lg:overflow-y-auto">
          <main className="mx-auto flex max-w-[var(--layout-max)] flex-col gap-[var(--space-7)] px-[var(--space-6)] py-[var(--space-7)]">
            <Outlet />
          </main>
          <Footer />
        </section>
      </div>
    </div>
  )
}
