# NestJsSeries

## To start nestJs project node js is must. check the nodejs version if it is installed
> node --version

## Install NestJS cli

> npm i -g @nestjs/cli

## To create nestJs project type the command

> nest new projectName

You are done. NestJs project is ready.


Lets create a module, controller and service named users
1. Module

> nest g module users

2. Controller

> nest g controller users

3. Service or provider

> nest g service users

4. To use validator and dto we need following mapped-types

> npm i @nestjs/mapped-types -D