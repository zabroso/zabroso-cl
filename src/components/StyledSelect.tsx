import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'

interface Option {
  value: string
  label: string
}

interface Props {
  name: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: boolean
  /** Fondo del trigger, para calzar con el formulario donde se use (bg-white / bg-cream). */
  bg?: string
  labelledBy: string
}

/**
 * Reemplaza al <select> nativo: el panel de opciones de un select del navegador
 * lo dibuja el sistema operativo y no se puede stylear con CSS. Este componente
 * es un combobox accesible (teclado + ARIA) con el mismo look que el resto del
 * formulario, y expone su valor vía un input oculto para que FormData lo capture igual.
 */
export default function StyledSelect({ name, options, value, onChange, placeholder = 'Elige una opción', error, bg = 'bg-white', labelledBy }: Props) {
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()

  useEffect(() => {
    if (!open) return
    function onDocMouseDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocMouseDown)
    return () => document.removeEventListener('mousedown', onDocMouseDown)
  }, [open])

  const selected = options.find(o => o.value === value)
  const selectedIndex = Math.max(0, options.findIndex(o => o.value === value))

  function selectOption(v: string) {
    onChange(v)
    setOpen(false)
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setHighlight(selectedIndex)
        setOpen(true)
      }
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlight(h => Math.min(options.length - 1, h + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlight(h => Math.max(0, h - 1))
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      selectOption(options[highlight].value)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setOpen(false)
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        role="combobox"
        aria-labelledby={labelledBy}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen(o => !o)}
        onKeyDown={onKeyDown}
        className={`w-full flex items-center justify-between gap-2 border-2 ${bg} pl-4 pr-3 py-[.6rem] text-[.9rem] text-left outline-none focus:border-terra ${error ? 'border-[#B3261E]' : 'border-roble'} ${selected ? 'text-roble' : 'text-muted'}`}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <svg
          className={`shrink-0 text-roble transition-transform ${open ? 'rotate-180' : ''}`}
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          tabIndex={-1}
          className={`absolute z-10 mt-1 w-full max-h-60 overflow-auto border-2 border-roble ${bg}`}
          style={{ boxShadow: '4px 4px 0 #5D4037' }}
        >
          {options.map((o, i) => (
            <li
              key={o.value}
              role="option"
              aria-selected={o.value === value}
              onMouseEnter={() => setHighlight(i)}
              onClick={() => selectOption(o.value)}
              className={`px-4 py-[.55rem] text-[.88rem] cursor-pointer ${i === highlight ? 'bg-terra text-white' : 'text-roble'} ${o.value === value ? 'font-bold' : ''}`}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
