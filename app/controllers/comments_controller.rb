class CommentsController < ApplicationController
    before_action :load_comment, only: %i[destroy update]

    def index
        @comments = Comment.filter_comments
    end

    def create
        comment = current_user.comments.new(comment_params.except(:id))
        if comment.save
            render status: :ok, json: { notice: 'Your comment has been posted.' }
          else
            render status: :unprocessable_entity, json: { error: comment.errors.full_messages.to_sentence }
          end
    end

    def destroy
        if @comment.destroy
            render status: :ok, json: { notice: 'Your comment has been deleted.' }
        else
          render status: :unprocessable_entity, json: { error: @comment.errors.full_messages.to_sentence }
        end
    end

    def update
        if @comment.update(comment_params)
          render status: :ok, json: { notice: "Your comment has been updated." }
        else
          render status: :unprocessable_entity, json: { error: @comment.errors.full_messages.to_sentence }
        end
      end

    private
      def comment_params
        params.require(:comment).permit(:id, :content, :parent_id, :is_nested_reply, :user_mentioned, :upvote_ids => [])
      end

      def load_comment
        @comment = Comment.find(params[:id])
        unless @comment
          render status: :not_found, json: { error: "Comment not found" }
        end
      end
end
