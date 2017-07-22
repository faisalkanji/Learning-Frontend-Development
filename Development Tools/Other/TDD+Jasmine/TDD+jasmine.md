# TDD + Jasmine
[jasmine.github.io](https://jasmine.github.io/)

## Test Driven Developemnt
Write tests before writing code so you always know what features you need to make and that they are always working
1. Write full test for what you want code to do
1. Test will fail
1. Write code so last error passes
1. Repeat 2 + # until all tests pass

## Jasmine
Framework for testing javascript code.

### Install Jasmin

Add Jasmine to your package.json
`npm install --save-dev jasmine`

Initialize Jasmine in your project
`./node_modules/.bin/jasmine init`

Set jasmine as your test script in your package.json
`"scripts": { "test": "jasmine" }`

Run your tests
`npm test`

### Usage

1. Add to HTML file

'<link rel="stylesheet" href="jasmine/lib/jasmine-2.1.2/jasmine.css">
<script src="jasmine/lib/jasmine-2.1.2/jasmine.js"></script>
<script src="jasmine/lib/jasmine-2.1.2/jasmine-html.js"></script>
<script src="jasmine/lib/jasmine-2.1.2/boot.js"></script>`

1. Create file in `jasmine/spec/` folder to hold tests

1. See sample file for usage