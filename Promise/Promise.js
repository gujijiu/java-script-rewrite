function Promise(executor){
    //添加属性
    this.PromiseState = 'pending';//状态默认为pending
    this.PromiseResult = null;//初始数据为空

    function resolve(data) {
        this.PromiseState = 'fulfilled';
        this.PromiseResult = data;
    }

    function reject(data) {
        this.PromiseState = 'rejected';
        this.PromiseResult = data
    }

    executor(resolve,reject);
}

//添加 then 方法
Promise.prototype.then = function(onResolved, onRejected){

}