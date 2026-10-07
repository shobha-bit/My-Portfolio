import { useState } from 'react'
import { POWERBI_EMBED_URL } from '../data/projects'

// ILLUSTRATIVE values. This is a front-end preview, not a live Power BI connection.
const trend = [32, 40, 36, 48, 55, 50, 62, 70, 66, 78, 74, 86]
const H = (title, rows) => ({ title, type: 'h', rows })
const tabs = {
  Overview: [{ title: 'Revenue trend', type: 'l', d: trend }, H('Sales by category', [['Category A', 82], ['Category B', 64], ['Category C', 47], ['Category D', 31]]), { title: 'Returns by month', type: 'v', d: [20, 34, 26, 18, 30, 22] }, H('Payment analysis', [['Method 1', 70], ['Method 2', 45], ['Method 3', 25]])],
  Sales: [{ title: 'Monthly sales', type: 'l', d: [40, 44, 38, 52, 60, 58, 66, 72, 70, 80, 78, 90] }, H('Sales by category', [['Category A', 88], ['Category B', 60], ['Category C', 52], ['Category D', 28]]), { title: 'High-value orders by month', type: 'v', d: [12, 18, 15, 24, 20, 28] }, H('Region performance', [['Region 1', 76], ['Region 2', 58], ['Region 3', 40]])],
  Customers: [H('Customer performance', [['Customer A', 90], ['Customer B', 72], ['Customer C', 61], ['Customer D', 44], ['Customer E', 30]]), { title: 'Customer orders trend', type: 'l', d: [20, 26, 30, 28, 36, 40, 38, 46, 52, 50] }, H('Discount opportunities', [['Segment 1', 66], ['Segment 2', 48], ['Segment 3', 30]])],
  Products: [H('Product performance', [['Product A', 92], ['Product B', 78], ['Product C', 66], ['Product D', 50], ['Product E', 34]]), { title: 'Product sales trend', type: 'l', d: [30, 34, 42, 40, 50, 54, 60, 58, 68, 72] }, H('Products needing attention', [['Product X', 58], ['Product Y', 41], ['Product Z', 26]])],
  Operations: [H('Shipping analysis', [['Mode 1', 80], ['Mode 2', 55], ['Mode 3', 34]]), H('Inventory status', [['In stock', 74], ['Low stock', 38], ['Out of stock', 16]]), { title: 'Returns trend', type: 'l', d: [24, 20, 28, 26, 22, 30, 25, 21] }, H('Payment analysis', [['Method 1', 68], ['Method 2', 46], ['Method 3', 28]])],
}

const Line = ({ d }) => {
  const max = Math.max(...d), p = d.map((v, i) => `${(i / (d.length - 1)) * 250 + 5},${80 - (v / max) * 70}`).join(' ')
  return <svg viewBox="0 0 260 86" className="h-24 w-full" role="img" aria-label="Illustrative trend chart"><polyline pathLength="1" className="draw" fill="none" stroke="rgb(var(--accent))" strokeWidth="2" points={p} /></svg>
}
const VBars = ({ d }) => <div className="flex h-24 items-end gap-2" role="img" aria-label="Illustrative bar chart">{d.map((v, i) => <div key={i} className="bar flex-1 rounded-t bg-accent/80" style={{ height: `${v * 2.5}%`, animationDelay: `${i * 60}ms` }} />)}</div>
const HBars = ({ rows }) => (
  <ul className="space-y-2.5">{rows.map(([l, v], i) => (
    <li key={l} className="grid grid-cols-[5.5rem_1fr] items-center gap-3 text-xs"><span className="truncate text-muted">{l}</span><span className="h-2.5 rounded bg-bg"><span className="barx block h-full rounded bg-accent/80" style={{ width: `${v}%`, animationDelay: `${i * 80}ms` }} /></span></li>
  ))}</ul>
)

export default function DashboardPreview() {
  const names = [...Object.keys(tabs), ...(POWERBI_EMBED_URL ? ['Power BI'] : [])]
  const [t, setT] = useState('Overview')
  const onKey = (e) => {
    const i = names.indexOf(t), n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null
    if (n === null) return
    const next = names[(n + names.length) % names.length]; setT(next); document.getElementById(`tab-${next}`)?.focus()
  }
  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-bg/60 pr-4">
        <div role="tablist" aria-label="Dashboard preview sections" className="flex overflow-x-auto" onKeyDown={onKey}>
          {names.map((n) => <button key={n} id={`tab-${n}`} role="tab" aria-selected={t === n} tabIndex={t === n ? 0 : -1} onClick={() => setT(n)} className={`whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors ${t === n ? 'border-b-2 border-accent text-accent' : 'text-muted hover:text-ink'}`}>{n}</button>)}
        </div>
        <span className="rounded border border-line px-2 py-0.5 text-xs text-amber">Interactive Portfolio Preview</span>
      </div>
      <div role="tabpanel" aria-labelledby={`tab-${t}`} className="p-4 sm:p-5">
        {t === 'Power BI'
          ? <iframe title="RetailIQ Power BI dashboard" src={POWERBI_EMBED_URL} className="h-[480px] w-full rounded border border-line" allowFullScreen />
          : <div key={t} className="grid gap-4 md:grid-cols-2">{tabs[t].map((p) => (
              <div key={p.title} className="rounded-md border border-line bg-surface p-4"><h4 className="mb-3 text-sm font-semibold">{p.title}</h4>{p.type === 'l' ? <Line d={p.d} /> : p.type === 'v' ? <VBars d={p.d} /> : <HBars rows={p.rows} />}</div>
            ))}</div>}
      </div>
      <p className="border-t border-line bg-bg/60 px-4 py-2 text-xs text-muted">Interactive Portfolio Preview: a front-end illustration with sample values. It is not a live Power BI connection.</p>
    </div>
  )
}
