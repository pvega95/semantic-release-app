export default {
  branches: [
    'main',
    { name: 'develop', prerelease: true }
  ],
  repositoryUrl: 'https://github.com/your-username/your-repo-name',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        // eslint-disable-next-line no-undef
        assets: process.env.BRANCH_NAME === 'develop'
          ? ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
          : ['CHANGELOG.md', 'README.md', 'docs/**', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
}