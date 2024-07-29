"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";


export default function Home() {
  const [username, setUsername] = useState("");
  const [record, setRecord] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("./api/userData", { username });
      alert(res.data.message);
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <>
      
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
