
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
  fr: [
    {
      id: "atomic-habits",
      title: "Un Rien Peut Tout Changer - James Clear",
      author: "James Clear",
      summary: [
        "L'idée principale de 'Un Rien Peut Tout Changer' est que de minuscules changements de comportement, appelés 'habitudes atomiques', peuvent s'accumuler pour produire des résultats remarquables. Au lieu de se concentrer sur des objectifs massifs, Clear préconise d'améliorer nos systèmes quotidiens de 1% chaque jour.",
        "Le livre fournit un cadre pratique en quatre étapes pour créer de bonnes habitudes et briser les mauvaises : Rendez-la évidente, Rendez-la attrayante, Rendez-la facile, Rendez-la satisfaisante.",
        "Clear explique que l'identité joue un rôle central dans le changement des habitudes. Au lieu de dire 'Je veux lire plus', vous devriez changer votre identité pour dire 'Je suis un lecteur'.",
        "L'un des concepts les plus importants est l'empilement d'habitudes, où vous liez une nouvelle habitude à une ancienne déjà établie pour faciliter son adoption par le cerveau."
      ]
    },
    {
      id: "power-of-habit",
      title: "Le Pouvoir des Habitudes - Charles Duhigg",
      author: "Charles Duhigg",
      summary: [
        "'Le Pouvoir des Habitudes' révèle la science derrière la formation des habitudes. Le thème central est la 'Boucle de l'Habitude' : le signal, la routine et la récompense.",
        "Le signal est le déclencheur qui met le cerveau en mode automatique. La routine est le comportement lui-même. La récompense aide le cerveau à décider si cette boucle mérite d'être mémorisée.",
        "La règle d'or du changement d'habitude est de conserver le même signal et la même récompense, mais de ne changer que la routine.",
        "Le livre examine des études de cas d'entreprises et d'individus pour montrer comment la compréhension de la boucle de l'habitude peut entraîner des transformations radicales."
      ]
    },
    {
      id: "7-habits",
      title: "Les 7 Habitudes de Ceux Qui Réalisent Tout ce Qu'ils Entreprennent - Stephen Covey",
      author: "Stephen Covey",
      summary: [
        "Ce livre propose une approche holistique de l'efficacité personnelle et professionnelle à travers sept habitudes fondamentales, partant du principe que l'efficacité vient de l'intérieur.",
        "Les trois premières habitudes se concentrent sur la 'Victoire Privée' (indépendance) : (1) Soyez proactif, (2) Commencez avec la fin en tête, (3) Donnez la priorité aux priorités.",
        "Les trois suivantes visent la 'Victoire Publique' (interdépendance) : (4) Pensez gagnant/gagnant, (5) Cherchez d'abord à comprendre, ensuite à être compris, (6) Créez des synergies.",
        "La septième habitude, 'Aiguisez vos facultés', est celle du renouvellement continu dans les dimensions physique, spirituelle, mentale et socio-émotionnelle."
      ]
    },
    {
      id: "the-one-thing",
      title: "The One Thing - Gary Keller & Jay Papasan",
      author: "Gary Keller & Jay Papasan",
      summary: [
        "Le livre se concentre sur l'idée de se focaliser sur la 'seule chose' la plus importante à un moment donné pour obtenir des résultats extraordinaires. Le succès vient de faire la bonne chose, pas beaucoup de choses.",
        "Il pose la 'Question de Focalisation' : 'Quelle est la SEULE chose que vous puissiez faire de telle sorte qu'en la faisant, tout le reste deviendra plus facile ou inutile ?'.",
        "Le livre critique le multitâche comme un mythe qui réduit la productivité et préconise le 'Time Blocking' (blocage de temps) pour se concentrer pleinement sur cette 'seule chose'.",
        "Les auteurs comparent l'effet de la 'seule chose' à la chute de dominos : en se concentrant sur la première tâche la plus importante, on déclenche une série de résultats positifs."
      ]
    },
    {
      id: "deep-work",
      title: "Deep Work - Cal Newport",
      author: "Cal Newport",
      summary: [
        "Le 'Deep Work' (Travail en profondeur) est la capacité de se concentrer sans distraction sur une tâche exigeante sur le plan cognitif. Cette compétence est de plus en plus rare et précieuse.",
        "Le livre oppose le 'Deep Work' au 'Shallow Work' (travail superficiel), des tâches logistiques non exigeantes. Newport soutient que nous passons trop de temps sur le travail superficiel.",
        "Il propose quatre philosophies pour intégrer le travail en profondeur : Monastique (isolement total), Bimodale (alternance), Rythmique (habitude régulière) et Journalistique (profiter des temps morts).",
        "Newport donne des stratégies pratiques, comme 'accepter l'ennui' pour entraîner la concentration et 'quitter les réseaux sociaux' pour éviter les distractions."
      ]
    },
    {
      id: "mindset",
      title: "Mindset - Carol S. Dweck",
      author: "Carol S. Dweck",
      summary: [
        "La psychologue Carol Dweck présente deux types de mentalités : la 'mentalité fixe' et la 'mentalité de croissance'.",
        "Ceux qui ont une 'mentalité fixe' croient que leurs qualités (intelligence, talent) sont des traits immuables. Ils évitent les défis et abandonnent facilement.",
        "À l'inverse, ceux qui ont une 'mentalité de croissance' croient que leurs capacités peuvent être développées par le travail. Ils acceptent les défis et persévèrent.",
        "Le livre explique comment la mentalité affecte la réussite dans tous les domaines de la vie et propose des stratégies pour cultiver une 'mentalité de croissance'."
      ]
    },
    {
      id: "subtle-art",
      title: "L'Art Subtil de s'en Foutre - Mark Manson",
      author: "Mark Manson",
      summary: [
        "Le livre adopte une approche à contre-courant de la pensée positive, affirmant que le bonheur vient du choix des problèmes qui nous tiennent vraiment à cœur.",
        "L'idée centrale est que la vie est pleine de difficultés, et essayer d'éviter la douleur est contre-productif. Il faut accepter la souffrance comme partie intégrante de la réalisation de toute chose de valeur.",
        "Manson préconise d'assumer l'entière responsabilité de nos vies, y compris de nos réactions aux événements. Ce qui compte, c'est la façon dont nous choisissons de les interpréter.",
        "Le livre encourage à penser à la mort pour identifier nos vraies valeurs et cesser de perdre du temps sur des futilités."
      ]
    },
    {
      id: "monk-ferrari",
      title: "Le Moine qui vendit sa Ferrari - Robin Sharma",
      author: "Robin Sharma",
      summary: [
        "Le livre est une fable sur un avocat à succès, Julian Mantle, qui, après une crise cardiaque, vend tout pour chercher un sens plus profond à la vie dans l'Himalaya.",
        "Julian rencontre les Sages de Sivana, qui lui enseignent sept vertus pour une vie éclairée : maîtriser son esprit, suivre son but, pratiquer le 'Kaizen' (amélioration continue), vivre avec discipline, respecter son temps, servir les autres et embrasser le présent.",
        "L'histoire entière sert de guide spirituel et pratique pour passer de la recherche du succès matériel à la paix intérieure et à l'épanouissement.",
        "C'est un guide pour transformer sa vie par le développement personnel et une vie pleine de sens."
      ]
    },
    {
      id: "one-hundred-years",
      title: "Cent Ans de Solitude - Gabriel García Márquez",
      author: "Gabriel García Márquez",
      summary: [
        "Ce chef-d'œuvre de la littérature mondiale suit l'histoire de la famille Buendía sur sept générations dans le village fictif de Macondo.",
        "Le roman est un excellent exemple de 'réalisme magique', où le surnaturel se mêle harmonieusement au quotidien.",
        "Il explore des thèmes récurrents comme la solitude, la nature cyclique du temps et le destin. Chaque membre de la famille Buendía semble condamné à la solitude.",
        "À la fin, des parchemins anciens révèlent que l'histoire de la famille était écrite d'avance, et le roman se termine par la destruction de Macondo."
      ]
    },
    {
      id: "five-love-languages",
      title: "Les 5 Langages de l'Amour - Gary Chapman",
      author: "Gary Chapman",
      summary: [
        "Le livre introduit un concept puissant : les gens parlent différents 'langages d'amour'. Comprendre le langage de votre partenaire est la clé d'une relation saine.",
        "Les cinq langages sont : (1) les paroles valorisantes, (2) les moments de qualité, (3) les cadeaux, (4) les services rendus, et (5) le toucher physique.",
        "Chapman explique que chacun a un langage d'amour primaire. Exprimer l'amour dans le langage de votre partenaire remplit son 'réservoir d'amour'.",
        "Le livre est pratique et propose des quiz pour découvrir son propre langage et celui de son partenaire, ainsi que des conseils pour 'parler' chaque langage."
      ]
    },
    {
      id: "pistachio-theory",
      title: "La Théorie de la Pistache - Fahad Amer Al-Ahmadi",
      author: "Fahad Amer Al-Ahmadi",
      summary: [
        "'La Théorie de la Pistache' est un recueil d'articles sur les modes de pensée, le développement personnel et la résolution de problèmes quotidiens.",
        "Le nom du livre s'inspire de l'idée que pour chaque action, il y a une réaction égale et opposée. La solution n'est pas la force brute, mais de trouver la 'fissure' (le point faible).",
        "Le livre contient de nombreuses petites 'théories' pour changer sa façon de penser, comme la théorie de 'la carte est plus grande que le territoire' ou la 'loi de la concentration'.",
        "Ce n'est pas un récit, mais une collection d'outils mentaux et de conseils rapides sur des sujets variés comme la gestion du temps, la prise de décision et la confiance en soi."
      ]
    },
    {
      id: "rich-dad-poor-dad",
      title: "Père Riche, Père Pauvre - Robert T. Kiyosaki",
      author: "Robert T. Kiyosaki",
      summary: [
        "Le livre présente l'éducation financière à travers l'histoire de l'auteur avec son 'père pauvre' (son père biologique, un fonctionnaire) et son 'père riche' (le père de son ami, un entrepreneur).",
        "L'idée centrale est la différence de mentalité face à l'argent. Le 'père pauvre' croit au chemin traditionnel (étudier, trouver un emploi sûr). Le 'père riche' enseigne que les riches font travailler l'argent pour eux.",
        "Le livre souligne l'importance de distinguer les 'actifs' (qui rapportent de l'argent) des 'passifs' (qui en coûtent). Il conseille de construire un portefeuille d'actifs.",
        "Kiyosaki critique le système éducatif pour son manque d'éducation financière et encourage les lecteurs à s'éduquer eux-mêmes pour atteindre la liberté financière."
      ]
    }
  ],
  tr: [
    {
      id: "atomic-habits",
      title: "Atomik Alışkanlıklar - James Clear",
      author: "James Clear",
      summary: [
        "'Atomik Alışkanlıklar' kitabının ana fikri, 'atomik alışkanlıklar' olarak adlandırılan küçük davranış değişikliklerinin zamanla birikerek dikkat çekici sonuçlar doğurabileceğidir. Clear, büyük hedeflere odaklanmak yerine, günlük sistemlerimizi her gün %1 oranında iyileştirmeye odaklanmamızı savunur.",
        "Kitap, iyi alışkanlıklar oluşturmak ve kötü alışkanlıklardan kurtulmak için dört adımlı pratik bir çerçeve sunar: Görünür Kıl, Cazip Kıl, Kolay Kıl ve Tatmin Edici Kıl.",
        "Clear, kimliğin alışkanlıkları değiştirmede merkezi bir rol oynadığını açıklar. 'Daha fazla okumak istiyorum' demek yerine, kimliğinizi 'Ben bir okuyucuyum' diyecek şekilde değiştirmelisiniz.",
        "Kitaptaki en önemli kavramlardan biri, yeni bir alışkanlığı zaten yerleşmiş eski bir alışkanlığa bağladığınız 'alışkanlık istifleme'dir. Bu, beynin yeni davranışı benimsemesini kolaylaştırır."
      ]
    },
    {
      id: "power-of-habit",
      title: "Alışkanlıkların Gücü - Charles Duhigg",
      author: "Charles Duhigg",
      summary: [
        "'Alışkanlıkların Gücü', alışkanlıkların nasıl oluştuğunun arkasındaki bilimi ortaya koyuyor. Kitabın ana teması 'Alışkanlık Döngüsü'dür: İşaret, Rutin ve Ödül.",
        "İşaret, beyni otomatik moda geçiren tetikleyicidir. Rutin, davranışın kendisidir. Ödül, beynin bu döngünün hatırlanmaya değer olup olmadığına karar vermesine yardımcı olur.",
        "Alışkanlık değiştirmenin altın kuralı, aynı işareti ve ödülü korurken sadece rutini değiştirmektir.",
        "Kitap, alışkanlık döngüsünü anlamanın kişisel ve kurumsal düzeyde nasıl radikal dönüşümlere yol açabileceğini göstermek için şirketlerden ve bireylerden vaka çalışmaları inceliyor."
      ]
    },
    {
      id: "7-habits",
      title: "Etkili İnsanların 7 Alışkanlığı - Stephen Covey",
      author: "Stephen Covey",
      summary: [
        "Bu kitap, yedi temel alışkanlığı benimseyerek kişisel ve profesyonel etkinliğe ulaşmak için bütünsel bir yaklaşım sunar ve etkinliğin içeriden dışarıya doğru geldiğini savunur.",
        "İlk üç alışkanlık 'Kişisel Zafer'e (bağımsızlık) odaklanır: (1) Proaktif Ol, (2) Sonunu Düşünerek İşe Başla, (3) Öncelikli İşleri İlk Sıraya Koy.",
        "Sonraki üç alışkanlık 'Genel Zafer'e (karşılıklı bağımlılık) odaklanır: (4) Kazan/Kazan Diye Düşün, (5) Önce Anlamaya Çalış, Sonra Anlaşılmaya, (6) Sinerji Yarat.",
        "Yedinci alışkanlık olan 'Baltayı Bile', fiziksel, ruhsal, zihinsel ve sosyal/duygusal boyutlarda sürekli yenilenme alışkanlığıdır."
      ]
    },
    {
      id: "the-one-thing",
      title: "Tek Şey - Gary Keller & Jay Papasan",
      author: "Gary Keller & Jay Papasan",
      summary: [
        "Kitap, olağanüstü sonuçlar elde etmek için herhangi bir anda en önemli olan 'tek şeye' odaklanma fikri etrafında döner. Başarı, birçok şeyi iyi yapmaktan değil, doğru şeyi mükemmel yapmaktan gelir.",
        "Kitap 'Odaklanma Sorusu'nu sorar: 'Yapabileceğiniz ve yaparak diğer her şeyi daha kolay veya gereksiz kılacak TEK Şey nedir?'.",
        "Kitap, üretkenliği azaltan bir efsane olarak çoklu görevi eleştirir ve bu 'tek şeye' tam konsantrasyonla çalışmak için 'Zaman Bloklama'yı savunur.",
        "Yazarlar, 'tek şeyin' etkisini devrilen domino taşlarına benzetir: en önemli göreve odaklanarak, bir dizi olumlu sonucu tetiklersiniz."
      ]
    },
    {
      id: "deep-work",
      title: "Derin Çalışma - Cal Newport",
      author: "Cal Newport",
      summary: [
        "'Derin Çalışma', dikkat dağılmadan bilişsel olarak zorlu bir göreve odaklanma yeteneği olarak tanımlanır. Bu beceri giderek daha nadir ve değerli hale gelmektedir.",
        "Kitap, 'Derin Çalışma'yı, dikkat dağıtıcı unsurlar varken yapılabilen, bilişsel olarak talepkar olmayan 'Yüzeysel Çalışma'dan ayırır. Newport, çok fazla zamanı yüzeysel işlerde harcadığımızı savunur.",
        "Derin çalışmayı hayata geçirmek için dört felsefe önerir: Manastır (tam izolasyon), Bimodal (dönüşümlü), Ritmik (düzenli alışkanlık) ve Gazetecilik (boş zamanları değerlendirme).",
        "Newport, dikkat dağınıklığına direnme, sosyal medyayı bırakma gibi derin çalışma yeteneğini artırmak için pratik stratejiler sunar."
      ]
    },
    {
      id: "mindset",
      title: "Zihniyet - Carol S. Dweck",
      author: "Carol S. Dweck",
      summary: [
        "Psikolog Carol Dweck iki temel zihniyet kavramını tanıtır: 'Sabit Zihniyet' ve 'Gelişim Zihniyeti'.",
        "'Sabit Zihniyet'e sahip insanlar, zeka veya yetenek gibi temel niteliklerinin değişmez özellikler olduğuna inanırlar. Bu yüzden zorluklardan kaçınır ve kolayca pes ederler.",
        "Buna karşılık, 'Gelişim Zihniyeti'ne sahip insanlar, yeteneklerinin sıkı çalışma ile geliştirilebileceğine inanırlar. Zorlukları benimser ve sebat ederler.",
        "Kitap, zihniyetin hayattaki başarıyı nasıl önemli ölçüde etkilediğini açıklar ve kendimizde ve başkalarında 'Gelişim Zihniyeti' geliştirmek için stratejiler sunar."
      ]
    },
    {
      id: "subtle-art",
      title: "Ustalık Gerektiren Kafaya Takmama Sanatı - Mark Manson",
      author: "Mark Manson",
      summary: [
        "Kitap, pozitif düşünce kültürüne karşı sezgisel bir yaklaşım sunarak, mutluluğun sorunlardan kaçınmaktan değil, gerçekten önem verdiğimiz sorunları seçmekten geldiğini savunur.",
        "Ana fikir, hayatın zorluklarla dolu olduğu ve acıdan kaçınmaya çalışmanın verimsiz olduğudur. Enerjimizi gerçekten önemli olan şeylere odaklamalı ve acının değerli bir şeyi başarmanın ayrılmaz bir parçası olduğunu kabul etmeliyiz.",
        "Manson, tepkilerimiz de dahil olmak üzere hayatlarımızın tüm sorumluluğunu üstlenmeyi savunur. Önemli olan başımıza ne geldiği değil, onu nasıl yorumlamayı ve ele almayı seçtiğimizdir.",
        "Kitap, gerçek değerlerimizi belirlemek ve önemsiz konulara zaman harcamayı bırakmak için ölüm hakkında düşünmeyi teşvik eder."
      ]
    },
    {
      id: "monk-ferrari",
      title: "Ferrarisini Satan Bilge - Robin Sharma",
      author: "Robin Sharma",
      summary: [
        "Kitap, stresli yaşam tarzı nedeniyle kalp krizi geçiren başarılı bir avukat olan Julian Mantle hakkında bir masaldır. Daha sonra her şeyini satıp hayatın daha derin bir anlamını aramak için Himalayalar'a gider.",
        "Julian, ona aydınlanmış bir yaşam için yedi erdemi öğreten Sivana Bilgeleri ile tanışır: zihne hakim olmak, amacını takip etmek, 'Kaizen' (sürekli gelişim) uygulamak, disiplinle yaşamak, zamana saygı duymak, başkalarına hizmet etmek ve anı kucaklamak.",
        "Tüm hikaye, maddi başarı arayışından iç huzura ve kendini geliştirme yoluyla tatmine geçiş için ruhsal ve pratik bir rehber görevi görür.",
        "Bu, kendini geliştirme ve anlamlı bir yaşam yoluyla hayatı dönüştürmek için bir rehberdir."
      ]
    },
    {
      id: "one-hundred-years",
      title: "Yüzyıllık Yalnızlık - Gabriel García Márquez",
      author: "Gabriel García Márquez",
      summary: [
        "Bu dünya edebiyatı başyapıtı, kurgusal Macondo köyünde Buendía ailesinin yedi kuşak boyunca tarihini takip eder.",
        "Roman, doğaüstü olayların günlük gerçeklikle kusursuz bir şekilde harmanlandığı 'büyülü gerçekçilik' tarzının en iyi örneklerinden biridir.",
        "Yalnızlık, zamanın döngüsel doğası ve kader gibi tekrar eden temaları araştırır. Buendía ailesinin her üyesi bir şekilde yalnızlığa mahkum görünmektedir.",
        "Sonunda, ailenin tüm tarihini içeren eski parşömenler deşifre edilir ve roman, izole dünyalarının sonunu simgeleyen Macondo'nun yok edilmesiyle sona erer."
      ]
    },
    {
      id: "five-love-languages",
      title: "Beş Sevgi Dili - Gary Chapman",
      author: "Gary Chapman",
      summary: [
        "Kitap güçlü bir kavram sunar: İnsanlar farklı 'sevgi dilleri' konuşur. Eşinizin dilini anlamak sağlıklı bir ilişkinin anahtarıdır.",
        "Beş sevgi dili şunlardır: (1) Onay Sözleri, (2) Kaliteli Zaman, (3) Hediye Alma, (4) Hizmet Davranışları ve (5) Fiziksel Temas.",
        "Chapman, herkesin birincil bir sevgi dili olduğunu açıklar. Sevgiyi eşinizin dilinde ifade etmek onun 'sevgi deposunu' doldurur.",
        "Kitap pratiktir ve kendi ve eşinizin sevgi dilini keşfetmek için testler ve her dili etkili bir şekilde 'konuşmak' için ipuçları sunar."
      ]
    },
    {
      id: "pistachio-theory",
      title: "Fıstık Teorisi - Fahad Amer Al-Ahmadi",
      author: "Fahad Amer Al-Ahmadi",
      summary: [
        "'Fıstık Teorisi', düşünme biçimleri, kendini geliştirme ve günlük sorunları çözmeye odaklanan bir makale koleksiyonudur.",
        "Kitabın adı, her etkinin eşit ve zıt bir tepkisi olduğu fikrinden esinlenmiştir. Çözüm kaba kuvvet değil, 'çatlağı' (zayıf noktayı) bulmaktır.",
        "Kitap, 'harita bölgeden daha büyüktür' teorisi veya 'odaklanma yasası' gibi düşünce tarzını değiştirmeyi amaçlayan birçok küçük 'teori' içerir.",
        "Bu bir anlatı değil, zaman yönetimi, karar verme ve özgüven gibi çeşitli konularda zihinsel araçlar ve hızlı ipuçları koleksiyonudur."
      ]
    },
    {
      id: "rich-dad-poor-dad",
      title: "Zengin Baba Yoksul Baba - Robert T. Kiyosaki",
      author: "Robert T. Kiyosaki",
      summary: [
        "Kitap, yazarın 'yoksul babası' (biyolojik babası, bir memur) ve 'zengin babası' (arkadaşının babası, bir girişimci) ile olan hikayesi aracılığıyla finansal okuryazarlığı sunar.",
        "Ana fikir, paraya karşı zihniyet farkıdır. 'Yoksul baba' geleneksel yola inanır (çok çalış, güvenli bir iş bul). 'Zengin baba', zenginlerin para için çalışmadığını, parayı kendileri için çalıştırdığını öğretir.",
        "Kitap, 'varlıklar' (para getiren) ve 'yükümlülükler' (para götüren) arasındaki ayrımın önemini vurgular. Varlık portföyü oluşturmayı tavsiye eder.",
        "Kiyosaki, finansal okuryazarlık öğretmediği için eğitim sistemini eleştirir ve okuyucuları finansal özgürlüğe ulaşmak için kendilerini eğitmeye teşvik eder."
      ]
    }
  ],
  id: [
    {
      id: "atomic-habits",
      title: "Atomic Habits - James Clear",
      author: "James Clear",
      summary: [
        "Ide inti dari 'Atomic Habits' adalah bahwa perubahan kecil dalam perilaku, yang disebut 'kebiasaan atomik', dapat menumpuk dari waktu ke waktu untuk menghasilkan hasil yang luar biasa. Alih-alih berfokus pada tujuan besar, Clear menganjurkan untuk fokus meningkatkan sistem harian kita sebesar 1% setiap hari.",
        "Buku ini menyediakan kerangka kerja empat langkah praktis untuk membangun kebiasaan baik dan menghentikan kebiasaan buruk: Jadikan Jelas, Jadikan Menarik, Jadikan Mudah, dan Jadikan Memuaskan.",
        "Clear menjelaskan bahwa identitas memainkan peran penting dalam mengubah kebiasaan. Alih-alih mengatakan 'Saya ingin lebih banyak membaca', Anda harus mengubah identitas Anda menjadi 'Saya adalah seorang pembaca'.",
        "Salah satu konsep terpenting adalah 'penumpukan kebiasaan', di mana Anda menautkan kebiasaan baru ke kebiasaan lama yang sudah mapan untuk memudahkan otak mengadopsinya."
      ]
    },
    {
      id: "power-of-habit",
      title: "The Power of Habit - Charles Duhigg",
      author: "Charles Duhigg",
      summary: [
        "'The Power of Habit' mengungkap ilmu di balik bagaimana kebiasaan terbentuk. Tema sentralnya adalah 'Lingkaran Kebiasaan': Isyarat, Rutinitas, dan Ganjaran.",
        "Isyarat adalah pemicu yang memberitahu otak untuk masuk ke mode otomatis. Rutinitas adalah perilakunya itu sendiri. Ganjaran membantu otak memutuskan apakah lingkaran ini layak diingat.",
        "Aturan emas perubahan kebiasaan adalah mempertahankan isyarat dan ganjaran yang sama, tetapi hanya mengubah rutinitasnya.",
        "Buku ini meninjau studi kasus dari perusahaan dan individu untuk menunjukkan bagaimana memahami lingkaran kebiasaan dapat menghasilkan transformasi radikal."
      ]
    },
    {
      id: "7-habits",
      title: "7 Habits of Highly Effective People - Stephen Covey",
      author: "Stephen Covey",
      summary: [
        "Buku ini memberikan pendekatan holistik untuk mencapai efektivitas pribadi dan profesional melalui tujuh kebiasaan inti, dengan alasan bahwa efektivitas sejati datang dari dalam ke luar.",
        "Tiga kebiasaan pertama berfokus pada 'Kemenangan Pribadi' (kemandirian): (1) Jadilah Proaktif, (2) Mulailah dengan Tujuan Akhir, (3) Dahulukan yang Utama.",
        "Tiga kebiasaan berikutnya berfokus pada 'Kemenangan Publik' (saling ketergantungan): (4) Berpikir Menang/Menang, (5) Berusaha Memahami Terlebih Dahulu, Baru Dipahami, (6) Bersinergi.",
        "Kebiasaan ketujuh, 'Asah Gergaji', adalah kebiasaan pembaruan berkelanjutan dalam dimensi fisik, spiritual, mental, dan sosial/emosional."
      ]
    },
    {
      id: "the-one-thing",
      title: "The One Thing - Gary Keller & Jay Papasan",
      author: "Gary Keller & Jay Papasan",
      summary: [
        "Buku ini berkisar pada gagasan untuk fokus secara ketat pada 'satu hal' yang paling penting pada waktu tertentu untuk mencapai hasil yang luar biasa. Kesuksesan datang dari melakukan hal yang benar dengan sangat baik, bukan banyak hal.",
        "Buku ini mengajukan 'Pertanyaan Fokus': 'Apa SATU Hal yang bisa Anda lakukan sehingga dengan melakukannya, semua hal lain akan menjadi lebih mudah atau tidak perlu?'.",
        "Buku ini sangat mengkritik multitasking sebagai mitos yang mengurangi produktivitas dan menyerukan 'Blok Waktu' untuk bekerja dengan konsentrasi penuh pada 'satu hal' itu.",
        "Para penulis membandingkan efek 'satu hal' dengan jatuhnya kartu domino: dengan berfokus pada tugas terpenting, Anda memicu serangkaian hasil positif."
      ]
    },
    {
      id: "deep-work",
      title: "Deep Work - Cal Newport",
      author: "Cal Newport",
      summary: [
        "'Deep Work' (Kerja Mendalam) didefinisikan sebagai kemampuan untuk fokus tanpa gangguan pada tugas yang menuntut secara kognitif. Keterampilan ini menjadi semakin langka dan berharga.",
        "Buku ini membedakan 'Kerja Mendalam' dari 'Kerja Dangkal', yaitu tugas-tugas logistik yang tidak menuntut secara kognitif. Newport berpendapat kita menghabiskan terlalu banyak waktu untuk pekerjaan dangkal.",
        "Dia menyarankan empat filosofi untuk menerapkan kerja mendalam: Monastik (isolasi total), Bimodal (bergantian), Ritmis (kebiasaan teratur), dan Jurnalistik (memanfaatkan waktu luang).",
        "Newport memberikan strategi praktis untuk meningkatkan kemampuan kerja mendalam, seperti 'merangkul kebosanan' untuk melatih konsentrasi dan 'berhenti dari media sosial'."
      ]
    },
    {
      id: "mindset",
      title: "Mindset - Carol S. Dweck",
      author: "Carol S. Dweck",
      summary: [
        "Psikolog Carol Dweck memperkenalkan dua konsep dasar mindset: 'Mindset Tetap' dan 'Mindset Tumbuh'.",
        "Orang dengan 'Mindset Tetap' percaya bahwa kualitas dasar mereka (kecerdasan, bakat) adalah sifat yang tidak dapat diubah. Mereka menghindari tantangan dan mudah menyerah.",
        "Sebaliknya, orang dengan 'Mindset Tumbuh' percaya bahwa kemampuan mereka dapat dikembangkan melalui kerja keras. Mereka menerima tantangan dan tekun.",
        "Buku ini menjelaskan bagaimana mindset secara signifikan mempengaruhi pencapaian dalam semua bidang kehidupan dan menawarkan strategi untuk menumbuhkan 'Mindset Tumbuh'."
      ]
    },
    {
      id: "subtle-art",
      title: "Sebuah Seni untuk Bersikap Bodo Amat - Mark Manson",
      author: "Mark Manson",
      summary: [
        "Buku ini menawarkan pendekatan yang berlawanan dengan budaya berpikir positif, dengan alasan bahwa kebahagiaan datang dari memilih masalah mana yang benar-benar kita pedulikan.",
        "Ide intinya adalah bahwa hidup ini penuh dengan kesulitan, dan mencoba menghindari rasa sakit adalah kontraproduktif. Kita harus menerima penderitaan sebagai bagian tak terpisahkan dari pencapaian sesuatu yang berharga.",
        "Manson menganjurkan untuk bertanggung jawab penuh atas hidup kita, termasuk reaksi kita. Yang penting bukanlah apa yang terjadi pada kita, tetapi bagaimana kita memilih untuk menafsirkannya.",
        "Buku ini mendorong pemikiran tentang kematian untuk mengidentifikasi nilai-nilai sejati kita dan berhenti membuang-buang waktu untuk hal-hal sepele."
      ]
    },
    {
      id: "monk-ferrari",
      title: "The Monk Who Sold His Ferrari - Robin Sharma",
      author: "Robin Sharma",
      summary: [
        "Buku ini adalah fabel tentang seorang pengacara sukses, Julian Mantle, yang setelah serangan jantung, menjual segalanya untuk mencari makna hidup yang lebih dalam di Himalaya.",
        "Julian bertemu dengan Orang Bijak Sivana, yang mengajarinya tujuh kebajikan untuk kehidupan yang tercerahkan: menguasai pikiran, mengikuti tujuan, berlatih 'Kaizen' (perbaikan berkelanjutan), hidup dengan disiplin, menghargai waktu, melayani orang lain, dan merangkul saat ini.",
        "Seluruh cerita berfungsi sebagai panduan spiritual dan praktis untuk beralih dari mengejar kesuksesan materi ke kedamaian batin dan kepuasan.",
        "Ini adalah panduan untuk mengubah hidup seseorang melalui pengembangan diri dan kehidupan yang bermakna."
      ]
    },
    {
      id: "one-hundred-years",
      title: "Seratus Tahun Kesunyian - Gabriel García Márquez",
      author: "Gabriel García Márquez",
      summary: [
        "Mahakarya sastra dunia ini mengikuti sejarah keluarga Buendía selama tujuh generasi di desa fiksi Macondo.",
        "Novel ini adalah contoh utama dari gaya 'realisme magis', di mana hal-hal supernatural berpadu mulus dengan realitas sehari-hari.",
        "Novel ini mengeksplorasi tema-tema yang berulang seperti kesunyian, sifat siklus waktu, dan takdir. Setiap anggota keluarga Buendía tampaknya ditakdirkan untuk kesunyian.",
        "Pada akhirnya, perkamen kuno yang berisi sejarah keluarga terungkap, dan novel berakhir dengan kehancuran Macondo, yang melambangkan akhir dari dunia mereka yang terisolasi."
      ]
    },
    {
      id: "five-love-languages",
      title: "Lima Bahasa Kasih - Gary Chapman",
      author: "Gary Chapman",
      summary: [
        "Buku ini memperkenalkan konsep yang kuat: Orang berbicara 'bahasa kasih' yang berbeda. Memahami bahasa pasangan Anda adalah kunci hubungan yang sehat.",
        "Lima bahasa kasih tersebut adalah: (1) Kata-kata Peneguhan, (2) Waktu Berkualitas, (3) Menerima Hadiah, (4) Tindakan Pelayanan, dan (5) Sentuhan Fisik.",
        "Chapman menjelaskan bahwa setiap orang memiliki bahasa kasih utama. Mengekspresikan cinta dalam bahasa pasangan Anda akan mengisi 'tangki cintanya'.",
        "Buku ini praktis dan menawarkan kuis untuk menemukan bahasa kasih Anda dan pasangan, serta tips untuk 'berbicara' setiap bahasa secara efektif."
      ]
    },
    {
      id: "pistachio-theory",
      title: "Teori Pistachio - Fahad Amer Al-Ahmadi",
      author: "Fahad Amer Al-Ahmadi",
      summary: [
        "'Teori Pistachio' adalah kumpulan artikel yang berfokus pada cara berpikir, pengembangan diri, dan pemecahan masalah sehari-hari.",
        "Nama buku ini terinspirasi oleh gagasan bahwa setiap aksi memiliki reaksi yang sama dan berlawanan. Solusinya bukan kekuatan kasar, tetapi menemukan 'celah' (titik lemah).",
        "Buku ini berisi banyak 'teori' kecil untuk mengubah cara berpikir seseorang, seperti teori 'peta lebih besar dari wilayah' atau 'hukum fokus'.",
        "Ini bukanlah narasi, melainkan kumpulan alat mental dan tips cepat tentang berbagai topik seperti manajemen waktu, pengambilan keputusan, dan kepercayaan diri."
      ]
    },
    {
      id: "rich-dad-poor-dad",
      title: "Rich Dad Poor Dad - Robert T. Kiyosaki",
      author: "Robert T. Kiyosaki",
      summary: [
        "Buku ini menyajikan literasi keuangan melalui kisah penulis dengan 'ayah miskin' (ayah kandungnya, seorang pegawai negeri) dan 'ayah kaya' (ayah temannya, seorang pengusaha).",
        "Ide sentralnya adalah perbedaan pola pikir terhadap uang. 'Ayah miskin' percaya pada jalur tradisional (belajar giat, dapatkan pekerjaan aman). 'Ayah kaya' mengajarkan bahwa orang kaya membuat uang bekerja untuk mereka.",
        "Buku ini menekankan pentingnya membedakan antara 'aset' (yang menghasilkan uang) dan 'liabilitas' (yang menghabiskan uang). Buku ini menyarankan untuk membangun portofolio aset.",
        "Kiyosaki mengkritik sistem pendidikan karena tidak mengajarkan literasi keuangan dan mendorong pembaca untuk mendidik diri sendiri untuk mencapai kebebasan finansial."
      ]
    }
  ],
  fa: [
    {
      id: "atomic-habits",
      title: "عادت‌های اتمی - جیمز کلیر",
      author: "جیمز کلیر",
      summary: [
        "ایده اصلی کتاب «عادت‌های اتمی» این است که تغییرات کوچک در رفتار، که «عادت‌های اتمی» نامیده می‌شوند، می‌توانند در طول زمان نتایج قابل توجهی به همراه داشته باشند. کلیر به جای تمرکز بر اهداف بزرگ، بر بهبود روزانه ۱٪ سیستم‌های زندگی ما تأکید می‌کند.",
        "این کتاب یک چارچوب عملی چهار مرحله‌ای برای ساختن عادت‌های خوب و شکستن عادت‌های بد ارائه می‌دهد: آن را آشکار کنید، آن را جذاب کنید، آن را آسان کنید و آن را رضایت‌بخش کنید.",
        "کلیر توضیح می‌دهد که هویت نقش محوری در تغییر عادت‌ها دارد. به جای گفتن «می‌خواهم بیشتر بخوانم»، باید هویت خود را به «من یک خواننده هستم» تغییر دهید.",
        "یکی از مهم‌ترین مفاهیم، «انباشت عادت» است، که در آن یک عادت جدید را به یک عادت قدیمی تثبیت‌شده پیوند می‌دهید تا پذیرش آن برای مغز آسان‌تر شود."
      ]
    },
    {
      id: "power-of-habit",
      title: "قدرت عادت - چارلز داهیگ",
      author: "چارلز داهیگ",
      summary: [
        "«قدرت عادت» علم پشت چگونگی شکل‌گیری عادت‌ها را آشکار می‌کند. موضوع اصلی کتاب «حلقه عادت» است: نشانه، روتین و پاداش.",
        "نشانه، ماشه‌ای است که مغز را به حالت خودکار می‌برد. روتین، خود رفتار است. پاداش به مغز کمک می‌کند تا تصمیم بگیرد که آیا این حلقه ارزش به خاطر سپردن را دارد یا خیر.",
        "قانون طلایی تغییر عادت، حفظ همان نشانه و پاداش است، در حالی که فقط روتین تغییر می‌کند.",
        "این کتاب مطالعات موردی از شرکت‌ها و افراد را بررسی می‌کند تا نشان دهد که چگونه درک حلقه عادت می‌تواند منجر به تحولات اساسی شود."
      ]
    },
    {
      id: "7-habits",
      title: "هفت عادت مردمان مؤثر - استفان کاوی",
      author: "استفان کاوی",
      summary: [
        "این کتاب یک رویکرد جامع برای دستیابی به اثربخشی شخصی و حرفه‌ای از طریق هفت عادت اصلی ارائه می‌دهد و استدلال می‌کند که اثربخشی واقعی از درون به بیرون است.",
        "سه عادت اول بر «پیروزی شخصی» (استقلال) تمرکز دارند: (۱) عامل باشید، (۲) از پایان در ذهن شروع کنید، (۳) اولین کارها را اول انجام دهید.",
        "سه عادت بعدی بر «پیروزی عمومی» (وابستگی متقابل) تمرکز دارند: (۴) برنده/برنده فکر کنید، (۵) ابتدا در پی فهمیدن باشید، سپس فهمیده شدن، (۶) سینرژی ایجاد کنید.",
        "عادت هفتم، «اره را تیز کنید»، عادت تجدید مداوم در ابعاد فیزیکی، معنوی، ذهنی و اجتماعی/عاطفی است."
      ]
    },
    {
      id: "the-one-thing",
      title: "تنها یک چیز - گری کلر و جی پاپاسان",
      author: "گری کلر و جی پاپاسان",
      summary: [
        "این کتاب حول ایده تمرکز دقیق بر «تنها یک چیز» که در هر زمان مهم‌ترین است برای دستیابی به نتایج فوق‌العاده می‌چرخد. موفقیت از انجام عالی کار درست حاصل می‌شود، نه انجام خوب کارهای زیاد.",
        "این کتاب «سوال تمرکز» را مطرح می‌کند: «آن یک چیزی که با انجام دادنش، همه چیز دیگر آسان‌تر یا غیرضروری می‌شود چیست؟».",
        "این کتاب به شدت از چندوظیفگی به عنوان یک افسانه که بهره‌وری را کاهش می‌دهد انتقاد می‌کند و به جای آن «بلوک‌بندی زمانی» را برای کار با تمرکز کامل بر روی «تنها یک چیز» پیشنهاد می‌کند.",
        "نویسندگان تأثیر «تنها یک چیز» را به افتادن دومینوها تشبیه می‌کنند: با تمرکز بر مهم‌ترین کار، مجموعه‌ای از نتایج مثبت را به راه می‌اندازید."
      ]
    },
    {
      id: "deep-work",
      title: "کار عمیق - کال نیوپورت",
      author: "کال نیوپورت",
      summary: [
        "«کار عمیق» به عنوان توانایی تمرکز بدون حواس‌پرتی بر روی یک کار دشوار از نظر شناختی تعریف می‌شود. این مهارت به طور فزاینده‌ای نادر و ارزشمند می‌شود.",
        "این کتاب «کار عمیق» را از «کار سطحی»، یعنی کارهای لجستیکی که از نظر شناختی سخت نیستند، متمایز می‌کند. نیوپورت استدلال می‌کند که ما زمان زیادی را صرف کارهای سطحی می‌کنیم.",
        "او چهار فلسفه را برای به کارگیری کار عمیق پیشنهاد می‌کند: رهبانی (انزوای کامل)، دو حالته (متناوب)، ریتمیک (عادت منظم) و روزنامه‌نگاری (استفاده از اوقات فراغت).",
        "نیوپورت استراتژی‌های عملی برای افزایش توانایی کار عمیق ارائه می‌دهد، مانند «پذیرش کسالت» برای تمرین تمرکز و «ترک رسانه‌های اجتماعی»."
      ]
    },
    {
      id: "mindset",
      title: "طرز فکر - کارول دوک",
      author: "کارول دوک",
      summary: [
        "کارول دوک، روانشناس، دو مفهوم اساسی طرز فکر را معرفی می‌کند: «طرز فکر ثابت» و «طرز فکر رشد».",
        "افراد با «طرز فکر ثابت» معتقدند که ویژگی‌های اساسی آنها (هوش، استعداد) صفاتی غیرقابل تغییر هستند. آنها از چالش‌ها اجتناب می‌کنند و به راحتی تسلیم می‌شوند.",
        "در مقابل، افراد با «طرز فکر رشد» معتقدند که توانایی‌هایشان را می‌توان با کار سخت توسعه داد. آنها چالش‌ها را می‌پذیرند و پشتکار دارند.",
        "این کتاب توضیح می‌دهد که چگونه طرز فکر به طور قابل توجهی بر موفقیت در تمام زمینه‌های زندگی تأثیر می‌گذارد و استراتژی‌هایی برای پرورش «طرز فکر رشد» ارائه می‌دهد."
      ]
    },
    {
      id: "subtle-art",
      title: "هنر ظریف بی‌خیالی - مارک منسن",
      author: "مارک منسن",
      summary: [
        "این کتاب رویکردی برخلاف فرهنگ تفکر مثبت ارائه می‌دهد و استدلال می‌کند که خوشبختی از انتخاب مشکلاتی که واقعاً برایمان اهمیت دارند ناشی می‌شود.",
        "ایده اصلی این است که زندگی پر از مشکلات است و تلاش برای اجتناب از درد، بی‌فایده است. ما باید رنج را به عنوان بخشی جدایی‌ناپذیر از دستیابی به هر چیز ارزشمندی بپذیریم.",
        "منسن از پذیرفتن مسئولیت کامل زندگی‌مان، از جمله واکنش‌هایمان، حمایت می‌کند. مهم نیست چه اتفاقی برای ما می‌افتد، بلکه نحوه تفسیر ما مهم است.",
        "این کتاب تفکر درباره مرگ را برای شناسایی ارزش‌های واقعی ما و توقف اتلاف وقت برای مسائل پیش پا افتاده تشویق می‌کند."
      ]
    },
    {
      id: "monk-ferrari",
      title: "راهبی که فراری‌اش را فروخت - رابین شارما",
      author: "رابین شارما",
      summary: [
        "این کتاب حکایتی است درباره یک وکیل موفق به نام جولیان منتل که پس از یک حمله قلبی، همه چیز را می‌فروشد تا معنای عمیق‌تری برای زندگی در هیمالیا بیابد.",
        "جولیان با حکیمان سیوانا ملاقات می‌کند که به او هفت فضیلت برای یک زندگی روشن‌فکرانه می‌آموزند: تسلط بر ذهن، پیروی از هدف، تمرین «کایزن» (بهبود مستمر)، زندگی با انضباط، احترام به زمان، خدمت به دیگران و پذیرش زمان حال.",
        "کل داستان به عنوان یک راهنمای معنوی و عملی برای تغییر از تعقیب موفقیت مادی به سوی آرامش درونی و رضایت عمل می‌کند.",
        "این راهنمایی برای تغییر زندگی از طریق خودسازی و یک زندگی هدفمند است."
      ]
    },
    {
      id: "one-hundred-years",
      title: "صد سال تنهایی - گابریل گارسیا مارکز",
      author: "گابریل گارسیا مارکز",
      summary: [
        "این شاهکار ادبیات جهان، تاریخ خانواده بوئندیا را در طول هفت نسل در دهکده خیالی ماکوندو دنبال می‌کند.",
        "این رمان نمونه بارز سبک «رئالیسم جادویی» است، که در آن فراطبیعی با واقعیت روزمره به طور یکپارچه ترکیب می‌شود.",
        "این رمان به بررسی مضامین تکراری مانند تنهایی، ماهیت چرخه‌ای زمان و سرنوشت می‌پردازد. به نظر می‌رسد هر یک از اعضای خانواده بوئندیا به نوعی به تنهایی محکوم شده‌اند.",
        "در پایان، طومارهای باستانی حاوی تاریخ خانواده فاش می‌شود و رمان با نابودی ماکوندو به پایان می‌رسد که نماد پایان دنیای منزوی آنهاست."
      ]
    },
    {
      id: "five-love-languages",
      title: "پنج زبان عشق - گری چپمن",
      author: "گری چپمن",
      summary: [
        "این کتاب یک مفهوم قدرتمند را معرفی می‌کند: مردم به «زبان‌های عشق» متفاوتی صحبت می‌کنند. درک زبان شریک زندگی‌تان کلید یک رابطه سالم است.",
        "پنج زبان عشق عبارتند از: (۱) کلام تأییدآمیز، (۲) وقت گذاشتن برای یکدیگر، (۳) دریافت هدایا، (۴) خدمت به یکدیگر و (۵) تماس فیزیکی.",
        "چپمن توضیح می‌دهد که هر کس یک زبان عشق اصلی دارد. ابراز عشق به زبان شریک زندگی‌تان «مخزن عشق» او را پر می‌کند.",
        "این کتاب کاربردی است و آزمون‌هایی برای کشف زبان عشق خود و شریک زندگی‌تان و همچنین نکاتی برای «صحبت کردن» مؤثر به هر زبان ارائه می‌دهد."
      ]
    },
    {
      id: "pistachio-theory",
      title: "نظریه پسته - فهد عامر الاحمدی",
      author: "فهد عامر الاحمدی",
      summary: [
        "«نظریه پسته» مجموعه‌ای از مقالات با تمرکز بر روش‌های تفکر، خودسازی و حل مشکلات روزمره است.",
        "نام کتاب از این ایده الهام گرفته شده است که هر عملی عکس‌العملی برابر و مخالف دارد. راه حل، نیروی بی‌رحمانه نیست، بلکه یافتن «ترک» (نقطه ضعف) است.",
        "این کتاب شامل بسیاری از «نظریه‌های» کوچک برای تغییر طرز فکر فرد است، مانند نظریه «نقشه بزرگتر از قلمرو است» یا «قانون تمرکز».",
        "این یک روایت نیست، بلکه مجموعه‌ای از ابزارهای ذهنی و نکات سریع در مورد موضوعات مختلف مانند مدیریت زمان، تصمیم‌گیری و اعتماد به نفس است."
      ]
    },
    {
      id: "rich-dad-poor-dad",
      title: "پدر پولدار، پدر بی‌پول - رابرت کیوساکی",
      author: "رابرت کیوساکی",
      summary: [
        "این کتاب سواد مالی را از طریق داستان نویسنده با «پدر بی‌پول» (پدر بیولوژیکی‌اش، یک کارمند دولتی) و «پدر پولدار» (پدر دوستش، یک کارآفرین) ارائه می‌دهد.",
        "ایده اصلی تفاوت در طرز فکر نسبت به پول است. «پدر بی‌پول» به مسیر سنتی اعتقاد دارد (سخت درس بخوان، یک شغل امن پیدا کن). «پدر پولدار» می‌آموزد که ثروتمندان برای پول کار نمی‌کنند، بلکه کاری می‌کنند که پول برای آنها کار کند.",
        "این کتاب بر اهمیت تمایز بین «دارایی‌ها» (که پول وارد می‌کنند) و «بدهی‌ها» (که پول خارج می‌کنند) تأکید می‌کند. این کتاب ساخت یک سبد دارایی را توصیه می‌کند.",
        "کیوساکی از سیستم آموزشی به دلیل عدم آموزش سواد مالی انتقاد می‌کند و خوانندگان را تشویق می‌کند تا برای رسیدن به آزادی مالی خود را آموزش دهند."
      ]
    }
  ]
};


export default function SummariesPage() {
  const { t, locale } = useLanguage();
  const currentSummaries = bookSummaries[locale]?.length ? bookSummaries[locale] : bookSummaries.en;

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

    