// Line icons drawn in place of emoji glyphs so they render consistently on every platform.
const paths = {
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.75" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  alarm: (
    <>
      <circle cx="12" cy="13" r="7.5" />
      <path d="M12 9.5V13l2.5 1.75" />
      <path d="M4.75 4.5 2.75 6.5" />
      <path d="m19.25 4.5 2 2" />
      <path d="m6.75 19.25-1.5 1.75" />
      <path d="m17.25 19.25 1.5 1.75" />
    </>
  ),
  banknote: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.75" />
      <path d="M6 9.75v4.5" />
      <path d="M18 9.75v4.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.75 6.75 8.25 6 8.25-6" />
    </>
  ),
  chat: (
    <path d="M20.5 11.5c0 4.14-3.8 7.5-8.5 7.5a9.6 9.6 0 0 1-3.4-.62L4 19.5l1.2-3.6a6.9 6.9 0 0 1-1.7-4.4C3.5 7.36 7.3 4 12 4s8.5 3.36 8.5 7.5z" />
  ),
  books: (
    <>
      <rect x="3.5" y="4" width="4" height="16" rx="1" />
      <rect x="8.5" y="7" width="4" height="13" rx="1" />
      <rect x="14.75" y="4.75" width="4" height="15.5" rx="1" transform="rotate(-14 16.75 12.5)" />
    </>
  ),
  crane: (
    <>
      <path d="M7 21V8M11 21V8" />
      <path d="M7 20.5 11 17l-4-3 4-3-4-3" />
      <path d="M2.5 8h19" />
      <path d="M2.5 8 9 3.5 21.5 8" />
      <path d="M2.5 8h3v2.5h-3z" />
      <path d="M17.5 8v4.5" />
      <path d="M16 12.5h3v2h-3z" />
      <path d="M5 21h8" />
    </>
  ),
  hospital: (
    <>
      <path d="M4.5 21V6.5a1.5 1.5 0 0 1 1.5-1.5h12a1.5 1.5 0 0 1 1.5 1.5V21" />
      <path d="M2.5 21h19" />
      <path d="M12 8.25v5" />
      <path d="M9.5 10.75h5" />
      <path d="M10 21v-3.5h4V21" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
}

const Icon = ({ name, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {paths[name]}
  </svg>
)

export default Icon
