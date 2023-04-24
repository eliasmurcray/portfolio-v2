import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  skills = {
    mastered: [{
      name: "HTML",
      icon: "html.png"
    }, {
      name: "CSS",
      icon: "css.png"
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
      icon: "express.png"
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
        icon: "firefox-addons.png"
      },
      {
        name: "Microsoft Azure",
        icon: "microsoft-azure.png"
      },
      {
        name: "PineScript",
        icon: "pinescript.png"
      },
      {
        name: "Raspberry Pi",
        icon: "raspberry-pi.png"
      }
    ]
  };
}
