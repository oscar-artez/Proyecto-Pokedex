export function prefix(idP){
    let id = idP.toString();
        if(id.length === 4){
            id = '' + id;
        }
         else if(id.length === 3){
             id = '0' + id;
         }else if(id.length === 2){
            id = '00'+id;
         }else if(id.length === 1){
            id = '000'+id;
         }

    return id;
}

export function CapitalizeName(name){
    let changeName = name.charAt(0).toUpperCase() + name.slice(1);
    
    return changeName;

}

