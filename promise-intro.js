'use strict';

const  https = require('node:https');
const fs = require('node:fs');
const { resolve } = require('node:path');
const { rejects } = require('node:assert');

const promise = new Promise((resolve, reject) => {
  let data = '';
  https.get('https://www.nicovideo.jp/ranking/genre/all?term=hour&rss=2.0&lang=ja-jp', (response) => {
    response
      .on('data', (chunk) => {
        data += chunk;
      })
      .on('end', () => {
        resolve(data);
      });
  })
});

promise.then((data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('test.txt', data, 'utf8', () => {
      resolve('success!');
    });
  });
}).then((message) => {
  console.log(message);
});