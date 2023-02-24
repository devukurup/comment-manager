export const filterUpvotes = (upvote_ids) => {
    if(typeof upvote_ids === "object") {
        return upvote_ids;
    }
    else if(typeof upvote_ids === "string"){
        return []
    } else {
        [upvote_ids];
    }
}