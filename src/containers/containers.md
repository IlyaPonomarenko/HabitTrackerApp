## what is this folder for?

All stateful components belong here

## how to import colors and fonts?

Inside scss import /utilities/variables/ with @use

```
@use '../../utilities/variables/' as variables;
```

## hot to use imported fonts?

```
font-weight: variables.$typescale-body-large-weight;
```

## how to use mixins?

Using include inside scss

```
@include variables.display-large;
```
