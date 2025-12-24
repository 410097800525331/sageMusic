$(document).ready(function () {

  /* ---------- Sidebar / Top ---------- */

  const leftSidebar = `
    <button id="left_sidebar_toggle">☰</button>

    <div class="ico_nav">
      <a href="/index.html"><img src="/assets/img/ico-Home.svg" alt="Home"></a>
      <a href="/basic/foryou.html"><img src="/assets/img/ico-For-you.svg" alt="For you"></a>
      <a href="/basic/library.html"><img src="/assets/img/ico-Library.svg" alt="Library"></a>
      <a href="/basic/upgrade.html"><img src="/assets/img/ico-Upgrade.svg" alt="Upgrade"></a>
    </div>

    <nav class="nav">
      <a href="/index.html">Home</a>
      <a href="/basic/foryou.html">For you</a>
      <a href="/basic/library.html">Library</a>
      <a href="/basic/upgrade.html">Upgrade</a>
    </nav>
  `;
  $(".left_sidebar").append(leftSidebar);

  const top = `
    <input class="search" placeholder="Search" />
    <div>
      <ul class="user_menu">
        <li><button id="signup_btn">Sign Up</button></li>
        <li><button id="signin_btn">Sign In</button></li>
      </ul>
    </div>
  `;
  $(".top").append(top);

  /* ---------- Sidebar state restore ---------- */

  const sidebarState = localStorage.getItem("sidebar_collapsed");
  if (sidebarState === "1") {
    $(".left_sidebar").addClass("is_collapsed");
    $(".layout").addClass("sidebar_collapsed");
    $("#left_sidebar_toggle").text("✕");
  }

  /* ---------- Sidebar toggle ---------- */

  $(document).on("click", "#left_sidebar_toggle", function () {
    $(".left_sidebar").toggleClass("is_collapsed");
    $(".layout").toggleClass("sidebar_collapsed");

    const isCollapsed = $(".left_sidebar").hasClass("is_collapsed");
    localStorage.setItem("sidebar_collapsed", isCollapsed ? "1" : "0");

    $(this).text(isCollapsed ? "✕" : "☰");
  });

  /* ---------- Active menu ---------- */

  const currentPath = window.location.pathname;

  $(".left_sidebar a").removeClass("active");

  $(".left_sidebar a").each(function () {
    const linkPath = $(this).attr("href");
    if (linkPath === currentPath) {
      $(this).addClass("active");
    }
  });

});
