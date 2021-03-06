var rankingQuarters = ["Mar-12", "Jun-12", "Sep-12", "Dec-12", "Mar-13", "Jun-13", "Sep-13", "Dec-13", "Mar-14", "Jun-14", "Sep-14", "Dec-14", "Mar-15", "Jun-15", "Sep-15", "Dec-15"];


var newData = [{"name":"Argentina","code":"AR"},
{"name":"Australia","code":"AU"},
{"name":"Austria","code":"AT"},
{"name":"Belgium","code":"BE"},
{"name":"Brazil","code":"BR"},
{"name":"Canada","code":"CA"},
{"name":"Chile","code":"CL"},
{"name":"China","code":"CN"},
{"name":"Colombia","code":"CO"},
{"name":"Croatia","code":"HR"},
{"name":"Czech Republic","code":"CZ"},
{"name":"Denmark","code":"DK"},
{"name":"Egypt","code":"EG"},
{"name":"Finland","code":"FI"},
{"name":"France","code":"FR"},
{"name":"Germany","code":"DE"},
{"name":"Greece","code":"GR"},
{"name":"Hungary","code":"HU"},
{"name":"India","code":"IN"},
{"name":"Indonesia","code":"ID"},
{"name":"Ireland","code":"IE"},
{"name":"Israel","code":"IL"},
{"name":"Italy","code":"IT"},
{"name":"Japan","code":"JP"},
{"name":"Malaysia","code":"MY"},
{"name":"Mexico","code":"MX"},
{"name":"Netherlands","code":"NL"},
{"name":"New Zealand","code":"NZ"},
{"name":"Nigeria","code":"NG"},
{"name":"Norway","code":"NO"},
{"name":"Peru","code":"PE"},
{"name":"Philippines","code":"PH"},
{"name":"Poland","code":"PL"},
{"name":"Portugal","code":"PT"},
{"name":"Russia","code":"RU"},
{"name":"Singapore","code":"SG"},
{"name":"Slovakia","code":"SK"},
{"name":"Slovenia","code":"SI"},
{"name":"South Africa","code":"ZA"},
{"name":"South Korea","code":"KR"},
{"name":"Spain","code":"ES"},
{"name":"Sweden","code":"SE"},
{"name":"Switzerland","code":"CH"},
{"name":"Taiwan","code":"TW"},
{"name":"Thailand","code":"TH"},
{"name":"Turkey","code":"TR"},
{"name":"Ukraine","code":"UA"},
{"name":"United Kingdom","code":"UK"},
{"name":"USA","code":"US"},
{"name":"Venezuela","code":"VE"}];

var mapData = [{"name":"Argentina","code":"AR"},
{"name":"Australia","code":"AU"},
{"name":"Austria","code":"AT"},
{"name":"Belgium","code":"BE"},
{"name":"Brazil","code":"BR"},
{"name":"Canada","code":"CA"},
{"name":"Chile","code":"CL"},
{"name":"China","code":"CN"},
{"name":"Colombia","code":"CO"},
{"name":"Croatia","code":"HR"},
{"name":"Czech Republic","code":"CZ"},
{"name":"Denmark","code":"DK"},
{"name":"Egypt","code":"EG"},
{"name":"Finland","code":"FI"},
{"name":"France","code":"FR"},
{"name":"Germany","code":"DE"},
{"name":"Greece","code":"GR"},
{"name":"Hungary","code":"HU"},
{"name":"India","code":"IN"},
{"name":"Indonesia","code":"ID"},
{"name":"Ireland","code":"IE"},
{"name":"Israel","code":"IL"},
{"name":"Italy","code":"IT"},
{"name":"Japan","code":"JP"},
{"name":"Malaysia","code":"MY"},
{"name":"Mexico","code":"MX"},
{"name":"Netherlands","code":"NL"},
{"name":"New Zealand","code":"NZ"},
{"name":"Nigeria","code":"NG"},
{"name":"Norway","code":"NO"},
{"name":"Peru","code":"PE"},
{"name":"Philippines","code":"PH"},
{"name":"Poland","code":"PL"},
{"name":"Portugal","code":"PT"},
{"name":"Russia","code":"RU"},
{"name":"Singapore","code":"SG"},
{"name":"Slovakia","code":"SK"},
{"name":"Slovenia","code":"SI"},
{"name":"South Africa","code":"ZA"},
{"name":"South Korea","code":"KR"},
{"name":"Spain","code":"ES"},
{"name":"Sweden","code":"SE"},
{"name":"Switzerland","code":"CH"},
{"name":"Taiwan","code":"TW"},
{"name":"Thailand","code":"TH"},
{"name":"Turkey","code":"TR"},
{"name":"Ukraine","code":"UA"},
{"name":"United Kingdom","code":"UK"},
{"name":"USA","code":"US"},
{"name":"Venezuela","code":"VE"}];


