exports.register = function (plugin, options, next) {
  plugin.route({
    path: '/{p*}',
    method:'GET',
    handler: function (req, res) {
      return res.view('index')
    }
  })

  plugin.route({
    path: '/assets/{filename*}',
    method: 'GET',
    handler: {
      file: function (req) {
        return req.params.filename
      }
    }
  })

  plugin.route({
    path: '/views/{filename*}',
    method: 'GET',
    handler: {
      file: function (req) {
        return 'views/' + req.params.filename
      }
    }
  })

  next()
}

exports.register.attributes = {
    name: 'index'
}
