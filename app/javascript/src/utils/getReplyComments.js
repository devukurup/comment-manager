export const getReplyComments = (comments, parent_id) =>  comments.filter(comment => comment.parent_id === parent_id);