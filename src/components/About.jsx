const flow = [
  ['Business understanding', ['Sales', 'Costs', 'Payments', 'Customers', 'Inventory']],
  ['Technical analysis', ['SQL', 'Python', 'Excel', 'Power BI']],
  ['Business insights', ['Decision-ready answers']],
]
export default function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="section">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 id="about-h" className="h2">Business thinking. Analytical execution.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">My commerce background helps me understand the business problem before I analyze the data: what the sales, costs, payments and stock figures mean, and which question a manager actually needs answered.</p>
          <p className="mt-4 leading-relaxed text-muted">Data analytics is where that understanding meets SQL, Python, Excel and Power BI.</p>
          <ul className="mt-6 flex flex-wrap items-center gap-2 font-display text-lg font-bold" aria-label="Foundation">
            <li className="panel px-3 py-1.5">B.Com</li><li aria-hidden="true" className="text-accent">+</li><li className="panel px-3 py-1.5">PGDCA</li><li aria-hidden="true" className="text-accent">+</li><li className="panel border-accent/60 px-3 py-1.5 text-accent">Data Analytics</li>
          </ul>
        </div>
        <ol className="flex flex-col items-stretch">
          {flow.map(([t, items], i) => (
            <li key={t} className="flex flex-col">
              <div className="panel p-5"><h3 className="font-display text-lg font-semibold">{t}</h3><ul className="mt-3 flex flex-wrap gap-2">{items.map((x) => <li key={x} className="chip">{x}</li>)}</ul></div>
              {i < 2 && <span aria-hidden="true" className="flowline mx-auto h-6 w-px" style={{ background: 'linear-gradient(180deg,rgb(var(--line)),rgb(var(--accent)),rgb(var(--line)))', backgroundSize: '100% 200%' }} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
