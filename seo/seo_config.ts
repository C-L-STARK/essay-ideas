const Seo = {
  i18n: {
    "zh-CN": {
      title: "论文创意发现器 - 激发您的灵感",
      description: "提供论文模板、写作技巧、申请文书指导，帮助学生轻松应对学术写作与大学申请，适合各类写作需求",
      banner: "欢迎来到论文创意发现器，希望您能不断进步！",
      editText: "贡献这篇文章 →",
      feedBackText: "给我们反馈 →",
      titleEmojiBeginChar: "另",
    },
    "en-US": {
      title: "Essay Ideas Finder - Spark Your Inspiration",
      description:
        "Offering essay templates, writing tips, and supplemental essay guides to help students excel in academic writing and college applications for all writing needs.",
      banner: "welcome to Essay Ideas Finder, hope You Can Up Up!",
      editText: "Contribute to this article →",
      feedBackText: "Give us a feed back →",
      titleEmojiBeginChar: "A",
    },
    "de-DE": {
      title: "Aufsatzideen Finder - Entfachen Sie Ihre Inspiration",
      description:
        "Bietet Aufsatzvorlagen, Schreibtipps und ergänzende Aufsatzanleitungen, um Studenten zu helfen, im akademischen Schreiben und bei Bewerbungen erfolgreich zu sein.",
      banner: "Willkommen beim Aufsatzideen Finder, hoffen Sie können aufsteigen!",
      editText: "Zu diesem Artikel beitragen →",
      feedBackText: "Geben Sie uns Feedback →",
      titleEmojiBeginChar: "E",
    },
    "ja-JP": {
      title: "エッセイアイデアファインダー - あなたのインスピレーションを刺激",
      description:
        "学生が学術的な文章や大学の出願で成功を収めるためにエッセイのテンプレート、執筆のヒント、補足エッセイガイドを提供します。",
      banner: "エッセイアイデアファインダーへようこそ、向上を祈っています！",
      editText: "この文章に貢献 →",
      feedBackText: "フィードバックをお願いします →",
      titleEmojiBeginChar: "エ",
    },
    "ar-SA": {
      title: "مكتشف أفكار المقال - أشعل إلهامك",
      description:
        "تقديم قوالب مقالات ونصائح كتابة وأدلة مقالات تكميلية لمساعدة الطلاب على التفوق في الكتابة الأكاديمية وتطبيقات الكلية لجميع الاحتياجات الكتابية.",
      banner: "مرحبًا بك في مكتشف أفكار المقال، نأمل أن تتمكن من التقدم!",
      editText: "ساهم في هذه المقالة ←",
      feedBackText: "أرسل لنا تعليقاتك ←",
      titleEmojiBeginChar: "م",
    },
  },
};

const getConfigStr = (local: String, key: String) => {
  const localData = Seo.i18n[local as keyof typeof Seo];
  if (!localData) {
    return Seo.i18n["en-US"];
  }
  return localData[key];
};

export default getConfigStr;
