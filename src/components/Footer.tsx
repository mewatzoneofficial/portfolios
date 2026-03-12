import { PORTFOLIO_DATA as D } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer>
      <div>© 2025 Raseed Saukat Ali — Full-Stack Web Developer</div>
      <div style={{ color: 'var(--a)' }}>Laravel · CodeIgniter · Node.js · React.js</div>
      <div>
        <a href={`mailto:${D.email}`}>Email</a> ·{' '}
        <a href={D.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{' '}
        <a href={D.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
