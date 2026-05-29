import { useState, useEffect } from 'react'

export default function useScrollReveal(
  ref: { readonly current: Element | null },
  options: { threshold?: number; rootMargin?: string } = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref]) // options intentionally omitted — stable at call sites

  return isVisible
}
