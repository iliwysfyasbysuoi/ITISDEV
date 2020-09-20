

$(document).ready(function () {


    function preloadFunc()
    {
    };
    window.onpaint = preloadFunc();


    




    $('.fulfill-btn').click(function(){

        //gets the req number of that row
        var request_ID = $(this).parent().parent().parent().find('.requestID').text();
        var requester = $(this).parent().parent().parent().find('.requester').html();
        var requestedBookDetails = $(this).parent().parent().parent().find('.requestedBookDetails').html();
        var quantity = $(this).parent().parent().parent().find('.requestedBookQuantity').html();

        var pointer = $(this).parent().parent().parent(); //used to define which request/row is being selected
        
        $('#FulfillRequestNumber').val(request_ID);
        $('#FulfillRequester').html(requester);
        $('#FulfillBookDetails').html(requestedBookDetails);
        $('#FulfillBookQuantity').html(quantity);

        //resets the fields in #validateBook
        $('#FulfillBookID').val('');
        $('#validateTitle').html('');
        $('#validateAuthor').html('');
        $('#validatePrice').html('');
        $('#validateBook').prop('hidden', true);

        //for sending na talaga
        $('#SendFulfillBtn').click(function(){
        
            var bookVersion_ID = $('#FulfillBookID').val();
            var request_ID = $('#FulfillRequestNumber').val();
            var quantity = $('#FulfillBookQuantity').html();
            quantity = parseInt(quantity);
            var requester = $('#FulfillRequester').html().trim(); 

            // alert("bookVersion_ID: " + bookVersion_ID + "//// " + request_ID + "////" + quantity+"//// " + requester);
    
            $.post('/fulfillrequest', {bookVersion_ID: bookVersion_ID, request_ID: request_ID , quantity: quantity, requester: requester}, function(result){

                //CHANGES THE ELEMENTS IN THE ROW 
                pointer.find('.status').html("Fulfilled");
    
    
            })
    
    
    
    
    
        });



    });

    $('#FulfillBookID').keyup(function(){
        var bookVersion_ID = $('#FulfillBookID').val();
        console.log("bookVersion_ID: " + bookVersion_ID);

        // checks and retrieves if a bookVersion exist
        $.post('/postOneBookVersion', {bookVersion_ID:bookVersion_ID }, function(result){
            if(result){
                // if valid yung ID

                $('#SendFulfillBtn').prop('disabled', false);
                $('#FulfillError').html("");
                $('#validateBook').prop('hidden', false);
                $('#validateTitle').html(result.title);
                $('#validateAuthor').html(result.aName);
                $('#validatePrice').html('Php ' +result.sellingPrice);
                // $("#validateBookCover").attr("src",result.bookCover);
                $('#fulfillMsg').html("Click send to fulfill the request with this book.");
                
                console.log("result: " + JSON.stringify(result.book));

                var verifybook = 
                `
                <div class="col-12">
                    <div class="card text-left">
                        <div class="card-body">
                            <table>
                                <tr>
                                    <h5>Book to be linked to the request:</h5>
                                </tr>
                                <tr>
                                    <th>
                                        <img class="card-img-top" id="validateBookCoverr" src="${result.bookCover}" style = "width: 150px" alt="Card image cap">
                                    </th>
                                    <th>
                                        <p class="card-text">
                                        <b>bookVersion_ID:</b> ${result.bookVersion_ID}  <br>
                                            <b>Title:</b> ${result.title}<br>
                                            <b>Author/s</b>${result.aName} <br>
                                            <b>Quality: </b>${result.quality} <br>
                                            <b>Edition: </b>${result.edition} <br>
                                            <b>Type: </b>${result.type} <br>
                                            <b>Stock: </b>${result.quantity} <br>
                                            <b>Price</b> Php ${result.sellingPrice}
                                        
                                        </p>
                                    </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                                    
                `    ;
                
                $("#validateBook").html(verifybook);


            }else{
                // if not valid yung ID

                $('#SendFulfillBtn').prop('disabled', true);
                $('#FulfillError').html("Book does not exist!");
                $('#validateBook').prop('hidden', true);
                $('#fulfillMsg').html("");
                console.log("result: " + result.title);
            }
        })
    })


    $('#searchFulfill').keyup(function(){
        var title = $('#searchFulfill').val();
        console.log("title: " + title);
        $("#fulfillsearchresults").html(" ");

        $.post('/postSearchBookForFulfillment', {searchtext: title}, function(result){
            console.log("result: " + JSON.stringify(result, null , ' '));
            console.log("LENGTH: "+ result.searchList.length);


            result.searchList.forEach(function(v, err){

                var bookresult = 
                `
                <div class="col-12">
                    <div class="card text-left">
                        <div class="card-body">
                            <table>
                                <tr>
                                    <th>
                                        <img class="card-img-top" id="validateBookCover" src="${v.bookCover}" style = "width: 150px" alt="Card image cap">
                                    </th>
                                    <th>
                                        <p class="card-text">
                                        <b>bookVersion_ID:</b> ${v.bookVersion_ID}  <br>
                                            <b>Title:</b> ${v.title}<br>
                                            <b>Author/s</b>${v.aName} <br>
                                            <b>Quality: </b>${v.quality} <br>
                                            <b>Edition: </b>${v.edition} <br>
                                            <b>Type: </b>${v.type} <br>
                                            <b>Stock: </b>${v.quantity} <br>
                                            <b>Price</b> Php ${v.sellingPrice}
                                        
                                        </p>
                                    </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                                    
                `    ;

                $("#fulfillsearchresults").append(bookresult);


            })
            
        })

    })

   

});