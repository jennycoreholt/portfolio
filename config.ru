require 'rubygems'
require 'bundler/setup'

require 'rack'
require 'rack/static'

use Rack::Static,
  :urls => ["/img", "/js", "/css", "/fonts"]

run lambda { |env|
  path = env['PATH_INFO'] == "/" ? "index.html" : ".#{env['PATH_INFO']}"
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open(path, File::RDONLY)
  ]
}