var fiscalSpace = {
  "Argentina":[-0.29,-0.35,-0.34,-0.38,-0.41,-0.44,-0.42,-0.57,-0.56,-0.95,-0.73,-0.83,-0.70,-0.81,-0.82,-0.85],
  "Australia":[0.88,0.83,0.85,0.91,0.90,0.87,0.88,0.82,0.84,0.73,0.75,0.79,0.71,0.73,0.78,0.78],
  "Austria":[0.12,0.14,0.25,0.25,0.26,0.46,0.46,0.39,0.32,0.36,0.41,0.55,0.56,0.68,0.70,0.59],
  "Belgium":[-0.30,-0.25,-0.26,-0.29,-0.29,-0.31,-0.31,-0.16,-0.22,-0.18,-0.17,-0.17,0.06,0.12,0.15,0.23],
  "Brazil":[-0.07,-0.07,-0.05,0.08,0.09,0.16,0.14,-0.06,0.00,-0.08,-0.16,-0.15,-0.31,-0.37,-0.49,-0.48],
  "Canada":[0.68,0.70,0.68,0.72,0.70,0.71,0.71,0.74,0.74,0.69,0.69,0.69,0.71,0.75,0.75,0.76],
  "Chile":[0.97,0.85,0.83,0.88,0.88,0.83,0.82,0.82,0.81,0.66,0.38,0.26,0.54,0.44,0.42,0.37],
  "China":[0.87,0.77,0.74,0.77,0.76,0.72,0.71,0.75,0.67,0.71,0.68,0.48,0.46,0.30,0.32,0.25],
  "Colombia":[-0.17,-0.07,-0.04,0.11,0.09,0.09,0.08,0.01,0.00,0.00,0.00,0.04,-0.07,-0.16,-0.24,-0.27],
  "Croatia":[-0.37,-0.33,-0.37,-0.37,-0.36,-0.42,-0.44,-0.32,-0.31,-0.31,-0.31,-0.35,-0.74,-0.79,-0.87,-0.89],
  "CzechRepublic":[-0.10,-0.04,-0.04,-0.10,-0.11,-0.02,0.01,-0.04,0.00,0.03,0.16,0.25,0.33,0.51,0.57,0.64],
  "Denmark":[0.72,0.60,0.77,0.89,0.88,0.81,0.81,0.88,0.90,0.86,0.85,0.83,0.89,0.89,0.85,0.85],
  "Egypt":[-1.40,-1.25,-1.23,-1.34,-1.39,-1.41,-1.38,-1.55,-1.61,-1.42,-1.48,-1.47,-1.40,-1.37,-1.30,-1.31],
  "Finland":[1.45,1.26,1.24,1.31,1.28,1.20,1.20,1.22,1.21,1.18,1.22,1.19,1.15,1.14,1.15,1.14],
  "France":[-0.37,-0.31,-0.31,-0.29,-0.32,-0.36,-0.36,-0.40,-0.41,-0.50,-0.45,-0.49,-0.50,-0.48,-0.45,-0.44],
  "Germany":[0.67,0.69,0.67,0.70,0.70,0.72,0.73,0.77,0.77,0.78,0.76,0.76,0.77,0.81,0.79,0.79],
  "Greece":[-2.05,-2.00,-1.97,-2.07,-1.91,-1.65,-1.64,-1.48,-1.41,-1.46,-1.36,-1.30,-1.39,-1.37,-1.69,-1.67],
  "Hungary":[-1.33,-1.30,-1.29,-1.25,-1.18,-1.19,-1.20,-1.09,-1.10,-1.19,-1.26,-1.26,-1.09,-1.05,-1.06,-1.04],
  "India":[-0.43,-0.79,-0.79,-0.66,-0.71,-0.62,-0.62,-0.74,-0.67,-0.63,-0.52,-0.49,-0.52,-0.54,-0.53,-0.53],
  "Indonesia":[0.18,0.12,0.10,0.05,0.03,-0.02,0.00,0.00,0.00,-0.07,-0.06,-0.03,0.08,0.03,0.02,0.00],
  "Ireland":[-1.39,-1.26,-1.25,-1.28,-1.32,-1.19,-1.19,-0.88,-0.83,-0.85,-0.67,-0.62,-0.54,-0.46,-0.39,-0.34],
  "Israel":[-0.32,-0.39,-0.36,-0.29,-0.32,-0.39,-0.37,-0.30,-0.29,-0.18,-0.29,-0.33,-0.54,-0.55,-0.42,-0.44],
  "Italy":[-0.78,-0.83,-0.82,-0.90,-0.88,-0.99,-0.99,-0.97,-1.01,-1.12,-0.97,-0.99,-1.03,-0.99,-0.99,-0.95],
  "Japan":[-1.46,-1.21,-1.26,-1.48,-1.51,-1.39,-1.38,-1.44,-1.39,-1.55,-1.43,-1.41,-1.24,-1.20,-1.07,-1.13],
  "Malaysia":[-0.13,-0.05,-0.07,0.01,0.03,0.04,0.02,0.01,-0.05,-0.03,0.03,0.04,-0.01,-0.14,-0.10,-0.09],
  "Mexico":[-0.41,-0.43,-0.44,-0.39,-0.41,-0.37,-0.37,-0.41,-0.42,-0.50,-0.50,-0.49,-0.60,-0.59,-0.58,-0.54],
  "Netherlands":[0.49,0.28,0.33,0.53,0.46,0.32,0.33,0.51,0.47,0.68,0.70,0.69,0.70,0.76,0.76,0.76],
  "NewZealand":[-0.06,0.11,0.13,0.20,0.25,0.48,0.50,0.57,0.57,0.64,0.60,0.57,0.60,0.62,0.77,0.77],
  "Nigeria":[null,null,null,null,null,0.97,0.81,-0.15,-0.06,-0.07,-0.15,-0.22,-0.04,0.03,0.04,0.04],
  "Norway":[2.94,3.24,3.23,3.00,3.06,3.01,3.03,3.17,3.20,3.19,3.31,3.31,3.33,3.42,3.35,3.37],
  "Peru":[0.99,0.86,0.84,0.92,0.91,0.92,0.91,0.85,0.86,0.82,0.80,0.80,0.70,0.39,0.36,0.20],
  "Philippines":[0.08,0.23,0.22,0.23,0.37,0.40,0.44,0.23,0.25,0.30,0.30,0.35,0.29,0.31,0.33,0.42],
  "Poland":[-0.16,-0.11,-0.11,-0.14,-0.13,-0.11,-0.11,0.00,0.01,0.08,-0.04,0.10,0.17,0.04,-0.01,0.17],
  "Portugal":[-1.56,-1.54,-1.53,-1.66,-1.57,-1.55,-1.52,-1.33,-1.33,-1.32,-1.34,-1.34,-1.41,-1.37,-1.36,-1.33],
  "Russia":[0.81,0.88,0.85,0.91,0.90,0.83,0.81,0.82,0.83,0.79,0.77,0.74,0.58,0.31,0.27,0.24],
  "Singapore":[0.91,0.96,0.95,0.87,0.86,0.84,0.84,0.91,0.91,0.90,0.87,0.85,0.79,0.76,0.76,0.77],
  "Slovakia":[-0.48,-0.44,-0.43,-0.40,-0.35,-0.43,-0.46,-0.52,-0.57,-0.61,-0.47,-0.43,-0.61,-0.62,-0.60,-0.58],
  "Slovenia":[-0.45,-0.49,-0.51,-0.59,-0.56,-0.82,-0.88,-0.91,-1.04,-1.04,-1.04,-1.05,-1.26,-1.17,-1.15,-1.16],
  "SouthAfrica":[-0.42,-0.35,-0.36,-0.43,-0.46,-0.47,-0.48,-0.47,-0.40,-0.43,-0.53,-0.55,-0.46,-0.42,-0.43,-0.46],
  "SouthKorea":[1.12,0.85,0.83,0.73,0.71,0.75,0.74,0.74,0.74,0.65,0.68,0.67,0.65,0.66,0.64,0.64],
  "Spain":[-0.39,-0.57,-0.64,-0.86,-0.86,-0.77,-0.83,-0.80,-0.84,-0.46,-0.40,-0.38,-0.43,-0.38,-0.29,-0.32],
  "Sweden":[1.23,1.11,1.09,1.10,1.09,1.05,1.05,1.06,1.07,1.08,1.07,1.05,1.06,1.12,1.10,1.11],
  "Switzerland":[0.79,0.96,0.94,0.89,0.89,0.87,0.87,0.90,0.89,0.88,0.88,0.91,0.89,0.88,0.87,0.88],
  "Taiwan":[0.91,0.82,0.80,0.88,0.88,0.86,0.86,0.89,0.89,0.89,0.90,0.94,0.95,0.96,0.99,1.00],
  "Thailand":[0.20,0.20,0.13,0.17,0.16,0.24,0.20,0.28,0.26,0.33,0.26,0.24,0.25,0.19,0.28,0.19],
  "Turkey":[-0.24,-0.27,-0.28,-0.18,-0.16,-0.08,-0.08,-0.11,-0.01,-0.13,-0.12,-0.07,0.04,0.05,0.08,0.06],
  "Ukraine":[null,null,null,null,null,-0.42,-0.43,-0.69,-0.77,-0.47,-1.22,-1.31,-1.33,-1.31,-1.27,-1.23],
  "UnitedKingdom":[-0.46,-0.46,-0.47,-0.50,-0.49,-0.53,-0.52,-0.45,-0.42,-0.38,-0.37,-0.39,-0.33,-0.27,-0.19,-0.16],
  "USA":[-0.26,-0.15,-0.11,-0.10,-0.13,-0.06,-0.02,0.21,0.24,0.28,0.34,0.35,0.35,0.34,0.38,0.37],
  "Venezuela":[-1.17,-1.12,-1.14,-1.17,-1.28,-1.78,-1.78,-1.72,-1.70,-1.56,-1.37,-1.35,-1.03,-0.85,-1.19,-1.19]
};

