# coc-blade-snippets

## Features

- Snippets completion

## Install

**vim-plug**:

```vim
Plug 'yaegassy/coc-blade-snippets', {'do': 'yarn install --frozen-lockfile'}
```

## Usage

To use it, you need to install [coc-snippets](https://github.com/neoclide/coc-snippets).

And set `snippets.loadFromExtensions` to `true` in "coc-settings.json"

```jsonc
{
  // ...snip
  "snippets.loadFromExtensions": true,
  // ...snip
}
```

## Update snippets

```sh
yarn snippets
```

## License

MIT

---

> This extension is built with [create-coc-extension](https://github.com/fannheyward/create-coc-extension)
