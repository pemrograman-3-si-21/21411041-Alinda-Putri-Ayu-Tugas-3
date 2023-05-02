//type
//1.var
//2.const
//3. let

//var namaMahasiswa = "Alinda Putri"
//var namaMahasiswa = "Cucus"
//const namaMahasiswa = "Cucus"
//let namaMahasiswa = "Alinda Putri"
//let namaMahasiswa = "Cucus"

//const nilaiA = 10
//const nilaiB = 10
//const nilaiC = nilaiA + nilaiB
//console.log(nilaiC)


//java
//System.out.print


const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:nama/:npm/:prodi/:watak', (req,res)=>{
res.send(`Hallo nama saya ${req.params.nama} npmnya ${req.params.npm} prodi ${req.params.prodi} wataknya ${req.params.watak}`)
})

app.get('/query', (req,res)=>{
    console.log(req.query.npm)
    res.send(`Nama Saya ${req.query.nama} npmnya ${req.query.npm}`)
})

//ambil data dari body
app.post('/', (req, res)=>{
res.send(`nama saya ${req.body.nama}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})