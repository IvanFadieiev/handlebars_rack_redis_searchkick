$(function(){
    $('#create_post').on('click', function(event){
        event.preventDefault();
        var post_title_selector = $('#post_title');
        var msg  = post_title_selector.val();
        if (msg.length > 0){
            $.ajax({
                url: '/posts',
                cache: true,
                type: 'POST',
                data: $('#new_post').serialize()
            }).done(function(data){
                var a = new_post(data);
                post_title_selector.val('');
                post_title_selector.focus();
            }).fail(function(){
                alert('Error with ajax for create post')
            });
        } else {
            return
        }
    })
});