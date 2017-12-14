'use strict';
const fs = require('fs');

let rawdata = fs.readFileSync('test.json');  
let student = JSON.parse(rawdata);  
console.log(student.length);  

var write_obj = {
   table: []
};

var gonderi = {
    "GONDERICI": []
};
var teslim = {
    "TESLIM_EDEN": []
};

var alici = {
    "ALICI":[] 
};

var teslim_alan = {
    "TESLIM_ALAN":[]
};

var aktivasyon = {
    "AKTIVASYON":[]
};

var guncelleyen = {
    "GUNCELLEYEN":[]
};

var obj  ;
var json_obj;

for (var i = 0; i<student.length;i++){
	//console.log("Adı:"+student[i].GÖNDERİCİ_ADI);  
	
	var first_obj = {
	    "HIZMET_SAGLAYICI_ID" : student[i].HİZMET_SAĞLAYICI_ID,
	    "KARGO_DURUMU" : student[i].KARGO_DURUMU,
	    "BARKOD_NO" : student[i].BARKOD_NO,
	    "GONDERİ_TURU" : student[i].GONDERİ_TÜRÜ,
	    "GONDERI_AGIRLIGI" : student[i].GÖNDERİ_AĞIRLIĞI,
	    "GONDERİ_YONTEMI" : student[i].GÖNDERİ_YÖNTEMİ,
	     "GONDERICI_TIPI" : student[i].GÖNDERİCİ_TİPİ,
	     "INTERNET_ALIS_VERISI" : student[i].İNTERNET_ALIŞVERİŞİ,
	     "YURTDISI_GONDERI" : student[i].YURTDIŞI_GÖNDERİ,
	     "GUMRUGE_TABI_GONDERI" : student[i].GÜMRÜĞE_TABİ_GÖNDERİ,
	     "GONDERICI_TIPI" : student[i].GÖNDERİCİ_TİPİ,
	     "GONDERI_TARIHI" : student[i].GÖNDERİ_TARİHİ,
	     "TESLIM_TARIHI" : student[i].TESLİM_TARİHİ
	    
	    
	}

	     //console.log(first_obj);
	
	var gonderici_obj = {
    "ADI" : student[i].GÖNDERİCİ_ADI,
    "SOYADI" : student[i].GÖNDERİCİ_SOYADI,
    "TC_KIMLIK_NO" : student[i].GÖNDERİCİ_TC_KİMLİK_NO,
    "PASAPORT_NO" : student[i].GÖNDERİCİ_PASAPORT_NO,
    "UNVAN" : student[i].GÖNDERİCİ_UNVAN,
    "CINSIYETI" : student[i].GÖNDERİCİ_CINSIYETI,
    "UYRUK" : student[i].GÖNDERİCİ_UYRUK,
    "ULKE" : student[i].GÖNDERİCİ_ÜLKE,
    "IL": student[i].GÖNDERİCİ_IL,
    "ILCE" : student[i].GÖNDERİCİ_ILCE,
    "ADRES" : student[i].GÖNDERİCİ_ADRES,
    "ADRES_KODU" : student[i].GÖNDERİCİ_ADRES_KODU,
    "POSTA_KODU" : student[i].GÖNDERİCİ_POSTA_KODU,
    "IRTIBAT_TEL_1" : student[i].GÖNDERİCİ_IRTIBAT_TEL_1,
    "IRTIBAT_TEL_2" : student[i].GÖNDERİCİ_IRTIBAT_TEL_2,
    "E-MAIL" : student[i].GÖNDERİCİ_E_MAIL,
    "MESLEK" : student[i].GÖNDERİCİ_MESLEK
    
} 

var second_obj = {
    
    "ADI_SOYADI" : student[i].TESLİM_EDEN_ADI_SOYADI,
    "TC_KIMLIK_NO" : student[i].TESLİM_EDEN_TC_KIMLIK_NO,
    "ADRES" : student[i].TESLİM_EDEN_ADRES
}

var third_obj = {
    "ADI" : student[i].ALICI_ADI,
    "SOYADI" : student[i].ALICI_SOYADI,
    "TC_KIMLIK_NO" : student[i].ALICI_TC_KIMLIK_NO,
    "ALICI_PASAPORT NO" : student[i].ALICI_PASAPORT_NO,
     "UNVAN" : student[i].ALICI_UNVAN,
     "CINSIYETI" : student[i].ALICI_CINSIYETI,
     "UYRUK" : student[i].ALICI_UYRUK,
     "ULKE" : student[i].ALICI_ULKE,
     "IL" : student[i].ALICI_IL,
     "ILCE" : student[i].ALICI_ILCE,
     "ADRES" : student[i].ALICI_ADRES,
     "ADRES_KODU" : student[i].ALICI_ADRES_KODU,
     "POSTA_KODU" : student[i].ALICI_POSTA_KODU,
     "IRTIBAT_TEL1" : student[i].ALICI_IRTIBAT_TEL1,
     "IRTIBAT_TEL2" : student[i].ALICI_IRTIBAT_TEL2,
     "E_MAIL" : student[i].ALICI_E_MAIL,
     "MESLEK" : student[i].ALICI_MESLEK
   
}

var fourth_obj = {
    "ADI_SOYADI" : student[i].TESLİM_ALAN_ADI_SOYADI,
    "TC_KIMLIK_NO" : student[i].TESLİM_ALAN_TC_KIMLIK_NO,
    "ADRES" : student[i].TESLİM_ALAN_ADRES
    
}

var fifth_obj = {
    "ODEME_TIPI" : student[i].ÖDEME_TİPİ,
    "FATURA_ADRESI" : student[i].FATURA_ADRESI,
    "KURYE_ADI_SOYADI" : student[i].KURYE_ADI_SOYADI,
    "KURYE_TC_NO" : student[i].KURYE_TC_NO,
    "KURYE_TC_NO" : student[i].KURYE_TC_NO,
    
}

var sixth_obj = {
    "BAYI_KODU" : student[i].AKTİVASYON_BAYİ_KODU,
    "BAYI_ADRESI" : student[i].AKTİVASYON_BAYİ_ADRESİ,
    "BAYI_ADRES_KODU" : student[i].AKTİVASYON_BAYİ_ADRES_KODU,
    "PERSONEL_ADI_SOYADI" : student[i].AKTİVASYON_PERSONEL_ADI_SOYADI,
    "PERSONEL_TC_KIMLIK_NO" : student[i].AKTİVASYON_PERSONEL_TC_KIMLIK_NO
    
}

var seventh_obj = {
    "BAYI_KODU" : student[i].GÜNCELLEYEN_BAYİ_KODU,
    "BAYI_ADRESI" : student[i].GÜNCELLEYEN_BAYİ_ADRESI,
    "BAYI_ADRES_KODU" : student[i].GÜNCELLEYEN_BAYİ_ADRES_KODU,
    "PERSONEL_ADI_SOYADI" : student[i].GÜNCELLEYEN_PERSONEL_ADI_SOYADI,
    "PERSONEL_TC_KIMLIK_NO" : student[i].GÜNCELLEYEN_PERSONEL_TC_KİMLİK_NO,
    "GUNCELLEME_ZAMANI" : student[i].GÜNCELLEME_ZAMANI
}

gonderi.GONDERICI.push(gonderici_obj);
teslim.TESLIM_EDEN.push(second_obj);
alici.ALICI.push(third_obj);
teslim_alan.TESLIM_ALAN.push(fourth_obj);
aktivasyon.AKTIVASYON.push(sixth_obj);
guncelleyen.GUNCELLEYEN.push(seventh_obj);
//obj = JSON.stringify(first_obj)  + JSON.stringify(gonderi) + "," + JSON.stringify(teslim);
obj = {...first_obj, ...gonderi, ...teslim,...alici, ...teslim_alan, ...fifth_obj, ...aktivasyon, ...guncelleyen};
json_obj = JSON.stringify(obj);

//obj = obj.replace(/\}\{/, ",");
//obj = JSON.parse(obj);

console.log(json_obj);

write_obj.table.push(obj);
var write_json = JSON.stringify(write_obj.table);

fs.writeFile('myjsonfile.json', write_json, 'utf8', function(err){
    
    console.log(err);
});
gonderi = {
    "GONDERICI": []
};

teslim = {
    "TESLIM_EDEN": []
};

alici = {
    "ALICI":[] 
};

teslim_alan = {
    "TESLIM_ALAN":[]
};

aktivasyon = {
    "AKTIVASYON":[]
};

guncelleyen = {
    "GUNCELLEYEN":[]
};

}


   