var willingness = {
  "Argentina":[-1.47,-1.43,-1.67,-1.69,-1.73,-1.67,-1.55,-1.48,-1.46,-1.45,-1.49,-1.54,-1.50,-1.48,-1.48,-1.43],
  "Australia":[0.91,0.80,0.83,0.97,0.89,0.93,1.06,1.02,0.93,1.02,1.02,1.08,1.06,1.03,1.03,1.05],
  "Austria":[0.92,0.76,0.62,0.62,0.63,0.65,0.69,0.71,0.68,0.81,0.83,0.81,0.78,0.78,0.78,0.77],
  "Belgium":[0.48,0.51,0.52,0.62,0.63,0.58,0.52,0.44,0.36,0.36,0.46,0.47,0.44,0.49,0.49,0.44],
  "Brazil":[-0.69,-0.66,-0.62,-0.62,-0.69,-0.62,-0.67,-0.57,-0.53,-0.56,-0.66,-0.54,-0.67,-0.77,-0.77,-0.85],
  "Canada":[1.39,1.43,1.40,1.39,1.36,1.25,1.22,1.30,1.29,1.25,1.26,1.23,1.21,1.17,1.17,1.26],
  "Chile":[0.46,0.53,0.54,0.51,0.62,0.62,0.63,0.59,0.70,0.66,0.67,0.64,0.67,0.59,0.59,0.51],
  "China":[-1.09,-1.04,-1.00,-0.86,-0.84,-0.83,-0.85,-0.84,-0.82,-0.91,-0.96,-0.95,-0.96,-0.94,-0.94,-0.88],
  "Colombia":[-0.43,-0.41,-0.60,-0.63,-0.62,-0.59,-0.68,-0.61,-0.57,-0.54,-0.56,-0.49,-0.46,-0.47,-0.47,-0.53],
  "Croatia":[-0.31,-0.34,-0.37,-0.41,-0.52,-0.51,-0.37,-0.33,-0.31,-0.38,-0.44,-0.44,-0.40,-0.37,-0.37,-0.43],
  "CzechRepublic":[0.21,0.00,-0.01,0.02,0.11,0.09,0.01,0.13,0.15,0.22,0.20,0.16,0.20,0.15,0.15,0.14],
  "Denmark":[1.26,1.11,1.08,1.06,1.03,1.08,1.03,1.08,1.05,1.03,1.09,1.06,1.12,1.11,1.11,1.05],
  "Egypt":[-1.99,-1.90,-1.84,-1.91,-1.95,-1.87,-1.93,-1.81,-1.71,-1.64,-1.63,-1.62,-1.58,-1.53,-1.53,-1.45],
  "Finland":[1.30,1.35,1.35,1.37,1.30,1.27,1.33,1.28,1.21,1.20,1.09,1.10,1.07,1.13,1.13,1.07],
  "France":[0.26,0.42,0.38,0.34,0.30,0.33,0.41,0.47,0.48,0.49,0.42,0.40,0.55,0.55,0.55,0.60],
  "Germany":[1.05,1.05,1.04,1.05,1.02,1.05,1.05,1.06,1.06,1.11,1.07,1.01,1.02,0.96,0.96,0.94],
  "Greece":[-0.76,-1.06,-1.02,-1.01,-0.87,-0.99,-1.09,-1.12,-1.10,-1.09,-0.99,-0.98,-0.99,-0.98,-0.98,-1.02],
  "Hungary":[-0.62,-0.49,-0.50,-0.50,-0.50,-0.37,-0.33,-0.18,-0.16,-0.19,-0.12,-0.11,-0.13,-0.14,-0.14,-0.08],
  "India":[-1.03,-1.03,-1.00,-0.92,-0.95,-0.77,-0.86,-0.81,-0.69,-0.66,-0.58,-0.52,-0.55,-0.48,-0.48,-0.48],
  "Indonesia":[-1.08,-1.28,-1.29,-1.29,-1.32,-1.28,-1.10,-1.03,-0.99,-1.02,-0.87,-0.88,-0.85,-0.98,-0.98,-0.96],
  "Ireland":[0.20,0.24,0.23,0.16,0.13,0.18,0.23,0.35,0.39,0.39,0.51,0.52,0.58,0.60,0.60,0.61],
  "Israel":[0.25,0.25,0.33,0.30,0.31,0.31,0.31,0.17,0.18,0.18,0.15,0.16,0.21,0.18,0.18,0.18],
  "Italy":[-0.47,-0.43,-0.43,-0.53,-0.63,-0.55,-0.56,-0.52,-0.50,-0.50,-0.33,-0.32,-0.33,-0.31,-0.31,-0.30],
  "Japan":[0.50,0.45,0.39,0.45,0.72,0.78,0.80,0.84,0.81,0.83,0.84,0.81,0.92,0.95,0.95,0.96],
  "Malaysia":[-0.24,-0.23,-0.26,-0.27,-0.18,0.00,0.03,0.07,0.08,0.07,0.15,0.15,0.07,0.02,0.02,-0.06],
  "Mexico":[-0.67,-0.62,-0.48,-0.46,-0.34,-0.36,-0.27,-0.32,-0.30,-0.30,-0.44,-0.52,-0.64,-0.67,-0.67,-0.72],
  "Netherlands":[0.92,0.80,0.92,1.02,0.90,0.91,0.89,1.01,1.07,1.06,1.06,1.09,1.07,1.01,1.01,1.05],
  "NewZealand":[1.39,1.41,1.38,1.40,1.41,1.42,1.36,1.35,1.34,1.33,1.23,1.34,1.32,1.34,1.34,1.37],
  "Nigeria":[null,null,null,null,null,-1.82,-1.81,-1.87,-1.84,-1.87,-1.92,-1.92,-1.96,-1.76,-1.76,-1.76],
  "Norway":[1.20,1.28,1.35,1.35,1.23,1.25,1.40,1.41,1.40,1.41,1.43,1.44,1.38,1.35,1.35,1.31],
  "Peru":[-1.01,-0.92,-0.94,-0.97,-0.83,-0.75,-0.81,-0.73,-0.71,-0.74,-0.74,-0.76,-0.79,-0.82,-0.82,-0.88],
  "Philippines":[-1.00,-0.97,-0.90,-0.89,-0.87,-0.88,-0.83,-0.87,-0.88,-0.88,-0.83,-0.82,-0.88,-0.93,-0.93,-0.85],
  "Poland":[0.02,0.00,-0.04,-0.05,-0.08,-0.02,-0.05,0.08,0.11,0.10,0.12,0.08,0.05,0.06,0.06,0.14],
  "Portugal":[-0.23,-0.23,-0.30,-0.30,-0.34,-0.31,-0.19,-0.17,-0.12,-0.11,-0.19,-0.19,0.00,-0.01,-0.01,-0.04],
  "Russia":[-1.26,-1.30,-1.31,-1.34,-1.33,-1.27,-1.20,-1.17,-1.16,-1.22,-1.15,-1.14,-1.23,-1.21,-1.21,-1.17],
  "Singapore":[1.36,1.39,1.36,1.38,1.39,1.38,1.36,1.36,1.33,1.31,1.27,1.26,1.24,1.30,1.30,1.31],
  "Slovakia":[0.13,0.15,0.29,0.17,0.06,0.16,0.20,0.33,0.33,0.28,0.29,0.15,0.16,0.15,0.15,0.18],
  "Slovenia":[0.00,0.03,0.01,0.00,-0.12,-0.12,-0.08,0.00,0.01,-0.01,0.12,0.09,0.01,0.02,0.02,0.00],
  "SouthAfrica":[-0.54,-0.49,-0.44,-0.57,-0.39,-0.40,-0.37,-0.39,-0.39,-0.39,-0.39,-0.35,-0.33,-0.26,-0.26,-0.30],
  "SouthKorea":[0.04,0.22,0.31,0.31,0.27,0.33,0.30,0.27,0.28,0.29,0.21,0.21,0.17,0.12,0.12,0.12],
  "Spain":[-0.09,-0.09,-0.06,-0.06,-0.07,-0.04,0.01,0.09,0.13,0.13,0.13,0.13,0.10,0.08,0.08,0.01],
  "Sweden":[1.33,1.37,1.35,1.37,1.33,1.32,1.29,1.21,1.21,1.21,1.19,1.19,1.15,1.15,1.15,1.10],
  "Switzerland":[1.28,1.38,1.37,1.38,1.40,1.40,1.38,1.38,1.38,1.30,1.29,1.31,1.27,1.27,1.27,1.31],
  "Taiwan":[0.57,0.28,0.34,0.34,0.40,0.42,0.34,0.32,0.28,0.29,0.30,0.28,0.26,0.26,0.26,0.28],
  "Thailand":[-0.96,-0.91,-0.85,-0.98,-0.95,-0.93,-0.91,-0.88,-0.94,-0.97,-1.07,-1.06,-1.02,-0.96,-0.96,-0.95],
  "Turkey":[-0.67,-0.59,-0.52,-0.52,-0.44,-0.57,-0.66,-0.66,-0.83,-0.70,-0.73,-0.74,-0.73,-0.82,-0.82,-0.74],
  "Ukraine":[null,null,null,null,null,-1.37,-1.36,-1.49,-1.70,-1.71,-1.79,-1.79,-1.68,-1.63,-1.63,-1.59],
  "UnitedKingdom":[0.64,0.63,0.62,0.63,0.63,0.63,0.63,0.79,0.79,0.88,0.90,0.88,0.94,0.97,0.97,1.06],
  "USA":[1.04,1.06,1.02,0.99,0.97,0.92,0.89,0.88,0.87,0.87,0.85,0.88,0.92,1.00,1.00,0.97],
  "Venezuela":[-2.49,-2.50,-2.49,-2.37,-2.46,-2.45,-2.39,-2.15,-2.18,-2.23,-2.28,-2.27,-2.26,-2.27,-2.27,-2.32]
};

