'use strict';
app.filter("descriptionBrandReviewFilter", function () {
    return function (products, filterValue) {
        if (!filterValue) return products;

        var matches = [];
        filterValue = filterValue.toLowerCase();
        for (var i = 0; i < products.length; i++) {
            var product = products[i];

            if (product.description.toLowerCase().indexOf(filterValue) > -1 ||
                product.brand.toLowerCase().indexOf(filterValue) > -1 ||
                 product.comments.toLowerCase().indexOf(filterValue) > -1) {
                matches.push(product);
            }
        }
        return matches;
    };
});