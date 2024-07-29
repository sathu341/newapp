"use server"
export default async function userData(req, res) {
    if (req.method.toLowerCase() === 'post') {
      const { username } = req.body;
  
      // Log the username to verify it's being received correctly
      console.log(username);
  
      // Send a success response
      res.status(200).json({ message: "Successfully received data", username });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  