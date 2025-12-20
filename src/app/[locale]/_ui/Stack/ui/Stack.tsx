import cn from 'classnames'

import { margins } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

import { StackCard } from '@/entity/stack'

import dockerIcon from './icons/docker.png'
import eslintIcon from './icons/eslint.png'
import htmlcssIcon from './icons/htmlcss.png'
import js from './icons/js.png'
import nodejsIcon from './icons/nodejs.png'
import reactIcon from './icons/react.png'
import reactHookFormIcon from './icons/reactHookForm.png'
import reactQuery from './icons/reactQuery.png'
import reduxIcon from './icons/redux.png'
import socketioIcon from './icons/socketio.png'
import teamcityIcon from './icons/teamcity.png'
import testing from './icons/testingLibrary.png'
import ts from './icons/ts.png'
import webpackIcon from './icons/webpack.png'
import zodIcon from './icons/zod.png'
import styles from './styles.module.css'
import stylesMain from '../../../styles.module.css'

export const Stack = () => {
  const styleBox = cn(styles.stackBox, margins.mb_l)
  const styleBoxMini = cn(styles.stackBoxMini, margins.mb_l)

  return (
    <section>
      <div className={stylesMain.section}>
        <Typography variant="h3" component="h2" bottomOffset="l">
          Стэк
        </Typography>

        <div className={styleBox}>
          <StackCard title="JavaScript" icon={js} />
          <StackCard title="TypeScript" icon={ts} />
          <StackCard
            title="HTML / CSS"
            description="CSS-in-JS, CSS Modules"
            icon={htmlcssIcon}
          />
          <StackCard title="React" icon={reactIcon} />
          <StackCard
            title="Redux"
            description="Redux, Redux Toolkit (RTK)"
            icon={reduxIcon}
          />
          <StackCard
            title="React Query / RTK Query"
            description="TanStack Query"
            icon={reactQuery}
          />
          <StackCard
            title="Formik / React Hook Form"
            description="Формы"
            icon={reactHookFormIcon}
          />
          <StackCard title="Yup / Zod" description="Валидация" icon={zodIcon} />
          <StackCard
            title="WebSocket"
            description={'WebSocket, Socket.io'}
            icon={socketioIcon}
          />
          <StackCard
            title="Jest / React-testing-library"
            description="Тестирование"
            icon={testing}
          />
          <StackCard
            title="Webpack"
            description="Vite, Turbopack"
            icon={webpackIcon}
          />

          <StackCard
            title="Eslint / Prettier / Husky"
            description="Линтеры"
            icon={eslintIcon}
          />
        </div>

        <div className={styles.advancedBox}>
          <div>
            <Typography variant="h5" component="h4" bottomOffset="s">
              Backend
            </Typography>
            <div className={styleBoxMini}>
              <StackCard
                title="Node.js"
                description="NestJS, Express"
                icon={nodejsIcon}
              />
            </div>
          </div>

          <div>
            <Typography variant="h5" component="h4" bottomOffset="s">
              CI/CD
            </Typography>
            <div className={styleBoxMini}>
              <StackCard title="Docker" icon={dockerIcon} />
              <StackCard title="TeamCity" icon={teamcityIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
