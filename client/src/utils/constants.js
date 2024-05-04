import icons from "./icons"


export const path = {
    HOME: '/*',
    HOME__PAGE: ':page',
    LOGIN: 'dang-ky',
    SIGN_UP: 'signup',
    CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
    NHA_CO_THUE: 'nha-cho-thue',
    CHO_THUE_CAN_HO: 'cho-thue-can-ho',
    CHO_THUE_MAT_BANG: 'cho-thue-mat-bang',
    DETAIL_POST__TITLE__POSTID: 'chi-tiet/:title/:postId',
    DETAIL_POST: 'chi-tiet',
    SEARCH: 'tim-kiem'
}


export const nav = [
    {
        name: 'Trang chủ',
        path: '/'
    },
    {
        name: 'Cho thuê phòng trọ',
        path: 'cho-thue-phong-tro'
    },
    {
        name: 'Nhà cho thuê',
        path: 'nha-cho-thue'
    },
    {
        name: 'Cho thuê căn hộ',
        path: 'cho-thue-can-ho'
    },
    {
        name: 'Cho thuê mặt bằng',
        path: 'cho-thue-mat-bang'
    },
]

export const text = {
    HOME_TITLE: 'Tìm kiếm chỗ thuê ưng ý',
    HOME_DESCRIPTION: "Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng."
}

export const location = [
    {
        id: 'hcm',
        name: "Phòng trọ Hồ Chí Minh",
        image: 'https://phongtro123.com/images/location_hcm.jpg'
    },
    {
        id: 'hn',
        name: "Phòng trọ Hà Nội",
        image: 'https://phongtro123.com/images/location_hn.jpg'
    },
    {
        id: 'dn',
        name: "Phòng trọ Đà Nẵng",
        image: 'https://phongtro123.com/images/location_dn.jpg'
    }
]

export const leadHeading = 'Danh sách bài đăng'

const {ImPencil2, LuClipboardList, FaClipboardUser} = icons
export const menuManage = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: '/quan-tri/tao-bai-dang-moi',
        icon: <ImPencil2 />
    },
    {
        id: 2,
        text: 'Quản lý tin đăng',
        path: '/quan-tri/quan-ly-bai-dang',
        icon: <LuClipboardList />
    },
    {
        id: 3,
        text: 'Thông tin tài khoản',
        path: '/quan-tri/thong-tin-tai-khoan',
        icon: <FaClipboardUser />
    }
]
