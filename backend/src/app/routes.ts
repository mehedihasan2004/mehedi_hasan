import { Router } from "express";

const router = Router();

[].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
