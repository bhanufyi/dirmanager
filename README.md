# dirmanager
A basic cli application using Commander

I followed this tutorial: https://blog.logrocket.com/building-typescript-cli-node-js-commander/ to create a basic cli application using Commander.

Somethings that are missing in the tutorial: 

* Initialized with pnpm
* used esbuild to bundle the code, as it a cli based application, I didn't it was neccessary to have types exported. If we do require types, we should generate them using tsc as esbuild doesn't support typescript types yet, or use rollup as it has plugins to generate types.
* Used `act` to iterate locally, `act -W .github/workflows/publish.yaml --container-architecture linux/amd64 --secret-file .secrets`, here you need to create `.secrets` file and add your npm token in it as mentioned in the tutorial.
* `.npmignore` use this avoid pushing files that you don't want you to end up in the final package. Lesson learned the hard way, checkout 1.0.0 tag to see the mistake.
