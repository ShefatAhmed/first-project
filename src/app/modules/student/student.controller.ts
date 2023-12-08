import { RequestHandler } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student are retrive successfully",
    data: result,
  });
});

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student are retrive successfully",
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentsFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is deleted successfully",
    data: result,
  });
});
const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const {student} = req.body;
  const result = await StudentServices.updateStudentFromDB(studentId, student);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is updated successfully",
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent
};
