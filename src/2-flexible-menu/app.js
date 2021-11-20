const SIDEBAR_WIDTH  = "SidebarWidth";

function resizer(element, cb) {
  element.addEventListener("pointerdown", onPointerDown);

  function onPointerDown(e) {
    e.preventDefault();
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp, {once: true});
  }

  function onPointerUp(e) {
    document.removeEventListener("pointermove", onPointerMove)
  }

  function onPointerMove(e) {
    e.preventDefault();
    cb(e.pageX);
  }
}

resizer(document.querySelector(".resizer"), function (x) {
  const sidebarWidth = x + "px";
  sessionStorage.setItem(SIDEBAR_WIDTH, sidebarWidth)
  document.body.style.setProperty("--sidebar", sidebarWidth);
});

const sidebarWidth = sessionStorage.getItem(SIDEBAR_WIDTH);
if (sidebarWidth !== null) {
  document.body.style.setProperty("--sidebar", sidebarWidth);
}