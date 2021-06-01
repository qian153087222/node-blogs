function serializeToJson(from){
    let result = {};

    from.serializeArray().forEach(item=>{
        result[item.name] = item.value;
    });
    return result;
}