const jsonFiller = require('../index');
const testData = require('./testData');

test('1 simple object, simple json', () =>{
    let result = jsonFiller.jsonFiller(testData.objects.simple,testData.jsons.simple);
    let expected = {
        userId:"123",
        userName:"Jon Doe",
        userCompany:"Skynet"
    };
    expect(Object.entries(result).toString()).toBe(Object.entries(expected).toString());
});

test('1 nested object, simple json', () =>{
    let result = jsonFiller.jsonFiller(testData.objects.nested_1,testData.jsons.nested_1);
    let expected = {
        planeId: '333',
        pilotId: '123',
        pilotName: 'Jon Doe',
        pilotHability: 'drink tea',
        planeCapacity: '100',
        planeSize: 'big'
    };
    expect(Object.entries(result).toString()).toBe(Object.entries(expected).toString());
});

// fail cases
// test('no object recibed', () =>{
//     let result = jsonFiller.jsonFiller(testData.objects.simple,['hi','this','is','worng']);
//     console.log("result is:")
//     console.log(result);
//     let expected = {
//         userId:"123",
//         userName:"Jon Doe",
//         userCompany:"Skynet"
//     };
//     expect(result).toBe(expected);
// });