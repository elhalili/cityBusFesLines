const DATA = {
    ln2: {
        start: "باب الجياف",
        end: "حي الحسني (عوينة الحجاج)"
    },

    ln4: {
        start: "واد فاس (تجزئة مولاي ادريس)	",
        end: "تجزئة مولاي ادريس R"
    },

    ln5: {
        start: "باب الجياف	",
        end: "دائرة المرجى"
    },

    ln6: {
        start: "شارع عبد السلام السرغيني",
        end: "نادي ضهر المهراز"
    },
    ln9: {
        start: "بورمانة",
        end: "البطحاء"
    },
    ln10: {
        start: "شارع مصر",
        end: "شارع مصر"
    },
    ln11: {
        start: "الزهور",
        end: "البطحاء"
    },
    ln12: {
        start: "باب الفتوح",
        end: "فلورونس"
    },
    ln13: {
        start: "محطة القطار ONCF",
        end: "كلية الشريعة"
    },
    ln14: {
        start: "باب الجياف",
        end: "حي زواغة (مقهى إسطنبول)"
    },
    ln15: {
        start: "فلورونس",
        end: "طريق عين الشقف"
    },
    ln16: {
        start: "محطة القطار ONCF",
        end: "مطار سايس"
    },
    ln17: {
        start: "الجبري",
        end: "عين الشقف"
    },
    ln18: {
        start: "بوجلود",
        end: "مولاي يعقوب"
    },
    ln19: {
        start: "الرصيف",
        end: "محطة القطار ONCF"
    },
    ln20: {
        start: "فلورونس",
        end: "ابن سليمان"
    },
    ln20b: {
        start: "فلورونس",
        end: "حي بالخياط"
    },
    ln22: {
        start: "بوجلود",
        end: "واد فاس (تجزئة مولاي ادريس)"
    },
    ln23: {
        start: "بلدية أگدال",
        end: "حي الزهور"
    },
    ln23b: {
        start: "سيدي بوجيدة",
        end: "مونفلوري R"
    },
    ln24: {
        start: "عوينة الحجاج",
        end: "شارع لالة أسماء (Station Total)"
    },
    ln25: {
        start: "باب الفتوح",
        end: "حي المسيرة"
    },
    ln26: {
        start: "ابن صفار (صفرو)",
        end: "البهاليل"
    },
    ln28: {
        start: "باب فتوح",
        end: "قنصرة (Kansara)"
    },
    ln28b: {
        start: "شارع مصر",
        end: "السخينات – مخاليف"
    },
    ln29: {
        start: "بورمانة",
        end: "الرصيف"
    },
    ln30: {
        start: "الجبري",
        end: "واد فاس (تجزئة مولاي ادريس)"
    },
    ln31: {
        start: "حي الشهداء (صيدلية الكلية)",
        end: "كلية سايس"
    },
    ln32: {
        start: "محطة القطار ONCF",
        end: "عين السمن – حي العنبرة"
    },
    ln33: {
        start: "بوجلود",
        end: "عين الله"
    },
    ln34: {
        start: "",
        end: ""
    },
    ln35: {
        start: "",
        end: ""
    },
    ln36: {
        start: "",
        end: ""
    },
    ln38: {
        start: "",
        end: ""
    },
    ln39: {
        start: "",
        end: ""
    },
    ln40: {
        start: "",
        end: ""
    },
    ln41: {
        start: "",
        end: ""
    },
    ln42: {
        start: "",
        end: ""
    },
    ln43: {
        start: "",
        end: ""
    },
    ln44: {
        start: "",
        end: ""
    },
    ln45: {
        start: "",
        end: ""
    },
    ln46: {
        start: "",
        end: ""
    },
    ln49: {
        start: "",
        end: ""
    },
    ln50: {
        start: "باب الجياف",
        end: "حي لالة سكينة"
    },
    ln51: {
        start: "الزهور",
        end: "سيدي بوجيدة"
    },
    ln52: {
        start: "شارع مصر",
        end: "سيدي بوجيدة"
    },
    ln53: {
        start: "صهب الورد",
        end: "شارع مصر"
    },
    ln54: {
        start: "الرصيف",
        end: "الرصيف (سينما الأمل)"
    },
}
const resault = document.getElementById('resault');
const input = document.getElementById('input');
const start = document.getElementById('start');
const end = document.getElementById('end');

function run() {
    let key = `ln${input.value}`;
    if (!DATA[key]) {
        resault.style.display = 'none';
        warning.style.display = 'block';
    }
    else {
        resault.style.display = 'flex';
        warning.style.display = 'none';
        start.innerHTML = DATA[key].start;
        end.innerHTML = DATA[key].end;
    }
    input.value = '';
}
