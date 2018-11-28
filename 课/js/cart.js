var cart =new ShoppingCart();

function displayOrderList(){
    // 从本地存储中获取购物车的数据
    let cartData = cart.getDataFromLocalStorage();
    console.log(cartData);
    // 获取购物车json数据中的订单列表            
    let orderList = cartData.orderList;
    // 遍历订单列表
    for (const i in orderList){
        let order=orderList[i];
        
        //克隆一个样本节点

    }
    // for(let i=0;i<orderList.length;i++){
    //     let order =orderList[i];
    //     console.log(order);
    // }
}
displayOrderList();

