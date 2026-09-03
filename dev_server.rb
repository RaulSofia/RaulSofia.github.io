require "webrick"
require "uri"

root = File.expand_path("_site", __dir__)
port = Integer(ENV.fetch("PORT", "4000"))

unless File.file?(File.join(root, "404.html"))
  abort "Run `jekyll build` before starting the development server."
end

server = WEBrick::HTTPServer.new(
  Port: port,
  DocumentRoot: root,
  AccessLog: [],
  Logger: WEBrick::Log.new($stderr, WEBrick::Log::WARN)
)

server.mount_proc "/" do |request, response|
  relative_path = URI::DEFAULT_PARSER.unescape(request.path).delete_prefix("/")
  relative_path = "index.html" if relative_path.empty?
  candidate = File.expand_path(relative_path, root)

  if candidate == root || candidate.start_with?(root + File::SEPARATOR)
    candidate = File.join(candidate, "index.html") if File.directory?(candidate)
  else
    candidate = nil
  end

  if candidate && File.file?(candidate)
    response.status = 200
    response["content-type"] = WEBrick::HTTPUtils.mime_type(candidate, WEBrick::HTTPUtils::DefaultMimeTypes)
    response.body = File.binread(candidate)
  else
    response.status = 404
    response["content-type"] = "text/html; charset=UTF-8"
    response.body = File.binread(File.join(root, "404.html"))
  end
end

trap("INT") { server.shutdown }
puts "Development server: http://localhost:#{port}"
puts "Unknown URLs render 404.html while keeping their original path."
server.start
