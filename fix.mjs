const fs = require('fs');
const p = 'src/App.tsx';
let s = fs.readFileSync(p, 'utf8');
s = s.replaceAll(/href=\{\	el:\$\{cvData\.contact\.phone\.replace\(\/\\s\/g, \'\)\}\}/g, 'href={	el:}');
fs.writeFileSync(p, s);
