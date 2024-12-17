const studentsData = ['Jim', 'Ben', 'Rick', 'Alex']

// algorithm for finding a student
const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(`Found ${studentName} at index ${i}.`)
        }
    }
}

findStudent(studentsData, 'Alex')