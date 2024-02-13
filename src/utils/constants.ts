/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import gitHash from "~git-hash";
import gitRemote from "~git-remote";

export {
    gitHash,
    gitRemote
};

export const WEBPACK_CHUNK = "webpackChunkdiscord_app";
export const REACT_GLOBAL = "Vencord.Webpack.Common.React";
export const VENCORD_USER_AGENT = `Vencord/${gitHash}${gitRemote ? ` (https://github.com/${gitRemote})` : ""}`;
export const SUPPORT_CHANNEL_ID = "1173342942858055721";

export interface Dev {
    name: string;
    id: bigint;
    badge?: boolean;
}

/**
 * If you made a plugin or substantial contribution, add yourself here.
 * This object is used for the plugin author list, as well as to add a contributor badge to your profile.
 * If you wish to stay fully anonymous, feel free to set ID to 0n.
 * If you are fine with attribution but don't want the badge, add badge: false
 */
export const Devs = /* #__PURE__*/ Object.freeze({
    Nobody: {
        name: "Nobody",
        id: 0n,
    },
    Ven: {
        name: "Fadewasheres",
        id: 1052339386320158780n
    },
    Arjix: {
        name: "Fadewas.heres",
        id: 0n
    },
    Cyn: {
        name: "Cynosphere",
        id: 0n
    },
    Megu: {
        name: "Megumin",
        id: 0n
    },
    botato: {
        name: "botato",
        id: 0n
    },
    obscurity: {
        name: "obscurity",
        id: 0n,
    },
    rushii: {
        name: "rushii",
        id: 0n
    },
    Glitch: {
        name: "Glitchy",
        id: 0n
    },
    Samu: {
        name: "Samu",
        id: 0n,
    },
    Nyako: {
        name: "nyako",
        id: 0n
    },
    MaiKokain: {
        name: "Mai",
        id: 0n
    },
    echo: {
        name: "ECHO",
        id: 0n
    },
    katlyn: {
        name: "katlyn",
        id: 0n
    },
    nea: {
        name: "nea",
        id: 0n,
    },
    Nuckyz: {
        name: "Nuckyz",
        id: 0n
    },
    D3SOX: {
        name: "D3SOX",
        id: 0n
    },
    Nickyux: {
        name: "Nickyux",
        id: 0n
    },
    mantikafasi: {
        name: "mantikafasi",
        id: 0n
    },
    Xinto: {
        name: "Xinto",
        id: 0n
    },
    JacobTm: {
        name: "Jacob.Tm",
        id: 0n
    },
    DustyAngel47: {
        name: "DustyAngel47",
        id: 0n
    },
    BanTheNons: {
        name: "BanTheNons",
        id: 0n
    },
    BigDuck: {
        name: "BigDuck",
        id: 0n
    },
    AverageReactEnjoyer: {
        name: "Average React Enjoyer",
        id: 0n
    },
    adryd: {
        name: "adryd",
        id: 0n
    },
    Tyman: {
        name: "Tyman",
        id: 0n
    },
    afn: {
        name: "afn",
        id: 0n
    },
    KraXen72: {
        name: "KraXen72",
        id: 0n
    },
    kemo: {
        name: "kemo",
        id: 0n
    },
    dzshn: {
        name: "dzshn",
        id: 0n
    },
    Ducko: {
        name: "Ducko",
        id: 0n
    },
    jewdev: {
        name: "jewdev",
        id: 222369866529636353n
    },
    Luna: {
        name: "Luny",
        id: 821472922140803112n
    },
    Vap: {
        name: "Vap0r1ze",
        id: 454072114492866560n
    },
    KingFish: {
        name: "King Fish",
        id: 499400512559382538n
    },
    Commandtechno: {
        name: "Commandtechno",
        id: 296776625432035328n,
    },
    TheSun: {
        name: "ActuallyTheSun",
        id: 406028027768733696n
    },
    axyie: {
        name: "'ax",
        id: 273562710745284628n,
    },
    pointy: {
        name: "pointy",
        id: 99914384989519872n
    },
    SammCheese: {
        name: "Samm-Cheese",
        id: 372148345894076416n
    },
    zt: {
        name: "zt",
        id: 289556910426816513n
    },
    captain: {
        name: "Captain",
        id: 347366054806159360n
    },
    nick: {
        name: "nick",
        id: 347884694408265729n,
        badge: false
    },
    whqwert: {
        name: "whqwert",
        id: 586239091520176128n
    },
    lewisakura: {
        name: "lewisakura",
        id: 96269247411400704n
    },
    RuiNtD: {
        name: "RuiNtD",
        id: 157917665162297344n
    },
    hunt: {
        name: "hunt-g",
        id: 222800179697287168n
    },
    cloudburst: {
        name: "cloudburst",
        id: 892128204150685769n
    },
    Aria: {
        name: "Syncxv",
        id: 549244932213309442n,
    },
    TheKodeToad: {
        name: "TheKodeToad",
        id: 706152404072267788n
    },
    LordElias: {
        name: "LordElias",
        id: 319460781567639554n
    },
    juby: {
        name: "Juby210",
        id: 324622488644616195n
    },
    Alyxia: {
        name: "Alyxia Sother",
        id: 952185386350829688n
    },
    Remty: {
        name: "Remty",
        id: 335055032204656642n
    },
    skyevg: {
        name: "skyevg",
        id: 1090310844283363348n
    },
    Dziurwa: {
        name: "Dziurwa",
        id: 1001086404203389018n
    },
    AutumnVN: {
        name: "AutumnVN",
        id: 393694671383166998n
    },
    pylix: {
        name: "pylix",
        id: 492949202121261067n
    },
    Tyler: {
        name: "\\\\GGTyler\\\\",
        id: 143117463788191746n
    },
    RyanCaoDev: {
        name: "RyanCaoDev",
        id: 952235800110694471n,
    },
    Strencher: {
        name: "Strencher",
        id: 415849376598982656n
    },
    FieryFlames: {
        name: "Fiery",
        id: 890228870559698955n
    },
    KannaDev: {
        name: "Kanna",
        id: 317728561106518019n
    },
    carince: {
        name: "carince",
        id: 818323528755314698n
    },
    PandaNinjas: {
        name: "PandaNinjas",
        id: 455128749071925248n
    },
    CatNoir: {
        name: "CatNoir",
        id: 260371016348336128n
    },
    outfoxxed: {
        name: "outfoxxed",
        id: 837425748435796060n
    },
    UwUDev: {
        name: "UwU",
        id: 691413039156690994n,
    },
    amia: {
        name: "amia",
        id: 142007603549962240n
    },
    phil: {
        name: "phil",
        id: 305288513941667851n
    },
    ImLvna: {
        name: "Luna <3",
        id: 799319081723232267n
    },
    rad: {
        name: "rad",
        id: 610945092504780823n
    },
    AndrewDLO: {
        name: "Andrew-DLO",
        id: 434135504792059917n
    },
    HypedDomi: {
        name: "HypedDomi",
        id: 354191516979429376n
    },
    Rini: {
        name: "Rini",
        id: 1079479184478441643n
    },
    castdrian: {
        name: "castdrian",
        id: 224617799434108928n
    },
    Arrow: {
        name: "arrow",
        id: 958158495302176778n
    },
    bb010g: {
        name: "bb010g",
        id: 72791153467990016n,
    },
    Dolfies: {
        name: "Dolfies",
        id: 852892297661906993n,
    },
    RuukuLada: {
        name: "RuukuLada",
        id: 119705748346241027n,
    },
    blahajZip: {
        name: "blahaj.zip",
        id: 683954422241427471n,
    },
    archeruwu: {
        name: "archer_uwu",
        id: 0n
    },
    ProffDea: {
        name: "ProffDea",
        id: 0n
    },
    ant0n: {
        name: "ant0n",
        id: 0n
    },
    nexpid: {
        name: "Nexpid",
        id: 0n
    },
    FoxStorm1: {
        name: "FoxStorm1",
        id: 0n
    },
    camila314: {
        name: "camila314",
        id: 0n
    },
    Wolfie: {
        name: "wolfieeeeeeee",
        id: 0n
    },
    ryan: {
        name: "ryan",
        id: 0n
    },
    thororen: {
        name: "thororen",
        id: 0n
    },
    F53: {
        name: "F53",
        id: 0n
    },
    philipbry: {
        name: "philipbry",
        id: 0n
    },
    MrDiamond: {
        name: "MrDiamond",
        id: 0n
    },
    Shalev: {
        name: "Shalev4R",
        id: 0n
    },
    fres: {
        name: "fres",
        id: 0n
    },
    ImpishMoxxie: {
        name: "Moxxie",
        id: 0n
    },
    nakoyasha: {
        name: "nakoyasha",
        id: 0n
    },
    SimplyData: {
        name: "SimplyData",
        id: 0n
    },
    arHSM: {
        name: "arHSM",
        id: 0n
    },
    Korbo: {
        name: "Korbo",
        id: 0n
    },
    SaucyDuck: {
        name: "SaucyDuck",
        id: 0n
    },
    Dams: {
        name: "Dams",
        id: 0n
    },
    maisymoe: {
        name: "maisy",
        id: 0n,
    },
    GeorgeV22: {
        name: "GeorgeV22",
        id: 0n,
    },
    Grzesiek11: {
        name: "Grzesiek11",
        id: 0n,
    },
    KawaiianPizza: {
        name: "KawaiianPizza",
        id: 0n,
    },
    Gingi: {
        name: "0xGingi",
        id: 0n,
    },
    Kyuu: {
        name: "Kyuuhachi",
        id: 0n,
    },
    Samwich: {
        name: "Samwich",
        id: 0n,
    },
    Perny: {
        name: "Perny",
        id: 0n,
    },
    coolelectronics: {
        name: "coolelectronics",
        id: 0n,
    },
    varram: {
        name: "varram",
        id: 0n
    },
    jaxx: {
        name: "Jaxx",
        id: 0n,
    },
} satisfies Record<string, Dev>);

// iife so #__PURE__ works correctly
export const DevsById = /* #__PURE__*/ (() =>
    Object.freeze(Object.fromEntries(
        Object.entries(Devs)
            .filter(d => d[1].id !== 0n)
            .map(([_, v]) => [v.id, v] as const)
    ))
)() as Record<string, Dev>;
