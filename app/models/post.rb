# require 'elasticsearch/model'

class Post < ApplicationRecord
  # include Elasticsearch::Model
  # include Elasticsearch::Model::Callbacks
  # searchkick

  has_many :comments
  belongs_to :user

  default_scope { order(created_at: :desc) }

  def self.for qqq
    where("posts.title ILIKE ?", "%#{qqq}%").first(20)
  end
end
