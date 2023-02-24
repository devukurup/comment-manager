import { isEmpty } from "ramda";

export const modifyUpvoteIds = (ids, currentUserId) => {
    if(isEmpty(ids)){
        return [currentUserId];
    }
    if(typeof ids == "object"){
            return ids?.include(currentUserId) ? ids?.filter(id => id != currentUserId) :
            [...ids, currentUserId]

    }else{
        return ids ? [currentUserId]: []
    }
}