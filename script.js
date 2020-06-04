$(document).ready(function(){
    $('button').click(function(){
        const a=$('#nameid').val();
       // alert(a);
        $('#imgchnge').attr('src',`https://joeschmoe.io/api/v1/${a}`);
    });
});