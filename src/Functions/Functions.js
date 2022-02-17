export function prefix(idP, id){
    
        if(toString(idP).length == 3){
           id = ''+toString(idP);
            return id
        }else if(toString(idP).length== 2){
            id = '0'+toString(idP);
            return id
        }else if(toString(idP).length == 1){
            id = '00'+toString(idP);
            return id
        }
        return id;
}
