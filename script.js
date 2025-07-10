  $(document).ready(function () {
    $('.no').click(function () {
      $('#f1').hide();
      $('#f2').css('display', 'flex');
    });

    $('.weno').click(function () {
      $('#f2').hide();
      $('#f1').css('display', 'flex');
    });

    $('.si').click(function () {
      $('#f1').hide();
      $('#f3').css('display', 'flex');
    });

    $('.dale').click(function () {
      $('#f3').hide();
      $('#f4').css('display', 'flex');
    });

    $('.rega').click(function () {
      $('#f4').hide();
      $('#f5').css('display', 'flex');
    });

    $('.ojo').click(function () {
      $('#f5').hide();
      $('#f6').css('display', 'flex');
    });

    $('.afi').click(function () {
      $('#f6').hide();
      $('#f7').css('display', 'flex');
      $('#f8').css('display', 'flex');
    });

    $('.salu').click(function () {
      $('#f8').hide();
      $('#f9').css('display', 'flex');
    });

    $('.copy').click(function () {
      $('#f9').hide();
      $('#f10, #f11').css('display', 'flex');
    });

    $('span.go').click(function () {
      $('#f13').hide();
      $('#f14').css('display', 'block');
    });

    $('.ca1').click(function () {
      $('#f12').css('display', 'flex');
      $('#f13').css('display', 'block');
    });

    $('.ca3').click(function () {
      $('#f15').css('display', 'block');
      $('#f16').css('display', 'flex');
    });

    $('.ca2').click(function () {
      $('#f18').css('display', 'block');
      $('#f19').css('display', 'flex');
    });

    $('.carta').click(function () {
      $('#f12').hide();
    });

    $('.anillo').click(function () {
      $('#f16').hide();
      $('#f17').css('display', 'flex');
    });

    $('.marry').click(function () {
      $('#f15, #f17').hide();
    });

    $('.meme').click(function () {
      $('#f19').hide();
      $('#f20').css('display', 'flex');
    });

    $('.meme2').click(function () {
      $('#f20').hide();
      $('#f21').css('display', 'flex');
    });

    $('.yes').click(function () {
      $('#f21').hide();
      $('#f22').css('display', 'flex');
    });
  });
</script>
