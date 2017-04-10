//= require jquery
//= require jquery_ujs
//= require handlebars.runtime
//= require_tree ./templates
//= require users
//= require jquery.readyselector
//= require handlebars

function new_post(post){
    var data = HandlebarsTemplates['posts/show'](post);
    $('.AZAZA').prepend(data);
};

// function load_to_show_page(id){
//     $(function(){
//         $.ajax({
//             url: '/user_posts',
//             data: {id: id},
//             success: function(data){
//                 posts_list({posts: data});
//             },
//             error: function(){
//                 alert('Error(((')
//             }
//         })
//     })
// };

function posts_list(parameters){
    var posts = parameters.posts;
    var data = HandlebarsTemplates['posts/index']({posts: posts});
    $('.posts_list').html(data);
};


$('.users.show').ready(function (){

    var path_name = window.location.pathname;
    var path_name_array = path_name.split('/');
    var id = path_name_array[path_name_array.length - 1];
    
    $.ajax({
        url: '/user_posts',
        data: {id: id},
        success: function(data){
            posts_list({posts: data});
        },
        error: function(){
            alert('Error(((')
        }
    });
});