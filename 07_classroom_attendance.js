function getStudents(classroom) {
    // deconstruct hasTeachingAssistant, classList from classroom object
    let {hasTeachingAssistant, classList} = classroom
    // declare 3 variables
    let teacher, teachingAssistant, students

    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList
    } else {
        [teacher, ...students] = classList
    }
    return students
}

console.log(
    getStudents({
        hasTeachingAssistant: false,
        classList: ['Rashida', "John", "Roman", "Lisa", "Omair"]
    })
)
