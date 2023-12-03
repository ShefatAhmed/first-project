import { Schema, model } from "mongoose";
import { TAcademicDepertment } from "./academicDepertment.interface";

const academicDepertmentSchema = new Schema<TAcademicDepertment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicfaculty: {
        type: Schema.Types.ObjectId,
        ref: 'AcademicFaculty'
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicDepertment = model<TAcademicDepertment>('AcademicDepertment', academicDepertmentSchema)