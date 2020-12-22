const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    // this.option('babel'); // This method adds support for a `--babel` flag
    // this.config.save();
  }
  initializing() {
  } // Your initialization methods (checking current project state, getting configs, etc)
  async prompting() { // Where you prompt users for options (where you’d call this.prompt())
    // const answers = await this.prompt([
    //   {
    //     type: "input",
    //     name: "name",
    //     message: "Your project name",
    //     default: this.appname // Default to current folder name
    //   },
    //   {
    //     type: "confirm",
    //     name: "cool",
    //     message: "Would you like to enable the Cool feature?"
    //   }
    // ]);

    // this.log("app name", answers.name);
    // this.log("cool feature", answers.cool);
  }
  
  configuring() {} // Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  default() {
  } // If the method name doesn’t match a priority, it will be pushed to this group.
  async writing() {
    const pkgJson = {
      "main": "dist/index.js",
      "scripts": {
        "start": "mirf start --share='dist/,public/'",
        "dev": "set NODE_ENV=development&& mirf --entry='src/{**/pages/*/,*}index.{tsx,js,jsx}' --share='dist/,public/'",
        "build": "set NODE_ENV=production&& mirf build --entry='src/{**/pages/*/,*}index.{tsx,js,jsx}'"
      },
      "devDependencies": {
        "@types/react": "^17.0.0",
        "@types/styled-components": "^5.1.4"
      },
    };
    if (!this.fs.exists(this.destinationPath('package.json'))) {
      await this.spawnCommand('npm init -y')
    }
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      {}
    );
  } // Where you write the generator specific files (routes, controllers, etc)
  conflicts() {} // Where conflicts are handled (used internally)
  install() {
    this.npmInstall();
  } // Where installations are run (npm, bower)
  end() {} // Called last, cleanup, say good bye, etc
};