=wrap_layout :layout do

    = partial "layouts/course_links"

      -unless current_page.data.useBookCover
        %h1
          = current_article.title

      = yield
