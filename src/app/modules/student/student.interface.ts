export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  blodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permenantAddress: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isActive: "active" | "blocked";
};