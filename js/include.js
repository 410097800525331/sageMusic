$(document).ready(function () {
  const leftSidebar = `
      <button id="left_sidebar_toggle">☰</button>

      <div class="ico_nav">
        <a href="/basic/signin.html"><img src="/assets/img/ico-User.svg" alt="ico" title="Sign in"></a>
        <a href="../index.html"><img src="/assets/img/ico-Home.svg" alt="ico" title="Home"></a>
        <a href="/basic/foryou.html"><img src="/assets/img/ico-For-you.svg" alt="ico" title="For you"></a>
        <a href="/basic/library.html"><img src="/assets/img/ico-Library.svg" alt="ico" title="Library"></a>
        <a href="/basic/upgrade.html"><img src="/assets/img/ico-Upgrade.svg" alt="ico" title="Upgrade"></a>
      </div>

      <nav class="nav">
        <a class="active" href="../index.html">Home</a>
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
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>
  `;

  $(".top").append(top);

});


$(document).on("click", "#left_sidebar_toggle", function () {
  $(".left_sidebar").toggleClass("is_collapsed");
  $(".layout").toggleClass("sidebar_collapsed");
  $(this).text($(this).text() === "☰" ? "✕" : "☰");
});

$(document).on("click", ".left_sidebar .nav a", function () {
  $(".left_sidebar .nav a").removeClass("active");
  $(this).addClass("active");
});