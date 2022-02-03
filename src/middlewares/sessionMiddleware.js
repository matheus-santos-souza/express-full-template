export default function sessionMiddleware (req, res, next) {
   if(!req.body.nome || !req.body.sobrenome) {
      res.send("Erro no cadastro de Usuario")
      return
   }

   const { nome, sobrenome } = req.body
   req.session.nome = nome
   req.session.sobrenome = sobrenome
   next() 
}