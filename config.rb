###
# Site settings
###
set :url_root, ENV['DOMAIN']
set :url, "https://" + config[:url_root]
set :url_base, config[:url_root]

set :google_tag, ENV['GOOGLE_TAG']
# set :google_analytics, "UA-13004660-6"
set :site_author, ENV['SITE_AUTHOR']

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'

set :stylesheets_base_path, 'css'
set :javascripts_base_path, 'js'
set :images_base_path, 'img'

set :production_webpack_cmd, 'cross-env NODE_ENV=production ./node_modules/webpack/bin/webpack.js --bail --config config/webpack/production.js'

###
# Page options, layouts, aliases and proxies
###

# disable layout
page '403*',          :layout => false
# page '404*',          :layout => false

[ :xml, :json, :txt, :htaccess, :apache ].each do |extension|
  page "/*.#{extension}", layout: false
end


# For campaigns that utilize the same layout throughout proxy pages come in really handy..
# data.main.pages.each do |page|
#     proxy "/#{page.slug}.html", "/templates/page.html", :locals => { :page => page }, :ignore => true
# end

###
# Helpers and extensions
###

helpers do

  def component(path, locals={})
    partial "components/#{path}", locals
  end

end

# Markdown and syntax highlighting
activate :syntax
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true

# Use relative URLs
activate :relative_assets

# Turn on Pretty URLs
activate :directory_indexes

###
# Environment settings
###
# Development-specific configuration
configure :development do
  set :url, ''
  activate :livereload
end

# rename file after build
after_build do
  File.rename 'build/htaccess.apache', 'build/.htaccess'
  # load './scripts/after_build.rb'
end

# class MyFeature < Middleman::Extension
#   def after_build(builder)
#     builder.thor.run './sh/custom.sh'
#   end
# end

activate :webpack

# activate :s3_sync do |s3_sync|
#  s3_sync.bucket                     = ENV['BUCKET']
#  s3_sync.region                     = ENV['REGION']
#  s3_sync.aws_access_key_id          = ENV['AWS_ACCESS_KEY_ID']
#  s3_sync.aws_secret_access_key      = ENV['AWS_SECRET_ACCESS_KEY']
#  s3_sync.prefix                     = ENV['PATH']
#  s3_sync.delete                     = false
#  s3_sync.after_build                = true
# end

ready do
   sitemap.ensure_resource_list_updated!
end
