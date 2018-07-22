window.app.controller('notaController', function ($scope, APIService, $routeParams){
    $scope.notas = []

    console.log($routeParams)

    if ($routeParams.id) {
        APIService.get($routeParams.id, function(err, data){
            if(err) return window.alert(JSON.stringify(err))

            $scope.nota = data
        })
    }

    $scope.salvar = function(){
        if (!$scope.nota.titulo) return window.alert('Preencha o campo título!')
        if (!$scope.nota.descricao) return window.alert('Preencha o campo descrição!')

        APIService.save($scope.nota, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
            window.location.href = '/'
        })
    }

})