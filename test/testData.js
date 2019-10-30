let testData = {
    objects: {
        simple: {
            className: 'person',
            id: 123,
            name: 'Jon Doe',
            company: 'Skynet'
        },
        nested_1: {
            className: 'plane',
            id: 333,
            pilot: {
                className: 'person',
                id: 123,
                name: 'Jon Doe',
                hability: 'drink tea'
            },
            capacity: 100,
            size: 'big'
        }
    },
    jsons: {
        simple: {
            userId: '[[person.id]]',
            userName: '[[person.name]]',
            userCompany: '[[person.company]]'
        },
        nested_1: {
            planeId: '[[plane.id]]',
            pilotId: '[[plane.pilot|person.name]]',
            pilotName: '[[person.name]]',
            pilotHability: '[[person.name]]',
            planeCapacity: '[[plane.company]]',
            planeSize: '[[plane.company]]'
        }
    }
}
module.exports = testData;