import {expect} from 'chai';
import fs from 'fs';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say Hello World', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Hello World");
  });
});
