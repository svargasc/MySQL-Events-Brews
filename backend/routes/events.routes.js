import { Router } from "express";
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.controller.js";
import { auth } from "../jwt/auth.js";

const router = Router();

router.get("/events", auth, getEvents);
router.get("/events/:id", auth, getEvent);
router.post("/events", auth, createEvent);
router.put("/events/:id", auth, updateEvent);
router.delete("/events/:id", auth, deleteEvent);

export default router;
