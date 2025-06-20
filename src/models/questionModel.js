import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question_en: {
      type: String,
      required: true,
    },
    question_kr: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: [true, "categories is required"],
      enum: {
        values: [
          "fun",
          "deep",
          "work",
          "travel",
          "relationship",
          "favorites",
          "culture",
          "future",
          "childhood",
          "hypothetical",
          "wildcard",
        ],
        message: "{VALUE} is not a valid category",
      },
      validate: {
        validator: (v) => Array.isArray(v) && v.length > 0,
        message: "At least one category is required",
      },
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Question = mongoose.model("Question", questionSchema);

export default Question;
