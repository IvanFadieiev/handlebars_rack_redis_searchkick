//= require jquery
//= require jquery_ujs
//= require handlebars.runtime
//= require_tree ./templates
//= require users
//= require handlebars

var new_post = function(post){
    var data = HandlebarsTemplates['posts/show'](post);
    $('.AZAZA').prepend(data);
}

var load_to_show_page = function(id){
    $(function(){
        $.ajax({
            url: '/user_posts',
            data: {id: id},
            success: function(data){
                posts_list(data);
            },
            error: function(){
                alert('Error(((')
            }
        })
    })
}

var posts_list = function(posts){
    var data = HandlebarsTemplates['posts/index']({posts: posts});
    $('.posts_list').html(data);
};
