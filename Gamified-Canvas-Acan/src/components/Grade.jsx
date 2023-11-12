// GradeBook.jsx

import React from 'react';
import './Grade.css';

const Grades = () => {
  // Sample data for assignments, quizzes, and exams
  const assignments = [
    { name: 'Assignment 1', score: 90, maxScore: 100, weight: 30 }, // 30%
    { name: 'Assignment 2', score: 80, maxScore: 100, weight: 30 }, // 30%
  ];

  const quizzes = [
    { name: 'Quiz 1', score: 85, maxScore: 100, weight: 30 }, // 30%
    { name: 'Quiz 2', score: 75, maxScore: 100, weight: 30 }, // 30%
  ];

  const exams = [
    { name: 'Exam 1', score: 90, maxScore: 100, weight: 40 }, // 40%
    { name: 'Exam 2', score: 85, maxScore: 100, weight: 40 }, // 40%
  ];

  // Calculate cumulative weights for each category
  const calculateCumulativeWeights = (items) => {
    const cumulativeWeights = items.reduce((acc, item) => {
      if (acc[item.category]) {
        acc[item.category] += item.weight;
      } else {
        acc[item.category] = item.weight;
      }
      return acc;
    }, {});

    return cumulativeWeights;
  };

  // Calculate total grades based on cumulative weights
  const calculateTotalGrade = (items) => {
    const cumulativeWeights = calculateCumulativeWeights(items);
    const totalGrade = items.reduce((acc, item) => {
      const categoryWeight = cumulativeWeights[item.category];
      return (
        acc +
        (item.score / item.maxScore) * (item.weight / categoryWeight) * 100
      );
    }, 0);

    return totalGrade;
  };

  // Calculate total grades for each category
  const totalAssignmentGrade = calculateTotalGrade([...assignments]);
  const totalQuizGrade = calculateTotalGrade([...quizzes]);
  const totalExamGrade = calculateTotalGrade([...exams]);

  // Calculate overall total grade based on weights
  const overallTotalGrade =
    (totalAssignmentGrade * 0.3 + totalQuizGrade * 0.3 + totalExamGrade * 0.4);

  return (
    <div className="grade-book">
      <h1>Canvas GradeBook</h1>

      <div className="grades-section">
        <h2>Assignments</h2>
        <table>
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Score</th>
              <th>Max Score</th>
              <th>Weight (%)</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index}>
                <td>{assignment.name}</td>
                <td>{assignment.score}</td>
                <td>{assignment.maxScore}</td>
                <td>{assignment.weight}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grades-section">
        <h2>Quizzes</h2>
        <table>
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Score</th>
              <th>Max Score</th>
              <th>Weight (%)</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz, index) => (
              <tr key={index}>
                <td>{quiz.name}</td>
                <td>{quiz.score}</td>
                <td>{quiz.maxScore}</td>
                <td>{quiz.weight}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grades-section">
        <h2>Exams</h2>
        <table>
          <thead>
            <tr>
              <th>Exam</th>
              <th>Score</th>
              <th>Max Score</th>
              <th>Weight (%)</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={index}>
                <td>{exam.name}</td>
                <td>{exam.score}</td>
                <td>{exam.maxScore}</td>
                <td>{exam.weight}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="weighted-grades">
        <h2>Total Grades</h2>
        <p>Assignments: {totalAssignmentGrade.toFixed(2)}%</p>
        <p>Quizzes: {totalQuizGrade.toFixed(2)}%</p>
        <p>Exams: {totalExamGrade.toFixed(2)}%</p>
        <p>Overall Total Grade: {overallTotalGrade.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default Grades