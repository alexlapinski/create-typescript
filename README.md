# create-typescript

A package initialization template for [`typescript`](https://github.com/Microsoft/TypeScript).

This is a forked version of [`create-typescript`](https://github.com/LoicMahieu/create-typescript).
I've added my own personal changes to it that I usually make after running the base app.

## Usage
```sh
yarn create typescript
```

or 

```sh
npx create typescript
```

## Differences from LoicMahieu's version
- Use `airbnb-config` for base of tslint
- Target es6 for transpiled javascript 
- Added `.editorconfig` file

## Inspirations

- [`create-typescript` by LoicMahieu](https://github.com/LoicMahieu/create-typescript)
- [`create-esm`](https://github.com/standard-things/create-esm)
- [`iarna-create-npm`](https://github.com/iarna/iarna-create-npm)
