source "https://rubygems.org"

# GitHub Pages uses Jekyll 3.9.0, which is compatible with Ruby 2.6+
gem "jekyll", "~> 3.9.0"
gem "minima", "~> 2.5"
gem "jekyll-feed", "~> 0.12"
gem "jekyll-sitemap", "~> 1.4"

# Lock ffi to a version compatible with Ruby 2.6
gem "ffi", "~> 1.15.5"

# GitHub Flavored Markdown support for kramdown
gem "kramdown-parser-gfm"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

