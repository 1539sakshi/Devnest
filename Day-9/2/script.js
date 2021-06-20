const std1 = {
  name: "Sakshi Singh",
  greet(greeting, title) {
    console.log(greeting + title + this.name);
  },
};

const std2 = {
  name: "Shivangi Singh",
};

std1.greet.call(std2, "Hello ", "Miss ");
std1.greet.apply(std2, ["Hello ", "Miss "]);

const bindedFunction = std1.greet.bind(std2, "Good morning ", "Miss ");
bindedFunction();
