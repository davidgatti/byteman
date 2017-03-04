# Byteman

🤖 Display bytes in a human readable format: KB, MB, GB, TB, PB, EB, ZB, YB

Byteman is short for "bytes to human" which is a tool to convert a number, normally the amount of bytes of something in to a human readable format. For example 1000 bytes will become 1KB. Helping you work with big number more easily, and also helping you user understand better what is going on.

# Example

```
let byteman = require('byteman');

let human_form = byteman(10000);
let human_form_decima = byteman(10000, 2);

console.log(human_form)
console.log(human_form_decima)
```

# Disclaimer

If found this beautiful solution on [Stackoverflow](http://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript) made by the user Aliceljm. I liked this approach so much that I decided to make it in to a module, deconstruct the code, understand it and explain it to you.

# Installation

```
$ npm install byteman -S
```

# Other

If you've enjoyed this article/project, please consider giving it a 🌟. Also check out my [GitHub account] (https://github.com/davidgatti), where I have other articles and apps that you might find interesting.

## Where to follow

You can follow me on social media 🐙😇, at the following locations:

- [GitHub](https://github.com/davidgatti)
- [Twitter](https://twitter.com/dawidgatti)
- [Instagram](https://www.instagram.com/gattidavid/)

## More about me

I don’t only live on GitHub, I try to do many things not to get bored 🙃. To learn more about me, you can visit the following links:

- [Podcasts](http://david.gatti.pl/podcasts)
- [Articles](http://david.gatti.pl/articles)
- [Technical Articles](http://david.gatti.pl/technical_articles)
- [Software Projects](http://david.gatti.pl/software_projects)
- [Hardware Projects](http://david.gatti.pl/hardware_projects)
