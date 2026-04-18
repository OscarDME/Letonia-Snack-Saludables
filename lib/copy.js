// lib/copy.js — viss redzamais landing lapas teksts. Letón, verbatim no
// loncherafeliz.aprende-hoy.shop. Jebkuras teksta izmaiņas notiek šeit.

export const copy = {
  metadata: {
    title:
      "Veselīgas uzkodas bērniem | 500 ātras un gardas receptes",
    description:
      "Atklājiet 500 veselīgu bērnu uzkodu receptes, kas gatavas mazāk nekā 15 minūtēs. Iekļauti 9 bezmaksas bonusi. Īpašais piedāvājums: 8.90 €.",
    productName: "Veselīgu bērnu uzkodu rokasgrāmata",
  },

  hero: {
    urgencyBar:
      "⚡ IEROBEŽOTA LAIKA PIEDĀVĀJUMS! Tikai šodien: 95% atlaide",
    badge: "Gatavs mazāk nekā 15 minūtēs",
    headline: {
      before: "Mainiet savu bērnu uzturu ar ",
      accent: "veselīgām uzkodām",
      after: ", kas ir gan ātri pagatavojamas, gan ļoti gardas",
    },
    subheadline:
      "Vienkāršas un uzturvielām bagātas receptes, kuras jūsu mīļie iemīlēs – ideāli piemērotas skolai vai mājām. 500 idejas, kā parūpēties par viņu veselību, netērējot lieku laiku!",
    ctaLabel: "Pērciet tagad un ietaupiet 95%!",
    trustChips: [
      { icon: "🥗", text: "500 receptes" },
      { icon: "🎁", text: "Bonusi vairāk nekā 90 € vērtībā DĀVANĀ" },
      { icon: "🛡️", text: "14 dienu bezriska garantija" },
    ],
    image: {
      src: "/hero-snacks.webp",
      alt: "Transformācija no neveselīgas pārtikas uz veselīgām uzkodām mazāk nekā 15 minūtēs",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Gatavs", bottom: "15 min" },
      discount: { icon: "💚", top: "95%", bottom: "atlaide" },
    },
  },

  story: {
    kicker: "Mūsu stāsts",
    paragraphs: [
      "Jūsu bērns ēd vairākas reizes dienā, un tas, ko viņš ēd, tieši ietekmē viņa veselību, enerģiju un garastāvokli.",
      "Problēma nav tajā, ka laiku pa laikam iedodat viņam cepumu. Problēma rodas tad, kad laika vai ideju trūkuma dēļ tas kļūst par ikdienu.",
      "Ne jau tāpēc, ka jums nerūpētu. Vienkārši starp nogurumu, mājas darbiem un tūkstošiem ikdienas pienākumu, dažreiz ir nepieciešams kaut kas patiesi ātrs un vienkāršs.",
      "„VESELĪGAS UZKODAS BĒRNIEM” ir radītas tieši šādiem vecākiem – tiem, kuri rūpējas par savu bērnu veselību, bet meklē praktiskus risinājumus, nevis sarežģītas receptes un neīstenojamas idejas.",
    ],
  },

  benefits: {
    kicker: "Galvenie ieguvumi",
    headline: "Ar Veselīgu bērnu uzkodu rokasgrāmatu jūs atvadīsieties no...",
    items: [
      {
        icon: "🍪",
        title: "Neveselīgas pārtikas",
        desc: "Ātras receptes ar dabīgām sastāvdaļām, bez mākslīgām piedevām un konservantiem.",
      },
      {
        icon: "⏱️",
        title: "Laika trūkuma",
        desc: "Receptes, kas gatavas tikai 15 minūtēs, pilnīgi ideālas cilvēkiem ar aizņemtu grafiku.",
      },
      {
        icon: "🥦",
        title: "Rūpēm par bērnu uzturu",
        desc: "Uzkodas, kas bagātas ar svarīgiem vitamīniem un minerālvielām un kuras dievinās visi.",
      },
      {
        icon: "😩",
        title: "Stresa, gatavojot sarežģītus ēdienus",
        desc: "Gardas receptes, kas liks jūsu mīļajiem ar nepacietību gaidīt, ko jūs viņiem pagatavosiet.",
      },
    ],
  },

  transformation: {
    kicker: "Transformācija, kuru meklējat",
    headline: "Skatieties, kā mainīsies jūsu bērnu uzturs un enerģija",
    before: {
      tag: "PIRMS",
      title: "Bez enerģijas un uzturvērtības",
      desc: "Pārstrādāta pārtika, pilna ar cukuru un piedevām, kas nedod neko labu",
    },
    after: {
      tag: "PĒC",
      title: "Laimīgi, dzīvespriecīgi un enerģijas pilni",
      desc: "Dabīgas, gardas un uzturvielām bagātas uzkodas, kuras bērni dievina",
    },
    image: {
      src: "/kids-transformation.webp",
      alt: "Transformācija: bēdīgs bērns, kurš ēd neveselīgu pārtiku, pret laimīgu bērnu ar veselīgām uzkodām",
    },
  },

  samples: {
    headline: "Neatvairāmas receptes, kuras viņi iemīlēs",
    subheadline:
      "Apskatiet nelielu daļu no gardajām receptēm, kuras atradīsiet e-grāmatā",
    items: [
      {
        image: "/recipe-pancakes.webp",
        title: "Veselīgās pankūkas",
        desc: "Gaisīgas un zeltainas, ar svaigiem augļiem un īstu medu",
      },
      {
        image: "/recipe-pizza.webp",
        title: "Bezglutēna pica",
        desc: "Garda pica ar svaigiem dārzeņiem un kausētu sieru",
      },
      {
        image: "/recipe-smoothies.webp",
        title: "Dabīgie smūtiji",
        desc: "Krāsaini augļu smūtiji, kas viņus apburs",
      },
      {
        image: "/recipe-cookies.webp",
        title: "Auzu pārslu cepumi",
        desc: "Kraukšķīgi mājās gatavoti cepumi ar auzu pārslām un mandelēm",
      },
    ],
    footnote: "Visas 500 receptes jūs gaida pilnajā e-grāmatā",
  },

  testimonials: {
    kicker: "PIERĀDĪTI REZULTĀTI",
    headline: "Vairāk nekā 5000 ģimeņu jau ir mainījušas savus ēšanas paradumus",
    subheadline:
      "Pievienojieties tūkstošiem vecāku, kuri jau bauda veselīgāku pārtiku bez lieka stresa",
    rating: 5,
    ratingLabel: "5/5",
    reviewCount: "150 atsauksmes",
    items: [
      {
        initial: "D",
        name: "Dace",
        role: "2 mazu bērnu māte",
        quote:
          "Es nekad neticēju, ka mans dēls tik ātri sāks ēst veselīgas uzkodas! Receptes ir ne tikai ļoti vienkāršas, bet viņam tās arī ārkārtīgi garšo. Paldies, ka atvieglojāt manu dzīvi! Labākā investīcija, ko esmu veikusi.",
      },
      {
        initial: "J",
        name: "Jānis",
        role: "3 bērnu tēvs",
        quote:
          "Agrāk es ļoti uztraucos par to, ko dodu saviem bērniem, bet ar šo grāmatu esmu atradis ārkārtīgi gardas un veselīgas alternatīvas. Tagad mēs visi ēdam pilnvērtīgāk, un esmu daudz mierīgāks!",
      },
      {
        initial: "E",
        name: "Elīna",
        role: "uztura speciāliste un māte",
        quote:
          "Kā speciāliste varu apstiprināt, ka šīs receptes ir ideāli sabalansētas. Mani bērni tās dievina, un es esmu mierīga, zinot, ka viņi ēd labi. Ļoti iesaku ikvienam vecākam!",
      },
      {
        initial: "L",
        name: "Līga",
        role: "strādājoša māte",
        quote:
          "Saspringtā grafika dēļ man nebija laika gatavot. Šī grāmata mainīja visu: receptes 15 minūtēm, kuras mani bērni prasa atkal un atkal. Katra centa vērts! Esmu to jau ieteikusi visām savām draudzenēm.",
      },
    ],
  },

  whatYouGet: {
    kicker: "KAS IR IEKĻAUTS?",
    headline: "Viss, ko atradīsiet šajā neticamajā e-grāmatā",
    subheadline: "Pilnīga rokasgrāmata par veselīgu bērnu uzturu",
    items: [
      "500 ātras un uzturvielām bagātas receptes brokastīm, pusdienām, vakariņām un skolas uzkodām",
      "Gatavas nedēļas ēdienkartes + ekonomiski iepirkumu saraksti",
      "Idejas perfektai brokastu, uzkodu un vakariņu kombinēšanai",
      "Viegli saprotamas soli pa solim gatavošanas instrukcijas",
      "Veselīgu aizstājēju saraksts gadījumiem, kad trūkst kādas sastāvdaļas",
      "Bezmaksas atjauninājumi ar jaunām receptēm un ēdienkartēm",
      "Un vēl daudz vairāk…",
    ],
    footnote: {
      line1: "Un tas vēl nav viss...",
      line2: "Ir vēl daudz kas cits!",
      line3: "Jūs saņemsiet arī...",
    },
  },

  bonuses: {
    flagline: "🔥 TIKAI ŠODIEN!",
    headline: "Saņemiet BEZMAKSAS bonusus vairāk nekā 90 € vērtībā, iepērkoties tagad",
    subheadline:
      "92.95 € vērtībā — pilnīgi jūsu DĀVANĀ ar šodienas pirkumu!",
    badgeLabel: "BEZMAKSAS",
    valueLabel: "Vērtība:",
    items: [
      {
        value: "27.99 €",
        title: "Bezglutēna un bezcukura mafinu un picu receptes",
        desc: "Pagatavojiet veselīgas viņu iecienītāko ēdienu versijas bez pievienota cukura, bez glutēna un gatavas burtiski dažu minūšu laikā.",
      },
      {
        value: "19.99 €",
        title: "Praktiska rokasgrāmata pārtikas organizēšanai un saldēšanai",
        desc: "Uzziniet, kā visu pagatavot uzreiz un nodrošināt gatavu ēdienu visai nedēļai mazāk nekā 30 minūtēs dienā.",
      },
      {
        value: "14.99 €",
        title: "Īpašas receptes bērniem ar alerģijām",
        desc: "Drošas un gardas receptes, kas pielāgotas biežākajām alerģijām (piens, olas, soja, zemesrieksti).",
      },
      {
        value: "14.99 €",
        title: "Gardu un veselīžu desertu receptes",
        desc: "Aizstājiet pārstrādātus saldumus ar veselīgiem kārumiem, kas izgatavoti tikai no dabīgām sastāvdaļām.",
      },
      {
        value: "14.99 €",
        title: "Veselīgas un viegli pagatavojamas svaigi spiestas sulas",
        desc: "Praktiskas receptes dabīgām, uzturvielām bagātām un gardām sulām, kas atsvaidzinās jūsu mīļo ikdienu.",
      },
    ],
    totalLabel: "🎁 Kopējā bonusu vērtība: 92.95 €",
    totalCta: "JŪS TOS SAŅEMAT PILNĪGI BEZ MAKSAS KOPĀ AR SAVU ŠODIENAS PIRKUMU!",
  },

  exclusiveBonuses: {
    kicker: "TURKLĀT.. ⭐ EKSKLUZĪVI BONUSI!",
    headline: "Tikai šodien! Saņemiet arī šos papildu ekskluzīvos bonusus",
    subheadline: "lai transformētu jūsu bērnu veselību",
    badgeLabel: "BEZMAKSAS",
    valueLabel: "Vērtība:",
    items: [
      {
        value: "18.99 €",
        title: "Mājās gatavotas augļu želejkonfektes ar augstu C vitamīna saturu",
        desc: "Uzziniet, kā pagatavot dabīgas želejkonfektes, kas bagātas ar C vitamīnu, lai jautrā un gardā veidā stiprinātu bērnu imūnsistēmu. Bez pievienota cukura, 100% dabīgas un pilnas ar uzturvielām!",
      },
      {
        value: "19.99 €",
        title: "Kā panākt, lai bērni iemīlētu dārzeņus",
        desc: "Pārvērtiet dārzeņus gardā un jautrā piedzīvojumā saviem bērniem. Vienkāršas receptes, kas palīdzēs viņiem ēst dārzeņus ar lielu prieku.",
      },
      {
        value: "17.99 €",
        title: "Ātro uzkodu rokasgrāmata bērniem ar vāju apetīti",
        desc: "Atklājiet vienkāršas un uzturvielām bagātas uzkodas, kas ideāli piemērotas bērniem ar vāju apetīti, palīdzot viņiem ēst veselīgi un ļoti gardi.",
      },
      {
        value: "17.99 €",
        title: "Superproduktu rokasgrāmata bērniem",
        desc: "Uzziniet, kā ar vienkāršām receptēm, kas nodrošina svarīgas uzturvielas, iekļaut superproduktus, kas uzlabos jūsu bērnu veselību un enerģiju.",
      },
    ],
    totalLabel: "🎁 VISU bonusu kopējā vērtība: 167.91 €",
    totalCta: "JŪS TOS SAŅEMAT PILNĪGI BEZ MAKSAS KOPĀ AR SAVU ŠODIENAS PIRKUMU!",
  },

  finalCta: {
    flagline: "⏰ PIEDĀVĀJUMS SPĒKĀ TIKAI ŠODIEN!",
    headline: "Pilna pakete 201 € vērtībā",
    subheadline: "Šodien jūs to saņemat ar 95% atlaidi",
    regularPriceLabel: "Standarta cena:",
    regularPrice: "201.00 €",
    offerPrice: "8.90 €",
    bundleList: [
      "✅ 500 veselīgu uzkodu receptes (34 € vērtībā)",
      "✅ 9 ekskluzīvi bonusi 167.91 € vērtībā — PILNĪGI BEZMAKSAS!",
      "✅ Receptes, kas gatavas mazāk nekā 15 minūtēs",
      "✅ Tūlītēja un mūža piekļuve",
      "✅ 14 dienu naudas atgriešanas garantija",
    ],
    button: "Pērciet tagad un ietaupiet 95%!",
    trustRow: "🔒 100% drošs maksājums • ⚡ Tūlītēja piekļuve • ✅ 14 dienu garantija",
    bonusesBadge: "✓ 9 BEZMAKSAS BONUSI",
    discountStickerLabel: "Tikai šodien",
    discountStickerValue: "-95%",
    imageAlt:
      "Pilna pakete: E-grāmata Veselīgas uzkodas bērniem + 9 bonusi",
    image: "/mockup-cta.webp",
  },

  guarantee: {
    headline: "Jūsu pirkums ir 100% aizsargāts ar mūsu 14 dienu garantiju",
    tag: "NULLE RISKA JUMS",
    body: "Mēs esam tik pārliecināti, ka šī rokasgrāmata jums patiks, ka piedāvājam beznosacījumu 14 dienu garantiju. Ja kāda iemesla dēļ neesat 100% apmierināti, mēs atgriezīsim katru centu. Bez liekiem jautājumiem un sarežģījumiem.",
    footer: "✅ Garantēta pilna naudas atgriešana • ✅ Bez liekiem jautājumiem • ✅ Tūlītēja procedūra",
  },

  faq: {
    kicker: "BUJ",
    headline: "Bieži uzdotie jautājumi",
    items: [
      {
        q: "Kādai vecuma grupai ir paredzēta rokasgrāmata?",
        a: "Rokasgrāmata ir paredzēta bērniem no 2 līdz 12 gadiem, lai gan receptes var viegli pielāgot pilnīgi visiem vecumiem.",
      },
      {
        q: "Vai tā ir piemērota bērniem ar alerģijām?",
        a: "Jā! Mēs piedāvājam receptes, kas pielāgotas biežākajām alerģijām, piemēram, pret pienu, olām, soju un zemesriekstiem, lai visi bērni varētu baudīt gardu un veselīgu pārtiku.",
      },
      {
        q: "Vai man jāprot labi gatavot?",
        a: "Nē, receptes ir izveidotas tā, lai tām būtu maksimāli viegli sekot, ar nelielu sastāvdaļu skaitu un vienkāršiem soļiem. Pat ja neesat eksperts virtuvē, jums veiksies lieliski!",
      },
      {
        q: "Vai sastāvdaļas ir dārgas?",
        a: "Nē, visas sastāvdaļas ir pieejamas un viegli atrodamas jebkurā standarta lielveikalā. Jums nav nepieciešami dārgi vai grūti atrodami produkti.",
      },
      {
        q: "Cik daudz laika aizņem uzkodu pagatavošana?",
        a: "Receptes ir ārkārtīgi ātras, un lielākā daļa uzkodu ir gatavas mazāk nekā 15 minūtēs.",
      },
      {
        q: "Vai es varu norēķināties savā vietējā valūtā?",
        a: "Jā! Mūsu maksājumu sistēma automātiski konvertē summu pēc jūsu vietējās valūtas kursa. Pārejot pie apmaksas, jūs redzēsiet cenu, kas pielāgota jūsu valūtai, tāpēc jums nebūs jāuztraucas par papildu valūtas konvertāciju. Mēs garantējam, ka maksājuma process ir vienkāršs un pilnīgi pārredzams neatkarīgi no jūsu atrašanās vietas.",
      },
    ],
  },

  closing: {
    kicker: "PĒDĒJĀ IESPĒJA! ⚡ Šis piedāvājums drīz beigsies",
    headline:
      "Nepalaidiet garām šo unikālo iespēju transformēt savas ģimenes uzturu!",
    subheadline:
      "Pilna rokasgrāmata + 9 bonusi 167.91 € vērtībā DĀVANĀ! Tas viss par vienu vakariņu ārpus mājas cenu",
    regularPrice: "201.00 €",
    offerPrice: "8.90 €",
    ctaLabel: "JĀ, ES GRIBU SAVU ROKASGRĀMATU TAGAD!",
    trustRow:
      "🔒 100% drošs maksājums • ⚡ Tūlītēja piekļuve • ✅ 14 dienu naudas atgriešanas garantija bez riska",
  },

  footer: {
    madeWith: "Veidots ar",
    forWho: "veselīgām ģimenēm",
    copyright: "© 2026 Veselīgas uzkodas. Visas tiesības aizsargātas.",
  },

  stickyCta: {
    label: "8.90 €",
    ctaLabel: "Pērciet tagad un ietaupiet 95%!",
    urgency: "⚡ Ierobežota laika piedāvājums",
  },
};