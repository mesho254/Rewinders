const Comment = require('../Models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { name, email, comment } = req.body;
    const newComment = new Comment({ name, email, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getComments = async (req, res) => {
    try {
      const comments = await Comment.find();
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json({ message: 'Failed to retrieve comments' });
    }
  };
