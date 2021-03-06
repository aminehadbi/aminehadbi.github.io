app = angular.module("Equisym", ["ngMaterial", "ngMessages", "ngSanitize", "ngCsv", "nvd3", "pascalprecht.translate", "ngStorage", "printThis", "appConfig", "MainCtrl"]), angular.module("appConfig", []).config(["$mdThemingProvider", "$mdIconProvider", "$mdThemingProvider", "$translateProvider", function (a, e, a, t) {
    iconp = e.defaultFontSet("fas"), angular.forEach({
        "md-plus": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        "md-close": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
        "md-arrow-back": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
        "md-apps": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(3, 3)"><circle cx="2" cy="2" r="2"></circle><circle cx="2" cy="9" r="2"></circle><circle cx="2" cy="16" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="9" cy="9" r="2"></circle><circle cx="16" cy="2" r="2"></circle><circle cx="16" cy="9" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="9" cy="16" r="2"></circle></g></svg>',
        "md-enter": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/></svg>',
        "md-save": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
        "md-delete": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        "md-bars": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
        "md-more-v": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>',
        "md-search": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        "md-chevron-down": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        "md-check": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
        "md-edit": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        "md-settings": '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>'
    }, function (a, e) {
        iconp.icon(e, "data:image/svg+xml, " + a, 24)
    }), a.definePalette("tstarPallete", {
        50: "f5f5f5",
        100: "e8e8e8",
        200: "dcdcdc",
        300: "cfcfcf",
        400: "bababa",
        500: "b0b0b0",
        600: "9d9d9d",
        700: "898989",
        800: "767676",
        900: "626262",
        A100: "444444",
        A200: "313131",
        A400: "1d1d1d",
        A700: "0a0a0a",
        contrastDefaultColor: "light",
        contrastDarkColors: ["50", "100", "200", "300", "400", "500", "600", "700", "800", "A100", "A200", "A400", "A700"],
        contrastLightColors: ["900"]
    }), a.theme("default").primaryPalette("tstarPallete");
    var r = {
        en: {
            APP_NAME: "Equity Curve Simulator",
            PARAMETERS: "Parameters",
            STARTING_EQ: "Starting Equity",
            RISK_PER_TRADE: "Risk Per Trade",
            WIN_PROB: "Win Probability",
            WIN_LOSS_REL: "Win:Loss Ratio",
            TRADES_PER_RUN: "Trades Per Run",
            RUNS_LINES: "Scenarios (Lines)",
            GRAPH_SCALE: "Graph Scale",
            RUN_SIMULATION: "Run Simulation",
            GRAPH: "Graph",
            TRADE: "Trade",
            EQ: "Equity",
            MAX: "Maximum",
            MIN: "Minimum",
            AVG: "Average",
            RESULTS: "Results",
            AVG_PERFORMANCE: "Avg. Performance",
            MAX_DRAWDOWN: "Max. Drawdown",
            AVG_MAX_DRAWDOWN: "Avg. Max. Drawdown",
            RETURN_MAX_DRAWDOWN: "Return Over Max Drawdown",
            MAX_EQ: "Max. Equity",
            MIN_EQ: "Min. Equity",
            MAX_CONSEC_WINS: "Max. Consecutive Wins",
            MAX_CONSEC_LOSES: "Max. Consecutive Losses",
            EXPECTATION: "Expectation",
            KELLY: "Kelly Criterion",
            DOWNLOAD_DATA: "Download Data",
            PRINT: "Print",
            GOT_IT: "Got It",
            H_AVG_PERFORMANCE: "Measures the average of the returns on the investments done over a specific period. It can be positive, representing a gain in value, or negative, representing a loss",
            H_MAX_DRAWDOWN: "Maximum DrawDown (MDD) is an indicator of downside risk over a specified time period. MDD = (Trough Value – Peak Value) ÷ Peak Value",
            H_AVG_MAX_DRAWDOWN: "The maximum drawdown value of each possible scenario (each line) is summed and then divided by the number of scenarios",
            H_RETURN_MAX_DRAWDOWN: "Return over maximum drawdown (RoMaD) is a risk-adjusted return metric. RoMaD = Portfolio Return / Max. Drawdown",
            H_MAX_EQ: "Is the highest equity value obtained in all the possible scenarios",
            H_MIN_EQ: "Is the lowest equity value obtained in all the possible scenarios",
            H_MAX_CONSEC_WINS: "Is the maximum number of consecutive wins on the trades",
            H_MAX_CONSEC_LOSES: "Is the maximum number of consecutive losses on the trades",
            H_EXPECTATION: "The mathematical expectation of any bet is defined as follows: the sum of all possible gains and losses multiplied by their relative probabilities. Written as a formula: e= (w × p) + (-v × 1). e = mathematical expectation, w = gain on the winning bet, p = probability of the win, v = value of the loss, l = probability of the loss",
            H_KELLY: "In probability theory and intertemporal portfolio choice, the Kelly criterion, Kelly strategy, Kelly formula, or Kelly bet is a formula used to determine the optimal size of a series of bets in order to maximize the logarithm of wealth"
        },
        fr: {
            APP_NAME: "Simulateur de courbe de profit",
            PARAMETERS: "Paramètres",
            STARTING_EQ: "Capital initial",
            RISK_PER_TRADE: "Risque par transaction",
            WIN_PROB: "Probabilité de gains",
            WIN_LOSS_REL: "Ratio Gains:Pertes",
            TRADES_PER_RUN: "Transactions par scénario",
            RUNS_LINES: "Nombre de simulations (Lignes)",
            GRAPH_SCALE: "Échelle du graphique",
            RUN_SIMULATION: "Lancer la simulation",
            GRAPH: "Graphique",
            TRADE: "Transaction",
            EQ: "Capital",
            MAX: "Maximum",
            MIN: "Minimum",
            AVG: "Moyenne",
            RESULTS: "Résultats",
            AVG_PERFORMANCE: "Performance moyenne",
            MAX_DRAWDOWN: "Baisse maximale",
            AVG_MAX_DRAWDOWN: "Moyenne des baisses maximales",
            RETURN_MAX_DRAWDOWN: "Rendement par rapport à la baisse maximale",
            MAX_EQ: "Capital maximum",
            MIN_EQ: "Capital minimum",
            MAX_CONSEC_WINS: "Nombre maximum de gains consécutifs",
            MAX_CONSEC_LOSES: "Nombre maximum de pertes consécutives",
            EXPECTATION: "Espérance",
            KELLY: "Critère de Kelly",
            DOWNLOAD_DATA: "Téléchargement",
            PRINT: "Imprimer",
            GOT_IT: "Compris",
            H_AVG_PERFORMANCE: "Mesure la moyenne des rendements des investissements réalisés sur une période donnée. Elle peut être positive, représentant un gain de valeur, ou négative, représentant une perte",
            H_MAX_DRAWDOWN: "Le Maximum Drawdown (MDD) est un indicateur du risque de baisse sur une période de temps spécifiée. MDD = (Trough Value - Peak Value) ÷ Peak Value",
            H_AVG_MAX_DRAWDOWN: "La valeur de tirage maximum de chaque scénario possible (chaque ligne) est additionnée puis divisée par le nombre de scénarios",
            H_RETURN_MAX_DRAWDOWN: "Le rendement par rapport au tirage maximal (RoMaD) est une mesure de rendement ajustée au risque. RoMaD = rendement du portefeuille / tirage max.",
            H_MAX_EQ: "Mesure la valeur nette la plus élevée obtenue dans tous les scénarios possibles",
            H_MIN_EQ: "Mesure la valeur nette la plus basse obtenue dans tous les scénarios possibles",
            H_MAX_CONSEC_WINS: "Mesure le nombre maximum de victoires consécutives sur les trades",
            H_MAX_CONSEC_LOSES: "Mesure le nombre maximum de pertes consécutives sur les trades",
            H_EXPECTATION: "L'espérance mathématique de tout pari est définie comme suit: la somme de tous les gains et pertes possibles multipliées par leurs probabilités relatives. Écrit comme une formule: e = (w × p) + (-v × 1). E = espérance mathématique, w = gain sur le pari gagnant, p = probabilité de gain, v = valeur de la perte, l = probabilité de la perte ",
            H_KELLY: "En théorie des probabilités et choix de portefeuille intertemporel, le critère de Kelly est une formule utilisée pour déterminer la taille optimale d'une série de paris afin de maximiser le logarithme de la richesse"
        }  
    };
    t.useSanitizeValueStrategy("escape").translations("en", r.en).translations("fr", r.fr).preferredLanguage("en")
}]), angular.module("MainCtrl", []).controller("MainCtrl", ["$scope", "$rootScope", "$timeout", "$translate", "$mdDialog", "$localStorage", "$window", function (a, e, t, r, n, o, i) {
    Rs = a;
    var s = {},
        l = r.instant;
    Rs.Inputs = {
        currencySymbol: "$",
        startingEq: 100,
        winProb: 50,
        winRatio: 2,
        trades: 100,
        runs: 10,
        risk: 1,
        riskType: "Percent",
        scale: "Normal",
        calculating: !1,
        calcDone: !1
    }, s.Control = {}, s.gamble = (() => {
        return Math.floor(100 * Math.random()) < Rs.Inputs.winProb
    }), s.getRiskedVal = (a => {
        if (a <= 0) return 0;
        var e = "Percent" == Rs.Inputs.riskType ? a * Rs.Inputs.risk / 100 : Math.min(Rs.Inputs.risk, a);
        return e = Math.min(e, a)
    }), s.calcEq = ((a, e, t) => {
        if (a <= 0) return 0;
        var r = e * Rs.Inputs.winRatio,
            n = t ? a + r : a - e;
        return n = Math.max(n, 0), s.actRun.eq = n
    }), s.trade = (() => {
        1 == s.Control.currentTrade && (s.actRun = {
            run: s.Control.currentRun,
            eq: angular.copy(Rs.Inputs.startingEq),
            maxEq: 0,
            maxDD: 0,
            maxDDAbs: 0,
            trades: []
        }, s.Control.CW = 0, s.Control.CL = 0);
        var a = s.gamble(),
            e = s.getRiskedVal(s.actRun.eq),
            t = {
                run: s.Control.currentRun,
                trade: s.Control.currentTrade,
                tradeGlob: s.Control.currentTradeGlob,
                risked: e,
                win: a,
                eq: s.calcEq(s.actRun.eq, e, a),
                cw: s.Control.CW,
                cl: s.Control.CL
            };
        s.actRun.maxEq = Math.max(s.actRun.maxEq, t.eq), t.dd = (s.actRun.maxEq - t.eq) / s.actRun.maxEq, t.dd > s.actRun.maxDD && (s.actRun.maxDD = t.dd, s.actRun.maxDDAbs = t.dd * s.actRun.maxEq), s.actRun.trades.push(t), s.Control.currentTradeGlob++, a ? (s.Control.CW++, s.Control.CL = 0) : (s.Control.CL++, s.Control.CW = 0), s.Control.currentTrade >= Rs.Inputs.trades ? (s.Results.push(s.actRun), s.Control.currentTrade = 1, s.Control.currentRun++) : s.Control.currentTrade++, s.Control.currentTradeGlob <= s.Control.totalTrades || (console.log("Termine"), s.finishCalc())
    }), Rs.run = (() => {
        Rs.Inputs.calculating || (Rs.reset(), Rs.Inputs.calculating = !0, Rs.Inputs.calcDone = !1, Rs.chartData = [], console.log("Starting"), t(() => {
            for (var a = 1; a <= s.Control.totalTrades; a++) s.trade()
        }, 1500))
    }), Rs.reset = (() => {
        s.Results = [], s.Control = {}, s.Control.currentRun = 1, s.Control.currentTrade = 1, s.Control.currentTradeGlob = 1, s.Control.totalTrades = Rs.Inputs.runs * Rs.Inputs.trades, s.Control.CW = 0, s.Control.CL = 0, s.Control.chartFixed = !1
    }), s.finishCalc = (() => {
        var a = [];
        s.TData = [], s.Results.forEach(e => {
            var t = {
                key: "Run #" + e.run,
                strokeWidth: .5,
                values: [{
                    x: 0,
                    y: Rs.Inputs.startingEq
                }]
            };
            e.trades.forEach(a => {
                t.values.push({
                    x: a.trade,
                    y: a.eq
                }), 1 == e.run && s.TData.push({
                    sum: 0,
                    min: a.eq,
                    max: a.eq
                }), TD = s.TData[a.trade - 1], TD.sum += a.eq, TD.min = Math.min(TD.min, a.eq), TD.max = Math.max(TD.max, a.eq), 1 == a.tradeGlob ? (s.Control.minEq = a.eq, s.Control.maxEq = a.eq, s.Control.maxCW = 0, s.Control.maxCL = 0) : (s.Control.minEq = Math.min(s.Control.minEq, a.eq), s.Control.maxEq = Math.max(s.Control.maxEq, a.eq), s.Control.maxCW = Math.max(s.Control.maxCW, a.cw), s.Control.maxCL = Math.max(s.Control.maxCL, a.cl))
            }), a.push(t)
        });
        var e = [{
                x: 0,
                y: Rs.Inputs.startingEq,
                size: 5
            }],
            t = [];
        s.Control.maxTAvg = 0, s.TData.forEach((a, r) => {
            a.avg = a.sum / Rs.Inputs.runs, e.push({
                x: r + 1,
                y: a.avg,
                size: 70
            }), t.push({
                x: r + 1,
                y: Rs.Inputs.startingEq
            }), s.Control.lastTAvg = a.avg, s.Control.maxTAvg = Math.max(s.Control.maxTAvg, a.avg)
        }), a.push({
            key: "Average",
            strokeWidth: 3,
            color: "black",
            values: e
        }), s.calcVars();
        var r = Math.ceil(s.Control.maxEq).toString().length;
        r = Math.max(r, 2), Rs.chartOps.chart.margin.left = 10 * r + 20, Rs.chartOps.chart.yAxis.axisLabelDistance = 10 * r - 50, Rs.chartData = a, Rs.Inputs.calculating = !1, Rs.Inputs.calcDone = !0
    }), s.calcVars = (() => {
        Rs.Vars = v = {}, g = Rs.Inputs, c = s.Control, v.Accuracy = g.winProb / 100, v.PayOff = g.winRatio, v.Kelly = d3.format(",.2f")(v.Accuracy - (1 - v.Accuracy) / v.PayOff), v.Expectation = d3.format(",.2f")(v.Accuracy * v.PayOff - (1 - v.Accuracy)), v.minEq = d3.format(",.2f")(c.minEq), v.maxEq = d3.format(",.2f")(c.maxEq), v.maxCW = d3.format(",.0f")(c.maxCW), v.maxCL = d3.format(",.0f")(c.maxCL), v.avgMaxDD = 0, v.maxDD = 0, v.maxDDAbs = 0, s.Results.forEach(a => {
            v.avgMaxDD += a.maxDD, v.maxDD = Math.max(v.maxDD, a.maxDD), v.maxDDAbs = Math.max(v.maxDDAbs, a.maxDDAbs)
        }), v.maxDD = d3.format(",.2%")(v.maxDD), v.maxDDAbs = d3.format(",.2f")(v.maxDDAbs), v.avgMaxDDRaw = v.avgMaxDD / g.runs, v.avgMaxDD = d3.format(",.2%")(v.avgMaxDDRaw), v.avgPerfAbs = d3.format(",.2f")(c.lastTAvg - g.startingEq), v.avgPerf = d3.format(",.2%")((c.lastTAvg - g.startingEq) / g.startingEq), v.retMaxDD = d3.format(",.0f")((v.avgPerfAbs) / (Math.abs(v.avgMaxDDRaw)))*0.01, Rs.Vars = v
    }), Rs.chartOps = {
        chart: {
            type: "lineChart",
            height: 500,
            margin: {
                top: 10,
                right: 20,
                bottom: 40,
                left: 50
            },
            pointSize: a => a.size || 4,
            pointShape: a => a.shape || "circle",
            x: function (a) {
                return a.x
            },
            y: function (a) {
                if (a) return a.y
            },
            noData: "No Data",
            useInteractiveGuideline: !0,
            showLegend: !1,
            xAxis: {
                axisLabel: ""
            },
            yAxis: {
                axisLabel: "",
                tickFormat: function (a) {
                    return d3.format(",.0f")(a)
                },
                axisLabelDistance: -20
            },
            color: ["#f5f5f5", "#e8e8e8", "#dcdcdc", "#cfcfcf", "#bababa", "#b0b0b0", "#9d9d9d", "#898989", "#767676", "#626262", "#444444", "#313131", "#1d1d1d", "#0a0a0a", "#0a0a0a"],
            interpolate: "monotone",
            interactiveLayer: {
                showGuideLine: !0,
                tooltip: {
                    contentGenerator: a => {
                        if (null === a || 0 == a.value) return "";
                        TD = s.TData[a.value - 1];
                        var e = "<table><thead><tr><td class=x-value colspan=2><span class='tooltip text-bold text-green'>" + l("TRADE") + " #" + a.value + "</span></td></tr></thead><tbody>";
                        return e += "<tr><td class=key>" + l("AVG") + ":</td><td class=value>" + d3.format(",.2f")(TD.avg) + "<td><tr>", e += "<tr><td class=key>" + l("MAX") + ":</td><td class=value>" + d3.format(",.2f")(TD.max) + "<td><tr>", e += "<tr><td class=key>" + l("MIN") + ":</td><td class=value>" + d3.format(",.2f")(TD.min) + "<td><tr>", e += "</tbody></table>"
                    }
                }
            },
            dispatch: {
                renderEnd: function (a) {
                    s.fixChart()
                }
            }
        }
    }, s.fixChart = (() => {
        s.Control.chartFixed || (window.dispatchEvent(new Event("resize")), s.Control.chartFixed = !0)
    });
    var d = window.innerHeight - 110;
    d = Math.min(d, 500), Rs.chartOps.chart.height = d, Rs.chartConfig = {
        deepWatchData: !1,
        deepWatchDataDepth: 0
    }, Rs.CSVHeaders = ["Run", "Trade", "Win", "Equity"], Rs.getCSV = (() => {
        var a = [];
        return s.Results.forEach(e => {
            e.trades.forEach(t => {
                a.push([e.run, t.trade, t.win, d3.format(".2f")(t.eq)])
            })
        }), a
    }), Rs.IndHelp = ((a, e) => {
        n.show(n.alert().clickOutsideToClose(!0).targetEvent(a).fullscreen(!1).title(l(e)).textContent(l("H_" + e)).ok(l("GOT_IT")))
    }), Rs.Languages = [{
        id: "en",
        name: "English"
    }, {
        id: "fr",
        name: "Francais"
    }];
    var m = i.navigator.language || i.navigator.userLanguage;
    m ? (m = m.substring(0, 2), -1 == ["en", "fr"].indexOf(m) && (m = "en")) : m = "en", Rs.Storage = o.$default({
        Lang: m
    }), Rs.changeLang = (() => {
        r.use(Rs.Storage.Lang), Rs.chartOps.chart.xAxis.axisLabel = l("TRADE") + " #", Rs.chartOps.chart.yAxis.axisLabel = l("EQ") + " (" + Rs.Inputs.currencySymbol + ")"
    }), Rs.changeLang(), Rs.run();
    for (var u = i.location.href.split("/"), h = u[0] + "/", g = 2; g < u.length - 1; g++) h = h + "/" + u[g];
    Rs.baseURL = h + "/", Rs.Version = 202009220921
}]);
