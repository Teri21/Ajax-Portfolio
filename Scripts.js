    $(document).ready(function () {
        var API_Key= "217f8838751640c7a93bcaee75cacf88"
        $.get(
            "https://www.themealdb.com/api/json/v1/1/filter.php?i=Salmon",
        function (res) {
            //this is what we use to get data from an API
            console.log(res);
        }
        );
    });
$(".btn-1").click(function(res) {
    console.log('Button-1 was clicked')
}); ""
$.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=Salmon.json", function(res){
for(var i =0; i<Array.length; i++){
console.log(meals[2].strMeal);
}
$('btn-1').append(res.meal);
}, "json");

$('display').click(function(){

});
$('.meal').html(`
<h4>${data[2].name}</h4>
`)