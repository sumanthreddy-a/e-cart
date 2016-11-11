var app=angular.module("myApp")
app.controller("cartCtrl",function ($scope,productViewSvc,$routeParams) {
    $scope.addToCart=function () {
        productViewSvc.getProductsDetails($routeParams.name)

            .then(function (response) {
                var products = [];
                var prd = response.data.products
                for (var i = 0; i < prd.length; i++) {
                    var name = prd[i].title
                    // console.log(name)
                    if (name == $routeParams.name) {
                        products.push(prd[i])
                        console.log(products)
                    }
                }
                $scope.productlist = products

            })
            .catch(function (response) {
                $scope.error = "error"
            })


    }
})