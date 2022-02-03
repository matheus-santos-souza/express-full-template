export default class formMiddleware {

   checkError (err, req, res, next) {
      if(err && 'EBADCSRFTOKEN' === err.code) {
         return res.send('Erro CSRF_TOKEN');
      }
   }

   csrfMiddleware (req, res, next) {
      res.locals.csrfToken = req.csrfToken();
      next();
   }

}