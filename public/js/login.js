$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

angular.module('form-app',[]).controller('formController',function ($scope, $http) {
    $scope.username='';
    $scope.password='';
    $scope.nghide = true;
    $scope.submitForm = function(){

        let user = document.getElementById('username-login').value;
        let pass = document.getElementById('password-login').value;
        $http.post("/verifyLogin/?username="+user+"&password="+pass).then(function (res) {
            console.log(res.data);
            if(res.data === 'unauthorised'){
               document.getElementById('error').style.display = "block";
            }
            else{
                document.open()
                document.write(res.data);
                document.close();
            }

        })
    }
})

// $('#verifyLogin').on('click',function () {
//     let username = document.getElementById('username-login').value;
//     let password = document.getElementById('password-login').value;
//
//     if(username ===''|| password===''){
//         console.log(username,password)
//         $('#error').css('display','block');
//         return false;
//     }
//     else{
//         console.log('oh ya')
//         console.log(username,password)
//         $.post(`/verifyLogin/`,{username:username,password:password},function (data) {
//             console.log(data)
//         })
//     }
// })

