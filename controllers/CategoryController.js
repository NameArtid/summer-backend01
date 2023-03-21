import prisma from "../prisma/db.js";

// POST
const CategoryPost = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = await prisma.Category.create({
      data: { name, description ,updatedAt :new Date()},
    //   updatedAt: new Date(),
    });
    return res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//GET ALL
const CategoryGetAll = async (req, res) => {
  try {
    const categories = await prisma.Category.findMany({
      include: {
        products: true,
      },
    });
    return res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//GET ONE

//PUT

//DELETE

export { CategoryPost, CategoryGetAll };
