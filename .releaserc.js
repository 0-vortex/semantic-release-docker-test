module.exports = {
    branches: [
        'main'
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/git", {
            "assets": [
                "CHANGELOG.md",
                "package.json",
                "package-lock.json",
                "npm-shrinkwrap.json",
                "public/diagram.svg"
            ],
            "message": `chore(release): \${nextRelease.version}\n\n\${nextRelease.notes}`
        }],
        ["@semantic-release/github", {
            "assets": [
                {
                    "path": "pack/*.tgz",
                    "label": "Static distribution"
                }
            ]
        }],
    ]
};
