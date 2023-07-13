// export const calculateGrade = function(marks) {
//     if (marks >= 90) {
//       return 'A+';
//     } else if (marks >= 80) {
//       return 'A';
//     } else if (marks >= 70) {
//       return 'B';
//     } else if (marks >= 60) {
//       return 'C';
//     } else if (marks >= 50) {
//       return 'D';
//     } else {
//       return 'F';
//     }
//   };

export function calculateGrade(avgPer) {
    return avgPer >= 40 ? 'Pass' : 'Fail';
}