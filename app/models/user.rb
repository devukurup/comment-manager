# frozen_string_literal: true

class User < ApplicationRecord
  has_many :comments

  validates :name, presence: true
end
