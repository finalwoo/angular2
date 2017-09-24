var Test = function(){
    var num1 = 1;
    var num2 = 2;

    var plus = function(){
        return num1 + num2;
    }

    this.alertStr = function(param1, param2){
        var str = param1 + param2;
        alert(plus());
        alert(param2);
    }
}


var obj = {
    test : "1",
    test : "2"
};
