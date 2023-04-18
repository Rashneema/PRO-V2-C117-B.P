//Create date variable
var date = new Date()
let display_date = "Date :" + date.toLocaleDateString()

//Load HTML DOM

//Define variable to store predicted emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        var input_data = {
            "text": $("#text").val()
        }
        //AJAX call

        $.ajax({
            
            
              {
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                
            },
            //Error function
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    });
})

