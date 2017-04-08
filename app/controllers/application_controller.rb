class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def posts_list(user_id)
    @posts = User.eager_load(:posts).order('posts.created_at DESC')
                 .where('users.id = ?', user_id).first.posts
  end
  helper_method :posts_list
end
