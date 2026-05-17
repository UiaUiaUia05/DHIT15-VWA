// 1. Kho dữ liệu sản phẩm (Đã sửa tên thành 'images' cho đồng bộ)
const products = {
    "1": {
        name: "Cuộn len mohair Nako Angora Luks",
        price: "88.000đ",
        images: {
            "vang": "images/len-vang.png",
            "cam": "images/len-cam.jpg"
        },
        desc: "Dòng len mohair cao cấp, sợi mềm mịn, nhẹ và giữ ấm tốt. Thành phần: 80% Mohair, 20% Acrylic."
    },
    "2": {
        name: "Cuộn len Lana Gatto Silk Mohair Lux Yarn",
        price: "183.000đ",
        images: {
            "xanh": "images/blue.jpg",
            "tim": "images/dark-lavender.jpg"
        },
        desc: "Sự kết hợp hoàn hảo giữa lụa tơ tằm và mohair, mang lại vẻ sang trọng và mềm mại tuyệt đối."
    },
    "3": {
        name: "Cuộn len sợi lông cừu Yarn Wool Lang Merino",
        price: "119.000đ",
        images: {
            "xam": "images/light-gray.jpg"
        },
        desc: "Lông cừu Merino nguyên chất, cực kỳ thân thiện với làn da nhạy cảm, không gây ngứa."
    },
    "4": {
        name: "Cuộn len DROPS Merino Extra Fine",
        price: "186.000đ",
        images: {
            "navy": "images/navy-blue.jpg",
            "pink": "images/pink.png"
        },
        desc: "Sợi len Merino mềm mại, có độ đàn hồi cao, lý tưởng cho các sản phẩm đan móc cần sự thoải mái và bền bỉ."
    },
    "5": {
        name: "Cuộn len King Cole Merino Blend",
        price: "140.000đ",
        images: {
            "orange": "images/dk-orange.png",
            "purple": "images/purple-orchid.png"
        },
        desc: "Sự pha trộn hoàn hảo mang lại cảm giác ấm áp, ít xù lông, thích hợp cho cả đan tay và máy."
    },
    "6": {
        name: "Cuộn len King Cole Cottonsoft",
        price: "170.000đ",
        images: {
            "grayblue": "images/gray-blue.png",
            "hotpink": "images/hot-pink.png"
        },
        desc: "Thành phần 100% cotton mềm mại, thấm hút mồ hôi tốt, an toàn tuyệt đối cho làn da em bé."
    },  
    "7": {
        name: "Cuộn len Wool Couture Cheeky Chunky",
        price: "349.000đ",
        images: {
            "aquamarine": "images/chunky-aquamarine.png",
            "lavender": "images/chunky-lavender.png",
            "cream": "images/chunky-natural-cream.png",
            "pink": "images/chunky-pink.png"
        },
        desc: "Dòng len Chunky sợi siêu to, cực kỳ mềm mại, lý tưởng cho các dự án đan móc nhanh như chăn, mũ và áo khoác oversized."
    },
    "8": {
        name: "Cuộn len Rico Design Chunky Yarn",
        price: "275.000đ",
        images: {
            "dustypink": "images/rico-dusty-pink.jpg",
            "lilac": "images/rico-lilac.jpg",
            "teal": "images/rico-teal.png"
        },
        desc: "Sợi len pha trộn chất lượng cao, mang lại cảm giác ấm áp và hiện đại với bảng màu pastel tinh tế."
    },
    "9": {
        name: "Kim đan thẳng 35cm ADDI SINGLE POINTED NEEDLE ART 200-7",
        price: "286.000đ",
        images: { "default": "images/kim-dan-thang-35cm-addi.png" },
        desc: "Kim đan cao cấp từ Đức, bề mặt trơn nhẵn giúp len lướt nhẹ nhàng.",
        
        sizes: ["2.00mm", "2.50mm", "3.00mm", "3.25mm", "3.50mm", "4.00mm"]
    },
    "10": {
        name: "Kim Đan Tre 2 Đầu ADDI Double Pointed Neddle Bamboo",
        price: "235.000đ",
        desc: "Dòng kim đan thẳng cổ điển với bề mặt mạ kim loại cao cấp, giúp sợi len lướt cực nhanh.",
        specs: ["Chiều dài: 35cm", "Xuất xứ: Đức"],
        images: { "default": "images/kim-dan-thang-35cm-addi.jpg" },
        sizes: ["5.50mm", "6.00mm"]
    },
    "11" :{
        name: "Kim móc Clover Amure Steel Crochet Hook",
        price: "202.000đ",
        desc: "Dòng kim chuyên dụng cho chỉ/len sợi nhỏ, đầu kim bằng thép không gỉ và tay cầm nhựa mềm công thái học",
        images: {"default": "images/kim-moc-clover-amure.png"},
        size: ["0.60mm","0.75mm","0.90mm","1.00mm","1.25mm","1.5mm","1.75mm"]
    },
    "12" :{
        name: "Bộ Kim móc Clover Amure Steel Crochet Hook Set",
        price: "894.000đ",
        desc: "Bộ 5 món của dòng kim móc Clover Amure Steel Crochet Hook",
        images: {"default": "images/bo-kim-moc-clover-amure.png"}
    },
    "13" :{
        name: "Kéo Cắt Chỉ Mini",
        price: "21.000đ",
        desc: "Vật bất ly thân của tín đồ đan móc,may vá,thêu thùa....",
        images: {"default": "images/keo-cat-chi-mini.jpg"}
    },
    "14" :{
            name: "Kéo cắt chỉ DMC Presentoir+15 ciseaux Eiffel U1038",
            price: "318.000đ",
            desc: "là dụng cụ thêu thùa cao cấp, nổi bật với thiết kế mô phỏng Tháp Eiffel, sản xuất tại Italia",
            images: {"default": "images/keo-cat-chi-dmc.png"}
        },
    "15" :{
            name: "Hộp mắt thú bông nhiều màu",
            price: "153.000đ",
            desc: "15 ô với 264 chiếc mắt thú cao cấp",
            images: {"default": "images/hop-mat-thu-bong.jpg"}
        },
    "16" :{
            name: "Set chỉ cotton làm vòng tay DMC Flags Mouliné Thread Assortment",
            price: "368.000đ",
            desc: "Set chỉ cotton làm vòng tay DMC Flags Mouliné Thread Assortment 117FPE24DRAP gồm 12 tép chỉ cotton DMC EMBROIDERY FLOSS 12 SKEINS 8M",
            images: {"default": "images/set-chi-lam-vong-tay.jpg"}
        },
    "17" :{
            name: "Hộp Nhựa 13cm * 6.5cm",
            price: "26.000đ",
            desc: "Hộp nhựa tiện ích mini,giúp bạn đựng các dụng cụ và các phụ kiện nhỏ như cúc áo,kim khâu,hạt trang trí...",
            images: {"default": "images/hop-nhua.jpg"}
        },
    "18" :{
            name: "Bó hoa len trang trí",
            price: "150.000đ",
            desc: " sản phẩm 100% được tạo ra từ bàn tay của các nghệ nhân móc hoa lành nghề",
            images: {"default": "images/hoa-len-trang-tri.jpg"}
        },
    "19" :{
            name: "Khung thêu kẹp xoay 360 độ Clover Turn Hoop 18cm Art",
            price: "717.000đ",
            desc: " là dụng cụ cao cấp của Nhật, thiết kế kẹp bàn giúp thêu bằng hai tay thuận tiện",
            images: {"default": "images/khung-theu.jpg"}
        },
    "20" :{
            name: "Hộp Gỗ Sồi Đựng Chỉ Thêu Của DMC - Vintage - Style Wooden Chest of DMC art",
            price: "19.197.000đ",
            desc: " là một sản phẩm chất lượng cao, được thiết kế đặc biệt để lưu trữ chỉ thêu và phụ kiện liên quan. Hộp được làm từ chất liệu gỗ sồi tự nhiên, tạo nên vẻ đẹp cổ điển và sang trọng.",
            images: {"default": "images/hop-go-soi-dung-chi.jpg"}
        }     
}; 
let selectedSize = ""; // Biến lưu size đang chọn

