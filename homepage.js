const letters = "0123456789AKEHBPOGITAGHEL";
const email = document.getElementById("email");
const discord = document.getElementById("discord");
const github = document.getElementById("github");
const deviantart = document.getElementById("deviantart");
const title = document.getElementById("bigtitle");

email.addEventListener("click", () => {
  title.setAttribute("data-value", "jam.tea@toast.com");

  let iterations = 0;

  const interval = setInterval(() => {
    title.innerText = title.dataset.value
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return title.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= title.dataset.value.length) {
      clearInterval(interval);
    }

    iterations += 1 / 2;
  }, 30);
});

discord.addEventListener("click", () => {
    title.setAttribute("data-value", "@toasted.dragon");

    let iterations = 0;

    const interval = setInterval(() => {
        title.innerText = title.dataset.value
        .split("")
        .map((letter, index) => {
            if (index < iterations) {
            return title.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

        if (iterations >= title.dataset.value.length) {
        clearInterval(interval);
        }

        iterations += 1 / 2;
    }, 30);
    });

    deviantart.addEventListener("click", () => {
    title.setAttribute("data-value", "@ToastedDragon24");

    let iterations = 0;

    const interval = setInterval(() => {
        title.innerText = title.dataset.value
        .split("")
        .map((letter, index) => {
            if (index < iterations) {
            return title.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

        if (iterations >= title.dataset.value.length) {
        clearInterval(interval);
        }

        iterations += 1 / 2;
    }, 30);
    });

    github.addEventListener("click", () => {
        title.setAttribute("data-value", "DragonPoika");
      
        let iterations = 0;
      
        const interval = setInterval(() => {
          title.innerText = title.dataset.value
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return title.dataset.value[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
      
          if (iterations >= title.dataset.value.length) {
            clearInterval(interval);
          }
      
          iterations += 1 / 2;
        }, 30);
      });