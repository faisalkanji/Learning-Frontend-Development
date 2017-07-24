# [SASS](http://sass-lang.com/)
CSS Preprocesser - adds funtionality that doesn't exsist in CSS yet like variables, mixins, inherentences...

## Getting started
1. Install globally on computer once
`sudo gem install sass --no-user-install`
1. To transform a SASS file to CSS
	1. From command line `sass input.scss output.css`
	1. To watch a folder `sass --watch app/sass:public/stylesheets`

## Usage

### Variable
Use the $ sign to make a variable

### Mixins
Make groups of CSS declarations that you want to reuse throughout your site
`=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius

.box
  +border-radius(10px)`

### Inheritance
Using @extend lets you share a set of CSS properties from one selector to another
`.message
  border: 1px solid #ccc
  padding: 10px
  color: #333


.success
  @extend .message
  border-color: green
`
### Partials/Import
1. Keeps code more modular + import doesn't make multiple HTTP requests
1. To declare a parital file prepend the file name with an underscore
1. Use @import to import a file

### Other
Operators to do math eg. +, -, , *
Nesting to create hierachy
