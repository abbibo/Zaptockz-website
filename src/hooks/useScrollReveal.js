import { useEffect } from 'react'

// Adds `.in` to `.reveal` / `.reveal-line` elements as they scroll into view.
// Elements that enter together are staggered in reading order, and elements
// added later (page switches, filtered lists) are picked up automatically.
const SELECTOR = '.reveal:not(.in), .reveal-line:not(.in)'
const STAGGER_MS = 80
const MAX_STAGGER = 6

export default function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.documentElement.classList.add('no-reveal')
      return
    }

    const io = new IntersectionObserver((entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
        .forEach((e, i) => {
          e.target.style.setProperty('--reveal-delay', `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`)
          e.target.classList.add('in')
          io.unobserve(e.target)
        })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 })

    const watch = (root) => {
      if (root.matches(SELECTOR)) io.observe(root)
      root.querySelectorAll(SELECTOR).forEach((el) => io.observe(el))
    }

    const mo = new MutationObserver((records) => {
      records.forEach((r) => r.addedNodes.forEach((node) => node.nodeType === 1 && watch(node)))
    })

    watch(document.body)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
