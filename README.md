# What is this?

This is a project to fill JSONs with objects attributes.

# Instalation

`npm i jsonFiller --save`

Then ...

```
import { jsonFiller } from 'jsonFiller';

/* example object */
let object = {
    id: 123,
    name: 'Jon Doe',
    company: 'Skynet'
}
let jsonMap = {
    userId: object.id,
    userName: object.name,
    userCompany: object.company
}

let jsonFilled = jsonFiller(object, jsonMap);
/* 
 * This module will return a json with filled values:
 * {
 *   userId: 123,
 *   userName: 'Jon Doe',
 *   userCompany: 'Skynet'
 * }
 */
console.log(jsonFilled);

```