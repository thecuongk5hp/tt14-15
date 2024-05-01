"use strict";
/*
    Định nghĩa lớp Product có các thuộc tính id, name, price.
    Định nghĩa lớp CartProduct kế thừa lớp Product và có thêm thuộc tính quantity và các phương thức calculatePrice, increaseQuantity và decreaseQuantity.
    Phương thức calculatePrice có tác dụng tính và trả tổng tiền của sản phẩm, 2 phương thức còn lại có tác dụng tăng và giảm số lượng sản phẩm trong giỏ hàng.
    Định nghĩa lớp ShopProduct kế thừa lớp Product và có thêm thuộc tính stock. Tạo ra các thực thể từ mảng này và một mảng để chứa các thực thể đó.
    Định nghĩa lớp Cart có thuộc tính items là mảng các thực thể tạo ra từ lớp CartProduct. Lớp cart có các phương thức addItem để thêm sản phẩm vào giỏ hàng,
    phương thức removeItem để xóa sản phẩm khỏi giỏ hàng và phương thức getTotal để tính tổng giá trị giỏ hàng.
    Phương thức addItem sẽ tìm trong mảng sản phẩm được bán, tạo ra một thực thể từ lớp CartProduct với các thông tin của sản phẩm tìm được và số lượng cần mua.
    Nếu số lượng cần mua vượt quá thuộc tính stock của sản phẩm thì không mua được.
*/ 
