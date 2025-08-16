import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import babelParser from '@babel/eslint-parser'; // قد تحتاج إلى هذا البارسر
import reactPlugin from 'eslint-plugin-react'; // استيراد الإضافة

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin, // تسجيل الإضافة
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      'plugin:react/recommended', // إضافة قواعد الإضافة الموصى بها
    ],
    languageOptions: {
      parser: babelParser, // تأكد من وجود هذا أو بارسر مناسب آخر لـ JSX
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules, // دمج قواعد React الموصى بها
      'react/react-in-jsx-scope': 'off', // إذا كنت تستخدم React الإصدار 17 أو أعلى
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
    settings: {
      react: {
        version: 'detect', // للسماح للإضافة باكتشاف إصدار React تلقائيًا
      },
    },
  },
  {
    files: ['postcss.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        exports: 'readonly',
      },
    },
  },
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
      },
    },
  },
]);