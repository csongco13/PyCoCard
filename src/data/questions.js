const questions = [
  {
    question: "What is the output?",
    code: "x = 3\nx = x + 2\nprint(x)",
    answer: "5"
  },
  {
    question: "What is the output?",
    code: "name = 'cat'\nprint(name[0])",
    answer: "c"
  },
  {
    question: "Fill in the blank to print 0, 1, 2",
    code: "for i in range(__):\n    print(i)",
    answer: "3"
  },
  {
    question: "What is the output?",
    code: "nums = [1, 2]\nnums.append(3)\nprint(nums)",
    answer: "[1, 2, 3]"
  },
  {
    question: "What is the output?",
    code: "x = 10\nif x > 5:\n    print('yes')\nelse:\n    print('no')",
    answer: "yes"
  }
];

export default questions;