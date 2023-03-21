import prisma from "../prisma/db.js";

const ProductGetAll = async (req, res) => {
  try {
    const products = await prisma.Product.findMany({
      include: {
        category: true,
      },
    });
    return res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export { ProductGetAll };