var external ={
  "Argentina":[-0.17,-0.16,-0.18,-0.13,-0.11,-0.24,-0.24,-0.30,-0.42,-0.43,-0.28,-0.32,-0.28,-0.41,-0.40,-0.46],
  "Australia":[-0.03,0.04,0.03,0.03,-0.02,-0.13,-0.09,0.03,0.04,0.06,0.07,0.02,-0.09,0.04,0.04,0.03],
  "Austria":[-0.60,-0.69,-0.60,-0.59,-0.65,-0.55,-0.54,-0.51,-0.43,-0.45,-0.43,-0.31,-0.38,-0.36,-0.36,-1.16],
  "Belgium":[-1.06,-1.08,-1.21,-1.18,-1.32,-1.10,-1.08,-0.95,-1.11,-0.94,-0.98,-1.00,-0.96,-0.91,-0.91,-1.24],
  "Brazil":[-0.07,0.03,0.00,0.01,-0.03,0.03,0.02,0.08,0.08,0.04,0.08,0.03,0.03,0.03,0.02,0.03],
  "Canada":[0.08,0.06,0.10,0.08,0.05,-0.05,-0.05,0.03,0.05,0.05,0.06,0.07,0.05,0.02,0.02,0.02],
  "Chile":[0.27,0.34,0.34,0.27,0.26,-0.03,-0.04,0.07,0.09,0.08,0.13,0.18,0.23,0.24,0.24,0.24],
  "China":[0.94,0.84,0.85,0.84,0.75,0.57,0.56,0.64,0.63,0.60,0.63,0.67,0.69,0.67,0.67,0.71],
  "Colombia":[-0.07,-0.07,-0.08,-0.08,-0.05,-0.04,-0.07,-0.06,-0.05,-0.05,-0.07,-0.11,-0.18,-0.27,-0.28,-0.30],
  "Croatia":[-0.53,-0.49,-0.68,-0.67,-0.55,-0.46,-0.49,-0.72,-0.65,-0.46,-0.48,-0.49,-0.51,-0.53,-0.54,-0.85],
  "CzechRepublic":[0.16,0.19,0.19,0.23,0.26,0.19,0.13,-0.02,0.06,0.15,0.16,0.22,0.26,0.33,0.33,0.33],
  "Denmark":[-0.28,-0.32,-0.41,-0.52,-0.21,-0.38,-0.38,-0.09,-0.20,-0.12,-0.28,-0.05,-0.01,-0.03,-0.03,0.74],
  "Egypt":[-0.04,-0.22,-0.31,-0.38,-0.40,-0.29,-0.34,-0.43,-0.23,-0.19,-0.33,-0.35,-0.28,-0.23,-0.23,-0.34],
  "Finland":[-0.47,-0.49,-0.67,-0.47,-0.78,-0.87,-0.77,-0.65,-0.70,-0.64,-0.62,-0.75,-0.75,-0.80,-0.81,-0.90],
  "France":[-0.39,-0.40,-0.37,-0.36,-0.52,-0.55,-0.53,-0.46,-0.46,-0.35,-0.36,-0.36,-0.32,-0.32,-0.32,-0.79],
  "Germany":[0.23,0.20,0.21,0.24,0.24,0.33,0.35,0.38,0.40,0.45,0.45,0.44,0.52,0.52,0.52,0.45],
  "Greece":[-2.24,-2.11,-2.16,-2.14,-2.27,-2.34,-2.25,-1.94,-1.73,-1.79,-1.75,-1.70,-1.58,-1.52,-1.60,-1.37],
  "Hungary":[0.07,-0.09,-0.04,0.12,0.46,0.31,0.34,0.06,-0.02,-0.11,-0.16,-0.18,0.06,0.12,0.12,-0.19],
  "India":[0.13,0.28,0.28,0.27,0.24,-0.03,-0.01,0.14,0.17,0.14,0.14,0.18,0.25,0.25,0.25,0.27],
  "Indonesia":[0.36,0.43,0.33,0.30,0.27,0.03,0.03,-0.01,0.04,0.03,0.00,0.02,0.02,0.01,0.01,-0.04],
  "Ireland":[-0.82,-0.76,-0.78,-0.75,-0.99,-0.44,-0.45,-0.47,-0.67,-0.72,-0.82,-0.79,-0.73,-0.73,-0.68,-0.53],
  "Israel":[0.27,0.21,0.27,0.21,0.25,0.25,0.30,0.41,0.38,0.33,0.33,0.32,0.37,0.49,0.49,0.50],
  "Italy":[-1.57,-1.59,-1.61,-1.62,-1.62,-1.32,-1.24,-1.34,-1.29,-1.21,-1.26,-1.26,-1.16,-1.21,-1.21,-0.71],
  "Japan":[0.71,0.63,0.52,0.62,0.58,0.37,0.35,0.38,0.43,0.43,0.37,0.47,0.48,0.49,0.49,0.52],
  "Malaysia":[1.24,1.16,1.12,0.99,0.95,0.82,0.71,0.79,0.81,0.82,0.79,0.78,0.72,0.67,0.67,0.64],
  "Mexico":[0.05,0.11,0.11,0.12,0.16,0.10,0.09,0.09,0.12,0.08,0.08,0.06,-0.42,-0.52,-0.51,-0.01],
  "Netherlands":[-0.20,-0.13,-0.02,-0.06,-0.11,-0.07,0.03,0.11,0.17,0.20,0.24,0.19,0.26,0.27,0.27,-0.03],
  "NewZealand":[0.04,0.09,0.08,0.07,0.02,-0.17,-0.18,-0.01,-0.03,-0.02,-0.03,-0.06,-0.06,-0.05,-0.05,-0.05],
  "Nigeria":[null,null,null,null,null,0.52,0.54,0.50,0.66,0.51,0.37,0.35,0.28,0.06,0.06,0.15],
  "Norway":[1.12,1.03,1.04,1.05,1.00,1.07,1.01,1.10,1.06,1.01,1.02,0.97,0.87,0.74,0.74,0.75],
  "Peru":[0.14,0.17,0.17,0.14,0.15,0.00,-0.03,0.00,0.02,-0.03,-0.05,-0.02,0.00,0.21,0.20,0.03],
  "Philippines":[0.38,0.30,0.36,0.39,0.44,0.38,0.39,0.38,0.44,0.45,0.45,0.45,0.49,0.49,0.48,0.43],
  "Poland":[-0.17,-0.16,-0.12,-0.13,0.02,0.02,0.02,-0.02,-0.03,-0.03,-0.02,-0.05,-0.06,-0.23,-0.23,-0.02],
  "Portugal":[-2.19,-2.15,-1.67,-1.76,-1.50,-1.07,-1.16,-1.93,-1.70,-1.51,-1.78,-1.68,-1.62,-1.57,-1.58,-1.01],
  "Russia":[0.76,0.82,0.82,0.81,0.73,0.42,0.41,0.47,0.45,0.44,0.48,0.50,0.61,0.60,0.60,0.59],
  "Singapore":[1.73,1.79,1.81,1.75,1.66,1.94,1.99,2.15,2.17,2.20,2.16,2.12,2.18,2.23,2.23,2.32],
  "Slovakia":[-0.88,-0.73,-0.71,-0.72,-0.42,-0.16,-0.22,-0.35,-0.47,-0.36,-0.51,-0.36,-0.46,-0.68,-0.68,-0.62],
  "Slovenia":[-0.52,-0.54,-0.55,-0.50,-0.37,-0.07,-0.10,-0.43,-0.58,-0.73,-0.86,-1.02,-1.02,-1.07,-1.07,-0.97],
  "SouthAfrica":[-0.12,0.01,-0.08,-0.15,-0.19,-0.18,-0.18,-0.17,-0.13,-0.01,-0.02,-0.12,-0.10,0.03,0.03,-0.04],
  "SouthKorea":[0.60,0.57,0.60,0.62,0.57,0.52,0.55,0.65,0.59,0.70,0.74,0.79,0.83,0.88,0.88,0.91],
  "Spain":[-1.16,-1.08,-1.11,-1.06,-1.02,-0.65,-0.69,-0.91,-0.96,-0.91,-1.04,-1.04,-1.01,-0.99,-0.99,-0.56],
  "Sweden":[0.49,0.50,0.52,0.52,0.55,0.66,0.63,0.46,0.45,0.53,0.46,0.47,0.51,0.50,0.50,0.40],
  "Switzerland":[1.21,1.24,1.34,1.33,1.36,1.57,1.55,1.58,1.50,1.48,1.67,1.52,1.37,1.32,1.32,1.41],
  "Taiwan":[1.44,1.39,1.43,1.39,1.34,1.39,1.39,1.53,1.53,1.59,1.61,1.66,1.75,1.77,1.77,1.86],
  "Thailand":[0.85,0.75,0.76,0.73,0.66,0.53,0.51,0.54,0.54,0.60,0.64,0.66,0.68,0.74,0.73,0.78],
  "Turkey":[-0.33,-0.53,-0.52,-0.50,-0.50,-0.31,-0.31,-0.26,-0.27,-0.27,-0.26,-0.24,-0.25,0.02,0.01,-0.29],
  "Ukraine":[null,null,null,null,null,-0.73,-0.51,-0.50,-0.87,-1.82,-0.91,-1.03,-1.27,-1.15,-1.08,-1.31],
  "UnitedKingdom":[0.13,0.15,0.15,0.16,0.16,0.01,0.03,0.00,-0.01,-0.02,-0.01,-0.05,-0.09,-0.13,-0.13,-0.20],
  "USA":[0.14,-0.05,-0.01,-0.01,-0.04,-0.04,-0.05,0.06,0.08,0.07,0.06,0.07,0.08,0.05,0.05,0.05],
  "Venezuela":[0.35,0.44,0.40,0.44,0.52,0.09,0.09,-0.08,0.07,0.11,0.10,0.10,-0.04,-0.08,-0.05,-0.18]
};

