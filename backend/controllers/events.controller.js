import { pool } from "../db/db.js";

export const getEvents = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming your user object has an 'id' property

    const [result] = await pool.query(
      "SELECT * FROM events WHERE user_id = ? ORDER BY date ASC",
      [userId]
    );

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEvent = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM events WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0)
      return res.status(404).json({ message: "Event not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { title, description, address, date } = req.body;
    const userId = req.user.id; // Assuming your user object has an 'id' property

    console.log("User ID:", userId); // Add this line for debugging

    const [result] = await pool.query(
      "INSERT INTO events(user_id, title, description, address, date) VALUES (?, ?, ?, ?, ?)",
      [userId, title, description, address, date]
    );

    res.json({ id: result.insertId, title, description, address, date });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const result = await pool.query("UPDATE events SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM events WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Event not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
