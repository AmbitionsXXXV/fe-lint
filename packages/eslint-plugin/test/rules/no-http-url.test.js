'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'å';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://etcetera.com';",
      output: "var test = 'http://etcetera.com';",
      errors: [
        {
          message: 'Recommended "http://etcetera.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://etcetera.com' />",
      output: "<img src='http://etcetera.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://etcetera.com" switch to HTTPS',
        },
      ],
    },
  ],
});
