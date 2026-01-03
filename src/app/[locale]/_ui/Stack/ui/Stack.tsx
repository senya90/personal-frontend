import cn from 'classnames'
import { useTranslations } from 'next-intl'

import { StackCard } from '@/entities/stack'
import { margins } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

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
  const t = useTranslations('Stack')
  const styleBox = cn(styles.stackBox, margins.mb_l)
  const styleBoxMini = cn(styles.stackBoxMini, margins.mb_l)

  return (
    <section aria-labelledby="stack-heading" role="region">
      <div className={stylesMain.section}>
        <Typography
          variant="h3"
          component="h2"
          bottomOffset="l"
          id="stack-heading"
        >
          {t('title')}
        </Typography>

        <div className={styleBox} role="list" aria-label={t('title')}>
          <StackCard title="JavaScript" icon={js} role="listitem" />
          <StackCard title="TypeScript" icon={ts} role="listitem" />
          <StackCard
            title="HTML / CSS"
            description="CSS-in-JS, CSS Modules"
            icon={htmlcssIcon}
            role="listitem"
          />
          <StackCard title="React" icon={reactIcon} role="listitem" />
          <StackCard
            title="Redux"
            description="Redux, Redux Toolkit (RTK)"
            icon={reduxIcon}
            role="listitem"
          />
          <StackCard
            title="React Query / RTK Query"
            description="TanStack Query"
            icon={reactQuery}
            role="listitem"
          />
          <StackCard
            title="Formik / React Hook Form"
            description={t('forms')}
            icon={reactHookFormIcon}
            role="listitem"
          />
          <StackCard
            title="Yup / Zod"
            description={t('validation')}
            icon={zodIcon}
            role="listitem"
          />
          <StackCard
            title="WebSocket"
            description={'WebSocket, Socket.io'}
            icon={socketioIcon}
            role="listitem"
          />
          <StackCard
            title="Jest / React-testing-library"
            description={t('testing')}
            icon={testing}
            role="listitem"
          />
          <StackCard
            title="Webpack"
            description="Vite, Turbopack"
            icon={webpackIcon}
            role="listitem"
          />

          <StackCard
            title="Eslint / Prettier / Husky"
            description={t('linters')}
            icon={eslintIcon}
            role="listitem"
          />
        </div>

        <div className={styles.advancedBox}>
          <div role="group" aria-labelledby="backend-heading">
            <Typography
              variant="h5"
              component="h4"
              bottomOffset="s"
              id="backend-heading"
            >
              Backend
            </Typography>
            <div className={styleBoxMini} role="list" aria-label="Backend">
              <StackCard
                title="Node.js"
                description="NestJS, Express"
                icon={nodejsIcon}
                role="listitem"
              />
            </div>
          </div>

          <div role="group" aria-labelledby="ci-cd-heading">
            <Typography
              variant="h5"
              component="h4"
              bottomOffset="s"
              id="ci-cd-heading"
            >
              CI/CD
            </Typography>
            <div className={styleBoxMini} role="list" aria-label="CI/CD">
              <StackCard title="Docker" icon={dockerIcon} role="listitem" />
              <StackCard title="TeamCity" icon={teamcityIcon} role="listitem" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
