class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  def self.for qqq
    where("posts.title ILIKE ?", "%#{qqq}%").first(20)
  end
end