// 2. Hàm nạp Header/Footer
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = data;
        });
}

// 3. Hàm thay đổi ảnh tại trang Danh mục
function changeImage(imgId, imgSrc, element, btnId, prodId, colorName) {
    const targetImg = document.getElementById(imgId);
    if (targetImg) targetImg.src = imgSrc;

    const swatches = element.parentElement.getElementsByClassName('swatch');
    for (let s of swatches) { s.classList.remove('active'); }
    element.classList.add('active');

    const detailBtn = document.getElementById(btnId);
    if (detailBtn) {
        detailBtn.setAttribute('onclick', `location.href='detail.html?id=${prodId}&color=${colorName}'`);
    }
}

// 4. Hàm vẽ các nút Size
function renderSizes(product) {
    const sizeContainer = document.getElementById('detail-sizes');
    if (!sizeContainer || !product.sizes) return;

    sizeContainer.innerHTML = ""; 
    product.sizes.forEach((size, index) => {
        const btn = document.createElement('button');
        btn.innerText = size;
        btn.classList.add('size-btn');
        if (index === 0) {
            btn.classList.add('active');
            selectedSize = size;
        }
        btn.onclick = function() {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = size;
        };
        sizeContainer.appendChild(btn);
    });
}

// 5. Hàm tăng giảm số lượng
function updateQty(val) {
    const qtyInput = document.getElementById('quantity');
    if (!qtyInput) return;
    let currentQty = parseInt(qtyInput.value);
    currentQty += val;
    if (currentQty < 1) currentQty = 1;
    qtyInput.value = currentQty;
}

