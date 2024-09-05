<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Game Engine is a system that allows creation of campaigns/events such as Fortune Rain to allow the consumers to
* Create, send, or receive challenge(s) on a game/event that they have created to each other.
* Collect different types of rewards after the completing the challenges.
* Process of the transactions based on the transactions coming from other systems.


### Modules/Services
Located at [apps](apps) directory, the services are defined as the following:

* [campaign-setup](apps%2Fcampaign-setup): Setup new campaign for the upcoming game events.
* [cep-game-engine](apps%2Fcep-game-engine) (main): Main application.
* [game-engine](apps%2Fgame-engine): Process games created by the users. Store game results information.
* [reward-redemption](apps%2Freward-redemption): Claim the rewards from the game.
* [task](apps%2Ftask): A task is considered as a game event happened in the system.
* [transaction-log](apps%2Ftransaction-log): Producing rewards from the transactions based on the game rules defined.


### Ports:
Ports of each microservice is different to launch the microservices in the terminal without conflicts.
* campaign-setup: 3001
* cep-game-engine (main): 3000
* game-engine: 3002
* reward-redemption: 3003
* task: 3004
* transaction-log: 3005

# Note(s):
* **Monorepo** design. So all modules are created within the project itself.
* Every module is build as **microservice**. So that the app can be individually deployed and scaled during production.
* Data Transfer Objects (DTOs) are created in a library module in order to
* Using the following:
  * Typescript
  * Prettier: To format code, imports of the project.
  * Jest: For unit testing.

# Development

## Project Setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Module Creation
To create new microservices in the project, execute the following:

```bash
nest generate app MODULE_NAME
```

For example:
```bash
nest generate app game-engine
```

This creates a directory that defines a controller, service, routes and tests that are configured automatically.

### Start the Module Individually
```bash
nest start MODULE_NAME
```

For example:
```bash
nest start game-engine
```

## Library Creation
To create reusable components that can be share across modules (for example Authentication), execute the following:

```bash
nest generate library MODULE_NAME
```

For example,
```bash
nest generate library auth
```

## Testing

Ensure the test cases are executed within the given framework and approved libraries successfully without causing issues in software delivery.

Execute the following:
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
