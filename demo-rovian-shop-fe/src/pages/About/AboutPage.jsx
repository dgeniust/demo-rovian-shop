import React from "react";
import StatsSection from "./StatsSection";

const AboutPage = () => {
  return (
    <div className="bg-[#fffafb] text-stone-900 min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 font-['Google_Sans_Flex']">
      {/* SECTION 1: HERO ABOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left: Text Content */}
        <div className="lg:col-span-4 space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.8] uppercase italic font-serif text-stone-900">
            CÂU <br /> <span className="text-rose-300 not-italic">CHUYỆN</span>
          </h1>
          <div className="space-y-6 pt-10 flex justify-center flex-col items-center lg:items-start">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-rose-400">
              Bậc Thầy Nghệ Thuật Chế Tác
            </p>
            <p className="text-[17px] leading-relaxed text-stone-500 max-w-xs font-light italic text-center lg:text-left">
              Một di sản được xây dựng dựa trên sự chính xác tuyệt đối, nơi mỗi
              giây trôi qua là một minh chứng cho trí tuệ và vẻ đẹp hoàn mỹ của
              con người.
            </p>
          </div>
        </div>

        {/* Center: Large Image */}
        <div className="lg:col-span-5 relative group">
          <img
            src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-service-centre.jpg"
            alt="Xưởng chế tác đồng hồ"
            className="w-full h-[550px] object-cover rounded-[60px] grayscale-[20%] sepia-[10%] shadow-xl shadow-rose-100/50"
          />
          <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-rose-100 text-[9px] uppercase tracking-widest font-bold text-rose-500">
            Thiết lập từ 1994
          </div>
        </div>

        {/* Right: Philosophy Section */}
        <div className="lg:col-span-3 space-y-8 pt-0 lg:pt-24">
          <div className="overflow-hidden rounded-[40px] h-48 border border-rose-100 shadow-sm">
            <img
              src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-watchmakers.jpg"
              alt="Nghệ thuật thủ công"
              className="w-full h-full object-cover grayscale-[30%] brightness-110"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-stone-800 tracking-tight">
              Triết lý của chúng tôi
            </h3>
            <p className="text-[17px] leading-relaxed text-stone-500 font-light">
              "Tại ROVIAN, chúng tôi không chỉ lắp ráp các linh kiện; chúng tôi
              thổi hồn vào kim loại và sapphire, tạo nên một người bạn đồng hành
              thầm lặng cho những khoảnh khắc ý nghĩa nhất đời người."
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: DETAILED BRAND INTRODUCTION */}
      <div className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="space-y-10">
            <div className="inline-block px-6 py-2 bg-rose-50 text-rose-500 text-[11px] uppercase tracking-[0.3em] font-bold rounded-full border border-rose-100">
              Di Sản & Sự Đột Phá
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-tight font-serif italic">
              Cuộc hành trình <br />{" "}
              <span className="not-italic text-stone-900 font-bold">
                chinh phục sự hoàn hảo
              </span>
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-[17px] font-light">
              <p>
                Lịch sử của{" "}
                <strong className="text-rose-400 font-medium">ROVIAN</strong>{" "}
                gắn liền với khát vọng đạt đến đỉnh cao của nghệ thuật đồng hồ.
                Chúng tôi ra đời với tầm nhìn kết hợp tinh hoa chế tác truyền
                thống Thụy Sĩ cùng ngôn ngữ thiết kế đương đại.
              </p>
              <p>
                Mỗi cỗ máy thời gian rời khỏi xưởng chế tác đều phải trải qua
                những quy trình kiểm định nghiêm ngặt, vượt xa các tiêu chuẩn
                công nghiệp để đảm bảo rằng nó không chỉ chạy chính xác, mà còn
                kể một câu chuyện về chất lượng vô song.
              </p>
              <p>
                Ngày nay, ROVIAN đứng vững như một biểu tượng của sự thành đạt
                và gu thẩm mỹ tinh tế. Chúng tôi không ngừng phá vỡ các giới hạn
                về vật liệu, từ Titanium cấp độ 5 đến các hợp kim vàng độc
                quyền, đảm bảo rằng di sản này sẽ tồn tại vĩnh cửu với thời
                gian.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="h-[400px] rounded-[40px] overflow-hidden mt-12 border border-rose-100">
              <img
                src="https://tamsonvn.com/wp-content/uploads/2025/09/chaumet_11.jpg"
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Chi tiết đồng hồ"
              />
            </div>
            <div className="h-[400px] rounded-[40px] overflow-hidden border border-rose-100">
              <img
                src="https://tamsonvn.com/wp-content/uploads/2023/12/vendome_972x1358_3-identite-972x1358-1.jpg"
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Bộ máy đồng hồ"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="border-t border-rose-100 pt-8">
        <StatsSection />
      </div>
    </div>
  );
};

export default AboutPage;
