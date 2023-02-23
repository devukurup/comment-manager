class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render status: :ok, json: { comments: }
    end
end
