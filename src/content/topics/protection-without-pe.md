# Védővezető nélküli érintésvédelmi módok

A védővezetős (PE-s) módszerek mellett léteznek olyan érintésvédelmi megoldások is, amelyek **nem igényelnek védővezetőt**.

## 1. Kettős vagy megerősített szigetelés

### Védelem kétszintű szigeteléssel

A kettős szigetelésű készülékeknél a védelem két szinten valósul meg:

- **Alapvédelem:** Az **alapszigetelés** (üzemi szigetelés) biztosítja
- **Hibavédelem:** A **kiegészítő szigetelés** (védőszigetelés) biztosítja

### Megerősített szigetelés

Egyetlen szigetelési réteg, amely azonban mechanikailag és elektromosan olyan erős, hogy egyenértékű a kettős szigeteléssel.

### Példák kettős szigetelésű készülékekre

- Kézi szerszámok (fúrógép, csiszológép)
- Konyhai gépek (turmixgép, robotgép)
- Híradástechnikai eszközök
- Műanyag házas készülékek

### Jelölés

A kettős szigetelésű készülékek jelölése:

![Kettős szigetelés jel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIxMyIgeT0iMTMiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+)

**Négyzet a négyzetben** szimbólum

### Csatlakozás

Ezen készülékek csatlakozódugóin **védőérintkező nincs** (2 pólus).

> **Megjegyzés:** A kettős szigetelésű készülékek **II. védelmi osztályúak**.

## 2. Védőelválasztás

### Alapelv

Egy **elválasztótranszformátor** közbeiktatásával a védendő fogyasztó és a táplálóhálózat **galvanikus összeköttetését megszüntetjük**.

### Elválasztótranszformátor jellemzői

- **Áttétel:** 1:1 (primer és szekunder feszültség azonos)
- **Szabvány:** MSZ 9229 szerinti kivitel
- **Szigetelés:** A tekercsek között külön szigetelés
- **Max. feszültség:** 500 V névleges feszültség

### Működés

Elsődleges oldal (primer):
- Csatlakozik a hálózathoz
- Földelt csillagpont

Másodlagos oldal (szekunder):
- **Földelni tilos!**
- Galvanikusan elválasztva a hálózattól
- Ha az ember a szekunder oldali vezetéket megérinti, **nincs áramkör** a földön keresztül

### Korlátozások

- Egy transzformátorról **csak egy fogyasztó működtethető**
- A szekunder oldal földelése tilos
- Csak speciális alkalmazásokra (pl. fürdőszobai borotva csatlakozó)

### Jelölés

Az elválasztótranszformátor jelölése:

![Elválasztótranszformátor jel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIyMCIgcj0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjI2IiBjeT0iMjAiIHI9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=)

**Két összefogott kör** szimbólum

### Alkalmazási példák

- Fürdőszobai borotva aljzatok
- Szerszámgépek különleges esetekben
- Orvosi műszerek
- Vizsgálati és mérőkörök

> **Fontos:** A védőelválasztás csak akkor hatékony, ha a szekunder oldal szigetelt marad a földtől!

## 3. Törpefeszültség (SELV/PELV)

A **törpefeszültség** alkalmazása szintén védővezető nélküli érintésvédelmi mód, amelyet a **III. védelmi osztály** képvisel.

### Feszültséghatárok

- **Váltakozó feszültség:** max. 50 V
- **Egyenfeszültség:** max. 120 V

Különösen veszélyes helyeken (óvodák, egészségügyi intézmények):
- Feszültség lehet akár a fenti értékek **fele vagy negyede** is

### SELV és PELV rendszerek

**SELV (Safety Extra-Low Voltage):**
- Biztonságos törpefeszültség
- Szekunder oldal **nincs földelve**
- Galvanikusan elválasztva

**PELV (Protective Extra-Low Voltage):**
- Védett törpefeszültség
- Szekunder oldal **földelt**

**FELV (Functional Extra-Low Voltage):**
- Funkcionális törpefeszültség
- **Nem érintésvédelmi célú**, hanem funkcionális célú (pl. vezérlések, érzékelők)
- Példák: 12V vagy 24V rendszerek

### Törpefeszültségű rendszerek követelményei

- Csak **különleges kivitelű biztonsági transzformátort** szabad használni
- A vezetőket **külön csőben** kell szerelni
- **Különálló elosztó és biztosító** táblával kell rendelkezzen
- A csatlakozó **dugók és aljzatok egyéni kialakításúak**, hogy ne lehessen felcserélni hálózati csatlakozókkal

## 4. A környezet elszigetelése

A **környezet elszigetelése** olyan érintésvédelmi módszer, amelynél a készülék testét a kezelőtől, illetve a kezelőt a földtől elszigeteljük.

### Működési elv

Szigetelő burkolatok, padlók, falak alkalmazásával megakadályozzuk, hogy a kezelő földpotenciálra kerüljön.

### Követelmények

A szigetelő felületek minimális távolságai:

- Fémcsőtől, radiátortól: **> 2,0 m**
- Öntöttvas elosztótól: **> 1,25 m** vízszintes, **> 2,5 m** függőleges távolság
- Szigetelő padlótól a falakig: **< 2,0 m**

### Alkalmazás

- Különleges ipari környezetben
- Vizsgáló- és mérőhelyiségekben
- Oktatási célú elektrotechnikai laboratóriumokban

> **Figyelem:** Ez a módszer csak szakképzett személyzet számára engedélyezett területeken alkalmazható!

## Összehasonlítás

| Módszer | Védelem alapja | Védőérintkező | Alkalmazás |
|---------|---------------|---------------|-----------|
| **Kettős szigetelés** | Kiegészítő szigetelési réteg | Nincs (2 pólus) | Kézi szerszámok, konyhai gépek |
| **Védőelválasztás** | Galvanikus elválasztás | Nincs | Fürdőszobai aljzatok, speciális esetek |
| **Törpefeszültség** | Alacsony feszültség | Nincs | LED világítás, játékok, speciális környezet |
| **Környezet elszigetelése** | Szigetelő környezet | Nincs | Laboratóriumok, vizsgálóhelyek |

> **Fontos:** Ezek a módszerek **passzív érintésvédelmi módok**, mivel az érintési feszültséget mindig veszélytelen értéken tartják, tehát lekapcsolás nem szükséges.
