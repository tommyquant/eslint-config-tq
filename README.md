# eslint-config-tq

Install by using:

```
npm install eslint git+ssh://https://github.com/tommyquant/eslint-config-tq.git --save-dev
```

If using React, also install `eslint-plugin-react`:

```
npm install eslint-plugin-react
```

Afterwards, create a file named `.eslintrc.json` with the following contents:

```js
{
    "extends": [
        "eslint-config-tq",
        "plugin:react/recommended" // Omit if not using eslint-plugin-react
    ]
}
```
