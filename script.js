const tagsElement = document.getElementById("tags");
const textArea = document.getElementById("textarea");
textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = " ";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== " ") // trim any white spece
    .map((tag) => tag.trim());
  tagsElement.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerHTML = tag;
    tagsElement.appendChild(tagElement);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = choseRandomTag();
    highlight(randomTag);
    setTimeout(() => {
      removeHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomtag = choseRandomTag();
      highlight(randomtag);
    }, 100);
  }, times * 100);
}

function choseRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function removeHighlight(tag) {
  tag.classList.remove("highlight");
}
