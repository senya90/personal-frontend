import { Typography } from '@/shared/ui/Typography'
import styles from '../../../styles.module.css'

export const Stack = () => {
  return (
    <section>
      <div className={styles.section}>
        <Typography variant="h3" component="h2">
          Стэк
        </Typography>

        <ul>
          <li>Javascript</li>
          <li>TypeScript</li>
          <li>HTML / CSS (CSS-in-JS, CSS Modules)</li>
          <li>React</li>
          <li>Redux / Redux Toolkit (RTK Query)</li>
          <li>React Query / RTK Query</li>
          <li>Jest / react-testing-library</li>
          <li>Yup / zod</li>
          <li>WebSocket</li>
          <li>Docker</li>
          <li>eslint / prettier / husky</li>
          <li>Node.js (NestJS, Express)</li>
        </ul>
      </div>
    </section>
  )
}
