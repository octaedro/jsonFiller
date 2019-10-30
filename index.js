// import { errorHandler } from './entities/error';

function jsonFiller(objects, jsonMap) {
    if (objects && jsonMap) {
        if (Object.prototype.toString.call(jsonMap) === '[object Object]') {
            jsonMap = JSON.stringify(jsonMap);
        }
        if (Array.isArray(objects)) {

        } else {
            return parseObject(objects, jsonMap);
        }
    } else {
        console.log("invalid object!");
        return "invalid object!";
    }    
}

function replaceAll (str, searchStr, replaceStr) {
    if(str.indexOf(searchStr) === -1) {
        return str;
    }
    return (replaceAll(str.replace(searchStr, replaceStr), searchStr, replaceStr))
}

function parseObject(obj, json) {
    Object.keys(obj).forEach(function(key,index) {
        let keyName = `[[${obj.className}.${key}]]`;
        let content = obj[key];
        json = replaceAll(json, keyName, content);
    });
    return JSON.parse(json);
}
module.exports.jsonFiller = jsonFiller;