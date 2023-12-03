import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicDepertmentValidation } from "./academicDepertment.validation";
import { AcademicDepertmentControllers } from "./academicDepertment.controller";

const router = express.Router();

router.post(
  "/create-academic-depertment",
  validateRequest(
    AcademicDepertmentValidation.createAcademicDepertmentValidationSchema
  ),
  AcademicDepertmentControllers.createAcademicDeperntment
);

router.get("/", AcademicDepertmentControllers.getAllAcademicDeperntment);

router.get("/:depertmentId", AcademicDepertmentControllers.getSingleAcademicDeperntment);

router.patch(
  "/:depertmentId",
  validateRequest(
    AcademicDepertmentValidation.updateAcademicDepertmentValidationSchema  ),
  AcademicDepertmentControllers.updateAcademicDeperntment
);

export const AcademicDepertmentRoutes = router;