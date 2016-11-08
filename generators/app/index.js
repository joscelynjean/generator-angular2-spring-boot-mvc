'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

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

    // Copy java sources
    this.fs.copyTpl(
      this.templatePath('src/main/java'),
      this.destinationPath('src/main/java/' + folderHierarchy),
      {
        artifactId: this.props.artifactId,
        package: this.props.package
      }
    );

    // Copy pom file
    this.fs.copyTpl(
      this.templatePath('pom.xml'),
      this.destinationPath('pom.xml'),
      {
        artifactId: this.props.artifactId,
        package: this.props.package
      }
    );

    // Copy webapp
    this.fs.copyTpl(
      this.templatePath('src/main/webapp'),
      this.destinationPath('src/main/webapp')
    );
  },

  install: function () {
    //this.installDependencies();
  }
});
