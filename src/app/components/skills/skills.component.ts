import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = {
    mastered: [{
      name: "HTML",
      icon: "html5.png"
    }, {
      name: "CSS",
      icon: "css3.png"
    }, {
      name: "JavaScript",
      icon: "javascript.png"
    }, {
      name: "TypeScript",
      icon: "typescript.png"
    }, {
      name: "React",
      icon: "react.png"
    }, {
      name: "Angular",
      icon: "angular.png"
    }, {
      name: "SCSS",
      icon: "sass.png"
    }, {
      name: "Webpack",
      icon: "webpack.png"
    }, {
      name: "Git",
      icon: "git.png"
    }, {
      name: "npm",
      icon: "npm.png"
    }, {
      name: "Firebase",
      icon: "firebase.png"
    }, {
      name: "Node.js",
      icon: "nodejs.png"
    }, {
      name: "Chrome Extensions",
      icon: "chrome-extensions.png"
    }, {
      name: "Express",
      icon: "express.webp"
    }],
    supplementary: [
      {
        name: "Linux",
        icon: "linux.png"
      },
      {
        name: "AWS",
        icon: "aws.png"
      },
      {
        name: "ESLint",
        icon: "eslint.png"
      },
      {
        name: "Firefox Addons",
        icon: "firefox-addons.jpeg"
      },
      {
        name: "Microsoft Azure",
        icon: "microsoft-azure.png"
      },
      {
        name: "PineScript",
        icon: "pinescript.png"
      }
    ]
  };
}
