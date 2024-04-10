const skills = [
{id: 145262, learned: 'javascript', done: true},
{id:17596, learned: 'debugging', done: true},
{id:13859, learned: 'routing', done: false},
{id: 18543, learned: 'express', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkillsList) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
    Object.assign(skill, updatedSkillsList);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
   id = parseInt(id);
   return skills.find((skill) => skill.id === id); 
};

function getAll() {
    return skills;
}