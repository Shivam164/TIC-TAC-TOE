$("document").ready(function(){

    let arr = new Array(3);
    for (var i = 0; i < 3; i++) {
      arr[i] = new Array(3);
    }
    for(var i = 0;i<3;i++){
        for(var j = 0;j<3;j++){
            arr[i][j] = -10;
        }
    }
    const cellElement = $(".cell");
    
    var b = $("#board");   

    var turn = 1;
    // var e = 0;

    // function check(){
    //     var one = arr[0][0] + arr[0][1] + arr[0][2];
    //     if(one == 3){
    //         e++;
    //         return true;
    //     }else if(one == 0){
    //         return false;
    //     }

    //     var two = arr[1][0] + arr[1][1] + arr[1][2];
    //     if(two == 3){
    //         e++;
    //         return true;
    //     }else if(two == 0){
    //         return false;
    //     }

    //     var three = arr[2][0] + arr[2][1] + arr[2][2];
    //     if(three == 3){
    //         e++;
    //         return true;
    //     }else if(three == 0){
    //         return false;
    //     }

    //     var four = arr[0][0] + arr[1][0] + arr[2][0];
    //     if(four == 3){
    //         e++;
    //         return true;
    //     }else if(four == 0){
    //         return false;
    //     }

    //     var five = arr[0][1] + arr[1][1] + arr[2][1];
    //     if(five == 3){
    //         e++;
    //         return true;
    //     }else if(five == 0){
    //         return false;
    //     }

    //     var six = arr[0][2] + arr[1][2] + arr[2][2];
    //     if(six == 3){
    //         e++;
    //         return true;
    //     }else if(six == 0){
    //         return false;
    //     }

    //     var seven = arr[0][0] + arr[1][1] + arr[2][2];
    //     if(seven == 3){
    //         e++;
    //         return true;
    //     }else if(seven == 0){
    //         return false;
    //     }

    //     var eight = arr[0][2] + arr[1][1] + arr[2][0];
    //     if(eight==3){
    //         e++;
    //         return true;
    //     }else if(eight==0){
    //         return false;    
    //     }

    //     return true;
    // };


    var count = 0;
    $(cellElement).click(function(){
        count++;
        if($(this).attr('class')=='cell x' || $(this).attr('class')=='cell circle'){
            return;
        }else{
        if(turn == 1){
            $("#board").removeClass();
            $("#board").addClass("board x");
            $(this).removeClass();
            $(this).addClass("cell circle");
            
        }else{
            $("#board").removeClass();
            $("#board").addClass("board circle");
            $(this).removeClass();
            $(this).addClass("cell x");             
        }
        turn^=1;
    }
    })


    function change(v){
        $(v).removeClass();
        $(v).addClass(cell);
    }

    $("#restartButton").click(function(){

        var v = $(".cell");
        $(b).removeClass();
        $(b).addClass("board circle");
        turn = 1;
        var l = v.length;
        for(var i = 0;i<l;i++){
            $(v[i]).removeClass();
            $(v[i]).addClass("cell");
        }
    })



})