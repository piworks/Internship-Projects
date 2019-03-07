exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'tests/e2e/Home-spec.Spec.js',
        'tests/e2e/PartTime-spec.Spec.js'

    ]
}

