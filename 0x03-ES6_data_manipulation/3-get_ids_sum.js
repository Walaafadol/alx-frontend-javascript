export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((sum, curr) => sum + curr.id, 0);
}
