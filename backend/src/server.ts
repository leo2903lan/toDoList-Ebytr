import app from "./app";


const PORT = process.env.PORT || 3005;




const server = app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})