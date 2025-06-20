import Question from "../models/questionModel.js";

// @desc Get all the questions
// @route GET /api/v1/questions
export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();

    res.status(200).json({
      status: "success",
      results: questions.length,
      data: {
        questions,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to fetch questions",
    });
  }
};

// @desc Get a random question
// @route GET /api/v1/questions/random
export const getRandomQuestion = async (req, res) => {
  try {
    const count = await Question.countDocuments();
    const randIdx = Math.floor(Math.random() * count);
    const question = await Question.findOne().skip(randIdx);

    res.status(200).json({
      status: "success",
      data: {
        question,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to fetch random question",
    });
  }
};

// @desc Get questions by category
// @route GET /api/v1/questions/:category
export const getQuestionsByCategory = async (req, res) => {
  const category = req.params.category;
  if (!category) {
    return res.status(400).json({
      status: "fail",
      message: "Category is required",
    });
  }

  try {
    const questions = await Question.find({ categories: category });
    if (questions.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: `No questions found for category: ${category}`,
      });
    }

    res.status(200).json({
      status: "success",
      results: questions.length,
      data: {
        questions,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to fetch questions by category",
    });
  }
};

// @desc Get a random question by category
// @route GET /api/v1/questions/:category/random
export const getRandomQuestionByCategory = async (req, res) => {
  const category = req.params.category;
  if (!category) {
    return res.status(400).json({
      status: "fail",
      message: "Category is required",
    });
  }

  try {
    const questions = await Question.find({ categories: category });
    if (questions.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: `No questions found for category: ${category}`,
      });
    }

    const randIdx = Math.floor(Math.random() * questions.length);
    const question = questions[randIdx];

    res.status(200).json({
      status: "success",
      data: {
        question,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to fetch a random question by category",
    });
  }
};
