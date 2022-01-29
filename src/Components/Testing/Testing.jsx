import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Testing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form className="Class" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          value={email}
          variant="filled"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          value={password}
          variant="filled"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Testing;
