// الألوان الأساسية
const BRAND_COLORS = [
  { name: "أوف وايت", hex: "#FAF9F6", border: true },
  { name: "رملي", hex: "#D8CBB8" },
  { name: "جملي", hex: "#B08968" },
  { name: "زيتي", hex: "#68584E" },
  { name: "فحمي", hex: "#282828" },
];

// المجموعات
const COLLECTIONS = [
  {
    id: "essentials",
    name: "الأساسيات",
    subtitle: "Essentials",
    desc: "قطع يومية متينة ومريحة تعيش معك وتتناسق مع كل إطلالة",
    codes: ["TS-001", "TS-003", "PL-001", "TR-001", "KN-004", "AC-004"],
  },
  {
    id: "summer-linen",
    name: "كتان الصيف",
    subtitle: "Summer Linen",
    desc: "خامات خفيفة وانسيابية توفر أقصى درجات الراحة والانتعاش",
    codes: ["SH-001", "TR-002", "SR-001", "SH-003"],
  },
  {
    id: "winter-layers",
    name: "طبقات الشتاء",
    subtitle: "Winter Layers",
    desc: "تريكو فاخر ومعاطف دافئة بتصاميم راقية بدون وزن ثقيل",
    codes: ["KN-001", "KN-002", "OW-003", "OW-005", "AC-003"],
  },
  {
    id: "smart-casual",
    name: "أنيق للشغل",
    subtitle: "Smart Casual",
    desc: "مظهر مرتب وعصري يجمع بين رسمية العمل وراحة الكاجوال",
    codes: ["SH-002", "SH-004", "TR-003", "OW-003", "AC-001"],
  },
];

