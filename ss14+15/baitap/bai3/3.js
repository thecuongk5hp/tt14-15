"use strict";
/*
    Định nghĩa lớp MenuItem có các thuộc tính id, name và price;
    lớp Table có các thuộc tính id, capacity và available;
    lớp Reservation có các thuộc tính id, customerName, tableId;
    Định nghĩa lớp Order có các thuộc tính id, tableId và items, thuộc tính items là mảng các menuItem. Lớp có phương thức getTotal để tính tổng tiền.
    Định nghĩa lớp Restaurant có thuộc tính menu là mảng các menuItem, thuộc tính tables là mảng các table, thuộc tính reservations là mảng các reservation
    và orders là mảng các order. Lớp có các phương thức addMenuItem, addTable, makeReservation, placeOrder và generateBill.
    Phương thức addMenuItem dùng để thêm item vào menu, phương thức addTable dùng để thêm bàn vào cửa hàng.
    Phương thức makeReservation dùng để đặt bàn trước, sau khi đặt bàn thì thuộc tính available của bàn được đặt sẽ đổi thành false và lưu thông tin vào mảng reservation.
    Nếu bàn đã được đặt trước thì in thông báo.
    Phương thức placeOrder dùng để đặt món trong nhà hàng, sau khi đặt món thì lưu order vào mảng orders của nhà hàng.
    Phương thức generateBill sẽ tìm đến order của bàn và in ra tổng tiền cần phải trả cho bàn đó. Sau khi thanh toán xong thì đặt lại trạng thái cho bàn đã thanh toán là available.
*/ 
