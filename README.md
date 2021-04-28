# coc-blade-snippets

Laravel blade snippets for [coc.nvim](https://github.com/neoclide/coc.nvim). Provides "snippets completion" and "hover".

## Features

- Snippets completion
- Hover

## Install

**CocInstall**:

```vim
:CocInstall @yaegassy/coc-blade-snippets
```

> scoped packages

**vim-plug**:

```vim
Plug 'yaegassy/coc-blade-snippets', {'do': 'yarn install --frozen-lockfile'}
```

## Usage (snippets completion)

To use it, you need to install [coc-snippets](https://github.com/neoclide/coc-snippets).

And set `snippets.loadFromExtensions` to `true` in "coc-settings.json"

```jsonc
{
  // ...snip
  "snippets.loadFromExtensions": true,
  // ...snip
}
```

## Related coc.nvim extension

- [yaegassy/coc-blade-formatter](https://github.com/yaegassy/coc-blade-formatter)
- [yaegassy/coc-blade-linter](https://github.com/yaegassy/coc-blade-linter)

## License

MIT

---

> This extension is built with [create-coc-extension](https://github.com/fannheyward/create-coc-extension)
