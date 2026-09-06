module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce allowed types
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert'
      ]
    ],
    // Enforce that scopes match our architecture packages
    'scope-enum': [
      1,
      'always',
      ['root', 'web', 'api', 'shared', 'auth', 'compressor', 'history', 'infra']
    ],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']]
  }
};
