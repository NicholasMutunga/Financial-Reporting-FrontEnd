import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  constructor() { }
  banks() {
    return [
      {
        "code": '01',
        "name": "Kenya Commercial Bank Limited",
        "branches": [
            {
                branchCode: '091',
                branchName: "Eastleigh"
            },
            {
                branchCode: '092',
                branchName: "CPC",
            },
            {
                branchCode: '094',
                branchName: "Head Office",
            },
            {
                branchCode: '095',
                branchName: "Wote",
            },
            {
                branchCode: '100',
                branchName: "Moi Avenue",
            },
            {
                branchCode: '101',
                branchName: "Kipande House",
            },
            {
                branchCode: '102',
                branchName: "Treasury Square",
            },
            {
                branchCode: '103',
                branchName: "Nakuru",
            },
            {
                branchCode: '104',
                branchName: "KICC",
            },
            {
                branchCode: '105',
                branchName: "Kisumu",
            },
            {
                branchCode: '106',
                branchName: "Kericho",
            },
            {
                branchCode: '107',
                branchName: "Tom Mboya",
            },
            {
                branchCode: '108',
                branchName: "Thika",
            },
            {
                branchCode: '110',
                branchName: "Kakamega",
            },
            {
                branchCode: '111',
                branchName: "Kilindini",
            },
            {
                branchCode: '112',
                branchName: "Nyeri",
            },
            {
                branchCode: '113',
                branchName: "Industrial Area",
            },
            {
                branchCode: '114',
                branchName: "River Road",
            },
            {
                branchCode: '115',
                branchName: "Muranga",
            },
            {
                branchCode: '116',
                branchName: "Embu",
            },
            {
                branchCode: '117',
                branchName: "Kangema",
            },
            {
                branchCode: '119',
                branchName: "Kiambu",
            },
            {
                branchCode: '120',
                branchName: "Karatina",
            },
            {
                branchCode: '121',
                branchName: "Siaya",
            }
        ]
    },
    {
        'code': '02',
        'name': "Standard Chartered Bank Kenya",
        'branches': [
            {
                branchCode: '000',
                branchName: 'Eldoret',
            },
            {
                branchCode: '001',
                branchName: 'Kericho',
            },
            {
                branchCode: '002',
                branchName: 'Kisumu',
            },
            {
                branchCode: '003',
                branchName: 'Kiatle',
            },
            {
                branchCode: '004',
                branchName: 'Treasury Square',
            },
            {
                branchCode: '005',
                branchName: 'Maritime',
            },
            {
                branchCode: '006',
                branchName: 'Kenyatta',
            },
            {
                branchCode: '007',
                branchName: 'Kimathi',
            }
        ]
    },
    {
        code: '03',
        name: 'Barclays Bank of Kenya Limited',
        branches: [
            {
                branchCode: '002',
                branchName: 'Kapsabet',
            },
            {
                branchCode: '003',
                branchName: 'Eldoret Std & Prestige',
            },
            {
                branchCode: '004',
                branchName: 'Embu Std & Prestige',
            },
            {
                branchCode: '005',
                branchName: "Murang'a",
            },
        ]
    },
    {
        'code': '05',
        'name': 'Bank of India',
        'branches': [
            {
                branchCode: '000',
                branchName: 'Nairobi',
            },
            {
                branchCode: '001',
                branchName: 'Mombasa',
            },
            {
                branchCode: '002',
                branchName: 'Industrial Area',
            },
            {
                branchCode: '003',
                branchName: 'Westlands',
            }
        ]
    },
    {
        'code': '06',
        'name': 'Bank of Baroda (Kenya) Limited',
        'branches': [
            {
                branchCode: '000',
                branchName: 'Nairobi Main',
            },
            {
                branchCode: '002',
                branchName: 'Digo Rd',
            },
            {
                branchCode: '004',
                branchName: 'Thika',
            },
            {
                branchCode: '005',
                branchName: 'Kisumu',
            }
        ]
    },
    {
        'code': '07',
        'name': 'Commercial Bank of Africa Ltd',
        'branches': [
            {
                branchCode: '000',
                branchName: 'Head Office ',
            },
            {
                branchCode: '001',
                branchName: 'Upper Hill ',
            },
            {
                branchCode: '002',
                branchName: 'Wabera',
            },
            {
                branchCode: '003',
                branchName: 'Mama NginaBr/Hilton Agency',
            }
        ]
    },
    {
        'code': '08',
        'name': 'Habib Bank Limited',
        'branches': [
            {
                branchCode: '046',
                branchName: 'Mombasa',
            },
            {
                branchCode: '047',
                branchName: 'Malindi',
            },
            {
                branchCode: '048',
                branchName: 'Nairobi',
            },
            {
                branchCode: '049',
                branchName: 'Nairobi',
            }
        ]
    },
    {
        'code': '09',
        'name': 'Central Bank of Kenya',
        'branches': [
            {
                branchCode: '000',
                branchName: 'Head Office ',
            },
            {
                branchCode: '001',
                branchName: 'Head Office',
            },
            {
                branchCode: '002',
                branchName: 'Mombasa',
            },
            {
                branchCode: '003',
                branchName: 'Kisumu',
            },
            {
                branchCode: '004',
                branchName: 'Eldoret',
            },
        ]
    }, {
        'code': '10',
        'name': 'Prime Bank Limited ',
        'branches': [

        ]
    },
    {
        'code': '11',
        'name': 'Co-operative Bank of Kenya Ltd',
        'branches': [

        ]
    },
    {
        'code': '12',
        'name': 'National Bank of Kenya Ltd',
        'branches': [

        ]
    },
    {
        'code': '14',
        'name': 'Oriental Commercial Bank Ltd',
        'branches': [

        ]
    },
    {
        'code': '17',
        'name': 'Habib Bank A.G Zurich',
        'branches': [

        ]
    },
   
    {
        'code': '18',
        'name': 'Middle East Bank Kenya Ltd',
        'branches': [

        ]
    },
    {
        'code': '19',
        'name': 'Bank of Africa Kenya Ltd',
        'branches': [

        ]
    },
    {
        'code': '20',
        'name': 'Dubai Bank Ltd',
        'branches': [

        ]
    },
    {
        'code': '23',
        'name': 'Consolidated Bank of Kenya Ltd',
        'branches': [

        ]
    },
    {
        'code': '25',
        'name': 'Credit Bank Limited',
        'branches': [

        ]
    },
    {
        'code': '26',
        'name': 'Trans-National Bank Limited',
        'branches': [

        ]
    },
    {
        'code': '30',
        'name': 'Chase Bank Limited',
        'branches': [

        ]
    },
    {
        'code': '31',
        'name': 'CfC Stanbic Bank Kenya Limited',
        'branches': [

        ]
    },
    {
        'code': '35',
        'name': 'African BankingCorporation Ltd',
        'branches': [

        ]
    }
    ]
  }
}
