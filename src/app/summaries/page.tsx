
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const bookSummaries = {
  ar: [
    {
      id: "atomic-habits",
      title: "العادات الذرية - جيمس كلير",
      author: "جيمس كلير",
      summary: [
        "الفكرة الأساسية في كتاب 'العادات الذرية' هي أن التغييرات الصغيرة جدًا في السلوك، والتي يطلق عليها 'العادات الذرية'، يمكن أن تتراكم مع مرور الوقت لتؤدي إلى نتائج هائلة. بدلاً من التركيز على أهداف ضخمة، يدعو كلير إلى التركيز على تحسين نظام حياتنا اليومي بنسبة 1% كل يوم.",
        "يقدم الكتاب إطارًا عمليًا من أربع خطوات لبناء عادات جيدة والتخلص من العادات السيئة، وهي: اجعلها واضحة، اجعلها جذابة، اجعلها سهلة، واجعلها مُرضية. عند تطبيق هذه القواعد، يصبح الالتزام بالعادات الجديدة أسهل بكثير.",
        "يشرح كلير أن الهوية تلعب دورًا محوريًا في تغيير العادات. بدلاً من أن تقول 'أريد أن أقرأ أكثر'، يجب أن تغير هويتك لتقول 'أنا قارئ'. هذا التحول في التفكير يجعل من الأسهل اتخاذ القرارات التي تتماشى مع هويتك الجديدة.",
        "من أهم المفاهيم في الكتاب فكرة 'تجميع العادات'، حيث تربط عادة جديدة بعادة قديمة راسخة بالفعل. على سبيل المثال: 'بعد أن أنتهي من شرب قهوتي الصباحية (عادة قديمة)، سأقوم بتمرين تأمل لمدة دقيقة واحدة (عادة جديدة)'. هذا يسهل على الدماغ تبني السلوك الجديد.",
      ],
    },
    {
      id: "power-of-habit",
      title: "قوة العادات - تشارلز دوهيج",
      author: "تشارلز دوهيج",
      summary: [
        "يكشف كتاب 'قوة العادات' عن العلم وراء كيفية تشكل العادات في حياتنا وكيف يمكننا تغييرها. المحور الرئيسي للكتاب هو 'حلقة العادة'، وهي نموذج عصبي يتكون من ثلاثة أجزاء: الإشارة (الدليل)، الروتين، والمكافأة.",
        "الإشارة هي المحفز الذي يدفع الدماغ للدخول في وضع تلقائي واختيار العادة التي يجب استخدامها. الروتين هو السلوك نفسه، سواء كان جسديًا أو عقليًا أو عاطفيًا. أما المكافأة فهي ما يحصل عليه دماغك بعد الروتين، مما يساعده على تحديد ما إذا كانت هذه الحلقة تستحق التذكر في المستقبل أم لا.",
        "يوضح دوهيج أن القاعدة الذهبية لتغيير العادة ليست في مقاومة الإشارة، بل في الحفاظ على نفس الإشارة والمكافأة، مع تغيير الروتين فقط. على سبيل المثال، إذا كانت إشارتك هي الشعور بالملل بعد الظهر (الإشارة) وروتينك هو أكل الحلوى (الروتين) ومكافأتك هي الشعور بالرضا (المكافأة)، يمكنك تغيير الروتين إلى المشي لبضع دقائق مع زميل للحصول على نفس المكافأة (التغيير الاجتماعي والرضا).",
        "يستعرض الكتاب دراسات حالة من شركات كبرى مثل 'ستاربكس' و'بروكتر وغامبل' وأفراد تغلبوا على عادات مدمرة، موضحًا كيف أن فهم حلقة العادة وتطبيقها يمكن أن يؤدي إلى تحولات جذرية على المستوى الشخصي والمؤسسي.",
      ],
    },
    {
      id: "7-habits",
      title: "العادات السبع للناس الأكثر فعالية - ستيفن كوفي",
      author: "ستيفن كوفي",
      summary: [
        "يقدم هذا الكتاب نهجًا شاملاً لتحقيق الفعالية الشخصية والمهنية من خلال تبني سبع عادات أساسية. يرى كوفي أن الفعالية الحقيقية تأتي من الداخل إلى الخارج، أي أنها تبدأ من تغيير المبادئ والقيم الشخصية.",
        "العادات الثلاث الأولى تركز على 'النصر الشخصي' والانتقال من الاعتماد على الآخرين إلى الاستقلالية: (1) كن مبادرًا (تحمل المسؤولية)، (2) ابدأ والغاية في ذهنك (حدد رسالتك وأهدافك)، (3) ابدأ بالأهم قبل المهم (إدارة الأولويات).",
        "العادات الثلاث التالية تركز على 'النصر العام' والانتقال من الاستقلالية إلى الاعتماد المتبادل (العمل الجماعي): (4) تفكير الفوز/الفوز (ابحث عن حلول مفيدة للجميع)، (5) اسعَ من أجل أن تفهم أولاً، ثم تُفهم (فن الاستماع التعاطفي)، (6) تكاتف (التعاون الإبداعي).",
        "العادة السابعة والأخيرة هي 'اشحذ المنشار'، وهي عادة التجديد المستمر. يدعو كوفي إلى الاستثمار بانتظام في أربعة أبعاد رئيسية في حياتنا: الجسدية (الرياضة والتغذية)، الروحية (التأمل والقيم)، العقلية (القراءة والتعلم)، والاجتماعية/العاطفية (بناء العلاقات).",
      ],
    },
    {
        id: "the-one-thing",
        title: "الشيء الوحيد - غاري كيلر وجاي باباسان",
        author: "غاري كيلر وجاي باباسان",
        summary: [
            "يدور الكتاب حول فكرة التركيز الصارم على 'الشيء الوحيد' الأكثر أهمية في أي وقت من الأوقات لتحقيق نتائج استثنائية. يجادل المؤلفان بأن النجاح لا يأتي من القيام بالكثير من الأشياء بشكل جيد، بل من القيام بالشيء الصحيح بشكل ممتاز.",
            "يطرح الكتاب 'السؤال المحوري': 'ما هو الشيء الوحيد الذي يمكنك فعله، بحيث يصبح كل شيء آخر أسهل أو غير ضروري بفعله؟'. يقترح المؤلفان استخدام هذا السؤال لتحديد الأولوية القصوى في كل جانب من جوانب الحياة (العمل، الأسرة، الصحة).",
            "ينتقد الكتاب تعدد المهام بشدة، موضحًا أنه خرافة تؤدي إلى تشتيت الانتباه وتقليل الإنتاجية. بدلاً من ذلك، يدعو إلى تخصيص فترات زمنية محددة (Time Blocking) للعمل بتركيز كامل على 'الشيء الوحيد' دون أي مقاطعات.",
            "يشبه المؤلفان تأثير 'الشيء الوحيد' بقطع الدومينو المتساقطة. من خلال التركيز على إسقاط قطعة الدومينو الأولى (المهمة الأكثر أهمية)، فإنك تطلق سلسلة من النتائج الإيجابية التي لم تكن لتتحقق لو كنت مشتتًا بين عدة مهام."
        ]
    },
    {
        id: "deep-work",
        title: "العمل العميق - كال نيوبورت",
        author: "كال نيوبورت",
        summary: [
            "يعرّف 'العمل العميق' بأنه القدرة على التركيز دون تشتيت على مهمة تتطلب مجهودًا معرفيًا. هذه المهارة، بحسب نيوبورت، أصبحت نادرة بشكل متزايد في عالمنا المليء بالمشتتات الرقمية، وفي نفس الوقت أصبحت أكثر قيمة في الاقتصاد الحديث.",
            "يميز الكتاب بين 'العمل العميق' و'العمل السطحي' (Shallow Work)، وهو المهام اللوجستية غير المتطلبة معرفيًا والتي يمكن أداؤها أثناء التشتيت (مثل الرد على رسائل البريد الإلكتروني). يجادل نيوبورت بأن معظم العاملين في مجال المعرفة يقضون وقتًا طويلاً في العمل السطحي على حساب العمل العميق.",
            "يقترح الكتاب أربع فلسفات لتطبيق العمل العميق في حياتك: (1) الفلسفة الرهبانية (عزل النفس تمامًا)، (2) الفلسفة ثنائية النسق (تقسيم الوقت بين فترات عميقة وفترات سطحية)، (3) الفلسفة الإيقاعية (تحويل العمل العميق إلى عادة منتظمة)، (4) الفلسفة الصحفية (الاستفادة من أي وقت فراغ للعمل العميق).",
            "يقدم نيوبورت استراتيجيات عملية لزيادة القدرة على العمل العميق، مثل 'احتضان الملل' لتدريب الدماغ على مقاومة الرغبة في التشتيت، و'الإقلاع عن وسائل التواصل الاجتماعي'، وتحديد أهداف صارمة لوقت العمل لتجنب إضاعة الوقت في مهام سطحية."
        ]
    },
    {
        id: "mindset",
        title: "طريقة التفكير (Mindset) - كارول دويك",
        author: "كارول دويك",
        summary: [
            "تقدم عالمة النفس كارول دويك مفهومين أساسيين لطريقة التفكير: 'العقلية الثابتة' (Fixed Mindset) و'عقلية النمو' (Growth Mindset).",
            "أصحاب 'العقلية الثابتة' يعتقدون أن صفاتهم الأساسية، مثل ذكائهم ومواهبهم، هي سمات ثابتة لا يمكن تغييرها. هذا يجعلهم يتجنبون التحديات، ويستسلمون بسهولة عند مواجهة العقبات، ويرون الجهد كشيء غير مجدٍ، ويتأثرون سلبًا بالنقد.",
            "على النقيض، أصحاب 'عقلية النمو' يعتقدون أن قدراتهم يمكن تطويرها من خلال التفاني والعمل الجاد. هذا الاعتقاد يدفعهم إلى احتضان التحديات، والمثابرة في وجه النكسات، ورؤية الجهد كطريق للإتقان، والتعلم من النقد، وإيجاد الإلهام في نجاح الآخرين.",
            "يوضح الكتاب كيف أن طريقة التفكير تؤثر بشكل كبير على الإنجاز في جميع مجالات الحياة، من التعليم والرياضة إلى الأعمال والعلاقات الشخصية. ويقدم استراتيجيات لتنمية 'عقلية النمو' في أنفسنا وفي الآخرين، مثل التركيز على العملية والجهد بدلاً من النتيجة النهائية، وفهم أن الدماغ يشبه العضلة التي يمكن تقويتها بالتدريب."
        ]
    },
     {
        id: "subtle-art",
        title: "فن اللامبالاة - مارك مانسون",
        author: "مارك مانسون",
        summary: [
          "يقدم الكتاب منظورًا مخالفًا للثقافة الإيجابية السائدة، حيث يرى أن السعادة لا تأتي من تجنب المشاكل أو التظاهر بالإيجابية طوال الوقت، بل من اختيار المشاكل التي نهتم بها حقًا ونحن مستعدون للمعاناة من أجلها.",
          "الفكرة الأساسية هي أن الحياة مليئة بالصعوبات، ومحاولة تجنب الألم أمر مستحيل وغير منتج. بدلاً من ذلك، يجب أن نركز طاقتنا على ما يهمنا حقًا ونتقبل حقيقة أن المعاناة جزء لا يتجزأ من تحقيق أي شيء ذي قيمة.",
          "يدعو مانسون إلى تحمل المسؤولية الكاملة عن حياتنا، بما في ذلك ردود أفعالنا تجاه الأحداث الخارجة عن سيطرتنا. فالمهم ليس ما يحدث لنا، بل كيف نختار أن نفسره ونتعامل معه.",
          "يشجع الكتاب على التفكير في الموت وقيمنا الحقيقية. من خلال مواجهة فكرة فنائنا، يمكننا تحديد ما هو الأكثر أهمية في حياتنا والتوقف عن إضاعة الوقت في أمور تافهة أو ملاحقة قيم سطحية يفرضها المجتمع."
        ]
    },
    {
        id: "monk-ferrari",
        title: "الراهب الذي باع سيارته الفيراري - روبن شارما",
        author: "روبن شارما",
        summary: [
          "الكتاب عبارة عن قصة رمزية لمحامٍ ناجح يدعى جوليان مانتل، يصاب بأزمة قلبية بسبب نمط حياته المجهد والمادي. يقرر بعدها بيع كل ممتلكاته، بما في ذلك سيارته الفيراري، والسفر إلى جبال الهيمالايا بحثًا عن معنى أعمق للحياة.",
          "يلتقي جوليان بحكماء 'سيڤانا' الذين يعلمونه سبعة فضائل أساسية لحياة مستنيرة ومليئة بالبهجة والهدف. هذه الفضائل هي جوهر الكتاب وتقدم كدروس عملية يمكن تطبيقها في الحياة اليومية.",
          "من بين هذه الدروس: إتقان العقل عبر التركيز والتفكير الإيجابي، اتباع الهدف والعيش برسالة واضحة، ممارسة 'الكايزن' أو التحسين الذاتي المستمر، العيش بانضباط من خلال قوة الإرادة، احترام الوقت كأثمن مورد، خدمة الآخرين دون مقابل، واحتضان الحاضر وعيش اللحظة.",
          "القصة بأكملها تعمل كدليل روحي وعملي لتحويل الحياة من مطاردة النجاح المادي إلى تحقيق السلام الداخلي والرضا الحقيقي من خلال تطوير الذات والعيش بشكل هادف."
        ]
    },
    {
        id: "one-hundred-years",
        title: "مائة عام من العزلة - غابرييل غارسيا ماركيز",
        author: "غابرييل غارسيا ماركيز",
        summary: [
          "تعتبر هذه الرواية من روائع الأدب العالمي وتتبع تاريخ عائلة 'بوينديا' على مدى سبعة أجيال في قرية 'ماكوندو' الخيالية التي أسسوها. الرواية هي مثال رئيسي لأسلوب 'الواقعية السحرية' حيث يمتزج الخارق للطبيعة مع الواقع اليومي بسلاسة.",
          "تستكشف الرواية موضوعات متكررة مثل العزلة، دورة الزمن الدائرية، 운명 (القدر)، والحب المستحيل. كل فرد من عائلة بوينديا يبدو محكومًا بالعزلة بشكل أو بآخر، سواء كانت عزلة طوعية أو قسرية.",
          "تتميز الرواية بتشابك الأحداث وتكرار الأسماء عبر الأجيال (مثل أوريليانو وخوسيه أركاديو)، مما يخلق شعورًا بأن الزمن لا يتقدم بشكل خطي بل يعيد نفسه في دوامات، وأن الأجيال تكرر أخطاء أسلافها.",
          "في النهاية، يتم فك شفرة رقائق جلد قديمة تحتوي على نبوءة تاريخ العائلة بأكمله، ويكتشف آخر فرد من سلالة بوينديا أن تاريخ عائلته كان مكتوبًا مسبقًا، وأن نهايتهم محتومة. تنتهي الرواية بتدمير ماكوندو، ممثلةً نهاية عالمهم المعزول."
        ]
    },
    {
        id: "five-love-languages",
        title: "لغات الحب الخمس - غاري تشابمان",
        author: "غاري تشابمان",
        summary: [
          "يقدم الكتاب مفهومًا بسيطًا وقويًا: الناس يتحدثون 'لغات حب' مختلفة، والطريقة التي نعبر بها عن الحب ونستقبله قد تختلف تمامًا عن شريكنا. فهم لغة الحب الأساسية لشريكك هو مفتاح العلاقة الصحية.",
          "لغات الحب الخمس هي: (1) كلمات التشجيع (الإطراء، الشكر، الكلمات اللطيفة)، (2) تكريس الوقت (إعطاء الاهتمام الكامل لشريكك)، (3) تبادل الهدايا (التفكير في الشخص وتقديم هدية رمزية)، (4) أعمال خدمية (القيام بأشياء تعرف أنها ستسعد شريكك)، و (5) التواصل الجسدي (اللمس، العناق، إلخ).",
          "يشرح تشابمان أن كل شخص لديه لغة حب أساسية ولغة ثانوية. غالبًا ما نعبر عن الحب باللغة التي نفضل أن نستقبله بها، ولكن إذا كانت هذه ليست لغة شريكنا الأساسية، فقد لا يشعر بالحب، ويشبه الأمر 'خزان حب' فارغ.",
          "الكتاب عملي ويقدم اختبارات لمساعدة القراء على اكتشاف لغة الحب الخاصة بهم ولغة شريكهم، بالإضافة إلى نصائح عملية حول كيفية 'التحدث' بكل لغة من اللغات الخمس بفعالية لملء خزان حب شريكك وتحسين العلاقة بشكل كبير."
        ]
    },
    {
        id: "pistachio-theory",
        title: "نظرية الفستق - فهد عامر الأحمدي",
        author: "فهد عامر الأحمدي",
        summary: [
          "كتاب 'نظرية الفستق' هو مجموعة من المقالات التي تركز على طرق التفكير وتطوير الذات وحل المشكلات اليومية. الكتاب مبسط وموجه لجميع أنواع القراء، ويقدم أفكارًا ونصائح عملية يمكن تطبيقها مباشرة.",
          "اسم الكتاب مستوحى من فكرة أن لكل فعل ردة فعل مشابهة له في القوة ومعاكسة له في الاتجاه، ويشبهها الكاتب بمحاولة كسر حبة الفستق المغلقة؛ كلما زدت الضغط، زادت المقاومة. الحل هو البحث عن الصدع الصغير (نقطة الضعف) واستغلاله.",
          "يحتوي الكتاب على العديد من 'النظريات' الصغيرة والمفاهيم التي تهدف إلى تغيير طريقة تفكير القارئ، مثل 'نظرية الخريطة أكبر من الواقع'، التي تشرح أن تصوراتنا عن العالم ليست هي العالم الحقيقي، و'قانون التركيز' الذي ينص على أن ما تركز عليه تحصل عليه.",
          "الكتاب ليس مترابطًا بشكل قصصي، بل هو مجموعة من الأدوات الذهنية والنصائح السريعة التي تغطي مواضيع متنوعة مثل إدارة الوقت، فهم الأخرين، اتخاذ القرارات، وتطوير الثقة بالنفس. إنه بمثابة دليل إرشادي لتحسين جودة الحياة من خلال تغييرات صغيرة في التفكير."
        ]
    },
    {
        id: "rich-dad-poor-dad",
        title: "الأب الغني والأب الفقير - روبرت كيوساكي",
        author: "روبرت كيوساكي",
        summary: [
          "يقدم الكتاب الثقافة المالية من خلال قصة طفولة الكاتب مع 'أبيه الفقير' (والده الحقيقي، الموظف الحكومي ذو التعليم العالي) و'أبيه الغني' (والد صديقه، رجل الأعمال الذي لم يكمل تعليمه).",
          "الفكرة المحورية هي الفرق في العقلية تجاه المال والعمل. 'الأب الفقير' يؤمن بالمسار التقليدي: ادرس بجد، احصل على وظيفة آمنة، وادخر المال. بينما 'الأب الغني' يعلّم أن الأثرياء لا يعملون من أجل المال، بل يجعلون المال يعمل من أجلهم.",
          "يشدد الكتاب على أهمية التفريق بين 'الأصول' و'الخصوم'. الأصل هو أي شيء يضع المال في جيبك (مثل الأسهم، العقارات المؤجرة). الخصم هو أي شيء يخرج المال من جيبك (مثل قرض السيارة، منزل السكن الشخصي). ينصح الكتاب ببناء محفظة قوية من الأصول المدرة للدخل.",
          "ينتقد كيوساكي النظام التعليمي لعدم تعليمه الثقافة المالية، ويشجع القراء على تثقيف أنفسهم ماليًا. الهدف ليس مجرد كسب راتب عالٍ، بل تحقيق الحرية المالية حيث يغطي دخلك من الأصول نفقاتك الشهرية."
        ]
    }
  ],
  en: [
    {
      id: "atomic-habits",
      title: "Atomic Habits - James Clear",
      author: "James Clear",
      summary: [
        "The core idea of 'Atomic Habits' is that tiny changes in behavior, called 'atomic habits,' can compound over time to produce remarkable results. Instead of focusing on massive goals, Clear advocates for focusing on improving our daily systems by 1% each day.",
        "The book provides a practical four-step framework for building good habits and breaking bad ones: Make it Obvious, Make it Attractive, Make it Easy, and Make it Satisfying. Applying these rules makes sticking to new habits much easier.",
        "Clear explains that identity plays a pivotal role in changing habits. Instead of saying 'I want to read more,' you should shift your identity to say 'I am a reader.' This shift in thinking makes it easier to make decisions that align with your new identity.",
        "One of the most important concepts in the book is 'habit stacking,' where you link a new habit to an old, established one. For example: 'After I finish my morning coffee (old habit), I will meditate for one minute (new habit).' This makes it easier for the brain to adopt the new behavior.",
      ],
    },
    {
      id: "power-of-habit",
      title: "The Power of Habit - Charles Duhigg",
      author: "Charles Duhigg",
      summary: [
        "The Power of Habit' reveals the science behind how habits are formed in our lives and how we can change them. The book's central theme is the 'Habit Loop,' a neurological model consisting of three parts: the Cue, the Routine, and the Reward.",
        "The cue is the trigger that tells your brain to go into automatic mode and which habit to use. The routine is the behavior itself, whether physical, mental, or emotional. The reward is what your brain gets after the routine, helping it figure out if this particular loop is worth remembering for the future.",
        "Duhigg explains that the golden rule of habit change is not to resist the cue, but to keep the same cue and reward, while only changing the routine. For example, if your cue is feeling bored in the afternoon (cue), your routine is eating a candy bar (routine), and your reward is feeling satisfied (reward), you can change the routine to walking for a few minutes with a colleague to get the same reward (social change and satisfaction).",
        "The book reviews case studies from major companies like Starbucks and Procter & Gamble, and individuals who overcame destructive habits, showing how understanding and applying the habit loop can lead to radical transformations on a personal and organizational level.",
      ],
    },
    {
      id: "7-habits",
      title: "The 7 Habits of Highly Effective People - Stephen Covey",
      author: "Stephen Covey",
      summary: [
        "This book provides a comprehensive approach to achieving personal and professional effectiveness by adopting seven core habits. Covey argues that true effectiveness comes from the inside out, meaning it starts with changing personal principles and values.",
        "The first three habits focus on 'Private Victory' and moving from dependence to independence: (1) Be Proactive (take responsibility), (2) Begin with the End in Mind (define your mission and goals), (3) Put First Things First (priority management).",
        "The next three habits focus on 'Public Victory' and moving from independence to interdependence (teamwork): (4) Think Win/Win (seek mutually beneficial solutions), (5) Seek First to Understand, Then to Be Understood (the art of empathetic listening), (6) Synergize (creative cooperation).",
        "The seventh and final habit is 'Sharpen the Saw,' the habit of continuous renewal. Covey calls for regular investment in four key dimensions of our lives: physical (exercise, nutrition), spiritual (meditation, values), mental (reading, learning), and social/emotional (building relationships).",
      ],
    },
    {
      id: "the-one-thing",
      title: "The One Thing - Gary Keller & Jay Papasan",
      author: "Gary Keller & Jay Papasan",
      summary: [
        "The book revolves around the idea of focusing strictly on the 'one thing' that is most important at any given time to achieve extraordinary results. The authors argue that success comes not from doing many things well, but from doing the right thing excellently.",
        "The book poses the 'Focusing Question': 'What's the ONE Thing you can do such that by doing it, everything else will be easier or unnecessary?'. The authors suggest using this question to identify the top priority in every aspect of life (work, family, health).",
        "The book heavily criticizes multitasking, explaining that it is a myth that leads to distraction and reduced productivity. Instead, it calls for 'Time Blocking' to work with full concentration on the 'one thing' without any interruptions.",
        "The authors compare the effect of the 'one thing' to falling dominoes. By focusing on knocking over the first domino (the most important task), you trigger a series of positive results that would not have been achieved if you were distracted among several tasks."
      ]
    },
    {
      id: "deep-work",
      title: "Deep Work - Cal Newport",
      author: "Cal Newport",
      summary: [
        "'Deep Work' is defined as the ability to focus without distraction on a cognitively demanding task. This skill, according to Newport, is becoming increasingly rare in our world full of digital distractions, and at the same time, more valuable in the modern economy.",
        "The book distinguishes between 'Deep Work' and 'Shallow Work', which are non-cognitively demanding, logistical tasks that can be performed while distracted (like responding to emails). Newport argues that most knowledge workers spend too much time on shallow work at the expense of deep work.",
        "The book suggests four philosophies for applying deep work in your life: (1) The Monastic Philosophy (complete isolation), (2) The Bimodal Philosophy (dividing time between deep and shallow periods), (3) The Rhythmic Philosophy (making deep work a regular habit), and (4) The Journalistic Philosophy (taking advantage of any free time for deep work).",
        "Newport provides practical strategies to increase the ability to do deep work, such as 'embracing boredom' to train the brain to resist the urge for distraction, 'quitting social media', and setting strict work time goals to avoid wasting time on shallow tasks."
      ]
    },
    {
      id: "mindset",
      title: "Mindset - Carol S. Dweck",
      author: "Carol S. Dweck",
      summary: [
          "Psychologist Carol Dweck introduces two basic concepts of mindset: the 'Fixed Mindset' and the 'Growth Mindset'.",
          "People with a 'Fixed Mindset' believe that their basic qualities, like their intelligence or talent, are simply fixed traits. This makes them avoid challenges, give up easily when facing obstacles, see effort as fruitless, and be negatively affected by criticism.",
          "In contrast, people with a 'Growth Mindset' believe that their abilities can be developed through dedication and hard work. This belief leads them to embrace challenges, persevere in the face of setbacks, see effort as the path to mastery, learn from criticism, and find inspiration in the success of others.",
          "The book explains how mindset significantly affects achievement in all areas of life, from education and sports to business and personal relationships. It offers strategies for developing a 'Growth Mindset' in ourselves and others, such as focusing on the process and effort rather than the end result, and understanding that the brain is like a muscle that can be strengthened with practice."
      ]
    },
    {
      id: "subtle-art",
      title: "The Subtle Art of Not Giving a F*ck - Mark Manson",
      author: "Mark Manson",
      summary: [
        "The book offers a counterintuitive approach to the prevailing positive-thinking culture, arguing that happiness comes not from avoiding problems or faking positivity all the time, but from choosing which problems we truly care about and are willing to suffer for.",
        "The core idea is that life is full of difficulties, and trying to avoid pain is impossible and unproductive. Instead, we should focus our energy on what truly matters to us and accept that suffering is an integral part of achieving anything of value.",
        "Manson advocates for taking full responsibility for our lives, including our reactions to events beyond our control. What matters is not what happens to us, but how we choose to interpret and deal with it.",
        "The book encourages thinking about death and our true values. By confronting the idea of our own mortality, we can identify what is most important in our lives and stop wasting time on trivial matters or chasing superficial values imposed by society."
      ]
    },
    {
      id: "monk-ferrari",
      title: "The Monk Who Sold His Ferrari - Robin Sharma",
      author: "Robin Sharma",
      summary: [
        "The book is a fable about a successful lawyer, Julian Mantle, who suffers a heart attack due to his stressful, materialistic lifestyle. He then decides to sell all his possessions, including his Ferrari, and travel to the Himalayas in search of a deeper meaning to life.",
        "Julian meets the Sages of Sivana, who teach him seven fundamental virtues for an enlightened life filled with joy and purpose. These virtues are the core of the book and are presented as practical lessons that can be applied in daily life.",
        "Among these lessons are: mastering the mind through focus and positive thinking, following one's purpose and living with a clear mission, practicing 'Kaizen' or continuous self-improvement, living with discipline through willpower, respecting time as the most precious resource, serving others selflessly, and embracing the present moment.",
        "The entire story serves as a spiritual and practical guide to transforming one's life from the pursuit of material success to achieving inner peace and true fulfillment through self-development and purposeful living."
      ]
    },
    {
      id: "one-hundred-years",
      title: "One Hundred Years of Solitude - Gabriel García Márquez",
      author: "Gabriel García Márquez",
      summary: [
        "This novel is considered a masterpiece of world literature and follows the history of the Buendía family over seven generations in the fictional village of Macondo, which they founded. The novel is a prime example of the 'magical realism' style, where the supernatural seamlessly blends with everyday reality.",
        "The novel explores recurring themes such as solitude, the cyclical nature of time, fate, and impossible love. Each member of the Buendía family seems doomed to solitude in one form or another, whether voluntary or forced.",
        "The novel is characterized by its intricate plot and the repetition of names across generations (like Aureliano and José Arcadio), creating a sense that time does not progress linearly but repeats itself in spirals, and that generations repeat the mistakes of their ancestors.",
        "In the end, ancient parchments containing a prophecy of the entire family history are deciphered, and the last surviving Buendía discovers that his family's history was pre-written and their end was inevitable. The novel ends with the destruction of Macondo, representing the end of their isolated world."
      ]
    },
    {
      id: "five-love-languages",
      title: "The Five Love Languages - Gary Chapman",
      author: "Gary Chapman",
      summary: [
        "The book introduces a simple and powerful concept: people speak different 'love languages,' and the way we express and receive love may be completely different from our partner's. Understanding your partner's primary love language is the key to a healthy relationship.",
        "The five love languages are: (1) Words of Affirmation (compliments, thanks, kind words), (2) Quality Time (giving your partner your full attention), (3) Receiving Gifts (the thought and symbolic gift), (4) Acts of Service (doing things you know your partner would like you to do), and (5) Physical Touch (touching, hugging, etc.).",
        "Chapman explains that everyone has a primary and a secondary love language. We often express love in the language we prefer to receive it in, but if this is not our partner's primary language, they may not feel loved, as if their 'love tank' is empty.",
        "The book is practical and offers quizzes to help readers discover their own and their partner's love language, as well as practical tips on how to effectively 'speak' each of the five languages to fill your partner's love tank and significantly improve the relationship."
      ]
    },
    {
      id: "pistachio-theory",
      title: "The Pistachio Theory - Fahad Amer Al-Ahmadi",
      author: "Fahad Amer Al-Ahmadi",
      summary: [
        "'The Pistachio Theory' is a collection of articles focusing on ways of thinking, self-development, and solving everyday problems. The book is simplified and aimed at all types of readers, offering practical ideas and tips that can be applied directly.",
        "The book's name is inspired by the idea that every action has a reaction equal in force and opposite in direction, which the author likens to trying to crack a closed pistachio nut; the more pressure you apply, the more resistance you get. The solution is to look for the small crack (the weak point) and exploit it.",
        "The book contains many small 'theories' and concepts aimed at changing the reader's way of thinking, such as the 'map is bigger than the territory' theory, which explains that our perceptions of the world are not the real world, and the 'law of focus,' which states that what you focus on, you get.",
        "The book is not a narrative but a collection of mental tools and quick tips covering various topics like time management, understanding others, decision making, and developing self-confidence. It serves as a guide to improving quality of life through small changes in thinking."
      ]
    },
    {
      id: "rich-dad-poor-dad",
      title: "Rich Dad Poor Dad - Robert T. Kiyosaki",
      author: "Robert T. Kiyosaki",
      summary: [
        "The book presents financial literacy through the story of the author's childhood with his 'poor dad' (his real father, a highly educated government employee) and his 'rich dad' (his friend's father, a businessman who didn't finish his education).",
        "The central idea is the difference in mindset towards money and work. The 'poor dad' believes in the traditional path: study hard, get a secure job, and save money. The 'rich dad' teaches that the wealthy don't work for money; they make money work for them.",
        "The book emphasizes the importance of distinguishing between 'assets' and 'liabilities.' An asset is anything that puts money in your pocket (like stocks, rental properties). A liability is anything that takes money out of your pocket (like a car loan, a personal residence). The book advises building a strong portfolio of income-generating assets.",
        "Kiyosaki criticizes the education system for not teaching financial literacy and encourages readers to educate themselves financially. The goal is not just to earn a high salary, but to achieve financial freedom where your income from assets covers your monthly expenses."
      ]
    }
  ],
};


export default function SummariesPage() {
  const { t, locale } = useLanguage();
  const currentSummaries = bookSummaries[locale] || bookSummaries.ar;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('summaries.title')}
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
           {t('summaries.description')}
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {currentSummaries.map((book) => (
            <AccordionItem value={book.id} key={book.id}>
              <AccordionTrigger className="text-xl text-right font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                    <BookCheck className="h-6 w-6 text-primary" />
                    <span>{book.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-2 pt-2">
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground rtl:text-right ltr:text-left">
                    {book.summary.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                     <p className="font-semibold text-foreground pt-2">{t('summaries.author')}: {book.author}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
