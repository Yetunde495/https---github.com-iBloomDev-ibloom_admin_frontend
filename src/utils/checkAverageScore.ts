export default function isAboveAverage(score: number, totalMarks: number): boolean {
    const percentage: number = (score / totalMarks) * 100;
    return percentage >= 50;
  }
  
 
  