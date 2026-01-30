import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { defaultThemeId, themeMap, themes } from '../themes/themes'

const ThemeContext = createContext(null)

const applyThemeTokens = (theme) => {
  const root = document.documentElement
  root.setAttribute('data-theme', theme.id)

  Object.entries(theme.tokens).forEach(([token, value]) => {
    root.style.setProperty(token, value)
  })
}

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    const stored = window.localStorage.getItem('theme-id')
    return stored && themeMap[stored] ? stored : defaultThemeId
  })

  const theme = useMemo(() => themeMap[themeId] ?? themeMap[defaultThemeId], [themeId])

  useEffect(() => {
    applyThemeTokens(theme)
    window.localStorage.setItem('theme-id', theme.id)
  }, [theme])

  const setThemeById = (id) => {
    if (themeMap[id]) {
      setThemeId(id)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeById, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
