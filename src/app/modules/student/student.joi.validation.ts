import Joi from "joi";

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      "string.empty": "First Name is required",
      "string.max": "First name cannot be more than 20 characters",
      "string.pattern.base": "First name must be in capitalize format",
    }),
  middleName: Joi.string().required().messages({
    "string.empty": "Middle Name is required",
  }),
  lastName: Joi.string()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      "string.empty": "Last Name is required",
      "string.pattern.base": "Last name must contain only letters",
    }),
});

const gurdianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "string.empty": "Father Name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    "string.empty": "Father Occupation is required",
  }),
  fatherContactNo: Joi.string().required().messages({
    "string.empty": "Father contact number is required",
  }),
  motherName: Joi.string().required().messages({
    "string.empty": "Mother name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    "string.empty": "Mother Occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    "string.empty": "Mother contact number is required",
  }),
});

const localGurdianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Local guardian name is required",
  }),
  occupation: Joi.string().required().messages({
    "string.empty": "Local guardian Occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    "string.empty": "Local guardian contact number is required",
  }),
  address: Joi.string().required().messages({
    "string.empty": "Local guardian address is required",
  }),
});

const studentJoiValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.empty": "ID is required",
  }),
  name: userNameValidationSchema.required().messages({
    "object.base": "Name is required",
  }),
  gender: Joi.string().valid("male", "female", "other").required().messages({
    "any.only": 'Gender must be "male", "female", or "other"',
    "string.empty": "Gender is required",
  }),
  dateOfBirth: Joi.string().required().messages({
    "string.empty": "Date of Birth is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
  }),
  contactNo: Joi.string().required().messages({
    "string.empty": "Contact number is required",
  }),
  emergencyContactNo: Joi.string().required().messages({
    "string.empty": "Emergency contact number is required",
  }),
  blodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .messages({
      "any.only": "Invalid blood group",
    }),
  presentAddress: Joi.string().required().messages({
    "string.empty": "Present address is required",
  }),
  permenantAddress: Joi.string().required().messages({
    "string.empty": "Permanent address is required",
  }),
  gurdian: gurdianValidationSchema.required().messages({
    "object.base": "Guardian information is required",
  }),
  localGurdian: localGurdianValidationSchema.required().messages({
    "object.base": "Local guardian information is required",
  }),
  profileImg: Joi.string().required().messages({
    "string.empty": "Profile image URL is required",
  }),
  isActive: Joi.string().valid("active", "blocked").default("active").messages({
    "any.only": 'Invalid status. Status must be "active" or "blocked"',
  }),
});

export default studentJoiValidationSchema;
