import express from "express";
const router = express.Router();
import swaggerli from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load("./swagger.yaml");

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
