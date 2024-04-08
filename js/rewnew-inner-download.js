const downloadItems = [
  {
    time: "2021/09/24",
    content: "召開都更大會（皇翔土城事業報告書）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: "召開都更大會（皇翔土城事業報告書）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: "召開都更大會（皇翔土城權變報告書）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: "召開聽證會（皇翔土城事業報告書）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: " 召開聽證會（皇翔土城權變報告書）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: "皇翔土城第三次小組會議紀錄）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: "召開第三次專案小組（權變報告書）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: "第二次小組會議紀錄（修正版）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: "召開第二次專案小組（事業計畫報告書）",
    link: "#",
  },
  {
    time: "2021/09/24",
    content: "召開第二次專案小組（事業計畫報告書）",
    link: "#",
  },
];

$(document).ready(function () {
  let pageNumber = Math.ceil(downloadItems.length / 9);
  let prevPage = 0;
  let currentPage = 9;

  function downloadRender(prev, current) {
    let src = ""; //換頁時初始化
    downloadItems.slice(prev, current).forEach(function (item, index) {
      src += `<div class="download">
          <p class="download-time">${item.time}</p>
          <p class="download-content">${item.content}</p>
          <a href="${item.link}">PDF</a>
        </div>
          `;
    });
    return src;
  }
  function appendContent(target, appendResult) {
    $(".page-number").removeClass("page-number-active"); //移除全部的active class
    $(target).addClass("page-number-active"); //新增被點擊的active class
    //一開始的jquery的css畫面事件
    $(".cut-2-item-download-main").empty().append(appendResult);
  }
  const sliceResult = downloadRender(prevPage, currentPage);

  //頁碼
  $(".page-number-container").on("click", ".page-number", function (e) {
    currentPage = $(e.target).data("number") * 9;
    prevPage = currentPage - 9;
    let clickResult = downloadRender(prevPage, currentPage); //點擊是異步事件 所以需要再執行一次
    appendContent(e.target, clickResult);
  });

  //前一頁
  $(".left-arrow").on("click", function (e) {
    if (currentPage <= 9) return;
    currentPage = currentPage - 9;
    prevPage = prevPage - 9;
    let clickResult = downloadRender(prevPage, currentPage); //點擊是異步事件 所以需要再執行一次
    let number = currentPage / 9;
    const target = $(".page-number-container").find(`[data-number=${number}]`);
    appendContent(target, clickResult);
  });

  //下一頁
  $(".right-arrow").on("click", function (e) {
    console.log(currentPage);
    if (currentPage >= downloadItems.length) return;
    currentPage = currentPage + 9;
    prevPage = currentPage - 9;
    console.log(prevPage);
    let clickResult = downloadRender(prevPage, currentPage); //點擊是異步事件 所以需要再執行一次
    let number = currentPage / 9;
    const target = $(".page-number-container").find(`[data-number=${number}]`);
    appendContent(target, clickResult);
  });
  let page = "";
  for (let i = 1; i <= pageNumber; i++) {
    page += `<div class="page-number"  data-number="${i}">${i}</div>`;
  }
  $(".cut-2-item-download-main").empty().append(sliceResult);
  $(".page-number-container").append(page);
  $(".page-number[data-number='1']").addClass("page-number-active");
});
