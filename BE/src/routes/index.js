import { Router } from "express";
import companyController from "../controllers/companyController.js";

const router = Router();

router.get("/company", companyController.getCompanies);

export default router;
