$(document).ready(function(){
    $(".accordion h1").click(function(){
        var id = this.id;     /* getting heading id */  
        $(".accordion-content").each(function(){    /* looping through all elements which have class .accordion-content */
            if($("#"+id).next()[0].id != this.id){
                $(this).slideUp();
            }    
        });
        $(this).next().toggle();  /* Selecting div after h1 */
    });
    $(".accordion2 h1").click(function(){
        var id = this.id;  
        $(".accordion-content2").each(function(){
            if($("#"+id).next()[0].id != this.id){
                $(this).slideUp();
            }
        });
    
        $(this).next().toggle();  
    });
    

    $(".tab-list").each(function() {
        console.log("hello");
        let $this = $(this),
        $tab = $this.find('li.active'),
        $link = $tab.find('a'),
        $panel = $($link.attr('href'));

        $this.on('click', '.tab-control', function(e) {
            console.log("hello");
            e.preventDefault();
            let $link = $(this);
            let id = this.hash;
            console.log(id);

            if(id !== $link.parent().is('.active')) {
                console.log("success");
                $panel.removeClass('active');
                $tab.removeClass('active');
                $panel = $(id).addClass('active');
                $tab = $link.parent().addClass('active');
            }
            else{
                console.log("fail");
            }
        });
    });
});