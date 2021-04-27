import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.scss']
})
export class SpinWheelComponent implements OnInit {

  constructor() { }

  //set default degree (360*5)
  degree = 1800;
  //number of clicks = 0
  clicks = 0;

  spin(){
    //add 1 every click
    this.clicks ++;

    /*multiply the degree by number of clicks
    generate random number between 1 - 360,
    then add to the new degree*/
    var newDegree = this.degree*this.clicks;
    var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    const totalDegree = newDegree+extraDegree;

    /*let's make the spin btn to tilt every
    time the edge of the section hits
    the indicator*/
    $('#wheel .sec').each(() => {
      var t = $(this);
      var noY = 0;
      var c = 0;
      var n = 700;
      var interval = setInterval(function () {
        c++;
        if (c === n) {
          clearInterval(interval);
        }

        var aoY = t.offset().top;
        $("#txt").html(aoY);
        console.log(aoY);

        /*23.7 is the minumum offset number that
        each section can get, in a 30 angle degree.
        So, if the offset reaches 23.7, then we know
        that it has a 30 degree angle and therefore,
        exactly aligned with the spin btn*/
        if(aoY < 23.89){
          console.log('<<<<<<<<');
          $('#spin').addClass('spin');
          setTimeout(function () {
            $('#spin').removeClass('spin');
          }, 100);
        }
      }, 10);

      $('#inner-wheel').css({
        'transform' : 'rotate(' + totalDegree + 'deg)'
      });

      noY = t.offset().top;

    });
  }

  ngOnInit(): void {
  }

}



$(document).ready(function(){

  /*WHEEL SPIN FUNCTION*/
  $('#spin').click();
});//DOCUMENT READY
