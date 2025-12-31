import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^__',
          argsIgnorePattern: '^__',
          caughtErrorsIgnorePattern: '^__',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'type',
            'object',
          ],
          pathGroups: [
            {
              pattern: '@/{shared,entities}/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/{features,widgets}/**',
              group: 'internal',
            },
            {
              pattern: '@/{pages,app}/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
