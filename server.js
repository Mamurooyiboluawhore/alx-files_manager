const express = require('express')
import { route } from ('./routes/index.js')
default export const app = express()
const port = process.env.PORT || 5000;


app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
