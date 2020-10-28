function recent_news_wrapper() {
    return "<section class=\"section main\">\n" +
        "    <div class=\"container\">\n" +
        "        <article class=\"content\">\n" +
        "            <div class=\"content-body\">\n" +
        "\n" +
        "                <div class=\"Khung\">\n" +
        "                    <button class=\"btn\"><span class=\"Khung_1\"><b>Cafe</b></span></button>\n" +
        "                </div>\n" +
        "\n" +
        "                <div class=\"HieuUng\">\n" +
        "                    <div class=\"zoomin noidung\"><img src=\"img/1.jpg\" height=\"550\" width=\"660\" class=\"anh_1\"/></div>\n" +
        "                    <h1><b><a href=\"#\" class=\"content1\">Trung Thu đi đâu để không đông đúc, có ảnh đẹp mà vẫn được thưởng thức đồ uống ngon?</a></b></h1>\n" +
        "                    <p>By  <a href=\"#\" class=\"content_1\">Kiều Oanh</a> . 23/09/2020<a href=\"#\" class=\"content_1\"> 31 Lượt xem</a></p>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </article>\n" +
        "\n" +
        "        <aside class=\"aside\">\n" +
        "            <div class=\"HieuUng\">\n" +
        "                <div class=\"khung3\">\n" +
        "                    <div class=\"KHUNG_1\">\n" +
        "                        <button class=\"btn\"><span class=\"KHUNG_1-1\"><b>Khám phá</b></span></button>\n" +
        "                    </div>\n" +
        "                    <div class=\"block subcribe\">\n" +
        "                        <div class=\"zoomin noidung\"><img src=\"img/2.jpg\" height=\"150\" width=\"150\" class=\"anh_1\"/></div>\n" +
        "                        <div class=\"block_1\">\n" +
        "                            <h4><b><a href=\"#\" class=\"block_1-1\">Check in ngay đồng cỏ lau đẹp hút hồn trong trung tâm thành phố Hà Nội</a></b></>\n" +
        "                            <p><br/>By <a href=\"#\" class=\"content_1\">Kiều Oanh</a></p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"HieuUng\">\n" +
        "                <div class=\"khung3\">\n" +
        "                    <div class=\"KHUNG_1\">\n" +
        "                        <button class=\"btn\"><span class=\"KHUNG_1-1\"><b>Đồ uống</b></span></button>\n" +
        "                    </div>\n" +
        "                    <div class=\"block subcribe\">\n" +
        "                        <div class=\"zoomin noidung\"><img class=\"anh_1\" src=\"img/3.jpg\" height=\"150\" width=\"150\"/></div>\n" +
        "                        <div class=\"block_1\">\n" +
        "                            <h4><b><a href=\"#\" class=\"block_1-2\">Cách làm sinh tố bơ chuối béo ngậy, mát lành cho ngày hè\n" +
        "                                nóng bức</a></b></>\n" +
        "                            <p><br/>By <a href=\"#\" class=\"content_1\">Food Wiki</a></p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"HieuUng\">\n" +
        "                <div class=\"khung3\">\n" +
        "                    <div class=\"KHUNG_1\">\n" +
        "                        <button class=\"btn\"><span class=\"KHUNG_1-1\"><b>Ăn vặt</b></span></button>\n" +
        "                    </div>\n" +
        "                    <div class=\"block subcribe\">\n" +
        "                        <div class=\"zoomin noidung\"><img class=\"anh_1\" src=\"img/4.jpg\" height=\"150\" width=\"150\"/></div>\n" +
        "                        <div class=\"block_1\">\n" +
        "                            <h4><b><a href=\"#\" class=\"block_1-3\">Bật mí cách làm món xoài lắc kết hợp muối tôm chua, cay\n" +
        "                                ngon đúng điệu</a></b></>\n" +
        "                            <p><br/>By <a href=\"#\" class=\"content_1\">Food Wiki</a></p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"HieuUng\">\n" +
        "                <div class=\"khung3\">\n" +
        "                    <div class=\"KHUNG_1\">\n" +
        "                        <button class=\"btn\"><span class=\"KHUNG_1-1\"><b>Dinh Dưỡng</b></span></button>\n" +
        "                    </div>\n" +
        "                    <div class=\"block subcribe\">\n" +
        "                        <div class=\"zoomin noidung\"><img class=\"anh_1\" src=\"img/5.jpg\" height=\"150\" width=\"150\"/></div>\n" +
        "                        <div class=\"block_1\">\n" +
        "                            <h4><b><a href=\"#\" class=\"block_1-4\">Top 5 loại thực phẩm tốt cho gan mà bạn nên sử dụng\n" +
        "                                thường xuyên</a></b></>\n" +
        "                            <p><br/>By <a href=\"#\" class=\"content_1\">Food Simple</a></p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "        </aside>\n" +
        "    </div>\n" +
        "</section>"
}
var hd = document.getElementById("recent_news_wrapper");
hd.innerHTML = recent_news_wrapper();