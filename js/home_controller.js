window.app.controller('homeController', function ($scope, APIService){
    $scope.notas = []

    function listar (){
        APIService.getAll(function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
            $scope.notas = data
        })
    }

    listar()

    $scope.deletar = function(id){
        var c = confirm("Deseja realmente excluir esta nota?")
        if (c){
            APIService.remove(id, function(err, data){
                if(err) return window.alert(JSON.stringify(err))                
                listar()
            })
        }
    }

    $scope.inativar = function(id){
        APIService.inactive(id, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
            listar()
        })
    }
})