# task-currency-tracker-app

## Getting Started

After cloning the repo, consult `package.json` for the requirements with regard to nodejs and yarn versions.
Install dependencies with:

```bash
yarn
```

Run the development server with:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For the full list of available scripts (`yarn lint`, `yarn test`, `yarn build`, etc.), please consult `scripts` section of `package.json` or `scripts` section of the documentation for additional decription.

## Scripts

Run the scripts using:

```bash
yarn <script_name>
```

At the moment, the following scripts can be run within the project:

- start - start the application in production mode after creating the production assembly;
- build - create an optimised production build of the application;
- dev - launch the application in development mode;
- clean - delete the build folder and all its files using rm;
- clean:npm - delete the node_modules folder and all its files with rm;
- lint - check for all the existing eslint errors and warnings in the files;
- lint:fix - fix all eslint errors and warnings available for fixing;
- prettier - check for all code style issues in files;
- prettier:fix - fix all the code style issues in files;

**Note**: The following commands use the `.gitignore` file instead of their own ignore file: `lint`, `lint:fix`, `prettier`, `prettier:fix`.
