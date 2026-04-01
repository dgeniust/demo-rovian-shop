import logo from "../../assets/blackHorizontal_final.png"; // Có thể bạn sẽ cần đổi logo sang màu trắng hoặc xám trong component này nếu dùng logo hiển thị
import fb from "../../assets/fb.png";

const ContactPage = () => {
  const contactLinks = {
    zalo: "https://zalo.me/0708110906", // Thay số điện thoại zalo của bạn
    messenger:
      "https://www.facebook.com/profile.php?id=61578455405363&locale=vi_VN", // Thay ID page facebook
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased font-['Google_Sans_Flex']">
      {/* Main Content */}
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image & Details */}
          <div className="space-y-12">
            {/* Box chứa ảnh - Vuông vức, viền xám kim loại */}
            <div className="aspect-[4/3] bg-zinc-900 border border-zinc-800 p-2 shadow-2xl relative group overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/bc/b8/43/bcb8433ec35ddfc79a6ffe2b2b312ba1.jpg"
                alt="Đồng hồ ROVIAN"
                className="w-full h-full object-cover grayscale-[0.5] contrast-125 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-zinc-900/40 p-8 md:p-10 border border-zinc-800 shadow-xl backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* Messenger Button */}
              <a
                href={contactLinks.messenger}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-3 bg-[#0a0a0a] border border-zinc-800 rounded-none transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-zinc-900 rounded-none p-2 group-hover:bg-[#0a0a0a] transition-colors border border-zinc-800 group-hover:border-blue-900/50">
                  <img
                    src={fb}
                    alt="Messenger"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">
                    Facebook
                  </span>
                  <span className="text-sm font-bold text-zinc-300 tracking-tight group-hover:text-blue-400 transition-colors">
                    Messenger
                  </span>
                </div>
              </a>

              {/* Zalo Button */}
              <a
                href={contactLinks.zalo}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-3 bg-[#0a0a0a] border border-zinc-800 rounded-none transition-all duration-300 hover:border-sky-500/50 hover:bg-zinc-900"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-zinc-900 rounded-none p-2 group-hover:bg-[#0a0a0a] transition-colors border border-zinc-800 group-hover:border-sky-900/50">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/960px-Icon_of_Zalo.svg.png"
                    alt="Zalo"
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">
                    Kênh chính thức
                  </span>
                  <span className="text-sm font-bold text-zinc-300 tracking-tight group-hover:text-sky-400 transition-colors">
                    Zalo Chat
                  </span>
                </div>
              </a>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-4 block font-bold border-l-2 border-zinc-700 pl-3">
                Đặc Quyền Liên Hệ
              </span>
              <h2 className="text-3xl md:text-4xl font-light  font-['Google_Sans_Flex'] tracking-tight leading-tight mb-4 text-white italic">
                Khẳng định đẳng cấp qua <br />
                <span className="font-bold not-italic">
                  từng nhịp chuyển động.
                </span>
              </h2>
              <p className="text-sm text-zinc-400 mb-10 leading-relaxed font-light">
                Mọi yêu cầu tư vấn chuyên sâu về các tuyệt tác cơ khí, dịch vụ
                bảo dưỡng hoặc đặt hẹn riêng tư tại phòng khánh tiết. Vui lòng
                gửi thư trực tiếp cho chuyên gia của chúng tôi qua:{" "}
                <a
                  href="mailto:rovianwatch@gmail.com"
                  className="font-medium text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-colors"
                >
                  rovianwatch@gmail.com
                </a>
              </p>

              <div className="grid sm:grid-cols-3 gap-8 text-sm">
                {[
                  {
                    title: "Bảo Dưỡng Chuyên Sâu",
                    desc: "Hỗ trợ thẩm định, sửa chữa và các yêu cầu kỹ thuật cơ khí.",
                    contact: "rovianwatch@gmail.com",
                  },
                  {
                    title: "Phòng Khánh Tiết",
                    desc: "Trải nghiệm riêng tư và chiêm ngưỡng các tuyệt tác độc bản tại Flagship.",
                    contact: "Đặt lịch hẹn",
                  },
                  {
                    title: "Tư Vấn Cá Nhân Hóa",
                    desc: "Đặc quyền tư vấn 1:1 cùng chuyên gia cấp cao của ROVIAN.",
                    contact: "0708 110 906",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2 border-t sm:border-t-0 sm:border-l border-zinc-800 pt-4 sm:pt-0 sm:pl-5"
                  >
                    <h4 className="font-bold text-[13px] text-zinc-200 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
                    <p className="font-medium text-white mt-2 text-[11px] tracking-wider uppercase">
                      {item.contact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
