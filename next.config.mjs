/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ]
  },
  redirects: () => [
    {
      source: "/mico",
      destination: "/products/mindscape-commons",
      permanent: true,
    },
    {
      source: "/micos",
      destination: "/products/mindscape-commons-new",
      permanent: true,
    },
    {
      source: "/privacy-policy",
      destination: "/about-us/privacy-policy",
      permanent: true,
    },
    {
      source: "/presentations",
      destination: "/about-us/insights",
      permanent: true,
    },
    {
      source: "/wena",
      destination: "/products/history-commons/wena",
      permanent: true,
    },
    {
      source: "/cwee",
      destination: "/products/history-commons/cwee",
      permanent: true,
    },
    {
      source: "/southasiacommons",
      destination: "/products/southasia-commons",
      permanent: true,
    },
    {
      source: "/newsletter-menu-mico",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/canadacommons-fr",
      destination: "/products/canada-commons",
      permanent: true,
    },
    {
      source: "/cart",
      destination: "/",
      permanent: true,
    },
    {
      source: "/hico",
      destination: "/products/history-commons",
      permanent: true,
    },
    {
      source: "/pogo",
      destination: "/products/policy-commons/pogo",
      permanent: true,
    },
    {
      source: "/sales",
      destination: "/talk-to-sales",
      permanent: true,
    },
    {
      source: "/cabt",
      destination: "/products/canada-commons/cabt",
      permanent: true,
    },
    {
      source: "/17666816-ab21-427b-8c76-21935592c9e3",
      destination: "/products/canada-commons/cabt",
      permanent: true,
    },
    {
      source: "/frle",
      destination: "/products/history-commons/lwco",
      permanent: true,
    },
    {
      source: "/pohe",
      destination: "/products/policy-commons/pohe",
      permanent: true,
    },
    {
      source: "/archivbyte",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/sahc",
      destination: "/products/south-asia-commons/sahc",
      permanent: true,
    },
    {
      source: "/newsletters",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/news",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/mindscape",
      destination: "/products/mindscape-commons",
      permanent: true,
    },
    {
      source: "/afhc",
      destination: "/products/africa-commons/afhc",
      permanent: true,
    },
    {
      source: "/amne",
      destination: "/products/history-commons/amne",
      permanent: true,
    },
    {
      source: "/cahc",
      destination: "/products/canada-commons/cahc",
      permanent: true,
    },
    {
      source: "/aans",
      destination: "/products/history-commons/ansc",
      permanent: true,
    },
    {
      source: "/contentownerguide",
      destination: "/who-we-serve/think-tanks",
      permanent: true,
    },
    {
      source: "/teams",
      destination: "/about-us/our-team",
      permanent: true,
    },
    {
      source: "/cwco",
      destination: "/products/history-commons/cwco",
      permanent: true,
    },
    {
      source: "/discovery-services",
      destination: "/support/discovery-services",
      permanent: true,
    },
    {
      source: "/accessiblefaq",
      destination: "/support/accessible-faq",
      permanent: true,
    },
    {
      source: "/newslettermenu",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/file-upload-policy",
      destination: "/support/file-upload-policy",
      permanent: true,
    },
    {
      source: "/sabinet",
      destination: "/products/africa-commons/sabinet",
      permanent: true,
    },
    {
      source: "/aanw",
      destination: "/products/history-commons/anco",
      permanent: true,
    },
    {
      source: "/amwo",
      destination: "/products/history-commons/awco",
      permanent: true,
    },
    {
      source: "/cang-fr",
      destination: "/products/canada-commons/cang",
      permanent: true,
    },
    {
      source: "/policycommons",
      destination: "/products/policy-commons",
      permanent: true,
    },
    {
      source: "/cang",
      destination: "/products/canada-commons/cang",
      permanent: true,
    },
    {
      source: "/sefi",
      destination: "/products/history-commons/sefi",
      permanent: true,
    },
    {
      source: "/africacommons",
      destination: "/products/africa-commons",
      permanent: true,
    },
    {
      source: "/amco",
      destination: "/products/history-commons/amch",
      permanent: true,
    },
    {
      source: "/vpat",
      destination: "/support/accessibility",
      permanent: true,
    },
    {
      source: "/pocc",
      destination: "/products/policy-commons/pocc",
      permanent: true,
    },
    {
      source: "/resources/website-owner-guide",
      destination: "/who-we-serve/think-tanks",
      permanent: true,
    },
    {
      source: "/woma",
      destination: "/products/history-commons/woco",
      permanent: true,
    },
    {
      source: "/terms-of-use",
      destination: "/support/terms-of-use",
      permanent: true,
    },
    {
      source: "/about",
      destination: "/about-us/our-vision",
      permanent: true,
    },
    {
      source: "/poco",
      destination: "/products/policy-commons",
      permanent: true,
    },
    {
      source: "/preservation",
      destination: "/support/contact-us",
      permanent: true,
    },
    {
      source: "/affi",
      destination: "/products/africa-commons/affi",
      permanent: true,
    },
    {
      source: "/pocw",
      destination: "/products/policy-commons/pocw",
      permanent: true,
    },
    {
      source: "/about-2",
      destination: "/support/contact-us",
      permanent: true,
    },
    {
      source: "/marc",
      destination: "/support/marc-records",
      permanent: true,
    },
    {
      source: "/esma",
      destination: "/products/history-commons/aico",
      permanent: true,
    },
    {
      source: "/vision",
      destination: "/about-us/our-vision",
      permanent: true,
    },
    {
      source: "/afm2",
      destination: "/products/Africa-commons/afm2",
      permanent: true,
    },
    {
      source: "/saco1",
      destination: "/products/south-asia-commons",
      permanent: true,
    },
    {
      source: "/canadacommons",
      destination: "/products/canada-commons",
      permanent: true,
    },
    {
      source: "/resources2-1",
      destination: "/support/contact-us",
      permanent: true,
    },
    {
      source: "/productsgen",
      destination: "/products/south-asia-commons",
      permanent: true,
    },
    {
      source: "/aasp",
      destination: "/support/accessible-faq",
      permanent: true,
    },
    {
      source: "/join-our-team",
      destination: "/about-us/join-us",
      permanent: true,
    },
    {
      source: "/afme",
      destination: "/products/africa-commons/afme",
      permanent: true,
    },
    {
      source: "/brho",
      destination: "/products/history-commons/brho",
      permanent: true,
    },
    {
      source: "/afconews",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/resources/authentication",
      destination: "/support/authentication",
      permanent: true,
    },
    {
      source: "/panz",
      destination: "/products/policy-commons/panz",
      permanent: true,
    },
    {
      source: "/technicalsupport",
      destination: "/support/contact-us",
      permanent: true,
    },
    {
      source: "/afmg",
      destination: "/products/africa-commons/afmg",
      permanent: true,
    },
    {
      source: "/about-us",
      destination: "/about-us/our-vision",
      permanent: true,
    },
    {
      source: "/s/T49-Customer-License-Agreement-For-Website.pdf",
      destination: "/support/standard-license-agreement",
      permanent: true,
    },
    {
      source: "/usage-reporting",
      destination: "/support/usage-statistics",
      permanent: true,
    },
    {
      source: "/presentations-counselingvr",
      destination: "/about-us/insights",
      permanent: true,
    },
    {
      source: "/presentations-grey",
      destination: "/about-us/insights",
      permanent: true,
    },
    {
      source: "/s/Screen-Shot-2022-09-14-at-14855-PM.png",
      destination: "/products/history-commons/wena",
      permanent: true,
    },
    {
      source: "/presentations-primary",
      destination: "/about-us/insights",
      permanent: true,
    },
    {
      source: "/s/overlord.pdf",
      destination: "/products/history-commons/sefi",
      permanent: true,
    },
    {
      source: "/s/Cold-War-Presentation-Jul-2022.pdf",
      destination: "/about-us/insights",
      permanent: true,
    },
    {
      source: "/s/South-Asia-Archive-overview-22-0531.pdf",
      destination: "/products/south-asia-commons/sarf",
      permanent: true,
    },
    {
      source: "/contactus-1",
      destination: "/support/contact-us",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v521.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v4-Nursing.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v4-Counseling.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v3-Counselors_Psychology.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v3-Nursing.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v4-Social-Work.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v6.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v2.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Newsletter-v3-Social-Work.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/cana",
      destination: "/products/canada-commons",
      permanent: true,
    },
    {
      source: "/s/AAI-Newsletter-Winter-2020.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-Contribution-of-African-American-Newspapers.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-Gospel-of-Practical-Goodness-White-Paper.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-Indigenous-Nations-White-Paper.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible_Archives-Women_Winning_the_Vote_White_Paper.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-Frances-Ellen-Watson-Harper.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/2023-Summer-ArchiveByte.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-Salmon-Chase-White-Paper.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible_Archives-Quarantne_Stations_Controlling_Contagion.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessble-Archives-Mother-Bickerdyke.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-Railroads-White-Paper.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/AAI-June-ArchivByte.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-Medical-Care-19th-Century-America-White-Paper.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/2023-June-ArchiveByte-Special-Edition.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-Clara-Bewick-Colby.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/press-release-poco10m",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/mentions",
      destination: "/support/mentions",
      permanent: true,
    },
    {
      source: "/s/March-Newsletter.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-7-September-2021.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/poconews1",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-8-October-2021.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/June-Newsletter.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-2-April-2021.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Policy-Commons-Newsletter-May-2022.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-9-December-2021.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/September-22-Newsletter.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-5-July-2021.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-3-May-2021-pdzs.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-10-January-2022",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-4-June-2021.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/POCO-Newsletter-6-August-2021.pdf",
      destination: "/about-us/commons-newsletters",
      permanent: true,
    },
    {
      source: "/s/Mindscape-Commons-VR-Case-Study.pdf",
      destination: "/products/mindscape-commons",
      permanent: true,
    },
    {
      source: "/s/micop.pdf",
      destination: "/products/mindscape-commons",
      permanent: true,
    },
    {
      source: "/products/mindscape-commons-membership-plans",
      destination: "/products/mindscape-commons",
      permanent: true,
    },
    {
      source: "/afcoalpsp",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/canada",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/press-release-sahc",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/mcla",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressreleaseicud",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/s/CHARLESTON-award-Oct-2021.pdf",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/s/press-release-POCC-Sept-2022.pdf",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/south-asia-expansion-press",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/press-release-afme",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/press-releasemico-jisc",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/afmgpr",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/press-release-sarf",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/btaa2",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/policycommonslaunch",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressreleasecrl",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/coherent-digital-reaches-agreement-with-btaa",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/press3",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pohep",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/coherentsabinetpartnership",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/southasiaarchiveaward",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/policy-commons-passes-50000-registered-users",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/press-coherent-jisc-partnership",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/jiscpr",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/panzpr",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressrelease9",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/press-release-afmelaunch",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/news/first-library-oriented-virtual-reality-database-launches-today",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/affipressrelease",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pocwpressrelease",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressrelease5",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressrelease6",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressrelease8",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressreleaseaccessible",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressrelease7",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressrelease1",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/pressrelease2",
      destination: "/about-us/press-and-news",
      permanent: true,
    },
    {
      source: "/s/Accessible-Archives-ACH-Whitepaper.pdf",
      destination: "https://drive.google.com/file/d/1L0aNKtwiicx48_cA-UP0cL1B_ruswQSa/view",
      permanent: true,
    },
    {
      source: "/s/AAI-County-Histories-and-Territorial-Histories.pdf",
      destination: "https://drive.google.com/file/d/1XfiqLrE3o7bkDDld6lsjr91RUx4qMsHT/view",
      permanent: true,
    },

    {
      source: "/lahc",
      destination: "/products/lahc",
      permanent: true,
    },

    {
      source: "/laco",
      destination: "/products/laco",
      permanent: true,
    },
    {
      source: "/occo",
      destination: "/products/occo",
      permanent: true,
    },
    {
      source: "/pohe",
      destination: "/products/pohe",
      permanent: true,
    },
    {
      source: "/stec",
      destination: "/products/stec",
      permanent: true,
    },

  ]
};

export default nextConfig;
