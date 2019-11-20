install:
    npm install

start:
    npx babel-node src/bin/brain-games.js

prepublish:
    npm publish --dry-run