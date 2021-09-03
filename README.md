# Kingdom of Loathing Scripts
This repository holds a suite of automation scripts for [a stick figure based internet game](https://kingdomofloathing.com).

The scripts in this repo use the new TypeScript libraries, rather than [ASH](https://wiki.kolmafia.us/index.php?title=Miscellaneous_ASH_Features#Additional_Script_Uses).

## Setting up the dev environment

This project uses [yarn]().

For initial setup, type:

```
$> yarn init
```

When starting a development session, type:

```
$> yarn watch
```

or you can manually build by typing:

```
$> yarn build
```

## Useful commands

These are commands that can be typed into the Mafia CLI for various exciting effects:

* `prefref` shows a list of preferences that can be set
* `jsref` shows a list of javascript commands

## Installing the scripts

DISCLAIMER: these scripts are not formally released yet, they aren't even alpha, they're just for me.  Follow these steps at your own peril.

To install these scripts you will need to:

1. Run `yarn build` 
2. Symlink the the `build/scripty` into your kolmafia `scripts` directory. The command for this will vary depending on your operating system.  Search google for "How do I create a symbolic link in {YOUR OPERATING SYSTEM}".
3. In your Mafia CLI type `scripty` to see what you can do.

## Contributing
This work is inspired by the amazing Kingdom of Loathing community, and many thanks to the many projects that have enabled it.

In particular thanks to the [L.A.S.S. Society](https://github.com/Loathing-Associates-Scripting-Society) and [the kol-js-starter](https://github.com/docrostov/kol-js-starter) project.
