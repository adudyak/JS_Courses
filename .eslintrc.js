module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:codeceptjs/recommended"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "codeceptjs/no-actor-in-scenario": 2
      }
}
