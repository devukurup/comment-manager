export const getReplyComments = (comments, id) =>  comments.filter(comment => comment.parent_id === id);