import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [dark, setDark] = useState(() => localStorage.theme !== 'light')
  
  useEffect(() => {
    const root = document.documentElement
    if(dark){
      root.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      root.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [dark])
}