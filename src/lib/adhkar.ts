
type Dhikr = {
  title: string;
  content: string;
  count: string;
  virtue: string;
};

type AdhkarCollection = {
  morning: Dhikr[];
  evening: Dhikr[];
};

export const adhkar: { [key: string]: AdhkarCollection } = {
  ar: {
    morning: [
      {
        title: "آية الكرسي",
        content: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ mَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
        count: "مرة واحدة",
        virtue: "من قالها حين يصبح أجير من الجن حتى يمسي."
      },
      {
        title: "المعوذات",
        content: "قُلْ هُوَ اللَّهُ أَحَدٌ... / قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... / قُلْ أَعُوذُ بِرَبِّ النَّاسِ...",
        count: "ثلاث مرات",
        virtue: "من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء."
      },
      {
        title: "دعاء الصباح",
        content: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
        count: "مرة واحدة",
        virtue: "من أذكار الصباح المأثورة."
      },
      {
        title: "سيد الاستغفار",
        content: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
        count: "مرة واحدة",
        virtue: "من قالها موقناً بها حين يصبح، فمات من يومه دخل الجنة."
      },
      {
        title: "دعاء شامل",
        content: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",
        count: "مرة واحدة",
        virtue: "من أذكار الصباح المأثورة."
      },
      {
        title: "دعاء العافية",
        content: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.",
        count: "ثلاث مرات",
        virtue: "دعاء شامل للعافية في الدين والدنيا."
      },
      {
        title: "دعاء الهم والحزن",
        content: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ.",
        count: "مرة واحدة",
        virtue: "يُذهب الله به الهم ويقضي الدين."
      },
      {
        title: "دعاء الكرب",
        content: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
        count: "ثلاث مرات",
        virtue: "من دعاء الكرب والشدة."
      },
      {
        title: "التسبيح والتحميد",
        content: "سُبْحَانَ اللهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.",
        count: "ثلاث مرات",
        virtue: "له فضل عظيم وأجر مضاعف."
      },
      {
        title: "دعاء الرضا",
        content: "رَضِيتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.",
        count: "ثلاث مرات",
        virtue: "من قالها ثلاثاً حين يصبح كان حقاً على الله أن يرضيه يوم القيامة."
      },
      {
        title: "التوكل على الله",
        content: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
        count: "ثلاث مرات",
        virtue: "لم يضره من الله شيء."
      },
      {
        title: "الاستعاذة من شر الخلق",
        content: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
        count: "ثلاث مرات",
        virtue: "لم يضره شيء."
      },
      {
        title: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        content: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
        count: "مائة مرة",
        virtue: "حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ."
      },
      {
        title: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ...",
        content: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
        count: "مائة مرة",
        virtue: "كَانَتْ لَهُ عَدْلَ عَشْرِ رِقَابٍ، وَكُتِبَتْ لَهُ مِائَةُ حَسَنَةٍ، وَمُحِيَتْ عَنْهُ مِائَةُ سَيِّئَةٍ، وَكَانَتْ لَهُ حِرْزًا مِنَ الشَّيْطَانِ يَوْمَهُ ذَلِكَ حَتَّى يُمْسِيَ."
      }
    ],
    evening: [
        {
          title: "آية الكرسي",
          content: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ... (نفس الآية)",
          count: "مرة واحدة",
          virtue: "من قالها حين يمسي أجير من الجن حتى يصبح."
        },
        {
          title: "المعوذات",
          content: "قُلْ هُوَ اللَّهُ أَحَدٌ... / قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ... / قُلْ أَعُوذُ بِرَبِّ النَّاسِ...",
          count: "ثلاث مرات",
          virtue: "من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء."
        },
        {
          title: "دعاء المساء",
          content: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
          count: "مرة واحدة",
          virtue: "من أذكار المساء المأثورة."
        },
        {
          title: "سيد الاستغفار",
          content: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ... (نفس الدعاء)",
          count: "مرة واحدة",
          virtue: "من قالها موقناً بها حين يمسي، فمات من ليلته دخل الجنة."
        },
        {
          title: "دعاء شامل",
          content: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",
          count: "مرة واحدة",
          virtue: "من أذكار المساء المأثورة."
        },
        {
          title: "دعاء الحماية",
          content: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
          count: "ثلاث مرات",
          virtue: "من قالها حين يمسي لم يضره شيء."
        },
        {
          title: "دعاء العافية",
          content: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
          count: "مرة واحدة",
          virtue: "دعاء شامل للحفظ والعافية."
        },
        {
          title: "التوكل على الله",
          content: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
          count: "ثلاث مرات",
          virtue: "لم يضره من الله شيء."
        },
        {
          title: "دعاء الرضا",
          content: "رَضِيتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.",
          count: "ثلاث مرات",
          virtue: "من قالها ثلاثاً حين يمسي كان حقاً على الله أن يرضيه يوم القيامة."
        },
        {
          title: "التسبيح والتهليل",
          content: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
          count: "عشر مرات",
          virtue: "كانت له كعتق أربع أنفس من ولد إسماعيل."
        },
        {
          title: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
          content: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
          count: "مائة مرة",
          virtue: "حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ."
        }
      ]
  },
  en: {
    morning: [
        {
            title: "Ayat al-Kursi",
            content: "Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-'ard. Man dhal-ladhi yashfa'u 'indahu illa bi'idhnihi. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi shay'in min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal ard. Wa la ya'uduhu hifdhuhuma. Wa Huwal-'Aliyyul-'Adhim.",
            count: "Once",
            virtue: "Whoever says it in the morning will be protected from the jinn until the evening."
        },
        {
            title: "Al-Mu'awwidhat",
            content: "Qul Huwallahu Ahad... / Qul a'udhu bi Rabbil-falaq... / Qul a'udhu bi Rabbin-nas...",
            count: "Three times",
            virtue: "Whoever says them three times in the morning and evening, they will suffice him against everything."
        },
        {
            title: "Morning Supplication",
            content: "Asbahna wa asbahal-mulku lillah, wal-hamdulillah, la ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in Qadir. Rabbi as'aluka khayra ma fi hadhal-yawmi wa khayra ma ba'dahu, wa a'udhu bika min sharri ma fi hadhal-yawmi wa sharri ma ba'dahu. Rabbi a'udhu bika minal-kasali wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
            count: "Once",
            virtue: "One of the authentic morning supplications."
        },
        {
            title: "Sayyid al-Istighfar",
            content: "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't, abu'u laka bini'matika 'alayya, wa abu'u laka bidhanbi faghfirli, fa'innahu la yaghfirudh-dhunuba illa Anta.",
            count: "Once",
            virtue: "Whoever says it with certainty in the morning and dies on that day will enter Paradise."
        },
        {
            title: "Comprehensive Supplication",
            content: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namut, wa ilaykan-nushur.",
            count: "Once",
            virtue: "One of the authentic morning supplications."
        },
        {
            title: "Supplication for Wellness",
            content: "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari, la ilaha illa Anta. Allahumma inni a'udhu bika minal-kufri, wal-faqri, wa a'udhu bika min 'adhabil-qabr, la ilaha illa Anta.",
            count: "Three times",
            virtue: "A comprehensive supplication for wellness in this life and the hereafter."
        },
        {
            title: "Supplication for Worry and Grief",
            content: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayn, wa ghalabatir-rijal.",
            count: "Once",
            virtue: "Allah will remove his worry and settle his debt."
        },
        {
            title: "Supplication for Distress",
            content: "Ya Hayyu Ya Qayyum, birahmatika astaghith, aslih li sha'ni kullahu, wa la takilni ila nafsi tarfata 'ayn.",
            count: "Three times",
            virtue: "A supplication for times of distress and hardship."
        },
        {
            title: "Praise and Glorification",
            content: "Subhanallahi wa bihamdihi: 'adada khalqihi, wa rida nafsihi, wa zinata 'arshihi, wa midada kalimatihi.",
            count: "Three times",
            virtue: "It has a great virtue and multiplied reward."
        },
        {
            title: "Supplication for Contentment",
            content: "Raditu billahi Rabban, wa bil-Islami dinan, wa bi Muhammadin sallallahu 'alayhi wa sallama Nabiyyan.",
            count: "Three times",
            virtue: "Whoever says it three times in the morning, it will be a right upon Allah to please him on the Day of Resurrection."
        },
        {
            title: "Trust in Allah",
            content: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim.",
            count: "Three times",
            virtue: "Nothing will harm him from Allah."
        },
        {
            title: "Seeking Refuge from Evil",
            content: "A'udhu bikalimatillahit-tammati min sharri ma khalaq.",
            count: "Three times",
            virtue: "Nothing will harm him."
        },
        {
            title: "Subhanallahi wa bihamdihi",
            content: "Subhanallahi wa bihamdihi.",
            count: "One hundred times",
            virtue: "His sins will be forgiven even if they are like the foam of the sea. No one will come on the Day of Resurrection with anything better than what he has done, except someone who has said the same or more."
        },
        {
            title: "La ilaha illallah wahdahu...",
            content: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in Qadir.",
            count: "One hundred times",
            virtue: "He will have a reward equivalent to that of freeing ten slaves, one hundred good deeds will be written for him, one hundred bad deeds will be erased from him, and he will have a protection from Satan for that day until evening."
        }
    ],
    evening: [
        {
            title: "Ayat al-Kursi",
            content: "Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum... (same verse)",
            count: "Once",
            virtue: "Whoever says it in the evening will be protected from the jinn until the morning."
        },
        {
            title: "Al-Mu'awwidhat",
            content: "Qul Huwallahu Ahad... / Qul a'udhu bi Rabbil-falaq... / Qul a'udhu bi Rabbin-nas...",
            count: "Three times",
            virtue: "Whoever says them three times in the morning and evening, they will suffice him against everything."
        },
        {
            title: "Evening Supplication",
            content: "Amsayna wa amsal-mulku lillah, wal-hamdulillah, la ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in Qadir. Rabbi as'aluka khayra ma fi hadhihil-laylati wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hadhihil-laylati wa sharri ma ba'daha. Rabbi a'udhu bika minal-kasali wa su'il-kibar. Rabbi a'udhu bika min 'adhabin fin-nari wa 'adhabin fil-qabr.",
            count: "Once",
            virtue: "One of the authentic evening supplications."
        },
        {
            title: "Sayyid al-Istighfar",
            content: "Allahumma Anta Rabbi la ilaha illa Anta... (same dua)",
            count: "Once",
            virtue: "Whoever says it with certainty in the evening and dies during that night will enter Paradise."
        },
        {
            title: "Comprehensive Supplication",
            content: "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namut, wa ilaykal-masir.",
            count: "Once",
            virtue: "One of the authentic evening supplications."
        },
        {
            title: "Supplication for Protection",
            content: "A'udhu bikalimatillahit-tammati min sharri ma khalaq.",
            count: "Three times",
            virtue: "Whoever says it in the evening, nothing will harm him."
        },
        {
            title: "Supplication for Wellness",
            content: "Allahumma inni as'alukal-'afwa wal-'afiyah fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyah fi dini wa dunyaya wa ahli wa mali. Allahum-mastur 'awrati wa amin raw'ati. Allahum-mahfadhni min bayni yadayya, wa min khalfi, wa 'an yamini, wa 'an shimali, wa min fawqi, wa a'udhu bi'adhamatika an ughtala min tahti.",
            count: "Once",
            virtue: "A comprehensive supplication for protection and wellness."
        },
        {
            title: "Trust in Allah",
            content: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim.",
            count: "Three times",
            virtue: "Nothing will harm him from Allah."
        },
        {
            title: "Supplication for Contentment",
            content: "Raditu billahi Rabban, wa bil-Islami dinan, wa bi Muhammadin sallallahu 'alayhi wa sallama Nabiyyan.",
            count: "Three times",
            virtue: "Whoever says it three times in the evening, it will be a right upon Allah to please him on the Day of Resurrection."
        },
        {
            title: "Praise and Monotheism",
            content: "La ilaha illallah wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in Qadir.",
            count: "Ten times",
            virtue: "It will be for him like freeing four slaves from the descendants of Ismail."
        },
        {
            title: "Subhanallahi wa bihamdihi",
            content: "Subhanallahi wa bihamdihi.",
            count: "One hundred times",
            virtue: "His sins will be forgiven even if they are like the foam of the sea."
        }
    ]
  },
  fr: {
    morning: [],
    evening: []
  },
  tr: {
    morning: [],
    evening: []
  },
  id: {
    morning: [],
    evening: []
  }
};

    