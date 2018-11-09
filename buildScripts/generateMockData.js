/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

// faker and chance are no longer include in json-schema-faker 0.5.x and above, so must register as below
jsf.extend('faker', () => require('faker'));
jsf.extend('chance', () => require('chance'));


// use the async-version (preferred way)
jsf.resolve(schema).then(json => {
  fs.writeFile("./src/api/db.json", JSON.stringify(json), function (err) {
    if (err) {
      return console.log(chalk.red(err));
    } else {
      console.log(chalk.green("Mock data generated."));
    }
  });
});
