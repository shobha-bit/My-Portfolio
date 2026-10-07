// ======================= CENTRAL PROJECT CONFIG =======================
// 1) Replace this ONE value with your deployed RetailIQ URL (must start with https://).
export const RETAILIQ_LIVE_URL = 'YOUR_RETAILIQ_LIVE_URL'
// 2) Optional: Power BI "Publish to web" embed URL. When set, a "Power BI" tab appears in the dashboard preview.
export const POWERBI_EMBED_URL = ''
export const RETAILIQ_REPO = 'https://github.com/shobha-bit/enterprise-retail-intelligence-platform'
export const liveReady = /^https?:\/\//.test(RETAILIQ_LIVE_URL)

export const featured = {
  id: 'retail',
  title: 'RetailIQ: Enterprise Retail Intelligence Platform',
  repo: RETAILIQ_REPO,
  powerBiUrl: '',
  summary: 'An end-to-end retail analytics platform that transforms raw retail data into business-ready intelligence across sales, customers, products, returns, payments, inventory and transportation.',
  tagline: 'From raw retail data to decision-ready intelligence.',
  tools: ['Excel', 'Python', 'Pandas', 'NumPy', 'PostgreSQL', 'SQL', 'Matplotlib', 'Seaborn', 'Power BI', 'Git'],
  // Project dataset / analysis figures only. Not personal achievements or business results.
  kpis: [[9800, 'Orders'], [793, 'Customers'], [1861, 'Products'], [1146, 'High-Value Orders']],
  coverage: [[5315, 'product performance records'], [48, 'monthly sales records'], [490, 'return-related records']],
  pipeline: ['Raw Data', 'Data Cleaning', 'Data Validation', 'Python Processing', 'Feature Engineering', 'PostgreSQL', 'SQL Business Analysis', 'Business Views', 'Power BI Dashboard', 'Business Insights'],
  stages: [
    { name: 'Raw Data', tool: 'Retail source files', purpose: 'Order, customer, product and operations records as received.', output: 'Unprocessed retail dataset.' },
    { name: 'Excel', tool: 'Microsoft Excel', purpose: 'First inspection and formatting of the raw files.', output: 'Reviewed, consistently formatted data.' },
    { name: 'Python / Pandas', tool: 'Python, Pandas, NumPy', purpose: 'Cleaning, preprocessing and feature engineering.', output: 'About 9,800 valid orders, analysis-ready.' },
    { name: 'PostgreSQL', tool: 'PostgreSQL', purpose: 'Structured storage and analytical querying.', output: 'Relational tables.' },
    { name: 'SQL Analysis', tool: 'SQL', purpose: 'Joins, aggregations and analytical queries.', output: 'Results for each business question.' },
    { name: 'Business Views', tool: 'SQL views', purpose: 'Reusable views for sales, customers, products, returns, payments, inventory and transport.', output: 'Dashboard-ready datasets.' },
    { name: 'Power BI', tool: 'Power BI', purpose: 'Interactive dashboards and KPI reporting.', output: 'Interactive dashboards.' },
    { name: 'Business Insights', tool: 'Analysis', purpose: 'Decision-ready business information.', output: 'Answers to the business questions.' },
  ],
  questions: [
    ['Which products generate the highest sales?', 'Products'], ['Which customers contribute the most revenue?', 'Customers'],
    ['How does sales performance change over time?', 'Sales'], ['Which products or categories require attention?', 'Products'],
    ['Which orders are high value?', 'Sales'], ['What patterns appear in returns?', 'Returns'],
    ['Which shipping modes are most frequently used?', 'Transport'], ['What customer discount opportunities can be identified?', 'Customers'],
    ['What inventory-related insights can be extracted?', 'Inventory'],
  ],
  story: [
    ['Business problem', 'Retail businesses generate large amounts of transactional data, but raw data is difficult to use directly for decision-making.'],
    ['Data', 'Retail order, customer, product and operations data.'],
    ['Cleaning', 'Data validation, formatting, duplicate checks and preprocessing.'],
    ['Transformation', 'Python / Pandas processing and feature engineering.'],
    ['Database', 'PostgreSQL database for structured storage.'],
    ['SQL analysis', 'Joins, aggregations, window functions and analytical queries.'],
    ['Business views', 'Customer, product, sales, return, payment, inventory and transportation views.'],
    ['Visualization', 'Power BI and analytical visualizations.'],
    ['Insights', 'Decision-ready business information.'],
  ],
  caseStudy: {
    problem: 'Retail businesses generate large amounts of transactional data, but raw data is difficult to use directly for decision-making.',
    approach: 'Treat the work as a pipeline rather than a single dashboard: clean and validate raw data, process and engineer features in Python, load it into PostgreSQL, answer business questions in SQL, publish reusable business views, and present results in Power BI.',
    data: 'Retail order, customer, product and operations data covering sales, returns, payments, inventory and transportation. About 9,800 valid orders remained after cleaning.',
    sql: ['Joins across orders, customers and products', 'Aggregations for sales and customer summaries', 'Window functions for ranking and trends', 'Business views that feed the dashboard'],
    python: ['Cleaning and validating raw records with Pandas', 'Duplicate and consistency checks', 'Feature engineering for analysis-ready tables', 'Exploratory charts with Matplotlib and Seaborn'],
    powerbi: 'The dashboard layer sits on top of the PostgreSQL business views.',
    questions: ['Which products generate the highest sales?', 'Which customers contribute the most revenue?', 'How does sales performance change over time?', 'What patterns appear in returns?', 'Which shipping modes are most frequently used?'],
    insights: 'Add findings you have verified in your own analysis here. None are claimed on this site until you do.',
  },
}

// ---- OTHER PROJECTS: add real projects only. Set status to 'live' when ready.
export const otherProjects = []
// Example item: { id: 'p2', status: 'live', title: '...', description: '...', tags: ['SQL'], repo: 'https://github.com/...', demo: '' }
