import { TAcademicDepertment } from "./academicDepertment.interface";
import { AcademicDepertment } from "./academicDepertment.model";

const createAcademicDepertmentIntoDB = async (payload: TAcademicDepertment) => {
  const result = await AcademicDepertment.create(payload);
  return result;
};

const getAllAcademicDepertmentFromDB = async () => {
  const result = await AcademicDepertment.find();
  return result;
};

const getSingleAcademicDepertmentFromDB = async (id: string) => {
  const result = await AcademicDepertment.findById(id);
  return result;
};

const updateAcademicDepertmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepertment>,
) => {

  const result = await AcademicDepertment.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepertmentServices = {
  createAcademicDepertmentIntoDB,
  getAllAcademicDepertmentFromDB,
  getSingleAcademicDepertmentFromDB,
  updateAcademicDepertmentIntoDB,
};