var financialHealth = {
  "Argentina":[0.33,0.35,0.35,0.34,0.25,0.19,0.04,-0.06,-0.01,-0.03,-0.02,0.01,0.14,0.40,0.22,0.23],
  "Australia":[0.23,0.23,0.29,0.31,0.47,0.37,0.35,0.31,0.30,0.19,0.11,0.10,0.08,0.10,0.10,0.09],
  "Austria":[-0.01,0.02,-0.06,-0.17,-0.12,-0.13,0.08,0.15,0.15,0.12,0.12,0.14,0.15,0.08,0.17,0.17],
  "Belgium":[-0.04,0.00,0.08,0.04,0.09,0.06,0.01,0.20,0.21,0.21,0.22,0.21,0.30,0.01,0.01,0.26],
  "Brazil":[0.38,0.50,0.47,0.37,0.34,0.26,0.24,0.20,0.17,0.12,0.08,0.08,0.02,0.27,0.12,0.11],
  "Canada":[0.34,0.32,0.52,0.51,0.45,0.40,0.39,0.36,0.35,0.28,0.25,0.24,0.18,0.10,0.16,0.17],
  "Chile":[0.61,0.68,0.68,0.67,0.60,0.53,0.52,0.49,0.47,0.41,0.38,0.34,0.34,0.42,0.33,0.33],
  "China":[-0.44,-0.38,-0.34,-0.33,-0.35,-0.41,-0.42,-0.48,-0.53,-0.50,-0.52,-0.56,-0.57,-0.44,-0.56,-0.56],
  "Colombia":[0.26,0.37,0.48,0.49,0.53,0.49,0.49,0.42,0.42,0.45,0.44,0.48,0.47,0.66,0.49,0.50],
  "Croatia":[0.28,0.20,0.26,0.26,0.25,0.28,0.26,0.27,0.26,0.36,0.35,0.36,0.35,0.40,0.32,0.32],
  "CzechRepublic":[0.35,0.38,0.38,0.37,0.31,0.33,0.32,0.31,0.31,0.33,0.32,0.31,0.38,0.53,0.42,0.42],
  "Denmark":[-0.49,-0.54,-0.54,-0.59,-0.24,-0.29,-0.18,-0.20,-0.30,-0.31,-0.28,-0.24,-0.23,-0.45,-0.15,-0.16],
  "Egypt":[0.08,0.41,0.41,0.41,0.31,0.12,0.11,0.05,-0.01,0.03,0.02,0.03,0.04,0.08,0.04,0.04],
  "Finland":[0.09,0.04,0.03,0.09,0.07,-0.01,-0.02,0.09,0.10,0.09,0.10,0.09,0.09,-0.26,-0.17,-0.17],
  "France":[-0.11,-0.12,-0.13,-0.17,-0.25,-0.25,-0.23,-0.20,-0.22,-0.19,-0.07,-0.06,-0.07,-0.07,-0.01,0.00],
  "Germany":[0.17,0.20,0.30,0.33,0.35,0.24,0.27,0.35,0.34,0.32,0.40,0.46,0.46,0.27,0.39,0.37],
  "Greece":[-0.72,-0.79,-0.81,-0.81,-0.98,-1.00,-1.00,-1.00,-0.97,-0.70,-0.56,-0.45,-0.45,-0.51,-0.44,-0.44],
  "Hungary":[-0.07,-0.10,-0.07,-0.06,0.17,0.16,0.15,0.19,0.23,0.21,0.24,0.28,0.27,0.23,0.28,0.28],
  "India":[0.34,0.32,0.24,0.25,0.17,0.21,0.21,0.13,0.15,0.12,0.11,0.06,0.07,0.21,0.13,0.14],
  "Indonesia":[0.19,0.08,0.11,0.11,0.01,0.18,0.18,0.13,0.14,0.20,0.20,0.28,0.40,0.59,0.35,0.36],
  "Ireland":[-1.88,-1.86,-1.86,-1.84,-1.28,-1.33,-1.32,-1.05,-0.95,-1.06,-0.86,-0.88,-0.83,-1.03,-0.55,-0.55],
  "Israel":[0.31,0.32,0.31,0.35,0.25,0.39,0.38,0.35,0.34,0.38,0.36,0.37,0.37,0.33,0.30,0.30],
  "Italy":[-0.37,-0.31,-0.32,-0.36,-0.43,-0.50,-0.53,-0.42,-0.42,-0.45,-0.34,-0.32,-0.31,-0.33,-0.20,-0.22],
  "Japan":[0.23,0.23,0.23,0.26,0.21,0.18,0.17,0.29,0.21,0.21,0.20,0.16,0.11,-0.31,-0.03,-0.04],
  "Malaysia":[0.21,0.25,0.26,0.29,0.19,0.19,0.20,0.18,0.11,0.13,0.11,0.05,0.02,0.13,0.02,0.02],
  "Mexico":[0.63,0.72,0.71,0.67,0.60,0.55,0.54,0.51,0.51,0.51,0.49,0.47,0.48,0.69,0.50,0.51],
  "Netherlands":[-0.31,-0.31,-0.33,-0.37,0.04,0.11,0.09,-0.04,0.08,-0.16,-0.19,-0.05,-0.09,-0.49,-0.31,-0.32],
  "NewZealand":[0.07,0.10,0.18,0.29,0.24,0.18,0.22,0.12,0.04,-0.02,-0.03,0.10,0.09,0.09,0.09,0.08],
  "Nigeria":[null,null,null,null,null,0.35,0.33,0.32,0.31,0.44,0.49,0.50,0.52,0.56,0.37,0.37],
  "Norway":[0.23,0.14,0.12,0.17,0.12,0.30,0.30,0.29,0.32,0.32,0.46,0.42,0.42,0.53,0.51,0.51],
  "Peru":[0.49,0.52,0.26,0.26,0.20,0.16,0.16,0.15,0.19,0.18,0.16,0.16,0.41,0.65,0.41,0.41],
  "Philippines":[0.51,0.40,0.43,0.40,0.32,0.53,0.52,0.46,0.49,0.43,0.42,0.32,0.39,0.47,0.28,0.29],
  "Poland":[-0.03,-0.16,-0.03,-0.02,0.02,0.18,0.18,0.23,0.25,0.32,0.31,0.30,0.25,0.44,0.35,0.35],
  "Portugal":[-0.80,-0.78,-0.76,-0.77,-0.62,-0.77,-0.77,-0.79,-0.74,-0.60,-0.34,-0.39,-0.33,-0.77,-0.37,-0.40],
  "Russia":[0.25,0.00,0.00,0.01,-0.24,0.05,0.04,0.11,0.08,0.03,0.01,0.03,-0.02,0.09,-0.19,-0.18],
  "Singapore":[0.37,0.21,0.28,0.29,0.10,0.18,0.24,0.21,0.06,-0.10,-0.12,-0.09,-0.07,0.27,-0.02,-0.02],
  "Slovakia":[0.31,0.34,0.33,0.34,0.35,0.41,0.43,0.51,0.55,0.57,0.55,0.58,0.58,0.66,0.54,0.55],
  "Slovenia":[-0.74,-0.84,-0.86,-0.85,-0.18,-0.26,-0.25,-0.27,-0.25,-0.14,0.00,0.01,0.03,0.24,0.44,0.44],
  "SouthAfrica":[0.40,0.45,0.44,0.48,0.31,0.32,0.31,0.28,0.26,0.29,0.31,0.30,0.30,0.06,0.04,0.06],
  "SouthKorea":[0.40,0.31,0.30,0.33,0.34,0.38,0.37,0.33,0.34,0.26,0.10,0.09,0.08,0.04,0.10,0.10],
  "Spain":[-0.41,-0.68,-0.65,-0.58,-0.32,-0.37,-0.42,-0.47,-0.43,-0.18,0.03,0.11,0.12,-0.62,-0.04,-0.02],
  "Sweden":[-0.11,-0.10,-0.18,-0.12,-0.10,-0.21,-0.21,-0.10,-0.15,-0.16,-0.03,-0.06,-0.07,0.53,0.49,0.49],
  "Switzerland":[0.25,0.19,0.11,0.02,-0.11,-0.05,-0.06,-0.15,-0.21,-0.30,-0.28,-0.27,-0.29,-0.23,-0.24,-0.22],
  "Taiwan":[-0.03,-0.01,-0.15,-0.45,-0.44,-0.34,-0.33,-0.27,-0.22,-0.06,-0.26,-0.59,-0.06,-0.15,0.03,0.03],
  "Thailand":[0.22,0.32,0.31,0.32,-0.01,-0.05,-0.05,-0.04,-0.07,-0.08,-0.09,-0.12,-0.23,0.00,-0.10,-0.09],
  "Turkey":[0.12,0.19,0.21,0.22,0.12,0.05,0.12,-0.03,-0.06,-0.08,-0.11,-0.11,0.01,0.22,-0.06,-0.06],
  "Ukraine":[null,null,null,null,null,0.32,0.32,0.31,0.31,0.19,0.18,0.01,0.02,-0.02,-0.13,-0.12],
  "UnitedKingdom":[-0.54,-0.52,-0.52,-0.49,-0.13,-0.16,-0.18,-0.21,-0.15,-0.11,0.06,0.09,0.08,-0.32,0.13,0.12],
  "USA":[0.74,0.81,0.79,0.79,0.79,0.82,0.81,0.80,0.76,0.69,0.71,0.69,0.67,0.43,0.51,0.51],
  "Venezuela":[0.42,0.47,0.46,0.47,0.27,0.23,0.21,0.08,0.17,0.13,-0.03,-0.01,-0.02,0.22,-0.05,-0.04]
};

