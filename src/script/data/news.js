// news.js
const news = [
   {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Ashley Parker, Anne Gearan",
      "title": "Coronavirus crisis highlights Trump's resistance to criticism — and his desire for fervent praise - The Washington Post",
      "description": "Examples range from Trump’s suggestions of withholding aid from struggling state governments to his repeated refusal to take responsibility for shortcomings in the federal response.",
      "url": "https://www.washingtonpost.com/politics/coronavirus-crisis-highlights-trumps-resistance-to-criticism--and-his-desire-for-fervent-praise/2020/04/08/8efe3176-7901-11ea-9bee-c5bf9d2e3288_story.html",
      "urlToImage": "https://www.washingtonpost.com/resizer/mkZPk4HiJwjif6yvvq3b90EautE=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/V2WKNUTZEUI6VIYRVWYTIRYZVE.jpg",
      "publishedAt": "2020-04-09T06:46:00Z",
      "content": "Those characteristics have had a pervasive effect on the administrations handling of the crisis, from Trumps suggestions that he might withhold aid from struggling state governments based on whether he is displeased with a governor to his repeated refusal to … [+7707 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": null,
      "title": "Taiwan Rejects WHO Claim of Racist Campaign Against Tedros - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=7547de70-7a2e-11ea-b7d5-f13ac6f00e4f&url=L25ld3MvYXJ0aWNsZXMvMjAyMC0wNC0wOS90YWl3YW4tcmVqZWN0cy13aG8tY2xhaW0tb2YtcmFjaXN0LWNhbXBhaWduLWFnYWluc3QtdGVkcm9z",
      "urlToImage": null,
      "publishedAt": "2020-04-09T06:29:02Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
    },
    {
      "source": {
        "id": null,
        "name": "Nytimes.com"
      },
      "author": null,
      "title": "Saudi Arabia Declares Cease-Fire in Yemen, Citing Coronavirus Fears: Live Coverage - The New York Times",
      "description": "Saudi Arabia declared a cease-fire in Yemen, citing fears of an outbreak in the war-torn country. Players from the English Premier League are being asked to contribute to Britain’s overworked health service.",
      "url": "https://www.nytimes.com/2020/04/09/world/coronavirus-news.html",
      "urlToImage": "https://www.nytimes.com/newsgraphics/2020/03/04/corona-virus-social-images/assets/promo.jpg?u=1586415575579",
      "publishedAt": "2020-04-09T06:09:12Z",
      "content": "Mr. Trump unleashed a tirade against the organization on Tuesday, accusing it of acting too slowly to sound the alarm, and of treating the Chinese government too favorably. While the president, who threatened to withhold American funding for the W.H.O., spoke… [+1129 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Sam Byford",
      "title": "Microsoft reportedly delays Surface Neo beyond 2020 - The Verge",
      "description": "The Surface Neo, Microsoft’s dual-screen PC that runs a new operating system called Windows 10X, will reportedly miss its planned release date of holiday 2020. The company is said to have shifted its focus to get Windows 10X to run well on single-screen devic…",
      "url": "https://www.theverge.com/2020/4/9/21214637/microsoft-surface-neo-windows-10x-release-date-delay",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/m9PrfwemPhDdGd2NaPpvXAwlE_Q=/0x292:2040x1360/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19247642/akrales_190930_3649_0349.jpg",
      "publishedAt": "2020-04-09T06:08:16Z",
      "content": "Windows 10X shifts to single screens\r\nPhoto by Amelia Holowaty Krales / The Verge\r\nThe Surface Neo, Microsofts dual-screen PC that runs a new operating system called Windows 10X, will miss its planned release date of holiday 2020, according to reports from ZD… [+966 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": null,
      "title": "U.S. weekly jobless claims seen hovering near record highs - Investing.com",
      "description": "U.S. weekly jobless claims seen hovering near record highs",
      "url": "https://www.investing.com/news/economic-indicators/us-weekly-jobless-claims-seen-hovering-near-record-highs-2135725",
      "urlToImage": "https://i-invdn-com.akamaized.net/trkd-images/LYNXNPEG380AD_L.jpg",
      "publishedAt": "2020-04-09T05:10:00Z",
      "content": "By Lucia Mutikani\r\nWASHINGTON (Reuters) - The number of Americans seeking unemployment benefits in the last three weeks likely totaled a staggering 15 million as tough measures to control the novel coronavirus outbreak abruptly ground the country to halt, whi… [+4454 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phonearena.com"
      },
      "author": "Alan Friedman",
      "title": "What took Netflix 7 years to accomplish required only 5 months for Disney+ - PhoneArena",
      "description": "Disney+ required just five months to reach 50 million paying subscribers. The service got an unexpected boost by the outbreak of coronavirus which has led many people in various countries to stay ...",
      "url": "https://www.phonearena.com/news/disney-plus-reaches-50-million-subscribers-worldwide_id123686",
      "urlToImage": "https://i-cdn.phonearena.com/images/article/123686-two/What-took-Netflix-7-years-to-accomplish-required-only-5-months-for-Disney.jpg",
      "publishedAt": "2020-04-09T05:05:00Z",
      "content": "All content, features, and design are Copyright 2001-2020 PhoneArena.com.PhoneArena may receive a small commission if you purchase through affiliate links on this page.All rights reserved. Reproduction in whole or in part or in any form or medium without writ… [+28 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Youtube.com"
      },
      "author": null,
      "title": "Mitch and Cam Are Moving to Missouri - Modern Family - ABC",
      "description": "Lily (Aubrey Anderson-Emmons) wants to know if Mitchell (Jesse Tyler Ferguson) and Cameron (Eric Stonestreet) have decided on the move to Missouri. Mitch say...",
      "url": "https://www.youtube.com/watch?v=S5xPUc26vfo",
      "urlToImage": "https://i.ytimg.com/vi/S5xPUc26vfo/maxresdefault.jpg",
      "publishedAt": "2020-04-09T05:00:07Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Nypost.com"
      },
      "author": "Gabrielle Fonrouge, Kenneth Garger",
      "title": "Coronavirus was spreading in NYC weeks before first case, researchers say - New York Post ",
      "description": "The coronavirus was likely spreading in New York City as early as February, weeks before the Big Apple’s first confirmed case, according to a report citing new research. Dr. Adriana Heguy, a member…",
      "url": "https://nypost.com/2020/04/09/coronavirus-was-spreading-in-city-weeks-before-first-official-case/",
      "urlToImage": "https://thenypost.files.wordpress.com/2020/04/ems.jpg?quality=90&strip=all&w=1200",
      "publishedAt": "2020-04-09T04:52:54Z",
      "content": "The coronavirus was likely spreading in New York City as early as February, weeks before the Big Apples first confirmed case, according to a report citing new research.\r\nDr. Adriana Heguy, a member of an NYU Grossman School of Medicine team studying the genom… [+1841 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Mirror.co.uk"
      },
      "author": "James Brinsford",
      "title": "ASAP Mob rapper Chynna Rogers dead: Rap star dies aged 25 - Mirror Online",
      "description": "A$AP Mob rapper Chynna Rogers, from Philadelphia, has died aged 25, though her cause of death is still unknown",
      "url": "https://www.mirror.co.uk/3am/celebrity-news/breaking-asap-mob-rapper-chynna-21837777",
      "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article21837775.ece/ALTERNATES/s1200/0_SDC_MDG_Chynna-Rogers_1481AJPG.jpg",
      "publishedAt": "2020-04-09T04:30:51Z",
      "content": "Rising rap star Chynna Rogers has died aged 25.\r\nHer family confirmed through her management the news that the A$AP Mob rapper has passed away.\r\nIn a statement, they wrote: Chynna was deeply loved and will be sorely missed.\"\r\nHer cause of death is currently u… [+2761 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theguardian.com"
      },
      "author": "",
      "title": "April pink full moon: readers' photos of the supermoon - The Guardian",
      "description": "We asked you to share your shots of April’s lunar spectacular. Here’s a selection of our favourites",
      "url": "https://www.theguardian.com/science/gallery/2020/apr/09/april-pink-full-moon-readers-photos-of-the-supermoon",
      "urlToImage": "https://i.guim.co.uk/img/media/1f588250368e92ebfa523cc52642da69d166e30d/0_0_3063_1838/master/3063.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d33bbf74fb00f4f508b8cfb8b17ee0d9",
      "publishedAt": "2020-04-09T04:14:00Z",
      "content": "A supermoon happens when the moon reaches the closest point to Earth in its 27-day orbit and it happens to be full, which usually occurs once a year. We asked you to share your shots of Aprils lunar spectacular. Heres a selection of our favourites"
    },
    {
      "source": {
        "id": null,
        "name": "Nydailynews.com"
      },
      "author": "Lauren Theisen",
      "title": "Nursing home with 39 coronavirus cases evacuated after staff stops showing up - msnNOW",
      "description": "40 ambulances had to move patients to other facilities.",
      "url": "https://www.nydailynews.com/coronavirus/ny-nursing-home-with-39-coronavirus-cases-closes-when-staff-goes-awol-20200409-3wau5vjhlnhnpp5ajewhhxw5iy-story.html",
      "urlToImage": "https://www.nydailynews.com/resizer/naCtJqxct2YEOy7gexx0cuyjbyE=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/WZN2KETAQ5GHZFYNCCHCFKF4SA.jpg",
      "publishedAt": "2020-04-09T04:08:00Z",
      "content": null
    },
    {
      "source": {
        "id": "cnbc",
        "name": "CNBC"
      },
      "author": "Reuters",
      "title": "Crude futures climb ahead of OPEC+ meeting - CNBC",
      "description": "Crude futures rose on Thursday on expectations the world's largest oil producers would agree to cut production at a meeting later in the day as the industry grapples with the coronavirus-driven collapse in global oil demand.",
      "url": "https://www.cnbc.com/2020/04/09/oil-markets-coronavirus-crude-output-opec-and-allies-in-focus.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106475903-1586149511566gettyimages-1206552687.jpeg?v=1586401778",
      "publishedAt": "2020-04-09T03:13:17Z",
      "content": "Crude futures rose on Thursday on expectations the world's largest oil producers would agree to cut production at a meeting later in the day as the industry grapples with the coronavirus-driven collapse in global oil demand.\r\nBrent crude futures rose 2.5%, or… [+2284 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Politico.eu"
      },
      "author": "Annabelle Dickson",
      "title": "Who is Boris Johnson's stand-in, Dominic Raab? - Politico",
      "description": "Colleagues say detail-loving Dominic Raab could excel in a crisis but might struggle to be politically nimble.",
      "url": "http://www.politico.eu/article/who-is-dominic-raab/",
      "urlToImage": "https://www.politico.eu/wp-content/uploads/2020/04/GettyImages-1209379691-1200x628.jpg",
      "publishedAt": "2020-04-09T03:09:00Z",
      "content": "LONDON In picking his stand-in, Boris Johnson has chosen a Brexit-believer and former rival but not someone likely to change course.\r\nLast year, when Brexit dominated British politics, Johnson appointed his Foreign Secretary Dominic Raab as first secretary of… [+8326 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Sam Byford",
      "title": "LG reveals new design language for next phone - The Verge",
      "description": "LG appears to be changing things up for an upcoming phone, which it says will use an altogether new design language. LG describes it as “a nod to the natural world with a visual form factor that differs from the industry trend.”",
      "url": "https://www.theverge.com/2020/4/8/21214522/lg-next-phone-design-language-raindrop-camera-chocolate",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/2g0AF1p3pB-7jr5lNxyA_phgdRg=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19885784/LG_New_Design_01.jpg",
      "publishedAt": "2020-04-09T03:06:47Z",
      "content": "Forget teardrop notches, heres a raindrop camera\r\nLGs flagship phones over the past couple years have all looked extremely similar to each other: good luck picking out the G7, the V40, the G8, the V50, the G8X, or the V60 from a lineup unless you have a very … [+1679 chars]"
    },
    {
      "source": {
        "id": "mashable",
        "name": "Mashable"
      },
      "author": "Amanda Yeo",
      "title": "Trump says he will look into pardoning 'Tiger King' star Joe Exotic - Mashable",
      "description": "Truly we live in the darkest timeline.",
      "url": "https://mashable.com/article/donald-trump-tiger-king-joe-exotic-pardon/",
      "urlToImage": "https://mondrian.mashable.com/2020%252F04%252F09%252F1b%252Fe435b07b64d84f34885e1ce5cef27118.bedbb.jpg%252F1200x630.jpg?signature=qcLSl84hAVEyQ_l2R5MvLfJ5rcw=",
      "publishedAt": "2020-04-09T02:46:23Z",
      "content": "Today President Donald Trump delivered a White House briefing on the government's response to the coronavirus pandemic, which has killed over 10,000 in the U.S. alone. Trump has been widely criticised for his handling of the coronavirus, having claimed it wou… [+2399 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Deadline.com"
      },
      "author": "Bruce Haring, Bruce Haring",
      "title": "Sen. Bernie Sanders Stops Short Of Full-Throated Joe Biden Endorsement In His First Interview After Dropping Out - Deadline",
      "description": "A humbled Sen. Bernie Sanders paid a visit to The Late Show’s Stephen Colbert tonight and vowed to do whatever he could to help Joe Biden defeat Donald Trump in the November presidential elec…",
      "url": "https://deadline.com/2020/04/bernie-sanders-stops-short-of-biden-endorsement-in-stephen-colbert-interview-1202904389/",
      "urlToImage": "https://pmcdeadline2.files.wordpress.com/2020/03/bernie-sanders-march-2020.jpg?w=1024",
      "publishedAt": "2020-04-09T02:29:06Z",
      "content": "A humbled Sen. Bernie Sanders paid a visit to The Late Show’sStephen Colbert tonight and vowed to do whatever he could to help Joe Biden defeat Donald Trump in the November presidential elections.\r\nHowever, asked by Colbert if he was giving a “full-throated e… [+1151 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Marketwatch.com"
      },
      "author": "Mike Murphy",
      "title": "U.S. stock futures about flat after Wall Street's latest rally - MarketWatch",
      "description": "",
      "url": "http://www.marketwatch.com/story/us-stock-futures-flat-after-wall-streets-latest-rally-2020-04-08",
      "urlToImage": "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
      "publishedAt": "2020-04-09T02:16:00Z",
      "content": "U.S. stock index futures were about flat late Wednesday, after stocks closed sharply higher earlier in the day. After rising more than 120 points earlier, Dow Jones Industrial Average futures\r\n YM00, \r\n +0.54%\r\nwere up 17 points, or 0.1%, as of midnight Easte… [+396 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Mike Bohn",
      "title": "Dustin Poirier knows why he wasn't selected for UFC 249, picks Justin Gaethje to KO Tony Ferguson - MMA Junkie",
      "description": "Dustin Poirier doesn’t necessarily like the logic, but he gets it.",
      "url": "https://mmajunkie.usatoday.com/2020/04/dustin-poirier-prediction-justin-gaethje-tony-ferguson-ufc-249-replacement",
      "urlToImage": "https://usatmmajunkie.files.wordpress.com/2018/04/dustin-poirier-justin-gaethje-ufc-on-fox-29-21.jpg?w=1000&h=576&crop=1",
      "publishedAt": "2020-04-09T02:12:14Z",
      "content": "Dustin Poirier understands why he wasn’t chosen to replace Khabib Nurmagomedov against Tony Ferguson at UFC 249.\r\nWhen news surfaced that Nurmagomedov was unable to defend his lightweight title against Ferguson in the midst of the coronavirus pandemic, Poirie… [+2911 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": null,
      "title": "GM and Bothell’s Ventec get $489.4 million order from U.S. for 30,000 ventilators in coronavirus fight - Seattle Times",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMiiQFodHRwczovL3d3dy5zZWF0dGxldGltZXMuY29tL2J1c2luZXNzL2dtLWFuZC1ib3RoZWxscy12ZW50ZWMtZ2V0LTQ4OS00LW1pbGxpb24tb3JkZXItZnJvbS11LXMtZm9yLTMwMDAwLXZlbnRpbGF0b3JzLWluLWNvcm9uYXZpcnVzLWZpZ2h0L9IBjwFodHRwczovL3d3dy5zZWF0dGxldGltZXMuY29tL2J1c2luZXNzL2dtLWFuZC1ib3RoZWxscy12ZW50ZWMtZ2V0LTQ4OS00LW1pbGxpb24tb3JkZXItZnJvbS11LXMtZm9yLTMwMDAwLXZlbnRpbGF0b3JzLWluLWNvcm9uYXZpcnVzLWZpZ2h0Lz9hbXA9MQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2020-04-09T01:38:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Bbc.com"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Coronavirus: Lockdown 'could boost wild flowers' - BBC News",
      "description": "A plant charity is predicting a boost for wild flowers because some councils have stopped mowing.",
      "url": "https://www.bbc.com/news/science-environment-52215273",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16057/production/_111699109_plant.png",
      "publishedAt": "2020-04-09T00:35:57Z",
      "content": "Image copyrightPlantLife\r\nA plant charity is predicting a boost for wild flowers because some councils have stopped mowing verges and parks during the Covid-19 crisis.\r\nPlantlife has been urging councils for years to cut grass less often.\r\nIt also wants them … [+2961 chars]"
    }
];

export default news;