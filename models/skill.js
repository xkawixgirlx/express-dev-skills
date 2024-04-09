const skills = [{id: 145262, learned: 'javascript', done: true},
{id:17596, learned: 'debugging', done: true},
{id:13859, learned: 'routing', done: false},
{id: 18543, learned: 'express', done: false}
];

module.exports = {
    getAll,
};

function getAll() {
    return skills;
}