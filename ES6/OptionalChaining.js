const obj={
    name:'Alice',
    cat:{
        name:'Diana',
    //     cat2:{
    //     name:'Diana 2',
    //     cat3:{
    //         name:'Diana 3'
    //     }
    // }
}
}
//không chắc chắn một key có tồn tại hay không
// thì dùng ? để kiểm tra
if(obj?.cat?.cat2?.cat3){
    console.log(obj.cat.cat2.cat3.name);
}