// المنتجات بالكامل
const PRODUCTS = [
  {
    code: "TS-001",
    name: "تيشيرت أساسي قطن بيما",
    enName: "Essential Pima Tee",
    category: "tees",
    price: 650,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["أوف وايت", "أسود", "رمادي فحمي", "بيج"],
    desc: "تيشيرت ناعم بقصة مريحة وبدون طبعات، أساس أي إطلالة كاجوال راقية.",
    material: "قطن بيما 280 جرام",
    care: "غسيل آلي بماء بارد.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "TS-002",
    name: "تيشيرت بوكسي ثقيل",
    enName: "Heavyweight Boxy Tee",
    category: "tees",
    price: 750,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["رملي", "زيتي", "أسود"],
    desc: "قصة واسعة قليلاً بقماش ثقيل يحافظ على شكله وقوامه طوال اليوم.",
    material: "قطن 240 جرام",
    care: "غسيل بارد مع ألوان مماثلة.",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "TS-003",
    name: "تيشيرت هينلي",
    enName: "Henley Tee",
    category: "tees",
    price: 700,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["كريمي", "كحلي", "زيتي"],
    desc: "ياقة بثلاثة أزرار تجسد الأناقة الهادئة والراحة.",
    material: "قطن سلاب فاخر",
    care: "غسيل يدوياً أو بدورة خفيفة.",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "PL-001",
    name: "بولو بيكيه كلاسيك",
    enName: "Classic Piqué Polo",
    category: "tees",
    price: 850,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["أوف وايت", "كحلي", "أسود", "جملي"],
    desc: "ياقة ناعمة ومظهر مرتب يصلح للشغل والخروجات.",
    material: "قطن بيكيه 100%",
    care: "غسيل بماء بارد.",
    image:
      "https://images.unsplash.com/photo-1625910513413-4330b65f4902?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "PL-002",
    name: "بولو تريكو",
    enName: "Knit Polo",
    category: "tees",
    price: 950,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["بيج", "رمادي", "كحلي"],
    desc: "تريكو خفيف بأزرار مناسب للمساء والطقس المعتدل.",
    material: "قطن مرسريز تريكو",
    care: "تنظيف جاف أو غسيل يدوي.",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "SH-001",
    name: "قميص كتان كاجوال",
    enName: "Linen Casual Shirt",
    category: "shirts",
    price: 1250,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["أبيض", "بيج", "أزرق سماوي", "زيتي"],
    desc: "خفيف ومريح جداً للصيف وبيبان أشيك مع الوقت.",
    material: "كتان 100%",
    care: "غسيل بدورة خفيفة.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "SH-002",
    name: "قميص أوكسفورد",
    enName: "Oxford Shirt",
    category: "shirts",
    price: 1250,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["أبيض", "أزرق فاتح", "كحلي"],
    desc: "ياقة بأزرار وقماش متين بيتلبس مع الجينز والتشينو.",
    material: "قطن أوكسفورد",
    care: "غسيل دافئ وكوي بالبخار.",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "SH-003",
    name: "قميص كوبان",
    enName: "Cuban Collar Shirt",
    category: "shirts",
    price: 1100,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["كريمي", "زيتي", "أسود"],
    desc: "ياقة مفتوحة وأكمام قصيرة بروح مريحة وراقية.",
    material: "فيسكوز وقطن",
    care: "غسيل بارد.",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "TR-001",
    name: "بنطلون تشينو سليم",
    enName: "Slim Chino Trousers",
    category: "trousers",
    price: 1400,
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: ["بيج", "زيتي", "كحلي", "أسود"],
    desc: "قصة مرتبة مع مرونة بسيطة للراحة طول اليوم.",
    material: "قطن ستريتش",
    care: "غسيل آلي بارد.",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "TR-002",
    name: "بنطلون كتان بخصر مطاطي",
    enName: "Linen Drawstring Trousers",
    category: "trousers",
    price: 1300,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["أوف وايت", "رملي", "أسود"],
    desc: "خفيف جداً للصيف بقصة مريحة وأنيقة.",
    material: "كتان مخلوط",
    care: "غسيل خفيف.",
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "TR-003",
    name: "بنطلون قماش بكسرات",
    enName: "Pleated Trousers",
    category: "trousers",
    price: 1600,
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: ["رمادي", "كحلي", "بني فاتح"],
    desc: "قصة واسعة قليلاً بمظهر راق وهادئ.",
    material: "صوف مخلوط",
    care: "تنظيف جاف فقط.",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "KN-001",
    name: "سويتر ميرينو رقبة دائرية",
    enName: "Merino Crewneck Sweater",
    category: "knitwear",
    price: 1800,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["كريمي", "رمادي", "كحلي", "جملي"],
    desc: "ناعم ودافئ بدون ثقل لطبقات الشتاء.",
    material: "ميرينو مخلوط",
    care: "غسيل يدوي بماء بارد.",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "OW-001",
    name: "جاكيت بومبر خفيف",
    enName: "Light Bomber Jacket",
    category: "outerwear",
    price: 2100,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["أسود", "زيتي", "كحلي"],
    desc: "جاكيت خفيف لنصف الموسم بقصة نظيفة.",
    material: "نايلون بوليستر مقاوم للماء",
    care: "تنظيف جاف.",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "OW-005",
    name: "معطف طويل شتوي",
    enName: "Wool Overcoat",
    category: "outerwear",
    price: 3200,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["فحمي", "جملي"],
    desc: "قصة طويلة وخطوط هادئة للشتاء والمناسبات.",
    material: "صوف مخلوط",
    care: "تنظيف جاف.",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "SR-001",
    name: "شورت كتان",
    enName: "Linen Shorts",
    category: "shorts",
    price: 850,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["أوف وايت", "رملي", "زيتي"],
    desc: "خفيف للصيف والمصايف بمظهر مرتب.",
    material: "كتان مخلوط",
    care: "غسيل بارد.",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800",
  },
  {
    code: "AC-001",
    name: "حزام جلد طبيعي",
    enName: "Leather Belt",
    category: "accessories",
    price: 650,
    sizes: ["85-90", "95-100", "105-110"],
    colors: ["أسود", "بني"],
    desc: "جلد طبيعي بإبزيم بسيط ثابت.",
    material: "جلد طبيعي 100%",
    care: "تنظيف خاص بالجلد.",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb8ec5522?auto=format&fit=crop&q=80&w=800",
  },
];

let cart = [];

