import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./ProductDetailPage.css";

import image1 from "../assets/PE78EI_Design-Line_EI30-1-1.webp";
import image2 from "../assets/PE78EI_Design-Line_EI60-1-2.webp";
import image3 from "../assets/PE78EI_eco_EI30-1-1.webp";
import image4 from "../assets/PE78EI_Design-Line_EI90-1-1.webp";
import image5 from "../assets/PE78EI_Design-Line_EI120-1-1.webp";
import image6 from "../assets/PE78EI_kl_EI30-2.webp";
import image7 from "../assets/ponzio-pe78ei-kl-ei60-1-1-1.webp";
import image8 from "../assets/PE78EI_kl_EI90-1-1.webp";
import image9 from "../assets/PE78EI_okno_RU_kl_EI30-1-1.webp";
import image10 from "../assets/PE78EI_scianki_bezszprosowe_kl_EI30-1-1.webp";
import image11 from "../assets/PE78EI_scianki_bezszprosowe_kl_EI60-1-1.webp";
import image12 from "../assets/PF152EI_kl_EI30-1-1.webp";
import image13 from "../assets/PF152EI_kl_EI60-1-1.webp";
import image14 from "../assets/dach_przeszklony_REI30_RE45-2-1.webp";
import image15 from "../assets/Ponzio_PF152ESG_EI30_2k_2023-2-1.webp";
import image16 from "../assets/PF152EI60_ESG_2k_2023-1-1.webp";

import i1 from "../assets/csm_Janisol-2-Tuer-Jansen_3495070f94-3.webp";
import i2 from "../assets/csm_Janisol-2-Fingerschutztuere-Jansen_fad3f8353a-1-2.webp";
import i3 from "../assets/csm_Jansen-Economy-50-E30-Jansen_f6a1e976f6-2.webp";
import i4 from "../assets/csm_Jansen-Economy-60-E30-Jansen_c31f7581f7-1-1.webp";
import i5 from "../assets/csm_Janisol-C4-Jansen_3fbd689c57-1-1.webp";
import i6 from "../assets/Janisol-1-window-Jansen.webp";
import i7 from "../assets/csm_Janisol-2-Brandschutzschiebetuer-Jansen_e454d1cf3e.webp";
import i8 from "../assets/csm_Janisol-2-EI60-EI30-Jansen_fe515a63fa.webp";
import i9 from "../assets/csm_VISS-Fire-TVS-Dachverglasung_5f4a6a09a3-1.webp";
import i10 from "../assets/csm_Viss-Fire-Fassade-Jansen_b2bf49bf1c-1-1.webp";
import i11 from "../assets/VISS-TVS-Fire-Jansen-scaled.webp";
import i12 from "../assets/VISS-Fire-Fassade_EI60-Jansen-scaled.webp";

