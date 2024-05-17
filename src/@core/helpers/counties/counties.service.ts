import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountiesService {

  constructor() { }

  counties() {
    return [
      {
        "name": "BARINGO",
        "capital": "KABARNET",
        "code": 30,
        "sub_counties": [
          {
            id: 1,
            name: "BARINGO CENTRAL",
          },
          {
            id: 2,
            name: "BARINGO CENTRAL",
          },
          {
            id: 3,
            name: "BARINGO NORTH",
          },
          {
            id: 4,
            name: "BARINGO SOUTH",
          },
          {
            id: 5,
            name: "ELDAMA RAVINE",
          },
          {
            id: 5,
            name: "MOGOTIO",
          },

          {
            id: 5,
            name: "TIATY",
          },
        ]
      },
      {
        "name": "BOMET",
        "capital": "BOMET",
        "code": 36,
        "sub_counties": [
          {
            id: 1,
            name: "BOMET CENTRAL",
          },
          {
            id: 2,
            name: "BOMET EAST",
          },
          {
            id: 3,
            name: "CHEPALUNGU",
          },
          {
            id: 4,
            name: "KONOIN",
          },
          {
            id: 5,
            name: "SOTIK"
          },
        ]
      },
      {
        "name": "BUNGOMA",
        "capital": "BUNGOMA",
        "code": 39,
        "sub_counties": [
          {
            id: 1,
            name: "BUMULA",
          },
          {
            id: 2,
            name: "KABUCHAI",
          },
          {
            id: 3,
            name: "CHEPALUNGU",
          },
          {
            id: 4,
            name: "KANDUYI",
          },
          {
            id: 5,
            name: "KIMILIL",
          },
          {
            id: 6,
            name: "MT ELGON",
          },
          {
            id: 7,
            name: "SIRISIA",
          },
          {
            id: 8,
            name: "TONGAREN",
          },
            
          {
            id: 7,
            name: "WEBUYE EAST",
          },
            
          {
            id: 7,
            name: "WEBUYE WEST"
          }
        ]
      },
      {
        "name": "BUSIA",
        "capital": "BUSIA",
        "code": 40,
        "sub_counties": [
          {
            id: 1,
            name: "BUDALANGI",
          },
          {
            id: 2,
            name: "BUTULA",
          },
          {
            id: 3,
            name: "FUNYULA",
          },
          {
            id: 4,
            name: "NAMBELE",
          },
          {
            id: 5,
            name: "TESO SOUTH"
          }
        ]
      },
      {
        "name": "ELGEYO-MARAKWET",
        "capital": "ITEN",
        "code": 28,
        "sub_counties": [
          {
            id: 1,
            name: "KEIYO NORTH",
          },
          {
            id: 2,
            name: "KEIYO SOUTH",
          },
          {
            id: 3,
            name: "MARAKWET EAST",
          },
          {
            id: 4,
            name: "MARAKWET WEST"
          }
        ]
      },
      {
        "name": "EMBU",
        "capital": "EMBU",
        "code": 14,
        "sub_counties": [
          {
            id: 1,
            name: "MANYATTA",
          },
          {
            id: 2,
            name: "MBEERE NORTH",
          },
          {
            id: 3,
            name: "MBEERE SOUTH",
          },
          {
            id: 4,
            name: "RUNYENJES"
          }
        ]
      },
      {
        "name": "GARISSA",
        "capital": "GARISSA",
        "code": 7,
        "sub_counties": [
          {
            id: 1,
            name: "DAADAB",
          },
          {
            id: 2,
            name: "FAFI",
          },
          {
            id: 3,
            name: "GARISSA",
          },
          {
            id: 4,
            name: "HULUGHO",
          },
          {
            id: 5,
            name: "IJARA",
          },
          {
            id: 6,
            name: "LAGDERA BALAMBALA"
          }
        ]
      },
      {
        "name": "HOMA BAY",
        "capital": "HOMA BAY",
        "code": 43,
        "sub_counties": [
          {
            id: 1,
            name: "HOMABAY TOWN",
          },

          {
            id: 2,
            name: "KABONDO",
          },

          {
            id: 3,
            name: "KARACHWONYO",
          },

          {
            id: 4,
            name: "KASIPUL",
          },

          {
            id: 5,
            name: "MBITA",
          },

          {
            id: 6,
            name: "NDHIWA",
          },

          {
            id: 7,
            name: "RANGWE",
          },

          {
            id: 8,
            name: "SUBA"
          },
        ]
      },
      {
        "name": "ISIOLO",
        "capital": "ISIOLO",
        "code": 11,
        "sub_counties": [
          {
            id: 1,
            name: "ISIOLO"
          },
          {
            id: 2,
            name: "GARBA TULA"
          },
          {
            id: 3,
            name: "MERIT"
          },
        ]
      },
      {
        "name": "KAJIADO",
        "code": 34,
        "sub_counties": [
          {
            id: 1,
            name: "ISINYA."
          },
          {
            id: 2,
            name: "KAJIADO CENTRAL."
          },
          {
            id: 3,
            name: "KAJIADO NORTH."
          },
          {
            id: 4,
            name: "LOITOKITOK."
          },
          {
            id: 5,
            name: "MASHUURU."
          }
        ]
      },
      {
        "name": "KAKAMEGA",
        "capital": "KAKAMEGA",
        "code": 37,
        "sub_counties": [
          {
            id: 1,
            name: "BUTERE"
          },
          {
            id: 2,
            name: "KAKAMEGA CENTRAL"
          },
          {
            id: 3,
            name: "KAKAMEGA EAST"
          },
          {
            id: 4,
            name: "KAKAMEGA NORTH"
          },
          {
            id: 5,
            name: "KAKAMEGA SOUTH"
          },
          {
            id: 6,
            name: "KHWISERO"
          },
          {
            id: 7,
            name: "LUGARI"
          },
          {
            id: 8,
            name: "LUKUYANI"
          },
          {
            id: 9,
            name: "LURAMBI"
          },
          {
            id: 10,
            name: "MATETE"
          },
          {
            id: 11,
            name: "MUMIAS"
          },
          {
            id: 12,
            name: "MUTUNGU"
          },
          {
            id: 13,
            name: "NAVAKHOLO"
          },
        ]
      },
      {
        "name": "KERICHO",
        "capital": "KERICHO",
        "code": 35,
        "sub_counties": [
          {
            id: 1,
            name:"AINAMOI"
             },
          {
            id: 2,
            name: "BELGUT"
          },
          {
            id: 3,
            name: "BURETI"
          },
          {
            id: 4,
            name: "KIPKELION EAST"
          },
          {
            id: 5,
            name: "KIPKELION WEST"
          },
          {
            id: 6,
            name: "SOIN SIGOWET"
          },
        ]
      },
      {
        "name": "KIAMBU",
        "capital": "KIAMBU",
        "code": 22,
        "sub_counties": [
          {
            id: 1,
            name: "GATUNDU NORTH"
          },
          {
            id: 2,
            name: "GATUNDU SOUTH"
          },
          {
            id: 3,
            name: "GITHUNGURI"
          },
          {
            id: 4,
            name: "JUJA"
          },
          {
            id: 5,
            name: "KABETE"
          },
          {
            id: 6,
            name: "KIAMBAA"
          },
          {
            id: 7,
            name: "KIAMBU"
          },
          {
            id: 8,
            name: "KIKUYU"
          },
          {
            id: 9,
            name: "LIMURU"
          },
          {
            id: 10,
            name: "RUIRU"
          },
          {
            id: 11,
            name: "THIKA TOWN"
          },
          {
            id: 12,
            name: "LARI"
          },
        ]
      },
      {
        "name": "KILIFI",
        "capital": "KILIFI",
        "code": 3,
        "sub_counties": [
          {
            id: 1,
            name: "GANZE"
          },
          {
            id: 2,
            name: "KALOLENI"
          },
          {
            id: 3,
            name: "KILIFI NORTH"
          },
          {
            id: 4,
            name: "KILIFI SOUTH"
          },
          {
            id: 5,
            name: "MAGARINI"
          },
          {
            id: 6,
            name: "MALINDI"
          },
          {
            id: 7,
            name: "RABAI"
          },
        ]
      },
      {
        "name": "KIRINYAGA",
        "capital": "KERUGOYA/KUTUS",
        "code": 20,
        "sub_counties": [
          {
            id: 1,
            name: "KIRINYAGA CENTRAL"
          },
          {
            id: 2,
            name: "KIRINYAGA EAST"
          },
          {
            id: 3,
            name: "KIRINYAGA WEST"
          },
          {
            id: 4,
            name: "MWEA EAST"
          },
          {
            id: 5,
            name: "MWEA WEST"
          },
        ]
      },
      {
        "name": "KISII",
        "capital": "KISII",
        "code": 45,
        "sub_counties": [
          {
            id: 1,
            name: "KITUTU CHACHE NORTH"
          },
          {
            id: 2,
            name: "KITUTU CHACHE"
          },
          {
            id: 3,
            name: "NYARIBARI MASABA"
          },
          {
            id: 4,
            name: "NYARIBARI CHACHE"
             },
          {
            id: 5,
            name: "BOMACHOGE BORABU"
          },
          {
            id: 6,
            name: "BOMACHOGE CHACHE"
          },
          {
            id: 7,
            name: "BOBASI"
          },
          {
            id: 8,
            name: "SOUTH MUGIRANGO"
          },
          {
            id: 9,
            name: "BONCHARI"
          },
        ]
      },
      {
        "name": "KISUMU",
        "capital": "KISUMU",
        "code": 42,
        "sub_counties": [
          {
            id: 1,
            name: "KISUMU CENTRAL"
          },
          {
            id: 2,
            name: "KISUMU EAST"
          },
          {
            id: 3,
            name: "KISUMU WEST"
          },
          {
            id: 4,
            name: "MOHORONI"
          },
          {
            id: 5,
            name: "NYAKACH"
          },
          {
            id: 6,
            name: "NYANDO"
          },
          {
            id: 7,
            name: "SEME"
          },
        ]
      },
      {
        "name": "KITUI",
        "capital": "KITUI",
        "code": 15,
        "sub_counties": [
          {
            id: 1,
            name: "IKUTHA"
          },
        {
            id: 2,
            name: "KATULANI",
          },

          {
            id: 3,
            name: "KISASI"
          },
          {
            id: 4,
            name: "KITUI CENTRAL"
          },
          {
            id: 5,
            name: "KITUI WEST"
          },
          {
            id: 6,
            name: "LOWER YATTA"
          },
          {
            id: 7,
            name: "MATIYANI"
          },
          {
            id: 8,
            name: "MIGWANI"
          },
          {
            id: 9,
            name: "MUTITU"
          },
          {
            id: 10,
            name: "MUTOMO"
          },
          {
            id: 11,
            name: "MUUMONIKYUSU"
          },
          {
            id: 12,
            name: "MWINGI CENTRAL"
          },
          {
            id: 13,
            name: "MWINGI EAST"
          },
          {
            id: 14,
            name: "NZAMBANI"
          },
          {
            id: 15,
            name: "TSEIKURU"
          },
        ]
      },
      {
        "name": "KWALE",
        "capital": "KWALE",
        "code": 2,
        "sub_counties": [
          {
            id: 1,
            name: "KINANGO"
          },
          {
            id: 2,
            name: "LUNGALUNGA"
          },
          {
            id: 3,
            name: "MSAMBWENI"
          },
          {
            id: 4,
            name: "MUTUGA"
          },
        ]
      },
      {
        "name": "LAIKIPIA",
        "capital": "RUMURUTI",
        "code": 31,
        "sub_counties": [
          {
            id: 1,
            name: "LAIKIPIA CENTRAL"
          },
          {
            id: 2,
            name: "LAIKIPIA EAST"
          },
          {
            id: 3,
            name: "LAIKIPIA NORTH"
          },
          {
            id: 4,
            name: "LAIKIPIA WEST"
          },
          {
            id: 5,
            name: "NYAHURURU"
          },
        ]
      },
      {
        "name": "LAMU",
        "capital": "LAMU",
        "code": 5,
        "sub_counties": [
          {
            id: 1,
            name: "LAMU EAST"
          },
          {
            id: 2,
            name: "LAMU WEST"
          },
        ]
      },
      {
        "name": "MACHAKOS",
        "capital": "MACHAKOS",
        "code": 16,
        "sub_counties": [
          {
            id: 1,
            name: "KATHIANI"
          },
          {
            id: 2,
            name: "MACHAKOS TOWN"
          },
          {
            id: 3,
            name: "MASINGA"
          },
          {
            id: 4,
            name: "MATUNGULU"
          },
          {
            id: 5,
            name: "MAVOKO"
          },
          {
            id: 6,
            name: "MWALA"
          },
          {
            id: 7,
            name: "YATTA"
          },
        ]
      },
      {
        "name": "MAKUENI",
        "capital": "WOTE",
        "code": 17,
        "sub_counties": [
          {
            id: 1,
            name: "KAITI"
          },
          {
            id: 2,
            name: "KIBWEI WEST"
          },
          {
            id: 3,
            name: "KIBWEZI EAST"
          },
          {
            id: 4,
            name: "KILOME"
          },
          {
            id: 5,
            name: "MAKUENI"
          },
          {
            id: 6,
            name: "MBOONI"
          },
        ]
      },
      {
        "name": "MANDERA",
        "capital": "MANDERA",
        "code": 9,
        "sub_counties": [
          {
            id: 1,
            name: "BANISSA"
          },
          {
            id: 2,
            name: "LAFEY"
          },
          {
            id: 3,
            name: "MANDERA EAST"
          },
          {
            id: 4,
            name: "MANDERA NORTH"
          },
          {
            id: 5,
            name: "MANDERA SOUTH"
          },
          {
            id: 6,
            name: "MANDERA WEST"
          },
        ]
      },
      {
        "name": "MARSABIT",
        "capital": "MARSABIT",
        "code": 10,
        "sub_counties": [
          {
            id: 1,
            name: "LAISAMIS"
          },
          {
            id: 2,
            name: "MOYALE"
          },
          {
            id: 3,
            name: "NORTH HOR"
          },
          {
            id: 4,
            name: "SAKU"
          },
        ]
      },
      {
        "name": "MERU",
        "capital": "MERU",
        "code": 12,
        "sub_counties": [
          {
            id: 1,
            name: "BUURI"
          },
          {
            id: 2,
            name: "IGEMBE CENTRAL"
          },
          {
            id: 3,
            name: "IGEMBE NORTH"
          },
          {
            id: 4,
            name: "IGEMBE SOUTH"
          },
          {
            id: 5,
            name: "IMENTI CENTRAL"
          },
          {
            id: 6,
            name: "IMENTI NORTH"
          },
          {
            id: 7,
            name: "IMENTI SOUTH"
          },
          {
            id: 8,
            name: "TIGANIA EAST"
          },
          {
            id: 9,
            name: "TIGANIA WEST"
          },
        ]
      },
      {
        "name": "MIGORI",
        "capital": "MIGORI",
        "code": 44,
        "sub_counties": [
          {
            id: 1,
            name: "AWENDO"
          },
          {
            id: 2,
            name: "KURIA EAST"
          },
          {
            id: 3,
            name: "KURIA WEST"
          },
          {
            id: 4,
            name: "MABERA"
          },
          {
            id: 5,
            name: "NTIMARU"
          },
          {
            id: 6,
            name: "RONGO"
          },
          {
            id: 7,
            name: "SUNA EAST"
          },
          {
            id: 8,
            name: "SUNA WEST"
          },
          {
            id: 9,
            name: "URIRI"
          },
        ]
      },
      {
        "name": "MOMBASA",
        "capital": "MOMBASA CITY",
        "code": 1,
        "sub_counties": [
          {
            id: 1,
            name: "CHANGAMWE"
          },
          {
            id: 2,
            name: "JOMVU"
          },
          {
            id: 3,
            name: "KISAUNI"
          },
          {
            id: 4,
            name: "LIKONI"
          },
          {
            id: 5,
            name: "MVITA"
          },
          {
            id: 6,
            name: "NYALI"
          },
        ]
      },
      {
        "name": "MURANG'A",
        "capital": "MURANG'A",
        "code": 21,
        "sub_counties": [
          {
            id: 1,
            name: "GATANGA"
          },
          {
            id: 2,
            name: "KAHURO"
          },
          {
            id: 3,
            name: "KANDARA"
          },
          {
            id: 4,
            name: "KANGEMA"
          },
          {
            id: 5,
            name: "KIGUMO"
          },
          {
            id: 6,
            name: "KIHARU"
          },
          {
            id: 7,
            name: "MATHIOYA"
          },
          {
            id: 8,
            name: "MURANG’A SOUTH"
          },
        ]
      },
      {
        "name": "NAIROBI",
        "capital": "NAIROBI CITY",
        "code": 47,
        "sub_counties": [
          {
            id: 1,
            name: "DAGORETTI NORTH SUB COUNTY"
          },
          {
            id: 2,
            name: "DAGORETTI SOUTH SUB COUNTY"
          },
          {
            id: 3,
            name: "EMBAKASI CENTRAL SUB COUNT"
          },
          {
            id: 4,
            name: "EMBAKASI EAST SUB COUNTY"
          },
          {
            id: 5,
            name: "EMBAKASI NORTH SUB COUNTY"
          },
          {
            id: 6,
            name: "EMBAKASI SOUTH SUB COUNTY"
          },
          {
            id: 7,
            name: "EMBAKASI WEST SUB COUNTY"
          },
          {
            id: 8,
            name: "KAMUKUNJI SUB COUNTY"
          },
          {
            id: 9,
            name: "KASARANI SUB COUNTY"
          },
          {
            id: 10,
            name: "KIBRA SUB COUNTY"
          },
          {
            id: 11,
            name: "LANG'ATA SUB COUNTY"
          },
          {
            id: 12,
            name: "MAKADARA SUB COUNTY"
          },
          {
            id: 13,
            name: "MATHARE SUB COUNTY"
          },
          {
            id: 14,
            name: "ROYSAMBU SUB COUNTY"
          },
          {
            id: 15,
            name: "RUARAKA SUB COUNTY"
          },
          {
            id: 16,
            name: "STAREHE SUB COUNTY"
          },
          {
            id: 17,
            name: "WESTLANDS SUB COUNTY"
          },
        ]
      },
      {
        "name": "NAKURU",
        "capital": "NAKURU",
        "code": 32,
        "sub_counties": [
          {
            id: 1,
            name: "BAHATI"
          },
          {
            id: 2,
            name: "GILGIL"
          },
          {
            id: 3,
            name: "KURESOI NORTH"
          },
          {
            id: 4,
            name: "KURESOI SOUTH"
          },
          {
            id: 5,
            name: "MOLO"
          },
          {
            id: 6,
            name: "NAIVASHA"
          },
          {
            id: 7,
            name: "NAKURU TOWN EAST"
          },
          {
            id: 8,
            name: "NAKURU TOWN WEST"
          },
          {
            id: 9,
            name: "NJORO"
          },
          {
            id: 10,
            name: "RONGAI"
          },
          {
            id: 11,
            name: "SUBUKIA"
          },
        ]
      },
      {
        "name": "NANDI",
        "capital": "KAPSABET",
        "code": 29,
        "sub_counties": [
          {
            id: 1,
            name: "ALDAI"
          },
          {
            id: 2,
            name: "CHESUMEI"
          },
          {
            id: 3,
            name: "EMGWEN"
          },
          {
            id: 4,
            name: "MOSOP"
          },
          {
            id: 5,
            name: "NANDI HILLS"
          },
          {
            id: 6,
            name: "TINDIRET"
          },
        ]
      },
      {
        "name": "NAROK",
        "capital": "NAROK",
        "code": 33,
        "sub_counties": [
          {
            id: 1,
            name: "NAROK EAST"
          },
          {
            id: 2,
            name: "NAROK NORTH"
          },
          {
            id: 3,
            name: "NAROK SOUTH"
          },
          {
            id: 4,
            name: "NAROK WEST"
          },
          {
            id: 5,
            name: "TRANSMARA EAST"
          },
          {
            id: 6,
            name: "TRANSMARA WEST"
          },
        ]
      },
      {
        "name": "NYAMIRA",
        "capital": "NYAMIRA",
        "code": 46,
        "sub_counties": [
          {
            id: 1,
            name: "BORABU"
          },
          {
            id: 2,
            name: "MANGA"
          },
          {
            id: 3,
            name: "MASABA NORTH"
          },
          {
            id: 4,
            name: "NYAMIRA NORTH"
          },
          {
            id: 5,
            name: "NYAMIRA SOUTH"
          },
        ]
      },
      {
        "name": "NYANDARUA",
        "capital": "OL KALOU",
        "code": 18,
        "sub_counties": [
          {
            id: 1,
            name: "KINANGOP"
          },
          {
            id: 2,
            name: "KIPIPIRI"
          },
          {
            id: 3,
            name: "NDARAGWA"
          },
          {
            id: 4,
            name: "OL KALOU"
          },
          {
            id: 5,
            name: "OL JORO OROK"
          },
        ]
      },
      {
        "name": "NYERI",
        "capital": "NYERI",
        "code": 19,
        "sub_counties": [
          {
            id: 1,
            name: "KIENI EAST"
          },
          {
            id: 2,
            name: "KIENI WEST"
          },
          {
            id: 3,
            name: "MATHIRA EAST"
          },
          {
            id: 4,
            name: "MATHIRA WEST"
          },
          {
            id: 5,
            name: "MuKURWENI"
          },
          {
            id: 6,
            name: "NYERI TOWN"
          },
          {
            id: 7,
            name: "OTHAYA"
          },
          {
            id: 8,
            name: "TETU"
          },
        ]
      },
      {
        "name": "SAMBURU",
        "capital": "MARALAL",
        "code": 25,
        "sub_counties": [
          {
            id: 1,
            name: "SAMBURU EAST"
          },
          {
            id: 2,
            name: "SAMBURU NORTH"
          },
          {
            id: 3,
            name: "SAMBURU WEST"
          },
        ]
      },
      {
        "name": "SIAYA",
        "capital": "SIAYA",
        "code": 41,
        "sub_counties": [
          {
            id: 1,
            name: "ALEGO USONGA"
          },
          {
            id: 2,
            name: "BONDO"
          },
          {
            id: 3,
            name: "GEM"
          },
          {
            id: 4,
            name: "RARIEDA"
          },
          {
            id: 5,
            name: "UGENYA"
          },
          {
            id: 6,
            name: "UNGUJA"
          },
        ]
      },
      {
        "name": "TAITA-TAVETA",
        "capital": "VOI",
        "code": 6,
        "sub_counties": [
          {
            id: 1,
            name: "MWATATE"
          },
          {
            id: 2,
            name: "TAVETA"
          },
          {
            id: 3,
            name: "VOI"
          },
          {
            id: 4,
            name: "WUNDANYI"
          },
        ]
      },
      {
        "name": "TANA RIVER",
        "capital": "HOLA",
        "code": 4,
        "sub_counties": [
          {
            id: 1,
            name: "BURA"
          },
          {
            id: 2,
            name: "GALOLE"
          },
          {
            id: 3,
            name: "GARSEN"
          },
        ]
      },
      {
        "name": "THARAKA-NITHI",
        "capital": "CHUKA",
        "code": 13,
        "sub_counties": [
          {
            id: 1,
            name: "CHUKA"
          },
          {
            id: 2,
            name: "IGAMBANGOBE"
          },
          {
            id: 3,
            name: "MAARA"
          },
          {
            id: 4,
            name: "MUTHAMBI"
          },
          {
            id: 5,
            name: "THARAKA NORTH"
          },
          {
            id: 6,
            name: "THARAKA SOUTH"
          },
        ]
      },
      {
        "name": "TRANS-NZOIA",
        "capital": "KITALE",
        "code": 26,
        "sub_counties": [
          {
            id: 1,
            name: "CHERANGANY"
          },
          {
            id: 2,
            name: "ENDEBESS"
          },
          {
            id: 3,
            name: "KIMININI"
          },
          {
            id: 4,
            name: "KWANZA"
          },
          {
            id: 5,
            name: "SABOTI"
          },
        ]
      },
      {
        "name": "TURKANA",
        "capital": "LODWAR",
        "code": 23,
        "sub_counties": [
          {
            id: 1,
            name: "LOIMA"
          },
          {
            id: 2,
            name: "TURKANA CENTRAL"
          },
          {
            id: 3,
            name: "TURKANA EAST"
          },
          {
            id: 4,
            name: "TURKANA NORTH"
          },
          {
            id: 5,
            name: "TURKANA SOUTH"
          },
        ]
      },
      {
        "name": "UASIN GISHU",
        "capital": "ELDORET",
        "code": 27,
        "sub_counties": [
          {
            id: 1,
            name: "AINABKOI"
          },
          {
            id: 2,
            name: "KAPSERET"
          },
          {
            id: 3,
            name: "KESSES"
          },
          {
            id: 4,
            name: "MOIBEN"
          },
          {
            id: 5,
            name: "SOY"
          },
          {
            id: 6,
            name: "TURBO"
          },
        ]
      },
      {
        "name": "VIHIGA",
        "capital": "VIHIGA",
        "code": 38,
        "sub_counties": [
          {
            id: 1,
            name: "EMUHAYA"
          },
          {
            id: 2,
            name: "HAMISI"
          },
          {
            id: 3,
            name: "LUANDA"
          },
          {
            id: 4,
            name: "SABATIA"
          },
          {
            id: 5,
            name: "VIHIGA"
          },
        ]
      },
      {
        "name": "WAJIR",
        "capital": "WAJIR",
        "code": 8,
        "sub_counties": [
          {
            id: 1,
            name: "ELDAS"
          },
          {
            id: 2,
            name: "TARBAJ"
          },
          {
            id: 3,
            name: "WAJIR EAST"
          },
          {
            id: 4,
            name: "WAJIR NORTH"
          },
          {
            id: 5,
            name: "WAJIR SOUTH"
          },
          {
            id: 6,
            name: "WAJIR WEST"
          },
        ]
      },
      {
        "name": "WEST POKOT",
        "capital": "KAPENGURIA",
        "code": 24,
        "sub_counties": [
          {
            id: 1,
            name: "CENTRAL POKOT"
          },
          {
            id: 2,
            name: "NORTH POKOT"
          },
          {
            id: 3,
            name: "POKOT SOUTH"
          },
          {
            id: 4,
            name: "WEST POKOT"
          },
        ]
      }
    ]
  }
}