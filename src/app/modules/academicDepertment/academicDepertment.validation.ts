import { z } from "zod";

const createAcademicDepertmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic department name must be a string",
      required_error: "Name is required",
    }),
    academicfaculty: z.string({
      invalid_type_error: "Academic faculty must be a string",
      required_error: "Faculty is required",
    }),
  }),
});

const updateAcademicDepertmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic department name must be a string",
      required_error: "Name is required",
    }).optional(),
    academicfaculty: z.string({
      invalid_type_error: "Academic faculty must be a string",
      required_error: "Faculty is required",
    }).optional(),
  }),
});

export const AcademicDepertmentValidation = {
  createAcademicDepertmentValidationSchema,
  updateAcademicDepertmentValidationSchema,
};

