product_order = function(id, snapshot, page){//div_id

	//id for create html tags
	for (var i = (Number(page)-1)*8; i < Number(page)*8; i++){

 		
 		var temp = snapshot.docs[i].data();
		var temp_id = snapshot.docs[i].id;
		console.log(temp_id);
		console.log(temp);
 		//show products....


		var show = document.getElementById('Products');
 		var div = document.createElement("div");
 		div.className = "col-12 col-sm-6 col-md-12 col-xl-6";
    	div.innerHTML = 
    	'<div class="single-product-wrapper" id = "single_product">' +
                '<!-- Product Image -->' +
                '<div class="product-img">' +
                    '<img src="img/product-img/product1.jpg" alt="">' + 
                    '<!-- Hover Thumb -->' +
                    '<img class="hover-img" src="img/product-img/product2.jpg" alt="">' +
                '</div>' +

                '<!-- Product Description -->' +
                '<div class="product-description d-flex align-items-center justify-content-between">' +
                    '<!-- Product Meta Data -->' +
                    '<div class="product-meta-data">' +
                        '<div class="line"></div>' +
                        '<p class="product-price">$' + temp['price'] + '</p><!-- price -->' +
                        '<a href="product-details.html?id=' + temp['product_id'] + '"><!--product_detail.html?product_id=xxx -->' +
                            '<h6>' + temp['product_title'] + '</h6><!-- product_title -->' +
                        '</a>' +
                    '</div>' +
                    '<!-- Ratings & Cart -->' +
                    '<div class="ratings-cart text-right" id = "right_text">' +
                        '<div class="ratings"><!-- product_evaluation -->' +
                        	temp['product_evaluation'] + 
                            '<i class="fa fa-star" aria-hidden="true"></i>' +
                            '<i class="fa fa-star" aria-hidden="true"></i>' +
                            '<i class="fa fa-star" aria-hidden="true"></i>' +
                            '<i class="fa fa-star" aria-hidden="true"></i>' +
                            '<i class="fa fa-star" aria-hidden="true"></i>' +
                        '</div>' +             	
                        '<div class="little-mark cart" >' +
                            '<a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt=""></a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    

   		show.appendChild(div);
 		
 		
        if(temp['is_Bid']){// or do stupid
        	var show_1 = document.getElementById('right_text');
        	//var show_1 = document.getElementById('right_text');
 			var div_1 = document.createElement("div");
 			div_1.className = "little-mark cart";
        	div_1.innerHTML = '<a href="" data-toggle="tooltip" data-placement="left" title="Bid Product"><img src="img/core-img/auctionClock.png" alt=""></a>';
        	//show_1.appendChild(div_1);
			show_1.insertBefore(div_1, show_1.children[1]);
                      
        }


 		
	 	if((i + 1) % 8 == 0){
	 		var show_1 = document.getElementById('Products');
	 		var div_1 = document.createElement("div");
	 		div_1.className = "pageNumber_down col-12 ";
	 		div_1.innerHTML = '<div class="pageNumber_down col-12 ">' + 
	                '<!-- Pagination -->' + 
	                '<nav aria-label="navigation">' + 
	                    '<ul class="pagination justify-content-end mt-15">' + 
	                        '<li class="page-item active"><a class="page-link" href="javascript:changepage(1);">01.</a></li>' + 
	                        '<li class="page-item"><a class="page-link" href="javascript:changepage(2);">02.</a></li>' + 
	                        '<li class="page-item"><a class="page-link" href="javascript:changepage(3);">03.</a></li>' + 
	                        '<li class="page-item"><a class="page-link" href="javascript:changepage(4);">04.</a></li>' + 
	                    '</ul>' + 
	                '</nav>' + 
	            '</div>';
            show_1.appendChild(div_1);
    	}

        var show_2 = document.getElementById('total_products');
        if(Number(page)*8 >= snapshot.size)
            show_2.innerHTML = '<p class="howamnypages" >Showing ' + ((Number(page)-1)*8+1) + '-' + snapshot.size + ' of ' + snapshot.size + '</p>';
        else
            show_2.innerHTML = '<p class="howamnypages" >Showing ' + ((Number(page)-1)*8+1) + '-' + Number(page)*8 + ' of ' + snapshot.size + '</p>';
	}
    
}

module.exports = product_order;