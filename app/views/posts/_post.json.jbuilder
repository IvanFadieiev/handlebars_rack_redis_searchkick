# json.extract! post, :id, :title, :user_id, :created_at, :updated_at
# json.url post_url(post, format: :json)
json.post do
  json.id    post.id
  json.title post.title
end

json.posts do
  json.array! @posts do |post|
    json.id post.id
    json.title post.title
  end
end