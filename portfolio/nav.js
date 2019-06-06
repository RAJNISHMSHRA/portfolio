<script>
        //scrolling jquery
        $(document).ready(function() {
            var scrollLink = $('.scroll');
            
            //smooth scrolling
            scrollLink.click(function(e) {
             e.preventDefault(); //preventing default scroll down
             $('body,html').animate({
                 
                 scrollTop: $(this.hash).offset().top
                }, 1000 );
                });
            //active link switching
            
            
        });
        </script>