# Áramütés elleni védelmi osztályok

Az áramütés elleni védelmi osztály azt mutatja meg, hogy az adott készülék milyen áramütés elleni védelmi móddal van ellátva, illetve milyen áramütés elleni védelmi módokhoz való csatlakozásra készült.

## Védelem típusok

### Alapvédelem (basic protection)

Korábban: **közvetlen érintés elleni védelem**.

Az áramütéses balesetek egy része úgy következik be, hogy az ember (közvetlenül, vagy szerszámon, segédeszközön keresztül) általában a kezével üzemszerűen feszültség alatt álló (**aktív**) részt érint.

A közvetlen érintés elleni védelmet **védőfedéssel vagy burkolattal, elkerítéssel** kell biztosítani, vagy olyan **szigeteléssel**, amely kibírja a tápáramkörre előírt legkisebb próbafeszültséget.

### Hibavédelem (fault protection)

Korábban: **közvetett érintés elleni védelem** (más néven: **érintésvédelem**).

Az áramütéses balesetek nagy része úgy következik be, hogy a balesetes a villamos szerkezet olyan részét (úgynevezett **test**-ét) érinti meg, amely üzemszerűen feszültségmentes, de hiba (testzárlat) következtében feszültség alá kerül.

Ezek az érintésvédelmi módok nem a testek érintését kívánják megakadályozni, hanem azt, hogy az érinthető testek tartósan (hosszabb ideig) veszélyes érintési feszültség alá kerüljenek.

## Védelmi osztályok

| Védelmi<br/>osztály | Jele | Jellemzése |
|:---:|:---:|---|
| **0** | - | Nincs külön védelem, a védelem az **üzemi szigetelésen** alapul (elkerítés, burkolás, védőelválasztás) |
| **I** | ![Földelés jel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIyMCIgeTE9IjEwIiB4Mj0iMjAiIHkyPSIyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjEzIiB5MT0iMjUiIHgyPSIyNyIgeTI9IjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMTUiIHkxPSIyOSIgeDI9IjI1IiB5Mj0iMjkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNyIgeTE9IjMzIiB4Mj0iMjMiIHkyPSIzMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+) | Védőföldeléssel ellátott elektromos berendezés. Az üzemi szigetelés mellett **járulékos védelem** van (nullázás, védőföldelés). Védelem a táplálás önműködő lekapcsolásával. |
| **II** | ![Kettős szigetelés jel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIxMyIgeT0iMTMiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+) | **Kettős szigetelésű** berendezés. Az üzemi szigetelés mellett **megerősített szigetelés** van. |
| **III** | ![Törpefeszültség jel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBvbHlnb24gcG9pbnRzPSIyMCw1IDM1LDIwIDIwLDM1IDUsMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxNCIgeTE9IjE0IiB4Mj0iMTQiIHkyPSIyNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjIwIiB5MT0iMTQiIHgyPSIyMCIgeTI9IjI2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMjYiIHkxPSIxNCIgeDI9IjI2IiB5Mj0iMjYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==) | **Törpefeszültségű** berendezés táplálást jelent (SELV, PELV). |

## Törpefeszültség

A törpefeszültség általában **50 V-nál nem nagyobb váltakozó-** vagy **120 V-nál nem nagyobb egyenfeszültséget** jelent.

Egyes különösen veszélyes helyeken (egészségügyi, oktatási intézmények, óvodák stb.) ennek felét, negyedét is előírhatják.

## Érintésvédelmi módszerek csoportosítása

### Aktív érintésvédelmi módszerek

Azt jellemzi, hogy ha az érintési feszültség meghaladja a megengedett értéket, akkor **önműködően, az előírt időn belül lekapcsolja** a meghibásodott készüléket.

Aktív érintésvédelmi módszerek:
- **VF** – védőföldelés
- **NU** – nullázás
- **EPH** – egyenpotenciálra hozás
- **ÁVK** – áramvédő-kapcsolás

### Passzív érintésvédelmi módszerek

Azt jellemzi, hogy az érintési feszültséget **mindig veszélytelen értéken tartják**, tehát lekapcsolás nem szükséges.

Passzív érintésvédelmi módszerek:
- **KSZ** – kettős szigetelés
- **TF** – törpefeszültség
- **VE** – védőelválasztás

## Áram-védőkapcsoló (AVK)

Az áram-védőkapcsoló (AVK) a védővezetős érintésvédelmi módoknál (főként a TN és TT rendszereknél) érintésvédelmi kikapcsolásra a túláramvédelem helyett igen előnyösen alkalmazott kikapcsoló szerv.

> **Fontos:** Az AVK **nem külön érintésvédelmi mód**. Túláramvédelmet nem lát el!

> **Megjegyzés:** A villamos balesetek nagy része nem áramütéses, hanem égési baleset, amit a berendezéseken fellépő villamos ív okoz!
