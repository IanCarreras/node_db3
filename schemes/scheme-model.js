const db = require('../data/db-config')

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first()
}

function findSteps(id) {
    return db('steps')
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(id => {
        return findById(id[0])
    })
}

function update(changes, id) {
    return db('schemes')
    .where({ id })
    .update(chamges)
    .then(id => {
        if (id > 0) {
            findById(id)
        } else {
            return null
        }
    })
}

function remove(id) {
    return db('schemes')
    .where({ id })
    .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}