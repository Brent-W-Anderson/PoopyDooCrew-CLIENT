import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
    {
        ignores: ['dist/', 'node_modules/']
    },
    js.configs.recommended,
    {
        languageOptions: {
            parser: tsParser,
            globals: {
                document: 'readonly',
                window: 'readonly'
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                jsx: true
            }
        },
        plugins: {
            '@typescript-eslint': ts,
            react: react,
            'react-hooks': reactHooks
        },
        rules: {
            ...ts.configs.recommended.rules,
            ...react.configs.recommended.rules,

            'no-trailing-spaces': 'error',

            // Alphabetize Class Members & Interface Properties & Imports
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: {
                        order: 'alphabetically'
                    }
                }
            ],

            // Set maximum line length to enforce automatic breaking
            'max-len': [
                'error',
                {
                    code: 80,
                    ignoreComments: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true
                }
            ],

            // Enforce spacing rules
            'no-multiple-empty-lines': [
                'error',
                {
                    max: 1,
                    maxEOF: 1,
                    maxBOF: 0
                }
            ],

            // Force properties to new lines when the object exceeds a certain length
            'object-curly-newline': [
                'error',
                {
                    ObjectExpression: {
                        minProperties: 1,
                        multiline: true,
                        consistent: true
                    },
                    ObjectPattern: {
                        minProperties: 1,
                        multiline: true,
                        consistent: true
                    },
                    ImportDeclaration: {
                        minProperties: 3,
                        consistent: true
                    },
                    ExportDeclaration: {
                        minProperties: 3,
                        consistent: true
                    }
                }
            ],

            // parenthesis () formatting: Force properties to be on new lines
            'function-call-argument-newline': ['error', 'consistent'],
            'function-paren-newline': ['error', 'multiline'],

            // Object formatting: Force properties to be on new lines
            'object-property-newline': [
                'error',
                {
                    allowAllPropertiesOnSameLine: false
                }
            ],

            // Style rules
            indent: ['error', 4],
            semi: ['error', 'never'],
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true
                }
            ],
            'space-in-parens': ['error', 'always'],
            'eol-last': ['error', 'never'],
            'array-bracket-spacing': ['error', 'never'],
            'object-curly-spacing': ['error', 'always'],
            'operator-linebreak': ['error', 'before'],
            'comma-dangle': ['error', 'never']
        }
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser
        },
        plugins: {
            '@typescript-eslint': ts
        }
    }
]