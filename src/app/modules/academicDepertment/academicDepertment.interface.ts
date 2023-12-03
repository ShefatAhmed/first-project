import { Types } from "mongoose";

export type TAcademicDepertment = {
  name: string;
  academicfaculty: Types.ObjectId;
};
