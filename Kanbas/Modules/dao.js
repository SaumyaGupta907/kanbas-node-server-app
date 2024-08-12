import model from "./model.js";


export const updateModule = (moduleId, module) => model.updateOne({_id: moduleId}, {$set: module});

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });

export const createModule = (cid, module) => {
    const newModule = {
        _id: Date.now().toString(),
        course:cid,
        ...module
    };
    return model.create(newModule);
}

export const findModulesByCid = (cid) => model.find({course: cid});
