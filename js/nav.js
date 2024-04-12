const navItem = [
  {
    number: "01",
    name: "關於恆合",
    enName: "About",
    url: "About_Origin.html",
  },
  {
    number: "02",
    name: "最新消息",
    enName: "Least News",
    url: "Last_News.html",
  },
  {
    number: "03",
    name: "熱銷建案",
    enName: "New Project",
    url: "New_Project.html",
  },
  { number: "04", name: "經典建案", enName: "Classic", url: "Classic.html" },
  // {
  //   number: "05",
  //   name: "都更專區",
  //   enName: "Renewal Cases",
  //   url: "Renew.html",
  // },
  { number: "05", name: "聯絡我們", enName: "Contact Us", url: "Contact.html" },
];

$(window).on("load", function () {
  const nav = $("#nav");
  let src = "";

  src += `<div class="nav-left"><div class="nav-left-icon">
        <a href="index.html"
            ><img src="img/share/icon.svg" alt="icon"
        /></a>
    </div>`;
  src += `
  <button class="hamburger hamburger--spring nav-hamb-icon ph" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button></div>
            `;
  src += `
        <div class="nav-right">
          <ul class="nav-right-list">`;
  if (window.innerWidth <= 1024) {
    navItem.forEach((el) => {
      src += ` 
      <li class="nav-right-list-item">
        <div class="nav-right-list-item-number">${el.number}</div>
          <a href="${el.url}">
            <span>${el.name}</span>
              <div class="nav-right-list-item-line"></div>
            <span class="nav-enName">${el.enName}</span>
          </a>
      </li>`;
    });
    src += `
        <div class="nav-bottom">
          <div class="nav-bottom-line"></div>
          <span>Copyright © <span class="year">2024</span>恆合機構版權所有</span
          ><span>地址：231台灣新店區寶橋路140巷11號11樓</span
          ><span>TEL： 02-2910-8718</span>
        </div>
      </ul>
    </div>`;
  } else {
    navItem.forEach((el) => {
      src += ` <li class="nav-right-list-item"><a href="${el.url}">${el.name}</a></li>`;
    });
    src += `</ul>
    </div>`;
  }

  nav.append(src);

  const navHeight = $("#nav").outerHeight();
  // $(window).on("resize", function () {
  //   if (window.innerWidth <= 1024) {
  //     $(".nav-right").hide();
  //   }
  // });
  if (window.innerWidth <= 1024) {
    $(".nav-right").hide();
    $(".nav-hamb-icon").on("click", function (e) {
      e.preventDefault();

      if (!$(this).hasClass("is-active")) {
        $(".nav-hamb-icon").addClass("is-active"); //漢堡選單變成叉叉
        $("#nav").addClass("bg53");
      } else {
        $(".nav-hamb-icon").removeClass("is-active"); //漢堡選單移除叉叉
        $("#nav").removeClass("bg53");
      }

      $(".nav-right").toggle("slide", { direction: "right" });
    });
    // $(".nav-right-list").css("margin-top", -navHeight);
  } else {
    $(".ph").remove();
  }
});
