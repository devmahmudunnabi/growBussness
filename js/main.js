$(document).ready(function(){  
  var $searchTrigger = $('[data-ic-class="search-trigger"]'),
      $searchInput = $('[data-ic-class="search-input"]'),
      $searchClear = $('[data-ic-class="search-clear"]');  
  $searchTrigger.click(function(){    
    var $this = $('[data-ic-class="search-trigger"]');
    $this.addClass('active');
    $searchInput.focus();
    });  
  $searchInput.blur(function(){    
    if($searchInput.val().length > 0){      
      return false;      
    } else {      
      $searchTrigger.removeClass('active');      
    }    
  });  
  $searchClear.click(function(){
    $searchInput.val('');
  });  
  $searchInput.focus(function(){
    $searchTrigger.addClass('active');
  });  
});
//==========------slike slider------==================
$(document).ready(function(){
$('.text_slick').slick({
    infinite: true,
    cssEase: 'linear',
    autoplay: 600,
    dots:true,
    arrows:true,
    // fade: true,
    cssEase: 'linear',

  })
});
//==============--mixitup--===================
$(document).ready(function(){
  var containerEl = document.querySelector('[data-ref~="mixitup-container"]');  
  var mixer = mixitup(containerEl, {
      selectors: {
          target: '[data-ref~="mixitup-target"]'
      }
  })
  });


