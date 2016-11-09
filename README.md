# generator-angular2-spring-boot-mvc [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

Generator based on the following technologies :

- Angular 2
- sass/scss
- Spring boot (runnable war)
- Spring MVC

The project is based on the following version :

- angular-cli : 1.0.0-beta.18
- Spring : 1.4.0.RELEASE

## Installation

First, install [Yeoman](http://yeoman.io), [Angular-cli](https://cli.angular.io/) and generator-angular2-spring-boot-mvc using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g angular-cli
npm install -g generator-angular2-spring-boot-mvc
```

Then generate your new project:

```bash
yo angular2-spring-boot-mvc
```

## Build and run docker image

To build a Docker image, from the root of your project folder.

```bash
docker build -t nameOfYourImage .
```

To run a container :

```bash
docker run -p 8080:8080 nameOfYourImage
```

## Development

### Angular 2 application

The application makes use of angular-cli. All the command are supported. For more information, please visit [angular-cli](https://github.com/angular/angular-cli).

It is recommended to use angular-cli to generate Components, Directives, Pipes and Services

## Improvements

- Debugging with Angular2 (web) and Spring (java) through an IDE like Eclipse
- Include PhantomJS as a headless browser for testing
- Better integration of angular-cli

## License

MIT © [Joscelyn Jean](http://www.joscelynjean.com)


[npm-image]: https://badge.fury.io/js/generator-angular2-spring-boot-mvc.svg
[npm-url]: https://npmjs.org/package/generator-angular2-spring-boot-mvc
[travis-image]: https://travis-ci.org/joscelynjean/generator-angular2-spring-boot-mvc.svg?branch=master
[travis-url]: https://travis-ci.org/joscelynjean/generator-angular2-spring-boot-mvc
[daviddm-image]: https://david-dm.org/joscelynjean/generator-angular2-spring-boot-mvc.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/joscelynjean/generator-angular2-spring-boot-mvc
