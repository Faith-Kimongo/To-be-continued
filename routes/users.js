import express from "express";
import { getusers } from "../controllers/users";

const router = express.Router();

router.get("/users", getusers);