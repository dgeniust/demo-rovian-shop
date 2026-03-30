import logo from "../../assets/blackHorizontal_final.png";
import fb from "../../assets/fb.png";
const ContactPage = () => {
  const contactLinks = {
    zalo: "https://zalo.me/0708110906", // Thay số điện thoại zalo của bạn
    messenger:
      "https://www.facebook.com/profile.php?id=61578455405363&locale=vi_VN", // Thay ID page facebook
  };

  return (
    <div className="min-h-screen bg-[#fffafb] text-black antialiased font-['Google_Sans_Flex']">
      {/* Main Content */}
      <section className="pt-24 pb-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image & Details */}
          <div className="space-y-12">
            <div className="aspect-[4/3] bg-white border border-neutral-100 p-2 shadow-inner">
              <img
                src="https://i.pinimg.com/736x/bc/b8/43/bcb8433ec35ddfc79a6ffe2b2b312ba1.jpg"
                alt="Đồng hồ ROVIAN"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 border border-neutral-100 shadow-sm">
            {/* <div className="flex justify-center mb-2">
              <img src={logo} alt="ROVIAN Logo" className="w-[50%] h-[50%] " />
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* Messenger Button */}
              <a
                href={contactLinks.messenger}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-3 bg-white border border-neutral-100 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-100"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-blue-50 rounded-xl p-2 group-hover:bg-white transition-colors">
                  <img
                    src={fb}
                    alt="Messenger"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">
                    Facebook
                  </span>
                  <span className="text-sm font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                    Messenger
                  </span>
                </div>
              </a>

              {/* Zalo Button */}
              <a
                href={contactLinks.zalo}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-3 bg-white border border-neutral-100 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-50 hover:border-sky-100"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-sky-50 rounded-xl p-2 group-hover:bg-white transition-colors">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/960px-Icon_of_Zalo.svg.png"
                    alt="Zalo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">
                    Kênh chính thức
                  </span>
                  <span className="text-sm font-black text-slate-800 tracking-tight group-hover:text-sky-600 transition-colors">
                    Zalo Chat
                  </span>
                </div>
              </a>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2 block">
                Kết nối với chúng tôi
              </span>
              <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-4">
                Sự tận tụy của ROVIAN với nghệ thuật thời gian,
                <br /> Luôn sẵn sàng đồng hành cùng bạn.
              </h2>
              <p className="text-sm text-neutral-600 mb-8">
                Mọi thắc mắc về sản phẩm, dịch vụ tư vấn chuyên gia và hệ thống
                cửa hàng. Hoặc gửi thư trực tiếp cho chúng tôi qua:{" "}
                <a
                  href="mailto:hello@rovianwatch.com"
                  className="font-medium text-black underline underline-offset-2"
                >
                  rovianwatch@gmail.com
                </a>
              </p>

              <div className="grid sm:grid-cols-3 gap-8 text-sm">
                {[
                  {
                    title: "Chăm sóc khách hàng",
                    desc: "Hỗ trợ bảo dưỡng, sửa chữa và các câu hỏi kỹ thuật chuyên sâu.",
                    contact: "rovianwatch@gmail.com",
                  },
                  {
                    title: "Trải nghiệm trực tiếp",
                    desc: "Ghé thăm cửa hàng flagship của ROVIAN tại trung tâm London.",
                    contact: "",
                  },
                  {
                    title: "Tư vấn chuyên gia",
                    desc: "Dành cho những yêu cầu tư vấn cá nhân hóa và lựa chọn mẫu độc bản.",
                    contact: "0708110906",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="space-y-2 border-l border-black pl-4 py-1"
                  >
                    <h4 className="font-semibold text-base">{item.title}</h4>
                    <p className="text-neutral-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="font-medium text-black mt-1 text-xs">
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
