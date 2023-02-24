class Comment < ApplicationRecord
    has_many :comments

    belongs_to :comment, foreign_key: "parent_id", optional: true
    belongs_to :user

    validates :content, presence: true

    def self.filter_comments
        Comment.all.where(parent_id: nil)
    end

    def replies
        Comment.all.where(parent_id: self.id)
    end
end