import Publication from "../Schemas/Publication.js"
import User from "../Schemas/User.js";

//Create
export const createPublication = async (req, res) => {
  const { title, content } = req.body;
  const authorId = req.userId;

  try {
    const newPublication = new Publication({
      title,
      content,
      author: authorId
    });

    const PublicationSaved = await newPublication.save();

    res.status(201).json(PublicationSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
//GetForId
export const getPublicationById = async (req, res) => {
  try{
    const { id } = req.params;
    const Publications = await Publication.findById(id);
    res.status(200).json(Publications);
  }
  catch (error) {
    return res.status(500).json({ msg: error.message })
  }
};

//Get
export const getPublication = async (req, res) => {
  try {
    const Publications = await Publication.find({});
    return res.json(Publications);
  }
  catch (error) {
    return res.status(500).json({ msg: error.message })
  }
};

//Update
export const updatePublicationById = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body

    const existingPublication = await Publication.findById(id);
    if (!existingPublication) {
      return res.status(404).json({ message: "Publication not found" });
    }

    await Publication.findByIdAndUpdate(id, {
      title: title,
      content: content,
    });

    const updatedPublication = await Publication.findById(id);
    return res.json(updatedPublication);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//Delete
export const deletePublicationById = async (req, res) => {
  try {
    const { id } = req.params;
    await Publication.findByIdAndDelete(id);
    res.json({ msg: "Publication deleted" })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
}

};
