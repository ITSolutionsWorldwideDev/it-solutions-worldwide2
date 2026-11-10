const fs = require("fs");
const path = require("path");

const dutchClientsData = {
  taxinet: {
    name: "Taxinet",
    description: "Hoe we de boekings-, route-, live tracking- en wagenparktools bouwden achter een Haagse taxidienst die 24/7 rijdt.",
    heroHeadline: "Taxinet: Slimmere Ritten, Slimmere Bedrijfsvoering",
    heroSubtext: "Hoe we de boekings-, route-, tracking- en wagenparktools ontwikkelden achter een Haagse taxidienst die 24/7 rijdt.",
    pageTitle: "Taxinet Case Study: Taxidienst Platform & Software | ITWW",
    metaDescription: "Hoe IT Solutions Worldwide een ritagenda, boekingsformulier, routeplanner, live tracking en fleet management tools ontwikkelde voor Taxinet Haaglanden in Den Haag.",
    imageAlt: "Taxinet Haaglanden taxireservering website gebouwd door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "Taxinet", highlight: true },
        { text: " Had " },
        { text: "Digitale Tools", highlight: true },
        { text: " Nodig Gebouwd Rond Haar Dagelijkse Operatie" }
      ],
      paragraph1: "Opgericht in 1999 biedt Taxinet Haaglanden 24/7 taxidiensten in de regio Den Haag: luchthaventransfers, leerlingenvervoer, zakelijk vervoer, trouwvervoer, rolstoelvervoer en groepsvervoer. Die operatie draaiende houden betekent het gelijktijdig coördineren van ritten, voertuigen en een drukke centrale, en Taxinet kwam naar ons toe om deze werkwijze te optimaliseren.",
      paragraph2Lead: "We Bouwden de Tools Waarop Hun Operatie Draait,",
      paragraph2Rest: "van ritplanning tot wagenparkbeheer. We ontwikkelden een ritagenda, een reserveringsformulier, een routeplanner, een live track-and-trace tool en een fleet management systeem, met behulp van n8n workflow automatisering en een op maat gebouwde website. Daarnaast leverden we remote personeel ter ondersteuning van de centrale.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "Taxinet ontving planning-, boekings-, route-, live tracking- en fleet management tools speciaal ontwikkeld voor haar eigen bedrijfsvoering, plus deskundige remote teamleden ter ondersteuning van de centrale.",
      paragraph4: "Dankzij onze automatiseringskennis konden deze tools als één geïntegreerd geheel worden ontworpen in plaats van losse modules, en door onze mogelijkheid om gekwalificeerd talent tegen een scherp tarief te leveren, ondersteunden we zowel de software als de menselijke kant van de organisatie."
    }
  },
  rifas: {
    name: "Rifas Opleidingsinstituut",
    description: "Een krachtigere website en een online marketingpakket voor een opleidingsinstituut actief in acht Nederlandse steden.",
    heroHeadline: "Rifas Opleidingsinstituut: Een Sterke Online Aanwezigheid voor Beroepsopleidingen",
    heroSubtext: "Een krachtigere website en een online marketingpakket voor een opleidingsinstituut actief in acht Nederlandse steden.",
    pageTitle: "Rifas Opleidingsinstituut Case Study | Web & Marketing | ITWW",
    metaDescription: "Ontdek hoe IT Solutions Worldwide de website van Rifas Opleidingsinstituut verbeterde en een online marketingpakket leverde om het klantenbestand te laten groeien.",
    imageAlt: "Rifas Opleidingsinstituut trainingswebsite verbeterd door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "Rifas", highlight: true },
        { text: " Had een " },
        { text: "Groter Klantenbestand", highlight: true },
        { text: " en een Sterkere Online Zichtbaarheid Nodig" }
      ],
      paragraph1: "Opgericht in 2013 verzorgt Rifas Opleidingsinstituut avondopleidingen voor bedrijven en leidinggevenden (NIS2 cybersecurity, AI voor het MKB, verkoop- en HR-procesoptimalisatie), coaching voor particulieren bij sollicitaties en financiële planning, en een gratis supply chain quickscan in acht Nederlandse steden. Om te blijven groeien wilde Rifas zijn klantendatabase uitbreiden en zijn online aanwezigheid versterken.",
      paragraph2Lead: "We Verbeterden de Website en Voegden een Marketingpakket Toe,",
      paragraph2Rest: "waarbij we voortbouwden op wat Rifas al had in plaats van opnieuw te beginnen. We voerden verbeteringen door op de bestaande website en leverden een online marketingpakket om meer potentiële klanten te bereiken.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "Het werk bleef gericht op de twee doelen die Rifas stelde: meer klanten in de database en een duidelijkere online aanwezigheid. De combinatie van websiteverbeteringen met gerichte marketing zorgde ervoor dat bezoekers op een professionelere en effectievere site terechtkwamen.",
      paragraph4: "Voor een opleidingsaanbieder met cursussen voor zowel bedrijven als particulieren is een website die elk aanbod helder uitlegt het fundament waarop effectieve marketing verder bouwt."
    }
  },
  hassaanTravel: {
    name: "Hassaan Travel",
    description: "Externe callcenter-capaciteit en een vernieuwde website voor een Rotterdams reisbureau dat al sinds 2013 reizigers bedient.",
    heroHeadline: "Hassaan Travel: Een Klantenserviceteam en een Nieuwe Website voor een Druk Reisbureau",
    heroSubtext: "Externe callcenter-capaciteit en een vernieuwde website voor een Rotterdams reisbureau dat al sinds 2013 reizigers bedient.",
    pageTitle: "Hassaan Travel Case Study: Website & Callcenter Ondersteuning | ITWW",
    metaDescription: "Ontdek hoe IT Solutions Worldwide externe callcenter-medewerkers en een vernieuwde website leverde voor het Rotterdamse reisbureau Hassaan Travel.",
    imageAlt: "Hassaan Travel reisbureau website vernieuwd door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "Hassaan Travel", highlight: true },
        { text: " Had Hulp Nodig bij " },
        { text: "Klantenservice", highlight: true },
        { text: " en een " },
        { text: "Duidelijkere Website", highlight: true }
      ],
      paragraph1: "Opgericht in 2013 door Hassaan Chaudhry is Hassaan Travel een IATA-geaccrediteerd reisbureau in Rotterdam, gespecialiseerd in Umrah- en Hajj-pakketten, visumaanvragen en wereldwijde vluchtboekingen. Met een vestiging in Rotterdam en een kantoor in Lahore kreeg het team dagelijks grote volumes vragen en boekingen te verwerken, terwijl de website verouderd was geraakt.",
      paragraph2Lead: "We Leverden Externe Medewerkers en Vernieuwden de Website.",
      paragraph2Rest: "We leverden gekwalificeerd extern callcenterpersoneel om vragen, boekingswijzigingen en visumaanvragen af te handelen tegen lagere operationele kosten. Daarnaast vernieuwden we de website zodat reizigers eenvoudig Umrah-pakketten, vluchtopties en visuminformatie kunnen vinden.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "Hassaan Travel kreeg extra operationele slagkracht voor de dagelijkse klantenservice en een website die de diensten en accreditaties helder presenteert.",
      paragraph4: "De combinatie van schaalbare personeelscapaciteit en een overzichtelijke website zorgde voor snellere responstijden en een professionele uitstraling naar reizigers in heel Nederland."
    }
  },
  babylonLogistics: {
    name: "Babylon Logistics",
    description: "Een Benelux same-day transportbedrijf krijgt zijn online thuisbasis, gebouwd in slechts vijf dagen.",
    heroHeadline: "Babylon Logistics: Binnen Vijf Dagen Online voor een Same-Day Koeriersdienst",
    heroSubtext: "Een complete website in vijf dagen voor een Benelux-transportbedrijf dat koel-, vries- en droogtransport verzorgt.",
    pageTitle: "Babylon Logistics Case Study: Website Bouw in 5 Dagen | ITWW",
    metaDescription: "Ontdek hoe IT Solutions Worldwide de website voor Babylon Logistics binnen vijf dagen ontwierp en lanceerde voor same-day Benelux-transport.",
    imageAlt: "Babylon Logistics website voor transport en logistiek gebouwd door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "Babylon Logistics", highlight: true },
        { text: " Begon Zonder " },
        { text: "Enige Website", highlight: true }
      ],
      paragraph1: "Opgericht in 2021 verzorgt Babylon Logistics same-day ophaling en levering door de hele Benelux voor droge, gekoelde (2-4°C) en diepvries (-22°C) goederen, van losse pakketten tot volle pallets. Het bedrijf had nog geen website om deze specialistische transportdiensten te presenteren.",
      paragraph2Lead: "We Brachten Het van Niets naar Live in Vijf Dagen.",
      paragraph2Rest: "We ontwierpen en bouwden de complete Babylon Logistics website binnen vijf dagen, waardoor het bedrijf direct een representatieve online aanwezigheid kreeg voor zijn logistieke diensten.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "Babylon Logistics ontving een website die transport-, geconditioneerde en palletdiensten overzichtelijk op één plek toont, snel opgeleverd voor een onderneming waarvan de eigen dienstverlening volledig draait om snelheid.",
      paragraph4: "Een snelle, doelgerichte oplevering sloot naadloos aan bij een jonge, ambitieuze logistieke dienstverlener die snel online wilde zijn om klanten direct te overtuigen."
    }
  },
  dinel: {
    name: "Dinel",
    description: "Een nieuwe website, online marketingondersteuning en externe administratieve capaciteit voor een technisch detacheringsbureau.",
    heroHeadline: "Dinel: Een Nieuwe Website voor een Specialist in Technisch Talent",
    heroSubtext: "Een nieuwe website, online marketingondersteuning en externe administratieve capaciteit voor een technisch detacheringsbureau.",
    pageTitle: "Dinel Case Study: Nieuwe Website & Externe Capaciteit | ITWW",
    metaDescription: "IT Solutions Worldwide bouwde een nieuwe website, ondersteunde de online marketing en leverde externe administratieve ondersteuning voor technisch detacheerder Dinel.",
    imageAlt: "Dinel website voor technische detachering gebouwd door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "Dinel", highlight: true },
        { text: " Had Meer " },
        { text: "Capaciteit", highlight: true },
        { text: " en Meer " },
        { text: "Online Zichtbaarheid", highlight: true },
        { text: " Nodig" }
      ],
      paragraph1: "Meer dan 20 jaar geleden opgericht door Paul Mathey detacheert Dinel technische professionals (MBO, HBO en WO-niveau) op projecten in instrumentatie, elektrotechniek, werktuigbouwkunde, industriële automatisering en infrastructuur, en leidt het een Young Engineering Professionals-programma voor startende ingenieurs. De organisatie had behoefte aan extra capaciteit en wilde haar online marketing versterken.",
      paragraph2Lead: "We Lanceerden een Nieuwe Website en Voegden Externe Ondersteuning Toe.",
      paragraph2Rest: "We ontwikkelden een moderne nieuwe website, ondersteunden de online marketing en leverden bekwame externe administratieve ondersteuning tegen een scherp budget.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "Dinel ontving drie cruciale elementen van één partner: een nieuwe website, ondersteuning bij online marketing en extra administratieve capaciteit.",
      paragraph4: "De externe administratieve krachten gaven het team extra handen voor backoffice-werkzaamheden, terwijl de website en marketingactiviteiten gericht vooruitgingen."
    }
  },
  hbc: {
    name: "HBC",
    description: "Online marketing voor een halal burger- en kipfranchise met vestigingen door heel Nederland.",
    heroHeadline: "HBC: Social Media Campagnes voor een Halal Burger Franchise",
    heroSubtext: "Online marketing voor een halal burger- en kipfranchise met vestigingen door heel Nederland.",
    pageTitle: "HBC Case Study: Social Media Marketing Campagnes | ITWW",
    metaDescription: "IT Solutions Worldwide verzorgde social media marketingcampagnes voor HBC, een halal burger- en kipfranchise met vestigingen in heel Nederland.",
    imageAlt: "HBC halal burger en kip franchise ondersteund door IT Solutions Worldwide met social media campagnes",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "HBC", highlight: true },
        { text: " Had " },
        { text: "Online Marketingondersteuning", highlight: true },
        { text: " Nodig" }
      ],
      paragraph1: "HBC (Halal Burgers & Chicken) serveert halal burgers, kip, wraps en kindermenu's vanuit vestigingen in Amsterdam, Utrecht, Den Haag, Beverwijk en Arnhem, aangestuurd vanuit Amstelveen, en biedt tevens een franchiseformule. Opgericht in april 2026 had het merk behoefte aan gerichte online marketing.",
      paragraph2Lead: "We Verzorgden Hun Social Media Campagnes.",
      paragraph2Rest: "We leverden effectieve social media marketingcampagnes voor HBC om de naamsbekendheid en gastenaantallen te vergroten.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "HBC ontving gerichte social media marketingcampagnes ter versterking van de online zichtbaarheid en betrokkenheid rond alle vestigingen.",
      paragraph4: "De campagnes versterkten de merkidentiteit en brachten de menukaart en franchiseformule succesvol onder de aandacht bij de juiste doelgroep."
    }
  },
  xtremeTuning: {
    name: "X-tremetunings",
    description: "Een nieuwe responsieve website voor een Nederlandse specialist in chiptuning en prestatieverbetering.",
    heroHeadline: "X-tremetunings: Een Nieuwe Website voor een Nederlandse Chiptuning Specialist",
    heroSubtext: "Een nieuwe responsieve website voor een Nederlandse chiptuning- en prestatietuning-specialist.",
    pageTitle: "X-tremetunings Case Study: Chiptuning Website Bouw | ITWW",
    metaDescription: "Ontdek hoe IT Solutions Worldwide een moderne, responsieve website bouwde voor X-tremetunings, specialist in chiptuning en ECU-optimalisatie in Nederland.",
    imageAlt: "X-tremetunings chiptuning website gebouwd door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "X-tremetunings", highlight: true },
        { text: " Had een Nieuwe Website Nodig om Haar " },
        { text: "Tuningdiensten", highlight: true },
        { text: " te Presenteren" }
      ],
      paragraph1: "Opgericht in 2018 is X-tremetunings een Nederlandse specialist in chiptuning en ECU-software-optimalisatie, maatwerk motortuning, DSG-afstellingen en prestatiediagnose voor personen- en bedrijfswagens. Het bedrijf had een moderne, snelle website nodig om zijn technische expertise en tuningtrajecten helder aan autobezitters te presenteren.",
      paragraph2Lead: "We Bouwden een Snelle, Moderne Website.",
      paragraph2Rest: "We ontwikkelden een overzichtelijke en mobielvriendelijke website waarop klanten eenvoudig tuningmogelijkheden per voertuigtype, vermogenswinsten en tarieven kunnen inzien en direct afspraken kunnen inplannen.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "X-tremetunings kreeg een representatieve online aanwezigheid die het vakmanschap en de technische betrouwbaarheid van het bedrijf onderstreept.",
      paragraph4: "Een heldere sitestructuur en intuïtieve navigatie zorgden voor een hogere conversie van websitebezoekers naar concrete afspraken in de werkplaats."
    }
  },
  gRollz: {
    name: "G-Rollz (Grollz)",
    description: "Een nieuwe gecombineerde B2B- en B2C-website, NetSuite go-live ondersteuning en een verkoopstrategie voor een Amsterdams vloeipapiermerk.",
    heroHeadline: "G-Rollz: Eén Website voor B2B en B2C, Ondersteund door NetSuite en een Verkoopplan",
    heroSubtext: "Een nieuwe website, NetSuite go-live ondersteuning en een verkoopstrategie voor een Amsterdams vloeipapiermerk.",
    pageTitle: "G-Rollz Case Study: B2B/B2C Website & NetSuite | ITWW",
    metaDescription: "IT Solutions Worldwide bouwde een gecombineerde B2B- en B2C-website voor G-Rollz, begeleidde de NetSuite go-live en voerde een salesproject uit om de omzet te verhogen.",
    imageAlt: "G-Rollz B2B en B2C website gebouwd door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "G-Rollz", highlight: true },
        { text: " Had een " },
        { text: "Nieuwe Website", highlight: true },
        { text: ", NetSuite Ondersteuning en een " },
        { text: "Verkoopinspanning", highlight: true },
        { text: " Nodig" }
      ],
      paragraph1: "Opgericht op 12 oktober 2005 is G-Rollz een Amsterdams merk voor vloeipapier en cones gemaakt van ongebleekte, hennep- en rijstmaterialen, bekend om popcultuur-ontwerpen waaronder een gelicenseerde Banksy-samenwerking. Het merk verkoopt aan consumenten en via het B2B-platform grollz.biz aan winkeliers en distributeurs. G-Rollz had een nieuwe website nodig, ondersteuning bij de NetSuite-implementatie en hulp bij het verhogen van de verkoop.",
      paragraph2Lead: "We Leverden de Website, de Systeemondersteuning en het Verkoopplan.",
      paragraph2Rest: "We ontwikkelden een nieuwe website die zowel B2B als B2C ondersteunt. Ons functionele NetSuite-ondersteuningsteam begeleidde de implementatie tot aan de livegang, en we leverden een strategisch verkoopplan met een toegewijd projectteam om de verkoop te stimuleren.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "G-Rollz ontving een website gebouwd voor zowel zakelijke als particuliere klanten, NetSuite-ondersteuning van implementatie tot go-live, en een gestructureerd verkoopplan ondersteund door een deskundig team.",
      paragraph4: "Onze diepgaande NetSuite-expertise en grondige kennis van de Europese markt vormden zowel de technische inrichting als de commerciële aanpak."
    }
  },
  allseas: {
    name: "Allseas",
    description: "Opschoning van stamgegevens en een supply chain-strategie voor een toonaangevende offshore aannemer.",
    heroHeadline: "Allseas: Zuivere Data voor een Soepelere ERP-Overgang van Oracle naar SAP",
    heroSubtext: "Opschoning van stamgegevens en een supply chain-strategie voor een toonaangevende offshore aannemer.",
    pageTitle: "Allseas Case Study: SAP Master Data & Supply Chain | ITWW",
    metaDescription: "Hoe IT Solutions Worldwide stamgegevens opschoonde na een Oracle-naar-SAP migratie en een supply chain-strategie opstelde voor offshore aannemer Allseas.",
    imageAlt: "Allseas offshore project ondersteund door IT Solutions Worldwide met SAP master data opschoning",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "Allseas", highlight: true },
        { text: " Had Zuivere Data Nodig om Haar " },
        { text: "Nieuwe ERP te Laten Werken", highlight: true }
      ],
      paragraph1: "Opgericht in 1985 is Allseas een wereldwijd toonaangevende offshore aannemer actief in pijpleidingen op zee, platformtransport en -ontmanteling, en zware hijsconstructies. Toen het ERP-systeem van Oracle naar SAP migreerde, werden verouderde gegevens geïmporteerd in het nieuwe systeem, waardoor complexe logistieke processen het tijdig leveren van projectcomponenten belemmerden.",
      paragraph2Lead: "We Schoonden de Data op en Herstructureerden de Supply Chain.",
      paragraph2Rest: "We voerden een master data migratieproject uit om de gegevens grondig op te schonen en te optimaliseren, stelden een supply chain management optimalisatiestrategie op en leverden specialistische capaciteit in Nederland om het team te versterken. Het werk omvatte SAP S/4HANA, Power BI en Oracle Fusion.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "Het nieuwe ERP van Allseas kreeg een betrouwbaar en zuiver datafundament dankzij het migratieproject, samen met een heldere supply chain-optimalisatiestrategie om de dagelijkse operaties te stroomlijnen.",
      paragraph4: "De extra specialistische capaciteit in Nederland versterkte het interne team van Allseas met diepgaande expertise op het gebied van supply chain en master data."
    }
  },
  hitachiCm: {
    name: "Hitachi Construction Machinery (Europe) NV",
    description: "AI-veiligheidsvoorraad- en dockplanning, data-opschoning en terreinherinrichting hielpen Hitachi Construction Machinery Europe jaarlijkse voorraadverliezen met €4M terug te dringen.",
    heroHeadline: "Hitachi Construction Machinery Europe: AI-Planning Die Voorraadverliezen met €4M Verminderde",
    heroSubtext: "AI-veiligheidsvoorraad- en dockplanning, zuivere stamgegevens en een heringericht buitenterrein verminderden de jaarlijkse voorraadverliezen met 4 miljoen euro.",
    pageTitle: "Hitachi CM Europe Case Study: AI Supply Chain | ITWW",
    metaDescription: "AI-veiligheidsvoorraad- en dockplanning, opschoning van stamgegevens en terreinherinrichting hielpen Hitachi Construction Machinery Europe jaarlijks €4M te besparen.",
    imageAlt: "Hitachi Construction Machinery Europe supply chain optimalisatieproject door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "Hitachi", highlight: true },
        { text: " Had Betrouwbare Planning Nodig Achter Haar " },
        { text: "Onderdelenvoorziening", highlight: true }
      ],
      paragraph1: "Hitachi Construction Machinery (Europe) NV, opgericht in 2004, produceert, verkoopt en distribueert graafmachines, wielladers en starre dumptrucks, evenals LANDCROS vlootbeheersoftware in Europa, Afrika en het Midden-Oosten. De MRP-parameters vertoonden inconsistenties en inadequate componentenplanning leidde tot substantiële voorraadverliezen.",
      paragraph2Lead: "We Combineerden Zuivere Data, AI-Tools en een Slimmere Magazijnstrategie.",
      paragraph2Rest: "We schoonden de stamgegevens op en bouwden een overkoepelende supply chain-strategie om magazijn-, inkoop- en planningsprocedures te optimaliseren. We ontwikkelden een AI-gebaseerd veiligheidsvoorraadmodel en een AI-dockplanningstool, richtten het buitenterrein opnieuw in en creëerden Power BI dashboards om operationele KPI's real-time te monitoren.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "De integrale optimalisatie verminderde de jaarlijkse voorraadverliezen van Hitachi met 4 miljoen euro.",
      paragraph4: "Door master data, terreininrichting en geavanceerde AI in één samenhangend project te integreren, versterkten de oplossingen elkaar direct, terwijl de Power BI dashboards het management volledige grip gaven op de supply chain."
    }
  },
  jumboSports: {
    name: "Jumbo Sports",
    description: "Consolidatie van B2B- en B2C-stromen in één distributiecentrum voor Jumbo Sports met magazijnherinrichting, entresolvloer en Storeganizers.",
    heroHeadline: "Jumbo Sports: B2B en B2C Onder Één Distributiedak",
    heroSubtext: "Een magazijnherinrichting, entresolvloer en slimmere transportroutes voor een golf- en hockeyspecialist met 12 winkels.",
    pageTitle: "Jumbo Sports Case Study: Magazijnconsolidatie | ITWW",
    metaDescription: "IT Solutions Worldwide voegde B2B- en B2C-stromen samen in één distributiecentrum voor Jumbo Sports met magazijnherinrichting, mezzanine en Storeganizers.",
    imageAlt: "Jumbo Sports distributiecentrum heringericht door IT Solutions Worldwide",
    caseStudy: {
      eyebrow: "ONS WERK · PORTFOLIO",
      title1Parts: [
        { text: "Jumbo Sports", highlight: true },
        { text: " Moest Haar " },
        { text: "Externe Magazijn", highlight: true },
        { text: " Afstoten" }
      ],
      paragraph1: "Opgericht in september 2022 is Jumbo Sports een specialist in golf en hockey die clubs, kleding, schoenen, tassen en accessoires, plus hockeysticks, bescherming en schoeisel verkoopt, zowel online als via 12 winkels in Nederland en België. De onderneming moest haar externe magazijn afstoten, wat betekende dat zowel B2B- als B2C-stromen in één centraal distributiecentrum moesten worden ondergebracht.",
      paragraph2Lead: "We Richtten het Magazijn Opnieuw in om Meer te Doen met Dezelfde Ruimte.",
      paragraph2Rest: "We integreerden B2B en B2C in één centraal magazijn, optimaliseerden de opslagcapaciteit om dezelfde vierkante meters efficiënter te benutten en stroomlijnden de magazijnoperatie en transportroutes om beide stromen vanuit hetzelfde distributiecentrum te bedienen. De herinrichting omvatte Storeganizers en een entresolvloer (mezzanine) die de hoogte optimaal benut.",
      title2Parts: [
        { text: "Een " },
        { text: "Partnerschap", highlight: true },
        { text: " Dat " },
        { text: "Resultaat Opleverde", highlight: true }
      ],
      paragraph3: "Het resultaat is één geïntegreerd distributiecentrum dat zowel B2B- als B2C-stromen efficiënt bedient, met een geherorganiseerde opslag die dezelfde vloeroppervlakte aanzienlijk beter benut.",
      paragraph4: "Onze ervaring in supply chain, transportplanning en magazijninrichting dekte de volledige keten af, van slimme opslagoplossingen tot geoptimaliseerde transportroutes."
    }
  }
};

// Aliases for compatibility
dutchClientsData.xtremetunings = dutchClientsData.xtremeTuning;
dutchClientsData.grollz = dutchClientsData.gRollz;
dutchClientsData.hitachi = dutchClientsData.hitachiCm;

const filesToUpdate = [
  path.join(__dirname, "..", "public", "locales", "nl", "common.json"),
  path.join(__dirname, "..", "i18n", "locales", "nl", "common.json")
];

for (const filePath of filesToUpdate) {
  if (!fs.existsSync(filePath)) {
    console.warn("File does not exist:", filePath);
    continue;
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  if (!data.portfolio) data.portfolio = {};
  if (!data.portfolio.clientsSection) data.portfolio.clientsSection = {};
  if (!data.portfolio.clientsSection.clients) data.portfolio.clientsSection.clients = {};

  for (const [key, clientObj] of Object.entries(dutchClientsData)) {
    data.portfolio.clientsSection.clients[key] = {
      ...(data.portfolio.clientsSection.clients[key] || {}),
      ...clientObj
    };
  }

  // Remove ddGroup if present
  delete data.portfolio.clientsSection.clients.ddGroup;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  console.log("Successfully updated:", filePath);
}