// 6. Hàm thêm vào giỏ hàng (Xử lý cả Màu và Size)
function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const color = urlParams.get('color') || "default";
    const quantity = parseInt(document.getElementById('quantity').value) || 1;

    if (id && products[id]) {
        const product = products[id];
        const cartItem = {
            id: id,
            name: product.name,
            price: product.price,
            color: color,
            size: selectedSize || "N/A",
            quantity: quantity,
            image: product.images[color] || Object.values(product.images)[0]
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === id && item.color === color && item.size === cartItem.size);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Đã thêm vào giỏ hàng thành công!");
    }
}

function buyNow() {
    addToCart();
    window.location.href = 'cart.html';
}

// 7. XỬ LÝ TẬP TRUNG KHI LOAD TRANG
window.addEventListener('load', function() {
    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
    loadComponent('category-placeholder', 'category-bar.html');

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const color = urlParams.get('color') || 'default';

    if (id && products[id]) {
        const item = products[id];
        
        // Đổ ảnh
        const imgElement = document.getElementById('main-detail-img');
        if (imgElement) {
            imgElement.src = item.images[color] || Object.values(item.images)[0];
        }

        // Đổ thông tin
        if (document.getElementById('detail-title')) document.getElementById('detail-title').innerText = item.name;
        if (document.getElementById('detail-price')) document.getElementById('detail-price').innerText = item.price;
        if (document.getElementById('detail-desc')) document.getElementById('detail-desc').innerText = item.desc;
        document.title = item.name + " - Tiệm Len Handmade";

        // Xử lý Size
        const sizeWrapper = document.querySelector('.size-selector');
        if (item.sizes && item.sizes.length > 0) {
            if (sizeWrapper) sizeWrapper.style.display = "block";
            renderSizes(item);
        } else {
            if (sizeWrapper) sizeWrapper.style.display = "none";
        }
    }
});