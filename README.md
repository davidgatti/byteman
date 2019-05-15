# 🤖 Byteman

Display bytes in a human readable format: KB, MB, GB, TB, PB, EB, ZB, YB

Byteman is short for "bytes to human" which is a tool to convert a number, normally the amount of bytes of something in to a human readable format. For example `1000` bytes will become `1KB`. Helping you work with big number more easily, and also helping you user understand better what is going on.

# Example

```javascript
let byteman = require('byteman');

let human_form = byteman(10000);
let human_form_decima = byteman(10000, 2);

console.log(human_form)
console.log(human_form_decima)
```

# Installation

```
$ npm install byteman -S
```

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out my [GitHub account](https://github.com/davidgatti), where you'll find additional resources you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in building custom solutions on top of AWS. Follow this link to learn more: https://0x4447.com. Alternatively, send an email to [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
