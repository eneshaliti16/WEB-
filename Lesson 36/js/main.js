// $(window).ready(function(){
//     alert('It is working');
// })

$('li').click(function(){
    alert('Clicked');
});

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('Testing test');
    $('#h1').append('Extra test');
});

$('#myDiv').click(function(){
    $(this).addClass('clicked');
})
.find('span')
.attr('title','Hover over me');

