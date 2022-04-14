import express from 'express'
const app = express();

app.set('port', process.env.PORT || 3500)



app.listen(app.get('port'), () => {
      console.log("http://localhost:" + app.get('port'))
})
