import model from "./model.js";

export const updateCourse = (courseId, course) => model.updateOne({_id: courseId}, {$set: course});
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
export const createCourse = (course) => {
    const newCourse = {
        _id: Date.now().toString(),
        ...course
    };
    return model.create(newCourse);
}

export const findAllCourses = () => model.find();


