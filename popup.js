document.getElementById("apply-styles").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleVideoStyles,
  });
});

function toggleVideoStyles() {
  const video = document.querySelector("video");
  video.classList.toggle("fullscreen");
  const body = document.querySelector("body");
  body.classList.toggle("hide");

  if (!video) alert("fucking bullshit mate");
  if (!body) alert("fucking bullshit mate");

  // if (video.classList.contains("almost-fullscreen")) {
  //   video.classList.remove("almost-fullscreen");
  // } else {
  //   video.classList.add("almost-fullscreen");
  // }
}
