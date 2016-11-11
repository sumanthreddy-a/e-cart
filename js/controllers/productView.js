var app = angular.module("myApp")
app.controller("productViewCtrl",function($scope,$routeParams,productViewSvc,cartSvc){
    $scope.click=function($scope){
        $scope.productlist=cartSvc.getItems();
    }
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





    // $scope.mycart=cartSvc.addItem();
})