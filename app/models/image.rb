class Image < ApplicationRecord
  belongs_to :comment
  has_many :followers
end