function showPage(pageId, extraParam = null) {
  const main = document.getElementById("main-content");
  window.scrollTo(0, 0);

  if (pageId === "home") {
    main.innerHTML = `
            <section class="relative h-[80vh] min-h-[500px] bg-[#D8CBB8]/20 flex items-center justify-center text-center px-4">
                <div class="max-w-2xl space-y-6">
                    <span class="text-xs uppercase font-mono tracking-widest text-[#B08968]">تشكيلة الموسم الجديدة</span>
                    <h2 class="text-4xl md:text-6xl font-extrabold text-[#282828] leading-tight">أناقة كاجوال هادئة • فخامة بسيطة</h2>
                    <p class="text-sm md:text-base text-gray-600 leading-relaxed">قطع أساسية ذات خامات ممتازة وقصات لطيفة بدون طباعات كبيرة أو لوجوهات صارخة. صُممت لتتلبس مع بعضها وتعيش لسنين.</p>
                    <button onclick="showPage('shop')" class="bg-[#282828] text-white px-8 py-4 font-bold text-xs hover:bg-[#B08968] transition">تسوق الكتالوج الكامل</button>
                </div>
            </section>

            <!-- الألوان الأساسية -->
            <section class="max-w-7xl mx-auto px-4 py-12 text-center">
                <h3 class="text-xs uppercase tracking-widest text-[#B08968] font-bold mb-6">درجات ألوان البراند الأساسية</h3>
                <div class="flex flex-wrap justify-center gap-6">
                    ${BRAND_COLORS.map(
                      (c) => `
                        <div class="flex flex-col items-center gap-2">
                            <div class="w-12 h-12 rounded-full shadow-inner ${c.border ? "border border-gray-300" : ""}" style="background-color: ${c.hex}"></div>
                            <span class="text-xs font-medium text-gray-700">${c.name}</span>
                        </div>
                    `,
                    ).join("")}
                </div>
            </section>

            <!-- المجموعات المختارة -->
            <section class="max-w-7xl mx-auto px-4 py-8">
                <h3 class="text-2xl font-bold text-[#282828] mb-8 text-center">المجموعات المختارة</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${COLLECTIONS.map(
                      (col) => `
                        <div onclick="showPage('shop', '${col.id}')" class="bg-white p-6 border border-[#D8CBB8]/40 hover:border-[#282828] transition cursor-pointer group">
                            <h4 class="text-lg font-bold text-[#282828] group-hover:text-[#B08968] transition">${col.name}</h4>
                            <p class="text-[10px] text-gray-400 font-mono uppercase mb-3">${col.subtitle}</p>
                            <p class="text-xs text-gray-600 leading-relaxed mb-4">${col.desc}</p>
                            <span class="text-xs font-bold text-[#282828] flex items-center gap-1">استكشف المجموعة ←</span>
                        </div>
                    `,
                    ).join("")}
                </div>
            </section>

            <!-- أحدث القطع -->
            <section class="max-w-7xl mx-auto px-4 py-12">
                <div class="flex justify-between items-end mb-8">
                    <div>
                        <h3 class="text-2xl font-bold text-[#282828]">أحدث القطع</h3>
                        <p class="text-xs text-gray-500 mt-1">قصات بسيطة خالية من التكلف</p>
                    </div>
                    <button onclick="showPage('shop')" class="text-xs font-bold text-[#B08968] hover:underline">عرض الكل</button>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    ${PRODUCTS.slice(0, 4)
                      .map((p) => renderProductCard(p))
                      .join("")}
                </div>
            </section>
        `;
  } else if (pageId === "shop") {
    main.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 py-8">
                <h2 class="text-2xl font-bold mb-6 text-[#282828]">متجر المنتجات الكامل</h2>
                
                <div class="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center bg-white p-4 border border-[#D8CBB8]/40">
                    <input type="text" id="search-input" onkeyup="filterProducts()" placeholder="بحث باسم أو كود القطعة..." class="p-2 border text-xs w-full md:w-64 focus:outline-none">
                    
                    <div class="flex flex-wrap gap-2 text-xs">
                        <button onclick="filterCategory('all')" class="px-3 py-1.5 bg-[#282828] text-white font-bold">الكل</button>
                        <button onclick="filterCategory('tees')" class="px-3 py-1.5 border hover:bg-gray-50">تيشيرتات وبولو</button>
                        <button onclick="filterCategory('shirts')" class="px-3 py-1.5 border hover:bg-gray-50">قمصان</button>
                        <button onclick="filterCategory('trousers')" class="px-3 py-1.5 border hover:bg-gray-50">بناطيل</button>
                        <button onclick="filterCategory('knitwear')" class="px-3 py-1.5 border hover:bg-gray-50">تريكو</button>
                        <button onclick="filterCategory('outerwear')" class="px-3 py-1.5 border hover:bg-gray-50">جاكيتات</button>
                    </div>
                </div>

                <div id="shop-grid" class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    ${PRODUCTS.map((p) => renderProductCard(p)).join("")}
                </div>
            </div>
        `;
    if (extraParam) {
      filterCollection(extraParam);
    }
  } else if (pageId === "size-guide") {
    main.innerHTML = `
            <div class="max-w-4xl mx-auto px-4 py-12 space-y-12">
                <div class="text-center space-y-2">
                    <h2 class="text-3xl font-bold text-[#282828]">دليل القياسات والمقاسات</h2>
                    <p class="text-xs text-gray-500">اختر مقاسك بدقة للتمتع بقصة مريحة ومظهر مرتب</p>
                </div>
                
                <div class="bg-white p-6 border border-[#D8CBB8]/40 space-y-4">
                    <h3 class="text-sm font-bold uppercase tracking-wider text-[#B08968]">1. القمصان والتيشيرتات والجاكيتات (قياس الجسم بالسم)</h3>
                    <table class="w-full text-xs text-center border-collapse">
                        <thead><tr class="bg-[#FAF9F6] border-b"><th class="p-2">المقاس</th><th class="p-2">الصدر</th><th class="p-2">الوسط</th><th class="p-2">الطول المناسب</th></tr></thead>
                        <tbody class="divide-y font-mono">
                            <tr><td class="p-2 font-bold">S</td><td>92 - 97</td><td>78 - 83</td><td>165 - 172</td></tr>
                            <tr><td class="p-2 font-bold">M</td><td>98 - 103</td><td>84 - 89</td><td>170 - 177</td></tr>
                            <tr><td class="p-2 font-bold">L</td><td>104 - 109</td><td>90 - 95</td><td>175 - 182</td></tr>
                            <tr><td class="p-2 font-bold">XL</td><td>110 - 115</td><td>96 - 101</td><td>178 - 185</td></tr>
                            <tr><td class="p-2 font-bold">XXL</td><td>116 - 121</td><td>102 - 107</td><td>180 - 190</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-white p-6 border border-[#D8CBB8]/40 space-y-4">
                    <h3 class="text-sm font-bold uppercase tracking-wider text-[#B08968]">2. البناطيل والشورتات (قياس الخصر بالسم)</h3>
                    <table class="w-full text-xs text-center border-collapse">
                        <thead><tr class="bg-[#FAF9F6] border-b"><th class="p-2">المقاس بالرقم</th><th class="p-2">30</th><th class="p-2">32</th><th class="p-2">34</th><th class="p-2">36</th><th class="p-2">38</th><th class="p-2">40</th></tr></thead>
                        <tbody class="font-mono"><tr><td class="p-2 font-bold bg-[#FAF9F6]">الوسط (سم)</td><td>76</td><td>81</td><td>86</td><td>91</td><td>97</td><td>102</td></tr></tbody>
                    </table>
                </div>
            </div>
        `;
  } else if (pageId === "about") {
    main.innerHTML = `
            <div class="max-w-3xl mx-auto px-4 py-16 space-y-8 text-center">
                <h2 class="text-3xl font-bold text-[#282828]">عن NOUR STYLE</h2>
                <p class="text-sm text-gray-600 leading-relaxed font-light">تأسست العلامة التجارية لتلبي احتياج الرجل العصري الذي يبحث عن الأناقة الكاجوال الهادئة بدون تكلف أو بوبارات ومطبوعات كبيرة. نؤمن بأن الفخامة الحقيقية تكمن في اختيار الخامة الممتازة والقصة اللطيفة واللون المتناسق.</p>
            </div>
        `;
  } else if (pageId === "shipping") {
    main.innerHTML = `
            <div class="max-w-3xl mx-auto px-4 py-12 space-y-8">
                <h2 class="text-2xl font-bold text-[#282828] text-center">سياسة الشحن والاستبدال</h2>
                <div class="bg-white p-6 border border-[#D8CBB8]/40 space-y-6 text-xs text-gray-600 leading-relaxed">
                    <div><h3 class="font-bold text-sm text-[#282828] mb-2">الشحن والتوصيل</h3><p>• التوصيل لجميع محافظات مصر خلال 2 إلى 5 أيام عمل.</p><p>• شحن مجاني للطلبات التي تتجاوز قيمتها 2500 ج.م.</p></div>
                    <div class="border-t pt-4"><h3 class="font-bold text-sm text-[#282828] mb-2">الاستبدال والاسترجاع</h3><p>• يُسمح بالاستبدال أو الاسترجاع خلال 14 يوماً من تاريخ استلام الطلب.</p></div>
                </div>
            </div>
        `;
  } else if (pageId === "contact") {
    main.innerHTML = `
            <div class="max-w-2xl mx-auto px-4 py-12 space-y-8 text-center">
                <h2 class="text-2xl font-bold text-[#282828]">تواصل معنا</h2>
                <div class="bg-white p-8 border border-[#D8CBB8]/40 space-y-4 text-xs">
                    <p class="font-bold text-[#282828]">دعم الواتساب والاتصال: <span class="text-gray-500">+20 100 000 0000</span></p>
                    <p class="font-bold text-[#282828]">إنستاجرام: <span class="text-gray-500">@nourstyle.eg</span></p>
                </div>
            </div>
        `;
  }
}

function renderProductCard(p) {
  return `
        <div onclick="openProductModal('${p.code}')" class="bg-white border border-[#D8CBB8]/30 hover:border-[#282828] cursor-pointer group transition flex flex-col justify-between">
            <div class="aspect-[3/4] bg-gray-50 overflow-hidden relative">
                <img src="${p.image}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onError="this.src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800'">
                <span class="absolute top-2 right-2 bg-[#282828]/80 text-white text-[9px] font-mono px-2 py-0.5">${p.code}</span>
            </div>
            <div class="p-4 space-y-2">
                <h4 class="text-xs font-bold text-[#282828] truncate">${p.name}</h4>
                <p class="text-[10px] text-gray-400 font-sans truncate">${p.enName}</p>
                <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span class="text-xs font-bold text-[#282828]">${p.price} ج.م</span>
                    <span class="text-[10px] text-[#B08968] underline font-medium">تفاصيل</span>
                </div>
            </div>
        </div>
    `;
}

function filterCategory(cat) {
  const grid = document.getElementById("shop-grid");
  const filtered =
    cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  grid.innerHTML = filtered.map((p) => renderProductCard(p)).join("");
}

function filterCollection(colId) {
  const targetCol = COLLECTIONS.find((c) => c.id === colId);
  if (!targetCol) return;
  const grid = document.getElementById("shop-grid");
  const filtered = PRODUCTS.filter((p) => targetCol.codes.includes(p.code));
  grid.innerHTML = filtered.map((p) => renderProductCard(p)).join("");
}

function filterProducts() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const grid = document.getElementById("shop-grid");
  const filtered = PRODUCTS.filter(
    (p) =>
      p.name.includes(query) ||
      p.code.toLowerCase().includes(query) ||
      p.enName.toLowerCase().includes(query),
  );
  grid.innerHTML = filtered.map((p) => renderProductCard(p)).join("");
}

function openProductModal(code) {
  const p = PRODUCTS.find((item) => item.code === code);
  const modal = document.getElementById("product-modal");
  const content = document.getElementById("modal-body-content");

  content.innerHTML = `
        <button onclick="closeModal()" class="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow">✕</button>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="bg-[#FAF9F6] h-80 md:h-full"><img src="${p.image}" class="w-full h-full object-cover"></div>
            <div class="p-6 md:p-8 space-y-6">
                <div>
                    <h2 class="text-2xl font-bold text-[#282828]">${p.name}</h2>
                    <p class="text-xs text-gray-400 font-sans">${p.enName}</p>
                    <p class="text-xl font-bold text-[#282828] mt-2">${p.price} ج.م</p>
                </div>
                <p class="text-xs text-gray-600 border-t border-b py-3">${p.desc}</p>
                <div>
                    <label class="block text-xs font-bold mb-2">المقاس:</label>
                    <div class="flex gap-2" id="size-options">
                        ${p.sizes.map((s, idx) => `<button onclick="selectOption(this)" class="px-3 py-1.5 border text-xs ${idx === 0 ? "bg-[#282828] text-white font-bold" : ""}">${s}</button>`).join("")}
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-bold mb-2">اللون:</label>
                    <div class="flex gap-2" id="color-options">
                        ${p.colors.map((c, idx) => `<button onclick="selectOption(this)" class="px-3 py-1.5 border text-xs ${idx === 0 ? "bg-[#282828] text-white font-bold" : ""}">${c}</button>`).join("")}
                    </div>
                </div>
                <div class="bg-[#FAF9F6] p-3 text-xs space-y-1 border">
                    <p><strong>الخامة:</strong> ${p.material}</p>
                    <p><strong>العناية:</strong> ${p.care}</p>
                </div>
                <button onclick="addToCart('${p.code}')" class="w-full bg-[#282828] text-white py-3 font-bold text-xs hover:bg-[#B08968]">إضافة إلى السلة</button>
            </div>
        </div>
    `;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  document.getElementById("product-modal").classList.add("hidden");
  document.getElementById("product-modal").classList.remove("flex");
}

function selectOption(btn) {
  const container = btn.parentElement;
  Array.from(container.children).forEach((el) =>
    el.classList.remove("bg-[#282828]", "text-white", "font-bold"),
  );
  btn.classList.add("bg-[#282828]", "text-white", "font-bold");
}

function toggleCart() {
  const drawer = document.getElementById("cart-drawer");
  if (drawer.classList.contains("hidden")) {
    drawer.classList.remove("hidden");
    drawer.classList.add("flex");
    renderCartItems();
  } else {
    drawer.classList.add("hidden");
    drawer.classList.remove("flex");
  }
}

function addToCart(code) {
  const p = PRODUCTS.find((item) => item.code === code);
  const selectedSize =
    document.querySelector("#size-options .bg-\\[\\#282828\\]")?.innerText ||
    p.sizes[0];
  const selectedColor =
    document.querySelector("#color-options .bg-\\[\\#282828\\]")?.innerText ||
    p.colors[0];

  cart.push({ ...p, selectedSize, selectedColor });
  document.getElementById("cart-count").innerText = cart.length;
  closeModal();
  toggleCart();
}

function renderCartItems() {
  const container = document.getElementById("cart-items-container");
  const footer = document.getElementById("cart-footer");

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-400 py-12 text-xs">السلة فارغة حالياً</p>`;
    footer.innerHTML = "";
    return;
  }

  let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  container.innerHTML = cart
    .map(
      (item, index) => `
        <div class="flex gap-4 items-center pt-3">
            <img src="${item.image}" class="w-14 h-18 object-cover border">
            <div class="flex-1">
                <h4 class="text-xs font-bold">${item.name}</h4>
                <p class="text-[10px] text-gray-500">${item.selectedSize} | ${item.selectedColor}</p>
                <p class="text-xs font-bold mt-1">${item.price} ج.م</p>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-500 text-xs">حذف</button>
        </div>
    `,
    )
    .join("");

  footer.innerHTML = `
        <div class="flex justify-between text-xs font-bold"><span>المجموع:</span><span>${subtotal} ج.م</span></div>
        <button onclick="alert('تم استلام طلبك بنجاح! شكراً لتسوقك من نوير استايل.')" class="w-full bg-[#282828] text-white py-3 text-xs font-bold hover:bg-[#B08968]">تأكيد الطلب الآن</button>
    `;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById("cart-count").innerText = cart.length;
  renderCartItems();
}

window.onload = () => showPage("home");
