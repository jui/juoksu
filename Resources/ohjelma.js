var ohjelma = {
	1: {info: "Kävele 5 min, juokse 2 min. Pidä pieni tauko, käänny takaisin ja toista harjoittelu kotimatkalla."},
	2: {info: "Kävele 30 min lenkki."},
	3: {info: "Pidä vapaapäivä, nosta jalat vähäksi aikaa ylös."},
	4: {info: "Kävele 5 min, juokse 2 min. Pidä pieni tauko, käänny takaisin ja toista harjoitus kotimatkalla."},
	5: {info: "Kävele reippaasti 5 min, juokse 2 - 3 min. Käänny ja kävele kotiin."},
	6: {info: "Pidä vapaapäivä tai käy rauhallisella kävelyllä."},
	7: {info: "Kävele 5 min, juokse 2 min. Pidä pieni tauko, käänny takaisin ja toista harjoitus kotimatkalla."},
	8: {info: "Tee vähintään 30 min  reipas kävelylenkki."},
	9: {info: "Kävele 5 min, juokse 4 min. Käänny takaisin ja toista harjoitus kotimatkalla."},
	10: {info: "Vapaapäivä. Voit katsella vaikka videoita napostella hieman karkkia, olet sen ansainnut."},
	11: {info: "Kävele 3 min, juokse 4 min. Pidä pieni tauko, käänny ja juokse 4 min, kävele 3 min."},
	12: {info: "Kävele 5 min. rauhallisesti, juokse 4 min. Käänny takaisin ja toista harjoitus kotimatkalla."},
	13: {info: "Kävele vähintään 45 min niin, että hikoilet hieman."},
	14: {info: "Vapaa. Hemmottele itseäsi, sillä ansaitset sen."},
	15: {info: "Kävele 5 min, juokse 4 min. Käänny takaisin ja toista harjoitus kotimatkalla."},
	16: {info: "Kävele 3 min, juokse 4 min. Pidä pieni tauko, käänny ja juokse 4 min, kävele 3 min."},
	17: {info: "Kävele vähintään 30 min vauhtia, joka saa hien pintaan."},
	18: {info: "Vapaa! Olet oikealla tiellä!"},
	19: {info: "Kävele 2 min, juokse 5 min ja pidä pieni tauko. Käänny, juokse 5 min ja kävele 2 min."},
	20: {info: "Vapaa. Teet jo parin kilometrin lenkkejä ja edistyt koko ajan!"},
	21: {info: "Kävele vähintään 45 min. Mieluusti niin kovaa, että hikoilet."},
	22: {info: "Kävele 2 min, juokse 5 min, pidä pieni tauko. Käänny, juokse 5 min ja kävele 2 min."},
	23: {info: "Kävele 1 min, juokse 5 min. Pidä ½ min tauko. Käänny juokse 5 min. ja kävele 1 min."},
	24: {info: "Vapaa. Tänään et saa harrastaa mitään liikuntaa, ainoastaan rentoutua."},
	25: {info: "Kävele 1 min, juokse 7 min, kävele 2 min, juokse 7 min, käänny ja kävele reippaasti kotiin."},
	26: {info: "Juokse 15 min rauhallisesti, käänny ja kävele kotiin."},
	27: {info: "Vapaa. Pystyt jo juoksemaan 2,5 km ja koko lenkin pituus on 5 km."},
	28: {info: "Tee rauhallinen kävelylenkki. Kävele niin pitkään kuin huvittaa."},
	29: {info: "Juokse 7½ min. Käänny pitämättä taukoa ja juokse 7½ min kotiin."},
	30: {info: "Kävele 30 min rauhallinen lenkki."},
	31: {info: "Juokse 10 min ja käänny. Juokse 10 min taukoja pitämättä kotia kohti."},
	32: {info: "Vapaa. Hemmottele itseäsi olet kohta tavoitteessasi!"},
	33: {info: "Tee tunnin kävelylenkki."},
	34: {info: "Juokse 15 min rauhallisesti. Käänny, kävele ja juokse kotiin."},
	35: {info: "Rentoudu!"},
	36: {info: "Juokse 9 min. Käänny pitämättä taukoa. Juokse 9 min kotiin."},
	37: {info: "Tee 30 min rauhallinen kävelylenkki."},
	38: {info: "Juokse 12 min, käänny. Juokse 12 min kotia kohti taukoa pitämättä."},
	39: {info: "Vapaa. Unohda kaikki muu ja ihmettele vain, kuinka hyvin olet edistynyt."},
	
40: {info:"Tee ½ - 1 tunnin kävelylenkki."},

41: {info:"Juokse lyhyehkö lenkki vain huvin vuoksi. Älä yritä suorittaa mitään."},

42: {info:"Mittaa 5 km:n matka ja juokse se. Tänään olet saavuttanut tavoitteesi!"},

43: {info:"Rentoudu ja nauti eilisestä saavutuksesta."},

44: {info:"Tee rauhallinen ja rento 15 min juoksulenkki."},

45: {info:"Vapaa, voit kävellä pienen lenkin."},

46: {info:"Juokse 5 km lenkki, tempoa vaihdellen."},

47: {info:"Kävelylenkki 45 min."},

48: {info:"Vapaa. Rentoudu ja lataa akkuja huomiseksi!"},

49: {info:"Juokse 5 km ja vielä 5 min. Kävele takaisin."},

50: {info:"Vapaa. Helli ajatusta siitä, miten hyvä olet!"},

51: {info:"Tee vähintään 30 min kävelylenkki."},

52: {info:"Juokse 20 min. Juokse 5 x 1 min täyttä vauhtia ja muuten rauhallisemmin."},

53: {info:"Vapaa, eilen oli rankka päivä!"},

54: {info:"Juokse 5 km ja vielä 5 min päälle pitämättä taukoa välissä."},

55: {info:"Teen tunnin kävelylenkki."},

56: {info:"Juokse rauhallisesti 20 min lenkki."},

57: {info:"Vapaa. Rentoudu  lukien tai televisiota katsellen."},

58: {info:"Juokse 5 km ja vielä 5 min. Käänny kotiinpäin ja juokse vielä 5 min. "},

59: {info:"Tee 30 min kävelylenkki."},

60: {info:"Vapaa. Lataa akut huomista harjoitusta varten!"},

61: {info:"Juokse 5 km vaihdellen tempoa minuutin välein."},

62: {info:"Vapaa, eilinen väsyttää vielä."},

63: {info:"Juokse 30 min rauhallisesti."},

64: {info:"Vapaa. Tänään et saa harrastaa liikuntaa."},

65: {info:"Juokse 5 km + 10 min. Käänny ja juokse rauhallisesti vielä 10 min."},

66: {info:"Vapaa. Juoksit eilen jo 8 - 9 km!"},

67: {info:"Tee 30 min kävelylenkki."},

68: {info:"Juokse 30 min intervalleina, joiden määrän ja vauhdin määräät itse. (pyrähdellen)"},

69: {info:"Vapaa. Rentoudu täysin. Pyydä jotakuta hieromaan jalkojasi."},

70: {info:"Juokse 40 min rauhallisesti. 20 min yhteen suuntaan ja sitten kotiin."},

71: {info:"Vapaa. Olet lähellä tavoitettasi."},

72: {info:"Tee 30 min kävelylenkki ja valmistaudu huomista varten."},

73: {info:"Intervalli- harjoittelu. 1 min kovaa, 2 min rauhallisesti. Yhteensä 30 min."},

74: {info:"Vapaa ! "},

75: {info:"Kävele 30 min reippaasti."},

76: {info:"Kävele pieni lenkki ja syö järkevästi. Huomenna on se suuri päivä!"},

77: {info:"Juokse 5 km lenkki kahdesti pitämättä taukoa välillä. Pystyt juoksemaan jo 10 km! "},

	};
