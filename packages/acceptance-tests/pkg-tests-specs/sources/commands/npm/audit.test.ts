export {};

const {
  tests: {startPackageServer},
} = require(`pkg-tests-core`);

describe(`Commands`, () => {
  describe(`npm audit`, () => {
    // TODO
    // test ignore as flag
    // test exclude as flag
    // test ignore as config
    // test exclude as config
    // test combinations
    // test json
    // test environment
    // test severity
    // test recursive
    test.todo(`it should report vulnerable packages`);
    test.todo(`it should exclude packages`);
    test.todo(`it should only exclude excluded packages`);
    test.todo(`it should only ignore ignored advisories`);
    test.todo(`it should return results as JSON`);
    test.todo(`it should only use the specified environment`);
    test.todo(`it should only use the specified severity level`);
    test.todo(`it should recurse packages to audit`);

    test(`it should ignore advisories`, makeTemporaryEnv({
      dependencies: {[`no-deps`]: `1.0.0`},
    }, async ({path, run, source}) => {
      await startPackageServer();
      await run(`install`);
      const {code, stdout, stderr} = await run(`npm`, `audit`, `--recursive`);
      console.log(`Code ${code}, ${stdout}, ${stderr}`);
    }),
    );
  });
});
