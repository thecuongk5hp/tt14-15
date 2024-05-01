"use strict";
/*
    Định nghĩa lớp User có các thuộc tính id, posts là mảng các bài đăng của người dùng, folowers là mảng các người dùng đang theo dõi.
    Định nghĩa lớp Post có các thuộc tính id, likes là mảng các người dùng đã thích bài đăng, comments là mảng các bình luận trong bài đăng, userId là id người đăng, content là nội dung bài đăng.
    Định nghĩa lớp comment có các thuộc tính id, userId, content và replies là mảng các phản hồi của
    Lớp User có phương thức createPost để đăng bài, phương thức comment để thêm bình luận vào bài viết hoặc phản hồi một bình luận khác,
    phương thức follow để theo dõi user khác, phương thức likePost để thích bài đăng và phương thức viewFeed để xem các bài đăng của người dùng đang được theo dõi.
    Lớp Post có phương thức addLike, mỗi khi người dùng likePost thì đẩy thông tin đó vào mảng likes. Lớp có phương thức addComment, mỗi khi người dùng comment thì đẩy comment đó vào mảng comments.
*/ 
