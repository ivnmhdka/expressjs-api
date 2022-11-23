const User = require("../models/User");

module.exports = {
  // get all users
  index: async (req, res) => {
    const user = await User.find();
    if (user.length > 0) {
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        message: "Data masih kosong",
      });
    }
  },
  // get a user
  show: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasil dididapat",
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
  store: async (req, res) => {
    const userPost = new User({
      nama: req.body.nama,
      email: req.body.email,
    });

    try {
      const user = await userPost.save();
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan",
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
  update: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah",
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
  delete: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus",
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
};
