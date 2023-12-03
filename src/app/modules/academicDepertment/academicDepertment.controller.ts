import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AcademicDepertmentServices } from "./academicDepertment.service";
const createAcademicDeperntment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepertmentServices.createAcademicDepertmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic depertment is created successfully",
    data: result,
  });
});

const getAllAcademicDeperntment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepertmentServices.getAllAcademicDepertmentFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic depertment are retrieved successfully",
    data: result,
  });
});

const getSingleAcademicDeperntment = catchAsync(async (req, res) => {
  const { depertmentId } = req.params;
  const result =
    await AcademicDepertmentServices.getSingleAcademicDepertmentFromDB(
      depertmentId
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic depertment is retrieved succesfully",
    data: result,
  });
});

const updateAcademicDeperntment = catchAsync(async (req, res) => {
  const { depertmentId } = req.params;
  const result =
    await AcademicDepertmentServices.updateAcademicDepertmentIntoDB(
      depertmentId,
      req.body
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic depertment is updated succesfully",
    data: result,
  });
});

export const AcademicDepertmentControllers = {
  createAcademicDeperntment,
  getAllAcademicDeperntment,
  getSingleAcademicDeperntment,
  updateAcademicDeperntment,
};