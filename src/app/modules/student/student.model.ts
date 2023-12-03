import { Schema, model } from "mongoose";
import validator from "validator";
import {
  TGurdian,
  TLocalGurdian,
  TStudent,
  StudentModel,
  TUserName,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true,
    maxlength: [20, "First name cannot be more than 20"],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: "{VALUE} is not in capitazlize format",
    },
  },
  middleName: {
    type: String,
    required: [true, "Middle Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "{VALUE} is not valid",
    },
  },
});

const gurdianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    required: [true, "Father Name is required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father Occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father contact number is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother Occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother contact number is required"],
  },
});

const localGurdianSchema = new Schema<TLocalGurdian>({
  name: {
    type: String,
    required: [true, "Local gurdian name is required"],
  },
  occupation: {
    type: String,
    required: [true, "Local gurdian Occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local gurdian contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local gurdian address is required"],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      message: "ID is required and must be unique",
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User",
    },
    name: { type: userNameSchema, required: true, message: "Name is required" },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: "Gender must be 'male', 'female', or 'other'",
      },
      required: true,
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: "{VALUE} is not a valid email",
      },
    },
    contactNo: { type: String, message: "Contact number is required" },
    emergencyContactNo: {
      type: String,
      message: "Emergency contact number is required",
    },
    blodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "Invalid blood group",
    },
    presentAddress: {
      type: String,
      required: true,
      message: "Present address is required",
    },
    permenantAddress: {
      type: String,
      required: true,
      message: "Permanent address is required",
    },
    gurdian: {
      type: gurdianSchema,
      required: true,
      message: "Guardian information is required",
    },
    localGurdian: {
      type: localGurdianSchema,
      required: true,
      message: "Local guardian information is required",
    },
    profileImg: {
      type: String,
      required: true,
      message: "Profile image URL is required",
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester'
    },
    isDeleted: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

studentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName}  ${this.name.middleName}  ${this.name.lastName}`;
});

studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

studentSchema.statics.isUserExits = async function (id) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>("Student", studentSchema);
