import { Script, CustomScriptLanguageCode } from '../interfaces/Scripts';

const scripts: Script<CustomScriptLanguageCode>[] = [
  {
    startTimeInSecond: 0,
    durationInSecond: 3,
    enScript: 'Imagine, the year is 1905.',
    koScript: '해가 1905년이라고 상상해 보십시오.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 3,
    durationInSecond: 3,
    enScript: 'One day, the clock on the tower in Berne, Switzerland, ',
    koScript: '어느 날, 스위스 베른의 탑에 있는 시계는 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 6,
    durationInSecond: 1,
    enScript: 'is a little late.',
    koScript: '조금 늦었습니다.',
    isHighlighted: true,
  },
  {
    startTimeInSecond: 7,
    durationInSecond: 3,
    enScript: 'Two minutes late, to be more precise.',
    koScript: '더 정확히 말하면 2분 늦었습니다.',
    isHighlighted: true,
  },
  {
    startTimeInSecond: 10,
    durationInSecond: 3,
    enScript: 'For that reason, a man who lives near the tower does not ',
    koScript: '그렇기 때문에 탑 근처에 사는 사람은 그렇지 않습니다 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 13,
    durationInSecond: 3,
    enScript: 'wake up at the same time that he usually wakes up to ',
    koScript: '평소에 눈을 뜨는 것과 동시에 일어나십시오. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 16,
    durationInSecond: 1,
    enScript: 'go to work.',
    koScript: '일하러 가십시오.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 17,
    durationInSecond: 3,
    enScript: 'Realising the mistake, he becomes a little nervous.',
    koScript: '실수를 깨달은 그는 약간 긴장하게 됩니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 20,
    durationInSecond: 1,
    enScript: 'It takes him a little longer to ',
    koScript: '그는 조금 더 오래 걸립니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 21,
    durationInSecond: 3,
    enScript: 'get dressed, drink some coffee and leave the house.',
    koScript: '옷을 입고 커피를 마시고 집을 나선다.',
    isHighlighted: true,
  },
  {
    startTimeInSecond: 24,
    durationInSecond: 3,
    enScript: 'He leaves five minutes later than usual. He is about to ',
    koScript: '그는 평소보다 5분 늦게 퇴근한다. 그는 곧 ',
    isHighlighted: true,
  },
  {
    startTimeInSecond: 27,
    durationInSecond: 1,
    enScript: 'cross the street.',
    koScript: '길을 건넙니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 28,
    durationInSecond: 4,
    enScript: 'Meanwhile, a banker gets into his new car without ',
    koScript: '한편 한 은행원은 아무 것도 없이 새 차에 올라탔다. ',
    isHighlighted: true,
  },
  {
    startTimeInSecond: 32,
    durationInSecond: 2,
    enScript: 'knowing that it has a problem with the brakes.',
    koScript: '브레이크에 문제가 있다는 것을 알고 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 34,
    durationInSecond: 4,
    enScript: "Our man crosses the street and doesn't see the car.",
    koScript: '우리 남자는 길을 건너는데 차가 보이지 않습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 38,
    durationInSecond: 3,
    enScript: 'The man is run over and dies.',
    koScript: '그 남자는 치여 죽는다.',
    isHighlighted: true,
  },
  {
    startTimeInSecond: 41,
    durationInSecond: 4,
    enScript: 'This man is no less than Albert Einstein.',
    koScript: '이 사람은 알버트 아인슈타인 못지않습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 45,
    durationInSecond: 3,
    enScript: 'That year Einstein should have published four works ',
    koScript: '그 해에 아인슈타인은 네 권의 저서를 출판했어야 했다 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 48,
    durationInSecond: 3,
    enScript: 'that would become the basis of modern physics.',
    koScript: '그것은 현대 물리학의 기초가 될 것입니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 51,
    durationInSecond: 4,
    enScript: 'Innovations like GPS, TV screens, the semiconductors ',
    koScript: 'GPS, TV 화면, 반도체와 같은 혁신 ',
    isHighlighted: true,
  },
  {
    startTimeInSecond: 55,
    durationInSecond: 4,
    enScript: 'that allowed us to create laptops, never happen.',
    koScript: '그 덕분에 우리는 노트북을 만들 수 있었습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 59,
    durationInSecond: 4,
    enScript: 'The computer, the laptop, the mobile you are watching this ',
    koScript: '당신이 보고 있는 컴퓨터, 노트북, 모바일 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 63,
    durationInSecond: 3,
    enScript: 'video on never come into existence.',
    koScript: '비디오 켜기는 결코 존재하지 않습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 66,
    durationInSecond: 4,
    enScript: "And this video... doesn't exist either.",
    koScript: '그리고 이 비디오는... 도 존재하지 않습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 70,
    durationInSecond: 3,
    enScript: 'This sequence of events is an example of what is known as ',
    koScript: '이 이벤트 시퀀스는 다음과 같은 예로 알려져 있습니다. ',
    isHighlighted: true,
  },
  {
    startTimeInSecond: 73,
    durationInSecond: 1,
    enScript: 'the butterfly effect, a ',
    koScript: '나비 효과, a ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 74,
    durationInSecond: 4,
    enScript: 'manifestation of Chaos Theory.',
    koScript: '카오스 이론의 발현.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 78,
    durationInSecond: 2,
    enScript: 'For many centuries, the world was explained through the ',
    koScript: '수세기 동안 세계는 를 통해 설명되었습니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 80,
    durationInSecond: 3,
    enScript: 'laws of Isaac Newton and classical physics.',
    koScript: '아이작 뉴턴과 고전 물리학의 법칙.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 83,
    durationInSecond: 2,
    enScript: 'According to these laws, if ',
    koScript: '이 법률에 따라 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 85,
    durationInSecond: 3,
    enScript: 'the current state of an object is known, its future behaviour ',
    koScript: '물체의 현재 상태, 미래의 동작을 알 수 있습니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 88,
    durationInSecond: 3,
    enScript: 'can be predicted with relative ease.',
    koScript: '비교적 쉽게 예측할 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 91,
    durationInSecond: 3,
    enScript: 'Chaos Theory questions this deterministic vision: not ',
    koScript: '카오스 이론은 이러한 결정론적 비전에 의문을 제기한다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 94,
    durationInSecond: 2,
    enScript: 'everything is predictable anymore, nor does it work ',
    koScript: '더 이상 모든 것이 예측 가능하고 작동하지 않습니다 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 96,
    durationInSecond: 2,
    enScript: 'like clockwork.',
    koScript: '시계태엽처럼.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 98,
    durationInSecond: 1,
    enScript: 'Since the 1800s, ',
    koScript: '1800년대 이후, ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 99,
    durationInSecond: 3,
    enScript: 'mathematicians have raised the idea that not all ',
    koScript: '수학자들은 모든 것이 아니라는 생각을 제기했습니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 102,
    durationInSecond: 3,
    enScript: 'phenomena could be predicted by Newtonian laws.',
    koScript: '현상은 뉴턴의 법칙에 의해 예측될 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 105,
    durationInSecond: 4,
    enScript: 'But a meteorologist named Edward Lorenz made chaos ',
    koScript:
      '그러나 에드워드 로렌츠(Edward Lorenz)라는 기상학자는 혼란을 일으켰다 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 109,
    durationInSecond: 2,
    enScript: 'theory a visible phenomenon.',
    koScript: '이론은 눈에 보이는 현상입니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 111,
    durationInSecond: 4,
    enScript: 'It all started in 1961 when he was working on a',
    koScript: '이 모든 것은 1961년 그가',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 115,
    durationInSecond: 3,
    enScript: 'mathematical model to forecast the weather.',
    koScript: '날씨를 예측하는 수학적 모델.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 118,
    durationInSecond: 4,
    enScript: 'Lorenz entered data such as temperature, humidity, ',
    koScript: '로렌츠는 온도, 습도, ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 122,
    durationInSecond: 3,
    enScript: 'pressure, and wind direction into his computer.',
    koScript: '압력과 바람의 방향을 컴퓨터에 입력합니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 125,
    durationInSecond: 3,
    enScript: 'His computer would draw a graph modelling what the ',
    koScript: '그의 컴퓨터는 무엇을 모델링하는 그래프를 그릴 것입니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 128,
    durationInSecond: 1,
    enScript: 'weather would be like, ',
    koScript: '날씨는 다음과 같을 것입니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 129,
    durationInSecond: 4,
    enScript: 'not always accurate, but very close to reality.',
    koScript: '항상 정확하지는 않지만 현실에 매우 가깝습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 133,
    durationInSecond: 3,
    enScript: 'One morning, Lorenz decided to verify some results.',
    koScript: '어느 날 아침, 로렌츠는 몇 가지 결과를 확인해보기로 했다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 136,
    durationInSecond: 3,
    enScript: 'He stopped the computer, to save time, entered the ',
    koScript: '그는 시간을 절약하기 위해 컴퓨터를 멈추고 들어갔다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 139,
    durationInSecond: 3,
    enScript: 'numbers himself, and went to grab a coffee.',
    koScript: '스스로 번호를 매기고 커피를 마시러 갔다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 142,
    durationInSecond: 3,
    enScript: 'When he returned, the chart was incredibly different from ',
    koScript: '그가 돌아왔을 때, 차트는 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 145,
    durationInSecond: 1,
    enScript: 'the original.',
    koScript: '오리지널.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 146,
    durationInSecond: 1,
    enScript: 'At the beginning it started ',
    koScript: '처음에는 시작되었습니다 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 147,
    durationInSecond: 4,
    enScript: 'out pretty similar, but in the middle it presented a ',
    koScript: '꽤 비슷하지만 중간에 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 151,
    durationInSecond: 2,
    enScript: 'completely different trajectory.',
    koScript: '완전히 다른 궤적.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 153,
    durationInSecond: 3,
    enScript: 'Surprised, he checked the numbers.',
    koScript: '깜짝 놀란 그는 숫자를 확인했다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 156,
    durationInSecond: 3,
    enScript: 'He found that the number he had entered was three tenths ',
    koScript: '그는 자기가 입력한 숫자가 십분의 3이라는 것을 알게 되었다 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 159,
    durationInSecond: 3,
    enScript: 'less than the number used by the computer.',
    koScript: '컴퓨터에서 사용하는 숫자보다 작습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 162,
    durationInSecond: 1,
    enScript: 'That difference, which ',
    koScript: '그 차이, ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 163,
    durationInSecond: 4,
    enScript: 'altered the trajectory so much, is equivalent to a ',
    koScript: '궤적을 너무 많이 변경한 것은 다음과 같습니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 167,
    durationInSecond: 3,
    enScript: 'particle of dust on the Eiffel Tower, or one less feather ',
    koScript: '에펠탑의 먼지 입자 또는 깃털 하나 감소 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 170,
    durationInSecond: 2,
    enScript: 'in the weight of a duck.',
    koScript: '오리의 무게로.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 172,
    durationInSecond: 4,
    enScript: 'Lorenz deduced that this experiment was not a special case,',
    koScript: '로렌츠는 이 실험이 특별한 경우가 아니라고 추론했다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 176,
    durationInSecond: 2,
    enScript: 'that there were other systems in which tiny ',
    koScript: '작은 다른 시스템이 있었다는 것을 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 178,
    durationInSecond: 4,
    enScript: 'differences produced, over time, monumental changes, ',
    koScript: '시간이 지남에 따라 기념비적 인 변화가 빚어낸 차이, ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 182,
    durationInSecond: 1,
    enScript: 'making everything seem',
    koScript: '모든 것을 보이게 하기',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 183,
    durationInSecond: 3,
    enScript: 'unpredictable... that the flapping of a butterfly in ',
    koScript: '예측할 수 없는... 나비의 날갯짓 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 186,
    durationInSecond: 3,
    enScript: 'Brazil could, in theory, cause ',
    koScript: '브라질은 이론적으로 다음과 같은 문제를 일으킬 수 있습니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 189,
    durationInSecond: 4,
    enScript: 'enough of a disturbance to spark a tornado in Texas.',
    koScript: '텍사스에서 토네이도를 일으키기에 충분한 소동입니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 193,
    durationInSecond: 2,
    enScript: 'Even though we have a good idea of how the universe ',
    koScript: '우리는 우주가 어떻게 존재하는지에 대해 잘 알고 있지만 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 195,
    durationInSecond: 2,
    enScript: 'works, there are no ',
    koScript: '작품, 없다 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 197,
    durationInSecond: 2,
    enScript: 'measurements that allow us to determine the exact ',
    koScript: '정확한 결과를 결정할 수 있는 측정 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 199,
    durationInSecond: 4,
    enScript: 'position and speed of every atom in the universe.',
    koScript: '우주에 있는 모든 원자의 위치와 속도.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 203,
    durationInSecond: 1,
    enScript: 'And this "inaccuracy" in our ',
    koScript: '그리고 이 "부정확성"은 우리의 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 204,
    durationInSecond: 4,
    enScript: 'calculations makes predictions difficult, ',
    koScript: '계산은 예측을 어렵게 만듭니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 208,
    durationInSecond: 1,
    enScript: 'one of the reasons why long-term',
    koScript: '왜 장기적으로',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 209,
    durationInSecond: 2,
    enScript: 'prediction is impossible.',
    koScript: '예측은 불가능합니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 211,
    durationInSecond: 3,
    enScript: 'But chaos is not the same as disorder.',
    koScript: '그러나 혼돈은 무질서와 같지 않습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 214,
    durationInSecond: 2,
    enScript: 'Although chaos makes predictions difficult, the ',
    koScript: '혼돈은 예측을 어렵게 만들지만, ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 216,
    durationInSecond: 3,
    enScript: 'universe is not random and ',
    koScript: '우주는 무작위가 아니며 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 219,
    durationInSecond: 2,
    enScript: 'effects still follow causes.',
    koScript: '결과는 여전히 원인을 따릅니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 221,
    durationInSecond: 4,
    enScript: 'And no matter how chaotic it may seem, a system always ',
    koScript: '그리고 아무리 혼란스러워 보일지라도 시스템은 항상 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 225,
    durationInSecond: 4,
    enScript: 'follows a trajectory towards a certain point.',
    koScript: '특정 지점을 향한 궤적을 따릅니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 229,
    durationInSecond: 3,
    enScript: 'For example, in the calculations Lorenz used for ',
    koScript: '예를 들어, Lorenz가 사용한 계산에서 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 232,
    durationInSecond: 2,
    enScript: 'his model, the trajectory ',
    koScript: '그의 모델, 궤적 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 234,
    durationInSecond: 2,
    enScript: 'created a pattern that resembled the wings of a ',
    koScript: '의 날개를 닮은 패턴을 만들었습니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 236,
    durationInSecond: 2,
    enScript: 'butterfly.',
    koScript: '나비.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 238,
    durationInSecond: 1,
    enScript: 'Understanding these patterns ',
    koScript: '이러한 패턴 이해 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 239,
    durationInSecond: 3,
    enScript: 'of chaos has practical applications.',
    koScript: '혼돈의 실제적인 응용이 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 242,
    durationInSecond: 3,
    enScript: 'In the stock market it reminds us that a slight ',
    koScript: '주식 시장에서는 약간의 ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 245,
    durationInSecond: 2,
    enScript: 'fluctuation can cause a crisis ',
    koScript: '변동은 위기를 초래할 수 있습니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 247,
    durationInSecond: 1,
    enScript: 'in the market - ',
    koScript: '시장에서 - ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 248,
    durationInSecond: 2,
    enScript: 'and that is why we cannot speak of ',
    koScript: '그렇기 때문에 우리는 말할 수 없습니다. ',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 250,
    durationInSecond: 2,
    enScript: 'predictions but of probabilities.',
    koScript: '예측이지만 확률입니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 252,
    durationInSecond: 4,
    enScript:
      'In the human body, it allows us to understand the chaotic behaviour',
    koScript: '인체에서는 혼란스러운 행동을 이해할 수 있습니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 256,
    durationInSecond: 3,
    enScript: 'of a heart with cardiac arrhythmia.',
    koScript: '심장 부정맥이 있는 심장의.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 259,
    durationInSecond: 3,
    enScript: 'Even in human behaviour, the butterfly effect can be used',
    koScript: '인간의 행동에서도 나비 효과를 사용할 수 있습니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 262,
    durationInSecond: 5,
    enScript: 'to analyse social phenomena. For example, how trolling on',
    koScript: '사회 현상을 분석합니다. 예를 들어, 트롤링하는 방법',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 267,
    durationInSecond: 5,
    enScript: 'social networks can be triggered by a single negative comment.',
    koScript: '소셜 네트워크는 하나의 부정적인 댓글로 촉발될 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 272,
    durationInSecond: 3,
    enScript: 'Our universe continues to obey the laws of cause and effect.',
    koScript: '우리의 우주는 계속해서 원인과 결과의 법칙을 따르고 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 275,
    durationInSecond: 3,
    enScript: 'The sun will continue to rise every morning.',
    koScript: '태양은 매일 아침 계속 떠오를 것입니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 278,
    durationInSecond: 4,
    enScript: 'The planes we build will keep flying.',
    koScript: '우리가 만드는 비행기는 계속 날아갈 것입니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 282,
    durationInSecond: 3,
    enScript: 'Ultimately, chaos theory introduces an element of',
    koScript: '궁극적으로, 카오스 이론은 다음과 같은 요소를 도입합니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 285,
    durationInSecond: 4,
    enScript: 'uncertainty into our reading of the Universe.',
    koScript: '우주에 대한 우리의 읽기에 대한 불확실성.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 289,
    durationInSecond: 21,
    enScript: 'It reveals the limit of our knowledge.',
    koScript: '그것은 우리 지식의 한계를 드러냅니다.',
    isHighlighted: false,
  },
];

export default scripts;