const ProductDetailPage = () => {
    const [activeTab, setActiveTab] = useState("specs");
    const { category, id } = useParams();
    const controls = useAnimation();

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Combine both product categories into one object for easy lookup
    const allProducts = {
        aluminium: [
            {
                id: 1,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI30",
                image: image1,
                features: [
                    "Ett profilsystem med tre håligheter avsett för konstruktion av invändiga och utvändiga brandbarriärer",
                    "Innovativ metod för att glasa dubbelglasade fönster på endast en sida",
                    "Glasytan är nästan på samma nivå som profilytan på den andra sidan",
                    "Kortare förberedelse- och installationstid jämfört med dubbelglasade system",
                    "Enklare inglasning med justerbara inglasningsstöd",
                    "Svällande tejp som skyddas från att rivas av speciella spår",
                    "Brett utbud av möjliga dörrbladsdesigner",
                    "Strukturer med stora dimensioner tillgängliga",
                    "Rökskyddskonstruktioner tillgängliga",
                    "Kan sammanfogas med EI30- och EI90-brandskyddskonstruktioner (identiskt profildjup 78 mm)",
                    "Kan sammanfogas med EI120 brandbeständiga konstruktioner med hjälp av modifieringsprofiler",
                    "Kan användas för konstruktion av innerdörrar som utgångar och på utrymningsvägar",
                    "Överensstämmer med klassificeringen av brandmotstånd och den nationella tekniska bedömningen",
                ],
                badge: "Populär",
                parameters: [
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Fönsterbåge djup", value: "78", unit: "mm" },
                    {
                        name: "Fyllning av brandbeständigt glas",
                        value: "EN 1279-1, EN 1279-5",
                        unit: "",
                    },
                    { name: "Isolerrutor", value: "20-62", unit: "mm" },
                    {
                        name: "Bullerreduktion (17 mm brandsäkert glas)",
                        value: "RA1: 35, RA2: 35, RW: 37",
                        unit: "dB",
                    },
                    {
                        name: "Rökskyddsklass",
                        value: "Sa och S200",
                        unit: "EN 13501-2",
                    },
                    { name: "Brandklass", value: "EI30", unit: "" },
                    {
                        name: "Nationell teknisk bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                    {
                        name: "Produkttyp",
                        value: "PE78EI invändiga brand- och/eller rökskyddsdörrar",
                        unit: "",
                    },
                    {
                        name: "Certifiering",
                        value: "EN 16034 och EN 14351-1+A2",
                        unit: "",
                    },
                    { name: "Vikt", value: "45", unit: "kg/m²" },
                    { name: "Färgalternativ", value: "10+ standard", unit: "" },
                    { name: "Garanti", value: "10", unit: "år" },
                ],
                additionalInfo: {
                    description:
                        "Våra aluminiumprodukter är utformade för att kombinera hög prestanda med elegant design. Med avancerad termisk brytningsteknik och anpassningsbara färgalternativ passar de perfekt i både moderna och traditionella miljöer.",
                    certifications: [
                        "Nationell teknisk bedömning ITB-KOT-2017/0351",
                        "Godkännanden och kvalitetscertifikat",
                        "Klassificeringsrapporter för ytterdörrar certifierade",
                    ],
                },
            },
            {
                id: 2,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI60",
                image: image2,
                features: [
                    "Ett profilsystem med tre håligheter avsett för konstruktion av invändiga och utvändiga brandbarriärer",
                    "60 minuters brandmotstånd (EI60)",
                    "Förstärkt konstruktion för högre brandprestanda",
                    "Värmebrytande profil för bättre energieffektivitet",
                    "Innovativ metod för att glasa dubbelglasade fönster på endast en sida",
                    "Glasytan är nästan på samma nivå som profilytan på den andra sidan",
                    "Kortare förberedelse- och installationstid jämfört med dubbelglasade system",
                    "Enklare inglasning med justerbara inglasningsstöd",
                    "Svällande tejp som skyddas från att rivas av speciella spår",
                    "Brett utbud av möjliga dörrbladsdesigner",
                    "Strukturer med stora dimensioner tillgängliga",
                    "Rökskyddskonstruktioner tillgängliga",
                    "Kan sammanfogas med EI30- och EI90-brandskyddskonstruktioner (identiskt profildjup 78 mm)",
                    "Kan sammanfogas med EI120 brandbeständiga konstruktioner med hjälp av modifieringsprofiler",
                    "Kan användas för konstruktion av innerdörrar som utgångar och på utrymningsvägar",
                    "Överensstämmer med klassificeringen av brandmotstånd och den nationella tekniska bedömningen",
                ],
                badge: "Premium",
                parameters: [
                    { name: "Brandklass", value: "EI60", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Fönsterbåge djup", value: "78", unit: "mm" },
                    {
                        name: "Fyllning av brandbeständigt glas",
                        value: "EN 1279-1, EN 1279-5",
                        unit: "",
                    },
                    { name: "Isolerruta tjocklek", value: "20-62", unit: "mm" },
                    {
                        name: "Bullerreduktion (17 mm brandsäkert glas)",
                        value: "RA1: 35, RA2: 35, RW: 37",
                        unit: "dB",
                    },
                    {
                        name: "Rökskyddsklass",
                        value: "Sa och S200",
                        unit: "EN 13501-2",
                    },
                    {
                        name: "Nationell teknisk bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                    {
                        name: "Produkttyp",
                        value: "PE78EI invändiga brand- och/eller rökskyddsdörrar",
                        unit: "",
                    },
                    { name: "Värmebrytande", value: "Ja", unit: "" },
                    { name: "Förstärkt konstruktion", value: "Ja", unit: "" },
                    {
                        name: "Certifiering",
                        value: "EN 16034 och EN 14351-1+A2",
                        unit: "",
                    },
                    { name: "Vikt", value: "48", unit: "kg/m²" },
                    { name: "Färgalternativ", value: "10+ standard", unit: "" },
                    { name: "Garanti", value: "10", unit: "år" },
                ],
                additionalInfo: {
                    description:
                        "Premiumversionen av våra branddörrar med högre brandklass och förstärkt konstruktion. Den värmebrytande profilen ger utmärkt energieffektivitet samtidigt som den uppfyller strikta brandsäkerhetskrav.",
                    certifications: [
                        "Nationell teknisk bedömning ITB-KOT-2017/0351",
                        "Godkännanden och kvalitetscertifikat",
                        "Klassificeringsrapporter för ytterdörrar certifierade",
                        "EN 16034 och EN 14351-1+A2 certifierad",
                    ],
                    construction: [
                        "Tredubbel hålighetsprofil för optimerad brandprestanda",
                        "Förstärkta fogar och gångjärn",
                        "Specialutformade tätskikt",
                    ],
                },
            },
            {
                id: 3,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI30 ekonomivariant",
                image: image3,
                features: [
                    "Ekonomiversion av systemet med EI30-klassad prestanda",
                    "Kostnadseffektiv lösning utan kompromiss med säkerhet",
                    "Enkel- och dubbelfällbara dörrar testade i EI30-klassen",
                    "Profilsystem med tre hålrum för invändiga brandbarriärer",
                    "Förkortad monteringstid tack vare Design Line-profiler",
                    "Enklare inglasning med justerbara inglasningsstöd",
                    "Maximala fönsterbågsdimensioner: 1400×2500 mm",
                    "Svällande tejp skyddad av speciella spår",
                    "Lösning som minskar kostnaden för slutprodukter",
                    "Strukturer med stora dimensioner tillgängliga",
                    "Kan sammanfogas med EI60- och EI90-brandskyddskonstruktioner (78 mm profildjup)",
                    "Kan användas för innerdörrar på utrymningsvägar",
                    "Överensstämmer med klassificering av brandmotstånd",
                    "Uppfyller nationell teknisk bedömning",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI30", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Fönsterbåge djup", value: "78", unit: "mm" },
                    { name: "Max dimension", value: "1400×2500", unit: "mm" },
                    {
                        name: "Fyllning av brandbeständigt glas",
                        value: "EN 1279-1, EN 1279-5",
                        unit: "",
                    },
                    { name: "Isolerruta tjocklek", value: "14-62", unit: "mm" },
                    {
                        name: "Bullerreduktion (17 mm glas)",
                        value: "RA1: 35, RA2: 30, RW: 37",
                        unit: "dB",
                    },
                    {
                        name: "Rökskyddsklass",
                        value: "Sa och S200",
                        unit: "EN 13501-2",
                    },
                    {
                        name: "Nationell teknisk bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                    { name: "Vikt", value: "42", unit: "kg/m²" },
                    { name: "Färgalternativ", value: "5 standard", unit: "" },
                    { name: "Garanti", value: "5", unit: "år" },
                    {
                        name: "Certifiering",
                        value: "EN 16034 och EN 14351-1+A2",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Kostnadseffektiv variant av vårt PE78EI-system som behåller kärnfunktionerna men optimerar för prisvärd prestanda. Idealisk för projekt med budgetbegränsningar där ändå grundläggande brandsäkerhet krävs.",
                    keyBenefits: [
                        "Upp till 20% kostnadsbesparing jämfört med standardversionen",
                        "Behåller samma grundläggande säkerhetsfunktioner",
                        "Förenklad produktionsprocess för lägre pris",
                        "Kompatibel med högre klassade system för blandade installationer",
                    ],
                    limitations: [
                        "Begränsad färgpalett",
                        "Lägre bullerdämpning i RA2-klass",
                        "Kortare garantiperiod",
                    ],
                },
            },
            {
                id: 4,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI90",
                image: image4,
                features: [
                    "90 minuters brandmotstånd (EI90) - industrikvalitet",
                    "Extra tjock isolering för förbättrad brandprestanda",
                    "Profilsystem med tre håligheter för brandbarriärer",
                    "Innovativ glasmontering - dubbelglas på en sida",
                    "Glasyta i samma nivå som profil på motsatt sida",
                    "Förkortad installationstid jämfört med traditionella system",
                    "Justerbara inglasningsstöd för enklare montering",
                    "Svällande tejp med skydd i speciella spår",
                    "Brett utbud av dörrbladsdesigner",
                    "Stordimensionerade strukturer tillgängliga",
                    "Integrerade rökskyddskonstruktioner",
                    "Kompatibel med EI30/EI60-system (samma 78mm profildjup)",
                    "Lämplig för innerdörrar på utrymningsvägar",
                    "Uppfyller alla nationella tekniska bedömningar",
                ],
                badge: "Högpresterande",
                parameters: [
                    { name: "Brandklass", value: "EI90", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Fönsterbåge djup", value: "78", unit: "mm" },
                    { name: "Glastjocklek", value: "37-62", unit: "mm" },
                    {
                        name: "Bullerreduktion",
                        value: "RA1: 35, RA2: 35, RW: 37",
                        unit: "dB",
                    },
                    {
                        name: "Rökskyddsklass",
                        value: "Sa och S200",
                        unit: "EN 13501-2",
                    },
                    { name: "Värmeprestanda", value: "Förbättrad", unit: "" },
                    {
                        name: "Isoleringstjocklek",
                        value: "Förstärkt",
                        unit: "",
                    },
                    {
                        name: "Nationell bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                    { name: "Vikt", value: "52", unit: "kg/m²" },
                    {
                        name: "Färgalternativ",
                        value: "12+ specialfärger",
                        unit: "",
                    },
                    { name: "Garanti", value: "12", unit: "år" },
                    {
                        name: "Certifieringar",
                        value: "EN 16034, EN 14351-1+A2",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Vår högsta presterande branddörr i PE78EI-serien, speciellt utvecklad för krävande industriella och kommersiella miljöer där lång brandmotståndstid är avgörande.",
                    premiumFeatures: [
                        "Förstärkt konstruktion med extra brandskikt",
                        "Avancerad termisk brytningsteknik",
                        "Industritåliga komponenter",
                        "Specialutvecklade tätningar som tål höga temperaturer",
                    ],
                    applications: [
                        "Industribyggnader",
                        "Sjukhus och vårdinrättningar",
                        "Skyddsrum",
                        "Höghus och offentliga byggnader",
                    ],
                    testing: [
                        "Utökad brandtestning enligt EN 1634-1",
                        "Cykeltester för långtidsprestanda",
                        "Extrema klimattester (-30°C till +80°C)",
                    ],
                },
            },
            {
                id: 5,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI120",
                image: image5,
                features: [
                    "120 minuters brandmotstånd (EI120) - toppresterande",
                    "Specialdesign för extrem säkerhet och pålitlighet",
                    "Certifierad för kritiska offentliga byggnader",
                    "Profilsystem med tre håligheter för maximal brandsäkerhet",
                    "Glasupp till 73 mm tjocklek för EI120-prestanda",
                    "Innovativ en-sidig glasmontering med jämn yta",
                    "Förkortad installationstid med smart design",
                    "Justerbara inglasningsstöd för precision",
                    "Avancerad svällande tejp i skyddade spår",
                    "Stordimensionerade lösningar (upp till 4 m höjd)",
                    "Kompatibel med EI60/EI90-system via modifieringsprofiler",
                    "Extra hög bullerdämpning för känsliga miljöer",
                    "Förstärkt konstruktion för tunga laster",
                    "Fullständigt certifierad enligt strikta krav",
                ],
                badge: "Topklass",
                parameters: [
                    { name: "Brandklass", value: "EI120", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "89", unit: "mm" },
                    { name: "Max höjd", value: "4", unit: "m" },
                    { name: "Glastjocklek", value: "Up to 73", unit: "mm" },
                    {
                        name: "Bullerreduktion",
                        value: "RA1: 40, RA2: 38, RW: 41",
                        unit: "dB",
                    },
                    {
                        name: "Rökskyddsklass",
                        value: "Sa och S200",
                        unit: "EN 13501-2",
                    },
                    { name: "Värmeprestanda", value: "Exceptionell", unit: "" },
                    { name: "Max belastning", value: "Förstärkt", unit: "" },
                    {
                        name: "Nationell bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                    { name: "Vikt", value: "58", unit: "kg/m²" },
                    {
                        name: "Färgalternativ",
                        value: "15+ specialfärger",
                        unit: "",
                    },
                    { name: "Garanti", value: "15", unit: "år" },
                    {
                        name: "Certifieringar",
                        value: "EN 16034, EN 14351-1+A2",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Vår mest avancerade branddörr med exceptionella 120 minuters brandmotstånd, speciellt utvecklad för kritiska tillämpningar där absolut brandsäkerhet är ett krav.",
                    premiumFeatures: [
                        "Flerlagrad brandskyddsdesign",
                        "Tung duty gångjärn och låsmekanism",
                        "Temperaturbeständiga komponenter upp till 1000°C",
                        "Avancerad röktätningsteknik",
                    ],
                    applications: [
                        "Sjukhus och operationssalar",
                        "Flygplatser och transportnav",
                        "Kärnkraftverk och säkerhetskritiska anläggningar",
                        "Datacenter och serverhallar",
                    ],
                    certifications: [
                        "Fullständig EN 1634-1 certifiering",
                        "Kvalitetskontroll enligt ISO 9001:2015",
                        "Extrem prestandatestning",
                        "Godkänd för höghus över 50 våningar",
                    ],
                    technicalNotes: [
                        "Kräver specialmontering av certifierat personal",
                        "Rekommenderad årlig brandtätningskontroll",
                        "Kompatibel med accesskontrollsystem",
                    ],
                },
            },
            {
                id: 6,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI30",
                image: image6,
                features: [
                    "Smidig design",
                    "Lättvikt aluminium",
                    "Anpassningsbar färg",
                    "30 minuters brandmotstånd (EI30)",
                    "Profilsystem med tre hålrum för brandsäkerhet",
                    "Välvda strukturer tillgängliga",
                    "Strukturer med stora dimensioner tillgängliga",
                    "Kompatibel med EI60/EI90-system",
                    "Lämplig för utrymningsvägar",
                    "God värmeisolering med 35 mm värmebarriär",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI30", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Fönsterbåge djup", value: "78", unit: "mm" },
                    { name: "Glastjocklek", value: "14-54", unit: "mm" },
                    {
                        name: "Bullerreduktion",
                        value: "RA1: 35, RA2: 35, RW: 37",
                        unit: "dB",
                    },
                    {
                        name: "Rökskyddsklass",
                        value: "Sa och S200",
                        unit: "EN 13501-2",
                    },
                    {
                        name: "Nationell bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                    {
                        name: "Certifieringar",
                        value: "EN 16034, EN 14351-1+A2",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Ett profilsystem med tre hålrum avsett för konstruktion av dörrar och skiljeväggar som fungerar som inre eller yttre brandbarriärer.",
                    premiumFeatures: [
                        "35 mm värmebarriär för god värmeisolering",
                        "Brett utbud av möjliga dörrbladsdesigner",
                        "Rökskyddskonstruktioner tillgängliga",
                        "Kan sammanfogas med EI60- och EI90-system",
                    ],
                    applications: [
                        "Innerdörrar som utgångar",
                        "Utrymningsvägar",
                        "Brandbarriärer i byggnader",
                        "Skiljeväggar med brandsäkerhet",
                    ],
                    technicalNotes: [
                        "Överensstämmer med klassificeringen av brandmotstånd",
                        "Godkänd enligt nationell teknisk bedömning",
                        "Fyllning av brandbeständigt glas eller IGU isolerrutor",
                    ],
                },
            },
            {
                id: 7,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI60",
                image: image7,
                features: [
                    "Dubbel tätning",
                    "Automatisk slutning",
                    "Handtagslös design",
                    "60 minuters brandmotstånd (EI60)",
                    "Profilsystem med tre hålrum för brandsäkerhet",
                    "Kompatibel med EI30/EI90-system",
                    "Kan sammanfogas med EI120 via modifieringsprofiler",
                    "35 mm värmebarriär för god isolering",
                    "Lämplig för utrymningsvägar",
                    "Strukturer med stora dimensioner tillgängliga",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI60", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Fönsterbåge djup", value: "78", unit: "mm" },
                    { name: "Glastjocklek", value: "20-54", unit: "mm" },
                    {
                        name: "Bullerreduktion",
                        value: "RA1: 35, RA2: 35, RW: 37",
                        unit: "dB",
                    },
                    {
                        name: "Rökskyddsklass",
                        value: "Sa och S200",
                        unit: "EN 13501-2",
                    },
                    {
                        name: "Nationell bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                    {
                        name: "Certifieringar",
                        value: "EN 16034, EN 14351-1+A2",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Ett profilsystem med tre hålrum avsett för konstruktion av dörrar och skiljeväggar som fungerar som inre eller yttre brandbarriärer.",
                    premiumFeatures: [
                        "Brett utbud av dörrbladsdesigner",
                        "Rökskyddskonstruktioner tillgängliga",
                        "Välvda strukturer tillgängliga",
                        "Kompatibilitet med flera brandklasser",
                    ],
                    applications: [
                        "Innerdörrar som utgångar",
                        "Utrymningsvägar",
                        "Brandbarriärer i byggnader",
                        "Skiljeväggar med brandsäkerhet",
                    ],
                    certifications: [
                        "Fullständig EN 1634-1 certifiering",
                        "Kvalitetskontroll enligt ISO 9001:2015",
                    ],
                    technicalNotes: [
                        "Överensstämmer med klassificeringen av brandmotstånd",
                        "Godkänd enligt nationell teknisk bedömning",
                        "Kan användas med brandbeständigt glas eller IGU isolerrutor",
                        "Kräver specialmontering av certifierad personal",
                    ],
                },
            },
            {
                id: 8,
                title: "PE78EI DESIGN LINE",
                description: "Branddörrar klass EI90",
                image: image8,
                features: [
                    "Hög säkerhetsklass",
                    "Specialglas",
                    "Integrerad rökavskiljning",
                    "90 minuters brandmotstånd (EI90)",
                    "Profilsystem med tre hålrum för brandsäkerhet",
                    "Kompatibel med EI30/EI60-system",
                    "Kan sammanfogas med EI120 via modifieringsprofiler",
                    "35 mm värmebarriär för optimal isolering",
                    "Lämplig för kritiska utrymningsvägar",
                    "Stordimensionerade lösningar tillgängliga",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI90", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Fönsterbåge djup", value: "78", unit: "mm" },
                    { name: "Glastjocklek", value: "37-54", unit: "mm" },
                    {
                        name: "Bullerreduktion",
                        value: "RA1: 35, RA2: 35, RW: 37",
                        unit: "dB",
                    },
                    {
                        name: "Rökskyddsklass",
                        value: "Sa och S200",
                        unit: "EN 13501-2",
                    },
                    {
                        name: "Nationell bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Ett profilsystem med tre hålrum avsett för konstruktion av dörrar och skiljeväggar som fungerar som inre eller yttre brandbarriärer med exceptionell 90-minuters brandmotstånd.",
                    premiumFeatures: [
                        "Integrerad rökavskiljningsteknik",
                        "Avancerad värmebarriärkonstruktion",
                        "Specialglas för hög brandsäkerhet",
                        "Full kompatibilitet med andra brandklasser",
                    ],
                    applications: [
                        "Höghus och skyskrapor",
                        "Sjukhus och intensivvårdsavdelningar",
                        "Kärnkraftsanläggningar",
                        "Datacenter med hög säkerhetsklass",
                    ],
                    technicalNotes: [
                        "Kräver certifierad installation",
                        "Rekommenderad årlig brandtätningskontroll",
                        "Kompatibel med accesskontrollsystem",
                        "Överensstämmer med strikta nationella brandkrav",
                    ],
                },
            },
            {
                id: 9,
                title: "PE78EI",
                description: "Klass EI30-TT fönster",
                image: image9,
                features: [
                    "Brandsäkert fönster",
                    "Termisk brytning",
                    "Energisnål design",
                    "30 minuters brandmotstånd (EI30)",
                    "Tre hålprofiler för optimerad prestanda",
                    "Termisk barriär på 34 mm",
                    "Perimeterutrustning för komplett skydd",
                    "Flush monteringsalternativ",
                    "Hög ljudreduktion",
                    "Sammankopplingsbar med andra system",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI30-TT", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Bågdjup", value: "86", unit: "mm" },
                    { name: "Max bredd", value: "1.38", unit: "m" },
                    { name: "Max höjd", value: "2.76", unit: "m" },
                    { name: "Max area", value: "3.45", unit: "m²" },
                    { name: "Termisk barriär", value: "34", unit: "mm" },
                    { name: "Maxvikt", value: "200", unit: "kg" },
                    { name: "Glaspaket", value: "39-42", unit: "mm" },
                    {
                        name: "Ljudreduktion",
                        value: "RA1: 41, RA2: 38, RW: 45",
                        unit: "dB",
                    },
                    {
                        name: "Nationell bedömning",
                        value: "ITB-KOT-2017/0351",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Brandsäkra fönster med termisk brytning och energisnål design, speciellt utvecklade för kravställningar där både brandsäkerhet och energieffektivitet är viktiga faktorer.",
                    premiumFeatures: [
                        "Mono ramkonstruktion med flush-alternativ",
                        "Högkapacitets ljudisolering",
                        "Perimeterutrustning för komplett skydd",
                        "Flexibel systemkompatibilitet",
                    ],
                    applications: [
                        "Bostadshus med höga krav",
                        "Offentliga byggnader",
                        "Utbildningsinstitutioner",
                        "Hälsovårdsfastigheter",
                    ],
                    technicalNotes: [
                        "Kräver specialmontering",
                        "Maximala dimensioner måste respekteras",
                        "Överensstämmer med nationella brandkrav",
                        "Rekommenderad regelbunden inspektion",
                    ],
                },
            },
            {
                id: 10,
                title: "PE78EI",
                description: "Klass EI30 glasad skiljevägg med stötfog",
                image: image10,
                features: [
                    "Sömlös design",
                    "Ljudisolerande",
                    "Maximal ljusinsläpp",
                    "30 minuters brandmotstånd (EI30)",
                    "Extra smala 4 mm stötfogar",
                    "Obegränsad strukturbredd",
                    "Optimal ljusgenomsläppning",
                    "Svällande fogmaterial för brandsäkerhet",
                    "Flexibel anpassning till olika utrymmen",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI30", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Max glasbredd", value: "1.8", unit: "m" },
                    { name: "Max glashöjd", value: "3.6", unit: "m" },
                    { name: "Max glasarea", value: "5.45", unit: "m²" },
                    { name: "Fogbredd", value: "4", unit: "mm" },
                    { name: "Glastjocklek", value: "21/23", unit: "mm" },
                    {
                        name: "Nationell bedömning",
                        value: "ITB-KOT-2017/0351, ITB-KOT-2018/0529",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Glasade skiljeväggar med minimala stötfogar som kombinerar estetisk ren design med full brandsäkerhet, idealisk för moderna kontorsmiljöer och offentliga rum.",
                    premiumFeatures: [
                        "Nästan osynliga fogar för visuell kontinuitet",
                        "Hög ljusgenomsläppning med brandsäkerhet",
                        "Obegränsad bredd på väggstrukturen",
                        "Specialdesignad svällande fogmassa",
                    ],
                    applications: [
                        "Öppna kontorslandskap",
                        "Konferensfaciliteter",
                        "Utställningshallar",
                        "Hotell och konferensanläggningar",
                    ],
                    technicalNotes: [
                        "Kräver precisionsmontering",
                        "Specialfogmassa för brandskydd",
                        "Två godkända nationella bedömningar",
                        "Anpassningsbar för olika glastyper",
                    ],
                },
            },
            {
                id: 11,
                title: "PE78EI",
                description: "Klass EI60 glasad skiljevägg med stötfog",
                image: image11,
                features: [
                    "60 min brandskydd",
                    "Stor spännvidd",
                    "Arkitektonisk flexibilitet",
                    "60 minuters brandmotstånd (EI60)",
                    "Minimala 4 mm stötfogar",
                    "Obegränsad strukturbredd",
                    "Optimal ljusgenomsläppning",
                    "Avancerad svällande fogteknik",
                    "Arkitektoniskt anpassningsbar design",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI60", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    { name: "Ramdjup", value: "78", unit: "mm" },
                    { name: "Max glasbredd", value: "1.76", unit: "m" },
                    { name: "Max glashöjd", value: "3.52", unit: "m" },
                    { name: "Max glasarea", value: "5.68", unit: "m²" },
                    { name: "Fogbredd", value: "4", unit: "mm" },
                    { name: "Glastjocklek", value: "26/31", unit: "mm" },
                    {
                        name: "Nationell bedömning",
                        value: "ITB-KOT-2017/0351, ITB-KOT-2018/0529",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Högeffektiva glasade brandväggar med dubbla brandskyddstider som kombinerar säkerhet med arkitektonisk frihet och maximal ljusinsläppning.",
                    premiumFeatures: [
                        "Förstärkt glaskonstruktion för högre brandkrav",
                        "Större glasytor utan synliga stöd",
                        "Specialutvecklad svällande silikonfog",
                        "Full skala arkitektoniska möjligheter",
                    ],
                    applications: [
                        "Högrisk-miljöer i offentliga byggnader",
                        "Stora kontorslandskap med öppna planlösningar",
                        "Utbildningsinstitutioner med höga säkerhetskrav",
                        "Kommersiella byggnader med estetiska krav",
                    ],
                    technicalNotes: [
                        "Kräver certifierad installationsteam",
                        "Glaspaket specifikt för 60-minuters skydd",
                        "Två kompletterande tekniska bedömningar",
                        "Anpassningsbar för både vertikala och horisontella lösningar",
                    ],
                },
            },
            {
                id: 12,
                title: "PF152EI",
                description: "Klass EI30 fasad- och utfackningssystem",
                image: image12,
                features: [
                    "Extra bred profil",
                    "Hög lastkapacitet",
                    "Modern minimalistisk design",
                    "30 minuters brandmotstånd (EI30)",
                    "Flexibel för både glasade och ogenomskinliga lösningar",
                    "Integrerat brandsäker fönster- och dörrsystem",
                    "Avancerad svällande tejpteknik",
                    "Obegränsad konstruktionshöjd och bredd",
                    "Utmärkt värmeisolering",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI30", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    {
                        name: "Profilbredd",
                        value: "Stolpar/acterspeglar: 52, Yttertäckning: 51",
                        unit: "mm",
                    },
                    {
                        name: "Profilhöjd",
                        value: "Stolpar: 85-196, Spröjs: 91-201",
                        unit: "mm",
                    },
                    { name: "Fyllningstjocklek", value: "15-66", unit: "mm" },
                    { name: "Lufttäthet", value: "AE 2100", unit: "klass" },
                    { name: "Vattentäthet", value: "RE 2100", unit: "klass" },
                    {
                        name: "Värmeisolering",
                        value: "U0 från 1.7, Ucw/Uw från 0.78",
                        unit: "W/m²K",
                    },
                    {
                        name: "Certifieringar",
                        value: "LZE03-01561/19/R126NZE/EN, 01561/16/R83NZP",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Ett komplett EI30-klassat system för brandsäkra fasadlösningar med exceptionell designflexibilitet och prestanda, lämpligt för både nybyggnation och renovering.",
                    premiumFeatures: [
                        "Integrerat fönster- och dörrsystem (PE78EI)",
                        "Avancerad termisk brytning",
                        "Slimmad design med breda profilalternativ",
                        "Hög lastkapacitet för stora glasytor",
                    ],
                    applications: [
                        "Höghusfasader med brandsäkerhetskrav",
                        "Glasade atriumtak",
                        "Entrépartier i offentliga byggnader",
                        "Renoveringsprojekt med säkerhetsuppgradering",
                    ],
                    technicalNotes: [
                        "Kräver specialutbildad montör",
                        "Kompatibelt med PE78EI fönster/dörrsystem",
                        "Omfattande certifieringspaket",
                        "Anpassningsbart för olika klimatzoner",
                    ],
                },
            },
            {
                id: 13,
                title: "PF152EI",
                description: "Klass EI60 fasad- och utfackningssystem",
                image: image13,
                features: [
                    "Stabil konstruktion",
                    "Lång livslängd",
                    "Underhållsfritt",
                    "60 minuters brandmotstånd (EI60)",
                    "Förstärkt fasadlösning för högre säkerhet",
                    "Integrerat med PE78EI fönster/dörrsystem",
                    "Avancerad svällande tejp för brandsäkerhet",
                    "Skalbar design utan dimensionella begränsningar",
                    "Exceptionell energiprestanda",
                ],
                parameters: [
                    { name: "Brandklass", value: "EI60", unit: "" },
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    {
                        name: "Profilbredd",
                        value: "Stolpar/acterspeglar: 52, Yttertäckning: 51",
                        unit: "mm",
                    },
                    {
                        name: "Profilhöjd",
                        value: "Stolpar: 85-196, Spröjs: 91-201",
                        unit: "mm",
                    },
                    { name: "Fyllningstjocklek", value: "23-66", unit: "mm" },
                    { name: "Lufttäthet", value: "AE 2100", unit: "klass" },
                    { name: "Vattentäthet", value: "RE 2100", unit: "klass" },
                    {
                        name: "Värmeisolering",
                        value: "U0 från 1.7, Ucw/Uw från 0.78",
                        unit: "W/m²K",
                    },
                    {
                        name: "Certifieringar",
                        value: "LZE03-01561/19/R126NZE/EN, 01561/16/R83NZP",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Högeffektivt EI60-klassat fasadystem som kombinerar avancerad brandsäkerhet med exceptionell byggnadsfysikalisk prestanda för krävande arkitektoniska lösningar.",
                    premiumFeatures: [
                        "Förstärkt glas- och profilsystem för 60-minuters skydd",
                        "Långsiktigt underhållsfri konstruktion",
                        "Komplett systemlösning för hela byggnadsskalet",
                        "Hög lastkapacitet för stora spännvidder",
                    ],
                    applications: [
                        "Höghus med stränga brandsäkerhetskrav",
                        "Sjukhus och specialbyggnader",
                        "Utbildningsanläggningar med höga krav",
                        "Kommersiella byggnader med stora glasytor",
                    ],
                    technicalNotes: [
                        "Kräver certifierad installationskompetens",
                        "Minimalt underhåll tack vare avancerad materialteknik",
                        "Omfattande testad för brandspridning",
                        "Anpassningsbar för både vertikala och horisontella installationer",
                    ],
                },
            },
            {
                id: 14,
                title: "PF152EI",
                description: "Klass REI30/RE45 glasat taksystem",
                image: image14,
                features: [
                    "Takglas med brandskydd (REI30/RE45)",
                    "UV-filter för skydd mot solskador",
                    "Regn- och vindtät konstruktion",
                    "Flexibel design för olika taklutningar (0°-80°)",
                    "Storleksflexibelt system utan dimensionella begränsningar",
                    "Triangulära och trapezformade utsprång möjliga",
                    "Hög belastningskapacitet (0.24 kN/m² simulerad snölast)",
                    "TGU-glasning upp till 67 mm tjocklek",
                    "Energisnålt med U-värde från 1.9 W/m²K",
                    "Certifierat enligt EN 13501-2:2016",
                ],
                badge: "Innovativ",
                parameters: [
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    {
                        name: "Profildjup stolpar",
                        value: "85-196",
                        unit: "mm",
                    },
                    {
                        name: "Profildjup spröjs",
                        value: "91-201",
                        unit: "mm",
                    },
                    {
                        name: "Profilbredd",
                        value: "52",
                        unit: "mm",
                    },
                    {
                        name: "Max glasdimensioner",
                        value: "900×2000 eller 988×1500",
                        unit: "mm",
                    },
                    {
                        name: "Fyllningstjocklek",
                        value: "Upp till 67",
                        unit: "mm",
                    },
                    {
                        name: "Taklutningsvinkel",
                        value: "0-80",
                        unit: "°",
                    },
                    {
                        name: "Belastningskapacitet",
                        value: "0.24",
                        unit: "kN/m²",
                    },
                    {
                        name: "Värmeisolering (Uf)",
                        value: "Från 1.9",
                        unit: "W/m²K",
                    },
                    {
                        name: "Värmeisolering (Ucw/Uw)",
                        value: "Från 1.1",
                        unit: "W/m²K",
                    },
                    {
                        name: "Brandklass",
                        value: "REI30/RE45",
                        unit: "",
                    },
                    {
                        name: "Klassificering",
                        value: "01561/21/R144NZP",
                        unit: "",
                    },
                    {
                        name: "Testrapporter",
                        value: "1577.1/17/Z00NZP och 1577.1/17/Z00NZP/ENG",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "En brandbeständig variant av PF152-systemet speciellt utformat för glasade takkonstruktioner med klassificering REI30/RE45, certifierad enligt EN 13501-2:2016.",
                    certifications: [
                        "Klassificering: 01561/21/R144NZP",
                        "Godkännande: ITB-klassificering för brandmotstånd",
                        "Testrapporter: 1577.1/17/Z00NZP och 1577.1/17/Z00NZP/ENG",
                        "EN 13501-2:2016 certifierad",
                    ],
                },
            },
            {
                id: 15,
                title: "PF152ESG",
                description:
                    "Brandbeständigt system klass EI30 för utfackningsväggar",
                image: image15,
                features: [
                    "Säkerhetsglas (ESG)",
                    "Hög transparens och skärskydd",
                    "EI30-certifierad brandsäkerhet",
                    "Snabb montering med roterande glasningsstöd",
                    "Flexibel för både glasade och icke-genomskinliga lösningar",
                    "Obegränsad bredd och höjd på konstruktionen",
                    "Vinklade utfackningsväggar möjliga",
                    "Slät yttre yta med elegant silikonfog",
                    "Svällande tejp för brandsäker tätning",
                    "DGU:er och TGU:er kan användas",
                    "Anpassningsbar för olika arkitektoniska lösningar",
                ],
                badge: "Säkerhet",
                parameters: [
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    {
                        name: "Profildjup stolpar",
                        value: "85-196",
                        unit: "mm",
                    },
                    {
                        name: "Profildjup spröjs",
                        value: "91-201",
                        unit: "mm",
                    },
                    {
                        name: "Profilbredd",
                        value: "52",
                        unit: "mm",
                    },
                    {
                        name: "Fyllningstjocklek",
                        value: "37-75",
                        unit: "mm",
                    },
                    {
                        name: "Lufttäthet",
                        value: "AE 2100",
                        unit: "klass",
                    },
                    {
                        name: "Vattentäthet",
                        value: "RE 2700",
                        unit: "klass",
                    },
                    {
                        name: "Brandklass",
                        value: "EI30",
                        unit: "",
                    },
                    {
                        name: "Klassificering",
                        value: "1561/19/R118NZP/ENG + bilagor",
                        unit: "",
                    },
                    {
                        name: "Godkännande",
                        value: "LZE04-01561/19/R126NZE/EN",
                        unit: "",
                    },
                    {
                        name: "Brandtest",
                        value: "01561/16/R83NZP",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Ett EI30-brandskyddat system för utfackningsväggar med punktglasfäste, optimerat för snabb installation och elegant design med silikonfogar.",
                    certifications: [
                        "Klassificering: 1561/19/R118NZP/ENG + bilagor",
                        "Godkännande: LZE04-01561/19/R126NZE/EN",
                        "Brandspridningstest: 01561/16/R83NZP",
                    ],
                },
            },
            {
                id: 16,
                title: "PF152ESG",
                description:
                    "Brandbeständigt system klass EI60 för utfackningsväggar",
                image: image16,
                features: [
                    "Dubbla säkerhetsglas (ESG)",
                    "Extra stark konstruktion med aluminosilikat-insatser",
                    "Lång garanti på 10 år",
                    "Rotera glasningsstöd för snabb montering",
                    "Kompatibel med både glasade och solida lösningar",
                    "Obegränsad bredd och höjd på konstruktionen",
                    "Vinklade utfackningsväggar möjliga",
                    "Slät yttre yta med elegant silikonfog",
                    "Svällande tejp för brandsäker tätning",
                    "DGU:er och TGU:er kan användas",
                    "Anpassningsbar för både vertikala och horisontella installationer",
                ],
                badge: "Premium",
                parameters: [
                    {
                        name: "Material",
                        value: "Aluminiumprofiler EN AW-6060",
                        unit: "EN 573-3, T66",
                    },
                    {
                        name: "Profildjup stolpar",
                        value: "85-196",
                        unit: "mm",
                    },
                    {
                        name: "Profildjup spröjs",
                        value: "91-201",
                        unit: "mm",
                    },
                    {
                        name: "Profilbredd",
                        value: "52",
                        unit: "mm",
                    },
                    {
                        name: "Fyllningstjocklek",
                        value: "47-75",
                        unit: "mm",
                    },
                    {
                        name: "Lufttäthet",
                        value: "AE 2100",
                        unit: "klass",
                    },
                    {
                        name: "Vattentäthet",
                        value: "RE 2700",
                        unit: "klass",
                    },
                    {
                        name: "Brandklass",
                        value: "EI60",
                        unit: "",
                    },
                    {
                        name: "Klassificering",
                        value: "1561/19/R118NZP/ENG + bilagor",
                        unit: "",
                    },
                    {
                        name: "Godkännande",
                        value: "LZE04-01561/19/R126NZE/EN",
                        unit: "",
                    },
                    {
                        name: "Brandtest",
                        value: "01561/16/R83NZP",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Ett högeffektivt EI60-system för utfackningsväggar med punktglasfäste, utrustat med aluminosilikat-insatser för förbättrad brandsäkerhet och elegant silikonfogning.",
                    certifications: [
                        "Klassificering: 1561/19/R118NZP/ENG + bilagor",
                        "Godkännande: LZE04-01561/19/R126NZE/EN",
                        "Brandspridningstest: 01561/16/R83NZP",
                    ],
                },
            },
        ],
        steel: [
            {
                id: 1,
                title: "Janisol 2",
                description:
                    "Brandskyddssystem för säkra och designflexibla byggnadslösningar",
                image: i1,
                features: [
                    "Brandmotståndsklass EI30",
                    "Extremt tunna men starka stålprofiler",
                    "Multifunktionella dörrar och skiljeväggar",
                    "CE-certifierade dörrar med antipanikfunktion",
                    "Hög ljudisolering (upp till Rw 43 dB)",
                    "Automatiserade lösningar för hygienisk passage",
                    "Möjlighet till plåtbeklädda eller glasade lösningar",
                    "Inbrottsskydd RC1 till RC3",
                    "Anpassningsbar design för arkitektoniska krav",
                ],
                badge: "Innovativ",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket/bandgalvaniserat stål eller rostfritt stål 1.4401",
                        unit: "",
                    },
                    {
                        name: "Dörrhöjd (enkelspärrlås)",
                        value: "Upp till 2.5",
                        unit: "m",
                    },
                    {
                        name: "Dörrhöjd (med bi-metallklack)",
                        value: "Upp till 3.0",
                        unit: "m",
                    },
                    {
                        name: "Ljudisolering",
                        value: "Upp till 43",
                        unit: "dB",
                    },
                    {
                        name: "Inbrottsskydd",
                        value: "RC1-RC3",
                        unit: "",
                    },
                    {
                        name: "Glaspanelstjocklek",
                        value: "Anpassningsbar",
                        unit: "mm",
                    },
                    {
                        name: "Ytbehandling",
                        value: "Pulverlackering/kaminemaljering/polerat",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Janisol 2 är ett avancerat brandskyddssystem i stål som kombinerar säkerhet med designfrihet. Systemet möjliggör skapandet av starka konstruktioner med minimala profiler, certifierade enligt europeiska standarder och med flera säkerhetsfunktioner inklusive antipaniklösningar.",
                    certifications: [
                        "Brandmotstånd EI30 (EN 1634-1, DIN 4102-5)",
                        "Rökskydd (DIN 18095, EN 1634-3, EN 13501-2)",
                        "Hållbarhet C5 (EN 1191)",
                        "Nödutgångsdörr (EN 1125/EN 179)",
                        "CE-certifiering enligt EN 16034",
                        "Inbrottsskydd RC1-RC3",
                    ],
                    equipment: [
                        "Gångjärn i stål/rostfritt stål",
                        "Integrerade dörrstängare",
                        "Flerpunktslås (motoriserade alternativ)",
                        "Designer dubbelglasade fönster",
                        "Nödlås och paniktryckknappar",
                    ],
                    elementTypes: [
                        "Enkel- och dubbeldörrar",
                        "Skiljeväggar med fria glaskanter",
                        "Plåtbeklädda dörrar med/utan glas",
                        "Element med sidopaneler och akterspegelfönster",
                    ],
                },
            },
            {
                id: 2,
                title: "Janisol 2 EI30",
                description:
                    "Branddörrar med fingerskydd för högtrafikerade offentliga miljöer",
                image: i2,
                features: [
                    "Fingerskydd enligt DIN 18650 och EN 16005",
                    "Rundade dörrblad för säker stängning",
                    "Brandmotståndsklass EI30",
                    "Lämplig för skolor, köpcentrum och transportnav",
                    "Flexibel glasmontering",
                    "Enkel installation och underhåll",
                    "Rökskyddsfunktion",
                    "Hållbar konstruktion (C5)",
                ],
                badge: "Säkerhet",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket/bandgalvaniserat stål",
                        unit: "",
                    },
                    {
                        name: "Öppningsstorlek (enkeldörr)",
                        value: "1380 × 3000",
                        unit: "mm",
                    },
                    {
                        name: "Öppningsstorlek (dubbeldörr)",
                        value: "3000 × 3000",
                        unit: "mm",
                    },
                    {
                        name: "Brandklass",
                        value: "EI30",
                        unit: "",
                    },
                    {
                        name: "Hållbarhetsklass",
                        value: "C5",
                        unit: "",
                    },
                    {
                        name: "Ytbehandling",
                        value: "Pulverlackering/kaminemaljering",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Janisol 2 EI30 med fingerskydd är speciellt utformad för högtrafikerade offentliga miljöer där säkerhet och tillgänglighet är prioritet. De rundade dörrbladen eliminerar risken för fingerskador vid stängning, samtidigt som alla brandskydds- och säkerhetskrav uppfylls fullt ut.",
                    certifications: [
                        "Brandmotstånd EI30 (EN 1634-1, DIN 4102-5)",
                        "Rökskydd (DIN 18095, EN 1634-3)",
                        "Hållbarhet C5 (EN 1191)",
                        "Nödutgångsdörr (EN 1125/EN 179)",
                        "Fingerskydd (DIN 18650-1, DIN 18650-2, EN 16005)",
                    ],
                    equipment: [
                        "Integrerade dörrstängare",
                        "Flerpunktslås",
                        "Nödlås och paniktryckknappar",
                    ],
                    elementTypes: [
                        "Enkel- och dubbeldörrar",
                        "Element med sidopaneler",
                        "Konfigurationer med akterspegelfönster",
                    ],
                    applications: [
                        "Skolor och utbildningsanläggningar",
                        "Köpcentrum och butiker",
                        "Järnvägsstationer och flygplatser",
                        "Sjukhus och vårdinrättningar",
                        "Kontorsbyggnader med hög belastning",
                    ],
                },
            },
            {
                id: 3,
                title: "Economy 50 E30/EW30/E60/EW60",
                description:
                    "Kostnadseffektiva branddörrar och skiljeväggar med smala profiler för snabb installation",
                image: i3,
                features: [
                    "Brandklasser: E30/EW30/E60/EW60 (upp till E120 för skiljeväggar)",
                    "Smala ansiktsbredder (50 mm profildjup)",
                    "Kompabilitet med Economy 60, Janisol 2 & C4",
                    "Torrglasering eller kittmontering",
                    "Rökskyddsalternativ (DIN 18095/EN 1634-3)",
                    "Hållbar konstruktion (C5 enligt EN 1191)",
                    "Flexibel montering på både tunga och lätta väggar",
                    "Motoriserade flerpunktslås möjliga",
                ],
                badge: "Budget",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket stål / rostfritt stål 1.4401",
                        unit: "Pulverlack/kaminemalj/polerat",
                    },
                    {
                        name: "Profildjup",
                        value: "50",
                        unit: "mm",
                    },
                    {
                        name: "Max dörrhöjd",
                        value: "3.8",
                        unit: "m",
                    },
                    {
                        name: "Brandklass (dörrar)",
                        value: "E30/EW30/E60/EW60",
                        unit: "EN 1634-1",
                    },
                    {
                        name: "Brandklass (väggar)",
                        value: "Upp till E120",
                        unit: "",
                    },
                    {
                        name: "Hållbarhet",
                        value: "C5",
                        unit: "EN 1191",
                    },
                ],
                additionalInfo: {
                    description:
                        "Economy 50 är ett kostnadseffektivt system med smala stålprofiler (50 mm) för branddörrar och skiljeväggar. Det passar både grundläggande och avancerade krav, med möjlighet till kombination av brand- och rökskydd. Designen är enhetlig med andra Finestra-system för en sömlös integration.",
                    certifications: [
                        "EN 1634-1 (Brandmotstånd E30-EW60)",
                        "DIN 18095 & EN 1634-3 (Rökskydd)",
                        "EN 1191 (Hållbarhet C5)",
                        "EN 1125/EN 179 (Nödutgångsdörrar)",
                    ],
                    equipment: [
                        "Gångjärn (stål/rostfritt stål)",
                        "Integrerade dörrstängare",
                        "Flerpunktslås (standard/motoriserat)",
                        "Dubbelglasade designerfönster",
                        "Nödlås & paniktryckknappar",
                    ],
                    elementTypes: [
                        "Enkel-/dubbeldörrar (med/utan sidopaneler)",
                        "Skiljeväggar med fasta glasrutor",
                        "Akterspegelfönster som tillval",
                    ],
                    applications: [
                        "Kontorsbyggnader (låg till medelbelastning)",
                        "Skolors sekundära utgångar",
                        "Hotell och bostadscomplex",
                        "Industriella anläggningar (där kostnad är kritisk)",
                    ],
                },
            },
            {
                id: 4,
                title: "Economy 60 E30/EW30/E60/EW60",
                description:
                    "Kostnadseffektiva branddörrar och skiljeväggar med 60-minuters skydd och förstärkta karmar",
                image: i4,
                features: [
                    "60 minuters brandskydd (upp till E90 för väggar)",
                    "Förstärkt karmkonstruktion för tunga laster",
                    "Smal ansiktsbredd (60 mm profildjup)",
                    "Kompatibel med Janisol 2 och C4-system",
                    "Rökskyddsalternativ (DIN 18095/EN 1634-3)",
                    "Hållbar konstruktion (C5 enligt EN 1191)",
                    "Flexibel montering på alla väggtyper",
                    "Motoriserade flerpunktslås tillgängliga",
                ],
                badge: "Budget",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket/bandgalvaniserat stål",
                        unit: "Pulverlack/kaminemaljering",
                    },
                    {
                        name: "Profildjup",
                        value: "60",
                        unit: "mm",
                    },
                    {
                        name: "Max dörrhöjd",
                        value: "3.8",
                        unit: "m",
                    },
                    {
                        name: "Brandklass (dörrar)",
                        value: "E30/EW30/E60/EW60",
                        unit: "EN 1634-1",
                    },
                    {
                        name: "Brandklass (väggar)",
                        value: "Upp till E90",
                        unit: "",
                    },
                    {
                        name: "Hållbarhet",
                        value: "C5",
                        unit: "EN 1191",
                    },
                ],
                additionalInfo: {
                    description:
                        "Economy 60 är ett kostnadseffektivt system med 60 mm stålprofiler för branddörrar och skiljeväggar. Systemet erbjuder förbättrad styrka jämfört med Economy 50, med samma designkompatibilitet med Janisol-serien. Rökskydd och brandskydd kan kombineras eller användas separat.",
                    certifications: [
                        "EN 1634-1 (Brandmotstånd E30-EW60)",
                        "DIN 18095 & EN 1634-3 (Rökskydd)",
                        "EN 1191 (Hållbarhet C5)",
                        "EN 1125/EN 179 (Nödutgångsdörrar)",
                    ],
                    equipment: [
                        "Gångjärn (stål/rostfritt stål)",
                        "Integrerade dörrstängare",
                        "Flerpunktslås (standard/motoriserat)",
                        "Dubbelglasade designerfönster",
                        "Nödlås & paniktryckknappar",
                    ],
                    elementTypes: [
                        "Enkel-/dubbeldörrar (med/utan sidopaneler)",
                        "Skiljeväggar med fasta glasrutor",
                        "Akterspegelfönster som tillval",
                    ],
                    applications: [
                        "Kommersiella byggnader med medelhög belastning",
                        "Sjukhus och vårdinrättningar (sekundära utgångar)",
                        "Industriella anläggningar",
                        "Utbildningsanläggningar",
                    ],
                    notes: "En variant utan brandskydd finns tillgänglig för icke-kritiska tillämpningar.",
                },
            },
            {
                id: 5,
                title: "Janisol C4 EI60/EI90",
                description:
                    "Avancerad branddörr med keramisk brandskyddsfyllning för exceptionell brandprestanda",
                image: i5,
                features: [
                    "Brandmotstånd upp till EI90 (70 mm profil)",
                    "Keramisk brandskyddsfyllning för optimal prestanda",
                    "Smal konstruktion med hög styrka",
                    "Integrerad rökskyddsfunktion",
                    "Professionell installation rekommenderas",
                    "Hållbar konstruktion (C5 enligt EN 1191)",
                    "Flexibel utrustning med motoriserade alternativ",
                    "Kompatibel med brandväggar upp till EI120",
                ],
                badge: "Premium",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket stål/rostfritt stål 1.4401",
                        unit: "Pulverlack/kaminemalj/polerat",
                    },
                    {
                        name: "Profiltjocklek",
                        value: "70",
                        unit: "mm",
                    },
                    {
                        name: "Max dörrhöjd",
                        value: "2.5",
                        unit: "m",
                    },
                    {
                        name: "Brandklass (dörrar)",
                        value: "EI60/EI90",
                        unit: "EN 1634-1",
                    },
                    {
                        name: "Brandklass (väggar)",
                        value: "Upp till EI120",
                        unit: "",
                    },
                    {
                        name: "Hållbarhet",
                        value: "C5",
                        unit: "EN 1191",
                    },
                ],
                additionalInfo: {
                    description:
                        "Janisol C4-serien representerar toppmodern brandteknik med keramisk fyllning som ger exceptionell brandprestanda i en kompakt profil. Systemet är speciellt utformat för kritiska tillämpningar där både säkerhet och design är avgörande faktorer.",
                    certifications: [
                        "EN 1634-1 & DIN 4102-5 (EI60/EI90)",
                        "DIN 18095 & EN 1634-3 (Rökskydd)",
                        "EN 1191 (Hållbarhet C5)",
                        "EN 1125/EN 179 (Nödutgångsdörrar)",
                    ],
                    equipment: [
                        "Specialgångjärn för höga brandkrav",
                        "Integrerade dörrstängare (EI60-klass)",
                        "Avancerade flerpunktslås (motoriserade alternativ)",
                        "Brandsäkert dubbelglas",
                        "Certifierade nödutrustningar",
                    ],
                    elementTypes: [
                        "Enkel-/dubbeldörrar med sidopaneler",
                        "Brandskyddande skiljeväggar",
                        "Konfigurationer med akterspegelfönster",
                    ],
                    applications: [
                        "Högriskanläggningar (datacenter, labb)",
                        "Sjukhus och vårdinrättningar",
                        "Offentliga byggnader med stränga krav",
                        "Industriella processanläggningar",
                        "Flygplatser och transportnav",
                    ],
                    installationNote:
                        "Professionell installation krävs för att säkerställa full brandprestanda.",
                },
            },
            {
                id: 6,
                title: "Janisol 1 E45/EW45",
                description:
                    "Brandsäkra fönster med ventilations- och nödutrymningsfunktioner för renovering och nybyggnation",
                image: i6,
                features: [
                    "Brandklass E45/EW45 (fönster) / E30/EW30 (fasta glas)",
                    "Inbyggd nödutrymningsfunktion",
                    "Ventilerbar design",
                    "Kompakt profil (60-64 mm installationsdjup)",
                    "Hög ljudisolering (upp till 43 dB)",
                    "Kraftigt regntät (klass 8A)",
                    "Storlek flexibilitet (upp till 1265×2300 mm)",
                    "Enkel installation och bearbetning",
                ],
                badge: "Flexibel",
                parameters: [
                    {
                        name: "Material",
                        value: "Galvaniserat stål",
                        unit: "",
                    },
                    {
                        name: "Installationsdjup",
                        value: "60 (karm) / 64 (båge)",
                        unit: "mm",
                    },
                    {
                        name: "Max fönsterstorlek",
                        value: "1265 × 2300",
                        unit: "mm",
                    },
                    {
                        name: "Glastjocklek",
                        value: "14-40",
                        unit: "mm",
                    },
                    {
                        name: "Brandklass (fönster)",
                        value: "E45/EW45",
                        unit: "EN 1634-1",
                    },
                    {
                        name: "Brandklass (fasta glas)",
                        value: "E30/EW30",
                        unit: "",
                    },
                    {
                        name: "Ljudisolering",
                        value: "Upp till 43",
                        unit: "dB",
                    },
                ],
                additionalInfo: {
                    description:
                        "Janisol 1-systemet erbjuder brandsäkra fönsterlösningar med samma estetiska framsida som standardfönster, men med avancerad brandteknisk prestanda. Systemet är optimerat för både renovering och nybyggnation, med flexibla installationsalternativ.",
                    certifications: [
                        "EN 14351-1 & EN 16034 (Systemcertifiering)",
                        "EN 1634-1 (E45/EW45 brandklass)",
                        "EN 14024 (Kompositteknik)",
                        "Vindlast C4 (1600 Pa)",
                        "Regntät klass 8A (450 Pa)",
                        "Lufttät klass 4 (600 Pa)",
                    ],
                    equipment: [
                        "Ytmonterat beslag (upp till 150 kg)",
                        "Aluminiumhandtag med lås",
                        "Torr- och våtglasningsalternativ",
                        "Brandsäkert glas (14-40 mm)",
                    ],
                    elementTypes: [
                        "Enkel-/dubbelbladiga fönster",
                        "Vrid- och lutningsbara fönster",
                        "Bottenhängda fönster",
                        "Franska fönster",
                        "Fasta glasrutor",
                    ],
                    performance: {
                        windLoad: "1600 Pa (C4)",
                        waterTightness: "450 Pa (8A)",
                        airPermeability: "600 Pa (klass 4)",
                        soundReduction: "43 dB",
                    },
                    applications: [
                        "Skolor och förskolor",
                        "Sjukhus och vårdinrättningar",
                        "Hotell och kontorsbyggnader",
                        "Bostadsbyggnader med höga krav",
                    ],
                },
            },
            {
                id: 7,
                title: "Janisol Sliding EI30",
                description:
                    "Platsbesparande brandsäker skjutdörr med automatisk brandavstängning för barriärfria miljöer",
                image: i7,
                features: [
                    "Glidande mekanism med smala ramprofiler",
                    "Brandklass EI30 (EN 1634-1)",
                    "Automatisk brandavstängningsfunktion",
                    "Integrerad nödutgångsfunktion (EN 1125/179)",
                    "Flexibel montering i alla väggtyper",
                    "Bredddesignalternativ (upp till oändlig bredd)",
                    "Höghöjdskonfigurationer (upp till 4040 mm)",
                ],
                badge: "Platsbesparande",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket/bandgalvaniserat stål",
                        unit: "Pulverlack/kaminemaljering",
                    },
                    {
                        name: "Standardstorlek (utan nödutgång)",
                        value: "1400×2500 / 2800×2500",
                        unit: "mm",
                    },
                    {
                        name: "Standardstorlek (med nödutgång)",
                        value: "1250×2500 / 2400×2500",
                        unit: "mm",
                    },
                    {
                        name: "Max höjd",
                        value: "4040",
                        unit: "mm",
                    },
                    {
                        name: "Brandklass",
                        value: "EI30",
                        unit: "EN 1634-1",
                    },
                    {
                        name: "Vägganslutning",
                        value: "Massiv/lättbetong/lättviktsstål",
                        unit: "",
                    },
                ],
                additionalInfo: {
                    description:
                        "Janisol Sliding-systemet kombinerar platsbesparande design med pålitligt brandskydd. De exceptionellt smala profilerna möjliggör sömlös integration i barriärfria miljöer, med full skalbarhet både i höjd och bredd. Systemet är idealiskt för högtrafikerade offentliga miljöer.",
                    certifications: [
                        "EN 1634-1 (EI30)",
                        "EN 1125/179 (Nödutgång)",
                        "Schweiziska brandgodkännanden",
                        "Kompatibel med EI60/EI90 väggsystem",
                    ],
                    equipment: [
                        "Specialanpassade drivenheter",
                        "Smala frontprofiler (flera designalternativ)",
                        "Integrerade dörrstängare",
                        "Panikhandtag och tryckplattor",
                        "Avancerade övervakningssystem",
                    ],
                    configurationOptions: [
                        "Enkel- eller dubbeldörrskonfiguration",
                        "Med/utan sidopaneler",
                        "Med/utan akterspegelfönster",
                        "Med/utan inbyggd nödutgång",
                        "Med inbyggt inbrottsskydd",
                    ],
                    performance: {
                        maxHeight: "4040 mm",
                        maxWidth: "Obegränsad (systemuppställning)",
                        wallCompatibility: [
                            "Högdensitets murverk",
                            "Lättbetong",
                            "Lättviktsstålkonstruktioner",
                        ],
                    },
                    applications: [
                        "Köpcentrum och butiksgallerian",
                        "Konferensanläggningar och arenor",
                        "Kontorsbyggnader med öppna planlösningar",
                        "Transportterminaler (flygplatser/järnvägsstationer)",
                        "Sjukhus och vårdinrättningar",
                    ],
                },
            },
            {
                id: 8,
                title: "Janisol 2 EI30 Kombinationsbrandskydd",
                description:
                    "Funktionell samverkan mellan olika brandskyddskrav med 70 mm installationsdjup",
                image: i8,
                features: [
                    "Multi-funktionell design",
                    "70 mm extra tjock konstruktion",
                    "Ljudisolerande egenskaper",
                    "Kombinerar med EI60/EI90 skiljeväggar",
                    "Estetiskt anpassningsbar",
                    "Bredd höjdjusteringsmöjligheter",
                ],
                badge: "Kombinationslösning",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket/bandgalvaniserat stål",
                        unit: "Pulverlack/kaminemaljering",
                    },
                    {
                        name: "Installationsdjup",
                        value: "70",
                        unit: "mm",
                    },
                    {
                        name: "Max dörrhöjd (enkelspärrlås)",
                        value: "2.5",
                        unit: "m",
                    },
                    {
                        name: "Max dörrhöjd (förstärkt)",
                        value: "3.0",
                        unit: "m",
                    },
                    {
                        name: "Brandklass",
                        value: "EI30/EI60/EI90",
                        unit: "EN 1634-1",
                    },
                ],
                additionalInfo: {
                    description:
                        "Det beprövade Janisol 2 EI30-systemet har utökats med 70 mm installationsdjup för att möjliggöra sömlös integration med transparenta C4 EI60 och EI90 brandskyddande skiljeväggar. Lösningen kombinerar tekniska krav med höga estetiska krav i krävande miljöer.",
                    certifications: [
                        "EN 1634-1 (EI30/EI60/EI90)",
                        "EN 1125/179 (Nödutgång)",
                        "Schweiziska brandgodkännanden",
                    ],
                    equipment: [
                        "Stål- och rostfria gångjärn (svets/skruv)",
                        "Integrerade dörrstängare",
                        "Flerpunktslås (motoriserade alternativ)",
                        "Designer dubbelglasade fönster",
                        "Nödlås och paniktryckknappar",
                    ],
                    configurationOptions: [
                        "Enkel- eller dubbelbladdörrar",
                        "Fast sidoramar alternativ",
                        "Akterspegelfönster alternativ",
                        "Centrala glasade dörrar med plåtbeklädnad",
                        "Torrglasering eller kittglasering",
                    ],
                    performance: {
                        maxHeight: "3.0 m (med förstärkning)",
                        wallCompatibility: [
                            "Kombinerar med EI60/EI90 skiljeväggar",
                        ],
                        lockingSystems: [
                            "Enkelspärrlås (upp till 2.5 m)",
                            "Förstärkt med bi-metallklack/indragningsbult (upp till 3.0 m)",
                            "Flerpunktslåsning",
                        ],
                    },
                    applications: [
                        "Byggnader med höga säkerhetskrav",
                        "Miljöer som kräver kombination av olika brandklasser",
                        "Estetiskt känsliga offentliga miljöer",
                        "Byggnader med transparenta brandväggar",
                    ],
                    technicalSpecifications: [
                        "Torrglasering eller glasering med kitt",
                        "Dörrhöjdsberoende låslösningar",
                        "Kompatibilitet med Janisol C4-system",
                    ],
                },
            },
            {
                id: 9,
                title: "VISS Fire EI30 Takglas",
                description:
                    "Brandskyddande takglaslösning med minimal profilbredd för maximal ljusinsläpp",
                image: i9,
                features: [
                    "Taklösning med EI30 brandskydd",
                    "Maximal dagsljusinsläpp",
                    "Väderbeständig konstruktion",
                    "Minimal fasadbredd (från 50 mm)",
                    "Flexibel takdesign (7°-80° lutning)",
                    "Långa stolplängder (upp till 4300 mm)",
                    "Energisnålt (Uf > 1,1 W/m²K)",
                ],
                badge: "Speciallösning",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket/bandgalvaniserat stål",
                        unit: "Pulverlack/kaminemaljering",
                    },
                    {
                        name: "Minimal profilbredd",
                        value: "50",
                        unit: "mm",
                    },
                    {
                        name: "Max stolplängd",
                        value: "4300",
                        unit: "mm",
                    },
                    {
                        name: "Lutningsvinkel",
                        value: "7°-80°",
                        unit: "",
                    },
                    {
                        name: "Värmeöverföringskoefficient",
                        value: "Uf > 1,1",
                        unit: "W/m²K",
                    },
                    {
                        name: "Tjocklek fyllnadselement",
                        value: "21-70",
                        unit: "mm",
                    },
                ],
                additionalInfo: {
                    description:
                        "VISS Fire EI30 takglas kombinerar brandsäkerhet med arkitektonisk flexibilitet. Systemets svetsade stålkonstruktion och minimala profilbredder möjliggör säkra, brandbeständiga taklösningar med maximalt ljusinsläpp. Lämpligt för alla vanliga taktyper inklusive pyramider, kupoler och sadeltak.",
                    certifications: [
                        "EI30 (EN 1634-1)",
                        "RE30/REW30/REI30",
                        "RE45/REW45/REI45",
                        "RE60/REW60/REI60",
                        "CE-märkt (EN 13830)",
                        "Schweiziska brandgodkännanden",
                    ],
                    constructionTypes: [
                        "Montering av stång efter stång",
                        "Svetsade/skruvade konstruktioner",
                        "Pyramider, par, gavelglas, polygonglas",
                        "Pent takglasning",
                    ],
                    performanceSpecs: {
                        waterTightness: "RE1200",
                        windLoadResistance: "2 kN/m²",
                        airPermeability: "AE750",
                        thermalTransmittance: "Uf > 1,49 W/m²K",
                        clampConnection: "AbZ Z-14,4-465",
                        postConnection: "AbZ Z-14,4-467",
                    },
                    technicalFeatures: [
                        "Ansiktsbredd från 50 mm",
                        "Standardprofiler från lager",
                        "Kompatibelt med VISS-systemprofiler",
                        "Stödjer alla vanliga taktyper",
                        "Lutningsvinkel 7°-80° (0°-80° inuti)",
                    ],
                    applications: [
                        "Kommersiella byggnader med stort ljusbehov",
                        "Offentliga miljöer med höga säkerhetskrav",
                        "Arkitektoniskt krävande takkonstruktioner",
                        "Byggnader som kräver brandbarriärer i tak",
                    ],
                },
            },
            {
                id: 10,
                title: "VISS Fire Brandfasad",
                description:
                    "Helt integrerad brandfasadlösning med arkitektonisk flexibilitet och höga prestandakrav",
                image: i10,
                features: [
                    "Hel fasadlösning med brandskydd EI30-EI90",
                    "Arkitektonisk integration i glasfasad",
                    "Hög prestanda vid brand (värmeisolering)",
                    "Bredd av tilläggskomponenter",
                    "Minimal ansiktsbredd (50 mm)",
                    "Flexibelt monteringsdjup (50-140 mm)",
                    "Kompatibel med VISS-systemprofiler",
                ],
                badge: "Fasadlösning",
                parameters: [
                    {
                        name: "Material",
                        value: "Obestruket stål/varmförzinkat bandstål",
                        unit: "Pulverlack/kaminemaljering",
                    },
                    {
                        name: "Ansiktsbredd",
                        value: "50",
                        unit: "mm",
                    },
                    {
                        name: "Monteringsdjup",
                        value: "50-140",
                        unit: "mm",
                    },
                    {
                        name: "Fyllningselement tjocklek",
                        value: "5-70",
                        unit: "mm",
                    },
                    {
                        name: "Brandklasser",
                        value: "E30/EI30/EI60/EI90",
                        unit: "EN 1634",
                    },
                ],
                additionalInfo: {
                    description:
                        "VISS Fire Brandfasad-systemet erbjuder en komplett lösning för brandsäkra glasfasader med arkitektonisk integritet. Systemets avancerade komponenter inklusive brandsäkra förankringar och rostfria klämsektioner säkerställer pålitligt skydd mot brandspridning.",
                    certifications: [
                        "EN 1634 (E30/EI30/EI60/EI90)",
                        "TRAV godkännande",
                        "EN 13830 (Ridåvägg)",
                        "AbZ Z-14,4-465 (Klämanslutning)",
                        "AbZ Z-14,4-467 (Stolpe-akterspegel)",
                        "Schweiziska brandgodkännanden",
                    ],
                    constructionTypes: [
                        "Stolpe-stolpe-akterspegel",
                        "Stolpe-akterspegel-stolpe",
                        "Svetsade/skruvade konstruktioner",
                        "Segmenterad glasning",
                        "Dörrar med skiljeväggar",
                    ],
                    profileOptions: [
                        "Standard VISS-systemprofiler",
                        "Designerprofiler (Linea)",
                    ],
                    technicalFeatures: [
                        "50 mm minimal profilbredd",
                        "Anpassningsbart monteringsdjup",
                        "Stödjer tjocklekar 5-70 mm",
                        "Kompatibel med olika fyllningsmaterial",
                        "Brandsäkra förankringssystem",
                    ],
                    performance: {
                        fireProtection: "Upp till EI90",
                        structuralIntegrity: "Testad enligt strikta standarder",
                        thermalInsulation: "Certifierad värmeisolering",
                    },
                    applications: [
                        "Höghus och kontorskomplex",
                        "Offentliga byggnader med glasfasader",
                        "Transportterminaler",
                        "Kulturinstitutioner",
                        "Shoppingcenter",
                    ],
                },
            },
            {
                id: 11,
                title: "VISS Fire EI30 Fasad",
                description:
                    "Brandskyddsfasad med arkitektonisk flexibilitet och stora glasdimensioner",
                image: i11,
                features: [
                    "30 minuters brandskydd (EI30)",
                    "Modern design med minimala profiler",
                    "Energisnål konstruktion",
                    "Extra stora glasdimensioner (2300×4600 mm)",
                    "Flexibelt monteringsdjup (50-280 mm)",
                    "Multipla hörnutförandealternativ",
                    "Kompabilitet med olika glastillverkare",
                ],
                badge: "Fasadlösning",
                parameters: [
                    {
                        name: "Max glasdimensioner",
                        value: "2300×4600",
                        unit: "mm",
                    },
                    {
                        name: "Ansiktsbredd",
                        value: "50/60",
                        unit: "mm",
                    },
                    {
                        name: "Monteringsdjup",
                        value: "50-280",
                        unit: "mm",
                    },
                    {
                        name: "Fyllningselement tjocklek",
                        value: "15-70",
                        unit: "mm",
                    },
                    {
                        name: "Brandklass",
                        value: "EI30",
                        unit: "EN 1364-1/2",
                    },
                ],
                additionalInfo: {
                    description:
                        "VISS Fire EI30-fasader erbjuder arkitektonisk frihet utan kompromiss med brandsäkerhet. Systemet stödjer exceptionellt stora glasdimensioner och flera hörnutförande, vilket möjliggör kreativa fasadlösningar som uppfyller strikta funktionella och juridiska krav.",
                    certifications: [
                        "EN 1364-1/2 (Teststandard)",
                        "EN 13501-2 (Klassificering)",
                        "AbP P-2020/001 (Fallskyddsglas)",
                        "AbZ Z-14,4-465 (Klämmanslutning)",
                        "AbZ Z-14,4-467 (Stolpe-akterspegel)",
                        "Nationella brandgodkännanden",
                    ],
                    constructionTypes: [
                        "Stång-stång-stolpe installation",
                        "Stång-stöd-stolpe installation",
                        "Svetsade konstruktioner",
                        "Plug-in-utföranden",
                        "Integrerade dörrinsert",
                    ],
                    profileOptions: [
                        "Standard VISS-systemprofiler",
                        "Designprofiler (Linea)",
                    ],
                    technicalAdvantages: [
                        "Stöd för multipla glastillverkare",
                        "Varierande hörnutföranden",
                        "Anpassningsbart monteringsdjup",
                        "Minimala synliga profiler",
                        "Kompatibelt med olika fyllningselement",
                    ],
                    performance: {
                        structural: "Stödjer stora glasytor",
                        safety: "Fallskyddsgodkända lösningar",
                        design: "Arkitektoniskt renare linjer",
                        compatibility: "Integrerbart med entréområden",
                    },
                    applications: [
                        "Höghusfasader med brandsäkringskrav",
                        "Entrépartier och lobbyområden",
                        "Kontorsbyggnader med glaspartier",
                        "Offentliga byggnader",
                        "Shoppingcenter",
                    ],
                },
            },
            {
                id: 12,
                title: "VISS Fire EI60 Brandfasad",
                description:
                    "Premium brandfasadlösning med 60 minuters brandmotstånd och storformatsglas",
                image: i12,
                features: [
                    "60 minuters brandmotstånd (EI60)",
                    "Storformatsglas upp till 3240×1680 mm",
                    "Specialbeställda designlösningar",
                    "Hög statisk hållfasthet",
                    "Flexibelt monteringsdjup (50-280 mm)",
                    "Multipla hörndesignalternativ",
                    "Premium utförande",
                ],
                badge: "Premium",
                parameters: [
                    {
                        name: "Max glasdimensioner",
                        value: "3240×1680",
                        unit: "mm",
                    },
                    {
                        name: "Ansiktsbredd",
                        value: "50/60",
                        unit: "mm",
                    },
                    {
                        name: "Monteringsdjup",
                        value: "50-280",
                        unit: "mm",
                    },
                    {
                        name: "Fyllningselement tjocklek",
                        value: "36-70",
                        unit: "mm",
                    },
                    {
                        name: "Brandklass",
                        value: "EI60",
                        unit: "EN 1364-1/3",
                    },
                ],
                additionalInfo: {
                    description:
                        "VISS Fire EI60-fasader representerar premiumsegmentet av våra brandskyddslösningar, med fördubblad brandmotståndstid jämfört med EI30-system. Lösningen kombinerar exceptionell brandsäkerhet med arkitektonisk frihet för krävande projekt där både säkerhet och design är avgörande.",
                    certifications: [
                        "EN 1364-1/3 (Teststandard)",
                        "EN 1525-4 (Klassificering)",
                        "AbZ Z-14,4-465 (Klämmanslutning)",
                        "AbZ Z-14,4-467 (Stolpe-akterspegel)",
                        "Nationella brandgodkännanden",
                    ],
                    constructionTypes: [
                        "Stång-stång-stolpe installation",
                        "Stång-stöd-stolpe installation",
                        "Svetsade konstruktioner",
                        "Plug-in-utföranden",
                        "Integrerade dörrinsert",
                    ],
                    profileOptions: [
                        "Standard VISS-systemprofiler",
                        "Profiler med hög statisk hållfasthet",
                    ],
                    technicalAdvantages: [
                        "Stöd för extra stora glasytor",
                        "Testade hörndesignlösningar",
                        "Utökat tjockleksintervall för fyllning",
                        "Förstärkta profiler för högre prestanda",
                        "Specialanpassningsbara lösningar",
                    ],
                    performance: {
                        fireResistance: "60 minuters certifierat skydd",
                        structural: "Optimerad för storformat",
                        safety: "Fullgodkänd enligt strikta standarder",
                        design: "Arkitektoniskt anpassningsbar",
                    },
                    applications: [
                        "Exklusiva fastighetsprojekt",
                        "Högsäkerhetsbyggnader",
                        "Premium kontorskomplex",
                        "Luxushotell och resortanläggningar",
                        "Högt trafikerade offentliga miljöer",
                    ],
                    comparison: {
                        upgradeFromEI30: [
                            "Fördubblad brandskyddstid",
                            "Större glasdimensioner",
                            "Utökad tjocklekskapacitet",
                            "Högre statiska krav",
                            "Premium materialutförande",
                        ],
                    },
                },
            },
        ],
    };

    const product = allProducts[category]?.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const imageHoverVariants = {
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    const buttonHoverVariants = {
        hover: {
            backgroundColor: "#333",
            x: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <motion.div
            className="product-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="product-detail__container">
                {/* Image Column - Sticky */}
                <motion.div
                    className="product-detail__image-container"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}>
                    <motion.img
                        src={product.image}
                        alt={product.title}
                        className="product-detail__image"
                        variants={imageHoverVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    {product.badge && (
                        <motion.div
                            className="product-detail__badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}>
                            {product.badge}
                        </motion.div>
                    )}
                </motion.div>

                <motion.div
                    className="product-detail__content"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}>
                    <motion.h1
                        className="product-detail__title"
                        variants={itemVariants}>
                        {product.title}
                    </motion.h1>
                    <motion.h2
                        className="product-detail__subtitle"
                        variants={itemVariants}>
                        {product.description}
                    </motion.h2>

                    {/* Tab Switcher */}
                    <motion.div
                        className="product-detail__tabs"
                        variants={itemVariants}>
                        <button
                            className={`product-detail__tab ${
                                activeTab === "specs" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("specs")}>
                            Specifikationer
                        </button>
                        <button
                            className={`product-detail__tab ${
                                activeTab === "info" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("info")}>
                            Information
                        </button>
                        <button
                            className={`product-detail__tab ${
                                activeTab === "params" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("params")}>
                            Parametrar
                        </button>
                    </motion.div>

                    {/* Tab Contents */}
                    <div className="product-detail__tab-contents">
                        {/* Specifications Tab */}
                        <motion.div
                            className={`product-detail__tab-content ${
                                activeTab === "specs" ? "active" : ""
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeTab === "specs" ? 1 : 0 }}
                            transition={{ duration: 0.3 }}>
                            <motion.h3
                                className="product-detail__specs-title"
                                whileInView={{ x: [-10, 0], opacity: [0, 1] }}
                                viewport={{ once: true }}>
                                Tekniska specifikationer
                            </motion.h3>
                            <ul className="product-detail__specs-list">
                                {product.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        className="product-detail__specs-item"
                                        custom={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.1 * index,
                                            duration: 0.5,
                                        }}>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M20 6L9 17L4 12"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Information Tab */}
                        <motion.div
                            className={`product-detail__tab-content ${
                                activeTab === "info" ? "active" : ""
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeTab === "info" ? 1 : 0 }}
                            transition={{ duration: 0.3 }}>
                            <motion.h3
                                className="product-detail__info-title"
                                whileInView={{ x: [-10, 0], opacity: [0, 1] }}
                                viewport={{ once: true }}>
                                Ytterligare information
                            </motion.h3>
                            <div className="product-detail__info-content">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}>
                                    {category === "aluminium"
                                        ? "Våra aluminiumprodukter är utformade för att kombinera hög prestanda med elegant design. Med avancerad termisk brytningsteknik och anpassningsbara färgalternativ passar de perfekt i både moderna och traditionella miljöer."
                                        : "Våra stålprodukter erbjuder exceptionell hållbarhet och brandsäkerhet. Tillverkade av högkvalitativt stål med korrosionsskydd, dessa produkter är idealiska för krävande miljöer där säkerhet och lång livslängd är avgörande."}
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Parameters Tab */}
                        <motion.div
                            className={`product-detail__tab-content ${
                                activeTab === "params" ? "active" : ""
                            }`}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: activeTab === "params" ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}>
                            <motion.h3
                                className="product-detail__params-title"
                                whileInView={{ x: [-10, 0], opacity: [0, 1] }}
                                viewport={{ once: true }}>
                                Tekniska parametrar
                            </motion.h3>
                            <table className="parameters-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Värde</th>
                                        <th>Enhet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.parameters.map((param, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * index }}>
                                            <td>{param.name}</td>
                                            <td>{param.value}</td>
                                            <td>{param.unit}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>

                    <motion.div
                        className="product-detail__cta"
                        variants={itemVariants}>
                        <motion.button
                            className="product-detail__contact-btn"
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap="tap">
                            Kontakta oss för offert
                            <motion.svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                animate={{
                                    x: [0, 5, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                }}>
                                <path
                                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                                    fill="currentColor"
                                />
                            </motion.svg>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProductDetailPage;