var overall = {
  "Argentina":[-0.556,-0.567,-0.637,-0.652,-0.681,-0.707,-0.679,-0.739,-0.748,-0.904,-0.796,-0.858,-0.772,-0.813,-0.831,-0.840],
  "Australia":[0.639,0.601,0.625,0.690,0.669,0.639,0.688,0.672,0.654,0.626,0.630,0.653,0.593,0.620,0.637,0.641],
  "Austria":[0.201,0.149,0.160,0.153,0.150,0.257,0.294,0.283,0.258,0.312,0.338,0.413,0.399,0.441,0.459,0.252],
  "Belgium":[-0.193,-0.160,-0.182,-0.164,-0.183,-0.164,-0.185,-0.104,-0.181,-0.130,-0.102,-0.104,-0.006,0.015,0.026,0.003],
  "Brazil":[-0.211,-0.171,-0.158,-0.116,-0.141,-0.093,-0.115,-0.158,-0.127,-0.183,-0.239,-0.208,-0.317,-0.348,-0.412,-0.431],
  "Canada":[0.737,0.751,0.765,0.770,0.742,0.687,0.678,0.729,0.729,0.688,0.692,0.685,0.674,0.666,0.672,0.701],
  "Chile":[0.642,0.635,0.632,0.628,0.648,0.566,0.562,0.568,0.598,0.518,0.414,0.370,0.496,0.443,0.427,0.384],
  "China":[0.166,0.125,0.130,0.186,0.165,0.110,0.098,0.127,0.095,0.084,0.059,-0.013,-0.020,-0.072,-0.077,-0.078],
  "Colombia":[-0.185,-0.127,-0.164,-0.112,-0.106,-0.100,-0.138,-0.151,-0.139,-0.130,-0.138,-0.103,-0.155,-0.192,-0.245,-0.277],
  "Croatia":[-0.320,-0.310,-0.370,-0.378,-0.388,-0.385,-0.357,-0.343,-0.325,-0.296,-0.316,-0.335,-0.483,-0.493,-0.533,-0.623],
  "CzechRepublic":[0.090,0.062,0.057,0.048,0.070,0.092,0.066,0.050,0.089,0.143,0.186,0.226,0.282,0.368,0.383,0.407],
  "Denmark":[0.559,0.454,0.494,0.511,0.593,0.544,0.537,0.640,0.605,0.596,0.579,0.616,0.667,0.640,0.654,0.785],
  "Egypt":[-1.155,-1.074,-1.066,-1.145,-1.192,-1.170,-1.187,-1.245,-1.204,-1.096,-1.143,-1.140,-1.087,-1.046,-1.024,-1.023],
  "Finland":[0.884,0.812,0.771,0.848,0.752,0.684,0.724,0.748,0.718,0.712,0.702,0.668,0.641,0.610,0.620,0.579],
  "France":[-0.160,-0.087,-0.097,-0.105,-0.166,-0.177,-0.149,-0.128,-0.133,-0.142,-0.132,-0.155,-0.109,-0.099,-0.078,-0.152],
  "Germany":[0.646,0.649,0.650,0.675,0.667,0.695,0.702,0.735,0.738,0.767,0.755,0.743,0.764,0.744,0.747,0.726],
  "Greece":[-1.571,-1.622,-1.609,-1.642,-1.576,-1.526,-1.535,-1.416,-1.337,-1.340,-1.246,-1.200,-1.216,-1.197,-1.336,-1.292],
  "Hungary":[-0.709,-0.695,-0.681,-0.632,-0.517,-0.510,-0.498,-0.459,-0.470,-0.533,-0.546,-0.544,-0.437,-0.417,-0.416,-0.450],
  "India":[-0.422,-0.535,-0.534,-0.461,-0.503,-0.464,-0.487,-0.498,-0.426,-0.408,-0.344,-0.309,-0.317,-0.289,-0.294,-0.290],
  "Indonesia":[-0.162,-0.242,-0.269,-0.296,-0.329,-0.368,-0.305,-0.297,-0.277,-0.305,-0.266,-0.244,-0.180,-0.223,-0.251,-0.262],
  "Ireland":[-0.848,-0.770,-0.773,-0.798,-0.815,-0.643,-0.630,-0.448,-0.445,-0.474,-0.363,-0.338,-0.270,-0.251,-0.167,-0.116],
  "Israel":[0.032,-0.007,0.043,0.051,0.042,0.027,0.043,0.048,0.046,0.085,0.031,0.015,-0.041,-0.036,0.015,0.006],
  "Italy":[-0.808,-0.810,-0.812,-0.879,-0.909,-0.873,-0.864,-0.854,-0.856,-0.884,-0.772,-0.776,-0.776,-0.765,-0.754,-0.634],
  "Japan":[-0.267,-0.200,-0.259,-0.307,-0.250,-0.232,-0.226,-0.217,-0.204,-0.263,-0.226,-0.212,-0.115,-0.130,-0.052,-0.064],
  "Malaysia":[0.147,0.169,0.144,0.151,0.169,0.196,0.177,0.203,0.179,0.188,0.223,0.224,0.165,0.095,0.101,0.075],
  "Mexico":[-0.291,-0.266,-0.224,-0.204,-0.178,-0.183,-0.157,-0.188,-0.182,-0.220,-0.266,-0.293,-0.468,-0.471,-0.486,-0.381],
  "Netherlands":[0.403,0.296,0.369,0.468,0.436,0.399,0.414,0.526,0.552,0.613,0.626,0.639,0.645,0.613,0.629,0.585],
  "NewZealand":[0.406,0.494,0.499,0.542,0.551,0.603,0.591,0.644,0.629,0.647,0.598,0.629,0.633,0.649,0.709,0.720],
  "Nigeria":[null,null,null,null,null,-0.017,-0.077,-0.488,-0.413,-0.445,-0.515,-0.543,-0.497,-0.447,-0.461,-0.446],
  "Norway":[1.780,1.898,1.918,1.833,1.804,1.823,1.863,1.939,1.944,1.934,2.007,1.992,1.962,1.975,1.942,1.944],
  "Peru":[0.167,0.154,0.115,0.132,0.164,0.156,0.131,0.137,0.152,0.119,0.103,0.105,0.084,0.018,-0.020,-0.138],
  "Philippines":[-0.139,-0.101,-0.067,-0.057,0.004,0.026,0.054,-0.048,-0.024,-0.009,0.004,0.016,-0.013,-0.011,-0.022,0.026],
  "Poland":[-0.095,-0.094,-0.085,-0.099,-0.071,-0.029,-0.036,0.041,0.056,0.088,0.049,0.085,0.097,0.035,0.005,0.141],
  "Portugal":[-1.209,-1.194,-1.114,-1.183,-1.091,-1.003,-0.976,-1.047,-0.981,-0.922,-0.981,-0.969,-0.921,-0.945,-0.900,-0.785],
  "Russia":[0.123,0.127,0.111,0.126,0.083,0.038,0.050,0.082,0.085,0.043,0.060,0.055,-0.014,-0.107,-0.151,-0.154],
  "Singapore":[1.156,1.183,1.177,1.144,1.104,1.156,1.165,1.219,1.200,1.182,1.147,1.135,1.117,1.167,1.138,1.164],
  "Slovakia":[-0.297,-0.243,-0.195,-0.218,-0.173,-0.111,-0.125,-0.130,-0.168,-0.174,-0.149,-0.138,-0.232,-0.272,-0.276,-0.246],
  "Slovenia":[-0.360,-0.382,-0.398,-0.420,-0.350,-0.404,-0.423,-0.480,-0.556,-0.580,-0.555,-0.594,-0.704,-0.652,-0.624,-0.613],
  "SouthAfrica":[-0.312,-0.240,-0.248,-0.324,-0.308,-0.313,-0.309,-0.309,-0.275,-0.259,-0.302,-0.319,-0.274,-0.234,-0.239,-0.277],
  "SouthKorea":[0.620,0.552,0.573,0.540,0.514,0.538,0.534,0.543,0.531,0.511,0.492,0.498,0.487,0.479,0.480,0.483],
  "Spain":[-0.455,-0.537,-0.563,-0.632,-0.602,-0.486,-0.509,-0.522,-0.531,-0.348,-0.325,-0.310,-0.334,-0.389,-0.293,-0.240],
  "Sweden":[0.977,0.945,0.929,0.940,0.934,0.928,0.914,0.868,0.864,0.883,0.877,0.862,0.864,0.946,0.937,0.905],
  "Switzerland":[0.966,1.064,1.065,1.037,1.036,1.076,1.069,1.075,1.048,1.010,1.047,1.032,0.981,0.973,0.971,1.004],
  "Taiwan":[0.821,0.691,0.694,0.687,0.696,0.712,0.690,0.731,0.724,0.755,0.743,0.733,0.803,0.804,0.833,0.859],
  "Thailand":[-0.018,-0.009,-0.021,-0.046,-0.092,-0.082,-0.094,-0.047,-0.079,-0.050,-0.095,-0.100,-0.092,-0.063,-0.038,-0.062],
  "Turkey":[-0.351,-0.374,-0.352,-0.307,-0.280,-0.263,-0.281,-0.296,-0.315,-0.325,-0.328,-0.308,-0.252,-0.198,-0.217,-0.261],
  "Ukraine":[null,null,null,null,null,-0.694,-0.654,-0.793,-0.961,-1.048,-1.185,-1.266,-1.290,-1.243,-1.225,-1.246],
  "UnitedKingdom":[-0.018,-0.017,-0.022,-0.030,0.014,-0.036,-0.031,0.036,0.051,0.095,0.125,0.105,0.144,0.126,0.203,0.228],
  "USA":[0.309,0.329,0.340,0.334,0.309,0.325,0.331,0.440,0.448,0.453,0.473,0.487,0.500,0.491,0.512,0.499],
  "Venezuela":[-1.102,-1.065,-1.078,-1.044,-1.121,-1.407,-1.388,-1.341,-1.305,-1.257,-1.215,-1.202,-1.102,-1.015,-1.171,-1.211]
};



