import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: [
      'dist',
      'src/components/Astronaut.jsx',
      'src/components/Card.jsx',
      'src/components/Chatbot.jsx',
      'src/components/FlipWords.jsx',
      'src/components/Frameworks.jsx',
      'src/components/HeroText.jsx',
      'src/components/Marquee.jsx',
      'src/components/OrbitingCircles.jsx',
      'src/components/Particles.jsx',
      'src/components/ProjectDetails.jsx',
      'src/components/Terminal.jsx',
      'src/components/Timeline.jsx',
      'src/components/globe.jsx',
      'src/components/typewriter-effect.jsx',
      'src/sections/Process.jsx',
      'src/sections/Testimonial.jsx',
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
