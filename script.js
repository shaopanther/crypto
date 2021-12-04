jQuery(document).ready(function($){
    /*Page Refresher*/ 
    $('#refresh').on('click',function() {
            location.reload();
    });
    /* api calls*/
    $('#check').on('click',function(){
    $.ajax({
            type:'Get',
            url:'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=bitcoin&start=1&limit=6&category=spot&sort=cmc_rank_advanced',
            success:function(response)
            {
                console.log(response);
                var arr=response['data']['marketPairs'];
                var max=response['data']['marketPairs'][0]['price'];
                var min=response['data']['marketPairs'][0]['price'];
                var index_max,index_min;
                var max_market_name,max_market_url,min_market_name,min_market_url;
                $.each(arr, function(index, value){
                    if(value['price'] > max){
                        max=value['price'];
                        index_max=index;
                        max_market_name=value['exchangeName'];
                        max_market_url=value['marketUrl'];
                    }
                    if(value['price'] < min){
                        min=value['price'];
                        index_min=index;
                        min_market_name=value['exchangeName'];
                        min_market_url=value['marketUrl'];
                    }
                    
                });
                $('#info').removeClass('d-none');
                $('#check').addClass('d-none');
                $('#refresh').removeClass('d-none');
                /* Heading */ 
                $('#sell_btc_heading').text('Sell Opportunity');
                $('#buy_btc_heading').text('Buy Opportunity');
                /* Description*/ 
                $('#sell_btc_desc').text('From multiple "Exchanges" we have find best buying opportunity for you.On '+max_market_name+' BTC price= '+max+' USD');
                $('#buy_btc_desc').text('From multiple "Exchanges" we have find best buying opportunity for you.On '+min_market_name+' BTC price= '+min+' USD');
                /* Link */
                $('#sell_btc_link').attr('href',max_market_url);
                $('#buy_btc_link').attr('href',min_market_url); 
                
                    
            }
        });
        $.ajax({
            type:'Get',
            url:'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=ethereum&start=1&limit=6&category=spot&sort=cmc_rank_advanced',
            success:function(response)
            {
                var arr=response['data']['marketPairs'];
                var max1=response['data']['marketPairs'][0]['price'];
                var min1=response['data']['marketPairs'][0]['price'];
                var index_max1,index_min1;
                var max_market_name1,max_market_url1,min_market_name1,min_market_url1;
                $.each(arr, function(index, value){
                    if(value['price'] > max1){
                        max1=value['price'];
                        index_max1=index;
                        max_market_name1=value['exchangeName'];
                        max_market_url1=value['marketUrl'];
                    }
                    if(value['price'] < min1){
                        min1=value['price'];
                        index_min1=index;
                        min_market_name1=value['exchangeName'];
                        min_market_url1=value['marketUrl'];
                    }
                    
                });
                       /* Heading */ 
                $('#sell_eth_heading').text('Sell Opportunity');
                $('#buy_eth_heading').text('Buy Opportunity');
                /* Description*/ 
                $('#sell_eth_desc').text('From multiple "Exchanges" we have find best buying opportunity for you.On '+max_market_name1+' ETH price= '+max1+' USD');
                $('#buy_eth_desc').text('From multiple "Exchanges" we have find best buying opportunity for you.On '+min_market_name1+' ETH price= '+min1+' USD');
                /* Link */
                $('#sell_eth_link').attr('href',max_market_url1);
                $('#buy_eth_link').attr('href',min_market_url1); 
                

                    
            }
        });
    });
 
                 
});
$('#ada_val').on('keyup', function(e) {
    e.preventDefault();
    let array = [];
    $('.coinPriceBlock').each(function(i,j){
      var data=  $(this).find('.coinPriceBlock__price').text();
     var price_array= data.split("$");
        array.push(price_array[1]);
    });
    var ada_price=array[0];
    var ada_balance=$(this).val();
    var ada_total= ada_balance*ada_price;
    $('#total_ada_price_hide').val(ada_total);
    $('#total_ada_balance').text('Total Cardano Balance: '+ ada_balance + 'ADA');
    $('#ada_heading').text('ADA Details ');
    $('#ada_price').text('ADA Price Today: '+ ada_price + '$');
    $('#total_ada_price').text('Total ADA Price: ' + ada_total.toFixed(2) + '$');
    
});
$('#trx_val').on('keyup', function(e) {
    e.preventDefault();
    let array = [];
    $('.coinPriceBlock').each(function(i,j){
      var data=  $(this).find('.coinPriceBlock__price').text();
     var price_array= data.split("$");
        array.push(price_array[1]);
    });
    var trx_price=array[1];
    var trx_balance=$(this).val();
    var trx_total= trx_balance*trx_price;
    $('#total_trx_price_hide').val(trx_total);
    $('#trx-heading').text('CKB Details');
    $('#total_trx_balance').text('Total CKB Balance: '+ trx_balance +'CKB');
    $('#trx_price').text('CKB Price Today: '+ trx_price + '$');
    $('#total_trx_price').text('Total CKB Price: '+ trx_total.toFixed(2) + '$');
    
});
$('#total').on('click', function(e) {
    e.preventDefault();
    var trx_total=  parseFloat($('#total_trx_price_hide').val());
    var ada_total=  parseFloat($('#total_ada_price_hide').val());
    if(!trx_total || !ada_total){
        alert('Please Provide Number of ADA & CKB');
        return;
    }
   var total= trx_total+ada_total;
    $('#total_investment').text('Total Investment: '+ total.toFixed(2) + '$');
    
});

    
