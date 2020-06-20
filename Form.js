class Form {

  constructor() {
    this.input = createInput("Fathers Name");
    this.button = createButton('LOVELY MESSAGE');
    this.greeting = createElement('h2');
  }
  
    
  display(){
    var title = createElement('h2')
    title.html("HAPPY FATHERS DAY");
    title.position(500,20);
    
    father1 = createSprite(400,300);
    father2 = createSprite(400,400);
    lovedad = createSprite(350,100);
    father1.addImage("father1",father1image);
    father2.addImage("father2",father2image);
    lovedad.addImage("lovedad",lovedadimage);

    this.input.position(500,100);
    this.button.position(500,150);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     
      //this.greeting.html("here is a special message for you in right side" + player.name)
      text("Dad, today wouldn't mean much without me. You're welcome.Happy Father’s Day! You’re not just my father, but one of my closest friends.The older I get the more I realize how important it is to have a dad like you. You have provided stability in my life and the love and acceptance I needed. Happy Father’s Day!It’s that time of year again when everyone tries to tell themselves that they had the best dad in the world. I really did have the best dad in the world, so they can’t be right. Dad, you’re still the one I think of first when I have a question about something or when I just need some support and good advice. Thank you for always being there for me.Thank you for being there every day with just the love and guidance I’ve needed.Out of all the dads in the world I think we got the best one! Happy Father’s day.",500,100);
      text.rectMode("CENTER")
      //this.greeting.position(displayWidth/2-70,displayHeight/4);
    });

  }
}
