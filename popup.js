document.getElementById("applyStyles").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleVideoStyles,
  });
});

function toggleVideoStyles() {
  const video = document.querySelector("video");
  video.classList.toggle("fuck");
  const body = document.querySelector("body");
  body.classList.toggle("fuck-me");

  if (!video) alert("fucking bullshit mate");

  // if (video.classList.contains("almost-fullscreen")) {
  //   video.classList.remove("almost-fullscreen");
  // } else {
  //   video.classList.add("almost-fullscreen");
  // }
}
