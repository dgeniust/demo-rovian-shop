import { StrictMode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, NavLink, Navigate, Outlet, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight, Bell, Calendar, Check, ChevronDown, ChevronLeft, ChevronRight, Clock, Edit3, ExternalLink, Eye, EyeOff, Facebook, FileText, House, ImageIcon, Instagram, LayoutDashboard, Loader2, LogOut, MessageSquare, Package, Plus, Save, Search, Send, Settings, Trash2, Twitter, User, UsersRound, X, XCircle } from "lucide-react";
import clarity from "@microsoft/clarity";
import styled from "styled-components";
//#region src/assets/SRWATCH_SL1611.1302TE-removebg-preview.png
var SRWATCH_SL1611_1302TE_removebg_preview_default = "/assets/SRWATCH_SL1611.1302TE-removebg-preview-nZn6yIZr.png";
//#endregion
//#region src/assets/SRWATCH_SL5010.1302BL-removebg-preview.png
var SRWATCH_SL5010_1302BL_removebg_preview_default = "/assets/SRWATCH_SL5010.1302BL-removebg-preview-DwUIzJ6c.png";
//#endregion
//#region src/assets/SRWATCH_SL5011.9102BL-removebg-preview.png
var SRWATCH_SL5011_9102BL_removebg_preview_default = "/assets/SRWATCH_SL5011.9102BL-removebg-preview-CvoSppgX.png";
//#endregion
//#region src/pages/Landing/HeroSection.jsx
var HeroSection = () => {
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [
		{
			subtitle: "Thành lập năm 2026 — ROVIAN",
			titleLine1: "Thay đồng hồ",
			titleLine2: "Đổi phong cách",
			description: `"Vượt xa sự chính xác của cơ học là một linh hồn vĩnh cửu. ROVIAN bước qua ranh giới của nghệ thuật chế tác truyền thống, mang đến sự lịch lãm tuyệt đối cho quý ông hiện đại."`,
			image: SRWATCH_SL1611_1302TE_removebg_preview_default,
			specs: [
				{
					label: "Mã SP",
					value: "SL1611.1302TE"
				},
				{
					label: "Chất liệu",
					value: "Thép không gỉ mạ PVD"
				},
				{
					label: "Mặt kính",
					value: "Sapphire nguyên khối"
				},
				{
					label: "Chống nước",
					value: "5 ATM"
				}
			],
			btn1: {
				text: "Khám Phá Ngay",
				path: "/shop"
			},
			btn2: {
				text: "Câu Chuyện Thương Hiệu",
				path: "/about"
			}
		},
		{
			subtitle: "Kiệt Tác Thời Gian",
			titleLine1: "Thương hiệu đồng hồ",
			titleLine2: "Số 1 Việt Nam",
			description: `"Mỗi chiếc đồng hồ ROVIAN là một bản giao hưởng của hàng trăm chi tiết vi mô, được tinh chỉnh và lắp ráp hoàn toàn thủ công bởi những nghệ nhân bậc thầy."`,
			image: SRWATCH_SL5010_1302BL_removebg_preview_default,
			specs: [
				{
					label: "Mã SP",
					value: "SL5010.1302BL"
				},
				{
					label: "Bộ máy",
					value: "Automatic"
				},
				{
					label: "Mặt kính",
					value: "Sapphire chống xước"
				},
				{
					label: "Chống nước",
					value: "5 ATM"
				}
			],
			btn1: {
				text: "Xem Bộ Sưu Tập",
				path: "/shop"
			},
			btn2: {
				text: "Chế Tác Thủ Công",
				path: "/about"
			}
		},
		{
			subtitle: "Biểu Tượng Quyền Lực",
			titleLine1: "Dấu ấn cá nhân",
			titleLine2: "Đẳng cấp phái mạnh",
			description: `"Không chỉ là cỗ máy đo lường thời gian, chúng tôi mang đến một tuyên ngôn không lời về sự thành đạt và gu thẩm mỹ đỉnh cao của người sở hữu."`,
			image: SRWATCH_SL5011_9102BL_removebg_preview_default,
			specs: [
				{
					label: "Mã SP",
					value: "SL5011.9102BL"
				},
				{
					label: "Dây đeo",
					value: "Da cao cấp"
				},
				{
					label: "Mặt kính",
					value: "Sapphire Crystal"
				},
				{
					label: "Đường kính",
					value: "40mm"
				}
			],
			btn1: {
				text: "Sản Phẩm Mới",
				path: "/shop"
			},
			btn2: {
				text: "Dịch Vụ Đặc Quyền",
				path: "/contact"
			}
		}
	];
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
		}, 5e3);
		return () => clearInterval(timer);
	}, [slides.length]);
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-[#0a0a0a] text-white selection:bg-zinc-700 overflow-hidden",
		children: /* @__PURE__ */ jsxs("main", {
			className: "flex flex-col items-center justify-center pt-24 px-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative w-full max-w-7xl mx-auto z-20 min-h-[800px] md:min-h-[650px] mb-8",
				children: [slides.map((slide, index) => /* @__PURE__ */ jsxs("div", {
					className: `absolute top-0 left-0 w-full flex flex-col md:flex-row items-center transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"}`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "w-full md:w-1/2 text-center md:text-left pr-0 md:pr-12 relative z-20",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-400 mb-12 animate-pulse font-medium",
								children: slide.subtitle
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "flex flex-col mb-12 font-light font-['Playfair_Display'] text-5xl md:text-7xl tracking-[0.2rem]",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-white mb-4",
									children: slide.titleLine1
								}), /* @__PURE__ */ jsx("span", {
									className: "text-zinc-500 mt-[-2px] md:mt-[-3px] ml-0 md:ml-8",
									children: slide.titleLine2
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-12 min-h-[80px]",
								children: slide.description
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-center md:justify-start gap-4 pt-6",
								children: [/* @__PURE__ */ jsx("button", {
									onClick: () => navigate(slide.btn1.path),
									className: "bg-white text-black px-8 py-3 rounded-none font-medium hover:bg-zinc-200 transition-all duration-300 text-xs md:text-sm uppercase tracking-[0.4em] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer",
									children: slide.btn1.text
								}), /* @__PURE__ */ jsx("button", {
									onClick: () => navigate(slide.btn2.path),
									className: "border border-zinc-700 text-zinc-300 px-8 py-3 rounded-none font-medium hover:bg-zinc-900 hover:text-white transition-all duration-300 text-xs md:text-sm uppercase tracking-[0.4em] cursor-pointer",
									children: slide.btn2.text
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end relative",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-zinc-600/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none z-0" }),
							/* @__PURE__ */ jsx("img", {
								src: slide.image,
								alt: slide.titleLine1,
								className: "relative w-full max-w-[300px] md:max-w-[450px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] filter grayscale-[0.2] hover:grayscale-0 transition-all duration-700 z-10"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "absolute -bottom-6 md:bottom-10 left-1/2 md:-left-1 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto bg-black/40 backdrop-blur-md border border-white/10 p-5 shadow-2xl z-20",
								children: /* @__PURE__ */ jsx("ul", {
									className: "space-y-3",
									children: slide.specs.map((spec, i) => /* @__PURE__ */ jsxs("li", {
										className: "flex justify-between items-center gap-8 text-[11px] md:text-xs tracking-widest border-b border-white/5 pb-2 last:border-0 last:pb-0",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-zinc-500 uppercase",
											children: spec.label
										}), /* @__PURE__ */ jsx("span", {
											className: "text-zinc-200 font-medium text-right",
											children: spec.value
										})]
									}, i))
								})
							})
						]
					})]
				}, index)), /* @__PURE__ */ jsx("div", {
					className: "absolute bottom-[-40px] md:bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-30",
					children: slides.map((_, index) => /* @__PURE__ */ jsx("button", {
						onClick: () => setCurrentSlide(index),
						className: `h-1 rounded-full transition-all duration-500 cursor-pointer ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-zinc-700 hover:bg-zinc-500"}`,
						"aria-label": `Go to slide ${index + 1}`
					}, index))
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-20 md:mt-12 mb-12 grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl border-t border-zinc-800 pt-12 gap-12 text-center md:text-left z-20 text-sm md:text-base leading-relaxed font-light",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-zinc-200 mb-4 font-bold",
						children: "Đỉnh Cao Cơ Khí"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-zinc-500",
						children: "Trang bị cỗ máy tự động tinh vi, dự trữ năng lượng bền bỉ. Mọi chi tiết đều được lắp ráp thủ công với độ dung sai tính bằng micron."
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center justify-center",
						children: [/* @__PURE__ */ jsx("div", { className: "h-12 w-[1px] bg-gradient-to-b from-zinc-600 to-transparent hidden md:block" }), /* @__PURE__ */ jsx("p", {
							className: "text-[11px] tracking-[0.4em] text-zinc-400 mt-4 font-light",
							children: "Biểu Tượng Của Sự Thành Đạt"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:text-right",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-zinc-200 mb-4 font-bold",
							children: "Chất Liệu Thượng Hạng"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-zinc-500",
							children: "Khung vỏ thép không gỉ 316L chải xước nam tính, kết hợp cùng mặt kính Sapphire nguyên khối chống lóa mọi góc nhìn."
						})]
					})
				]
			})]
		})
	});
};
//#endregion
//#region src/pages/Landing/LookbookGrid.jsx
var LOOKBOOK_DATA = [
	{
		id: 1,
		src: "/assets/model1_lbgrid-zp0kMvL2.jpeg",
		tag: "01 / Ảnh Biên Tập",
		title: "Áo Len"
	},
	{
		id: 2,
		src: "/assets/prod3_lbgrid-D652dOvp.png",
		tag: "02 / Chất Liệu",
		title: "Áo Khoác"
	},
	{
		id: 3,
		src: "/assets/prod2_lbgrid-Ouan20M0.png",
		tag: "03 / Tuyệt Tác",
		title: "Đồng Hồ"
	},
	{
		id: 4,
		src: "/assets/model2_lbgrid-BUVTA4JQ.jpeg",
		tag: "04 / Phong Cách",
		title: "Thời Thượng"
	},
	{
		id: 5,
		src: "/assets/model3_lbgrid-BLvDU8bM.jpeg",
		tag: "05 / Cảm Hứng",
		title: "Bản Sắc"
	},
	{
		id: 6,
		src: "/assets/prod1_lbgrid-DSku7D_Z.png",
		tag: "06 / Kết Màn",
		title: "Xa Xỉ"
	}
];
var LookbookGrid = () => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"]
	});
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	const ySlow = useTransform(smoothProgress, [0, 1], [0, 80]);
	const yFast = useTransform(smoothProgress, [0, 1], [0, -80]);
	return /* @__PURE__ */ jsx("section", {
		ref: containerRef,
		className: "bg-[#0a0a0a] py-24 px-6 overflow-hidden text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1400px] mx-auto z-10 relative",
			children: [
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: 1 },
					className: "mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-800 pb-6 md:pb-10 gap-4",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white italic leading-tight",
						children: ["Bento ", /* @__PURE__ */ jsx("span", {
							className: "text-zinc-500 not-italic",
							children: "Lookbook"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-start md:items-end gap-1",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase",
							children: "Bộ Sưu Tập Thu Đông 2026"
						}), /* @__PURE__ */ jsx("div", { className: "w-12 h-[1px] bg-zinc-700 md:hidden" })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[1200px]",
					children: [
						/* @__PURE__ */ jsxs(motion.div, {
							style: { y: ySlow },
							className: "md:col-span-2 md:row-span-2 relative overflow-hidden group bg-zinc-900 border border-zinc-800/50",
							children: [/* @__PURE__ */ jsx(motion.img, {
								src: LOOKBOOK_DATA[0].src,
								className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-[2000ms] group-hover:scale-105",
								alt: "Editorial"
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000 flex items-end p-12",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-white text-[10px] tracking-[0.5em] uppercase border-l border-zinc-400 pl-4 font-medium",
									children: LOOKBOOK_DATA[0].tag
								})
							})]
						}),
						/* @__PURE__ */ jsx(motion.div, {
							style: { y: yFast },
							className: "md:col-span-2 md:row-span-1 relative overflow-hidden group bg-zinc-900 border border-zinc-800/50",
							children: /* @__PURE__ */ jsx("img", {
								src: LOOKBOOK_DATA[1].src,
								className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms]",
								alt: "Texture"
							})
						}),
						[LOOKBOOK_DATA[3], LOOKBOOK_DATA[2]].map((img, index) => /* @__PURE__ */ jsxs(motion.div, {
							className: "md:col-span-1 md:row-span-1 relative overflow-hidden group bg-zinc-900 border border-zinc-800/50",
							children: [/* @__PURE__ */ jsx("img", {
								src: img.src,
								className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2000ms] group-hover:scale-110",
								alt: "Detail"
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-white text-[9px] tracking-[0.5em] uppercase font-bold border-b border-zinc-400 pb-1",
									children: "Xem Chi Tiết"
								})
							})]
						}, img.id))
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [/* @__PURE__ */ jsx(motion.div, {
						className: "md:col-span-1 h-[500px] overflow-hidden group relative bg-zinc-900 border border-zinc-800/50",
						children: /* @__PURE__ */ jsx("img", {
							src: LOOKBOOK_DATA[4].src,
							className: "w-full h-full object-cover opacity-80  group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms]",
							alt: "Mood"
						})
					}), /* @__PURE__ */ jsxs(motion.div, {
						className: "md:col-span-2 h-[500px] overflow-hidden group relative bg-zinc-900 border border-zinc-800/50",
						children: [/* @__PURE__ */ jsx("img", {
							src: LOOKBOOK_DATA[5].src,
							className: "w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-all duration-[2500ms]",
							alt: "Luxury"
						}), /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 flex items-center justify-center pointer-events-none",
							children: /* @__PURE__ */ jsx("h2", {
								className: "text-white text-7xl md:text-[10rem] font-serif font-light tracking-[-0.05em] mix-blend-overlay opacity-60 group-hover:opacity-100 transition-all duration-[1500ms]",
								children: "ROVIAN"
							})
						})]
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/pages/Landing/AboutSection.jsx
var AboutSection = () => {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-[#0a0a0a] min-h-screen text-white font-['Google_Sans_Flex'] py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10",
			children: [/* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						x: -50
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: {
						duration: 1,
						ease: "easeOut"
					},
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase mb-8",
						children: "Triết Lý Chế Tác"
					}), /* @__PURE__ */ jsxs("h3", {
						className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white leading-tight",
						children: [
							"Kiến tạo ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "italic font-serif text-zinc-400",
								children: "những tuyệt tác"
							}),
							" ",
							/* @__PURE__ */ jsx("br", {}),
							"vượt thời gian."
						]
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7 lg:pl-20",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: 1,
						delay: .3,
						ease: "easeOut"
					},
					className: "space-y-8",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm md:text-base leading-relaxed font-medium text-zinc-300",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-white font-bold border-b border-zinc-700",
									children: "ROVIAN"
								}),
								" ",
								"là biểu tượng của sự lịch lãm đích thực, nơi giao thoa giữa cơ khí chính xác và nghệ thuật chế tác đương đại. Chúng tôi tin rằng đẳng cấp thực thụ nằm ở sự tĩnh lặng và bản lĩnh vượt trội."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-6 text-sm md:text-base text-zinc-500 leading-relaxed font-medium",
							children: [/* @__PURE__ */ jsxs("p", { children: [
								"Mỗi tuyệt tác trong bộ sưu tập là minh chứng cho sự tỉ mỉ tột cùng, được rèn giũa từ những vật liệu nguyên bản và thượng hạng nhất. Thẩm mỹ của chúng tôi định hình qua những đường cắt nam tính, sắc sảo,",
								/* @__PURE__ */ jsx("span", {
									className: "text-zinc-400 italic ml-1",
									children: "tinh tế trong từng chuyển động"
								}),
								", và một phong thái tự tin – thứ bản lĩnh đứng ngoài mọi vòng xoáy trào lưu."
							] }), /* @__PURE__ */ jsx("p", { children: "Khởi nguồn từ khao khát vươn tới sự hoàn mỹ, ROVIAN không ngừng tái định nghĩa chuẩn mực xa xỉ cho những quý ông hiện đại – những cá nhân tìm kiếm sự khẳng định vị thế một cách tự nhiên và đầy quyền uy." })]
						}),
						/* @__PURE__ */ jsx(motion.a, {
							href: "/about",
							className: "inline-block group pt-4",
							whileHover: { x: 10 },
							children: /* @__PURE__ */ jsx("span", {
								className: "pb-2 border-b border-zinc-800 group-hover:border-white group-hover:text-white transition-colors cursor-pointer text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase ",
								children: "Khám Phá Di Sản —>"
							})
						})
					]
				})
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-32 flex justify-center opacity-[0.02] bottom-0 left-0 w-full pointer-events-none select-none z-0",
			children: /* @__PURE__ */ jsx("span", {
				className: "text-[17vw] font-bold tracking-[0.2em] text-white",
				children: "ROVIAN"
			})
		})]
	});
};
//#endregion
//#region src/pages/Landing/ContactSection.jsx
var ContactSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: .1,
				delayChildren: .2
			}
		}
	};
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 20
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.2,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		}
	};
	const contactDetails = [
		{
			title: "Yêu cầu tư vấn",
			body: /* @__PURE__ */ jsx("a", {
				href: "mailto:rovianwatch@gmail.com",
				className: "text-base sm:text-lg md:text-xl font-light text-zinc-300 hover:text-white transition-colors block break-words tracking-tight",
				children: "rovianwatch@gmail.com"
			})
		},
		{
			title: "Xưởng chế tác Flagship",
			body: /* @__PURE__ */ jsxs("p", {
				className: "text-base sm:text-lg md:text-xl font-light text-zinc-300 hover:text-white transition-colors block break-words tracking-tight",
				children: [
					"24 Rue du Faubourg ",
					/* @__PURE__ */ jsx("br", {}),
					" Saint-Honoré, Paris"
				]
			})
		},
		{
			title: "GIỜ LÀM VIỆC",
			body: /* @__PURE__ */ jsx("p", {
				className: "text-base sm:text-lg md:text-xl font-light text-zinc-300 hover:text-white transition-colors block break-words tracking-tight",
				children: "THỨ 2 — THỨ 6: 09:00 - 18:00"
			})
		},
		{
			title: "Theo dõi chúng tôi",
			body: /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-6 justify-start lg:justify-end",
				children: [
					"Instagram",
					"Pinterest",
					"LinkedIn"
				].map((link) => /* @__PURE__ */ jsx("a", {
					href: "#",
					className: "text-base sm:text-lg md:text-xl font-light text-zinc-300 hover:text-white transition-colors block break-words tracking-tight",
					children: link
				}, link))
			})
		}
	];
	return /* @__PURE__ */ jsx("section", {
		className: "bg-[#0a0a0a] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-visible border-t border-zinc-900 font-['Google_Sans_Flex'] min-h-screen",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1400px] mx-auto",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-100px"
				},
				variants: containerVariants,
				className: "mb-12 md:mb-20 border-b border-zinc-800 pb-10 text-left",
				children: [/* @__PURE__ */ jsx(motion.h2, {
					variants: itemVariants,
					className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white leading-tight",
					children: "Liên hệ"
				}), /* @__PURE__ */ jsxs(motion.p, {
					variants: itemVariants,
					className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase flex items-center gap-4 justify-start",
					children: [/* @__PURE__ */ jsx("span", { className: "w-8 h-[1px] bg-zinc-700" }), "Luôn sẵn sàng đồng hành cùng bạn"]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start",
				children: [/* @__PURE__ */ jsxs(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: { once: true },
					variants: containerVariants,
					className: "space-y-8 md:space-y-12 text-left",
					children: [/* @__PURE__ */ jsxs(motion.h3, {
						variants: itemVariants,
						className: "text-2xl sm:text-3xl md:text-4xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white leading-tight italic",
						children: [
							"Nghệ thuật của ",
							/* @__PURE__ */ jsx("br", {}),
							" Sự tận tâm thầm lặng"
						]
					}), /* @__PURE__ */ jsxs(motion.div, {
						variants: itemVariants,
						className: "space-y-6 text-sm md:text-base leading-relaxed font-medium text-zinc-400",
						children: [
							/* @__PURE__ */ jsxs("p", { children: [
								"Tại",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-white font-medium border-b border-zinc-700 pb-1",
									children: "ROVIAN"
								}),
								", mối quan hệ giữa chúng tôi và bạn không chỉ dừng lại ở một tuyệt tác trên cổ tay, mà khởi nguồn từ sự thấu hiểu và gắn kết bền vững."
							] }),
							/* @__PURE__ */ jsx("p", { children: "Mọi yêu cầu đều được chúng tôi xử lý với sự chuẩn xác tuyệt đối của cơ khí. Đội ngũ chuyên gia luôn sẵn sàng đảm bảo trải nghiệm của bạn hoàn mỹ và trọn vẹn như chính những cỗ máy thời gian chúng tôi chế tác." }),
							/* @__PURE__ */ jsx(motion.div, {
								className: "mt-10 pt-2 border-l-2 border-zinc-600 pl-6 space-y-6 text-sm md:text-base leading-relaxed font-medium text-zinc-500 cursor-pointer",
								whileHover: {
									borderLeftColor: "#ffffff",
									x: 5
								},
								children: "\"Sự xa xỉ đích thực được khẳng định qua sự tĩnh lặng của một dịch vụ đẳng cấp.\""
							})
						]
					})]
				}), /* @__PURE__ */ jsx(motion.div, {
					className: "flex flex-col space-y-12 md:space-y-16 text-left lg:text-right",
					initial: "hidden",
					whileInView: "visible",
					viewport: { once: true },
					variants: containerVariants,
					children: contactDetails.map((item) => /* @__PURE__ */ jsxs(motion.div, {
						variants: itemVariants,
						className: "group",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase mb-3 lg:justify-end",
							children: item.title
						}), item.body]
					}, item.title))
				})]
			})]
		})
	});
};
//#endregion
//#region src/pages/Shop/ProductCard.jsx
function ProductCard({ product }) {
	const navigate = useNavigate();
	const handleRedirect = (id) => {
		navigate(`/detail/${id || product?.id}`);
	};
	const formatCurrency = (amount) => {
		return new Intl.NumberFormat("vi-VN").format(amount || 0) + "đ";
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "group cursor-pointer w-full",
		onClick: () => handleRedirect(product?.id),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[4/5] mb-5 overflow-hidden flex items-center justify-center transition-all duration-700 border border-zinc-800/50 rounded-none bg-zinc-900/30 hover:bg-zinc-900/50",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out z-0 scale-50 group-hover:scale-150" }),
				/* @__PURE__ */ jsx("div", { className: "absolute w-40 h-40 bg-zinc-600/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" }),
				/* @__PURE__ */ jsx("img", {
					src: product?.image_url,
					alt: product?.name,
					className: "w-[75%] h-auto object-contain z-10 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-30",
					children: /* @__PURE__ */ jsx("button", {
						className: "w-full bg-white/95 backdrop-blur-md text-black py-4 font-medium uppercase hover:bg-white transition-colors shadow-[0_-10px_20px_rgba(0,0,0,0.5)] cursor-pointer text-xs md:text-sm uppercase tracking-[0.4em]",
						onClick: (e) => {
							e.stopPropagation();
							handleRedirect();
						},
						children: "Mua Ngay"
					})
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-2 px-1 text-center md:text-left",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 line-clamp-2 text-xs md:text-sm leading-relaxed font-bold",
				children: product?.name
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-center justify-between gap-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[14px] text-zinc-400 font-medium tracking-[0.05em]",
					children: formatCurrency(product?.price)
				}), /* @__PURE__ */ jsx("span", {
					className: "text-[10px] text-zinc-600 uppercase tracking-widest font-semibold border-b border-zinc-700 w-fit mx-auto md:mx-0 group-hover:text-zinc-400 group-hover:border-zinc-500 transition-colors",
					children: "View Details"
				})]
			})]
		})]
	});
}
//#endregion
//#region src/services/apiClient.js
var API_URL = "https://p01--rovian-shop-backend--jsqhyw78kqvt.code.run";
var apiClient = async (endpoint, options = {}) => {
	const token = localStorage.getItem("access_token");
	const headers = { ...options.headers };
	if (token) headers["Authorization"] = `Bearer ${token}`;
	if (options.body && !(options.body instanceof FormData)) {
		headers["Content-Type"] = "application/json";
		options.body = JSON.stringify(options.body);
	}
	const response = await fetch(`${API_URL}${endpoint}`, {
		...options,
		headers
	});
	const data = await response.json();
	if (!response.ok) {
		if (response.status === 401) {}
		throw data || /* @__PURE__ */ new Error("API Error");
	}
	return data;
};
//#endregion
//#region src/services/productService.jsx
var productService = {
	createProduct: async (formData) => {
		return apiClient("/products", {
			method: "POST",
			body: formData
		});
	},
	getAllProducts: async (params) => {
		return apiClient(`/products?${new URLSearchParams(params).toString()}`, { method: "GET" });
	},
	updateProduct: async (id, formData) => {
		return apiClient(`/products/${id}`, {
			method: "PUT",
			body: formData
		});
	},
	deleteProduct: async (id) => {
		return apiClient(`/products/${id}`, { method: "DELETE" });
	},
	detailProduct: async (id) => {
		return apiClient(`/detail/${id}`, { method: "GET" });
	}
};
//#endregion
//#region src/pages/Landing/FeaturedProducts.jsx
var FeaturedProducts = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const handleProduct = async () => {
			try {
				setProducts((await productService.getAllProducts({ limit: 3 })).data);
			} catch (error) {
				console.error("Lỗi khi lấy sản phẩm nổi bật:", error);
			}
		};
		handleProduct();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-[#0a0a0a] overflow-hidden relative text-white",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 relative z-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", { className: "w-12 h-[1px] bg-zinc-600" }), /* @__PURE__ */ jsx("span", {
							className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase",
							children: "Dấu Ấn Thời Gian"
						})]
					}), /* @__PURE__ */ jsxs("h2", {
						className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white italic leading-tight",
						children: [
							"Bộ Sưu Tập",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "not-italic text-zinc-500",
								children: "Tiêu Biểu"
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-start md:items-end",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-zinc-500 max-w-[300px] mb-4 md:text-right text-sm md:text-base leading-relaxed font-light",
						children: "\"Mỗi tích tắc trôi qua là một lời khẳng định cho bản lĩnh và phong thái của người dẫn đầu.\""
					}), /* @__PURE__ */ jsxs("button", {
						className: "group flex items-center gap-2 text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase hover:text-white transition-colors cursor-pointer",
						onClick: () => navigate("/shop"),
						children: ["Xem Tất Cả Tuyệt Tác", /* @__PURE__ */ jsx("span", { className: "w-6 h-[1px] bg-zinc-600 group-hover:bg-white group-hover:w-10 transition-all duration-500" })]
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16",
				children: products.map((product) => /* @__PURE__ */ jsx("div", {
					className: "animate-in fade-in slide-in-from-bottom-8 duration-1000",
					children: /* @__PURE__ */ jsx(ProductCard, { product })
				}, product.id))
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none z-0 -translate-y-1/2 mt-12",
			children: /* @__PURE__ */ jsx("span", {
				className: "text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap text-white",
				children: "ROVIAN ATELIER ROVIAN ATELIER"
			})
		})]
	});
};
//#endregion
//#region src/pages/Landing/FeaturedArticles.jsx
var mockArticles = [
	{
		id: 1,
		title: "Máy Cơ Automatic Là Gì? Nguyên Lý, Cấu Tạo & Lưu Ý Sử Dụng",
		excerpt: "Máy cơ Automatic là gì? Giải thích nguyên lý rotor, cách hoạt động, ưu nhược điểm và lưu ý sử dụng đúng cách cho người mới.",
		date: "14 Thg 04, 2026",
		category: "Chuyên Đề",
		imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop",
		link: "/kien-thuc/may-co-automatic-la-gi"
	},
	{
		id: 2,
		title: "Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025 – Đánh Giá Thực Tế",
		excerpt: "Top 5 đồng hồ nam dress watch dưới 5 triệu 2025: tiêu chí rõ ràng, thông số thực tế, giá tham khảo. Chọn đúng ngay lần đầu.",
		date: "10 Thg 04, 2026",
		category: "Di Sản",
		imageUrl: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2070&auto=format&fit=crop",
		link: "/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025"
	},
	{
		id: 3,
		title: "Cách Chọn Đồng Hồ Nam Phù Hợp – Hướng Dẫn Từ A–Z (2025)",
		excerpt: "Chưa biết cách chọn đồng hồ nam? Hướng dẫn từ A–Z: nhu cầu, ngân sách, phong cách, thương hiệu & nơi mua uy tín tại VN.",
		date: "05 Thg 04, 2026",
		category: "Xu Hướng",
		imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1983&auto=format&fit=crop",
		link: "/kien-thuc/cach-chon-dong-ho-nam"
	},
	{
		id: 4,
		title: "Đồng Hồ SRWatch Nam SG1077.1101TE – Đánh Giá Chi Tiết Từ Chuyên Gia",
		excerpt: "Bạn đang tìm một chiếc đồng hồ nam vừa đẹp, vừa bền, vừa không 'đau ví' — nhưng vẫn toát lên phong thái chỉn chu mỗi khi đi làm hay dự tiệc? Đồng hồ SRWatch nam dòng Timepiece TE, cụ thể là model SG1077.1101TE",
		date: "05 Thg 04, 2026",
		category: "Xu Hướng",
		imageUrl: "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2025/07/dong-ho-nam-srwatch-sg1905-1101te-mau-den-bac-6877603ec5e7b-16072025151806.jpg",
		link: "/kien-thuc/danh-gia-srwatch-nam-SG1077-1101TE"
	},
	{
		id: 5,
		title: "Casio MTP vs SRWATCH Timepiece TE: Nên Mua Loại Nào? (2025)",
		excerpt: "So sánh Casio MTP và SRWATCH Timepiece TE: thông số, chất liệu, giá & kết luận rõ ràng cho người mua lần đầu tại Việt Nam.",
		date: "05 Thg 04, 2026",
		category: "Đánh giá",
		imageUrl: "https://orient-watch.vn/wp-content/uploads/2025/02/so-sanh-dong-ho-co-va-dong-ho-pin-1-min.jpg",
		link: "/kien-thuc/casio-mtp-vs-srwatch-timepiece-te"
	}
];
var FeaturedArticles = () => {
	const navigate = useNavigate();
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		const fetchArticles = () => {
			setArticles(mockArticles);
		};
		fetchArticles();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-[#0a0a0a] overflow-hidden relative text-white",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 relative z-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", { className: "w-12 h-[1px] bg-zinc-600" }), /* @__PURE__ */ jsx("span", {
							className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase",
							children: "Câu Chuyện Thương Hiệu"
						})]
					}), /* @__PURE__ */ jsxs("h2", {
						className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white italic leading-tight",
						children: [
							"Tạp Chí",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "not-italic text-zinc-500",
								children: "Thời Gian"
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-start md:items-end",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-zinc-500 max-w-[320px] mb-4 md:text-right text-sm md:text-base leading-relaxed font-light",
						children: "\"Khám phá những câu chuyện cảm hứng đằng sau từng cỗ máy thời gian và xu hướng nghệ thuật chế tác đỉnh cao.\""
					}), /* @__PURE__ */ jsxs("button", {
						className: "group flex items-center gap-2 text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase hover:text-white transition-colors cursor-pointer",
						onClick: () => navigate("/blog"),
						children: ["Xem Tất Cả Bài Viết", /* @__PURE__ */ jsx("span", { className: "w-6 h-[1px] bg-zinc-600 group-hover:bg-white group-hover:w-10 transition-all duration-500" })]
					})]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12",
				children: articles.map((article) => /* @__PURE__ */ jsxs("article", {
					className: "group flex flex-col cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-1000",
					onClick: () => navigate(article.link),
					children: [/* @__PURE__ */ jsx("div", {
						className: "relative overflow-hidden aspect-[4/3] w-full mb-6",
						children: /* @__PURE__ */ jsx("img", {
							src: article.imageUrl,
							alt: article.title,
							className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
							loading: "lazy"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col flex-grow",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-3",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-xs tracking-widest text-zinc-300 uppercase font-medium",
										children: article.category
									}),
									/* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-zinc-600" }),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs tracking-wider text-zinc-500",
										children: article.date
									})
								]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-['Roboto_Slab'] font-light text-white mb-3 leading-snug group-hover:text-zinc-300 transition-colors",
								children: article.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3",
								children: article.excerpt
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-auto flex items-center gap-2 text-xs tracking-[0.2em] text-white uppercase",
								children: ["Đọc tiếp", /* @__PURE__ */ jsx("span", { className: "w-4 h-[1px] bg-white group-hover:w-8 transition-all duration-300" })]
							})
						]
					})]
				}, article.id))
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none z-0 -translate-y-1/2 mt-24",
			children: /* @__PURE__ */ jsx("span", {
				className: "text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap text-white",
				children: "JOURNAL ROVIAN JOURNAL"
			})
		})]
	});
};
//#endregion
//#region src/pages/Landing/LandingPage.jsx
var LandingPage = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: "Rovian Watch - Thương hiệu đồng hồ số 1 Việt Nam" }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Khám phá bộ sưu tập đồng hồ Rovian cao cấp, tuyệt tác cơ khí với thiết kế sang trọng. Thương hiệu đồng hồ uy tín hàng đầu Việt Nam."
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Rovian Watch - Thương hiệu đồng hồ số 1 Việt Nam"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: "Tuyệt tác thời gian dành cho người sành điệu."
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: "link-anh-thumbnail-cua-ban.jpg"
		})
	] }), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-black text-white font-['Google_Sans_Flex']",
		children: [
			/* @__PURE__ */ jsx(HeroSection, {}),
			/* @__PURE__ */ jsx(LookbookGrid, {}),
			/* @__PURE__ */ jsx(FeaturedProducts, {}),
			/* @__PURE__ */ jsx(AboutSection, {}),
			/* @__PURE__ */ jsx(FeaturedArticles, {}),
			/* @__PURE__ */ jsx(ContactSection, {})
		]
	})] });
};
//#endregion
//#region src/pages/Shop/BrandSection.jsx
var BrandSection = () => {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-[#0a0a0a] text-white py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-900",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-20 text-center lg:text-left",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white italic leading-tight",
				children: ["Khám Phá ", /* @__PURE__ */ jsx("span", {
					className: "not-italic text-zinc-500",
					children: "Thương Hiệu"
				})]
			}), /* @__PURE__ */ jsx("div", { className: "h-[1px] w-20 bg-zinc-700 mt-6 mx-auto lg:mx-0" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7 space-y-16",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative group overflow-hidden bg-zinc-900 rounded-none shadow-2xl border border-zinc-800",
					children: [/* @__PURE__ */ jsxs("video", {
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						crossOrigin: "anonymous",
						className: "w-full h-[650px] object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100",
						children: [
							/* @__PURE__ */ jsx("source", {
								src: "https://objects-prod.cdn.chopard.com/video/upload/q_auto/f_auto/Campaigns/artisans-of-emotions/Mobile/03-Jewellery/03-Artisans-Jewellery--9x16.mp4",
								type: "video/mp4",
								media: "(max-width: 767px)"
							}),
							/* @__PURE__ */ jsx("source", {
								src: "https://objects-prod.cdn.chopard.com/video/upload/q_auto/f_auto/Campaigns/artisans-of-emotions/Desktop/03-Jewellery/03-Artisans-Jewellery--16x9.mp4",
								type: "video/mp4"
							}),
							"Your browser does not support the video tag."
						]
					}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "border-t border-zinc-800",
					children: [
						"Rolex",
						"Jaeger-LeCoultre",
						"Audemars Piguet",
						"Louis Moinet",
						"De Bethune"
					].map((brand, index) => /* @__PURE__ */ jsxs("a", {
						href: "#",
						className: "group flex items-center justify-between py-8 border-b border-zinc-800 hover:bg-white hover:text-black transition-all duration-500 px-6",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-2xl md:text-4xl font-light font-serif tracking-tight uppercase text-zinc-300 group-hover:text-black",
							children: brand
						}), /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500 text-zinc-500 group-hover:text-black" })]
					}, index))
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5 lg:sticky lg:top-10 space-y-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-zinc-900/40 p-8 md:p-14 text-center group rounded-none border border-zinc-800 relative overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-40 h-40 bg-zinc-500/10 blur-[80px] rounded-full" }),
						/* @__PURE__ */ jsx("div", {
							className: "relative mb-10 transform transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_15px_30px_rgba(255,255,255,0.05)]",
							children: /* @__PURE__ */ jsx("img", {
								src: SRWATCH_SL1611_1302TE_removebg_preview_default,
								alt: "SRWATCH SL1611.1302TE",
								className: "w-full object-contain opacity-90 group-hover:opacity-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-3 relative z-10",
							children: [
								/* @__PURE__ */ jsxs("h3", {
									className: "text-zinc-100 text-base md:text-lg leading-relaxed font-bold",
									children: [
										"SRWATCH",
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "text-zinc-400 text-base md:text-lg leading-relaxed font-medium tracking-[0.1em] uppercase",
											children: "SL1611.1302TE"
										})
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light",
									children: "Liên hệ chế tác"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "pt-6",
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[10px] text-zinc-600 font-sans tracking-[0.4em] border-t border-zinc-800 pt-4 px-8 uppercase",
										children: "Ref. 6239"
									})
								})
							]
						})
					]
				})
			})]
		})]
	});
};
//#endregion
//#region src/services/clarityService.jsx
/**
* Clarity Service - Quản lý tracking thông số mua sản phẩm
* Theo dõi: Product views, purchases, cart interactions
*/
var clarityService = {
	initialize: (projectId) => {
		if (projectId) {
			clarity.init(projectId);
			console.log("✓ Clarity initialized with project");
		} else console.warn("⚠ Clarity Project ID not found in environment variables");
	},
	trackProductView: (product) => {
		if (!product) return;
		clarity.event("product_view", {
			product_id: product.id || product.sku || "unknown",
			product_name: product.name || "Unknown Product",
			product_price: String(product.price || 0),
			currency: "VND"
		});
	},
	trackCheckoutInitiated: (product) => {
		if (!product) return;
		clarity.event("checkout_initiated", {
			product_id: product.id || product.sku || "unknown",
			product_name: product.name || "Unknown Product",
			product_price: String(product.price || 0),
			currency: "VND",
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		});
	},
	trackPurchase: (product, transactionId = null) => {
		if (!product) return;
		const eventData = {
			product_id: product.id || product.sku || "unknown",
			product_name: product.name || "Unknown Product",
			product_price: String(product.price || 0),
			currency: "VND",
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (transactionId) eventData.transaction_id = transactionId;
		clarity.event("purchase", eventData);
		console.log("✅ Purchase Tracked:", {
			product: product.name,
			price: product.price,
			transactionId
		});
	},
	trackSearch: (searchQuery, resultsCount = 0) => {
		if (!searchQuery) return;
		clarity.event("search", {
			search_query: searchQuery,
			results_count: String(resultsCount),
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		});
		console.log("🔍 Search Tracked:", {
			query: searchQuery,
			results: resultsCount
		});
	},
	trackCustomEvent: (eventName, eventData = {}) => {
		if (!eventName) return;
		clarity.event(eventName, {
			...eventData,
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		});
		console.log(`📌 Custom Event Tracked: ${eventName}`, eventData);
	},
	setSessionData: (userId = null, customData = {}) => {
		if (userId) clarity.setSessionProperty("user_id", userId);
		Object.entries(customData).forEach(([key, value]) => {
			clarity.setSessionProperty(key, String(value));
		});
		console.log("👤 Session Data Set:", {
			userId,
			...customData
		});
	},
	tagElement: (element, tagName) => {
		if (!element) return;
		clarity.tag(element, tagName);
		console.log("🏷️ Element Tagged:", { tag: tagName });
	}
};
//#endregion
//#region src/pages/Shop/ProductList.jsx
function ProductList() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalItems, setTotalItems] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const [sortBy, setSortBy] = useState("id");
	const [order, setOrder] = useState("desc");
	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const productsPerPage = 9;
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearch(searchTerm);
		}, 500);
		return () => clearTimeout(timer);
	}, [searchTerm]);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const fetchProducts = useCallback(async () => {
		setLoading(true);
		try {
			const response = await productService.getAllProducts({
				page: currentPage,
				limit: productsPerPage,
				sort_by: sortBy,
				order,
				search: debouncedSearch
			});
			setProducts(response.data || []);
			setTotalItems(response.total || 0);
			if (debouncedSearch) clarityService.trackSearch(debouncedSearch, response.data?.length || 0);
		} catch (err) {
			console.error("Error fetching collections:", err);
		} finally {
			setLoading(false);
		}
	}, [
		currentPage,
		sortBy,
		order,
		debouncedSearch
	]);
	useEffect(() => {
		setCurrentPage(1);
	}, [
		debouncedSearch,
		sortBy,
		order
	]);
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	const totalPages = Math.ceil(totalItems / productsPerPage);
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
		document.getElementById("product-grid-section")?.scrollIntoView({ behavior: "smooth" });
	};
	const handleSelectSort = (option) => {
		setSortBy(option.sort);
		setOrder(option.order);
		setIsOpen(false);
	};
	const sortOptions = [
		{
			label: "Tuyệt tác mới nhất",
			sort: "id",
			order: "desc"
		},
		{
			label: "Giá: Thấp đến Cao",
			sort: "price",
			order: "asc"
		},
		{
			label: "Giá: Cao đến Thấp",
			sort: "price",
			order: "desc"
		},
		{
			label: "Bảng chữ cái: A - Z",
			sort: "name",
			order: "asc"
		},
		{
			label: "Bảng chữ cái: Z - A",
			sort: "name",
			order: "desc"
		}
	];
	const currentLabel = sortOptions.find((opt) => opt.sort === sortBy && opt.order === order)?.label;
	return /* @__PURE__ */ jsx("section", {
		id: "product-grid-section",
		className: "w-full max-w-full overflow-x-hidden bg-[#0a0a0a] text-white min-h-screen pt-24 pb-12 px-4 md:px-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1600px] mx-auto",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 border-b border-zinc-800 pb-10 gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-4 w-full text-left",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white italic leading-tight",
							children: [
								"Bộ sưu tập",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "block sm:inline text-sm md:text-base tracking-[0.3em] text-zinc-500 font-sans not-italic uppercase mt-2 sm:mt-0",
									children: "/ Tuyệt Tác Cơ Khí"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-zinc-600" }), /* @__PURE__ */ jsxs("p", {
								className: "text-[10px] md:text-xs tracking-[0.3em] text-zinc-400 uppercase font-medium",
								children: [
									"Est. 2026 — ",
									totalItems,
									" Tuyệt tác"
								]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative group flex-1 sm:w-64",
							children: [
								/* @__PURE__ */ jsx(Search, {
									size: 16,
									className: "absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-white transition-colors"
								}),
								/* @__PURE__ */ jsx("input", {
									type: "text",
									placeholder: "Tìm kiếm...",
									value: searchTerm,
									onChange: (e) => setSearchTerm(e.target.value),
									className: "w-full bg-zinc-900/30 border border-zinc-800 pl-11 pr-10 py-3 rounded-none text-xs font-medium tracking-wider text-white outline-none focus:border-white transition-all"
								}),
								searchTerm && /* @__PURE__ */ jsx("button", {
									onClick: () => setSearchTerm(""),
									className: "absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white",
									children: /* @__PURE__ */ jsx(X, { size: 14 })
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative flex-1 sm:w-auto",
							ref: dropdownRef,
							children: [/* @__PURE__ */ jsxs("button", {
								onClick: () => setIsOpen(!isOpen),
								className: "group flex items-center justify-between w-full sm:min-w-[200px] gap-4 bg-zinc-900/30 border border-zinc-800 px-5 py-2.5 rounded-none transition-all hover:border-white",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-start",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1",
										children: "Sắp xếp"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-white text-xs font-medium truncate max-w-[120px] sm:max-w-none",
										children: currentLabel
									})]
								}), /* @__PURE__ */ jsx(ChevronDown, {
									size: 14,
									className: `text-zinc-500 transition-transform duration-500 ${isOpen ? "rotate-180 text-white" : ""}`
								})]
							}), isOpen && /* @__PURE__ */ jsx("div", {
								className: "absolute right-0 left-0 sm:left-auto mt-2 w-full sm:w-64 bg-zinc-900 border border-zinc-800 z-[100] py-2 animate-in fade-in zoom-in-95 duration-200",
								children: sortOptions.map((option, idx) => {
									const isSelected = sortBy === option.sort && order === option.order;
									return /* @__PURE__ */ jsxs("button", {
										onClick: () => handleSelectSort(option),
										className: `w-full flex items-center justify-between px-5 py-3 text-[10px] uppercase tracking-widest transition-all ${isSelected ? "bg-white/10 text-white font-bold border-l-2 border-white" : "text-zinc-500 hover:text-white border-l-2 border-transparent"}`,
										children: [option.label, isSelected && /* @__PURE__ */ jsx(Check, {
											size: 12,
											className: "text-white"
										})]
									}, idx);
								})
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "min-h-[400px]",
					children: loading ? /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center justify-center py-40 space-y-4",
						children: [/* @__PURE__ */ jsx(Loader2, {
							className: "animate-spin text-zinc-600",
							size: 40
						}), /* @__PURE__ */ jsx("p", {
							className: "font-serif italic text-zinc-500 tracking-widest text-xs",
							children: "Đang khởi động cỗ máy..."
						})]
					}) : /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-24",
						children: products.length > 0 ? products.map((item) => /* @__PURE__ */ jsx(ProductCard, { product: item }, item.id)) : /* @__PURE__ */ jsxs("div", {
							className: "col-span-full text-center py-20",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-zinc-500 font-serif italic text-lg mb-4",
								children: "Không tìm thấy tạo tác phù hợp."
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => {
									setSearchTerm("");
									setSortBy("id");
								},
								className: "text-[10px] uppercase tracking-widest font-bold text-white border-b border-zinc-600 pb-1",
								children: "Khôi phục bộ lọc"
							})]
						})
					})
				}),
				totalPages > 1 && /* @__PURE__ */ jsxs("div", {
					className: "mt-20 md:mt-28 flex flex-col items-center space-y-8",
					children: [/* @__PURE__ */ jsx("div", { className: "w-px h-12 md:h-16 bg-zinc-800" }), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-4 md:gap-12 w-full",
						children: [
							/* @__PURE__ */ jsxs("button", {
								onClick: () => currentPage > 1 && paginate(currentPage - 1),
								disabled: currentPage === 1 || loading,
								className: "flex items-center gap-2 uppercase text-[9px] md:text-[10px] tracking-widest font-bold disabled:opacity-20 text-zinc-400 hover:text-white transition-all",
								children: [/* @__PURE__ */ jsx(ChevronLeft, { size: 14 }), /* @__PURE__ */ jsx("span", {
									className: "hidden sm:inline",
									children: "Trở Lại"
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-2 md:gap-6",
								children: [...Array(totalPages)].map((_, i) => /* @__PURE__ */ jsx("button", {
									onClick: () => paginate(i + 1),
									className: `text-[10px] md:text-xs font-medium transition-all relative pb-2 ${currentPage === i + 1 ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white" : "text-zinc-600 hover:text-zinc-300"}`,
									children: String(i + 1).padStart(2, "0")
								}, i + 1))
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: () => currentPage < totalPages && paginate(currentPage + 1),
								disabled: currentPage === totalPages || loading,
								className: "flex items-center gap-2 uppercase text-[9px] md:text-[10px] tracking-widest font-bold disabled:opacity-20 text-zinc-400 hover:text-white transition-all",
								children: [/* @__PURE__ */ jsx("span", {
									className: "hidden sm:inline",
									children: "Tiếp Theo"
								}), /* @__PURE__ */ jsx(ChevronRight, { size: 14 })]
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/pages/Shop/ShoppingPage.jsx
var ShoppingPage = () => {
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-black text-white font-['Google_Sans_Flex']",
		children: /* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx(ProductList, {}), /* @__PURE__ */ jsx(BrandSection, {})] })
	});
};
//#endregion
//#region src/pages/About/StatsSection.jsx
var StatsSection = () => {
	const videoRef = useRef(null);
	useEffect(() => {
		if (videoRef.current) videoRef.current.play().catch((error) => {
			console.log("Autoplay blocked:", error);
		});
	}, []);
	return /* @__PURE__ */ jsx("section", {
		className: "bg-[#0a0a0a] py-12 md:py-24 px-4 md:px-12 lg:px-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-12 lg:col-span-7 relative h-[450px] md:h-[550px] rounded-none overflow-hidden group shadow-2xl border border-zinc-800",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: "https://cdn.ocp.richemont.com/api/public/content/default__2PWlBmWcTxiC4AG85gcBPpfCtyHY294C?v=6c3a68d9",
							className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 brightness-50 grayscale-[0.5] contrast-125",
							alt: "Không gian sang trọng"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent z-10" }),
						/* @__PURE__ */ jsxs("div", {
							className: "relative z-20 p-8 md:p-16 h-full flex flex-col justify-between text-white",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-4 md:space-y-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center space-x-3 text-zinc-400",
									children: [/* @__PURE__ */ jsx("span", { className: "w-8 md:w-10 h-[1px] bg-current" }), /* @__PURE__ */ jsx("span", {
										className: "uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-400 text-sm md:text-base leading-relaxed font-medium",
										children: "Di Sản ROVIAN"
									})]
								}), /* @__PURE__ */ jsxs("h2", {
									className: "text-4xl md:text-7xl leading-[0.95] tracking-tighter uppercase font-['Google_Sans_Flex'] italic text-white",
									children: [
										"Uy Quyền ",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "font-light not-italic text-zinc-500 opacity-90",
											children: "Trong Từng Nhịp Động."
										})
									]
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-[340px] ",
									children: "Vượt xa định nghĩa thời gian, chúng tôi kiến tạo những bảo vật khẳng định đẳng cấp truyền đời."
								}), /* @__PURE__ */ jsx("div", {
									className: "w-14 h-14 md:w-20 md:h-20 bg-zinc-800/30 backdrop-blur-md border border-zinc-600/50 rounded-none flex items-center justify-center hover:bg-white transition-all duration-500 cursor-pointer group/btn self-end",
									children: /* @__PURE__ */ jsx(ArrowUpRight, {
										size: 24,
										strokeWidth: 1.5,
										className: "text-white group-hover/btn:text-black group-hover/btn:scale-110 transition-transform"
									})
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-12 lg:col-span-5 grid grid-cols-1 gap-6 md:gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "bg-zinc-900/40 border border-zinc-800 p-8 md:p-10 rounded-none flex flex-col justify-between transition-all hover:bg-zinc-900/60",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row justify-between items-start gap-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-2 md:space-y-3",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-5xl md:text-6xl font-light tracking-tighter italic text-white",
									children: "1450+"
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light uppercase",
									children: [
										"Nhà Sưu Tầm ",
										"",
										/* @__PURE__ */ jsx("br", {}),
										" Đẳng Cấp"
									]
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "flex -space-x-3 md:-space-x-4",
								children: [
									"https://i.pravatar.cc/150?u=11",
									"https://i.pravatar.cc/150?u=12",
									"https://i.pravatar.cc/150?u=13",
									"https://i.pravatar.cc/150?u=14"
								].map((url, i) => /* @__PURE__ */ jsx("img", {
									src: url,
									className: "w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-[#0a0a0a] grayscale hover:grayscale-0 transition-all cursor-pointer",
									alt: "Người dùng"
								}, i))
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-6 md:mt-8 text-zinc-400 text-sm md:text-base leading-relaxed font-light",
							children: "Sự lựa chọn tối thượng của các quý ông tại hơn 40 quốc gia."
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-4 md:gap-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "bg-transparent border border-zinc-800 p-6 md:p-10 rounded-none flex flex-col justify-center transition-colors hover:bg-zinc-900/40",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light uppercase",
								children: "Kiệt Tác"
							}), /* @__PURE__ */ jsx("h4", {
								className: "text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium",
								children: "300+"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative overflow-hidden bg-zinc-900 text-white p-6 md:p-10 rounded-none flex items-center justify-center min-h-[140px] border border-zinc-800",
							children: [/* @__PURE__ */ jsx("img", {
								src: "https://cdn.ocp.richemont.com/api/public/content/default__14BQHyzZZUT8DUvh4XwZ16iZhPgVbK3V?v=255c2087",
								className: "absolute inset-0 w-full h-full object-cover opacity-20 grayscale",
								alt: "Xưởng chế tác"
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative z-10 text-center",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "text-zinc-200 text-xl md:text-2xl leading-relaxed font-medium",
									children: "20+"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light uppercase",
									children: "Xưởng Chế Tác"
								})]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-12 relative h-[350px] md:h-[500px] rounded-none overflow-hidden group shadow-2xl border border-zinc-800 bg-black mt-2 md:mt-0",
					children: [/* @__PURE__ */ jsx("video", {
						ref: videoRef,
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						className: "absolute inset-0 w-full h-full object-cover grayscale-[0.6] brightness-[0.5] contrast-125 transition-transform duration-[5000ms] group-hover:scale-110",
						children: /* @__PURE__ */ jsx("source", {
							src: "https://www.jaeger-lecoultre.com/attachments/JL/JL_MASTER-UI_16-9_V4_WEB.mp4",
							type: "video/mp4"
						})
					}), /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 flex items-end p-6 md:p-12",
						children: /* @__PURE__ */ jsxs("div", {
							className: "w-full flex flex-col md:flex-row justify-between items-start md:items-center border-t border-zinc-700/50 pt-6 md:pt-8 gap-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-white font-serif italic text-lg md:text-2xl tracking-[0.1em] uppercase opacity-90",
								children: "Bản Lĩnh Của Sự Chính Xác"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs md:text-sm uppercase tracking-[0.4em] font-light px-4 py-2 border border-zinc-600/50 rounded-none bg-black/50 backdrop-blur-sm",
								children: "Trải Nghiệm Đỉnh Cao"
							})]
						})
					})]
				})
			]
		})
	});
};
//#endregion
//#region src/pages/About/AboutPage.jsx
var AboutPage = () => {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#0a0a0a] text-white min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 font-['Google_Sans_Flex']",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4 space-y-8",
						children: [/* @__PURE__ */ jsxs("h1", {
							className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white italic leading-none",
							children: [
								"CÂU ",
								/* @__PURE__ */ jsx("br", {}),
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-zinc-500 not-italic",
									children: "CHUYỆN"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-6 pt-10 flex justify-center flex-col items-center lg:items-start",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase",
								children: "Bậc Thầy Chế Tác Cơ Khí"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-xs italic text-center lg:text-left",
								children: "Di sản được kiến tạo từ sự chính xác tuyệt đối và bản lĩnh của người dẫn đầu, nơi mỗi giây trôi qua là một lời khẳng định vị thế."
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 relative group",
						children: [/* @__PURE__ */ jsx("img", {
							src: "https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-service-centre.jpg",
							alt: "Xưởng chế tác đồng hồ",
							className: "w-full h-[550px] object-cover rounded-none contrast-125 border border-zinc-800 shadow-2xl"
						}), /* @__PURE__ */ jsx("div", {
							className: "absolute top-8 right-8 bg-black/80 backdrop-blur-md px-6 py-2 rounded-none border border-zinc-700 text-[9px] uppercase tracking-widest font-bold text-white",
							children: "Thiết lập từ 2026"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-3 space-y-8 pt-0 lg:pt-24",
						children: [/* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded-none h-48 border border-zinc-800 shadow-sm relative group",
							children: /* @__PURE__ */ jsx("img", {
								src: "https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-watchmakers.jpg",
								alt: "Nghệ thuật thủ công",
								className: "w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase",
								children: "Triết lý cội nguồn"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light",
								children: "\"Tại ROVIAN, chúng tôi không chỉ lắp ráp cơ khí; chúng tôi rèn giũa kim loại và sapphire, chế tác nên một cỗ máy thời gian uy quyền, sát cánh cùng quý ông trong những khoảnh khắc định hình lịch sử.\""
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mb-40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-6 order-2 lg:order-1",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-10",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "inline-block px-6 py-2 bg-transparent text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase rounded-none border border-zinc-700",
								children: "Di Sản & Uy Quyền"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white italic leading-none text-zinc-400",
								children: [
									"Hành trình ",
									/* @__PURE__ */ jsx("br", {}),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "not-italic text-white font-medium border-b-2 border-zinc-600 pb-1",
										children: "chinh phục đỉnh cao"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed font-light",
								children: [
									/* @__PURE__ */ jsxs("p", { children: [
										"Lịch sử của",
										" ",
										/* @__PURE__ */ jsx("strong", {
											className: "text-white font-medium",
											children: "ROVIAN"
										}),
										" gắn liền với khát vọng kiến tạo những cỗ máy đo thời gian chuẩn xác nhất. Chúng tôi ra đời với tầm nhìn kết hợp tinh hoa chế tác cơ khí thượng thừa cùng ngôn ngữ thiết kế góc cạnh, nam tính."
									] }),
									/* @__PURE__ */ jsx("p", { children: "Mỗi cỗ máy thời gian rời khỏi xưởng đều phải vượt qua những bài kiểm tra khắc nghiệt nhất, đập vỡ mọi giới hạn của các tiêu chuẩn công nghiệp thông thường để minh chứng cho sức mạnh và sự bền bỉ." }),
									/* @__PURE__ */ jsx("p", { children: "Ngày nay, ROVIAN đứng vững như một biểu tượng của sự thành đạt. Chúng tôi liên tục làm chủ các vật liệu tối tân, từ Titanium Cấp độ 5 đến Carbon siêu nhẹ, đảm bảo rằng mỗi chiếc đồng hồ không chỉ là công cụ, mà là một vũ khí khẳng định đẳng cấp vĩnh cửu." })
								]
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-6 order-1 lg:order-2",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "h-[400px] rounded-none overflow-hidden mt-12 border border-zinc-800 relative group",
							children: [/* @__PURE__ */ jsx("img", {
								src: "https://tamsonvn.com/wp-content/uploads/2025/09/chaumet_11.jpg",
								className: "w-full h-full object-cover contrast-125 group-hover:scale-105 transition-transform duration-1000",
								alt: "Chi tiết đồng hồ"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "h-[400px] rounded-none overflow-hidden border border-zinc-800 relative group",
							children: [/* @__PURE__ */ jsx("img", {
								src: "https://tamsonvn.com/wp-content/uploads/2023/12/vendome_972x1358_3-identite-972x1358-1.jpg",
								className: "w-full h-full object-cover contrast-125 group-hover:scale-105 transition-transform duration-1000",
								alt: "Bộ máy đồng hồ"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" })]
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "border-t border-zinc-900 pt-8",
				children: /* @__PURE__ */ jsx(StatsSection, {})
			})
		]
	});
};
//#endregion
//#region src/assets/final2_Logo.png
var final2_Logo_default = "/assets/final2_Logo-h7M4iHQ6.png";
//#endregion
//#region src/components/layout/Header.jsx
var Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
	}, [isOpen]);
	const navLinks = [
		{
			name: "Lookbook",
			path: "/"
		},
		{
			name: "Shop",
			path: "/shop"
		},
		{
			name: "About",
			path: "/about"
		},
		{
			name: "Contact",
			path: "/contact"
		}
	];
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 left-0 w-full flex justify-between items-center py-5 px-8 z-[100] transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-zinc-800" : "bg-transparent backdrop-blur-sm"} text-white`,
		children: [
			/* @__PURE__ */ jsx(NavLink, {
				to: "/",
				className: "flex items-center z-[110]",
				onClick: () => setIsOpen(false),
				children: /* @__PURE__ */ jsx("img", {
					src: final2_Logo_default,
					alt: "ROVIAN Logo",
					className: "h-6 md:h-9 object-contain"
				})
			}),
			/* @__PURE__ */ jsx("nav", {
				className: "hidden md:flex items-center space-x-10 font-medium text-xs md:text-sm uppercase tracking-[0.4em] ",
				children: navLinks.map((item) => /* @__PURE__ */ jsx(NavLink, {
					to: item.path,
					className: ({ isActive }) => `pb-1 transition-all hover:text-zinc-400 ${isActive ? "border-b border-white text-white" : "text-zinc-300"}`,
					children: item.name
				}, item.path))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col space-y-1.5 md:hidden cursor-pointer z-[110] p-2",
				onClick: () => setIsOpen(!isOpen),
				children: [/* @__PURE__ */ jsx("div", { className: `w-6 h-[2px] transition-all duration-300 bg-white ${isOpen ? "rotate-45 translate-y-[8px]" : ""}` }), /* @__PURE__ */ jsx("div", { className: `w-6 h-[2px] transition-all duration-300 bg-white ${isOpen ? "-rotate-45 -translate-y-[0px]" : ""}` })]
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					y: "-100%"
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: "-100%"
				},
				transition: {
					duration: .5,
					ease: [
						.19,
						1,
						.22,
						1
					]
				},
				className: "fixed inset-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-center z-[105] md:hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center space-y-8",
					children: [navLinks.map((item, index) => /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .2 + index * .1 },
						children: /* @__PURE__ */ jsx(NavLink, {
							to: item.path,
							onClick: () => setIsOpen(false),
							className: "text-white text-3xl uppercase tracking-[0.3em] font-light hover:text-zinc-500 transition-colors",
							children: item.name
						})
					}, item.path)), /* @__PURE__ */ jsx(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: .6 },
						className: "pt-10",
						children: /* @__PURE__ */ jsx("a", {
							href: "https://instagram.com",
							className: "text-zinc-400 text-xs uppercase tracking-[0.5em] border-b border-zinc-700 pb-1 hover:text-white transition-colors",
							children: "Instagram"
						})
					})]
				})
			}) })
		]
	});
};
//#endregion
//#region src/components/layout/Footer.jsx
var Footer = () => {
	const themeClass = "bg-[#0a0a0a] text-zinc-300 border-t border-zinc-800";
	const textMuted = "text-zinc-500";
	return /* @__PURE__ */ jsx("footer", {
		className: `pt-24 pb-12 px-8 md:px-16 lg:px-24 transition-colors duration-500 ${themeClass}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-[1440px] mx-auto",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4 space-y-8",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-3xl font-serif font-light tracking-[0.2em] uppercase italic text-white",
								children: "ROVIAN"
							}),
							/* @__PURE__ */ jsx("p", {
								className: `text-sm md:text-base leading-relaxed font-medium text-zinc-400 ${textMuted}`,
								children: "Crafting timeless elegance since 2026. Our pieces represent the intersection of mechanical precision and absolute masculinity."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex space-x-6",
								children: [
									Instagram,
									Twitter,
									Facebook
								].map((Icon, i) => /* @__PURE__ */ jsx("a", {
									href: "#",
									className: "text-zinc-600 hover:text-white transition-all duration-300",
									children: /* @__PURE__ */ jsx(Icon, {
										size: 18,
										strokeWidth: 1.2
									})
								}, i))
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4 grid grid-cols-2 gap-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-8",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase",
								children: "Explore"
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-5 ",
								children: [
									"Collections",
									"Store",
									"About",
									"Journal"
								].map((item) => /* @__PURE__ */ jsx("li", {
									className: "flex justify-center",
									children: /* @__PURE__ */ jsxs(NavLink, {
										to: `/${item.toLowerCase()}`,
										className: "hover:text-white transition-colors flex items-center group text-sm md:text-base leading-relaxed font-medium text-zinc-400",
										children: [item, /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" })]
									})
								}, item))
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-8",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase",
								children: "Service"
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-5",
								children: [
									"Shipping",
									"Returns",
									"Warranty",
									"Faq"
								].map((item) => /* @__PURE__ */ jsx("li", {
									className: "flex justify-center hover:text-white transition-colors flex items-center group text-sm md:text-base leading-relaxed font-medium text-zinc-400",
									children: item
								}, item))
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4 space-y-8",
						children: [
							/* @__PURE__ */ jsx("h4", {
								className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase",
								children: "Newsletter"
							}),
							/* @__PURE__ */ jsx("p", {
								className: ` text-sm md:text-base leading-relaxed font-medium text-zinc-400 ${textMuted}`,
								children: "Join our inner circle for exclusive previews and atelier updates."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: `relative border-b border-zinc-800 pb-3 group`,
								children: [
									/* @__PURE__ */ jsx("input", {
										type: "email",
										placeholder: "ENTER YOUR EMAIL",
										className: "bg-transparent w-full text-[10px] outline-none placeholder:text-zinc-600 tracking-widest uppercase text-white"
									}),
									/* @__PURE__ */ jsx("button", {
										className: "absolute right-0 top-0 text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase hover:text-white hover:italic transition-all duration-300 cursor-pointer",
										children: "Submit"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute bottom-[-1px] left-0 w-0 h-[1px] bg-white group-focus-within:w-full transition-all duration-500" })
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: `flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-900`,
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-sm md:text-base leading-relaxed font-light text-zinc-600",
					children: "© 2026 ROVIAN Luxury Group. All rights reserved."
				}), /* @__PURE__ */ jsx("div", {
					className: "flex space-x-10 mt-6 md:mt-0",
					children: ["Privacy Policy", "Terms of Use"].map((text) => /* @__PURE__ */ jsx("span", {
						className: "text-sm md:text-base leading-relaxed font-light text-zinc-600 cursor-pointer hover:text-white transition-colors",
						children: text
					}, text))
				})]
			})]
		})
	});
};
//#endregion
//#region src/components/SplashScreen.jsx
var SplashScreen = ({ finishLoading }) => {
	const [startFade, setStartFade] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setStartFade(true);
		}, 2200);
		const finishTimeout = setTimeout(() => {
			finishLoading();
		}, 3e3);
		return () => {
			clearTimeout(timeout);
			clearTimeout(finishTimeout);
		};
	}, [finishLoading]);
	return /* @__PURE__ */ jsx(AnimatePresence, { children: !startFade && /* @__PURE__ */ jsxs(motion.div, {
		className: "fixed inset-0 flex flex-col items-center justify-center z-[100] bg-[#0a0a0a] overflow-hidden",
		initial: { opacity: 1 },
		exit: {
			opacity: 0,
			y: -50,
			transition: {
				duration: .8,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		},
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative flex items-center justify-center mb-5",
				children: [/* @__PURE__ */ jsx(motion.div, {
					className: "absolute w-48 h-48 bg-zinc-600/20 rounded-full blur-[60px]",
					initial: {
						scale: .8,
						opacity: 0
					},
					animate: {
						scale: 1.5,
						opacity: 1,
						transition: {
							duration: 2,
							ease: "easeOut"
						}
					}
				}), /* @__PURE__ */ jsx(motion.img, {
					src: "/assets/final2_Logo-h7M4iHQ6.png",
					alt: "ROVIAN Logo",
					className: "w-52 md:w-60 h-auto relative z-10 object-contain",
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1,
						transition: {
							duration: 1.2,
							delay: .2,
							ease: [
								.16,
								1,
								.3,
								1
							]
						}
					}
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "text-center space-y-4 relative z-10",
				children: [
					/* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0,
							transition: {
								delay: .8,
								duration: .8
							}
						},
						children: /* @__PURE__ */ jsxs("h1", {
							className: "text-3xl font-light uppercase tracking-[0.6em] text-white",
							children: [
								"ROVIAN",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-zinc-500 font-serif italic ml-[-0.2em]",
									children: "Horology"
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(motion.div, {
						className: "w-16 h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto",
						initial: {
							width: 0,
							opacity: 0
						},
						animate: {
							width: 64,
							opacity: 1,
							transition: {
								delay: 1,
								duration: 1
							}
						}
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(motion.p, {
							className: "text-[15px] uppercase tracking-[0.4em] text-zinc-400 font-light",
							initial: { opacity: 0 },
							animate: {
								opacity: 1,
								transition: {
									delay: 1.3,
									duration: .8
								}
							},
							children: "Timeless Precision • Absolute Mastery"
						}), /* @__PURE__ */ jsx(motion.p, {
							className: "text-[12px] italic tracking-[0.2em] text-zinc-500",
							initial: { opacity: 0 },
							animate: {
								opacity: 1,
								transition: {
									delay: 1.6,
									duration: .8
								}
							},
							children: "Excellence in every second."
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-zinc-800 overflow-hidden",
				children: /* @__PURE__ */ jsx(motion.div, {
					className: "h-full bg-white",
					initial: { width: "0%" },
					animate: {
						width: "100%",
						transition: {
							duration: 2.5,
							ease: "easeInOut"
						}
					}
				})
			})
		]
	}) });
};
//#endregion
//#region src/hooks/ScrollToTop.jsx
var ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};
//#endregion
//#region src/components/Loader.jsx
var Loader = () => {
	return /* @__PURE__ */ jsx(StyledWrapper, { children: /* @__PURE__ */ jsx("div", {
		className: "loader-container",
		children: /* @__PURE__ */ jsxs("div", {
			className: "loader",
			children: [
				/* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 64 64",
					className: "char",
					children: /* @__PURE__ */ jsx("path", {
						className: "dash",
						d: "M12 60V4H35C45 4 48 12 48 18C48 24 45 32 35 32H12M32 32L48 60",
						pathLength: "360"
					})
				}),
				/* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 64 64",
					className: "char char-o",
					children: /* @__PURE__ */ jsx("path", {
						className: "spin",
						d: "M32 5A27 27 0 1 1 31.9 5",
						pathLength: "360"
					})
				}),
				/* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 64 64",
					className: "char",
					children: /* @__PURE__ */ jsx("path", {
						className: "dash",
						d: "M8 4L32 60L56 4",
						pathLength: "360"
					})
				}),
				/* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 64 64",
					className: "char",
					children: /* @__PURE__ */ jsx("path", {
						className: "dash",
						d: "M32 4V60M16 4H48M16 60H48",
						pathLength: "360"
					})
				}),
				/* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 64 64",
					className: "char",
					children: /* @__PURE__ */ jsx("path", {
						className: "dash",
						d: "M32 4L8 60M32 4L56 60M16 42H48",
						pathLength: "360"
					})
				}),
				/* @__PURE__ */ jsx("svg", {
					viewBox: "0 0 64 64",
					className: "char",
					children: /* @__PURE__ */ jsx("path", {
						className: "dash",
						d: "M12 60V4L52 60V4",
						pathLength: "360"
					})
				})
			]
		})
	}) });
};
var StyledWrapper = styled.div`
  /* Thiết lập nền tối cho toàn bộ khu vực chứa loader */
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #0a0a0a; /* Chuyển sang nền đen tuyền */
  }

  .loader {
    display: flex;
    gap: 8px; /* Khoảng cách giữa các chữ cái */
    justify-content: center;
    align-items: center;
  }

  .char {
    width: 40px;
    height: 40px;
    display: inline-block;
  }

  .char path {
    fill: none;
    stroke: ${"#ffffff"}; /* Nét vẽ màu trắng sáng */
    stroke-width: 6; /* Giảm nhẹ độ dày nét để trông thanh lịch và sắc sảo hơn */
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Riêng chữ O nét dày hơn chút để giữ hiệu ứng quay đẹp */
  .char-o path {
    stroke-width: 8;
  }

  .dash {
    animation:
      dashArray 2s ease-in-out infinite,
      dashOffset 2s linear infinite;
  }

  .spin {
    animation:
      spinDashArray 2s ease-in-out infinite,
      spin 8s ease-in-out infinite,
      dashOffset 2s linear infinite;
    transform-origin: center;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }
    50% {
      stroke-dasharray: 0 359 1 0;
    }
    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes spinDashArray {
    0% {
      stroke-dasharray: 270 90;
    }
    50% {
      stroke-dasharray: 0 360;
    }
    100% {
      stroke-dasharray: 270 90;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 365;
    }
    100% {
      stroke-dashoffset: 5;
    }
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
    }
    12.5%,
    25% {
      rotate: 270deg;
    }
    37.5%,
    50% {
      rotate: 540deg;
    }
    62.5%,
    75% {
      rotate: 810deg;
    }
    87.5%,
    100% {
      rotate: 1080deg;
    }
  }
`;
//#endregion
//#region src/components/PageWrapper.jsx
var PageWrapper = ({ children }) => {
	if (useMemo(() => {
		if (!sessionStorage.getItem("app_was_loaded")) {
			sessionStorage.setItem("app_was_loaded", "true");
			return true;
		}
		return false;
	}, [])) return /* @__PURE__ */ jsx(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: { duration: .5 },
		children
	});
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: "initial",
		animate: "animate",
		exit: "exit",
		className: "relative",
		children: [/* @__PURE__ */ jsx(motion.div, {
			className: "fixed inset-0 bg-[#0a0a0a] z-[9999] pointer-events-none flex items-center justify-center",
			variants: {
				initial: { opacity: 1 },
				animate: {
					opacity: 0,
					transition: {
						duration: .6,
						delay: 1.2,
						ease: "easeInOut"
					}
				},
				exit: {
					opacity: 1,
					transition: { duration: .3 }
				}
			},
			children: /* @__PURE__ */ jsx(Loader, {})
		}), /* @__PURE__ */ jsx(motion.div, {
			variants: {
				initial: { opacity: 0 },
				animate: {
					opacity: 1,
					transition: {
						delay: 1.3,
						duration: .5
					}
				}
			},
			children
		})]
	});
};
//#endregion
//#region src/assets/blackHorizontal_final.png
var blackHorizontal_final_default = "/assets/blackHorizontal_final-i7cajpdB.png";
//#endregion
//#region src/assets/fb.png
var fb_default = "/assets/fb-DuWYw8SO.png";
//#endregion
//#region src/pages/Contact/ContactPage.jsx
var ContactPage = () => {
	const contactLinks = {
		zalo: "https://zalo.me/0708110906",
		messenger: "https://www.facebook.com/profile.php?id=61578455405363&locale=vi_VN"
	};
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-[#0a0a0a] text-white antialiased font-['Google_Sans_Flex']",
		children: /* @__PURE__ */ jsx("section", {
			className: "pt-32 pb-16 max-w-7xl mx-auto px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid md:grid-cols-2 gap-12 items-start",
				children: [/* @__PURE__ */ jsx("div", {
					className: "space-y-12",
					children: /* @__PURE__ */ jsxs("div", {
						className: "aspect-[4/3] bg-zinc-900 border border-zinc-800 p-2 shadow-2xl relative group overflow-hidden",
						children: [/* @__PURE__ */ jsx("img", {
							src: "https://i.pinimg.com/736x/bc/b8/43/bcb8433ec35ddfc79a6ffe2b2b312ba1.jpg",
							alt: "Đồng hồ ROVIAN",
							className: "w-full h-full object-cover grayscale-[0.5] contrast-125 group-hover:scale-105 transition-transform duration-1000"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20 pointer-events-none" })]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "bg-zinc-900/40 p-8 md:p-10 border border-zinc-800 shadow-xl backdrop-blur-sm",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10",
						children: [/* @__PURE__ */ jsxs("a", {
							href: contactLinks.messenger,
							target: "_blank",
							rel: "noreferrer",
							className: "group flex items-center gap-4 p-3 bg-[#0a0a0a] border border-zinc-800 rounded-none transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 flex-shrink-0 bg-zinc-900 rounded-none p-2 group-hover:bg-[#0a0a0a] transition-colors border border-zinc-800 group-hover:border-blue-900/50",
								children: /* @__PURE__ */ jsx("img", {
									src: fb_default,
									alt: "Messenger",
									className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs md:text-sm uppercase tracking-[0.1em] leading-none mb-1",
									children: "Facebook"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-bold text-zinc-300 tracking-tight group-hover:text-blue-400 transition-colors text-left",
									children: "Messenger"
								})]
							})]
						}), /* @__PURE__ */ jsxs("a", {
							href: contactLinks.zalo,
							target: "_blank",
							rel: "noreferrer",
							className: "group flex items-center gap-4 p-3 bg-[#0a0a0a] border border-zinc-800 rounded-none transition-all duration-300 hover:border-sky-500/50 hover:bg-zinc-900",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 flex-shrink-0 bg-zinc-900 rounded-none p-2 group-hover:bg-[#0a0a0a] transition-colors border border-zinc-800 group-hover:border-sky-900/50",
								children: /* @__PURE__ */ jsx("img", {
									src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/960px-Icon_of_Zalo.svg.png",
									alt: "Zalo",
									className: "w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs md:text-sm uppercase tracking-[0.1em] leading-none mb-1",
									children: "Kênh chính thức"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-bold text-zinc-300 tracking-tight group-hover:text-sky-400 transition-colors text-left",
									children: "Zalo Chat"
								})]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-400 mb-4 block font-medium border-l-2 border-zinc-700 pl-3",
							children: "Đặc Quyền Liên Hệ"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white not-italic leading-tight text-zinc-400 mb-4",
							children: [
								"Khẳng định đẳng cấp qua ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "font-bold text-white",
									children: "từng nhịp chuyển động."
								})
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-8",
							children: [
								"Mọi yêu cầu tư vấn chuyên sâu về các tuyệt tác cơ khí, dịch vụ bảo dưỡng hoặc đặt hẹn riêng tư tại phòng khánh tiết. Vui lòng gửi thư trực tiếp cho chuyên gia của chúng tôi qua:",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: "mailto:rovianwatch@gmail.com",
									className: "font-medium text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-colors",
									children: "rovianwatch@gmail.com"
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid sm:grid-cols-3 gap-8",
							children: [
								{
									title: "Bảo Dưỡng Chuyên Sâu",
									desc: "Hỗ trợ thẩm định, sửa chữa và các yêu cầu kỹ thuật cơ khí.",
									contact: "rovianwatch"
								},
								{
									title: "Phòng Khánh Tiết",
									desc: "Trải nghiệm riêng tư và chiêm ngưỡng các tuyệt tác độc bản tại Flagship.",
									contact: "Đặt lịch hẹn"
								},
								{
									title: "Tư Vấn Cá Nhân Hóa",
									desc: "Đặc quyền tư vấn 1:1 cùng chuyên gia cấp cao của ROVIAN.",
									contact: "0708 110 906"
								}
							].map((item, index) => /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-2 border-t sm:border-t-0 sm:border-l border-zinc-800 pt-4 sm:pt-0 sm:pl-5 h-full",
								children: [
									/* @__PURE__ */ jsx("h4", {
										className: "text-sm md:text-base uppercase tracking-[0.1em] text-zinc-400 font-medium",
										children: item.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-zinc-500 text-sm md:text-base leading-relaxed font-light flex-grow",
										children: item.desc
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-zinc-400 text-xs md:text-xs leading-relaxed font-bold uppercase",
										children: item.contact
									})
								]
							}, index))
						})
					] })]
				})]
			})
		})
	});
};
//#endregion
//#region src/services/authService.jsx
var authService = { login: async (email, password) => {
	return apiClient("/login", {
		method: "POST",
		body: {
			email,
			password
		}
	});
} };
//#endregion
//#region src/pages/Auth/AuthPage.jsx
var AuthPage = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const handleLogin = async () => {
		try {
			const data = await authService.login(email, password);
			console.log("Thành công:", data);
			if (data) {
				localStorage.setItem("access_token", data.access_token);
				navigate("/admin");
			}
		} catch (err) {
			console.error("Lỗi:", err);
		}
	};
	return /* @__PURE__ */ jsx("div", {
		className: "w-full min-h-screen flex justify-center items-center ",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "p-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex justify-center mb-4",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex bg-gray-50 p-1 rounded-xl",
							children: /* @__PURE__ */ jsx("h1", {
								className: "font-bold text-2xl text-red-400",
								children: "ADMIN"
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "text-start",
							children: [/* @__PURE__ */ jsx("label", {
								className: "block text-sm font-medium text-gray-700 mb-1.5",
								children: "Email address"
							}), /* @__PURE__ */ jsx("input", {
								type: "email",
								placeholder: "Enter your email address",
								onChange: (e) => setEmail(e.target.value),
								className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all placeholder:text-gray-400"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "text-start",
							children: [/* @__PURE__ */ jsx("label", {
								className: "text-sm font-medium text-gray-700",
								children: "Password"
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx("input", {
									type: showPassword ? "text" : "password",
									placeholder: "Enter your password",
									onChange: (e) => setPassword(e.target.value),
									className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all placeholder:text-gray-400"
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setShowPassword(!showPassword),
									className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
									children: showPassword ? /* @__PURE__ */ jsx(Eye, { size: 18 }) : /* @__PURE__ */ jsx(EyeOff, { size: 18 })
								})]
							})]
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						className: "w-full mt-8 bg-[#1a1c1e] hover:bg-black text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg active:scale-[0.98]",
						onClick: handleLogin,
						children: "Log In"
					})
				]
			})
		})
	});
};
//#endregion
//#region src/components/layout/HeaderAdmin.jsx
var HeaderAdmin = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	const navigate = useNavigate();
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsDropdownOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const handleLogout = () => {
		localStorage.removeItem("access_token");
		navigate("/auth");
	};
	const handleNavigateHomePage = () => {
		localStorage.removeItem("access_token");
		navigate("/");
	};
	return /* @__PURE__ */ jsxs("header", {
		className: "fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-[100] flex items-center justify-between px-8",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex items-center gap-2",
			onClick: handleNavigateHomePage,
			children: /* @__PURE__ */ jsx("img", {
				src: blackHorizontal_final_default,
				alt: "Logo",
				className: "h-7"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative hidden md:block w-72",
					children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }), /* @__PURE__ */ jsx("input", {
						type: "search",
						placeholder: "Search everything...",
						className: "w-full pl-10 pr-4 py-2 text-sm border-none rounded-2xl bg-slate-50 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-slate-400"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 pr-2",
					children: [/* @__PURE__ */ jsx("button", {
						className: "text-slate-500 hover:text-orange-600 p-2.5 rounded-xl hover:bg-orange-50 transition-all",
						children: /* @__PURE__ */ jsx(MessageSquare, { size: 20 })
					}), /* @__PURE__ */ jsxs("button", {
						className: "text-slate-500 hover:text-orange-600 p-2.5 rounded-xl hover:bg-orange-50 transition-all relative",
						children: [/* @__PURE__ */ jsx(Bell, { size: 20 }), /* @__PURE__ */ jsx("span", { className: "absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" })]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative border-l pl-4 border-slate-100",
					ref: dropdownRef,
					children: [/* @__PURE__ */ jsxs("button", {
						onClick: () => setIsDropdownOpen(!isDropdownOpen),
						className: `flex items-center gap-3 p-1.5 rounded-[18px] transition-all hover:bg-slate-50 cursor-pointer ${isDropdownOpen ? "bg-slate-50" : ""}`,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx("img", {
								src: "https://static.vecteezy.com/system/resources/thumbnails/019/194/935/small/global-admin-icon-color-outline-vector.jpg",
								alt: "Admin",
								className: "w-9 h-9 rounded-[14px] object-cover border-2 border-white shadow-sm"
							}), /* @__PURE__ */ jsx("div", { className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "hidden lg:block text-left",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-sm font-bold text-slate-900 leading-tight",
								children: "Admin"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider",
								children: "Superuser"
							})]
						})]
					}), isDropdownOpen && /* @__PURE__ */ jsxs("div", {
						className: "absolute right-0 mt-3 w-56 bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-50 p-2 animate-in fade-in zoom-in duration-200 origin-top-right",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "px-4 py-3 border-b border-slate-50 mb-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs font-bold text-slate-400 uppercase tracking-widest",
									children: "Account Info"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm font-semibold text-slate-700 truncate",
									children: "admin@gmail.com"
								})]
							}),
							/* @__PURE__ */ jsxs("button", {
								className: "w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-[16px] transition-all cursor-pointer",
								children: [/* @__PURE__ */ jsx(User, {
									size: 18,
									className: "text-slate-400"
								}), "Profile Details"]
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: handleNavigateHomePage,
								className: "w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-[16px] transition-all cursor-pointer",
								children: [/* @__PURE__ */ jsx(House, {
									size: 18,
									className: "text-slate-400"
								}), "Homepage"]
							}),
							/* @__PURE__ */ jsx("hr", { className: "my-1 border-slate-50" }),
							/* @__PURE__ */ jsxs("button", {
								onClick: handleLogout,
								className: "w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-[16px] transition-all cursor-pointer",
								children: [/* @__PURE__ */ jsx(LogOut, { size: 18 }), "Sign Out"]
							})
						]
					})]
				})
			]
		})]
	});
};
//#endregion
//#region src/components/layout/NavbarAdmin.jsx
var NavbarAdmin = () => {
	return /* @__PURE__ */ jsx("aside", {
		className: "fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 p-4 space-y-2 z-40 pt-6",
		children: [
			{
				name: "Dashboard",
				icon: LayoutDashboard
			},
			{
				name: "Products",
				icon: Package,
				active: true
			},
			{
				name: "Categories",
				icon: LayoutDashboard
			},
			{
				name: "Orders",
				icon: Package
			},
			{
				name: "Customers",
				icon: UsersRound
			},
			{
				name: "Settings",
				icon: Settings
			}
		].map((item) => /* @__PURE__ */ jsxs("a", {
			href: "#",
			className: `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`,
			children: [/* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5" }), item.name]
		}, item.name))
	});
};
//#endregion
//#region src/components/layout/AdminLayout.jsx
var AdminLayout = () => /* @__PURE__ */ jsxs("div", {
	className: "flex flex-col h-screen w-screen overflow-hidden bg-[#f9fafb]",
	children: [/* @__PURE__ */ jsx("header", {
		className: "z-20 shrink-0 border-b border-gray-200 bg-white",
		children: /* @__PURE__ */ jsx(HeaderAdmin, {})
	}), /* @__PURE__ */ jsxs("div", {
		className: "flex flex-1 overflow-hidden",
		children: [/* @__PURE__ */ jsx("aside", {
			className: "w-64 border-r border-gray-200 bg-white overflow-y-auto hidden md:block",
			children: /* @__PURE__ */ jsx(NavbarAdmin, {})
		}), /* @__PURE__ */ jsx("main", {
			className: "flex-1 flex flex-col min-w-0 overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex-1 overflow-y-auto p-2 lg:p-4 custom-scrollbar",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-[1600px] mx-auto mt-12",
					children: /* @__PURE__ */ jsx(Outlet, {})
				})
			})
		})]
	})]
});
//#endregion
//#region src/components/AddProductModal.jsx
var AddProductModal = ({ isOpen, onClose, onRefresh }) => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		url_redirect: "",
		description: ""
	});
	const [imageFile, setImageFile] = useState(null);
	const [preview, setPreview] = useState(null);
	const [galleryFiles, setGalleryFiles] = useState([]);
	const [galleryPreviews, setGalleryPreviews] = useState([]);
	useEffect(() => {
		return () => {
			if (preview) URL.revokeObjectURL(preview);
			galleryPreviews.forEach((p) => URL.revokeObjectURL(p));
		};
	}, [preview, galleryPreviews]);
	if (!isOpen) return null;
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const handleMainImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
			setPreview(URL.createObjectURL(file));
		}
	};
	const handleGalleryChange = (e) => {
		const files = Array.from(e.target.files);
		if (files.length > 0) {
			setGalleryFiles((prev) => [...prev, ...files]);
			const newPreviews = files.map((file) => URL.createObjectURL(file));
			setGalleryPreviews((prev) => [...prev, ...newPreviews]);
		}
	};
	const removeGalleryImage = (index) => {
		setGalleryFiles((prev) => prev.filter((_, i) => i !== index));
		setGalleryPreviews((prev) => prev.filter((_, i) => i !== index));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!imageFile) {
			alert("Vui lòng chọn ảnh chính (Main Image)!");
			return;
		}
		setLoading(true);
		try {
			const data = new FormData();
			data.append("name", formData.name.trim());
			data.append("price", parseInt(formData.price, 10));
			data.append("url_redirect", formData.url_redirect.trim());
			data.append("image", imageFile);
			if (formData.description.trim()) data.append("description", formData.description.trim());
			if (galleryFiles.length > 0) galleryFiles.forEach((file) => {
				data.append("expand_images", file);
			});
			const res = await productService.createProduct(data);
			console.log("Product created:", JSON.stringify(res));
			setFormData({
				name: "",
				price: "",
				url_redirect: "",
				description: ""
			});
			setImageFile(null);
			setPreview(null);
			setGalleryFiles([]);
			setGalleryPreviews([]);
			if (onRefresh) onRefresh();
			onClose();
		} catch (err) {
			alert("Lỗi: " + (err.response?.data?.detail?.[0]?.msg || "Không thể thêm sản phẩm"));
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-6 font-sans",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 bg-slate-200/40 backdrop-blur-md",
			onClick: onClose
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl w-full max-w-2xl overflow-hidden border border-white/50 animate-in fade-in zoom-in duration-300",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-5 flex justify-between items-center border-b border-slate-100/50",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Plus, {
						size: 18,
						className: "text-slate-800"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[15px] font-semibold text-slate-800",
						children: "New Product"
					})]
				}), /* @__PURE__ */ jsx("button", {
					onClick: onClose,
					className: "p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors",
					children: /* @__PURE__ */ jsx(X, { size: 20 })
				})]
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				className: "p-8 space-y-7 max-h-[80vh] overflow-y-auto custom-scrollbar",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1",
							children: "Media Assets"
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col md:flex-row gap-6 items-start",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center gap-2 w-full md:w-auto",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-bold text-slate-500 uppercase",
										children: "Main Image *"
									}), /* @__PURE__ */ jsxs("label", {
										className: "relative group cursor-pointer",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-32 h-32 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:border-orange-300 flex items-center justify-center",
											children: preview ? /* @__PURE__ */ jsx("img", {
												src: preview,
												alt: "Main",
												className: "w-full h-full object-cover"
											}) : /* @__PURE__ */ jsx(ImageIcon, {
												size: 32,
												className: "text-slate-300"
											})
										}), /* @__PURE__ */ jsx("input", {
											type: "file",
											className: "hidden",
											accept: "image/*",
											onChange: handleMainImageChange
										})]
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "hidden md:block w-px h-32 bg-slate-200" }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-2 flex-1 w-full",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-bold text-slate-500 uppercase",
										children: "Gallery Images"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap gap-3",
										children: [galleryPreviews.map((src, index) => /* @__PURE__ */ jsxs("div", {
											className: "relative w-20 h-20 rounded-xl border border-slate-200 overflow-hidden group",
											children: [/* @__PURE__ */ jsx("img", {
												src,
												alt: "Gallery",
												className: "w-full h-full object-cover"
											}), /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => removeGalleryImage(index),
												className: "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
												children: /* @__PURE__ */ jsx(XCircle, {
													size: 20,
													className: "text-white"
												})
											})]
										}, index)), /* @__PURE__ */ jsxs("label", {
											className: "w-20 h-20 bg-white border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-orange-50/50 transition-colors",
											children: [/* @__PURE__ */ jsx(Plus, {
												size: 20,
												className: "text-slate-400"
											}), /* @__PURE__ */ jsx("input", {
												type: "file",
												multiple: true,
												className: "hidden",
												accept: "image/*",
												onChange: handleGalleryChange
											})]
										})]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[60px]",
									children: "Name *"
								}), /* @__PURE__ */ jsx("input", {
									name: "name",
									value: formData.name,
									required: true,
									onChange: handleChange,
									placeholder: "Product name...",
									className: "flex-1 bg-transparent text-[16px] font-semibold text-slate-800 outline-none placeholder:text-slate-300"
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[60px]",
									children: "Price *"
								}), /* @__PURE__ */ jsxs("div", {
									className: "relative flex-1 max-w-[200px]",
									children: [/* @__PURE__ */ jsx("input", {
										name: "price",
										type: "number",
										min: "0",
										value: formData.price,
										required: true,
										onChange: handleChange,
										placeholder: "0",
										className: "w-full bg-[#F4F4F5]/50 px-4 py-2 rounded-xl text-[14px] font-bold text-slate-700 outline-none border border-transparent focus:border-slate-200 transition-all"
									}), /* @__PURE__ */ jsx("span", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400",
										children: "VND"
									})]
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[60px]",
									children: "Link *"
								}), /* @__PURE__ */ jsx("input", {
									name: "url_redirect",
									type: "url",
									value: formData.url_redirect,
									required: true,
									onChange: handleChange,
									placeholder: "https://...",
									className: "flex-1 bg-transparent text-[14px] text-slate-600 outline-none placeholder:text-slate-300"
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[60px] pt-2",
									children: "Desc"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "description",
									value: formData.description,
									onChange: handleChange,
									placeholder: "Write a short description for the product...",
									rows: "3",
									className: "flex-1 bg-[#F4F4F5]/50 px-4 py-3 rounded-xl text-[14px] text-slate-600 outline-none border border-transparent focus:border-slate-200 transition-all resize-none"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between pt-6 border-t border-slate-100/50 sticky bottom-0 bg-white",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "px-5 py-2.5 text-[14px] font-semibold text-slate-600 hover:bg-slate-100 rounded-full transition-all cursor-pointer",
							children: "Hủy"
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							disabled: loading,
							className: "flex items-center gap-3 px-8 py-2.5 bg-black text-white rounded-full text-[14px] font-bold hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-zinc-200 cursor-pointer",
							children: loading ? /* @__PURE__ */ jsx(Loader2, {
								className: "animate-spin",
								size: 18
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", { children: "Create" }), /* @__PURE__ */ jsx(Plus, { size: 18 })] })
						})]
					})
				]
			})]
		})]
	});
};
//#endregion
//#region src/components/EditProductModal.jsx
var EditProductModal = ({ isOpen, onClose, onRefresh, product }) => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		url_redirect: "",
		description: ""
	});
	const [imageFile, setImageFile] = useState(null);
	const [preview, setPreview] = useState(null);
	const [expandImages, setExpandImages] = useState([]);
	useEffect(() => {
		if (isOpen && product) {
			setFormData({
				name: product.name || "",
				price: product.price || "",
				url_redirect: product.url_redirect || "",
				description: product.description || ""
			});
			setPreview(product.image_url || null);
			setImageFile(null);
			setExpandImages((product.expand_images || []).map((url) => ({
				type: "url",
				value: url,
				preview: url
			})));
		}
	}, [isOpen, product]);
	useEffect(() => {
		return () => {
			if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
			expandImages.forEach((item) => {
				if (item.type === "file") URL.revokeObjectURL(item.preview);
			});
		};
	}, [preview, expandImages]);
	if (!isOpen || !product) return null;
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const handleMainFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
			setPreview(URL.createObjectURL(file));
		}
	};
	const handleExpandFileChange = (e) => {
		const files = Array.from(e.target.files);
		if (files.length > 0) {
			const newItems = files.map((file) => ({
				type: "file",
				value: file,
				preview: URL.createObjectURL(file)
			}));
			setExpandImages((prev) => [...prev, ...newItems]);
		}
	};
	const removeExpandImage = (indexToRemove) => {
		setExpandImages((prev) => {
			const newList = prev.filter((_, i) => i !== indexToRemove);
			if (prev[indexToRemove].type === "file") URL.revokeObjectURL(prev[indexToRemove].preview);
			return newList;
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = new FormData();
			data.append("name", formData.name.trim());
			data.append("price", parseInt(formData.price, 10));
			data.append("url_redirect", formData.url_redirect.trim());
			if (formData.description) data.append("description", formData.description.trim());
			if (imageFile) data.append("image", imageFile);
			const existingUrls = expandImages.filter((item) => item.type === "url").map((item) => item.value);
			(await Promise.all(existingUrls.map(async (url, index) => {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`Cannot fetch existing image: ${url}`);
				const blob = await response.blob();
				const fileName = `existing-${index}.jpg`;
				return new File([blob], fileName, { type: blob.type || "image/jpeg" });
			}))).forEach((file) => {
				data.append("expand_images", file);
			});
			expandImages.filter((item) => item.type === "file").map((item) => item.value).forEach((file) => {
				data.append("expand_images", file);
			});
			await productService.updateProduct(product.id, data);
			if (onRefresh) onRefresh();
			onClose();
		} catch (err) {
			alert("Lỗi: " + (err.response?.data?.detail?.[0]?.msg || err.response?.data?.detail || "Không thể cập nhật"));
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-6 font-sans",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 bg-slate-200/40 backdrop-blur-md transition-opacity",
			onClick: onClose
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/50 animate-in fade-in zoom-in duration-300 scrollbar-hide",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "sticky top-0 z-10 bg-white/95 backdrop-blur-xl px-6 py-5 flex justify-between items-center border-b border-slate-100/50",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[15px] font-semibold text-slate-800",
						children: "Edit Product"
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-[13px] text-slate-400 font-medium",
						children: ["#", product.id]
					})]
				}), /* @__PURE__ */ jsx("button", {
					onClick: onClose,
					className: "p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors",
					children: /* @__PURE__ */ jsx(X, { size: 20 })
				})]
			}), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				className: "p-8 space-y-7",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[80px]",
									children: "Name"
								}), /* @__PURE__ */ jsx("input", {
									name: "name",
									value: formData.name,
									required: true,
									onChange: handleChange,
									className: "flex-1 bg-transparent text-[16px] font-semibold text-slate-800 outline-none"
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[80px]",
									children: "Price"
								}), /* @__PURE__ */ jsx("input", {
									name: "price",
									type: "number",
									value: formData.price,
									required: true,
									onChange: handleChange,
									className: "w-full bg-[#F4F4F5]/50 px-4 py-2 rounded-xl outline-none"
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[80px]",
									children: "URL"
								}), /* @__PURE__ */ jsx("input", {
									name: "url_redirect",
									value: formData.url_redirect,
									required: true,
									onChange: handleChange,
									className: "flex-1 bg-[#F4F4F5]/50 px-4 py-2 rounded-xl outline-none"
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3 group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[80px] pt-2",
									children: "Description"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "description",
									value: formData.description,
									onChange: handleChange,
									rows: 3,
									className: "flex-1 bg-[#F4F4F5]/50 px-4 py-2 rounded-xl outline-none resize-none"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ jsx("label", {
								className: "text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1",
								children: "Main Image"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex w-full items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm h-full min-h-[200px]",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex flex-col items-center gap-3",
									children: /* @__PURE__ */ jsxs("label", {
										className: "relative group cursor-pointer",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm",
											children: preview ? /* @__PURE__ */ jsx("img", {
												src: preview,
												alt: "Preview",
												className: "w-full h-full object-cover"
											}) : /* @__PURE__ */ jsx("div", {
												className: "w-full h-full flex items-center justify-center bg-slate-100",
												children: "No Image"
											})
										}), /* @__PURE__ */ jsx("input", {
											type: "file",
											className: "hidden",
											accept: "image/*",
											onChange: handleMainFileChange
										})]
									})
								})
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ jsx("label", {
								className: "text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1",
								children: "Expand Images"
							}), /* @__PURE__ */ jsx("div", {
								className: "p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm h-full min-h-[200px] flex flex-col gap-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-3",
									children: [expandImages.map((item, idx) => /* @__PURE__ */ jsxs("div", {
										className: "relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 group",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: item.preview,
												alt: `Image ${idx}`,
												className: "w-full h-full object-cover"
											}),
											/* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => removeExpandImage(idx),
												className: "absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity",
												children: /* @__PURE__ */ jsx(Trash2, {
													size: 16,
													className: "text-red-600 drop-shadow-md"
												})
											}),
											/* @__PURE__ */ jsx("div", {
												className: `absolute top-0 right-0 text-white text-[8px] px-1 rounded-bl-md ${item.type === "url" ? "bg-gray-600" : "bg-blue-500"}`,
												children: item.type === "url" ? "Cũ" : "Mới"
											})
										]
									}, idx)), /* @__PURE__ */ jsxs("label", {
										className: "w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-colors cursor-pointer",
										children: [/* @__PURE__ */ jsx(Plus, { size: 20 }), /* @__PURE__ */ jsx("input", {
											type: "file",
											multiple: true,
											className: "hidden",
											accept: "image/*",
											onChange: handleExpandFileChange
										})]
									})]
								})
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between pt-6 border-t border-slate-100/50",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "px-5 py-2.5 text-[14px] font-semibold text-slate-600 hover:bg-slate-100 rounded-full transition-all",
							children: "Hủy"
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							disabled: loading,
							className: "flex items-center gap-3 px-8 py-2.5 bg-black text-white rounded-full text-[14px] font-bold hover:bg-zinc-800 disabled:opacity-50",
							children: loading ? /* @__PURE__ */ jsx(Loader2, {
								className: "animate-spin",
								size: 18
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", { children: "Update" }), /* @__PURE__ */ jsx(Save, { size: 16 })] })
						})]
					})
				]
			})]
		})]
	});
};
//#endregion
//#region src/components/DeleteConfirmModal.jsx
var DeleteConfirmModal = ({ isOpen, onClose, onConfirm, product }) => {
	const [loading, setLoading] = useState(false);
	if (!isOpen || !product) return null;
	const handleConfirm = async () => {
		setLoading(true);
		await onConfirm(product.id);
		setLoading(false);
		onClose();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[110] flex items-center justify-center p-6 font-sans",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 bg-slate-200/40 backdrop-blur-md transition-opacity",
			onClick: onClose
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative bg-white/90 backdrop-blur-xl rounded-[24px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] w-full max-w-lg overflow-hidden border border-white/40",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "px-6 py-5 flex justify-between items-center",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[17px] font-semibold text-slate-800",
					children: "Xác nhận xóa"
				}), /* @__PURE__ */ jsx("div", {
					className: "flex gap-2",
					children: /* @__PURE__ */ jsx("button", {
						onClick: onClose,
						className: "p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer",
						children: /* @__PURE__ */ jsx(X, { size: 20 })
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "px-8 pb-8 space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "text-2xl font-bold text-slate-900 tracking-tight",
							children: [
								"Xóa \"",
								product.name,
								"\"?"
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[15px] text-slate-500 leading-relaxed",
							children: "Bạn đang thực hiện xóa sản phẩm này. Hành động này sẽ loại bỏ hoàn toàn dữ liệu khỏi hệ thống và không thể khôi phục lại."
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 p-3 bg-[#F4F4F5]/60 rounded-2xl border border-slate-200/50",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100",
							children: product.image_url ? /* @__PURE__ */ jsx("img", {
								src: product.image_url,
								alt: "",
								className: "w-full h-full rounded-xl object-cover"
							}) : /* @__PURE__ */ jsx(FileText, {
								className: "text-slate-400",
								size: 20
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[14px] font-medium text-slate-700 truncate",
								children: product.name
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-[12px] text-slate-400 uppercase tracking-wide",
								children: ["ID: ", product.id]
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between pt-4",
						children: [/* @__PURE__ */ jsx("button", {
							onClick: onClose,
							className: "px-5 py-2.5 text-[14px] font-semibold text-slate-600 hover:bg-slate-100 rounded-full transition-all",
							children: "Hủy"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-1",
							children: /* @__PURE__ */ jsx("button", {
								onClick: handleConfirm,
								disabled: loading,
								className: "flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed",
								children: loading ? /* @__PURE__ */ jsx(Loader2, {
									className: "animate-spin",
									size: 18
								}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", { children: "Xác nhận" }), /* @__PURE__ */ jsx(Send, {
									size: 16,
									className: "rotate-[45deg]"
								})] })
							})
						})]
					})
				]
			})]
		})]
	});
};
//#endregion
//#region src/components/ProductDetailModal.jsx
var ProductDetailModal = ({ isOpen, onClose, product }) => {
	if (!isOpen || !product) return null;
	console.log("Product details:", JSON.stringify(product));
	const formatCurrency = (amount) => {
		return new Intl.NumberFormat("vi-VN").format(amount || 0);
	};
	const formatDate = (dateString) => {
		if (!dateString) return "---";
		return new Intl.DateTimeFormat("vi-VN", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		}).format(new Date(dateString));
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-6 font-sans",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity",
			onClick: onClose
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl w-full max-w-2xl overflow-hidden border border-white/50 animate-in fade-in zoom-in duration-300",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "px-6 py-5 flex justify-between items-center border-b border-slate-100/50",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[15px] font-semibold text-slate-800",
							children: "Product Details"
						}), /* @__PURE__ */ jsxs("span", {
							className: "px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md text-[12px] font-mono font-medium",
							children: ["#", product.id]
						})]
					}), /* @__PURE__ */ jsx("button", {
						onClick: onClose,
						className: "p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-lg transition-colors cursor-pointer",
						children: /* @__PURE__ */ jsx(X, { size: 20 })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "p-8 space-y-7 max-h-[80vh] overflow-y-auto custom-scrollbar",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1",
							children: "Visuals"
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col md:flex-row gap-6 items-start",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center gap-2 w-full md:w-auto",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-bold text-slate-500 uppercase",
										children: "Main Image"
									}), /* @__PURE__ */ jsx("div", {
										className: "w-32 h-32 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center",
										children: product.image_url ? /* @__PURE__ */ jsx("img", {
											src: product.image_url,
											alt: product.name,
											className: "w-full h-full object-cover"
										}) : /* @__PURE__ */ jsx(ImageIcon, {
											size: 32,
											className: "text-slate-300"
										})
									})]
								}),
								/* @__PURE__ */ jsx("div", { className: "hidden md:block w-px h-32 bg-slate-200" }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col gap-2 flex-1 w-full",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[11px] font-bold text-slate-500 uppercase",
										children: "Gallery Images"
									}), /* @__PURE__ */ jsx("div", {
										className: "flex flex-wrap gap-3",
										children: product.expand_images && product.expand_images.length > 0 ? product.expand_images.map((src, index) => /* @__PURE__ */ jsx("div", {
											className: "relative w-20 h-20 rounded-xl border border-slate-200 overflow-hidden shadow-sm",
											children: /* @__PURE__ */ jsx("img", {
												src,
												alt: `Gallery ${index + 1}`,
												className: "w-full h-full object-cover hover:scale-110 transition-transform duration-300"
											})
										}, index)) : /* @__PURE__ */ jsx("span", {
											className: "text-[13px] text-slate-400 italic py-2",
											children: "Không có ảnh phụ"
										})
									})]
								})
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3 group",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[80px] pt-1",
									children: "Name"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex-1 text-[16px] font-semibold text-slate-800 pt-1 leading-tight",
									children: product.name || "---"
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[80px]",
									children: "Price"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex-1",
									children: /* @__PURE__ */ jsxs("span", {
										className: "inline-block px-4 py-2 bg-green-50 text-green-700 rounded-xl font-bold text-[15px] border border-green-100",
										children: [formatCurrency(product.price), /* @__PURE__ */ jsx("span", {
											className: "text-[11px] opacity-70 ml-1",
											children: "VND"
										})]
									})
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[80px]",
									children: "Link"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex-1",
									children: product.url_redirect ? /* @__PURE__ */ jsxs("a", {
										href: product.url_redirect,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 text-[14px] text-blue-500 hover:text-blue-600 hover:underline font-medium break-all",
										children: [/* @__PURE__ */ jsx(ExternalLink, { size: 14 }), product.url_redirect]
									}) : /* @__PURE__ */ jsx("span", {
										className: "text-[14px] text-slate-400 italic",
										children: "Không có link"
									})
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[14px] text-slate-400 min-w-[80px] pt-3",
									children: "Description"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex-1 bg-[#F4F4F5]/50 px-4 py-3 rounded-xl border border-slate-100",
									children: /* @__PURE__ */ jsx("p", {
										className: "text-[14px] text-slate-600 whitespace-pre-wrap leading-relaxed",
										children: product.description || /* @__PURE__ */ jsx("span", {
											className: "italic text-slate-400",
											children: "Không có mô tả"
										})
									})
								})]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[1px] bg-slate-100 w-full" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-slate-50/50 p-4 rounded-xl border border-slate-100 mt-2",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Calendar, {
											size: 16,
											className: "text-slate-400"
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-slate-400 uppercase",
												children: "Created at"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[13px] font-medium text-slate-700",
												children: formatDate(product.created_date)
											})]
										})]
									}),
									/* @__PURE__ */ jsx("div", { className: "hidden sm:block w-px h-8 bg-slate-200" }),
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Clock, {
											size: 16,
											className: "text-slate-400"
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold text-slate-400 uppercase",
												children: "Updated at"
											}), /* @__PURE__ */ jsx("span", {
												className: "text-[13px] font-medium text-slate-700",
												children: formatDate(product.updated_date)
											})]
										})]
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex justify-end p-6 border-t border-slate-100/50 bg-white",
					children: /* @__PURE__ */ jsx("button", {
						onClick: onClose,
						className: "px-6 py-2.5 bg-slate-900 text-white rounded-full text-[14px] font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200 cursor-pointer",
						children: "Đóng"
					})
				})
			]
		})]
	});
};
//#endregion
//#region src/pages/Admin/ProductManager.jsx
var ProductManager = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImg, setSelectedImg] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalItems, setTotalItems] = useState(0);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [selectedId, setSelectedId] = useState(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
	const [productToDelete, setProductToDelete] = useState(null);
	const pageSize = 6;
	const totalPages = Math.ceil(totalItems / pageSize);
	const formatDate = (dateString) => {
		if (!dateString) return "---";
		return new Intl.DateTimeFormat("vi-VN", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		}).format(new Date(dateString));
	};
	const formatCurrency = (amount) => {
		return new Intl.NumberFormat("vi-VN").format(amount || 0);
	};
	const fetchProducts = useCallback(async () => {
		setLoading(true);
		try {
			const response = await productService.getAllProducts({
				page: currentPage,
				limit: pageSize,
				search: searchTerm,
				sort_by: "id",
				order: "desc"
			});
			setProducts(response.data || []);
			setTotalItems(response.total || 0);
		} catch (err) {
			console.error("Error:", err);
		} finally {
			setLoading(false);
		}
	}, [currentPage, searchTerm]);
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	const handlePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
	};
	const confirmDelete = async (id) => {
		try {
			await productService.deleteProduct(id);
			fetchProducts();
		} catch (err) {
			alert("Lỗi khi xóa sản phẩm.");
		}
	};
	const fetchProductDetails = async (id) => {
		try {
			const res = await productService.detailProduct(id);
			console.log("Product details response:", JSON.stringify(res));
			if (res) setSelectedProduct(res);
			else console.error("Failed to fetch product details:", res.message);
		} catch (error) {
			console.error("Error fetching product details:", error);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "p-6 bg-[#F8F9FB] min-h-screen font-sans text-slate-700",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold text-slate-900 tracking-tight",
					children: "Product Inventory"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-slate-500 mt-1",
					children: "Manage your stock, prices and product details."
				})] }), /* @__PURE__ */ jsxs("button", {
					onClick: () => setIsModalOpen(true),
					className: "bg-[#f26522] hover:bg-[#d4541a] text-white px-5 py-2.5 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-lg shadow-orange-200 active:scale-95",
					children: [/* @__PURE__ */ jsx(Plus, {
						size: 18,
						strokeWidth: 3
					}), /* @__PURE__ */ jsx("span", { children: "Add New Product" })]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative w-full sm:w-96",
							children: [/* @__PURE__ */ jsx(Search, {
								className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400",
								size: 18
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								placeholder: "Search products...",
								value: searchTerm,
								onChange: (e) => {
									setSearchTerm(e.target.value);
									setCurrentPage(1);
								},
								className: "w-full pl-12 pr-10 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-slate-400"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl",
							children: [/* @__PURE__ */ jsx(Package, {
								size: 16,
								className: "text-slate-400"
							}), /* @__PURE__ */ jsxs("span", {
								className: "text-xs font-bold text-slate-500 uppercase tracking-wider",
								children: ["Total: ", totalItems]
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full",
							children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
								className: "bg-slate-50/50",
								children: [
									/* @__PURE__ */ jsx("th", {
										className: "px-6 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest",
										children: "Product Info"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "px-6 py-4 text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest",
										children: "Price"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "px-6 py-4 text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest",
										children: "Date Created"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "px-6 py-4 text-right text-[11px] font-bold text-slate-400 uppercase tracking-widest",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ jsx("tbody", {
								className: "divide-y divide-slate-50",
								children: loading ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
									colSpan: "4",
									className: "py-20 text-center",
									children: /* @__PURE__ */ jsx(Loader2, {
										className: "animate-spin mx-auto text-orange-500",
										size: 32
									})
								}) }) : products.length > 0 ? products.map((item) => /* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-slate-50/80 transition-colors group",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-5",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-4",
												children: [/* @__PURE__ */ jsx("div", {
													className: "relative w-14 h-14 flex-shrink-0",
													children: /* @__PURE__ */ jsx("img", {
														src: item.image_url,
														alt: "",
														onClick: () => setSelectedImg(item.image_url),
														className: "w-full h-full rounded-2xl object-cover bg-slate-100 cursor-zoom-in shadow-sm border border-white group-hover:scale-105 transition-transform"
													})
												}), /* @__PURE__ */ jsxs("div", {
													className: "flex flex-col",
													children: [/* @__PURE__ */ jsx("span", {
														className: "font-bold text-slate-800 text-sm leading-tight",
														children: item.name
													}), /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-3 mt-1",
														children: [/* @__PURE__ */ jsxs("span", {
															className: "text-[10px] font-mono text-slate-400",
															children: ["#", item.id]
														}), /* @__PURE__ */ jsxs("a", {
															href: item.url_redirect,
															target: "_blank",
															rel: "noreferrer",
															className: "text-[10px] text-orange-500 font-bold flex items-center gap-1 hover:text-orange-600 transition-colors",
															children: [/* @__PURE__ */ jsx(ExternalLink, {
																size: 10,
																strokeWidth: 3
															}), " LINK"]
														})]
													})]
												})]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-5 text-center",
											children: /* @__PURE__ */ jsxs("span", {
												className: "inline-block px-3 py-1 bg-green-50 text-green-600 rounded-lg font-bold text-sm",
												children: [
													formatCurrency(item.price),
													" ",
													/* @__PURE__ */ jsx("span", {
														className: "text-[10px] opacity-70",
														children: "đ"
													})
												]
											})
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-5 text-center text-xs text-slate-500 font-medium",
											children: formatDate(item.created_date)
										}),
										/* @__PURE__ */ jsx("td", {
											className: "px-6 py-5",
											children: /* @__PURE__ */ jsxs("div", {
												className: "flex justify-end gap-2",
												children: [
													/* @__PURE__ */ jsx("button", {
														onClick: () => {
															fetchProductDetails(item.id);
															setIsDetailModalOpen(true);
														},
														className: "p-2.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all",
														children: /* @__PURE__ */ jsx(Eye, { size: 18 })
													}),
													/* @__PURE__ */ jsx("button", {
														onClick: () => {
															fetchProductDetails(item.id);
															setIsEditModalOpen(true);
														},
														className: "p-2.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all",
														children: /* @__PURE__ */ jsx(Edit3, { size: 18 })
													}),
													/* @__PURE__ */ jsx("button", {
														onClick: () => {
															setProductToDelete(item);
															setIsDeleteModalOpen(true);
														},
														className: "p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all",
														children: /* @__PURE__ */ jsx(Trash2, { size: 18 })
													})
												]
											})
										})
									]
								}, item.id)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
									colSpan: "4",
									className: "py-20 text-center text-slate-400 font-medium",
									children: "No items found."
								}) })
							})]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 bg-slate-50/30 flex flex-col sm:flex-row items-center justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-xs font-bold text-slate-400 uppercase tracking-wider",
							children: [
								"Page ",
								currentPage,
								" of ",
								totalPages
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx("button", {
									onClick: () => handlePageChange(currentPage - 1),
									disabled: currentPage === 1 || loading,
									className: "p-2 bg-white border border-slate-200 rounded-xl shadow-sm disabled:opacity-30 hover:bg-slate-50 transition-all",
									children: /* @__PURE__ */ jsx(ChevronLeft, {
										size: 20,
										className: "text-slate-600"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex gap-1",
									children: [...Array(totalPages)].map((_, i) => /* @__PURE__ */ jsx("button", {
										onClick: () => handlePageChange(i + 1),
										className: `w-10 h-10 rounded-xl text-sm font-bold transition-all ${currentPage === i + 1 ? "bg-[#f26522] text-white shadow-md shadow-orange-100" : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-100"}`,
										children: i + 1
									}, i + 1))
								}),
								/* @__PURE__ */ jsx("button", {
									onClick: () => handlePageChange(currentPage + 1),
									disabled: currentPage === totalPages || loading,
									className: "p-2 bg-white border border-slate-200 rounded-xl shadow-sm disabled:opacity-30 hover:bg-slate-50 transition-all",
									children: /* @__PURE__ */ jsx(ChevronRight, {
										size: 20,
										className: "text-slate-600"
									})
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(AddProductModal, {
				isOpen: isModalOpen,
				onClose: () => setIsModalOpen(false),
				onRefresh: fetchProducts
			}),
			/* @__PURE__ */ jsx(EditProductModal, {
				isOpen: isEditModalOpen,
				onClose: () => {
					setIsEditModalOpen(false);
					setSelectedProduct(null);
				},
				product: selectedProduct,
				onRefresh: fetchProducts
			}),
			/* @__PURE__ */ jsx(DeleteConfirmModal, {
				isOpen: isDeleteModalOpen,
				onClose: () => {
					setIsDeleteModalOpen(false);
					setProductToDelete(null);
				},
				onConfirm: confirmDelete,
				product: productToDelete
			}),
			/* @__PURE__ */ jsx(ProductDetailModal, {
				isOpen: isDetailModalOpen,
				onClose: () => {
					setIsDetailModalOpen(false);
					setSelectedProduct(null);
				},
				product: selectedProduct
			}),
			selectedImg && /* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 transition-all",
				onClick: () => setSelectedImg(null),
				children: [/* @__PURE__ */ jsx("button", {
					className: "absolute top-8 right-8 text-white hover:rotate-90 transition-transform",
					children: /* @__PURE__ */ jsx(X, { size: 32 })
				}), /* @__PURE__ */ jsx("img", {
					src: selectedImg,
					alt: "",
					className: "max-w-full max-h-[85vh] rounded-[32px] shadow-2xl border-4 border-white/10",
					onClick: (e) => e.stopPropagation()
				})]
			})
		]
	});
};
//#endregion
//#region src/components/layout/ProtectedRoute.jsx
var ProtectedRoute = () => {
	if (!localStorage.getItem("access_token")) return /* @__PURE__ */ jsx(Navigate, {
		to: "/auth",
		replace: true
	});
	return /* @__PURE__ */ jsx(Outlet, {});
};
//#endregion
//#region src/pages/ProductDetail/ProductDetail.jsx
var ProductDetail = ({ productId }) => {
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [activeImg, setActiveImg] = useState(0);
	const fetchProductDetails = async (id) => {
		try {
			const res = await productService.detailProduct(id);
			if (res) setSelectedProduct(res);
		} catch (error) {
			console.error("Error fetching product details:", error);
		}
	};
	useEffect(() => {
		if (productId) fetchProductDetails(productId);
	}, [productId]);
	useEffect(() => {
		if (selectedProduct && selectedProduct.name) clarityService.trackProductView({
			id: selectedProduct.id,
			sku: selectedProduct.id,
			name: selectedProduct.name,
			price: selectedProduct.price
		});
	}, [selectedProduct]);
	const contactLinks = {
		zalo: "https://zalo.me/0708110906",
		messenger: "https://www.facebook.com/profile.php?id=61578455405363&locale=vi_VN"
	};
	const product = selectedProduct ? {
		name: selectedProduct.name || "No Name",
		price: selectedProduct.price || 0,
		description: selectedProduct.description || "No Description",
		sku: selectedProduct.id || "",
		category: selectedProduct.category || "Tuyệt tác cơ khí",
		images: selectedProduct.image_url ? [selectedProduct.image_url, ...selectedProduct.expand_images || []] : selectedProduct.expand_images || [],
		url_redirect: selectedProduct.url_redirect || ""
	} : {
		name: "Đang tải...",
		price: 0,
		description: "Đang tải dữ liệu từ xưởng chế tác...",
		sku: "",
		category: "",
		images: [],
		url_redirect: ""
	};
	const formatPrice = (num) => new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND"
	}).format(num);
	const handleOpenURL = (url) => {
		if (product && product.name !== "Đang tải...") clarityService.trackCheckoutInitiated({
			id: selectedProduct.id,
			sku: selectedProduct.id,
			name: product.name,
			price: product.price
		});
		window.open(url, "_blank");
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-[#0a0a0a] text-white min-h-screen pt-24 pb-20 px-4 md:px-10 font-main selection:bg-zinc-700",
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "max-w-7xl mx-auto flex items-center space-x-2 text-xs md:text-sm leading-relaxed tracking-[0.1em] md:tracking-[0.2em] text-zinc-400 font-medium not-italic whitespace-nowrap uppercase mb-12",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "hover:text-white transition",
					children: "Trang chủ"
				}),
				/* @__PURE__ */ jsx(ChevronRight, { size: 10 }),
				/* @__PURE__ */ jsx("span", {
					className: "text-zinc-300",
					children: "Chi tiết sản phẩm"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7 flex flex-col md:flex-row-reverse gap-6",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex-1 bg-zinc-900/30 border border-zinc-800 rounded-none overflow-hidden group",
					children: /* @__PURE__ */ jsx("div", {
						className: "aspect-[4/5] relative flex items-center justify-center p-8 md:p-16",
						children: /* @__PURE__ */ jsx("img", {
							src: product.images[activeImg],
							alt: product.name,
							className: "w-full h-full object-contain transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
						})
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "flex md:flex-col gap-4 w-full md:w-24 overflow-x-auto",
					children: product.images.map((img, index) => /* @__PURE__ */ jsx("button", {
						onClick: () => setActiveImg(index),
						className: `relative flex-shrink-0 w-20 h-20 md:w-full aspect-square transition-all duration-500 rounded-none border ${activeImg === index ? "border-white bg-zinc-800 opacity-100" : "border-zinc-800 opacity-40 hover:opacity-100 hover:border-zinc-600"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: img,
							className: "w-full h-full object-cover",
							alt: "thumbnail"
						})
					}, index))
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5 flex flex-col text-left space-y-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("p", {
								className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium not-italic whitespace-nowrap uppercase font-bold border-l-2 border-zinc-700 pl-4",
								children: ["Mã sản phẩm: ", product.sku]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-4xl md:text-5xl font-light leading-tight tracking-tight text-white uppercase",
								children: product.name
							}),
							/* @__PURE__ */ jsx("div", {
								className: "pt-4",
								children: /* @__PURE__ */ jsx("span", {
									className: "text-4xl font-bold tracking-tight text-white",
									children: formatPrice(product.price)
								})
							})
						]
					}),
					/* @__PURE__ */ jsx("button", {
						className: "w-full bg-white text-black py-4 rounded-none text-xs md:text-sm uppercase tracking-[0.4em] font-medium hover:bg-zinc-200 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer",
						onClick: () => handleOpenURL(product.url_redirect),
						children: "Mua ngay"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4 pt-4",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium uppercase",
							children: "Mô tả cỗ máy"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light",
							children: [
								"\"",
								product.description,
								"\""
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 gap-8 py-8 border-t border-zinc-800",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light uppercase mb-2",
							children: "Phân loại"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-white text-sm font-light uppercase tracking-wider",
							children: product.category
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-zinc-400 text-sm md:text-base leading-relaxed font-light uppercase mb-2",
							children: "Tình trạng"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-white text-sm font-light uppercase tracking-wider",
							children: "New Collection 2026"
						})] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-tag uppercase tracking-[0.3em] text-zinc-500 font-bold",
							children: "Yêu cầu tư vấn chuyên gia"
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: contactLinks.messenger,
								target: "_blank",
								rel: "noreferrer",
								className: "group flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-500 transition-all",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ jsx("img", {
										src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMQRp6W8lmZFiCBVd_c-KEHnTSSQl2Udf3w&s",
										alt: "Messenger",
										className: "w- h-8 opacity-70 group-hover:opacity-100 transition-opacity"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-bold text-white uppercase tracking-wider",
											children: "Facebook"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-zinc-500 text-xs md:text-sm leading-relaxed font-light",
											children: "Tư vấn qua Facebook"
										})]
									})]
								}), /* @__PURE__ */ jsx(ArrowRight, {
									size: 14,
									className: "text-zinc-700 group-hover:text-white transition-colors"
								})]
							}), /* @__PURE__ */ jsxs("a", {
								href: contactLinks.zalo,
								target: "_blank",
								rel: "noreferrer",
								className: "group flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-500 transition-all",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ jsx("img", {
										src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/960px-Icon_of_Zalo.svg.png",
										alt: "Zalo",
										className: "w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[11px] font-bold text-white uppercase tracking-wider",
											children: "Zalo Official"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-zinc-500 text-xs md:text-sm leading-relaxed font-light",
											children: "Phản hồi tức thì"
										})]
									})]
								}), /* @__PURE__ */ jsx(ArrowRight, {
									size: 14,
									className: "text-zinc-700 group-hover:text-white transition-colors"
								})]
							})]
						})]
					})
				]
			})]
		})]
	});
};
//#endregion
//#region src/pages/ProductDetail/ProductDetailPage.jsx
var ProductDetailPage = () => {
	const { id } = useParams();
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-black text-white font-['Google_Sans_Flex']",
		children: /* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx(ProductDetail, { productId: id }), /* @__PURE__ */ jsx(FeaturedProducts, {})] })
	});
};
//#endregion
//#region src/pages/Article/AutomaticWatchArticle.jsx
var AutomaticWatchArticle = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: "Máy Cơ Automatic Là Gì? Nguyên Lý, Cấu Tạo & Lưu Ý Sử Dụng | ROVIAN" }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Máy cơ Automatic là gì? Giải thích nguyên lý rotor, cách hoạt động, ưu nhược điểm và lưu ý sử dụng đúng cách cho người mới."
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: "máy cơ automatic, đồng hồ cơ tự động, rotor, hacking stop, ROVIAN"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: "article"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Máy Cơ Automatic Là Gì? Nguyên Lý & Lưu Ý Sử Dụng"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: "Khám phá nguyên lý hoạt động của đồng hồ cơ tự động..."
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: "https://yourdomain.com/images/so-do-cau-tao-automatic.jpg"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: "https://yourdomain.com/kien-thuc/may-co-automatic-la-gi"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: "https://yourdomain.com/kien-thuc/may-co-automatic-la-gi"
		})
	] }), /* @__PURE__ */ jsxs("main", {
		className: "max-w-4xl mx-auto px-5 py-16 bg-white mt-10 text-left font-serif",
		children: [/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "Article",
					headline: "Máy Cơ Automatic Là Gì? Nguyên Lý, Cấu Tạo & Lưu Ý Sử Dụng",
					description: "Máy cơ Automatic là gì? Giải thích nguyên lý rotor, cách hoạt động, ưu nhược điểm và lưu ý sử dụng đúng cách cho người mới.",
					author: {
						"@type": "Person",
						name: "Chuyên gia Horology"
					},
					publisher: {
						"@type": "Organization",
						name: "Your Watch Blog",
						logo: {
							"@type": "ImageObject",
							url: "https://yourdomain.com/logo.png"
						}
					},
					mainEntityOfPage: {
						"@type": "WebPage",
						"@id": "https://yourdomain.com/may-co-automatic-la-gi"
					}
				}, {
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: "Máy cơ Automatic có cần thay pin không?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Không. Đây chính là ưu điểm cốt lõi của đồng hồ cơ Automatic — bộ máy hoàn toàn không sử dụng pin hay bất kỳ linh kiện điện tử nào. Năng lượng được tạo ra từ chuyển động cổ tay thông qua rotor, tích trữ trong dây cót và giải phóng dần để đồng hồ hoạt động."
							}
						},
						{
							"@type": "Question",
							name: "Đồng hồ cơ Automatic có chạy chính xác không?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Chính xác, nhưng không bằng Quartz. Máy cơ Automatic phổ thông có sai số từ ±20 đến ±45 giây/ngày. Các máy cao cấp đạt chuẩn Chronometer (như Rolex, Omega) có thể giảm xuống ±2–5 giây/ngày. So sánh: đồng hồ Quartz chỉ sai ±15 giây/tháng. Với người dùng thông thường, sai số của máy cơ Automatic hoàn toàn chấp nhận được trong sinh hoạt hàng ngày."
							}
						},
						{
							"@type": "Question",
							name: "Nên đeo đồng hồ cơ Automatic bao nhiêu tiếng mỗi ngày?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Tối thiểu 8 tiếng/ngày để rotor tạo đủ năng lượng duy trì hoạt động. Hầu hết đồng hồ Automatic có trữ cót từ 40–48 giờ (một số máy cao cấp lên tới 70–120 giờ), nghĩa là nếu bạn tháo ra ban đêm, đồng hồ vẫn chạy đến sáng hôm sau mà không cần đeo liên tục."
							}
						},
						{
							"@type": "Question",
							name: "Đồng hồ cơ Automatic bao lâu cần bảo dưỡng một lần?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Khuyến nghị 3–5 năm/lần — bao gồm tháo máy, vệ sinh toàn bộ linh kiện, tra dầu bôi trơn mới và hiệu chỉnh lại độ chính xác. Chi phí bảo dưỡng đồng hồ Nhật tầm trung dao động từ 500.000 đến 1.500.000 đồng tại các trung tâm uy tín. Bỏ qua bảo dưỡng khiến dầu khô làm tăng ma sát, ảnh hưởng cả độ chính xác lẫn tuổi thọ bộ máy."
							}
						},
						{
							"@type": "Question",
							name: "Hacking Stop là gì và tại sao quan trọng?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Hacking Stop (hay Hacking Second) là tính năng dừng kim giây lại khi bạn kéo núm đồng hồ ra để chỉnh giờ. Tính năng này cho phép đặt giờ chính xác đến từng giây bằng cách đồng bộ kim giây về vị trí '00' rồi thả núm ra đúng lúc."
							}
						}
					]
				}]
			}) }
		}), /* @__PURE__ */ jsxs("article", { children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-16 border-b border-gray-900 pb-12",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-5 block",
						children: "Từ Điển Horology"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8",
						children: "Máy Cơ Automatic Là Gì? Giải Mã Trái Tim Cơ Khí Đích Thực"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center text-xs text-gray-500 font-sans tracking-widest uppercase",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-bold text-gray-900",
								children: "Ban Biên Tập ROVIAN"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mx-3",
								children: "|"
							}),
							/* @__PURE__ */ jsx("time", {
								dateTime: "2026-04-14",
								children: "Kiến thức chuyên sâu"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed mb-16",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none",
						children: "Trong thế giới của những bánh răng và con lắc, máy cơ Automatic (hay đồng hồ cơ tự động) được coi là biểu tượng nguyên thủy và thuần túy nhất của nghệ thuật chế tác đồng hồ. Nó là loại cỗ máy hoạt động hoàn toàn bằng năng lượng cơ học — không dùng pin, không chứa linh kiện điện tử và không cần bạn phải thao tác lên dây cót thủ công mỗi ngày."
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Thay vào đó, một bộ phận kim loại hình bán nguyệt tinh xảo gọi là",
						" ",
						/* @__PURE__ */ jsx("strong", { children: "rotor" }),
						"sẽ tự động xoay theo từng nhịp chuyển động nơi cổ tay người đeo, từ đó nạp năng lượng liên tục cho đồng hồ. Đây chính là chuẩn mực của kỹ thuật đồng hồ học (horology) hiện đại."
					] }),
					/* @__PURE__ */ jsx("blockquote", {
						className: "border-l-4 border-gray-900 pl-8 py-3 my-12 text-2xl font-serif italic text-gray-700 bg-gray-50",
						children: "Công thức cốt lõi: Automatic = Bộ máy cơ khí truyền thống + Rotor tự động lên cót + Năng lượng từ chính bạn."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "1. Định Nghĩa & Sự Khác Biệt"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Trong ngôn ngữ chuyên ngành, thuật ngữ \"Automatic\" ám chỉ cơ chế tự động nạp cót mà không yêu cầu sự can thiệp thủ công từ người dùng. Sự nâng cấp này tạo ra lằn ranh rõ rệt với",
						" ",
						/* @__PURE__ */ jsx("strong", { children: "đồng hồ cơ thủ công (Hand-winding / Manual)" }),
						", nơi mà người đeo phải duy trì thói quen vặn núm lên cót theo chu kỳ."
					] }),
					/* @__PURE__ */ jsx("p", { children: "Một cỗ máy Automatic thông thường được lắp ráp từ 100 đến 300 chi tiết vi cơ khí. Ở những tuyệt tác \"Haute Horlogerie\" mang các tính năng siêu phức tạp (Grand Complication), con số này có thể lên đến hàng ngàn. Tất cả đều giao ngàm và chuyển động với sai số được tính bằng phần trăm milimet." }),
					/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-gray-900 font-sans uppercase tracking-wide mt-12 mb-4",
						children: "Sự Đối Lập Giữa Automatic và Quartz"
					}),
					/* @__PURE__ */ jsx("p", { children: "Căn nguyên của sự khác biệt nằm ở nguồn năng lượng và cách đong đếm thời gian:" }),
					/* @__PURE__ */ jsxs("ul", {
						className: "list-none pl-0 space-y-4 my-6 font-sans text-base",
						children: [/* @__PURE__ */ jsxs("li", {
							className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 block mb-1",
								children: "Đồng hồ Quartz:"
							}), "Dùng pin để kích thích tinh thể thạch anh dao động. Đạt độ chính xác tuyệt đối (sai số ±15 giây/tháng) nhưng thiếu đi giá trị cơ khí nghệ thuật."]
						}), /* @__PURE__ */ jsxs("li", {
							className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 block mb-1",
								children: "Đồng hồ Automatic:"
							}), "Sống bằng năng lượng dây cót. Sai số nằm trong khoảng ±15 đến ±45 giây/ngày tùy mức độ hoàn thiện, nhưng mang trong mình linh hồn của lịch sử chế tác."]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "border border-gray-200 p-6 my-12 font-sans bg-white not-prose",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-bold text-gray-900 uppercase tracking-widest text-xs mb-2 block",
							children: "Nghiên Cứu Chuyên Sâu"
						}), /* @__PURE__ */ jsx("a", {
							href: "/dong-ho-quartz-la-gi",
							className: "text-gray-600 hover:text-gray-900 font-medium underline underline-offset-4",
							children: "Đồng hồ Quartz là gì? Bản đối chiếu chi tiết với cỗ máy Automatic"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "2. Chu Trình Năng Lượng Chuyển Động"
					}),
					/* @__PURE__ */ jsx("p", { children: "Để dễ hình dung nhất, hãy mường tượng về một dây lò xo bị cuộn chặt lại, và sức mạnh bung tỏa từ từ của nó khi giãn ra chính là thứ vận hành các kim đồng hồ. Chu trình này diễn ra khép kín qua 4 giai đoạn:" }),
					/* @__PURE__ */ jsxs("ol", {
						className: "list-decimal pl-6 space-y-6 my-10 marker:font-sans marker:font-bold marker:text-gray-400",
						children: [
							/* @__PURE__ */ jsxs("li", { children: [
								/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900 font-sans tracking-wide",
									children: "NẠP NĂNG LƯỢNG:"
								}),
								"Quán tính từ cử động cổ tay khiến",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "font-bold",
									children: "Rotor"
								}),
								" (bánh đà hình bán nguyệt) xoay quanh trục trung tâm."
							] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 font-sans tracking-wide",
								children: "TÍCH TRỮ TẠI HỘP CÓT:"
							}), "Chuyển động của rotor sẽ cuộn chặt dây cót (Mainspring) nằm bên trong hộp cót. Một chiếc đồng hồ đầy cót có thể dự trữ năng lượng chạy liên tục từ 40 đến 80 giờ."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 font-sans tracking-wide",
								children: "ĐIỀU TIẾT QUA BỘ THOÁT:"
							}), "Bộ thoát (Escapement) đóng vai trò như một van khóa tinh vi, giải phóng năng lượng từ hộp cót theo từng nhịp ngắt quãng đều đặn (tiếng \"tích tắc\" bạn thường nghe)."] }),
							/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 font-sans tracking-wide",
								children: "HIỂN THỊ THỜI GIAN:"
							}), "Năng lượng được kiểm soát này tiếp tục truyền qua hệ thống bánh răng (Gear Train), chuyển hóa thành vòng quay của kim giây, kim phút và kim giờ."] })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "border border-gray-200 p-6 my-12 font-sans bg-white not-prose",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-bold text-gray-900 uppercase tracking-widest text-xs mb-2 block",
							children: "Nghiên Cứu Chuyên Sâu"
						}), /* @__PURE__ */ jsx("a", {
							href: "/cac-bo-phan-dong-ho",
							className: "text-gray-600 hover:text-gray-900 font-medium underline underline-offset-4",
							children: "Giải phẫu giải phẫu học chi tiết các bộ phận của đồng hồ đeo tay"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-24",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2",
					children: "3. Đánh Giá: Tinh Hoa & Chấp Nhận"
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-12 font-sans mb-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "border-t border-gray-900 pt-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold text-gray-900 uppercase tracking-widest mb-6",
							children: "Tinh Hoa Chế Tác"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "list-none pl-0 space-y-4 text-gray-900 text-base font-medium",
							children: [
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full",
									children: "Sống hoàn toàn bằng năng lượng cơ học, loại bỏ sự phụ thuộc vào pin."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full",
									children: "Sở hữu kim trôi (sweeping second hand) mượt mà lướt trên mặt số, không bị giật từng nhịp như Quartz."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full",
									children: "Giá trị sưu tầm, kế thừa và tính nghệ thuật vô giá."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full",
									children: "Độ bền vượt thời gian (có thể hoạt động hàng thập kỷ nếu được lau dầu đúng cách)."
								})
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "border-t border-gray-400 pt-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold text-gray-500 uppercase tracking-widest mb-6",
							children: "Giới Hạn Cần Chấp Nhận"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "list-none pl-0 space-y-4 text-gray-800 text-base",
							children: [
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full",
									children: "Độ chính xác không tuyệt đối (sai số tự nhiên từ vài giây đến vài chục giây mỗi ngày)."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full",
									children: "Cần sự tương tác: Sẽ ngừng hoạt động nếu không được đeo sau khi xả hết năng lượng trữ cót."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full",
									children: "Đòi hỏi chế độ bảo dưỡng (lau dầu, căn chỉnh) định kỳ mỗi 3–5 năm."
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2",
					children: "Hỏi – Đáp Từ Chuyên Gia"
				}), /* @__PURE__ */ jsxs("div", {
					className: "divide-y divide-gray-200 font-sans border-t border-b border-gray-900",
					children: [
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Máy cơ Automatic có cần thay pin không?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Không. Đây chính là nguyên lý cốt lõi của cỗ máy này. Không có pin, không có vi mạch. Năng lượng được tái tạo liên tục từ chính những chuyển động của bạn trong đời sống thường nhật."
							})]
						}),
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Nên đeo đồng hồ bao nhiêu tiếng mỗi ngày để không bị chết máy?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Khuyến nghị tối thiểu là 8 tiếng mỗi ngày đối với một người có mức độ vận động bình thường. Với thời lượng này, bộ cót sẽ được nạp đủ năng lượng (thường là 40 giờ trữ cót) để chiếc đồng hồ có thể tiếp tục hoạt động mượt mà khi bạn tháo ra đi ngủ vào ban đêm."
							})]
						}),
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Hacking Stop là gì và tại sao lại quan trọng?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Hacking Stop (Hacking Second) là cơ chế hãm bánh xe cân bằng, khiến kim giây dừng lại hoàn toàn khi bạn kéo núm vặn ra để chỉnh giờ. Tính năng này đóng vai trò quan trọng, cho phép bạn đồng bộ hóa thời gian chính xác đến từng giây với các nguồn tham chiếu (như đồng hồ nguyên tử hoặc smartphone)."
							})]
						}),
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Bỏ qua bảo dưỡng định kỳ có sao không?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Dầu bôi trơn trong đồng hồ cơ sẽ khô và biến chất sau khoảng 3–5 năm. Nếu không bảo dưỡng, sự ma sát giữa các bánh răng kim loại sẽ tăng lên, dẫn đến mài mòn linh kiện nghiêm trọng và làm sai lệch hoàn toàn khả năng đong đếm thời gian của cỗ máy."
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-16 pt-8 border-t border-gray-200 text-left",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-sans text-[10px] text-gray-400 uppercase tracking-wider mb-2",
					children: "— Thông tin từ Tòa soạn —"
				}), /* @__PURE__ */ jsx("p", {
					className: "font-sans text-xs text-gray-500 leading-relaxed max-w-md",
					children: "Tài liệu tham khảo chuyên ngành Horology (2025). ROVIAN là nhà phân phối và chia sẻ kiến thức chuẩn xác về nghệ thuật chế tác đồng hồ cao cấp."
				})]
			})
		] })]
	})] });
};
//#endregion
//#region src/pages/Article/Top5DongHoNamDuoi5Trieu.jsx
var Top5DongHoNamDuoi5Trieu = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: "Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025 – Đánh Giá Thực Tế | ROVIAN" }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Top 5 đồng hồ nam dress watch dưới 5 triệu 2025: tiêu chí rõ ràng, thông số thực tế, giá tham khảo. Chọn đúng ngay lần đầu."
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: "top đồng hồ nam dưới 5 triệu, đồng hồ nam dress watch, đồng hồ cơ Automatic, kính Sapphire, đồng hồ quartz, máy in-house, bộ máy Miyota, đồng hồ nam công sở"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: "article"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025 – Đánh Giá Thực Tế"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: "Khám phá top 5 mẫu đồng hồ nam công sở đáng tiền nhất phân khúc 5 triệu đồng..."
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: "https://yourdomain.com/images/top-5-dong-ho-nam-duoi-5-trieu.jpg"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: "https://yourdomain.com/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: "https://yourdomain.com/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025"
		})
	] }), /* @__PURE__ */ jsxs("main", {
		className: "max-w-4xl mx-auto px-5 py-16 bg-white mt-10 text-left font-serif",
		children: [/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify([
				{
					"@context": "https://schema.org",
					"@type": "Article",
					headline: "Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025 – Đánh Giá Thực Tế",
					description: "Top 5 đồng hồ nam dress watch dưới 5 triệu 2025: tiêu chí rõ ràng, thông số thực tế, giá tham khảo. Chọn đúng ngay lần đầu.",
					author: {
						"@type": "Person",
						name: "Chuyên gia Horology"
					},
					publisher: {
						"@type": "Organization",
						name: "ROVIAN",
						logo: {
							"@type": "ImageObject",
							url: "https://yourdomain.com/logo.png"
						}
					},
					mainEntityOfPage: {
						"@type": "WebPage",
						"@id": "https://yourdomain.com/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025"
					}
				},
				{
					"@context": "https://schema.org",
					"@type": "ItemList",
					name: "Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Orient Bambino FAC00009W0"
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Seiko Presage SRPB43J1 Cocktail Time"
						},
						{
							"@type": "ListItem",
							position: 3,
							name: "Citizen BI5010-59A"
						},
						{
							"@type": "ListItem",
							position: 4,
							name: "SRWATCH Timepiece TE SG1077.1101TE"
						},
						{
							"@type": "ListItem",
							position: 5,
							name: "Casio MTP-V006L"
						}
					]
				},
				{
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: "Đồng hồ nam dưới 5 triệu có đáng mua không, hay nên để dành mua đồng hồ đắt hơn?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Hoàn toàn đáng mua — nhưng với điều kiện bạn chọn đúng. Ở phân khúc 2–5 triệu, bạn đã tiếp cận được kính Sapphire chống trầy, vỏ thép 316L chống ăn mòn và bộ máy Nhật Bản bền bỉ. Nâng lên 10–15 triệu, bạn chủ yếu được thêm thương hiệu, độ hoàn thiện tinh xảo hơn. Với người mua lần đầu, tầm 3–5 triệu là vùng 'sweet spot' tốt nhất."
							}
						},
						{
							"@type": "Question",
							name: "Nên chọn đồng hồ cơ (Automatic) hay đồng hồ Quartz trong tầm dưới 5 triệu?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Phụ thuộc vào lối sống. Đồng hồ cơ Automatic phù hợp nếu bạn đeo hàng ngày, thích cảm giác 'bộ máy sống' và chấp nhận bảo dưỡng. Đồng hồ Quartz phù hợp nếu bạn cần độ chính xác cao, không muốn bảo dưỡng phức tạp, hoặc ngân sách hạn chế."
							}
						},
						{
							"@type": "Question",
							name: "Mua đồng hồ nam dưới 5 triệu ở đâu để chắc chắn là hàng chính hãng?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Ưu tiên theo thứ tự: (1) Website/showroom chính thức của hãng; (2) Các chuỗi bán lẻ ủy quyền uy tín; (3) Gian hàng chính hãng được xác nhận trên Shopee/Tiki/Lazada. Tránh mua từ cá nhân không rõ nguồn gốc giá rẻ bất thường."
							}
						},
						{
							"@type": "Question",
							name: "Kính Sapphire có thực sự quan trọng không, hay chỉ là marketing?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Quan trọng thật. Kính Sapphire có độ cứng 9/10, gần như không thể xước trong sinh hoạt. Sau 1–2 năm, Sapphire vẫn trong suốt trong khi kính khoáng sẽ xước dăm. Nếu ngân sách cho phép, ưu tiên chọn mẫu có Sapphire."
							}
						}
					]
				}
			]) }
		}), /* @__PURE__ */ jsxs("article", { children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-16 border-b border-gray-900 pb-12",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-5 block",
						children: "Bảng Xếp Hạng Tuyển Chọn"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8",
						children: "Top 5 Đồng Hồ Nam Dưới 5 Triệu: Đầu Tư Xứng Đáng Từ Lần Đầu Tiên"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center text-xs text-gray-500 font-sans tracking-widest uppercase",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-bold text-gray-900",
								children: "Ban Biên Tập ROVIAN"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mx-3",
								children: "|"
							}),
							/* @__PURE__ */ jsx("time", {
								dateTime: "2026-04-14",
								children: "Danh sách năm 2025"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed mb-16",
				children: [/* @__PURE__ */ jsx("p", {
					className: "first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none",
					children: "Phân khúc đồng hồ nam dưới 5 triệu đồng tại Việt Nam luôn là một ma trận với hàng trăm sự lựa chọn — nhưng không phải tất cả đều là những cỗ máy đáng để bạn đặt lên cổ tay. Để rút gọn hành trình tìm kiếm, ROVIAN đã tinh chọn danh sách này dựa trên những tiêu chuẩn chế tác cốt lõi."
				}), /* @__PURE__ */ jsx("p", { children: "Mỗi cái tên xuất hiện dưới đây phải đáp ứng tối thiểu 5 bộ tiêu chí khắt khe: vật liệu khung vỏ nguyên khối (thép 316L), chất lượng mặt kính bảo vệ (ưu tiên Sapphire hoặc Hardlex cong), nền tảng bộ máy tin cậy (Quartz Nhật Bản hoặc Automatic in-house), tiêu chuẩn kháng nước thực dụng và cuối cùng là tính thẩm mỹ trường tồn của một chiếc Dress Watch đích thực." })]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "space-y-24 font-serif text-gray-900",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "group",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline mb-6 border-b border-gray-200 pb-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-4xl md:text-5xl font-bold text-gray-300 mr-4 font-sans leading-none tracking-tighter",
									children: "01"
								}), /* @__PURE__ */ jsx("h2", {
									className: "text-3xl md:text-4xl font-bold leading-tight",
									children: "Orient Bambino FAC00009W0"
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-xl text-gray-700 leading-relaxed mb-6",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900",
									children: "Dấu ấn chế tác:"
								}), " Nếu chỉ được phép gọi tên một huyền thoại duy nhất trong danh sách này, Bambino chính là câu trả lời. Ra mắt từ 2012, đây là mẫu đồng hồ cơ hiếm hoi trong tầm giá sở hữu bộ máy in-house tự động. Mặt kính siêu cong vòm (domed crystal) tạo nên hiệu ứng chiều sâu thị giác mang đậm dấu ấn hoài cổ."]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-sans text-sm tracking-wide text-gray-600 mb-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Trái Tim"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Automatic Cal.F6724"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kính & Vỏ"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Domed Mineral | Thép 40.5mm"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kháng Nước"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "5 ATM"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Đầu Tư"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-bold text-gray-900",
											children: "~ 3.5M – 4.5M VNĐ"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "group",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline mb-6 border-b border-gray-200 pb-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-4xl md:text-5xl font-bold text-gray-300 mr-4 font-sans leading-none tracking-tighter",
									children: "02"
								}), /* @__PURE__ */ jsx("h2", {
									className: "text-3xl md:text-4xl font-bold leading-tight",
									children: "Seiko Presage SRPB43J1 \"Cocktail Time\""
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-xl text-gray-700 leading-relaxed mb-6",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900",
									children: "Dấu ấn chế tác:"
								}), " Sinh ra từ dòng Presage danh giá, SRPB43J1 mê hoặc giới mộ điệu bằng mặt số xà cừ tỏa sáng đa sắc như một ly cocktail pha chế tinh xảo. Sự kết hợp giữa nghệ thuật hoàn thiện mặt số và độ bền bỉ của tinh thể Sapphire biến thiết kế này thành chuẩn mực của sự sang trọng."]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-sans text-sm tracking-wide text-gray-600 mb-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Trái Tim"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Automatic Cal. 4R35"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kính & Vỏ"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Sapphire | Thép 40.5mm"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kháng Nước"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "10 ATM"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Đầu Tư"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-bold text-gray-900",
											children: "~ 4.0M – 5.0M VNĐ"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "group",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline mb-6 border-b border-gray-200 pb-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-4xl md:text-5xl font-bold text-gray-300 mr-4 font-sans leading-none tracking-tighter",
									children: "03"
								}), /* @__PURE__ */ jsx("h2", {
									className: "text-3xl md:text-4xl font-bold leading-tight",
									children: "Citizen BI5010-59A"
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-xl text-gray-700 leading-relaxed mb-6",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900",
									children: "Dấu ấn chế tác:"
								}), " Lựa chọn tối ưu cho những khối óc yêu cầu sự chính xác tuyệt đối. Vận hành bởi cỗ máy thạch anh Miyota quyền lực của Citizen, mẫu đồng hồ giới hạn mức sai số chỉ ở ±15 giây mỗi tháng. Thiết kế mặt trắng kết hợp vành bezel thép đánh bóng thể hiện vẻ đẹp \"lịch lãm không cần cố gắng\"."]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-sans text-sm tracking-wide text-gray-600 mb-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Trái Tim"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Quartz Miyota"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kính & Vỏ"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Mineral | Thép siêu mỏng 9mm"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kháng Nước"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "5 ATM"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Đầu Tư"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-bold text-gray-900",
											children: "~ 2.5M – 3.5M VNĐ"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "group",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline mb-6 border-b border-gray-200 pb-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-4xl md:text-5xl font-bold text-gray-300 mr-4 font-sans leading-none tracking-tighter",
									children: "04"
								}), /* @__PURE__ */ jsx("h2", {
									className: "text-3xl md:text-4xl font-bold leading-tight",
									children: "SRWATCH Timepiece TE SG1077.1101TE"
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-xl text-gray-700 leading-relaxed mb-6",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900",
									children: "Dấu ấn chế tác:"
								}), " Không thiết kế nào trong danh sách này đánh bại được SRWATCH ở tỷ lệ chất liệu trên giá tiền. Việc hãng trang bị mặt kính Sapphire nguyên khối và thân vỏ thép 316L cho một tạo tác dưới 3 triệu đồng đã biến SG1077 trở thành món đầu tư cực kỳ sắc sảo dành riêng cho giới văn phòng hiện đại."]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-sans text-sm tracking-wide text-gray-600 mb-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Trái Tim"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Quartz Miyota"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kính & Vỏ"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Sapphire | Thép 316L 39mm"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kháng Nước"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "5 ATM"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Đầu Tư"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-bold text-gray-900",
											children: "~ 1.8M – 2.5M VNĐ"
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "group",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline mb-6 border-b border-gray-200 pb-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-4xl md:text-5xl font-bold text-gray-300 mr-4 font-sans leading-none tracking-tighter",
									children: "05"
								}), /* @__PURE__ */ jsx("h2", {
									className: "text-3xl md:text-4xl font-bold leading-tight",
									children: "Casio MTP-V006L"
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-xl text-gray-700 leading-relaxed mb-6",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900",
									children: "Dấu ấn chế tác:"
								}), " Bản tuyên ngôn của sự bền bỉ với mức giá không tưởng. Lấy cảm hứng từ những cỗ máy thời gian cổ điển phương Tây, mặt số cọc La Mã kết hợp cùng tính năng lịch thứ/ngày song ngữ tạo nên một vẻ đẹp bất hủ. Trọng lượng siêu nhẹ chỉ 46g mang lại cảm giác lên tay tựa như không."]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-sans text-sm tracking-wide text-gray-600 mb-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Trái Tim"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Quartz MIYOTA-1333"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kính & Vỏ"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "Mineral | Thép Mạ Crôm"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Kháng Nước"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-medium text-gray-900",
											children: "3 ATM"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between border-b border-gray-100 pb-2",
										children: [/* @__PURE__ */ jsx("span", {
											className: "uppercase text-gray-400 font-bold",
											children: "Đầu Tư"
										}), /* @__PURE__ */ jsx("span", {
											className: "text-right font-bold text-gray-900",
											children: "~ 700K – 900K VNĐ"
										})]
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-24",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2",
					children: "Ma Trận Lựa Chọn Nhanh"
				}), /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto font-sans",
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full text-left text-sm border-collapse",
						children: [/* @__PURE__ */ jsx("thead", {
							className: "border-b-2 border-gray-900 text-gray-900 uppercase tracking-widest text-xs",
							children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									className: "py-4 pr-4 font-bold",
									children: "Danh Tính"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-4 px-4 font-bold",
									children: "Phân Loại Máy"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-4 px-4 font-bold",
									children: "Mặt Kính"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-4 px-4 font-bold",
									children: "Bảo Vệ Nước"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-4 pl-4 font-bold",
									children: "Ngân Sách"
								})
							] })
						}), /* @__PURE__ */ jsxs("tbody", {
							className: "divide-y divide-gray-200 text-gray-700",
							children: [
								/* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-gray-50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "Orient Bambino"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Automatic"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Domed Mineral"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "5 ATM"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4 font-bold text-gray-900",
											children: "~ 4 Triệu"
										})
									]
								}),
								/* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-gray-50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "Seiko Presage"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Automatic"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Sapphire"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "10 ATM"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4 font-bold text-gray-900",
											children: "~ 5 Triệu"
										})
									]
								}),
								/* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-gray-50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "Citizen BI5010"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Quartz"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Mineral"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "5 ATM"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4 font-bold text-gray-900",
											children: "~ 3 Triệu"
										})
									]
								}),
								/* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-gray-50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "SRWATCH SG1077"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Quartz"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Sapphire"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "5 ATM"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4 font-bold text-gray-900",
											children: "~ 2 Triệu"
										})
									]
								}),
								/* @__PURE__ */ jsxs("tr", {
									className: "hover:bg-gray-50 transition-colors",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "Casio MTP-V006L"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Quartz"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Mineral"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "3 ATM"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4 font-bold text-gray-900",
											children: "~ 800 Ngàn"
										})
									]
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2",
					children: "Giải Đáp Từ Chuyên Gia"
				}), /* @__PURE__ */ jsxs("div", {
					className: "divide-y divide-gray-200 font-sans border-t border-b border-gray-900",
					children: [
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Ngân sách 5 triệu liệu có thỏa hiệp về chất lượng?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Hoàn toàn không, nếu bạn tinh tế trong việc chọn lọc. Ở phân khúc 2–5 triệu, bạn đã tiếp cận được với những đặc tính cơ bản của đồng hồ cao cấp: tinh thể Sapphire chống xước, thép 316L phẫu thuật và bộ máy Nhật Bản. Khoảng giá từ 10–15 triệu chủ yếu là chi phí nâng tầm thương hiệu và độ hoàn thiện thủ công vi mô."
							})]
						}),
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Lựa chọn cỗ máy Cơ Học (Automatic) hay Tinh Thể Thạch Anh (Quartz)?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Điều này phụ thuộc vào phong cách sống của bạn. Máy Automatic là một tác phẩm cơ khí cần sự tương tác (đeo liên tục, lau dầu định kỳ), mang lại giá trị cảm xúc. Máy Quartz là biểu tượng của sự thực dụng: vận hành bền bỉ, chính xác tuyệt đối và gần như không cần bảo dưỡng."
							})]
						}),
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Sapphire có thực sự là một tiêu chí bắt buộc?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Trong kỹ thuật chế tác, Sapphire đạt điểm 9/10 trên thang độ cứng Mohs, chỉ khuất phục trước kim cương. Điều này có nghĩa là mặt số của bạn sẽ giữ nguyên độ trong suốt như ngày đầu tiên sau nhiều năm sử dụng, trong khi kính khoáng (Mineral) sẽ mờ đục bởi các vết xước dăm."
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-16 pt-8 border-t border-gray-200 text-left",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-sans text-[10px] text-gray-400 uppercase tracking-wider mb-2",
					children: "— Thông tin từ Tòa soạn —"
				}), /* @__PURE__ */ jsx("p", {
					className: "font-sans text-xs text-gray-500 leading-relaxed",
					children: "Mức giá niêm yết trong bài viết mang tính tham khảo và được cập nhật vào Quý 1/2025. Vui lòng kiểm tra trực tiếp tại các nhà phân phối ủy quyền để nhận thông tin ưu đãi hiện hành."
				})]
			})
		] })]
	})] });
};
//#endregion
//#region src/pages/Article/CachChonDongHoNam.jsx
var CachChonDongHoNam = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: "Cách Chọn Đồng Hồ Nam Phù Hợp – Hướng Dẫn Từ A–Z (2025) | ROVIAN" }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Chưa biết cách chọn đồng hồ nam? Hướng dẫn từ A–Z: nhu cầu, ngân sách, phong cách, thương hiệu & nơi mua uy tín tại VN."
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: "cách chọn đồng hồ nam, đồng hồ nam tầm trung, mua đồng hồ nam lần đầu, thương hiệu đồng hồ nam uy tín, đồng hồ nam phong cách công sở, nên mua đồng hồ nam ở đâu chính hãng"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: "article"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Cách Chọn Đồng Hồ Nam Phù Hợp – Hướng Dẫn Từ A–Z (2025)"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: "Chưa biết cách chọn đồng hồ nam? Hướng dẫn từ A–Z: nhu cầu, ngân sách, phong cách, thương hiệu & nơi mua uy tín."
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: "https://yourdomain.com/images/cach-chon-dong-ho-nam.jpg"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: "https://yourdomain.com/kien-thuc/cach-chon-dong-ho-nam"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: "https://yourdomain.com/kien-thuc/cach-chon-dong-ho-nam"
		})
	] }), /* @__PURE__ */ jsxs("main", {
		className: "max-w-4xl mx-auto px-5 py-16 bg-white mt-10 text-left font-serif",
		children: [/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify([{
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Cách Chọn Đồng Hồ Nam Phù Hợp – Hướng Dẫn Từ A–Z (2025)",
				description: "Chưa biết cách chọn đồng hồ nam? Hướng dẫn từ A–Z: nhu cầu, ngân sách, phong cách, thương hiệu & nơi mua uy tín tại VN.",
				author: {
					"@type": "Person",
					name: "Chuyên gia Horology"
				},
				publisher: {
					"@type": "Organization",
					name: "ROVIAN",
					logo: {
						"@type": "ImageObject",
						url: "https://yourdomain.com/logo.png"
					}
				},
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": "https://yourdomain.com/kien-thuc/cach-chon-dong-ho-nam"
				}
			}, {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: "Cách chọn đồng hồ nam phù hợp với phong cách công sở là gì?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Với môi trường công sở và lịch sự, ưu tiên chọn đồng hồ có mặt tròn hoặc hình trứng, kích thước 38–42mm, dây da nâu/đen hoặc dây kim loại đơn sắc. Tránh đồng hồ có bezel to, nhiều nút bấm hoặc màu sắc sặc sỡ. Orient Bambino, Casio MTP hoặc SRWATCH Timepiece TE đều là gợi ý phù hợp ở nhiều mức ngân sách."
						}
					},
					{
						"@type": "Question",
						name: "Đồng hồ nam máy cơ hay máy Quartz tốt hơn cho người mới?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Với người mua đồng hồ nam lần đầu, máy Quartz thường là lựa chọn thực dụng hơn: không cần lên cót, ít hỏng hóc, giá thành thấp hơn và độ chính xác cao hơn trong cùng tầm giá. Máy cơ (Automatic) phù hợp nếu bạn đã có hứng thú với cơ khí đồng hồ và sẵn sàng bảo dưỡng định kỳ mỗi 3–5 năm. Ở tầm 3–5 triệu, một chiếc Seiko 5 Automatic là ngoại lệ đáng cân nhắc vì chất lượng máy cơ vượt trội so với giá bán."
						}
					},
					{
						"@type": "Question",
						name: "Mua đồng hồ nam online có an toàn không? Làm sao tránh hàng nhái?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Mua online hoàn toàn an toàn nếu bạn chọn đúng kênh. Ưu tiên mua từ: website chính hãng của thương hiệu, gian hàng chính hãng được xác nhận trên Shopee/Tiki/Lazada, hoặc các chuỗi bán lẻ uy tín như Hải Triều, WatchStore, Xwatch... Dấu hiệu cảnh báo hàng nhái: giá thấp hơn thị trường 30–50%, người bán không cho xem tem bảo hành, không có hóa đơn VAT, và không chấp nhận đổi trả."
						}
					}
				]
			}]) }
		}), /* @__PURE__ */ jsxs("article", { children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-16 border-b border-gray-900 pb-12",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-5 block",
						children: "Cẩm Nang Định Hình Phong Cách"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8",
						children: "Nghệ Thuật Chọn Đồng Hồ Nam: Hướng Dẫn Từ A–Z Cho Lần Mua Đầu Tiên"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center text-xs text-gray-500 font-sans tracking-widest uppercase",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-bold text-gray-900",
								children: "Ban Biên Tập ROVIAN"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mx-3",
								children: "|"
							}),
							/* @__PURE__ */ jsx("time", {
								dateTime: "2026-04-14",
								children: "Cẩm nang 2025"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed mb-16",
				children: [/* @__PURE__ */ jsx("p", {
					className: "first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none",
					children: "Bạn đang đứng trước một thế giới của bánh răng, con lắc và tinh thể, với hàng chục cái tên như Seiko, Citizen, Casio, Orient… ngợp trong thông số. Bạn lướt qua hàng trăm thiết kế nhưng vẫn ngần ngại chưa dám đưa ra quyết định vì sợ chọn sai phong cách hoặc lãng phí ngân sách?"
				}), /* @__PURE__ */ jsx("p", { children: "Đừng lo lắng. Đây là chướng ngại vật mà hầu hết mọi người đàn ông khi chạm ngõ thế giới cỗ máy thời gian đều phải vượt qua. Bản thảo dưới đây không chỉ là một bài viết tư vấn, nó là một lộ trình được thiết kế tinh gọn — từ việc thấu hiểu bản thân thực sự cần gì, đến nghệ thuật giải mã giá trị của từng thương hiệu." })]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "1. Khởi Điểm: Xác Định Mục Đích"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Trước khi bị dẫn dắt bởi tên tuổi thương hiệu hay màu sắc mặt số, hãy tự hỏi:",
						/* @__PURE__ */ jsx("em", { children: "\"Chiếc đồng hồ này sẽ đồng hành cùng mình ở đâu?\"" }),
						". Mục đích sử dụng chiếm 50% sự thành bại trong việc định hình phong cách cá nhân của bạn."
					] }),
					/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-gray-900 font-sans uppercase tracking-wide mt-12 mb-4",
						children: "Môi Trường Công Sở (Dress Watch)"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Không gian chuyên nghiệp yêu cầu sự tinh tế chứ không phải phô trương. Một mặt số tròn tối giản, độ mỏng vừa phải để trượt nhẹ dưới tay áo sơ mi, đi kèm dây da hoặc kim loại mắt nhỏ là quy chuẩn. Kích thước an toàn nhất luôn nằm trong khoảng 38–42mm.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-sm font-sans text-gray-500 uppercase tracking-wider block mt-3 font-bold",
							children: "Đại diện kinh điển: Orient Bambino, Casio MTP-V006."
						})
					] }),
					/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-gray-900 font-sans uppercase tracking-wide mt-12 mb-4",
						children: "Hoạt Động Vận Động (Sport Watch)"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Dành cho những tâm hồn tự do và lối sống xê dịch. Khung vỏ nguyên khối chống va đập, khả năng kháng nước tối thiểu 10ATM, dạ quang sáng rõ và dây đeo bằng cao su hoặc NATO là những yếu tố không thể thỏa hiệp.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-sm font-sans text-gray-500 uppercase tracking-wider block mt-3 font-bold",
							children: "Đại diện kinh điển: Hệ sinh thái Casio G-Shock."
						})
					] }),
					/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-gray-900 font-sans uppercase tracking-wide mt-12 mb-4",
						children: "Nghệ Thuật Tặng Quà"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"Khi chiếc đồng hồ mang ý nghĩa biểu tượng thay lời muốn nói, hãy ưu tiên các thiết kế trung tính, bảng màu an toàn (mặt trắng/đen/xanh navy) và đến từ những nhà chế tác có bề dày lịch sử để tôn vinh sự trân trọng.",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-sm font-sans text-gray-500 uppercase tracking-wider block mt-3 font-bold",
							children: "Đại diện kinh điển: Seiko 5 Sports."
						})
					] })
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "2. Giải Mã Phân Khúc Ngân Sách"
					}),
					/* @__PURE__ */ jsx("p", { children: "Giá trị của một chiếc đồng hồ không nằm ở số số 0 trên hóa đơn, mà nằm ở tỉ lệ thuận giữa số tiền bạn bỏ ra và công năng vật liệu bạn nhận lại." }),
					/* @__PURE__ */ jsxs("ul", {
						className: "list-none pl-0 space-y-8 my-10 font-sans text-base",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900 uppercase tracking-wide block mb-1",
									children: "Dưới 1.5 Triệu Đồng (Phân khúc cơ bản)"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-gray-600",
									children: "Ưu tiên tính ứng dụng hàng ngày. Vật liệu chế tác thường dừng ở mức kính khoáng (Mineral) và vỏ thép hợp kim cơ bản."
								})]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900 uppercase tracking-wide block mb-1",
									children: "1.5 – 5.0 Triệu Đồng (Phân khúc tối ưu)"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-gray-600",
									children: "Lãnh địa \"vàng\" của thị trường Việt Nam. Bạn dễ dàng sở hữu tinh thể Sapphire chống xước, thép phẫu thuật 316L và cỗ máy Nhật Bản bền bỉ."
								})]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
								children: [/* @__PURE__ */ jsx("strong", {
									className: "text-gray-900 uppercase tracking-wide block mb-1",
									children: "5.0 – 15.0 Triệu Đồng (Cao cấp phổ thông)"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-gray-600",
									children: "Bắt đầu chạm đến các bộ máy cơ học tinh xảo hơn, nghệ thuật hoàn thiện mặt số phức tạp (Guilloché, Sunburst) và vật liệu Titanium."
								})]
							})
						]
					}),
					/* @__PURE__ */ jsx("blockquote", {
						className: "border-l-4 border-gray-900 pl-8 py-2 text-xl font-serif italic text-gray-700",
						children: "Ghi chú từ chuyên gia: Nếu đây là lần chạm ngõ đầu tiên, hãy giới hạn ngân sách ở khoảng 1.5 đến 4 triệu đồng để trải nghiệm và định hình phong cách cá nhân trước khi đưa ra những quyết định đầu tư lớn hơn."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-24",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2",
						children: "3. Tỷ Lệ Vàng Trên Cổ Tay"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xl text-gray-800 leading-relaxed mb-10 font-serif",
						children: "Chu vi cổ tay trung bình của nam giới Việt Nam dao động trong khoảng 16cm đến 19cm. Dựa vào đó, một chiếc đồng hồ có đường kính mặt số từ 38mm đến 42mm được xem là chuẩn mực an toàn nhất."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-8 font-sans",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "border-t border-gray-300 pt-6",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",
									children: "Chu Vi < 17cm"
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-3xl font-light text-gray-900",
									children: [
										"36",
										/* @__PURE__ */ jsx("span", {
											className: "text-lg",
											children: "mm"
										}),
										" — 39",
										/* @__PURE__ */ jsx("span", {
											className: "text-lg",
											children: "mm"
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-t-2 border-gray-900 pt-6",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "block text-xs font-bold text-gray-900 uppercase tracking-widest mb-3",
										children: "Chu Vi 17 – 18.5cm"
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "text-3xl font-bold text-gray-900",
										children: [
											"39",
											/* @__PURE__ */ jsx("span", {
												className: "text-lg font-normal",
												children: "mm"
											}),
											" — 42",
											/* @__PURE__ */ jsx("span", {
												className: "text-lg font-normal",
												children: "mm"
											})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-gray-500 mt-2 italic",
										children: "Kích thước phổ quát nhất"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-t border-gray-300 pt-6",
								children: [/* @__PURE__ */ jsx("span", {
									className: "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",
									children: "Chu Vi > 18.5cm"
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-3xl font-light text-gray-900",
									children: [
										"42",
										/* @__PURE__ */ jsx("span", {
											className: "text-lg",
											children: "mm"
										}),
										" — 45",
										/* @__PURE__ */ jsx("span", {
											className: "text-lg",
											children: "mm"
										})
									]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-24",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2",
					children: "4. Danh Viện Thương Hiệu"
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid md:grid-cols-2 gap-12 font-sans",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 inline-block pb-2 mb-4",
							children: "Đế Chế Casio"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-base text-gray-600 leading-relaxed font-serif",
							children: "Kẻ thống trị tuyệt đối phân khúc dưới 2 triệu. Dòng G-Shock đại diện cho sự bất khả chiến bại về độ bền cơ học, trong khi dòng MTP mang đến sự thanh lịch với mức chi phí tối giản nhất."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 inline-block pb-2 mb-4",
							children: "Di Sản Seiko"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-base text-gray-600 leading-relaxed font-serif",
							children: "Hơn 140 năm lịch sử chế tác. Tỏa sáng rực rỡ nhất ở phân khúc từ 3 đến 6 triệu với các thiết kế huyền thoại toàn cầu như Seiko 5 Sports hay phong cách quân đội bụi bặm."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 inline-block pb-2 mb-4",
							children: "Tuyệt Tác Orient"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-base text-gray-600 leading-relaxed font-serif",
							children: "Nhà tiên phong mang cỗ máy Automatic in-house xuống phân khúc dưới 5 triệu. Dòng Orient Bambino luôn giữ vững vị trí độc tôn trong thế giới Dress Watch cổ điển."
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 inline-block pb-2 mb-4",
							children: "Công Nghệ Citizen"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-base text-gray-600 leading-relaxed font-serif",
							children: "Nổi bật với cỗ máy Eco-Drive hấp thụ ánh sáng độc quyền, biến định nghĩa \"thay pin định kỳ\" trở thành dĩ vãng, kết hợp cùng các thiết kế mang hơi hướng tương lai."
						})] })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-24",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2",
					children: "5. Bảng Đối Chiếu Nhanh"
				}), /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto font-sans",
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full text-left text-sm border-collapse",
						children: [/* @__PURE__ */ jsx("thead", {
							className: "border-b-2 border-gray-900 text-gray-900 uppercase tracking-widest text-xs",
							children: /* @__PURE__ */ jsxs("tr", { children: [
								/* @__PURE__ */ jsx("th", {
									className: "py-4 pr-4 font-bold",
									children: "Hạn Mức Ngân Sách"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-4 px-4 font-bold",
									children: "Nhu Cầu Tiêu Biểu"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-4 px-4 font-bold",
									children: "Thiết Kế Khuyên Dùng"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "py-4 pl-4 font-bold",
									children: "Giá Ước Tính"
								})
							] })
						}), /* @__PURE__ */ jsxs("tbody", {
							className: "divide-y divide-gray-200 text-gray-700",
							children: [
								/* @__PURE__ */ jsxs("tr", {
									className: "transition-colors hover:bg-gray-50",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "Dưới 1.5 Triệu"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Tối giản công sở, Sinh viên"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Casio MTP, SRWATCH Dây Da"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4",
											children: "700K – 1.5M"
										})
									]
								}),
								/* @__PURE__ */ jsxs("tr", {
									className: "transition-colors hover:bg-gray-50",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "1.5M – 3.0M"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Chống xước cao, Thực dụng"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Casio G-Shock, SRWATCH Sapphire"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4",
											children: "1.5M – 2.8M"
										})
									]
								}),
								/* @__PURE__ */ jsxs("tr", {
									className: "transition-colors hover:bg-gray-50",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "3.0M – 5.0M"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Cơ học cổ điển, Hoàn thiện tinh xảo"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Orient Bambino, Seiko 5"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4",
											children: "3.0M – 5.0M"
										})
									]
								}),
								/* @__PURE__ */ jsxs("tr", {
									className: "transition-colors hover:bg-gray-50",
									children: [
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pr-4 font-semibold text-gray-900",
											children: "Trên 10 Triệu"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Quà tặng di sản, Thụy Sĩ"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 px-4",
											children: "Tissot PRX, Longines Présence"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "py-5 pl-4",
											children: "10M – 30M"
										})
									]
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-24",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-10 border-b-2 border-gray-900 inline-block pb-2",
					children: "Giải Đáp Từ Chuyên Gia"
				}), /* @__PURE__ */ jsxs("div", {
					className: "divide-y divide-gray-200 font-sans border-t border-b border-gray-900",
					children: [/* @__PURE__ */ jsxs("details", {
						className: "group py-6 cursor-pointer",
						children: [/* @__PURE__ */ jsxs("summary", {
							className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
							children: ["Mua đồng hồ online: Rủi ro hay tiện lợi?", /* @__PURE__ */ jsx("span", {
								className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
								children: "+"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-4 text-base text-gray-600 leading-relaxed pr-8",
							children: "Sự tiện lợi luôn đi kèm với rủi ro nếu bạn chọn sai điểm đặt niềm tin. Việc mua online hoàn toàn an toàn khi giao dịch qua các website đại lý ủy quyền hoặc Mall chính hãng. Hãy loại trừ ngay các sản phẩm không đi kèm hóa đơn VAT, thẻ bảo hành mộc đỏ và các mức giá rẻ hơn 30% so với niêm yết toàn thị trường."
						})]
					}), /* @__PURE__ */ jsxs("details", {
						className: "group py-6 cursor-pointer",
						children: [/* @__PURE__ */ jsxs("summary", {
							className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
							children: ["Cuộc chiến giữa cỗ máy Cơ (Automatic) và Pin (Quartz)?", /* @__PURE__ */ jsx("span", {
								className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
								children: "+"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-4 text-base text-gray-600 leading-relaxed pr-8",
							children: "Về tính thực dụng thuần túy, Quartz luôn dẫn đầu: không yêu cầu nạp năng lượng cót, độ sai số gần như bằng không và chi phí bảo dưỡng tối thiểu. Đổi lại, cỗ máy Cơ Học lại mang trong mình linh hồn của nghệ thuật cơ khí, là tuyên ngôn của sự trưởng thành dù đòi hỏi sự chăm sóc bảo dưỡng định kỳ."
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-24 pt-12 border-t border-gray-900 text-left",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-serif font-bold text-gray-900 mb-4",
						children: "Định Hình Dấu Ấn Của Riêng Bạn"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-sans text-xs uppercase tracking-widest text-gray-500 mb-8 max-w-xl leading-relaxed",
						children: "Mọi lý thuyết đều trở nên hoàn thiện khi bạn trực tiếp chạm vào thiết kế. Hãy lựa chọn sự chính xác và an tâm."
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/shop",
						className: "inline-block bg-black text-white font-sans text-sm font-bold uppercase tracking-[0.15em] py-4 px-12 hover:bg-gray-800 transition-colors duration-300",
						children: "Khám Phá Bộ Sưu Tập ROVIAN"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-sans text-[10px] text-gray-400 uppercase tracking-wider mt-12 mb-2",
						children: "— Thông tin từ Tòa soạn —"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-sans text-xs text-gray-500 leading-relaxed max-w-md",
						children: "Bản thảo hướng dẫn này là tài sản biên tập của ROVIAN (2025). Mức giá ước tính có thể biến động nhẹ phụ thuộc vào chiến lược phân phối của từng đại lý trên thị trường."
					})
				]
			})
		] })]
	})] });
};
//#endregion
//#region src/pages/Article/SoSanhCasioVaSRWatch.jsx
var SoSanhCasioVaSRWatch = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: "Casio MTP vs SRWATCH Timepiece TE: Nên Mua Loại Nào? (2025) | ROVIAN" }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "So sánh Casio MTP và SRWATCH Timepiece TE: thông số, chất liệu, giá & kết luận rõ ràng cho người mua lần đầu tại Việt Nam."
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: "Casio MTP vs SRWATCH nên mua loại nào, đồng hồ nam dưới 2 triệu, kính Sapphire, kính khoáng, thép 316L, Quartz Miyota, đồng hồ nam công sở, chống nước ATM"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: "article"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Casio MTP vs SRWATCH Timepiece TE: Nên Mua Loại Nào? (2025)"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: "Phân tích chi tiết thông số, chất liệu và giá bán. Đâu là chiếc đồng hồ nam tầm trung đáng mua nhất cho bạn?"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: "https://yourdomain.com/images/casio-vs-srwatch-thumbnail.jpg"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: "https://yourdomain.com/kien-thuc/casio-mtp-vs-srwatch-timepiece-te"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: "https://yourdomain.com/kien-thuc/casio-mtp-vs-srwatch-timepiece-te"
		})
	] }), /* @__PURE__ */ jsxs("main", {
		className: "max-w-4xl mx-auto px-5 py-16 bg-white mt-10 text-left font-serif",
		children: [/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify([{
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Casio MTP vs SRWATCH Timepiece TE: Nên Mua Loại Nào? (2025)",
				description: "So sánh Casio MTP và SRWATCH Timepiece TE: thông số, chất liệu, giá & kết luận rõ ràng cho người mua lần đầu tại Việt Nam.",
				author: {
					"@type": "Person",
					name: "Chuyên gia Horology"
				},
				publisher: {
					"@type": "Organization",
					name: "ROVIAN",
					logo: {
						"@type": "ImageObject",
						url: "https://yourdomain.com/logo.png"
					}
				},
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": "https://yourdomain.com/kien-thuc/casio-mtp-vs-srwatch-timepiece-te"
				}
			}, {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: [
					{
						"@type": "Question",
						name: "Casio MTP hay SRWATCH Timepiece TE bền hơn về lâu dài?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Về chất liệu dài hạn, SRWATCH Timepiece TE bền hơn rõ rệt nhờ kính Sapphire (gần như không xước) và thép 316L (không bị ăn mòn). Casio MTP dùng kính khoáng dễ xước hơn và thép mạ crôm có thể phai theo thời gian. Tuy nhiên cả hai đều dùng máy Quartz Miyota Nhật Bản — độ bền của bộ máy là tương đương."
						}
					},
					{
						"@type": "Question",
						name: "SRWATCH Timepiece TE có chính hãng không? Mua ở đâu an toàn?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "SRWATCH là thương hiệu Nhật Bản chính hãng, có hệ thống phân phối chính thức tại Việt Nam qua website srwatch.vn và các chuỗi bán lẻ ủy quyền. Dấu hiệu nhận biết: có hộp, thẻ bảo hành ghi số serial, tem chống giả."
						}
					},
					{
						"@type": "Question",
						name: "Casio MTP-V006 chống nước 3ATM có đủ dùng hàng ngày không?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "3ATM đủ cho sinh hoạt cơ bản: rửa tay, đi mưa nhẹ. Tuy nhiên không nên đeo khi tắm, bơi lội hoặc tiếp xúc với vòi hoa sen áp lực mạnh. Nếu hay quên tháo đồng hồ khi tắm, nên chọn SRWATCH Timepiece TE với 5ATM an toàn hơn."
						}
					},
					{
						"@type": "Question",
						name: "Nếu ngân sách chỉ có 1 triệu thì phải chọn Casio MTP, đúng không?",
						acceptedAnswer: {
							"@type": "Answer",
							text: "Đúng. Ở ngân sách dưới 1 triệu đồng, Casio MTP-V006 là lựa chọn tốt nhất thị trường trong phân khúc đồng hồ dress watch Nhật Bản. SRWATCH Timepiece TE bắt đầu từ khoảng 1,8 triệu nên nằm ở phân khúc khác hẳn."
						}
					}
				]
			}]) }
		}), /* @__PURE__ */ jsxs("article", { children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-16 border-b border-gray-900 pb-12",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-5 block",
						children: "Góc Nhìn & Phân Tích"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8",
						children: "Casio MTP Đối Đầu SRWATCH Timepiece TE: Lựa Chọn Nào Cho Năm 2025?"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center text-xs text-gray-500 font-sans tracking-widest uppercase",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-bold text-gray-900",
								children: "Ban Biên Tập ROVIAN"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mx-3",
								children: "|"
							}),
							/* @__PURE__ */ jsx("time", {
								dateTime: "2026-04-14",
								children: "Xuất bản năm 2025"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed mb-16",
				children: [/* @__PURE__ */ jsx("p", {
					className: "first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none",
					children: "Cả hai đều là đại diện tiêu biểu của dòng đồng hồ nam Quartz Nhật Bản, mang thiết kế thanh lịch và nhắm đến phân khúc tầm trung. Tuy nhiên, khi gỡ bỏ lớp áo thương mại và đặt lên bàn cân kỹ thuật, Casio MTP và SRWATCH Timepiece TE lại bộc lộ hai triết lý chế tác hoàn toàn khác biệt."
				}), /* @__PURE__ */ jsx("p", { children: "Một bên là di sản 80 năm tuổi với độ phủ sóng toàn cầu — định nghĩa của sự an toàn. Bên còn lại là một tên tuổi Nhật Bản mang tính chuyên biệt, dồn toàn lực để tối ưu hóa giá trị vật liệu. Bài viết này sẽ phân tích trực diện từng tiêu chí để giúp bạn đưa ra quyết định sắc bén nhất." })]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-16",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2",
						children: "1. Bảng Thông Số Kỹ Thuật"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto font-sans mb-10",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left text-sm border-collapse",
							children: [/* @__PURE__ */ jsx("thead", {
								className: "border-b-2 border-gray-900 text-gray-900 uppercase tracking-widest text-xs",
								children: /* @__PURE__ */ jsxs("tr", { children: [
									/* @__PURE__ */ jsx("th", {
										className: "py-4 pr-4 font-bold w-1/4",
										children: "Tiêu Chí"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-4 px-4 font-bold border-b-2 border-gray-400 w-3/8",
										children: "Casio MTP-V006"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-4 pl-4 font-bold border-b-2 border-gray-900 w-3/8",
										children: "SRWATCH SG107x"
									})
								] })
							}), /* @__PURE__ */ jsxs("tbody", {
								className: "divide-y divide-gray-200 text-gray-700",
								children: [
									/* @__PURE__ */ jsxs("tr", {
										className: "transition-colors hover:bg-gray-50",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Thương Hiệu"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4",
												children: "Nhật Bản (Từ 1946)"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 font-medium text-gray-900",
												children: "Nhật Bản (Từ 1985)"
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", {
										className: "transition-colors hover:bg-gray-50",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Bộ Máy"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4",
												children: "Quartz MIYOTA-1333"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 font-medium text-gray-900",
												children: "Quartz Miyota (Japan Movt)"
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", {
										className: "transition-colors hover:bg-gray-50",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Mặt Kính"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4",
												children: "Kính Khoáng (Mineral)"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 font-bold text-gray-900",
												children: "Sapphire Nguyên Khối"
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", {
										className: "transition-colors hover:bg-gray-50",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Khung Vỏ"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4",
												children: "Thép Mạ Crôm"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 font-medium text-gray-900",
												children: "Thép Không Gỉ 316L"
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", {
										className: "transition-colors hover:bg-gray-50",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Chống Nước"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4",
												children: "3 ATM"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 font-medium text-gray-900",
												children: "5 ATM"
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", {
										className: "transition-colors hover:bg-gray-50",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Mức Giá"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4 font-medium text-gray-900",
												children: "~ 700.000 – 950.000 đ"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 font-bold text-gray-900",
												children: "~ 1.800.000 – 2.500.000 đ"
											})
										]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ jsx("blockquote", {
						className: "border-l-4 border-gray-900 pl-8 py-2 text-xl font-serif italic text-gray-700",
						children: "Nhận định nhanh: SRWATCH áp đảo về vật liệu chế tác (Sapphire, 316L, 5ATM). Ngược lại, Casio MTP giành chiến thắng tuyệt đối về mức giá tiếp cận và độ nhận diện thương hiệu toàn cầu."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "2. Phân Tích Thiết Kế & Phong Cách"
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-gray-900 font-sans uppercase tracking-wide mt-8",
						children: "Casio MTP-V006: Sự Kinh Điển Của Dress Watch"
					}),
					/* @__PURE__ */ jsx("p", { children: "Sở hữu mặt số 38mm chuẩn mực, chiếc đồng hồ này là định nghĩa của sự an toàn. Giao diện tối giản với cọc số La Mã hoặc vạch mỏng giúp nó trở thành món phụ kiện đa năng — phù hợp từ môi trường công sở đến những buổi tiệc nhẹ. Điểm trừ duy nhất nằm ở độ dày vỏ (9.4mm), hơi thiếu đi sự thanh thoát so với tổng thể." }),
					/* @__PURE__ */ jsx("h3", {
						className: "text-xl font-bold text-gray-900 font-sans uppercase tracking-wide mt-12",
						children: "SRWATCH Timepiece TE: Độ Mỏng Tinh Tế"
					}),
					/* @__PURE__ */ jsx("p", { children: "Với đường kính 39mm nhưng độ dày được ép xuống chỉ còn 6–7mm, SRWATCH mang lại cảm giác ôm sát và liền mạch trên cổ tay. Dây đeo demi kim loại được xử lý tinh xảo với hai dải màu xước và bóng xen kẽ — kỹ thuật hoàn thiện thường chỉ xuất hiện trên các phân khúc giá cao hơn." })
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "3. Bài Toán Về Chất Liệu"
					}),
					/* @__PURE__ */ jsx("p", { children: "Đây là yếu tố cốt lõi quyết định giá trị và vẻ đẹp nguyên bản của cỗ máy thời gian sau nhiều năm sử dụng:" }),
					/* @__PURE__ */ jsxs("ul", {
						className: "list-none pl-0 space-y-6 my-8 font-sans text-base",
						children: [/* @__PURE__ */ jsxs("li", {
							className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 uppercase tracking-wide block mb-1",
								children: "Kính Bảo Vệ:"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-gray-600",
								children: "Casio sử dụng kính khoáng (Mineral), dễ xuất hiện xước dăm sau khoảng 6 tháng sử dụng. SRWATCH trang bị kính Sapphire nguyên khối, đảm bảo mặt số luôn trong vắt và miễn nhiễm với xước xát thông thường."
							})]
						}), /* @__PURE__ */ jsxs("li", {
							className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 uppercase tracking-wide block mb-1",
								children: "Khung Vỏ:"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-gray-600",
								children: "Lớp mạ crôm của Casio có thể phai màu ở các góc cạnh theo thời gian. Ngược lại, thép y tế 316L nguyên khối của SRWATCH đảm bảo không bị ăn mòn và luôn giữ được độ sáng bóng."
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "4. Bộ Máy & Độ Kháng Nước"
					}),
					/* @__PURE__ */ jsx("p", { children: "Cả hai đều được tiếp sức mạnh bởi cỗ máy thạch anh (Quartz) từ Miyota — biểu tượng của sự bền bỉ Nhật Bản. Casio ghi điểm với ô lịch hiển thị cả ngày và thứ, trong khi SRWATCH tối giản hóa chỉ với lịch ngày nhưng bù lại có sự hoàn thiện về ron chống nước." }),
					/* @__PURE__ */ jsx("p", { children: "Mức 3ATM của Casio đòi hỏi người dùng phải cẩn thận hơn (chỉ nên rửa tay hoặc đi mưa nhẹ). Mức 5ATM của SRWATCH mang lại sự an tâm tuyệt đối cho các sinh hoạt thường nhật, bao gồm cả việc tắm gội." })
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-24",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2",
					children: "5. Quyết Định Dành Cho Bạn"
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-12 font-sans mb-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "border-t border-gray-900 pt-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold text-gray-500 uppercase tracking-widest mb-6",
							children: "Bạn Nên Chọn Casio MTP Khi:"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "list-none pl-0 space-y-4 text-gray-800 text-base",
							children: [
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full",
									children: "Ngân sách phân bổ nằm dưới mức 1 triệu đồng."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full",
									children: "Bạn là người mua đồng hồ lần đầu, muốn thử nghiệm xem mình có thói quen đeo hay không."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full",
									children: "Cần tính thực dụng cao với ô lịch thứ/ngày song ngữ."
								})
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "border-t border-gray-900 pt-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-sm font-bold text-gray-900 uppercase tracking-widest mb-6",
							children: "Bạn Nên Chọn SRWATCH Khi:"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "list-none pl-0 space-y-4 text-gray-900 text-base font-medium",
							children: [
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full",
									children: "Tìm kiếm một cỗ máy đeo thường xuyên đến môi trường công sở."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full",
									children: "Yêu cầu khắt khe về sự trường tồn của vật liệu (Kính Sapphire nguyên khối, Thép 316L)."
								}),
								/* @__PURE__ */ jsx("li", {
									className: "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full",
									children: "Sẵn sàng đầu tư mức 2 triệu đồng để sở hữu tiêu chuẩn hoàn thiện vượt cấp."
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2",
					children: "Hỏi – Đáp Chuyên Sâu"
				}), /* @__PURE__ */ jsxs("div", {
					className: "divide-y divide-gray-200 font-sans border-t border-b border-gray-900",
					children: [
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Casio MTP hay SRWATCH bền hơn về lâu dài?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Xét về cấu trúc khung vỏ và mặt kính, SRWATCH áp đảo hoàn toàn nhờ thép 316L và tinh thể Sapphire. Tuy nhiên, do cả hai đều sử dụng chung nền tảng bộ máy Quartz Nhật Bản (Miyota), độ bền về mặt vận hành thời gian là tương đương nhau."
							})]
						}),
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Với 1 triệu đồng, Casio MTP có phải lựa chọn duy nhất?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Trong phân khúc Dress Watch chính hãng Nhật Bản dưới 1 triệu, Casio MTP-V006 gần như là thiết kế vô đối về tỷ lệ hiệu năng trên giá thành. SRWATCH hướng tới tập khách hàng ở phân khúc cao hơn, bắt đầu từ mức 1.8 triệu đồng."
							})]
						}),
						/* @__PURE__ */ jsxs("details", {
							className: "group py-6 cursor-pointer",
							children: [/* @__PURE__ */ jsxs("summary", {
								className: "font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none",
								children: ["Chống nước 3ATM của Casio có quá mỏng manh?", /* @__PURE__ */ jsx("span", {
									className: "text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light",
									children: "+"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 leading-relaxed pr-8 text-base",
								children: "Mức 3ATM hoàn toàn đáp ứng được việc rửa tay hay đi mưa nhẹ. Vấn đề chỉ xảy ra nếu bạn có thói quen đeo đồng hồ khi đi tắm, xông hơi hoặc tham gia các hoạt động bơi lội."
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-16 pt-8 border-t border-gray-200 text-left",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-sans text-[10px] text-gray-400 uppercase tracking-wider mb-2",
					children: "— Thông tin từ Tòa soạn —"
				}), /* @__PURE__ */ jsx("p", {
					className: "font-sans text-xs text-gray-500 leading-relaxed",
					children: "Các mức giá tham khảo trong bài viết được ghi nhận vào đầu năm 2025 tại thị trường Việt Nam và có thể biến động theo chính sách phân phối của từng đại lý ủy quyền."
				})]
			})
		] })]
	})] });
};
//#endregion
//#region src/pages/Article/DanhGiaSRWatchSG1077.jsx
var DanhGiaSRWatchSG1077 = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: "Đồng Hồ SRWatch SG1077.1101TE – Đánh Giá Chuyên Sâu | ROVIAN" }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: "Đánh giá chi tiết đồng hồ SRWatch nam tầm trung SG1077.1101TE: kính Sapphire, thép 316L, máy Quartz Miyota. Xem ngay ưu nhược điểm và mức giá."
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: "đồng hồ SRWatch nam tầm trung, SRWATCH SG1077.1101TE, đánh giá đồng hồ SRWatch, đồng hồ nam dưới 3 triệu, đồng hồ kính sapphire giá rẻ"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: "article"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: "Đồng Hồ SRWatch Nam SG1077.1101TE – Đánh Giá Chi Tiết Từ Chuyên Gia"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: "Tìm hiểu chi tiết chiếc đồng hồ quốc dân SRWatch SG1077.1101TE: Kính Sapphire, thép 316L và máy Miyota bền bỉ."
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: "https://yourdomain.com/images/srwatch-sg1077-1101te-thumbnail.jpg"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: "https://yourdomain.com/kien-thuc/danh-gia-dong-ho-srwatch-nam-sg1077-1101te"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: "https://yourdomain.com/kien-thuc/danh-gia-dong-ho-srwatch-nam-sg1077-1101te"
		})
	] }), /* @__PURE__ */ jsxs("main", {
		className: "max-w-4xl mx-auto px-5 py-16 bg-white mt-10 text-left font-serif",
		children: [/* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify([{
				"@context": "https://schema.org",
				"@type": "Article",
				headline: "Đồng Hồ SRWatch Nam SG1077.1101TE – Đánh Giá Chi Tiết Từ Chuyên Gia",
				description: "Đánh giá chi tiết đồng hồ SRWatch nam tầm trung SG1077.1101TE: kính Sapphire, thép 316L, máy Quartz Miyota. Xem ngay ưu nhược điểm và so sánh.",
				author: {
					"@type": "Person",
					name: "Chuyên gia Horology ROVIAN"
				},
				publisher: {
					"@type": "Organization",
					name: "ROVIAN",
					logo: {
						"@type": "ImageObject",
						url: "https://yourdomain.com/logo.png"
					}
				},
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": "https://yourdomain.com/kien-thuc/danh-gia-dong-ho-srwatch-nam-sg1077-1101te"
				}
			}, {
				"@context": "https://schema.org",
				"@type": "Product",
				name: "Đồng hồ SRWatch Nam SG1077.1101TE",
				image: "https://yourdomain.com/images/srwatch-sg1077-1101te.jpg",
				description: "Đồng hồ nam kính Sapphire, vỏ thép không gỉ 316L, bộ máy Quartz Miyota Nhật Bản, chống nước 5ATM.",
				brand: {
					"@type": "Brand",
					name: "SRWATCH"
				},
				review: {
					"@type": "Review",
					reviewRating: {
						"@type": "Rating",
						ratingValue: "4.8",
						bestRating: "5"
					},
					author: {
						"@type": "Person",
						name: "Chuyên gia Horology ROVIAN"
					}
				},
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "4.8",
					reviewCount: "124"
				},
				offers: {
					"@type": "Offer",
					url: "https://yourdomain.com/san-pham/srwatch-sg1077-1101te",
					priceCurrency: "VND",
					price: "2500000",
					availability: "https://schema.org/InStock",
					itemCondition: "https://schema.org/NewCondition"
				}
			}]) }
		}), /* @__PURE__ */ jsxs("article", { children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-16 border-b border-gray-900 pb-12",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-5 block",
						children: "Đánh Giá Chuyên Sâu"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8",
						children: "Đồng Hồ SRWatch SG1077.1101TE: Vẻ Đẹp Tối Giản Vượt Tầm Giá"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center text-xs text-gray-500 font-sans tracking-widest uppercase",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "font-semibold text-gray-900",
								children: "Ban Biên Tập ROVIAN"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mx-3",
								children: "|"
							}),
							/* @__PURE__ */ jsx("time", {
								dateTime: "2026-04-14",
								children: "Xuất bản năm 2025"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed mb-16",
				children: /* @__PURE__ */ jsxs("p", {
					className: "first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none",
					children: [
						"Bạn đang tìm một chiếc đồng hồ nam vừa thanh lịch, bền bỉ, vừa không \"đau ví\" — nhưng vẫn toát lên phong thái chỉn chu mỗi khi đi làm hay dự tiệc? Mẫu",
						" ",
						/* @__PURE__ */ jsx("strong", { children: "đồng hồ SRWatch nam tầm trung" }),
						" dòng Timepiece TE, cụ thể là model ",
						/* @__PURE__ */ jsx("strong", { children: "SG1077.1101TE" }),
						", đang là cái tên được giới mộ điệu chú ý nhờ sự kết hợp hài hòa giữa chất liệu chế tác và mức giá tiếp cận."
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "1. Khởi Nguồn Thương Hiệu"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"SRWATCH ra đời năm 1985 tại Nhật Bản, được định hình bởi kỹ sư Kama. Tên \"SR\" mang hàm ý ",
						/* @__PURE__ */ jsx("em", { children: "\"Save time for real life\"" }),
						" — trân trọng từng khoảnh khắc cuộc sống đích thực."
					] }),
					/* @__PURE__ */ jsx("p", { children: "Triết lý xuyên suốt của hãng là: Một chiếc đồng hồ tốt không nhất thiết phải mang một mức giá xa xỉ. Sử dụng bộ máy Miyota từ tập đoàn Citizen, các dòng đồng hồ SRWatch khẳng định vị thế vững chắc trong phân khúc tầm trung với độ tin cậy chuẩn Nhật." })
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
						children: "2. Ngôn Ngữ Thiết Kế Tối Giản"
					}),
					/* @__PURE__ */ jsx("p", { children: "Mặt số tròn màu đen kết hợp với bộ kim được vát cạnh sắc sảo tạo ra độ tương phản thị giác tuyệt vời. Các vạch số được thiết kế dạng đường kẻ dứt khoát — phản ánh đúng tinh thần Minimalism của Nhật Bản: tối giản nhưng không hề đơn điệu." }),
					/* @__PURE__ */ jsx("p", { children: "Với đường kính 39mm và độ dày vỏ chỉ khoảng 6–7mm, chiếc đồng hồ dễ dàng trượt nhẹ nhàng dưới cổ tay áo sơ mi, tạo nên sự thanh lịch, gọn gàng và vừa vặn cho cổ tay nam giới Á Đông." })
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
					children: "3. Chất Liệu Vượt Kỳ Vọng"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "list-none pl-0 space-y-8 my-10 font-sans text-base",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 uppercase tracking-wide block mb-1",
								children: "Thép Không Gỉ 316L"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-gray-600",
								children: "Khung vỏ và dây đeo sử dụng thép y tế cao cấp, chống gỉ sét, duy trì độ bóng và hoàn toàn thân thiện với làn da."
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 uppercase tracking-wide block mb-1",
								children: "Kính Sapphire Nguyên Khối"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-gray-600",
								children: "Với độ cứng 9/10 (chỉ sau kim cương), mặt kính chống trầy xước gần như tuyệt đối. Đây là lợi thế cạnh tranh áp đảo ở phân khúc này."
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-gray-900 uppercase tracking-wide block mb-1",
								children: "Chống Nước 5ATM"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-gray-600",
								children: "Đảm bảo an toàn tuyệt đối khi rửa tay, đi mưa hoặc bơi lội nhẹ trên mặt nước. Khuyến cáo không sử dụng khi lặn sâu hoặc tắm hơi."
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
					children: "4. Trái Tim Bộ Máy Miyota"
				}), /* @__PURE__ */ jsx("p", { children: "SG1077.1101TE vận hành bởi cỗ máy Quartz Miyota danh tiếng, mang lại độ chính xác ấn tượng với sai số chỉ ±15 giây/tháng. Thiết kế loại bỏ kim giây rườm rà giúp tối ưu hóa năng lượng. Người dùng không cần bận tâm đến việc lên cót, đồng thời tận hưởng sự bền bỉ, dễ dàng bảo trì và tuổi thọ pin kéo dài từ 3 đến 5 năm." })]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-24",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2",
						children: "5. Đối Chiếu & So Sánh"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "overflow-x-auto font-sans mb-8",
						children: /* @__PURE__ */ jsxs("table", {
							className: "w-full text-left text-sm border-collapse",
							children: [/* @__PURE__ */ jsx("thead", {
								className: "border-b-2 border-gray-900 text-gray-900 uppercase tracking-widest text-xs",
								children: /* @__PURE__ */ jsxs("tr", { children: [
									/* @__PURE__ */ jsx("th", {
										className: "py-4 pr-4 font-bold w-1/4",
										children: "Tiêu Chí"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-4 px-4 font-bold border-b-2 border-gray-900 w-1/4",
										children: "SG1077.1101TE"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-4 px-4 font-bold text-gray-500 w-1/4",
										children: "Casio MTP"
									}),
									/* @__PURE__ */ jsx("th", {
										className: "py-4 pl-4 font-bold text-gray-500 w-1/4",
										children: "Orient Bambino"
									})
								] })
							}), /* @__PURE__ */ jsxs("tbody", {
								className: "divide-y divide-gray-200 text-gray-700",
								children: [
									/* @__PURE__ */ jsxs("tr", {
										className: "hover:bg-gray-50 transition-colors",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Mức Giá"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4 font-bold text-gray-900",
												children: "~1.8M – 2.5M"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4 text-gray-500",
												children: "~0.8M – 1.2M"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 text-gray-500",
												children: "~3.0M – 5.0M"
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", {
										className: "hover:bg-gray-50 transition-colors",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Mặt Kính"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4 font-bold text-gray-900",
												children: "Sapphire"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4 text-gray-500",
												children: "Mineral"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 text-gray-500",
												children: "Domed Mineral"
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", {
										className: "hover:bg-gray-50 transition-colors",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pr-4 font-semibold text-gray-900 uppercase text-xs tracking-wider",
												children: "Bộ Máy"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4 font-bold text-gray-900",
												children: "Quartz (Nhật)"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 px-4 text-gray-500",
												children: "Quartz"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "py-5 pl-4 text-gray-500",
												children: "Automatic"
											})
										]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ jsx("blockquote", {
						className: "border-l-4 border-gray-900 pl-8 py-2 text-xl font-serif italic text-gray-700",
						children: "Nhận định: Chiếc SG1077 hoàn toàn áp đảo các mẫu Casio phổ thông về chất liệu kính bảo vệ và độ hoàn thiện khung vỏ. So với Orient Bambino, nó mang tính thực dụng cao hơn nhờ cỗ máy thạch anh chuẩn xác và chi phí bảo trì gần như bằng không."
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose",
					children: "Lời Kết"
				}), /* @__PURE__ */ jsx("p", { children: "Nếu ngân sách dự định của bạn nằm dưới 3 triệu đồng, SRWATCH SG1077.1101TE là một khoản đầu tư hoàn toàn xứng đáng. Thiết kế này thiết lập một tiêu chuẩn mới về độ hoàn thiện vật liệu trong phân khúc, lý tưởng cho những quý ông công sở yêu thích sự thanh lịch, hoặc đóng vai trò như một món quà trao tặng đầy tinh tế và ý nghĩa." })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-24 pt-12 border-t border-gray-900 text-left",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-serif font-bold text-gray-900 mb-4",
						children: "Trải Nghiệm Sự Chuẩn Xác"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-sans text-xs uppercase tracking-widest text-gray-500 mb-8 max-w-xl leading-relaxed",
						children: "Miễn phí giao hàng toàn quốc — Bảo hành chính hãng — Đổi trả trong 7 ngày"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "/san-pham/srwatch-sg1077-1101te",
						className: "inline-block bg-black text-white font-sans text-sm font-bold uppercase tracking-[0.15em] py-4 px-12 hover:bg-gray-800 transition-colors duration-300",
						children: "Khám Phá Chi Tiết Sản Phẩm"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-sans text-[10px] text-gray-400 uppercase tracking-wider mt-12 mb-2",
						children: "— Thông tin từ Tòa soạn —"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "font-sans text-xs text-gray-500 leading-relaxed max-w-md",
						children: "Các mức giá tham khảo trong bài viết được cập nhật đầu năm 2025 tại thị trường Việt Nam và có thể biến động theo chính sách phân phối của từng đại lý."
					})
				]
			})
		] })]
	})] });
};
//#endregion
//#region src/App.jsx
var CLARITY_PROJECT_ID = "w575ojvv14";
var AnimatedRoutes = () => {
	const location = useLocation();
	useEffect(() => {
		clarityService.initialize(CLARITY_PROJECT_ID);
	}, []);
	return /* @__PURE__ */ jsx(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ jsxs(Routes, {
			location,
			children: [
				/* @__PURE__ */ jsx(Route, {
					path: "/auth",
					element: /* @__PURE__ */ jsx(PageWrapper, { children: /* @__PURE__ */ jsx(AuthPage, {}) })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "dark" }),
						/* @__PURE__ */ jsx(LandingPage, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "dark" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/shop",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "dark" }),
						/* @__PURE__ */ jsx(ShoppingPage, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "dark" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/about",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "shop" }),
						/* @__PURE__ */ jsx(AboutPage, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "light" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/contact",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "shop" }),
						/* @__PURE__ */ jsx(ContactPage, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "light" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/detail/:id",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "shop" }),
						/* @__PURE__ */ jsx(ProductDetailPage, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "light" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					element: /* @__PURE__ */ jsx(ProtectedRoute, {}),
					children: /* @__PURE__ */ jsx(Route, {
						element: /* @__PURE__ */ jsx(AdminLayout, {}),
						children: /* @__PURE__ */ jsx(Route, {
							path: "/admin",
							element: /* @__PURE__ */ jsx(ProductManager, {})
						})
					})
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/kien-thuc/may-co-automatic-la-gi",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "shop" }),
						/* @__PURE__ */ jsx(AutomaticWatchArticle, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "light" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "shop" }),
						/* @__PURE__ */ jsx(Top5DongHoNamDuoi5Trieu, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "light" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/kien-thuc/cach-chon-dong-ho-nam",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "shop" }),
						/* @__PURE__ */ jsx(CachChonDongHoNam, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "light" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/kien-thuc/danh-gia-srwatch-nam-SG1077-1101TE",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "shop" }),
						/* @__PURE__ */ jsx(DanhGiaSRWatchSG1077, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "light" })
					] })
				}),
				/* @__PURE__ */ jsx(Route, {
					path: "/kien-thuc/casio-mtp-vs-srwatch-timepiece-te",
					element: /* @__PURE__ */ jsxs(PageWrapper, { children: [
						/* @__PURE__ */ jsx(Header, { variant: "shop" }),
						/* @__PURE__ */ jsx(SoSanhCasioVaSRWatch, {}),
						/* @__PURE__ */ jsx(Footer, { variant: "light" })
					] })
				})
			]
		}, location.pathname)
	});
};
function App() {
	const [initialLoading, setInitialLoading] = useState(false);
	useEffect(() => {
		window.onbeforeunload = () => {
			sessionStorage.removeItem("app_was_loaded");
		};
	}, []);
	return /* @__PURE__ */ jsx(Fragment, { children: initialLoading ? /* @__PURE__ */ jsx(SplashScreen, { finishLoading: () => setInitialLoading(false) }) : /* @__PURE__ */ jsxs(BrowserRouter, { children: [/* @__PURE__ */ jsx(ScrollToTop, {}), /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-[#fffafb]",
		children: /* @__PURE__ */ jsx(AnimatedRoutes, {})
	})] }) });
}
//#endregion
//#region src/main.jsx
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(App, {}) }) }));
//#endregion
export {};
