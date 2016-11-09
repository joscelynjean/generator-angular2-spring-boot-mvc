'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

// version
var versions = {
  "angularcli": "^1.0.0-beta.19-3"
}

module.exports = yeoman.Base.extend({

  welcome: function() {
    this.log(yosay(
      'Welcome to the doozie ' + chalk.red('generator-angular2-spring-boot-mvc') + ' generator!'
    ));
  },

  prompting: function() {
    return this.prompt([
      // Artifact ID in the pom.xml
      {
        type    : 'input',
        name    : 'artifactId',
        message : 'Your artifact ID'
      },
      // Package name for the pom.xml, folder generation and java classes
      {
        type    : 'input',
        name    : 'package',
        message : 'Your package (ex: com.organization)'
      }
    ]).then(function (props) {
        // Properties to use later
        this.props = props;
      }.bind(this));
  },

  writing: function () {
    var folderHierarchy = this.props.package.replace(/\./g, "//");

    // Copy base
    this.fs.copyTpl(
      this.templatePath('*'),
      this.destinationPath('.'),
      {
        artifactId: this.props.artifactId,
        package: this.props.package
      }
    );

    // Copy java file to the corresponding folder
    this.fs.copyTpl(
      this.templatePath('src/main/java'),
      this.destinationPath('src/main/java/' + folderHierarchy),
      {
        artifactId: this.props.artifactId,
        package: this.props.package
      }
    );

    // Copy angular webapp and end-to-end testing
    this.fs.copyTpl(
      this.templatePath('src/main/webapp'),
      this.destinationPath('src/main/webapp'),
      {
        artifactId: this.props.artifactId,
        package: this.props.package
      }
    );
    this.fs.copyTpl(
      this.templatePath('e2e'),
      this.destinationPath('e2e'),
      {
        artifactId: this.props.artifactId,
        package: this.props.package
      }
    );
    mkdirp.sync(this.destinationPath('src/main/webapp') + '/assets');

  },

  // Install node dependencies
  install: function () {
    this.npmInstall()
  }
});
