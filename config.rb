###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
helpers do
  def menu_link_dropdown?(link)
    link.sublinks && link.sublinks.any? 
  end
  alias_method :menu_link_flyout?, :menu_link_dropdown?

  def menu_link_mega?(link)
    menu_link_dropdown?(link) && link.sublinks.any?{ |s| s.sublinks && s.sublinks.any? }
  end

  def menu_flyout_class(link)
    'flyout' if menu_link_flyout?(link)
  end

  def menu_link_classes(link)
    classes = []
    classes << "dropdown" if menu_link_dropdown?(link)
    classes << "mega" if menu_link_mega?(link)
    classes.join(" ")
  end
end



set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
