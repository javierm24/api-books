const express = require('express');
const app = express();
const mysql = require('promise-mysql');
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/books', (req, res) => {
   mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria'
   }).then(function (conn) {
  
      //let query = "INSERT INTO libros (autor, titulo) VALUES ('Antonio Muñoz Molina','Un andar solitario entre la gente')"
      let query = "SELECT * FROM libros"
      conn.query(query).then((data) => {
         res.send(data);
      })
      conn.end()
   })
})

app.post('/books', (req, res) => {
   mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria'
   }).then(function (conn) {
      const autor = req.body.autor;
      const titulo = req.body.titulo;
    
      let query = "INSERT INTO libros (autor,titulo) VALUES (?,?)"
      //let query = "SELECT * FROM libros"
      conn.query(query,[autor,titulo])
      .then((data) => {
         res.send(data);
      })
      conn.end()
   })
})

app.get('/books/:id', (req, res) => {
   mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria'
   }).then(function (conn) {
      let query = "SELECT * FROM libros WHERE id_libro = ?"
      conn.query(query,[req.params.id]).then((data) => {
         res.send(data);
      })
      conn.end()
   })
})

app.delete('/books/:id', (req, res) => {
   mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria'
   }).then(function (conn) {
  
      //let query = "INSERT INTO libros (autor, titulo) VALUES ('Antonio Muñoz Molina','Un andar solitario entre la gente')"
      //let query = "SELECT * FROM libros"
      let query = "DELETE FROM libros WHERE id_libro = ?"
      conn.query(query, [req.params.id]).then((data) => {
         res.send(data);
      })
      conn.end()
   })
})

app.put('/books/:id', (req, res) => {
   mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria'
   }).then(function (conn) {
  
      //let query = "INSERT INTO libros (autor, titulo) VALUES ('Antonio Muñoz Molina','Un andar solitario entre la gente')"
      //let query = "SELECT * FROM libros"
      //let query = "DELETE FROM libros WHERE id_libro = ?"
      let query = "UPDATE libros set autor = ?, titulo = ? WHERE id_libro = ?"
      conn.query(query,[req.body.autor,req.body.titulo,req.params.id]).then((data) => {
         res.send(data);
      })
      conn.end()
   })
})

app.get('/autor', (req, res) => {
   mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria'
   }).then(function (conn) {
  
      //let query = "INSERT INTO libros (autor, titulo) VALUES ('Antonio Muñoz Molina','Un andar solitario entre la gente')"
      let query = "SELECT autor FROM libros"
      conn.query(query).then((data) => {
         res.send(data);
      })
      conn.end()
   })
})

app.post('/autor', (req, res) => {
   mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria'
   }).then(function (conn) {
      const autor = req.body.autor;
    
      let query = "INSERT INTO libros (autor) VALUES (?)"
      //let query = "SELECT * FROM libros"
      conn.query(query,[autor])
      .then((data) => {
         res.send(data);
      })
      conn.end()
   })
})

app.get('/autor/titulo', (req, res) => {
   mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'libreria'
   }).then(function (conn) {
  
      //let query = "INSERT INTO libros (autor, titulo) VALUES ('Antonio Muñoz Molina','Un andar solitario entre la gente')"
      let query = "SELECT autor, titulo FROM libros"
      conn.query(query).then((data) => {
         res.send(data);
      })
      conn.end()
   })
})

app.listen(1234); 