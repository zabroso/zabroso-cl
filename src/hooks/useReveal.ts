import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: .12, rootMargin: '0px 0px -40px 0px' }
    )
    const observe = () =>
      document.querySelectorAll('.rv,.rvL,.rvR').forEach(el => obs.observe(el))

    observe()
    const t = setTimeout(observe, 600)
    return () => { obs.disconnect(); clearTimeout(t) }
  }, [])
}
