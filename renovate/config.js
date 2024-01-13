module.exports = {
    autodiscover: true,
    onboardingConfig: {
        $schema: 'https://docs.renovatebot.com/renovate-schema.json',
        extends: [
            "github>maki-it/.github//renovate:base",
            "github>maki-it/.github//renovate:default-update-type-rules",
            "github>maki-it/.github//renovate:default-schedules"
        ],
    },
}
