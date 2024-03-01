const Client = require('../models/client.model.js');

exports.create = async (payload) => {
    const client = new Client(payload)
    await client.save();
    return client;
}

exports.getAll = async () => {
    return await Client.find();
}


exports.remove = async (id) => {
    return await Client.findByIdAndDelete(id);
}

exports.update = async (id, payload) => {
    return await Client.findByIdAndUpdate(id, payload, { new: true })
}