class Comment < ApplicationRecord
    has_many :comments

    belongs_to :comment, foreign_key: "parent_id", optional: true
    belongs_to :user

    validates :content, presence: true
end