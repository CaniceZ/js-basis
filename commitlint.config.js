module.exports = {
    // extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['update', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert', 'merge']
      ]
    }
  }
  