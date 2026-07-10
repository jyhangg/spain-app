// Node.js/서버 없이 로컬 파일(file://)로 더블클릭해서 실행해도 작동되도록 전역 객체로 데이터를 정의합니다.
window.spanishData = {
  alphabets: [
    { letter: "A, a", name: "아", word: "Amigo", meaning: "친구", tip: "영어의 'a'와 달리 항상 맑은 '아' 발음이 납니다." },
    { letter: "B, b", name: "베", word: "Buenos", meaning: "좋은", tip: "영어의 'b'와 유사하며, 모음 사이에서는 입술을 덜 닫고 부드럽게 발음합니다." },
    { letter: "C, c", name: "세", word: "Casa", meaning: "집", tip: "a, o, u 앞에서는 [ㄲ] 발음(카사), e, i 앞에서는 영어의 th와 같은 번데기 발음 [ㅅ](쎄, 씨)이 납니다." },
    { letter: "CH, ch", name: "체", word: "Chico", meaning: "소년", tip: "한국어의 '치' 발음과 비슷합니다. (스페인어 한림원 공식 자모 목록에서는 제외되었으나 단독 발음으로 취급)" },
    { letter: "D, d", name: "데", word: "Día", meaning: "날, 하루", tip: "영어의 'd'보다 혀끝을 윗니 뒤쪽에 대고 발음합니다. 단어 끝에 오면 아주 약하게 발음됩니다." },
    { letter: "E, e", name: "에", word: "España", meaning: "스페인", tip: "항상 맑고 짧은 '에' 발음이 납니다." },
    { letter: "F, f", name: "에페", word: "Flor", meaning: "꽃", tip: "영어의 'f' 발음과 동일하게 윗니로 아랫입술을 가볍게 물고 바람을 내보냅니다." },
    { letter: "G, g", name: "헤", word: "Gracias", meaning: "감사", tip: "a, o, u 앞에서는 [ㄱ] 발음(그라시아스), e, i 앞에서는 목구멍을 긁는 듯한 강한 [ㅎ] 발음(헤, 히)이 납니다." },
    { letter: "H, h", name: "아체", word: "Hola", meaning: "안녕", tip: "★매우 중요: 스페인어에서 H는 항상 묵음(소리가 나지 않음)입니다. '호라'가 아니라 '올라'로 읽습니다." },
    { letter: "I, i", name: "이", word: "Isla", meaning: "섬", tip: "항상 입을 양옆으로 당기며 맑게 '이' 발음합니다." },
    { letter: "J, j", name: "호타", word: "Jardín", meaning: "정원", tip: "목구멍 안쪽에서 강하게 긁어내는 듯한 [ㅎ] 소리입니다. 가래 끓는 듯한 거친 소리가 핵심입니다." },
    { letter: "K, k", name: "카", word: "Kilo", meaning: "킬로그램", tip: "외래어에만 쓰이며 한국어의 [ㄲ]에 가까운 발음입니다." },
    { letter: "L, l", name: "엘레", word: "Luna", meaning: "달", tip: "영어의 'l'처럼 혀끝을 윗니 잇몸에 대고 '을' 소리를 섞어 발음합니다." },
    { letter: "LL, ll", name: "에예", word: "Lluvia", meaning: "비", tip: "지역에 따라 '야, 여, 요, 유' 또는 '자, 저, 조, 주'에 가깝게 발음합니다. 아르헨티나에서는 '샤' 발음이 납니다." },
    { letter: "M, m", name: "에메", word: "Madre", meaning: "어머니", tip: "영어의 'm'과 같고 입술을 완전히 닫았다가 떼며 발음합니다." },
    { letter: "N, n", name: "에네", word: "Noche", meaning: "밤", tip: "영어의 'n'과 같으며 혀끝을 윗잇몸에 붙입니다." },
    { letter: "Ñ, ñ", name: "에녜", word: "Niño", meaning: "아이", tip: "★스페인어만의 독특한 철자! 한국어의 '냐, 녀, 뇨, 뉴' 발음입니다. 물결표시(Tilde)가 특징입니다." },
    { letter: "O, o", name: "오", word: "Sol", meaning: "태양", tip: "입술을 둥글게 모아 맑은 '오' 소리를 냅니다." },
    { letter: "P, p", name: "페", word: "Playa", meaning: "해변", tip: "영어의 거센 'p' 발음과 달리, 된소리인 [ㅃ]에 가깝게 발음합니다. (플라야 -> 쁠라야)" },
    { letter: "Q, q", name: "쿠", word: "Queso", meaning: "치즈", tip: "항상 u와 함께 쓰여 que[께], qui[끼] 발음을 냅니다. u는 묵음입니다." },
    { letter: "R, r", name: "에레", word: "Rosa", meaning: "장미", tip: "단어 맨 앞이거나 L, N, S 뒤에서는 혀끝을 강하게 떠는 굴림 소리(Rr)를 냅니다. 모음 사이에서는 한 번만 굴립니다." },
    { letter: "RR, rr", name: "에레 도블레", word: "Perro", meaning: "개", tip: "★혀끝을 사정없이 떨어주는 스페인어의 꽃! 'rrrr' 진동을 울리며 발음합니다." },
    { letter: "S, s", name: "에세", word: "Sol", meaning: "태양", tip: "영어의 's'와 유사하나, 약간 '쉬'에 가까운 부드러운 [ㅅ] 발음입니다." },
    { letter: "T, t", name: "테", word: "Taza", meaning: "컵", tip: "영어의 't'처럼 바람이 새지 않고 된소리인 [ㄸ]에 가깝게 발음합니다." },
    { letter: "U, u", name: "우", word: "Uva", meaning: "포도", tip: "입술을 앞으로 쭉 내밀며 맑은 '우' 소리를 냅니다." },
    { letter: "V, v", name: "우베", word: "Vino", meaning: "와인", tip: "스페인어에서 B와 V는 발음상 차이가 없습니다. [ㅂ] 발음으로 편하게 소리 내면 됩니다." },
    { letter: "W, w", name: "우베 도블레", word: "Web", meaning: "웹", tip: "외래어에만 쓰이며 영어의 'w'처럼 발음합니다." },
    { letter: "X, x", name: "에키스", word: "Éxito", meaning: "성공", tip: "모음 사이에서는 [ㄱㅅ/ks] 발음이 나고, 자음 앞에서는 [ㅅ] 발음으로 나기도 합니다. 멕시코(México)에서는 [ㅎ] 발음이 납니다." },
    { letter: "Y, y", name: "이 그리에가", word: "Yo", meaning: "나", tip: "모음과 함께 쓰일 때는 [이/지] 계열 자음 역할을 하고, 홀로 쓰일 때는 영어의 and 역할을 하며 '이'라고 발음합니다." },
    { letter: "Z, z", name: "세타", word: "Zapato", meaning: "구두", tip: "영어의 th 번데기 발음[ㅅ]으로 발음합니다. 단, 중남미 지역에서는 편하게 일반 [ㅅ]으로 발음합니다." }
  ],
  vocabularies: {
    saludos: {
      title: "인사와 안부 (Saludos)",
      emoji: "👋",
      cards: [
        { word: "¡Hola!", meaning: "안녕!", tip: "만났을 때 쓰는 가장 대중적인 인사. 하루 중 언제나 사용 가능해요.", example: "¡Hola! ¿Cómo estás? (안녕! 어떻게 지내?)", level: "초급" },
        { word: "Buenos días", meaning: "좋은 아침 (아침 인사)", tip: "보통 아침부터 점심 식사 전(오후 2시경)까지 사용합니다.", example: "Buenos días, señor. (좋은 아침입니다, 선생님.)", level: "초급" },
        { word: "Buenas tardes", meaning: "좋은 오후 (오후 인사)", tip: "점심 식사 이후부터 해가 질 때(오후 8시경)까지 사용합니다.", example: "Buenas tardes a todos. (모두 좋은 오후입니다.)", level: "초급" },
        { word: "Buenas noches", meaning: "좋은 밤 (저녁/밤 인사)", tip: "해가 진 이후나 잠자리에 들 때 사용합니다.", example: "Buenas noches, mamá. (잘 자요, 엄마.)", level: "초급" },
        { word: "Gracias", meaning: "감사합니다", tip: "상대방에게 고마움을 표시할 때 씁니다. 더 강조하려면 'Muchas gracias'!", example: "Gracias por la comida. (음식 감사합니다.)", level: "초급" },
        { word: "De nada", meaning: "천만에요", tip: "Gracias에 대한 가장 대표적인 대답입니다.", example: "— Gracias. — De nada. (— 고마워. — 천만에.)", level: "초급" },
        { word: "Adiós", meaning: "잘 가, 안녕", tip: "헤어질 때 쓰는 일반적인 인사입니다. 오랫동안 못 볼 때 주로 사용하기도 합니다.", example: "Adiós, nos vemos. (잘 가, 또 보자.)", level: "초급" },
        { word: "Hasta luego", meaning: "나중에 봐", tip: "가장 자주 쓰이는 작별 인사로, '나중에 또 보자'는 뜻입니다.", example: "¡Hasta luego, amigo! (나중에 보자, 친구!)", level: "초급" },
        { word: "¿Qué tal?", meaning: "요즘 어때? (안부)", tip: "매우 친근한 사이에서 가볍게 건네는 인사입니다. 대답은 보통 'Bien (좋아)'이라고 합니다.", example: "¿Qué tal todo? (모든 게 잘 돼가?)", level: "초급" },
        { word: "Mucho gusto", meaning: "만나서 반가워", tip: "처음 소개받았을 때 격식 없이 반가움을 나타내며 나눕니다.", example: "Yo soy Pedro. Mucho gusto. (나는 페드로야. 만나서 반가워.)", level: "초급" },
        { word: "¿Cómo estás?", meaning: "어떻게 지내?", tip: "안부를 물을 때 기본으로 쓰는 유용한 의문문입니다.", example: "¿Cómo estás? — Muy bien, gracias. (어떻게 지내? — 아주 잘 지내, 고마워.)", level: "초급" },
        { word: "Encantado", meaning: "만나서 반가워 (남성형)", tip: "말하는 사람 본인이 남성일 때 '만나서 반갑다'는 의미로 씁니다.", example: "Yo soy Minjun. ¡Encantado! (나는 민준이야. 만나서 반가워!)", level: "초급" },
        { word: "Encantada", meaning: "만나서 반가워 (여성형)", tip: "말하는 사람 본인이 여성일 때 사용하는 끝 글자가 'a'인 형용사입니다.", example: "Yo soy Yuna. ¡Encantada! (나는 유나야. 만나서 반가워!)", level: "초급" },
        { word: "Por favor", meaning: "부탁합니다 (제발)", tip: "영어의 'please'와 동일하며, 문장 끝이나 주문 시 필수적으로 사용합니다.", example: "Un vaso de agua, por favor. (물 한 잔만 부탁합니다.)", level: "초급" },
        { word: "Perdone", meaning: "실례합니다 / 죄송합니다", tip: "모르는 사람을 부르거나 가벼운 실례를 사과할 때 쓰는 정중한 표현입니다.", example: "Perdone, ¿dónde está el metro? (실례합니다, 지하철역이 어디 있나요?)", level: "초급" },
        { word: "Lo siento", meaning: "미안합니다", tip: "잘못한 상황이나 안타까운 소식을 들었을 때 슬픔과 사과를 나타냅니다.", example: "Lo siento mucho, no puedo ir. (정말 미안해, 갈 수 없어.)", level: "초급" },
        { word: "¡Bienvenido!", meaning: "환영합니다!", tip: "상대방을 맞이하거나 환영할 때 쓰는 대표 단어입니다.", example: "¡Bienvenido a España! (스페인에 오신 것을 환영합니다!)", level: "초급" },
        { word: "¿Cómo te llamas?", meaning: "이름이 무엇인가요?", tip: "가장 대표적인 이름 묻기 질문입니다. 직역은 '너는 너를 어떻게 부르니?'입니다.", example: "Hola, ¿cómo te llamas? (안녕, 이름이 뭐야?)", level: "초급" },
        { word: "Me llamo...", meaning: "내 이름은 ... 입니다", tip: "자신의 이름을 소개할 때 사용합니다.", example: "Me llamo Pedro. (제 이름은 페드로입니다.)", level: "초급" },
        { word: "Sí", meaning: "네 / 예", tip: "강세 기호(Tilde)가 꼭 있어야 '네'라는 대답이 됩니다. 기호가 없으면 '만약에'가 됩니다.", example: "Sí, claro. (네, 물론이죠.)", level: "초급" },
        { word: "No", meaning: "아니오", tip: "부정의 대답 또는 문장을 부정문으로 만들 때 씁니다.", example: "No, no tengo tiempo. (아니오, 저는 시간이 없어요.)", level: "초급" },
        { word: "Señor", meaning: "선생님 / ~씨 (남성 존칭)", tip: "남성에 대한 정중한 호칭입니다. Mr.에 해당합니다.", example: "Buenos días, señor Gómez. (좋은 아침입니다, 고메즈 선생님.)", level: "초급" },
        { word: "Señora", meaning: "부인 / ~씨 (여성 존칭)", tip: "기혼 여성 혹은 성인 여성에 대한 호칭입니다. Mrs.에 해당합니다.", example: "Buenas tardes, señora López. (좋은 오후입니다, 로페즈 부인.)", level: "초급" },
        { word: "Amigo", meaning: "친구", tip: "여성 친구는 'Amiga'라고 합니다. 스페인은 친구 관계를 매우 소중히 여깁니다.", example: "Él es mi mejor amigo. (그는 나의 가장 친한 친구야.)", level: "초급" },
        { word: "Chao", meaning: "안녕 (헤어질 때)", tip: "이탈리아어 'Ciao'에서 유래했으며 헤어질 때 아주 가볍게 쓰는 인사입니다.", example: "Chao, ¡nos vemos mañana! (안녕, 내일 보자!)", level: "초급" }
      ]
    },
    numeros: {
      title: "숫자와 시간 (Números)",
      emoji: "🔢",
      cards: [
        { word: "Uno", meaning: "1 (하나)", tip: "남성 명사 앞에서는 un으로 축약됩니다. (예: un libro - 책 한 권)", example: "Tengo un gato. (나는 고양이 한 마리가 있어.)", level: "초급" },
        { word: "Dos", meaning: "2 (둘)", tip: "스페인어 숫자는 성수 변화가 없는 경우가 많아 다루기 쉽습니다.", example: "Dos cafés, por favor. (커피 두 잔 주세요.)", level: "초급" },
        { word: "Tres", meaning: "3 (셋)", tip: "혀끝을 강하게 떨어주는 'r' 발음에 주의해 주세요.", example: "Tres hermanos. (세 명의 형제들.)", level: "초급" },
        { word: "Cuatro", meaning: "4 (넷)", tip: "'꾸아뜨로'라고 발음하며, 이탈리아 피자 이름으로도 익숙하죠.", example: "Cuatro estaciones. (사계절.)", level: "초급" },
        { word: "Cinco", meaning: "5 (다섯)", tip: "C 발음 규칙에 따라 '씬꼬'라고 발음합니다.", example: "Cinco minutos. (5분.)", level: "초급" },
        { word: "Diez", meaning: "10 (열)", tip: "마지막 Z 발음은 스페인에서는 번데기 발음, 중남미에서는 [ㅅ] 발음입니다.", example: "Diez euros. (10유로.)", level: "초급" },
        { word: "Cien", meaning: "100 (백)", tip: "정확히 100을 나타낼 때 Cien을 사용하고, 101부터는 Ciento...를 씁니다.", example: "Cien por cien. (100퍼센트.)", level: "초급" },
        { word: "Hora", meaning: "시간, 시", tip: "H는 묵음이므로 '오라'라고 발음합니다.", example: "¿Qué hora es? (지금 몇 시예요?)", level: "초급" },
        { word: "Mil", meaning: "1000 (천)", tip: "영어의 'thousand'와 동일하며 복수형 변화가 없습니다.", example: "Mil gracias. (정말 감사합니다. [천 번의 감사])", level: "초급" },
        { word: "Tiempo", meaning: "시간, 날씨", tip: "영어의 time과 weather 두 가지 뜻을 모두 가집니다.", example: "No tengo tiempo. (나는 시간이 없어.)", level: "초급" },
        { word: "Cero", meaning: "0 (영)", tip: "C 발음 규칙에 따라 '쎄로'라고 읽습니다.", example: "Cero grados. (영도 [0도].)", level: "초급" },
        { word: "Seis", meaning: "6 (여섯)", tip: "이중모음 ei 발음에 주의하여 '쎄이스'라고 짧게 끊어 읽습니다.", example: "Tengo seis libros. (나는 책 여섯 권이 있어.)", level: "초급" },
        { word: "Siete", meaning: "7 (일곱)", tip: "'씨에떼'라고 읽으며, 럭키 세븐의 7입니다.", example: "Siete días de la semana. (일주일의 7일.)", level: "초급" },
        { word: "Ocho", meaning: "8 (여덟)", tip: "CH 발음을 살려 '오초'라고 발음합니다.", example: "Ocho horas de sueño. (8시간의 수면.)", level: "초급" },
        { word: "Nueve", meaning: "9 (아홉)", tip: "V는 [ㅂ] 발음이므로 '누에베'라고 소리 냅니다.", example: "Nueve meses de espera. (9개월의 기다림.)", level: "초급" },
        { word: "Veinte", meaning: "20 (스물)", tip: "'베인떼'라고 발음합니다. 21은 veintiuno가 됩니다.", example: "Tengo veinte años. (저는 20살입니다.)", level: "초급" },
        { word: "Treinta", meaning: "30 (서른)", tip: "'트레인따'라고 발음합니다.", example: "Treinta euros por día. (하루에 30유로.)", level: "초급" },
        { word: "Cuarenta", meaning: "40 (마흔)", tip: "'꾸아렌따'라고 소리 냅니다.", example: "El autobús llega en cuarenta minutos. (버스는 40분 뒤에 도착해요.)", level: "초급" },
        { word: "Cincuenta", meaning: "50 (쉰)", tip: "'씬꾸엔따'라고 읽습니다.", example: "Cincuenta por ciento de descuento. (50퍼센트 할인.)", level: "초급" },
        { word: "Año", meaning: "해 / 년 / 나이", tip: "글자 Ñ 위에 얹어진 물결(Tilde) 기호를 빼먹으면 아예 다른 뜻(항문)이 되므로 꼭 적어주어야 합니다.", example: "¡Feliz Año Nuevo! (새해 복 많이 받으세요!)", level: "초급" },
        { word: "Mes", meaning: "월 / 달", tip: "복수형은 meses입니다.", example: "Un mes de vacaciones. (한 달간의 휴가.)", level: "초급" },
        { word: "Semana", meaning: "주 (일주일)", tip: "주말은 'Fin de semana'라고 부릅니다.", example: "La próxima semana voy a Madrid. (다음 주에 마드리드에 가요.)", level: "초급" },
        { word: "Hoy", meaning: "오늘", tip: "H는 묵음이므로 '오이'라고 정직하게 발음합니다.", example: "Hoy es un día especial. (오늘은 특별한 날입니다.)", level: "초급" },
        { word: "Ayer", meaning: "어제", tip: "'아예르'라고 발음합니다.", example: "Ayer fui a la playa. (어제 해변에 갔었어.)", level: "초급" },
        { word: "Mañana", meaning: "내일 / 아침", tip: "정관사 la가 붙으면 '아침'을 뜻하고, 관사 없이 부사로 쓰이면 '내일'을 의미합니다.", example: "Hasta mañana. (내일 봐요.)", level: "초급" }
      ]
    },
    restaurante: {
      title: "식당과 음식 (Restaurante)",
      emoji: "🍳",
      cards: [
        { word: "Agua", meaning: "물", tip: "여성 명사이지만 발음의 편의를 위해 단수일 때는 'el agua'로 씁니다.", example: "Agua sin gas, por favor. (탄산 없는 물 주세요.)", level: "초급" },
        { word: "La cuenta", meaning: "계산서", tip: "식사를 마치고 계산을 요청할 때 필수 단어입니다.", example: "La cuenta, por favor. (계산서 주세요.)", level: "초급" },
        { word: "Café", meaning: "커피", tip: "스페인은 커피 문화가 매우 발달해 있습니다. 에스프레소는 'Café solo'.", example: "Un café con leche, por favor. (카페라떼 한 잔 주세요.)", level: "초급" },
        { word: "Cerveza", meaning: "맥주", tip: "스페인 타파스 바에서 가장 많이 주문하는 음료 중 하나입니다.", example: "Una cerveza fría, por favor. (시원한 맥주 한 잔 주세요.)", level: "초급" },
        { word: "Menú", meaning: "메뉴, 식단", tip: "스페인에는 점심에 저렴하게 코스를 먹을 수 있는 'Menú del día'(오늘의 메뉴)가 있습니다.", example: "¿Tienen menú del día? (오늘의 메뉴 코스가 있나요?)", level: "초급" },
        { word: "Delicioso", meaning: "맛있는", tip: "음식이 훌륭할 때 셰프에게 건네기 좋은 칭찬입니다.", example: "Este plato está delicioso. (이 요리 정말 맛있어요.)", level: "초급" },
        { word: "Camarero", meaning: "웨이터, 종업원", tip: "종업원을 부를 때 사용하거나 정중하게 'Perdone'(실례합니다)으로 부릅니다.", example: "¡Camarero! (여기요!)", level: "초급" },
        { word: "Pan", meaning: "빵", tip: "스페인 식사에서 빵은 거의 기본으로 제공되거나 소액 청구됩니다.", example: "Un poco de pan, por favor. (빵 조금만 주세요.)", level: "초급" },
        { word: "Pollo", meaning: "닭고기", tip: "Double L 발음에 따라 '뽀요' 또는 '뽀조'라고 소리 냅니다.", example: "Pollo asado. (구운 닭고기.)", level: "초급" },
        { word: "Arroz", meaning: "쌀, 밥", tip: "스페인의 대표 요리 파에야(Paella)의 주재료입니다.", example: "Arroz con pollo. (닭고기 볶음밥.)", level: "초급" },
        { word: "Queso", meaning: "치즈", tip: "Q 발음 규칙에 따라 '께소'라고 발음합니다. (Qu에서 u는 묵음)", example: "Bocadillo de queso. (치즈 샌드위치.)", level: "초급" },
        { word: "Postre", meaning: "디저트", tip: "식사 끝에 단 음식을 먹을 때 종업원이 물어보는 단어입니다.", example: "¿Desea postre? (디저트를 원하시나요?)", level: "초급" },
        { word: "Leche", meaning: "우유", tip: "CH 발음에 따라 '레체'라고 부드럽게 소리 냅니다.", example: "Chocolate con leche. (밀크 초콜릿.)", level: "초급" },
        { word: "Vino", meaning: "와인", tip: "V는 B와 발음이 같아 '비노'라고 부릅니다. 레드 와인은 'Vino tinto'.", example: "Una botella de vino tinto. (레드 와인 한 병.)", level: "초급" },
        { word: "Comida", meaning: "음식, 식사", tip: "동사로 '먹다'는 Comer입니다.", example: "La comida española es buena. (스페인 음식은 좋습니다.)", level: "초급" },
        { word: "Carne", meaning: "고기 / 육류", tip: "소고기는 'Carne de vaca/res', 돼지고기는 'Carne de cerdo'입니다.", example: "Quiero un plato de carne. (고기 요리 한 접시 원해요.)", level: "초급" },
        { word: "Pescado", meaning: "생선 / 생선 요리", tip: "물 속에 살아있는 물고기는 'Pez', 잡아서 식재료가 된 것은 'Pescado'로 구별합니다.", example: "El pescado frito está muy rico. (튀긴 생선 요리가 정말 맛있어요.)", level: "초급" },
        { word: "Ensalada", meaning: "샐러드", tip: "'엔살라다'라고 발음하며 스페인 식단에서 필수 사이드 요리입니다.", example: "Una ensalada mixta para compartir. (같이 나눠 먹을 모둠 샐러드 하나요.)", level: "초급" },
        { word: "Sal", meaning: "소금", tip: "단음절 명사이며 여성 명사(La sal)입니다.", example: "Pásame la sal, por favor. (소금 좀 건네주세요.)", level: "초급" },
        { word: "Azúcar", meaning: "설탕", tip: "남성과 여성을 모두 혼용해서 쓰는 특이한 명사입니다.", example: "Café sin azúcar. (설탕을 넣지 않은 커피.)", level: "초급" },
        { word: "Mesa", meaning: "테이블 / 식탁", tip: "식당 입구에서 예약 테이블을 찾을 때 씁니다.", example: "Una mesa para dos personas, por favor. (두 명 자리가 있는 테이블 하나 주세요.)", level: "초급" },
        { word: "Vaso", meaning: "유리컵 / 잔", tip: "와인이나 맥주는 vaso 대신 copa나 caña를 주로 씁니다.", example: "Un vaso de agua fría. (시원한 물 한 잔.)", level: "초급" },
        { word: "Plato", meaning: "접시 / 요리", tip: "메인 요리를 의미하기도 합니다 (Plato principal).", example: "Este plato es típico de la región. (이 요리는 이 지역의 전통 요리입니다.)", level: "초급" },
        { word: "Desayuno", meaning: "아침 식사", tip: "스페인의 아침 식사는 보통 가벼운 커피와 츄러스 등으로 때웁니다.", example: "Tomo el desayuno a las ocho. (나는 8시에 아침을 먹어.)", level: "초급" },
        { word: "Cena", meaning: "저녁 식사", tip: "★중요 마케팅 팁: 스페인의 저녁 식사 시간은 밤 9시~10시로 매우 늦은 편입니다.", example: "La cena está lista. (저녁 식사가 준비되었습니다.)", level: "초급" }
      ]
    },
    viajes: {
      title: "여행과 쇼핑 (Viajes)",
      emoji: "✈️",
      cards: [
        { word: "Boleto", meaning: "표, 티켓", tip: "스페인에서는 주로 'Billete', 중남미에서는 'Boleto'나 'Pasaje'를 많이 씁니다.", example: "Un boleto de ida y vuelta. (왕복 티켓 한 장.)", level: "초급" },
        { word: "Hotel", meaning: "호텔", tip: "역시 H가 묵음이므로 '오뗄'이라고 발음합니다.", example: "¿Dónde está el hotel? (호텔이 어디에 있나요?)", level: "초급" },
        { word: "Baño", meaning: "화장실", tip: "여행 중 가장 다급하게 찾게 되는 단어입니다. Ñ 발음에 유의하세요.", example: "¿Dónde está el baño? (화장실이 어디예요?)", level: "초급" },
        { word: "Dinero", meaning: "돈", tip: "현금은 'Efectivo', 카드는 'Tarjeta'라고 부릅니다.", example: "No tengo mucho dinero. (돈이 많이 없어.)", level: "초급" },
        { word: "Precio", meaning: "가격", tip: "쇼핑할 때 가격표에 적힌 단어입니다.", example: "¿Cuál es el precio de esto? (이것의 가격은 얼마인가요?)", level: "초급" },
        { word: "Barato", meaning: "싸다, 저렴하다", tip: "반대말인 '비싸다'는 'Caro'라고 합니다.", example: "Este recuerdo es muy barato. (이 기념품은 아주 싸네요.)", level: "초급" },
        { word: "Ayuda", meaning: "도움", tip: "긴급 상황에서 '¡Ayuda!' 또는 '¡Socorro!'라고 외칠 수 있습니다.", example: "Necesito ayuda, por favor. (도움이 필요합니다, 도와주세요.)", level: "초급" },
        { word: "Estación", meaning: "역, 정거장", tip: "기차역은 'Estación de tren', 지하철역은 'Estación de metro'.", example: "Vamos a la estación. (역으로 갑시다.)", level: "초급" },
        { word: "Avión", meaning: "비행기", tip: "V는 [ㅂ] 발음이므로 '아비온'이 아닌 '아비온(아비옹)'에 가깝게 발음합니다.", example: "El avión sale a las tres. (비행기는 3시에 출발합니다.)", level: "초급" },
        { word: "Maleta", meaning: "여행 가방, 캐리어", tip: "수하물은 'Equipaje'라고 부릅니다.", example: "Mi maleta es pesada. (내 캐리어는 무겁다.)", level: "초급" },
        { word: "Pasaporte", meaning: "여권", tip: "공항 공무원들이 항상 요구하는 필수 단어입니다.", example: "Aquí está mi pasaporte. (여기 제 여권이 있습니다.)", level: "초급" },
        { word: "Playa", meaning: "해변", tip: "스페인은 해변(Playa) 관광이 전 세계적으로 매우 유명합니다.", example: "Vamos a la playa. (해변으로 가자.)", level: "초급" },
        { word: "Mapa", meaning: "지도", tip: "a로 끝나지만 예외적으로 남성 명사(El mapa)입니다.", example: "Necesito un mapa de la ciudad. (도시 지도가 필요해요.)", level: "초급" },
        { word: "Aeropuerto", meaning: "공항", tip: "'아에로뿌에르또'라고 또박또박 굴려서 소리 냅니다.", example: "Taxi al aeropuerto. (공항 가는 택시.)", level: "초급" },
        { word: "Tienda", meaning: "상점, 옷가게", tip: "쇼핑하러 둘러볼 때 간판에서 흔히 볼 수 있는 단어입니다.", example: "La tienda está abierta. (가게가 열려 있습니다.)", level: "초급" },
        { word: "Calle", meaning: "길 / 거리", tip: "Double L 발음에 의해 '까예' 또는 '까제'로 발음합니다.", example: "Esta calle es muy bonita. (이 거리는 정말 아름답네요.)", level: "초급" },
        { word: "Plaza", meaning: "광장", tip: "스페인은 마을마다 중심에 아름다운 광장(Plaza)이 있는 문화입니다.", example: "Quedamos en la Plaza Mayor. (마요르 광장에서 만나자.)", level: "초급" },
        { word: "Tarjeta", meaning: "카드 / 신용카드", tip: "J 발음에 주의하여 '따르헤따'라고 강하게 발음합니다.", example: "¿Puedo pagar con tarjeta? (카드로 결제할 수 있나요?)", level: "초급" },
        { word: "Efectivo", meaning: "현금", tip: "동전은 'Moneda', 지폐는 'Billete'라고 합니다.", example: "Solo tengo efectivo. (저는 현금만 가지고 있어요.)", level: "초급" },
        { word: "Viaje", meaning: "여행", tip: "즐거운 여행 되라는 인사는 '¡Buen viaje!'입니다.", example: "¡Buen viaje a todos! (모두 즐거운 여행 되세요!)", level: "초급" },
        { word: "Autobús", meaning: "버스", tip: "마지막 u에 강세가 있으므로 '아우또부스'라고 뒤를 높여 발음합니다.", example: "¿Dónde está la parada de autobús? (버스 정류장이 어디 있나요?)", level: "초급" },
        { word: "Tren", meaning: "기차", tip: "R 굴림 소리를 짧게 넣어 '뜨렌'이라고 소리 냅니다.", example: "El tren llega a tiempo. (기차가 제시간에 도착합니다.)", level: "초급" },
        { word: "Taxi", meaning: "택시", tip: "X 발음 규칙에 따라 '딱씨'에 가깝게 발음합니다.", example: "Llama a un taxi, por favor. (택시 좀 불러주세요.)", level: "초급" },
        { word: "Entrada", meaning: "입장권 / 입구", tip: "미술관이나 유적지에 들어가는 티켓을 가리킵니다.", example: "Tengo dos entradas para el museo. (나는 미술관 입장권이 두 장 있어.)", level: "초급" },
        { word: "Ciudad", meaning: "도시", tip: "D로 끝나는 명사는 거의 대부분 여성 명사(La ciudad)입니다.", example: "Barcelona es una ciudad hermosa. (바르셀로나는 아름다운 도시입니다.)", level: "초급" }
      ]
    }
  },
  conversations: [
    {
      id: "greet",
      title: "기본 인사 및 소개",
      icon: "🤝",
      dialogue: [
        { speaker: "A", name: "Carlos (카를로스)", sp: "¡Hola! Buenos días. ¿Cómo te llamas?", ko: "안녕! 좋은 아침이야. 이름이 어떻게 돼?", tip: "¿Cómo te llamas?는 직역하면 '너는 너 자신을 어떻게 부르니?'라는 뜻입니다." },
        { speaker: "B", name: "Minjun (민준)", sp: "¡Hola! Me llamo Minjun. ¿Y tú?", ko: "안녕! 내 이름은 민준이야. 너는?", tip: "Me llamo ~ 는 자신의 이름을 말할 때 쓰는 가장 대표적인 표현입니다." },
        { speaker: "A", name: "Carlos (카를로스)", sp: "Yo soy Carlos. Mucho gusto, Minjun.", ko: "나는 카를로스라고 해. 만나서 반가워, 민준아.", tip: "Mucho gusto는 처음 만났을 때 하는 '만나서 반가워'라는 표현입니다." },
        { speaker: "B", name: "Minjun (민준)", sp: "Igualmente, Carlos. ¿De dónde eres?", ko: "나도 반가워, 카를로스. 너는 어느 나라 사람이야?", tip: "Igualmente는 상대방의 인사나 덕담에 '저도 그렇습니다(동감입니다)'라고 답할 때 씁니다." },
        { speaker: "A", name: "Carlos (카를로스)", sp: "Soy de España, de Madrid. ¿Y tú?", ko: "나는 스페인 사람이야, 마드리드 출신이지. 너는?", tip: "Soy de + 나라는 '~ 출신이다'라는 뜻입니다." },
        { speaker: "B", name: "Minjun (민준)", sp: "Soy de Corea del Sur, de Seúl. ¡Encantado!", ko: "나는 대한민국 사람이고, 서울 출신이야. 반가워!", tip: "Encantado는 남성이 '반갑다'고 할 때 쓰며, 여성이 말할 때는 'Encantada'라고 끝을 바꿉니다." }
      ]
    },
    {
      id: "restaurant",
      title: "타파스 바에서 주문하기",
      icon: "🍷",
      dialogue: [
        { speaker: "A", name: "Camarera (종업원)", sp: "¡Buenas tardes! ¿Qué desean tomar?", ko: "안녕하세요! 무엇을 드시겠습니까?", tip: "¿Qué desean tomar?은 직역하면 '무엇을 마시길(드셔보시길) 원하십니까?'입니다." },
        { speaker: "B", name: "Turista (여행자)", sp: "Para mí, una cerveza bien fría y una ración de patatas bravas, por favor.", ko: "저희는 아주 시원한 맥주 한 잔이랑 빠따따스 브라바스 한 접시 주세요.", tip: "Para mí, ~ por favor는 음식을 주문할 때 유용한 기본 패턴입니다. Patatas bravas는 매콤한 소스를 얹은 스페인식 감자튀김입니다." },
        { speaker: "A", name: "Camarera (종업원)", sp: "¿Y para usted, señor?", ko: "그리고 손님은 무엇으로 드릴까요?", tip: "Usted는 격식 있는 '당신'을 의미합니다." },
        { speaker: "C", name: "Amigo (친구)", sp: "Para mí, una copa de vino tinto y jamón ibérico.", ko: "저는 레드 와인 한 잔이랑 하몬 이베리코요.", tip: "Vino tinto는 레드 와인(직역하면 짙은 색 와인)을 뜻합니다. 화이트 와인은 Vino blanco입니다." },
        { speaker: "A", name: "Camarera (종업원)", sp: "Muy bien. Enseguida se lo traigo.", ko: "알겠습니다. 바로 가져다 드릴게요.", tip: "Enseguida는 '즉시, 바로'라는 여행 중 자주 듣는 표현입니다." },
        { speaker: "B", name: "Turista (여행자)", sp: "¡Gracias! Todo se ve delicioso.", ko: "감사합니다! 전부 맛있어 보이네요.", tip: "Se ve ~는 '~하게 보인다'는 뜻입니다." }
      ]
    },
    {
      id: "direction",
      title: "길거리에서 길 찾기",
      icon: "🗺️",
      dialogue: [
        { speaker: "B", name: "Turista (여행자)", sp: "Disculpe, señor. ¿Sabe dónde está la Plaza Mayor?", ko: "실례합니다, 선생님. 마요르 광장이 어디에 있는지 아시나요?", tip: "Disculpe는 낯선 사람에게 말을 걸 때 쓰는 정중한 '실례합니다' 표현입니다." },
        { speaker: "A", name: "Transeúnte (행인)", sp: "Sí, claro. Está muy cerca. Tienes que ir recto por esta calle.", ko: "네, 물론이죠. 아주 가까워요. 이 길을 따라 쭉 가셔야 합니다.", tip: "Ir recto는 '직진하다'라는 필수 길 안내 표현입니다." },
        { speaker: "B", name: "Turista (여행자)", sp: "¿Y después? ¿Tengo que girar?", ko: "그리고 다음에는요? 회전해야 하나요?", tip: "Girar는 '돌다, 회전하다'라는 동사입니다." },
        { speaker: "A", name: "Transeúnte (행인)", sp: "Sí, al final de la calle, gira a la derecha. Allí verás la plaza.", ko: "네, 길 끝에서 우회전하세요. 거기서 광장이 보일 겁니다.", tip: "A la derecha는 '오른쪽으로', a la izquierda는 '왼쪽으로'입니다." },
        { speaker: "B", name: "Turista (여행자)", sp: "Muchas gracias por su ayuda. ¡Buen día!", ko: "도와주셔서 정말 감사합니다. 좋은 하루 보내세요!", tip: "¡Buen día! 또는 ¡Que tenga un buen día!로 훈훈하게 대화를 마무리할 수 있습니다." },
        { speaker: "A", name: "Transeúnte (행인)", sp: "De nada. ¡Buen viaje!", ko: "천만에요. 즐거운 여행 되세요!", tip: "¡Buen viaje!는 여행자에게 건네는 단골 축복 인사입니다." }
      ]
    },
    {
      id: "shopping",
      title: "기념품점에서 쇼핑하기",
      icon: "🛍️",
      dialogue: [
        { speaker: "A", name: "Dependiente (직원)", sp: "¡Hola! ¿En qué puedo ayudarte?", ko: "안녕하세요! 무엇을 도와드릴까요?", tip: "¿En qué puedo ayudarte?는 점원이 손님에게 다가올 때 건네는 표준 영어의 'How can I help you?' 멘트입니다." },
        { speaker: "B", name: "Cliente (고객)", sp: "Quiero comprar una camiseta de España. ¿Cuánto cuesta esta?", ko: "스페인 티셔츠를 한 장 사고 싶어요. 이건 얼마예요?", tip: "¿Cuánto cuesta ~ ?는 가격을 물어볼 때 쓰는 가장 대중적인 핵심 패턴입니다." },
        { speaker: "A", name: "Dependiente (직원)", sp: "Cuesta veinte euros. Y es de muy buena calidad.", ko: "20유로입니다. 그리고 품질이 아주 좋아요.", tip: "Veinte는 20을 뜻합니다." },
        { speaker: "B", name: "Cliente (고객)", sp: "Me gusta mucho. ¿Tienen una talla más grande?", ko: "정말 마음에 드네요. 더 큰 사이즈가 있나요?", tip: "Talla는 의류 치수/사이즈를 뜻합니다. 큰 사이즈는 'Talla más grande', 작은 것은 'Talla más pequeña'입니다." },
        { speaker: "A", name: "Dependiente (직원)", sp: "Sí, claro. Aquí tiene la talla L. ¿Quiere probársela?", ko: "네, 물론이죠. 여기 L 사이즈가 있습니다. 입어보시겠어요?", tip: "Probarse는 옷을 '입어보다/시착하다'라는 동사입니다." },
        { speaker: "B", name: "Cliente (고객)", sp: "Sí, por favor. ¿Dónde están los probadores?", ko: "네, 그럴게요. 탈의실은 어디에 있나요?", tip: "Probadores는 시착실, 즉 탈의실을 가리키는 필수 쇼핑 단어입니다." }
      ]
    },
    {
      id: "hotel",
      title: "호텔 체크인하기",
      icon: "🔑",
      dialogue: [
        { speaker: "A", name: "Recepcionista (리셉션)", sp: "¡Buenas tardes! Bienvenidos al hotel Sol.", ko: "안녕하세요! 솔 호텔에 오신 것을 환영합니다.", tip: "Bienvenidos는 손님들을 환영할 때 복수형으로 맞이하는 표현입니다." },
        { speaker: "B", name: "Huésped (투숙객)", sp: "¡Buenas tardes! Tengo una reserva a nombre de Kim.", ko: "안녕하세요! 김(Kim)이라는 이름으로 예약했습니다.", tip: "Tengo una reserva a nombre de ~ 는 예약 확인을 요구할 때의 마법 문장입니다." },
        { speaker: "A", name: "Recepcionista (리셉션)", sp: "Sí, aquí está. Habitación trescientos dos. Aquí tiene su llave.", ko: "네, 여기 있네요. 302호입니다. 여기 열쇠 받으세요.", tip: "Trescientos dos는 302를 의미합니다. Llave는 열쇠입니다." },
        { speaker: "B", name: "Huésped (투숙객)", sp: "Gracias. ¿A qué hora es el desayuno?", ko: "감사합니다. 아침 식사는 몇 시부터인가요?", tip: "Desayuno는 아침 식사를 의미합니다. 점심은 Almuerzo, 저녁은 Cena." },
        { speaker: "A", name: "Recepcionista (리셉션)", sp: "El desayuno es de siete a diez en la primera planta.", ko: "아침 식사는 1층에서 7시부터 10시까지 제공됩니다.", tip: "Primera planta는 스페인어로 1층을 의미합니다. 스페인은 한국의 2층을 1층(Primera planta)이라 하고 로비를 Bajo(0층)라 칭합니다." },
        { speaker: "B", name: "Huésped (투숙객)", sp: "Perfecto. ¿Cuál es la contraseña del Wi-Fi?", ko: "완벽하네요. 와이파이 비밀번호가 무엇인가요?", tip: "Contraseña는 비밀번호(password)를 가리키는 매우 유용한 단어입니다." }
      ]
    }
  ],
  quizzes: [
    {
      question: "스페인어에서 철자 'H(아체)'는 어떻게 발음하나요?",
      options: [
        "영어의 H처럼 [ㅎ]으로 강하게 발음한다.",
        "소리가 나지 않는 묵음이다.",
        "목구멍을 긁는 거친 소리로 발음한다.",
        "영어의 W처럼 [우]로 발음한다."
      ],
      answer: 1,
      category: "alphabet",
      explanation: "스페인어에서 H는 항상 묵음입니다. 예를 들어 'Hola'는 '호라'가 아닌 '올라', 'Hotel'은 '호텔'이 아닌 '오뗄'로 발음해야 합니다."
    },
    {
      question: "다음 중 'Buenos días'는 어느 시간대에 나누는 인사일까요?",
      options: [
        "아침에서 점심 식사 전까지",
        "오후에서 해가 질 때까지",
        "밤에 잠자리에 들기 전",
        "상대방과 영원히 작별할 때"
      ],
      answer: 0,
      category: "saludos",
      explanation: "Buenos días는 아침 인사입니다. 오후 인사는 Buenas tardes, 밤 인사는 Buenas noches를 씁니다."
    },
    {
      question: "식당에서 계산을 요청할 때 종업원에게 쓸 수 있는 가장 알맞은 표현은 무엇인가요?",
      options: [
        "¡Mucho gusto, por favor!",
        "¡La cuenta, por favor!",
        "¡De nada, por favor!",
        "¡Disculpe, de dónde eres!"
      ],
      answer: 1,
      category: "restaurante",
      explanation: "'La cuenta'는 계산서를 뜻하므로 'La cuenta, por favor'는 '계산서 주세요(계산할게요)'라는 뜻입니다."
    },
    {
      question: "스페인어로 길을 묻거나 낯선 이에게 말을 건넬 때 가장 적절한 첫 마디는?",
      options: [
        "Encantado",
        "Adiós",
        "Disculpe",
        "Igualmente"
      ],
      answer: 2,
      category: "viajes",
      explanation: "'Disculpe'는 격식을 차린 '실례합니다'의 표현으로 길을 묻거나 상대를 호출할 때 가장 유용합니다."
    },
    {
      question: "스페인어 알파벳 'Ñ(에녜)'의 올바른 발음은 무엇일까요?",
      options: [
        "영어의 N과 동일하게 '느' 발음",
        "한국어의 '냐, 녀, 뇨, 뉴' 발음",
        "영어의 L과 동일한 발음",
        "묵음이라 소리가 나지 않음"
      ],
      answer: 1,
      category: "alphabet",
      explanation: "Ñ(에녜)는 한국어의 야, 여, 요, 유와 융합된 '냐/녀/뇨/뉴' 같은 발음이 납니다. (예: Niño - 니뇨, España - 에스빠냐)"
    },
    {
      question: "스페인어로 '물'을 지칭할 때 사용하는 올바른 단어와 성별 관사의 연결은?",
      options: [
        "La leche",
        "El agua",
        "La cerveza",
        "El vino"
      ],
      answer: 1,
      category: "restaurante",
      explanation: "'물'은 Agua이며 여성명사이지만, 'a'로 시작하는 강세 모음 때문에 단수형 관사는 남성형인 'El'을 써서 'El agua'라고 씁니다."
    },
    {
      question: "스페인어 작별 인사 중 '나중에 또 보자'라는 가장 일반적인 뉘앙스의 표현은?",
      options: [
        "Buenos días",
        "Mucho gusto",
        "Hasta luego",
        "Hola"
      ],
      answer: 2,
      category: "saludos",
      explanation: "Hasta luego는 '나중에 봐(See you later)'라는 의미의 대중적인 작별 인사입니다. Adiós는 영구적인 작별 뉘앙스를 주기도 합니다."
    },
    {
      question: "쇼핑 중에 물건의 '가격'이 얼마인지 물어볼 때 쓰는 마법의 공식은?",
      options: [
        "¿De dónde eres?",
        "¿Cómo te llamas?",
        "¿Cuánto cuesta?",
        "¿Dónde está el baño?"
      ],
      answer: 2,
      category: "viajes",
      explanation: "'¿Cuánto cuesta?'는 '얼마인가요?'라는 뜻으로, 단가 문의 시 가장 널리 활용됩니다."
    },
    {
      question: "스페인어 단어 중 'Cerveza'의 뜻과 한국어 발음 표기가 옳은 것은?",
      options: [
        "치즈 - 께소",
        "맥주 - 쎄르베싸",
        "커피 - 까페",
        "와인 - 비노"
      ],
      answer: 1,
      category: "restaurante",
      explanation: "'Cerveza'는 맥주를 의미하며 C가 e앞에 왔으므로 스페인 현지에서는 번데기 발음, 중남미에서는 [ㅅ]으로 '쎄르베싸'라 발음합니다."
    },
    {
      question: "스페인어로 호텔 로비에서 프론트 직원에게 '예약이 있다'고 말할 때 알맞은 문장은?",
      options: [
        "Tengo una cuenta, por favor.",
        "Tengo una reserva.",
        "Tengo un boleto.",
        "Necesito ayuda."
      ],
      answer: 1,
      category: "viajes",
      explanation: "Tengo(나는 가졌다) + una reserva(예약 하나)를 사용하여 'Tengo una reserva'라고 말하면 예약했음을 전달할 수 있습니다."
    },
    {
      question: "알파벳 'J(호타)'가 포함된 'Jardín(정원)'의 올바른 발음 요령은?",
      options: [
        "영어의 J와 동일하게 [자르딘]으로 읽는다.",
        "J가 묵음이므로 [아르딘]으로 읽는다.",
        "목을 긁어내는 거친 ㅎ소리로 [하르딘]이라 읽는다.",
        "영어의 Y처럼 [야르딘]으로 읽는다."
      ],
      answer: 2,
      category: "alphabet",
      explanation: "스페인어에서 J는 목 안쪽에서 공기를 강하게 긁어내며 뿜는 거친 [ㅎ] 발음이 납니다. 따라서 '하르딘'이 정확합니다."
    },
    {
      question: "스페인어로 '10(열)'을 뜻하는 단어는 무엇일까요?",
      options: [
        "Uno",
        "Diez",
        "Cuatro",
        "Cien"
      ],
      answer: 1,
      category: "numeros",
      explanation: "10은 Diez(디에스/디에쓰)입니다. 1은 Uno, 4는 Cuatro, 100은 Cien입니다."
    },
    {
      question: "스페인 요리의 대명사 'Paella(파에야)'는 어떤 단어가 어원인 '팬(pan)'에서 유래했을까요?",
      options: [
        "Patatas",
        "Playa",
        "Pan",
        "Plato"
      ],
      answer: 2,
      category: "restaurante",
      explanation: "Paella는 원래 발렌시아어로 넓은 얕은 '프라이팬(Pan)'을 뜻하는 단어에서 요리 이름으로 파생되었습니다."
    },
    {
      question: "여성이 처음 만난 사람에게 '만나서 반가워'라고 소개할 때 형용사 어미의 올바른 형태는?",
      options: [
        "Encantado",
        "Encantada",
        "Encantados",
        "Encantadas"
      ],
      answer: 1,
      category: "saludos",
      explanation: "말하는 사람 본인이 여성인 경우 어미를 a로 일치시켜 'Encantada'라고 답해야 합니다. 남성은 'Encantado'를 사용합니다."
    },
    {
      question: "스페인어로 '화장실이 어디인가요?'라는 여행 필수 구문은 무엇일까요?",
      options: [
        "¿Dónde está la estación?",
        "¿Dónde está el baño?",
        "¿Dónde está el hotel?",
        "¿Cuánto cuesta?"
      ],
      answer: 1,
      category: "viajes",
      explanation: "Baño는 화장실이므로 '¿Dónde está el baño?(화장실이 어디인가요?)'가 정답입니다."
    },
    {
      question: "스페인어 알파벳 'LL(에예)'가 들어간 'Lluvia(비)'의 일반적인 발음과 어긋나는 것은?",
      options: [
        "유비아",
        "쥬비아(유비아와 주비아 사이)",
        "루비아",
        "슈비아(아르헨티나 지역 발음)"
      ],
      answer: 2,
      category: "alphabet",
      explanation: "LL은 [이]나 [지] 계열 자음이 되므로 '유비아', '쥬비아', '슈비아' 등은 가능하지만 영어의 L처럼 [루비아]로 발음되지는 않습니다."
    },
    {
      question: "상대방의 'Gracias(감사합니다)' 인사에 대한 답변으로 '천만에요'에 해당하는 스페인어는?",
      options: [
        "Hola",
        "De nada",
        "Adiós",
        "Igualmente"
      ],
      answer: 1,
      category: "saludos",
      explanation: "Gracias에 대응하는 '천만에요' 대구는 'De nada'가 가장 격식 없이 대표적으로 사용됩니다."
    },
    {
      question: "스페인어로 '와인'을 뜻하는 단어는 무엇일까요?",
      options: [
        "Cerveza",
        "Agua",
        "Vino",
        "Leche"
      ],
      answer: 2,
      category: "restaurante",
      explanation: "와인은 Vino(비노)입니다. Cerveza는 맥주, Agua는 물, Leche는 우유입니다."
    },
    {
      question: "호텔 체크인 후 방 열쇠를 건네받았을 때, 직원이 와이파이 비밀번호라며 말해준 단어 'Contraseña'의 뜻은?",
      options: [
        "열쇠",
        "아침 식사",
        "비밀번호",
        "방 번호"
      ],
      answer: 2,
      category: "viajes",
      explanation: "'Contraseña'는 와이파이 예약 번호나 비밀번호(Password)를 가리킵니다. 열쇠는 Llave입니다."
    },
    {
      question: "스페인어로 '1000'을 의미하는 단어는 무엇인가요?",
      options: [
        "Diez",
        "Cien",
        "Mil",
        "Uno"
      ],
      answer: 2,
      category: "numeros",
      explanation: "1000은 Mil(밀)입니다. 예를 들어 정말 고마울 때 'Mil gracias(천 번 감사합니다)'라고 씁니다."
    }
  ],
  culturalCards: [
    {
      id: "tapas",
      title: "타파스 (Tapas)",
      emoji: "🍢",
      description: "스페인에서 음료와 함께 즐기는 소량의 한 입 거리 음식을 뜻합니다. 옛날 안달루시아 지방에서 먼지와 파리를 막기 위해 와인 잔 위에 빵이나 하몬 조각을 얹어 놓던(Tapar: 덮다) 것에서 유래했습니다. 바를 돌며 맥주나 와인에 타파스를 곁들이는 문화를 'Ir de tapas(타파스 하러 가기)'라고 불러요!",
      benefit: "학습 동기: 식당 카테고리 퀴즈 마스터!"
    },
    {
      id: "flamenco",
      title: "플라멩코 (Flamenco)",
      emoji: "💃",
      description: "안달루시아 지방의 집시 문화에서 유래한 정열적인 예술입니다. 노래(Cante), 연주(Toque), 춤(Baile), 그리고 관객들의 박수와 환호(Jaleo)가 결합되어 깊은 슬픔과 기쁨을 한꺼번에 노래합니다. 공연을 보며 외치는 '¡Olé! (올레!)'는 흥을 돋우는 스페인의 대표 감탄사입니다.",
      benefit: "학습 동기: 첫 퀴즈 정답 기념 보상!"
    },
    {
      id: "sagrada",
      title: "사그라다 파밀리아 (Sagrada Família)",
      emoji: "⛪",
      description: "천재 건축가 안토니 가우디(Antoni Gaudí)의 필생의 역작으로, 바르셀로나에 위치한 성가족 성당입니다. 1882년에 착공하여 여전히 건설 중이며, 자연의 곡선 and 빛의 신비로움을 성당 내부에 그대로 구현해 냈습니다. 가우디 사후 100주년(2026년 예정) 즈음 완공을 목표로 하고 있습니다.",
      benefit: "학습 동기: 연속 학습 3일 달성 보상!"
    },
    {
      id: "siesta",
      title: "시esta (Siesta)",
      emoji: "💤",
      description: "한낮의 뜨거운 태양을 피해 오후에 낮잠을 자는 스페인의 전통적인 휴식 문화입니다. 보통 오후 2시부터 5시 사이에 상점들이 문을 닫고 휴식을 취하죠. 현대 사회로 오면서 대도시에서는 많이 사라지고 있지만, 여전히 여유와 웰빙을 중시하는 스페인 사람들의 삶의 지혜가 담겨 있습니다.",
      benefit: "학습 동기: 스페인어 알파벳 학습 완료!"
    }
  ]
};
