import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'relaxApp';
  totalTime = 7500;
  breatheTime = (this.totalTime / 5) * 2;
  holdTime = this.totalTime / 5;
  breatheIn = false;
  breatheOut = false;
  hold = false;

  breathAnimation = () => {
    this.breatheIn = true;
    this.breatheOut = false;
    this.hold = false;


    setTimeout(() => {
        this.breatheIn = false;
        this.breatheOut = false;
        this.hold = true;

        setTimeout(() => {
          this.breatheIn = false;
          this.breatheOut = true;
          this.hold = false;
          // container.className = 'container shrink';
        }, this.holdTime);
      }, this.breatheTime);

      setInterval(this.breathAnimation, this.totalTime);
  }


    ngOnInit(): void {
      this.breathAnimation();
    }
  }


