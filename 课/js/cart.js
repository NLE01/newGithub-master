var cart =new ShoppingCart();

function displayOrderList(){
    // 从本地存储中获取购物车的数据
    let cartData = cart.getDataFromLocalStorage();
    console.log(cartData);
    // 获取购物车json数据中的订单列表            
    let orderList = cartData.orderList;
    //找订单列表父元素
    let cartList=document.querySelector('#cartList');
    // 找样本节点
    let exmapeNode=document.querySelector('#orderExample');
   
    // for (const i in orderList){
    //     let order=orderList[i];
    // console.log(order);
    // }

    //  遍历订单列表
    for(let i=0;i<orderList.length;i++){
        // 当前订单数据
        let order =orderList[i];
        console.log(order);
        // 克隆样本节点形成当前订单节点
        node =exmapeNode.cloneNode(true);
        // 挂接到父元素
        cartList.appendChild(node);

        // 设置数据
        // 节点id
        node.id=order.id;

        // 图像地址
        // 找图像节点
        let imgNode=node.querySelector('[data-name="imgSrc"]');
        imgNode.src='images/'+order.imgSrc;

        // 字
        let titleNode=node.querySelector('[data-name="title"]');
        titleNode.textContent=order.title;

        // 单价
        let priceNode=node.querySelector('[data-name="price"]');
        priceNode.textContent=order.price;
        // 总价
        let qtyNode=node.querySelector('[data-name="qty"]');
        qtyNode.textContent=order.qty;
        // 小计
        let subPriceNode=node.querySelector('[data-name="subPrice"]');
        subPriceNode.textContent=order.price*order.qty;

        node.classList.remove('d-none');

        // 设选中状态
        // 找选中节点
        let selectNode=node.querySelector('[data-operator="checkItem"]');
        selectNode.checked=order.selectStatus;
        console.log(selectNode);
        console.log(node);
    }
}
displayOrderList();

