window.app.service('APIService', function($http){
    
    var url = 'http://localhost:3000'
    
    this.getAll = function(callback){
        $http.get(url + '/notas').then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.save = function(nota, callback){
        var urlNota= url + '/notas'
        if (nota.id){
            urlNota += '/' + nota.id
        }
        
        $http({
            url: urlNota,
            data: nota,
            method: nota.id ? 'PUT' : 'POST'
        }).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.remove = function(id, callback){
        $http.delete(url + '/notas/'+ id).then(
            function(res){
                callback(null, res.data)
            },
            function(err){
                callback(err)
            }
        )
    }

    this.inactive = function(id, callback){
        var self = this
        $http.get(url + '/notas/' + id).then(
            function(res){
                var nota = res.data
                nota.inativo = !nota.inativo
                self.save(nota, callback)
            },
            function(err){
                callback(err)
            }
        )
    }
})