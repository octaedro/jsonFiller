const jsonFiller = require('../index');

let object = {
    className: 'person',
    id: 123,
    name: 'Jon Doe',
    company: 'Skynet'
}
let jsonMap = {
    userId: '[[person.id]]',
    userName: '[[person.name]]',
    userCompany: '[[person.company]]'
}
test('Simple object, simple json', () =>{
    let result = jsonFiller.jsonFiller(object,jsonMap);
    let expected = {userId:"123",userName:"Jon Doe",userCompany:"Skynet"};
    expect(Object.entries(result).toString()).toBe(Object.entries(expected).toString());
});