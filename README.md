- npm install --save-dev parcel
- dist (final product) is created by parcel



- I could not start vite (policy violation):

You are using Node.js 18.19.1. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.
file:///home/abuahmad/git/almdrasa/qurantab-landing-page/node_modules/vite/dist/node/cli.js:541
                                this.dispatchEvent(new CustomEvent("command:!", { detail: command }));
                                                       ^

ReferenceError: CustomEvent is not defined
    at CAC.parse (file:///home/abuahmad/git/almdrasa/qurantab-landing-page/node_modules/vite/dist/node/cli.js:541:28)
    at file:///home/abuahmad/git/almdrasa/qurantab-landing-page/node_modules/vite/dist/node/cli.js:834:5
    at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:336:24)

Node.js v18.19.1 ----> I could not update Node.js
