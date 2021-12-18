module CodeHelper
  require 'pygments'
  def code(code, lexer='javascript')
    ary = Pygments.highlight(code, :options => {:encoding => 'utf-8', nowrap:true}, :lexer => lexer).split("\n")
    # # wrap in lines
    ary.map! do |line|
      "<div class='line'>#{line}</div>"
    end
    return "<code class='code_block' ng-non-bindable>" + ary.join("\n") + "</code>"
  end
end
