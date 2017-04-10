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

function posts_list(parameters){
    var posts = parameters.posts;
    var data = HandlebarsTemplates['posts/index']({posts: posts});
    $('#posts_list').html(data);
};

function render_post_form(user_id, token){
    var data = HandlebarsTemplates['posts/new_post']({user: user_id, token: token});
    $('#new_post_form').prepend(data);
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