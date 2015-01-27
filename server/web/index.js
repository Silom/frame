exports.register = function (plugin, options, next) {
  plugin.route({
    path: '/{p*}',
    method:'GET',
    handler: function (request, reply) {
      return reply.view('index')
    }
  })

  plugin.route({
    path: '/assets/{filename*}',
    method: 'GET',
    handler: {
      file: function (request) {
        return request.params.filename
      }
    }
  })

  next()
}

exports.register.attributes = {
    name: 'index'
}
