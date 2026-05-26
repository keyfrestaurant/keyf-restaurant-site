/* ============================================================
   KEY-F RESTAURANT & CAFE — MENÜ VERİSİ
   ============================================================
   Menüyü güncellemek için SADECE bu dosyayı düzenle.
   menu.html dosyasına ve tasarıma dokunmana gerek yok.

   FİYAT:   "p" alanı sadece sayıdır (kuruşsuz). Örn: p: 890
            Sayfada otomatik olarak "₺890" diye gösterilir.
   İSİM:    "tr" = Türkçe isim, "en" = İngilizce isim
   AÇIKLAMA:"dtr" = Türkçe açıklama, "den" = İngilizce açıklama
            Açıklama yoksa "" (boş) bırak.
   ETİKET:  "tag_tr" / "tag_en" = fiyatın yanındaki küçük not
            (örn. "Tek Kişi"). Gerekmiyorsa hiç yazma.

   Yeni kalem eklemek: ilgili kategorinin "items" listesine
   yeni bir { ... } satırı ekle. Silmek için o satırı sil.
   Virgüllere dikkat et; her kalem } ile biter ve , ile ayrılır.
   ============================================================ */

window.MENU = {

  groups: [
    { id: "kahvalti-g", tr: "Kahvaltı",     en: "Breakfast",     cats: ["kahvalti"] },
    { id: "baslangic-g", tr: "Başlangıçlar", en: "Starters",      cats: ["baslangiclar","deniz-baslangic","atistirmalik","corbalar"] },
    { id: "ana-g",       tr: "Ana Yemekler", en: "Mains",         cats: ["salatalar","burger-wrap","pizzalar","makarnalar","deniz-urunleri","et","tavuk"] },
    { id: "cocuk-g",     tr: "Çocuk",        en: "Kids",          cats: ["cocuk"] },
    { id: "tatli-g",     tr: "Tatlılar",     en: "Desserts",      cats: ["tatlilar"] },
    { id: "icecek-g",    tr: "İçecekler",    en: "Drinks",        cats: ["kokteyl","mocktail","bira","kadeh-sarap","beyaz-sarap","roze-sarap","kirmizi-sarap","import","raki","soguk","sicak"] }
  ],

  categories: [

    { id: "kahvalti", tr: "Kahvaltı", en: "Breakfast", items: [
      { tr: "Key-f Serpme Kahvaltı", en: "Key-f Turkish Breakfast Spread", p: 890, tag_tr: "Tek Kişi", tag_en: "Per Person",
        dtr: "Zengin serpme kahvaltı deneyimi; peynir çeşitleri, zeytin çeşitleri, söğüş tabağı, tereyağı, bal ve kahvaltılık tatlılar, menemen gibi sıcak lezzetler ve sınırsız çay eşliğinde sunulur.",
        den: "A rich Turkish breakfast spread; a selection of cheeses and olives, fresh sliced vegetables, butter, honey and sweet spreads, hot dishes such as menemen, all served with unlimited tea." },
      { tr: "Tabak Kahvaltı", en: "Plated Breakfast", p: 560,
        dtr: "Klasik Türk kahvaltısının tek kişilik pratik bir alternatifi. Peynir çeşitleri, zeytinler, tereyağı, bal ve reçel, söğüş tabağı, simit ve çay ile servis edilir.",
        den: "A practical single-serving take on the classic Turkish breakfast. Served with a selection of cheeses, olives, butter, honey and jam, fresh sliced vegetables, simit (sesame bagel) and tea." },
      { tr: "Menemen", en: "Menemen", p: 420,
        dtr: "Domates ve yeşil biber ile hazırlanır.",
        den: "Turkish-style scrambled eggs prepared with tomatoes and green peppers." },
      { tr: "Peynirli Omlet", en: "Cheese Omelette", p: 380,
        dtr: "Kaşar peyniri ile hazırlanır.",
        den: "Prepared with kaşar cheese." },
      { tr: "Karışık Omlet", en: "Mixed Omelette", p: 460,
        dtr: "Dana sucuk ve salam, mantar, biber ve kaşar peyniri ile hazırlanır.",
        den: "Prepared with beef sucuk and salami, mushrooms, peppers and kaşar cheese." },
      { tr: "Karışık Tost", en: "Mixed Toasted Sandwich", p: 390,
        dtr: "Dana sucuk ve kaşar peyniri ile hazırlanır, mevsim salatası ile servis edilir.",
        den: "Prepared with beef sucuk and kaşar cheese, served with a seasonal salad." }
    ]},

    { id: "baslangiclar", tr: "Başlangıçlar", en: "Starters", items: [
      { tr: "Meze Tabağı", en: "Meze Platter", p: 820,
        dtr: "Günlük hazırlanan 5 çeşit meze, paylaşım ve tadım için ideal.",
        den: "Five varieties of freshly prepared meze, ideal for sharing and tasting." },
      { tr: "Izgara Hellim Peyniri", en: "Grilled Halloumi", p: 480,
        dtr: "Izgara hellim peyniri, domates dilimleri, roka ve zeytinyağı ile servis edilir.",
        den: "Grilled halloumi served with tomato slices, rocket and olive oil." },
      { tr: "Sarımsaklı Mantar", en: "Garlic Mushrooms", p: 460,
        dtr: "Tereyağı ve sarımsak ile sotelenmiş mantar, üzerine kaşar peyniri eklenerek servis edilir.",
        den: "Mushrooms sautéed in butter and garlic, topped with kaşar cheese." },
      { tr: "Paçanga Böreği", en: "Paçanga Böreği", p: 650,
        dtr: "Pastırma ve kaşar peynirli çıtır börek.",
        den: "Crispy pastry filled with pastırma (cured beef) and kaşar cheese." },
      { tr: "Chicken In London", en: "Chicken In London", p: 520,
        dtr: "İnce kesilmiş çıtır tavuk şeritleri, patates ve ballı hardal sos ile servis edilir.",
        den: "Thin-cut crispy chicken strips served with potatoes and honey mustard sauce." },
      { tr: "Kaşarlı Sarımsaklı Ekmek", en: "Cheesy Garlic Bread", p: 350,
        dtr: "Kaşar peyniri ve sarımsaklı tereyağı ile kızartılmış ekmek.",
        den: "Bread toasted with kaşar cheese and garlic butter." }
    ]},

    { id: "deniz-baslangic", tr: "Deniz Ürünleri Başlangıçlar", en: "Seafood Starters", items: [
      { tr: "Tereyağlı Karides", en: "Buttered Prawns", p: 950,
        dtr: "Sarımsaklı tereyağında sotelenmiş karides.",
        den: "Prawns sautéed in garlic butter." },
      { tr: "Kalamar Tava", en: "Fried Calamari", p: 1090,
        dtr: "Çıtır kalamar, tartar sos ile servis edilir.",
        den: "Crispy calamari served with tartar sauce." },
      { tr: "Ahtapot Izgara", en: "Grilled Octopus", p: 1250,
        dtr: "Izgara ahtapot zeytinyağı ve karabiber ile tatlandırılarak servis edilir.",
        den: "Grilled octopus finished with olive oil and black pepper." },
      { tr: "Sarımsaklı Midye Sote", en: "Sautéed Garlic Mussels", p: 580,
        dtr: "Sarımsaklı tereyağında sotelenmiş midye.",
        den: "Mussels sautéed in garlic butter." }
    ]},

    { id: "atistirmalik", tr: "Hafif Atıştırmalıklar", en: "Light Bites", items: [
      { tr: "Trüflü Parmesan Patates", en: "Truffle Parmesan Fries", p: 330,
        dtr: "Parmesan peyniri ve trüf yağı ile tatlandırılmış çıtır patates.",
        den: "Crispy fries seasoned with parmesan cheese and truffle oil." },
      { tr: "Key-f Atıştırmalık Tabağı", en: "Key-f Sharing Platter", p: 620,
        dtr: "Çıtır patates, soğan halkası, mozzarella stick, karides tempura ve çıtır tavuk parçaları.",
        den: "Crispy fries, onion rings, mozzarella sticks, prawn tempura and crispy chicken bites." }
    ]},

    { id: "corbalar", tr: "Çorbalar", en: "Soups", items: [
      { tr: "Kremalı Sebze Çorbası", en: "Creamy Vegetable Soup", p: 290,
        dtr: "İnce doğranmış sebzeler ile hazırlanan kremalı bir çorba.",
        den: "A creamy soup prepared with finely chopped vegetables." },
      { tr: "Deniz Mahsulleri Çorbası", en: "Seafood Soup", p: 580,
        dtr: "İnce doğranmış deniz mahsulleri ile hazırlanan kremalı çorba.",
        den: "A creamy soup prepared with finely chopped seafood." }
    ]},

    { id: "salatalar", tr: "Salatalar & Hafif Yemekler", en: "Salads & Light Meals", items: [
      { tr: "Tavuklu Sezar Salata", en: "Chicken Caesar Salad", p: 560,
        dtr: "Izgara tavuk dilimleri, parmesan peyniri ve Sezar sosu ile hazırlanır.",
        den: "Prepared with grilled chicken slices, parmesan cheese and Caesar dressing." },
      { tr: "Ton Balıklı Salata", en: "Tuna Salad", p: 540,
        dtr: "Ton balığı ve taze yeşilliklerle hazırlanır.",
        den: "Prepared with tuna and fresh greens." },
      { tr: "Izgara Hellim Salatası", en: "Grilled Halloumi Salad", p: 520,
        dtr: "Izgara hellim peyniri, taze yeşillikler ve ceviz parçalarıyla hazırlanır.",
        den: "Prepared with grilled halloumi, fresh greens and walnuts." },
      { tr: "Sıcak Steak Salata", en: "Warm Steak Salad", p: 990,
        dtr: "Biftek dilimleri, Worcestershire sos, Meksika fasulyesi ve krema ile sotelenerek mevsim yeşillikleri ve ceviz parçaları ile servis edilir.",
        den: "Steak slices sautéed with Worcestershire sauce, Mexican beans and cream, served over seasonal greens with walnuts." },
      { tr: "Roka Salatası", en: "Rocket Salad", p: 420,
        dtr: "İnce doğranmış taze roka, rende beyaz peynir ve zeytinyağı ile hazırlanır.",
        den: "Prepared with finely chopped fresh rocket, grated white cheese and olive oil." },
      { tr: "Çoban Salatası", en: "Shepherd's Salad", p: 420,
        dtr: "Maydanoz, domates, salatalık, sivri biber, kırmızı soğan ve zeytinyağı ile.",
        den: "Parsley, tomato, cucumber, green pepper, red onion and olive oil." }
    ]},

    { id: "burger-wrap", tr: "Burgerler ve Wraps", en: "Burgers & Wraps", items: [
      { tr: "Çıtır Tavuk Burger", en: "Crispy Chicken Burger", p: 520,
        dtr: "Çıtır panelenmiş tavuk, marul, ince dilim turşu ve özel sos ile hazırlanır, parmak patates ile servis edilir.",
        den: "Crispy breaded chicken, lettuce, thinly sliced pickles and special sauce, served with fries." },
      { tr: "Klasik Burger", en: "Classic Burger", p: 540,
        dtr: "Izgara dana köfte, özel sos, marul, domates, soğan ve turşu ile hazırlanır, parmak patates ile servis edilir.",
        den: "Grilled beef patty, special sauce, lettuce, tomato, onion and pickles, served with fries." },
      { tr: "Cheeseburger", en: "Cheeseburger", p: 580,
        dtr: "Izgara dana köfte, özel sos, cheddar peyniri, marul, domates, soğan ve turşu ile hazırlanır, parmak patates ile servis edilir.",
        den: "Grilled beef patty, special sauce, cheddar cheese, lettuce, tomato, onion and pickles, served with fries." },
      { tr: "Vegan Burger", en: "Vegan Burger", p: 490,
        dtr: "Bitkisel burger köftesi, marul, soğan ve domates, parmak patates ile servis edilir.",
        den: "Plant-based patty, lettuce, onion and tomato, served with fries." },
      { tr: "Tavuk Wrap", en: "Chicken Wrap", p: 500,
        dtr: "Biber, mantar ve soğan ile sotelenen jülyen tavuk, parmak patates ile servis edilir.",
        den: "Julienne chicken sautéed with peppers, mushrooms and onion, served with fries." },
      { tr: "Et Wrap", en: "Beef Wrap", p: 690,
        dtr: "Biber, mantar ve soğan ile sotelenen biftek dilimleri, parmak patates ile servis edilir.",
        den: "Steak slices sautéed with peppers, mushrooms and onion, served with fries." }
    ]},

    { id: "pizzalar", tr: "Pizzalar", en: "Pizzas", items: [
      { tr: "Key-f Special Pizza", en: "Key-f Special Pizza", p: 660,
        dtr: "Mozzarella, domates sos, dana salam, sosis ve sucuk, mantar, biber, mısır ve siyah zeytin.",
        den: "Mozzarella, tomato sauce, beef salami, sausage and sucuk, mushrooms, peppers, corn and black olives." },
      { tr: "Sucuklu Pizza", en: "Sucuk Pizza", p: 620,
        dtr: "Sucuk, mozzarella ve domates sos.",
        den: "Sucuk, mozzarella and tomato sauce." },
      { tr: "Acılı Tavuklu Pizza", en: "Spicy Chicken Pizza", p: 600,
        dtr: "İnce kesilmiş tavuk dilimleri, mozzarella, domates sos, kırmızı soğan, közlenmiş biber ve jalapeño.",
        den: "Thin-cut chicken slices, mozzarella, tomato sauce, red onion, roasted peppers and jalapeño." },
      { tr: "Akdeniz Ton Balıklı Pizza", en: "Mediterranean Tuna Pizza", p: 580,
        dtr: "Mozzarella, domates sos, ton balığı, cherry domates ve siyah zeytin ile hazırlanır, üzerine roka ve zeytinyağı ile servis edilir.",
        den: "Mozzarella, tomato sauce, tuna, cherry tomatoes and black olives, finished with rocket and olive oil." },
      { tr: "Key-f Karidesli Pizza", en: "Key-f Prawn Pizza", p: 740,
        dtr: "Karides, mozzarella, domates sos, mantar ve hafif sarımsak aroması ile hazırlanır, roka ile servis edilir.",
        den: "Prawns, mozzarella, tomato sauce, mushrooms and a hint of garlic, served with rocket." },
      { tr: "Cheese Lovers Pizza", en: "Cheese Lovers Pizza", p: 640,
        dtr: "Mozzarella, parmesan, cheddar ve tulum peyniri ile hazırlanmış yoğun ve dengeli lezzet.",
        den: "A rich, balanced blend of mozzarella, parmesan, cheddar and tulum cheese." },
      { tr: "Margherita Pizza", en: "Margherita Pizza", p: 520,
        dtr: "Mozzarella peyniri ve domates sos ile sade bir lezzet.",
        den: "A simple classic with mozzarella cheese and tomato sauce." }
    ]},

    { id: "makarnalar", tr: "Makarnalar", en: "Pasta", items: [
      { tr: "Tavuklu Alfredo", en: "Chicken Alfredo", p: 560,
        dtr: "Linguine makarna, mantar ve krema ile hazırlanır, üzerine parmesan ile servis edilir.",
        den: "Linguine prepared with mushrooms and cream, finished with parmesan." },
      { tr: "Linguine Bolognese", en: "Linguine Bolognese", p: 650,
        dtr: "Kıyma ve domates bazlı sos ile hazırlanan linguine makarna.",
        den: "Linguine prepared with a minced beef and tomato-based sauce." },
      { tr: "Penne Napoletana", en: "Penne Napoletana", p: 450,
        dtr: "Domates sos ile penne makarna, üzerine parmesan ile servis edilir.",
        den: "Penne in tomato sauce, finished with parmesan." },
      { tr: "Penne Arrabbiata", en: "Penne Arrabbiata", p: 480,
        dtr: "Acılı arrabbiata sos ile penne makarna, üzerine parmesan ile servis edilir.",
        den: "Penne in spicy arrabbiata sauce, finished with parmesan." },
      { tr: "Key-f Deniz Mahsulleri Makarna", en: "Key-f Seafood Pasta", p: 820,
        dtr: "Karides, kalamar ve seçili deniz ürünleri ile hazırlanan, pesto ve krema bazlı sos ile zenginleştirilmiş linguine.",
        den: "Linguine with prawns, calamari and selected seafood, enriched with a pesto and cream-based sauce." }
    ]},

    { id: "deniz-urunleri", tr: "Deniz Ürünleri", en: "Seafood", items: [
      { tr: "Levrek Izgara", en: "Grilled Sea Bass", p: 1090,
        dtr: "Tereyağlı baby patates sote ve mevsim yeşillikleri ile servis edilir.",
        den: "Served with butter-sautéed baby potatoes and seasonal greens." },
      { tr: "Izgara Somon", en: "Grilled Salmon", p: 1290,
        dtr: "Tereyağlı baby patates sote ve mevsim yeşillikleri ile servis edilir.",
        den: "Served with butter-sautéed baby potatoes and seasonal greens." },
      { tr: "Deniz Mahsulleri Güveç", en: "Seafood Casserole", p: 1150,
        dtr: "Karides, kalamar, ahtapot ve somon parçaları soğan ve renkli biberler ile sotelenir, kaşar peyniri ile fırınlanarak yanında sarımsaklı ekmek ile servis edilir.",
        den: "Prawns, calamari, octopus and salmon pieces sautéed with onion and colourful peppers, baked with kaşar cheese and served with garlic bread." },
      { tr: "Deniz Mahsulleri Güveç", en: "Seafood Casserole", p: 1790, tag_tr: "Paylaşım İçin İdeal", tag_en: "Ideal for Sharing",
        dtr: "Paylaşım için ideal porsiyon. Karides, kalamar, ahtapot ve somon parçaları soğan ve renkli biberler ile sotelenir, kaşar peyniri ile fırınlanarak yanında sarımsaklı ekmek ile servis edilir.",
        den: "A sharing-size portion. Prawns, calamari, octopus and salmon pieces sautéed with onion and colourful peppers, baked with kaşar cheese and served with garlic bread." }
    ]},

    { id: "et", tr: "Et Yemekleri", en: "Meat Dishes", items: [
      { tr: "Izgara Köfte", en: "Grilled Köfte", p: 890,
        dtr: "Parmak patates ve mevsim salata ile servis edilir.",
        den: "Grilled Turkish meatballs served with fries and a seasonal salad." },
      { tr: "Çoban Kavurma", en: "Çoban Kavurma", p: 1050,
        dtr: "Dana kuşbaşı et biber ve domates ile sotelenir, döküm tavada servis edilir.",
        den: "Cubed beef sautéed with peppers and tomatoes, served in a cast-iron pan." },
      { tr: "Çoban Kavurma", en: "Çoban Kavurma", p: 1690, tag_tr: "Paylaşım İçin İdeal", tag_en: "Ideal for Sharing",
        dtr: "Paylaşım için ideal porsiyon. Dana kuşbaşı et biber ve domates ile sotelenir, döküm tavada servis edilir.",
        den: "A sharing-size portion. Cubed beef sautéed with peppers and tomatoes, served in a cast-iron pan." },
      { tr: "Dana Bonfile Izgara", en: "Grilled Beef Tenderloin", p: 1890,
        dtr: "Tereyağlı baby patates ve mevsim sebze garnitürü ile servis edilir.",
        den: "Served with butter-sautéed baby potatoes and a seasonal vegetable garnish." },
      { tr: "Biber Soslu Bonfile", en: "Beef Tenderloin with Pepper Sauce", p: 1890,
        dtr: "Tereyağlı baby patates ve mevsim sebze garnitürü ile servis edilir.",
        den: "Served with butter-sautéed baby potatoes and a seasonal vegetable garnish." },
      { tr: "Mantar Soslu Bonfile", en: "Beef Tenderloin with Mushroom Sauce", p: 1890,
        dtr: "Tereyağlı baby patates ve mevsim sebze garnitürü ile servis edilir.",
        den: "Served with butter-sautéed baby potatoes and a seasonal vegetable garnish." },
      { tr: "Rokfor Soslu Bonfile", en: "Beef Tenderloin with Roquefort Sauce", p: 2050,
        dtr: "Tereyağlı baby patates ve mevsim sebze garnitürü ile servis edilir.",
        den: "Served with butter-sautéed baby potatoes and a seasonal vegetable garnish." }
    ]},

    { id: "tavuk", tr: "Tavuk Yemekleri", en: "Chicken Dishes", items: [
      { tr: "Kremalı Mantar Soslu Tavuk", en: "Chicken in Creamy Mushroom Sauce", p: 630,
        dtr: "Mantar ve krema ile sotelenmiş tavuk göğsü, sebze garnitürü ve parmak patates ile.",
        den: "Chicken breast sautéed with mushrooms and cream, served with a vegetable garnish and fries." },
      { tr: "Fajita Tavuk", en: "Chicken Fajita", p: 700,
        dtr: "Yüksek ateşte renkli biberler ve soğan ile sotelenen tavuk göğsü, sıcak döküm tavada servis edilir.",
        den: "Chicken breast sautéed over high heat with colourful peppers and onion, served in a hot cast-iron pan." },
      { tr: "Tavuk Şinitzel", en: "Chicken Schnitzel", p: 650,
        dtr: "Altın renginde çıtır pane tavuk, patates salatası ile servis edilir.",
        den: "Golden, crispy breaded chicken served with potato salad." },
      { tr: "Köri Soslu Tavuk", en: "Chicken in Curry Sauce", p: 620,
        dtr: "Köri baharatı, mantar, soğan ve krema ile sotelenmiş tavuk göğsü, sebze garnitürü ve parmak patates ile.",
        den: "Chicken breast sautéed with curry spice, mushrooms, onion and cream, served with a vegetable garnish and fries." },
      { tr: "Sebzeli Thai Tavuk", en: "Thai-Style Chicken with Vegetables", p: 630,
        dtr: "Renkli biberler ve sebzeler ile sotelenmiş tavuk göğsü, susam ile tamamlanır, sebze garnitürü ve parmak patates ile servis edilir.",
        den: "Chicken breast sautéed with colourful peppers and vegetables, finished with sesame, served with a vegetable garnish and fries." },
      { tr: "Izgara Tavuk", en: "Grilled Chicken", p: 560,
        dtr: "Baharatlar ile marine edilmiş ızgara tavuk göğsü, mevsim salata ve parmak patates ile servis edilir.",
        den: "Marinated grilled chicken breast served with a seasonal salad and fries." }
    ]},

    { id: "cocuk", tr: "Çocuk Menüsü", en: "Kids' Menu", items: [
      { tr: "Little Burger", en: "Little Burger", p: 420,
        dtr: "Izgara dana köftesi ve cheddar peyniri, parmak patates ile.",
        den: "Grilled beef patty and cheddar cheese, served with fries." },
      { tr: "Little Pizza", en: "Little Pizza", p: 360,
        dtr: "Domates sos, mozzarella ve sucuk ile mini pizza.",
        den: "Mini pizza with tomato sauce, mozzarella and sucuk." },
      { tr: "Little Pasta", en: "Little Pasta", p: 400,
        dtr: "Domates soslu penne makarna.",
        den: "Penne in tomato sauce." },
      { tr: "Tavuk Nugget", en: "Chicken Nuggets", p: 400,
        dtr: "Dışı çıtır, içi yumuşacık tavuk nugget, parmak patates ile.",
        den: "Crispy on the outside, tender inside, served with fries." }
    ]},

    { id: "tatlilar", tr: "Tatlılar", en: "Desserts", items: [
      { tr: "Çikolatalı Sufle", en: "Chocolate Soufflé", p: 520,
        dtr: "İçi akışkan, sıcak servis edilen yoğun çikolatalı tatlı, kaymak dondurma ile servis edilir.",
        den: "A rich molten chocolate dessert served warm with clotted cream ice cream." },
      { tr: "Limonlu Cheesecake", en: "Lemon Cheesecake", p: 480,
        dtr: "Hafif, kremsi dokusu ve ferah limon aroması ile hazırlanır.",
        den: "Prepared with a light, creamy texture and a refreshing lemon aroma." },
      { tr: "Affogato", en: "Affogato", p: 320,
        dtr: "Vanilyalı dondurma üzerine sıcak espresso dökülerek servis edilir.",
        den: "Vanilla ice cream topped with a shot of hot espresso." }
    ]},

    { id: "kokteyl", tr: "Kokteyller", en: "Cocktails", items: [
      { tr: "Sunset Spritz", en: "Sunset Spritz", p: 620,
        dtr: "Aperol, Prosecco ve soda ile hazırlanan ferahlatıcı, hafif ve gün batımı için ideal bir aperatif.",
        den: "A refreshing, light aperitif of Aperol, Prosecco and soda — perfect for sunset." },
      { tr: "Mediterranean Mojito", en: "Mediterranean Mojito", p: 620,
        dtr: "Taze nane, lime, soda ve rom ile yaz için vazgeçilmez bir klasik.",
        den: "Fresh mint, lime, soda and rum — a summer essential." },
      { tr: "Strawberry Mojito", en: "Strawberry Mojito", p: 660,
        dtr: "Taze nane, lime, soda, çilek ve rom ile tatlı ve ferah bir alternatif.",
        den: "Fresh mint, lime, soda, strawberry and rum — a sweet, refreshing twist." },
      { tr: "Beach Vibes", en: "Beach Vibes", p: 580,
        dtr: "Votka, Archers şeftali likörü, portakal suyu ve grenadine ile meyvemsi ve kolay içimli.",
        den: "Vodka, Archers peach liqueur, orange juice and grenadine — fruity and easy-drinking." },
      { tr: "Tropical Colada", en: "Tropical Colada", p: 620,
        dtr: "Rom, Malibu, hindistan cevizi ve ananas ile tropikal, kremamsı ve yumuşak içimli.",
        den: "Rum, Malibu, coconut and pineapple — tropical, creamy and smooth." },
      { tr: "Golden Margarita", en: "Golden Margarita", p: 620,
        dtr: "Tekila, triple sec, lime suyu ile dengeli ve ferah bir klasik.",
        den: "Tequila, triple sec and lime juice — a balanced, refreshing classic." },
      { tr: "Tennessee Lemonade", en: "Tennessee Lemonade", p: 620,
        dtr: "Jack Daniel's, lime ve soda ile hafif ekşi, ferah ve içimi kolay bir viski kokteyli.",
        den: "Jack Daniel's, lime and soda — a lightly tart, refreshing and easy-drinking whiskey cocktail." },
      { tr: "Midnight Espresso", en: "Midnight Espresso", p: 640,
        dtr: "Votka, kahve likörü ve espresso ile yoğun aromalı ve güçlü bir tercih.",
        den: "Vodka, coffee liqueur and espresso — intensely aromatic and bold." },
      { tr: "Negroni", en: "Negroni", p: 650,
        dtr: "Cin, Campari ve vermut ile yoğun, bitter ve karakterli bir klasik.",
        den: "Gin, Campari and vermouth — intense, bitter and full of character." }
    ]},

    { id: "mocktail", tr: "Mocktails", en: "Mocktails", items: [
      { tr: "Fresh Mint Cooler", en: "Fresh Mint Cooler", p: 420,
        dtr: "Taze nane ve lime ile ferahlatıcı ve hafif bir içecek.",
        den: "A light, refreshing drink with fresh mint and lime." },
      { tr: "Strawberry Fresh Mint Cooler", en: "Strawberry Fresh Mint Cooler", p: 440,
        dtr: "Çilek ve nane ile tatlı ve ferah bir alternatif.",
        den: "A sweet, refreshing twist with strawberry and mint." },
      { tr: "Energy Boost", en: "Energy Boost", p: 440,
        dtr: "Red Bull, portakal ve lime ile enerjik ve ferahlatıcı.",
        den: "Energising and refreshing, with Red Bull, orange and lime." }
    ]},

    { id: "bira", tr: "Biralar", en: "Beers", items: [
      { tr: "Efes Pilsen", en: "Efes Pilsen", p: 260, dtr: "", den: "" },
      { tr: "Efes Malt", en: "Efes Malt", p: 270, dtr: "", den: "" },
      { tr: "Efes Özel Seri", en: "Efes Özel Seri", p: 270, dtr: "", den: "" },
      { tr: "Bomonti Filtresiz", en: "Bomonti Filtresiz", p: 290, dtr: "", den: "" },
      { tr: "Belfast", en: "Belfast", p: 290, dtr: "", den: "" },
      { tr: "Beck's", en: "Beck's", p: 310, dtr: "", den: "" },
      { tr: "Bud", en: "Bud", p: 320, dtr: "", den: "" },
      { tr: "Stella Artois", en: "Stella Artois", p: 320, dtr: "", den: "" },
      { tr: "Miller", en: "Miller", p: 290, dtr: "", den: "" },
      { tr: "Corona", en: "Corona", p: 360, dtr: "", den: "" }
    ]},

    { id: "kadeh-sarap", tr: "Kadeh Şaraplar", en: "Wine by the Glass", items: [
      { tr: "House Wine", en: "House Wine", p: 340, dtr: "Kırmızı | Beyaz | Roze", den: "Red | White | Rosé" },
      { tr: "Angora", en: "Angora", p: 520, dtr: "Kırmızı | Beyaz", den: "Red | White" },
      { tr: "Lal", en: "Lal", p: 520, dtr: "Roze", den: "Rosé" },
      { tr: "Prosecco Frizzante", en: "Prosecco Frizzante", p: 720, dtr: "Köpüklü", den: "Sparkling" }
    ]},

    { id: "beyaz-sarap", tr: "Beyaz Şaraplar", en: "White Wines", items: [
      { tr: "Angora", en: "Angora", p: 1650, dtr: "Hafif gövdeli, dengeli.", den: "Light-bodied and balanced." },
      { tr: "Çankaya", en: "Çankaya", p: 1750, dtr: "Taze, aromatik, hafif meyvemsi.", den: "Fresh, aromatic and lightly fruity." },
      { tr: "Ancyra Sauvignon Blanc", en: "Ancyra Sauvignon Blanc", p: 1800, dtr: "Canlı asidite, narenciye aromaları.", den: "Bright acidity with citrus aromas." },
      { tr: "Sartori Pinot Grigio", en: "Sartori Pinot Grigio", p: 2350, dtr: "Hafif, ferahlatıcı ve zarif.", den: "Light, refreshing and elegant." },
      { tr: "Montes Alpha Chardonnay", en: "Montes Alpha Chardonnay", p: 3450, dtr: "Zengin aromalı, dengeli ve uzun bitiş.", den: "Rich in aroma, balanced, with a long finish." }
    ]},

    { id: "roze-sarap", tr: "Roze Şaraplar", en: "Rosé Wines", items: [
      { tr: "Lal", en: "Lal", p: 1750, dtr: "Taze, canlı, yaz için vazgeçilmez.", den: "Fresh and vibrant — a summer essential." },
      { tr: "Pinot Grigio Blush", en: "Pinot Grigio Blush", p: 2350, dtr: "Hafif ve çiçeksi aromalar.", den: "Light with floral aromas." }
    ]},

    { id: "kirmizi-sarap", tr: "Kırmızı Şaraplar", en: "Red Wines", items: [
      { tr: "Yakut", en: "Yakut", p: 1750, dtr: "Türk üzümünün zarif yorumu, dengeli.", den: "An elegant expression of Turkish grapes, well balanced." },
      { tr: "La Folie Merlot", en: "La Folie Merlot", p: 2250, dtr: "Yumuşak, meyvemsi ve kadifemsi doku.", den: "Soft and fruity with a velvety texture." },
      { tr: "Montes Cabernet Sauvignon", en: "Montes Cabernet Sauvignon", p: 2950, dtr: "Dolgun, karakterli, uzun bitiş.", den: "Full-bodied, characterful, with a long finish." },
      { tr: "Le Terre Chianti", en: "Le Terre Chianti", p: 2950, dtr: "Dengeli, akıcı, klasik İtalyan kırmızısı.", den: "Balanced and smooth — a classic Italian red." },
      { tr: "Selection Öküzgözü & Boğazkere", en: "Selection Öküzgözü & Boğazkere", p: 3400, dtr: "Türk üzümlerinden kupaj, uzun bitiş.", den: "A blend of Turkish grapes with a long finish." },
      { tr: "Montes Alpha Syrah", en: "Montes Alpha Syrah", p: 3450, dtr: "Yoğun, baharatlı, dolgun gövdeli.", den: "Intense, spicy and full-bodied." }
    ]},

    { id: "import", tr: "İmport İçkiler", en: "Spirits & Liqueurs", items: [
      { tr: "Gordon's London Dry", en: "Gordon's London Dry", p: 260, dtr: "4 cl", den: "4 cl" },
      { tr: "Tanqueray London Dry", en: "Tanqueray London Dry", p: 320, dtr: "4 cl", den: "4 cl" },
      { tr: "Smirnoff", en: "Smirnoff", p: 260, dtr: "4 cl", den: "4 cl" },
      { tr: "Absolut Blue", en: "Absolut Blue", p: 300, dtr: "4 cl", den: "4 cl" },
      { tr: "Grey Goose", en: "Grey Goose", p: 380, dtr: "4 cl", den: "4 cl" },
      { tr: "Jameson Irish", en: "Jameson Irish", p: 340, dtr: "4 cl", den: "4 cl" },
      { tr: "Jack Daniel's Old No.7", en: "Jack Daniel's Old No.7", p: 340, dtr: "4 cl", den: "4 cl" },
      { tr: "J.W. Black Label", en: "J.W. Black Label", p: 360, dtr: "4 cl", den: "4 cl" },
      { tr: "Chivas Regal 12 Y.O", en: "Chivas Regal 12 Y.O", p: 380, dtr: "4 cl", den: "4 cl" },
      { tr: "Gentleman Jack", en: "Gentleman Jack", p: 360, dtr: "4 cl", den: "4 cl" },
      { tr: "Woodford Reserve", en: "Woodford Reserve", p: 400, dtr: "4 cl", den: "4 cl" },
      { tr: "Glenfiddich 12 Y.O", en: "Glenfiddich 12 Y.O", p: 440, dtr: "4 cl", den: "4 cl" },
      { tr: "Monkey Shoulder Smokey Monkey", en: "Monkey Shoulder Smokey Monkey", p: 390, dtr: "4 cl", den: "4 cl" },
      { tr: "Bacardi", en: "Bacardi", p: 280, dtr: "4 cl", den: "4 cl" },
      { tr: "Captain Morgan Gold", en: "Captain Morgan Gold", p: 320, dtr: "4 cl", den: "4 cl" },
      { tr: "Courvoisier VS", en: "Courvoisier VS", p: 420, dtr: "4 cl", den: "4 cl" },
      { tr: "Courvoisier VSOP", en: "Courvoisier VSOP", p: 660, dtr: "4 cl", den: "4 cl" },
      { tr: "Baileys", en: "Baileys", p: 300, dtr: "4 cl", den: "4 cl" },
      { tr: "Malibu", en: "Malibu", p: 280, dtr: "4 cl", den: "4 cl" },
      { tr: "Martini Bianco | Rosso | Extra Dry", en: "Martini Bianco | Rosso | Extra Dry", p: 280, dtr: "4 cl", den: "4 cl" }
    ]},

    { id: "raki", tr: "Rakılar", en: "Raki",
      note_en: "Türkiye's traditional anise-flavoured spirit, served with chilled water and ice.", items: [
      { tr: "Yeni Rakı Yeni Seri 20 cl", en: "Yeni Rakı Yeni Seri 20 cl", p: 1400, dtr: "", den: "" },
      { tr: "Yeni Rakı Yeni Seri 35 cl", en: "Yeni Rakı Yeni Seri 35 cl", p: 1950, dtr: "", den: "" },
      { tr: "Yeni Rakı Yeni Seri 50 cl", en: "Yeni Rakı Yeni Seri 50 cl", p: 2650, dtr: "", den: "" },
      { tr: "Yeni Rakı Yeni Seri 70 cl", en: "Yeni Rakı Yeni Seri 70 cl", p: 3200, dtr: "", den: "" },
      { tr: "Beylerbeyi Mavi 20 cl", en: "Beylerbeyi Mavi 20 cl", p: 1500, dtr: "", den: "" },
      { tr: "Beylerbeyi Mavi 35 cl", en: "Beylerbeyi Mavi 35 cl", p: 2250, dtr: "", den: "" },
      { tr: "Beylerbeyi Mavi 50 cl", en: "Beylerbeyi Mavi 50 cl", p: 2900, dtr: "", den: "" },
      { tr: "Beylerbeyi Mavi 70 cl", en: "Beylerbeyi Mavi 70 cl", p: 3500, dtr: "", den: "" },
      { tr: "Efe Gold 20 cl", en: "Efe Gold 20 cl", p: 1650, dtr: "", den: "" },
      { tr: "Efe Gold 35 cl", en: "Efe Gold 35 cl", p: 2400, dtr: "", den: "" },
      { tr: "Efe Gold 50 cl", en: "Efe Gold 50 cl", p: 3150, dtr: "", den: "" },
      { tr: "Efe Gold 70 cl", en: "Efe Gold 70 cl", p: 3750, dtr: "", den: "" },
      { tr: "Tekirdağ Altın Seri 20 cl", en: "Tekirdağ Altın Seri 20 cl", p: 1650, dtr: "", den: "" },
      { tr: "Tekirdağ Altın Seri 35 cl", en: "Tekirdağ Altın Seri 35 cl", p: 2400, dtr: "", den: "" },
      { tr: "Tekirdağ Altın Seri 50 cl", en: "Tekirdağ Altın Seri 50 cl", p: 3150, dtr: "", den: "" },
      { tr: "Tekirdağ Altın Seri 70 cl", en: "Tekirdağ Altın Seri 70 cl", p: 3750, dtr: "", den: "" },
      { tr: "Beylerbeyi Göbek 20 cl", en: "Beylerbeyi Göbek 20 cl", p: 1850, dtr: "", den: "" },
      { tr: "Beylerbeyi Göbek 35 cl", en: "Beylerbeyi Göbek 35 cl", p: 2900, dtr: "", den: "" },
      { tr: "Beylerbeyi Göbek 50 cl", en: "Beylerbeyi Göbek 50 cl", p: 3700, dtr: "", den: "" },
      { tr: "Beylerbeyi Göbek 70 cl", en: "Beylerbeyi Göbek 70 cl", p: 4400, dtr: "", den: "" },
      { tr: "Sarı Zeybek 3 Meşe 20 cl", en: "Sarı Zeybek 3 Meşe 20 cl", p: 1950, dtr: "", den: "" },
      { tr: "Sarı Zeybek 3 Meşe 35 cl", en: "Sarı Zeybek 3 Meşe 35 cl", p: 3100, dtr: "", den: "" },
      { tr: "Sarı Zeybek 3 Meşe 50 cl", en: "Sarı Zeybek 3 Meşe 50 cl", p: 3900, dtr: "", den: "" },
      { tr: "Sarı Zeybek 3 Meşe 70 cl", en: "Sarı Zeybek 3 Meşe 70 cl", p: 4600, dtr: "", den: "" }
    ]},

    { id: "soguk", tr: "Soğuk İçecekler", en: "Cold Drinks", items: [
      { tr: "Coca Cola | Fanta | Sprite", en: "Coca Cola | Fanta | Sprite", p: 160, dtr: "", den: "" },
      { tr: "Fuse Tea Limon | Şeftali", en: "Fuse Tea Lemon | Peach", p: 180, dtr: "", den: "" },
      { tr: "Cappy Meyve Suları", en: "Cappy Fruit Juices", p: 180, dtr: "", den: "" },
      { tr: "Schweppes Tonic | Bitter Limon | Mandarin", en: "Schweppes Tonic | Bitter Lemon | Mandarin", p: 220, dtr: "", den: "" },
      { tr: "Red Bull", en: "Red Bull", p: 250, dtr: "", den: "" },
      { tr: "Taze Portakal Suyu", en: "Fresh Orange Juice", p: 240, dtr: "", den: "" },
      { tr: "Limonata", en: "Lemonade", p: 220, dtr: "", den: "" },
      { tr: "San Pellegrino", en: "San Pellegrino", p: 290, dtr: "750 ml", den: "750 ml" },
      { tr: "Cam Şişe Su", en: "Bottled Water (Glass)", p: 120, dtr: "750 ml", den: "750 ml" }
    ]},

    { id: "sicak", tr: "Sıcak İçecekler", en: "Hot Drinks", items: [
      { tr: "Türk Kahvesi", en: "Turkish Coffee", p: 140, dtr: "", den: "" },
      { tr: "Espresso", en: "Espresso", p: 140, dtr: "", den: "" },
      { tr: "Americano", en: "Americano", p: 160, dtr: "", den: "" },
      { tr: "Latte", en: "Latte", p: 210, dtr: "", den: "" },
      { tr: "Cappuccino", en: "Cappuccino", p: 210, dtr: "", den: "" },
      { tr: "Ice Latte", en: "Iced Latte", p: 240, dtr: "", den: "" },
      { tr: "Irish Coffee", en: "Irish Coffee", p: 460, dtr: "", den: "" },
      { tr: "Baileys Latte | Cappuccino", en: "Baileys Latte | Cappuccino", p: 440, dtr: "", den: "" }
    ]}

  ]
};
