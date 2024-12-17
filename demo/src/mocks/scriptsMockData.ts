import { Script, CustomScriptLanguageCode } from '../interfaces/Scripts';

const scripts: Script<CustomScriptLanguageCode>[] = [
  {
    startTimeInSecond: 6,
    durationInSecond: 6,
    enScript: 'Your eyes dilate as the room snaps into focus.',
    koScript: '방에 초점이 맞춰지면서 눈이 커집니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 12,
    durationInSecond: 6,
    enScript:
      'Fatigue dissipates, leaving heart-pounding vigilance in its wake.',
    koScript: '피로가 사라지고 심장이 두근거리는 경계심이 남습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 18,
    durationInSecond: 6,
    enScript: 'Your muscles tense, injected with energy.',
    koScript: '근육이 긴장하고 에너지가 주입됩니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 24,
    durationInSecond: 7,
    enScript: 'And for a moment, time seems to slow down.',
    koScript: '그리고 잠시 동안, 시간이 느려지는 것 같다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 31,
    durationInSecond: 2,
    enScript: 'The reason?',
    koScript: '그 이유는 무엇인가?',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 33,
    durationInSecond: 6,
    enScript: 'You clumsily dropped your tray in the middle of the cafeteria.',
    koScript: '당신은 서투르게 쟁반을 식당 한가운데에 떨어뜨렸습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 39,
    durationInSecond: 3,
    enScript: 'It’s not unusual for our minds and bodies',
    koScript: '그것은 우리의 마음과 몸에 드문 일이 아닙니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 42,
    durationInSecond: 5,
    enScript: 'to have seemingly exaggerated responses to everyday situations.',
    koScript: '일상적인 상황에 대해 겉보기에 과장된 반응을 보이는 것.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 47,
    durationInSecond: 3,
    enScript: 'An upcoming project deadline,',
    koScript: '다가오는 프로젝트 마감일,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 50,
    durationInSecond: 4,
    enScript: 'a fight with a family member, or even an embarrassing moment',
    koScript: '가족과의 싸움, 심지어 부끄러운 순간',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 54,
    durationInSecond: 5,
    enScript:
      'can easily trigger what’s known as the body’s fight or flight response.',
    koScript:
      '신체의 투쟁 또는 도피 반응으로 알려진 것을 쉽게 유발할 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 59,
    durationInSecond: 3,
    enScript: 'It’s a set of hormonal and physiological changes',
    koScript: '이는 호르몬 및 생리적 변화의 집합이다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 62,
    durationInSecond: 5,
    enScript:
      'that evolved to help our ancestors escape life-threatening situations,',
    koScript:
      '우리 조상들이 생명을 위협하는 상황에서 벗어날 수 있도록 진화했습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 67,
    durationInSecond: 5,
    enScript: 'like avoiding a venomous snake or fleeing a charging hyena.',
    koScript: '독사를 피하거나 돌진하는 하이에나로부터 도망치는 것과 같습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 72,
    durationInSecond: 5,
    enScript: 'Yet, this fight or flight response may feel less appropriate',
    koScript:
      '하지만 이러한 투쟁 또는 도피 반응은 그다지 적절하지 않게 느껴질 수 있습니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 77,
    durationInSecond: 3,
    enScript: 'for the types of stressors we face today.',
    koScript: '오늘날 우리가 직면하고 있는 스트레스 요인의 유형에 대해.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 80,
    durationInSecond: 4,
    enScript:
      'When we perceive something as threatening, overwhelming, or even embarrassing,',
    koScript:
      '우리가 무언가를 위협적이거나, 압도적이거나, 심지어 당혹스럽게 인식할 때,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 84,
    durationInSecond: 6,
    enScript: 'a signaling pathway known as the HPA-axis is triggered.',
    koScript: 'HPA 축으로 알려진 신호 전달 경로가 트리거됩니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 90,
    durationInSecond: 3,
    enScript: 'It starts with activation of the hypothalamus,',
    koScript: '그것은 시상하부의 활성화로 시작됩니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 93,
    durationInSecond: 3,
    enScript: 'the hormonal control center of the brain.',
    koScript: '뇌의 호르몬 조절 센터.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 96,
    durationInSecond: 3,
    enScript: 'The hypothalamus sounds the alarm,',
    koScript: '시상하부는 경보를 울립니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 99,
    durationInSecond: 3,
    enScript: 'alerting the pituitary gland and the adrenal glands,',
    koScript: '뇌하수체와 부신에 경보를 발령하고,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 102,
    durationInSecond: 5,
    enScript:
      'leading to the release of stress hormones like adrenaline and cortisol.',
    koScript:
      '아드레날린과 코르티솔과 같은 스트레스 호르몬의 방출로 이어집니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 107,
    durationInSecond: 2,
    enScript: 'These hormones travel through the bloodstream',
    koScript: '이 호르몬은 혈류를 통해 이동합니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 109,
    durationInSecond: 2,
    enScript: 'and relay all sorts of effects,',
    koScript: '그리고 모든 종류의 효과를 전달하고,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 111,
    durationInSecond: 3,
    enScript: 'like increasing heart rate to improve oxygen flow',
    koScript: '산소 흐름을 개선하기 위해 심박수를 높이는 것과 같습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 114,
    durationInSecond: 4,
    enScript: 'and boosting the amount of energy available to the brain.',
    koScript: '뇌가 사용할 수 있는 에너지의 양을 증가시킵니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 118,
    durationInSecond: 4,
    enScript: 'If this sounds like a good thing, that’s because it can be!',
    koScript: '이것이 좋은 일처럼 들린다면, 그럴 수 있기 때문입니다!',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 122,
    durationInSecond: 3,
    enScript: 'This stress response helps you react quickly and efficiently',
    koScript: '이 스트레스 반응은 빠르고 효율적으로 반응하는 데 도움이 됩니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 125,
    durationInSecond: 5,
    enScript: 'in the face of immediate danger, like dodging a swerving car.',
    koScript:
      '방향을 바꾸는 차를 피하는 것과 같은 즉각적인 위험에 직면했을 때.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 130,
    durationInSecond: 5,
    enScript:
      'However, it can also be beneficial in less than life-threatening situations.',
    koScript: '그러나 생명을 위협하지 않는 상황에서도 도움이 될 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 135,
    durationInSecond: 5,
    enScript: 'For example, stress, in small doses, can be very motivating.',
    koScript:
      '예를 들어, 스트레스는 조금만 섭취해도 매우 동기 부여가 될 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 140,
    durationInSecond: 2,
    enScript: 'Nothing quite drives you to practice a piano solo',
    koScript: '피아노 솔로를 연습하게 만드는 것은 없습니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 142,
    durationInSecond: 3,
    enScript: 'like the pressure of an upcoming recital.',
    koScript: '마치 다가오는 리사이틀에 대한 압박감처럼요.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 145,
    durationInSecond: 4,
    enScript: 'Feeling a little stressed may even help you learn.',
    koScript: '약간의 스트레스를 받는 것도 학습에 도움이 될 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 149,
    durationInSecond: 3,
    enScript: 'The hippocampus, a brain region essential to learning,',
    koScript: '학습에 필수적인 뇌 영역인 해마(hippocampus)',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 152,
    durationInSecond: 5,
    enScript:
      'is rich in receptors that respond to the stress hormone cortisol.',
    koScript: '스트레스 호르몬인 코르티솔에 반응하는 수용체가 풍부합니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 157,
    durationInSecond: 3,
    enScript: 'Lab studies have found that adding a mild stressor,',
    koScript: '실험실 연구에 따르면 가벼운 스트레스 요인을 추가하면',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 160,
    durationInSecond: 3,
    enScript: 'such as a sudden temperature change before a memory task,',
    koScript: '메모리 작업 전의 급격한 온도 변화와 같은 경우,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 163,
    durationInSecond: 2,
    enScript: 'can enhance performance.',
    koScript: '성능을 향상시킬 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 165,
    durationInSecond: 2,
    enScript: 'Further, during your teen years,',
    koScript: '더욱이, 십대 시절에는',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 167,
    durationInSecond: 5,
    enScript: 'the brain is rewired to promote exploration and learning.',
    koScript: '뇌는 탐험과 학습을 촉진하기 위해 재배선됩니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 172,
    durationInSecond: 6,
    enScript:
      'And one way it does this is by making the HPA-axis more reactive.',
    koScript:
      '이를 수행하는 한 가지 방법은 HPA 축을 더 반응적으로 만드는 것입니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 178,
    durationInSecond: 6,
    enScript:
      'The problem is when this stress response is triggered too often or for too long.',
    koScript:
      '문제는 이러한 스트레스 반응이 너무 자주 또는 너무 오래 유발되는 경우입니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 184,
    durationInSecond: 2,
    enScript: 'Normally when we experience a stressful event,',
    koScript: '일반적으로 스트레스가 많은 사건을 겪을 때,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 186,
    durationInSecond: 5,
    enScript: 'stress hormones are released for about 15 to 30 minutes.',
    koScript: '스트레스 호르몬은 약 15분에서 30분 동안 분비됩니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 191,
    durationInSecond: 4,
    enScript: 'But if we face multiple or persistent stressors, day after day,',
    koScript:
      '그러나 우리가 매일 여러 가지 또는 지속적인 스트레스 요인에 직면한다면,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 195,
    durationInSecond: 4,
    enScript: 'the HPA-axis starts to adapt.',
    koScript: 'HPA 축이 적응하기 시작합니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 199,
    durationInSecond: 3,
    enScript: 'Anticipating future stressful events,',
    koScript: '미래의 스트레스가 많은 사건을 예상하고,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 202,
    durationInSecond: 6,
    enScript:
      'the HPA-axis stays activated for longer, and continuously releases stress hormones.',
    koScript:
      'HPA 축은 더 오래 활성화 상태를 유지하고 지속적으로 스트레스 호르몬을 방출합니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 208,
    durationInSecond: 3,
    enScript: 'This causes issues throughout the body,',
    koScript: '이것은 몸 전체에 문제를 일으키고,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 211,
    durationInSecond: 3,
    enScript: 'and can lead to problems like sleeplessness, brain fog,',
    koScript: '불면증, 브레인 포그와 같은 문제로 이어질 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 214,
    durationInSecond: 4,
    enScript: 'digestive issues, and even heart disease.',
    koScript: '소화 문제, 심지어 심장 질환까지.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 218,
    durationInSecond: 3,
    enScript: 'So how much stress is too much stress?',
    koScript: '그렇다면 얼마나 많은 스트레스가 과도한 스트레스일까요?',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 221,
    durationInSecond: 5,
    enScript:
      'It’s difficult to say, as not everyone experiences stress in the same way.',
    koScript:
      '모든 사람이 같은 방식으로 스트레스를 경험하는 것은 아니기 때문에 말하기는 어렵습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 226,
    durationInSecond: 4,
    enScript:
      'Different factors like your genetics, environment, and even your age,',
    koScript: '유전, 환경, 심지어 나이와 같은 다양한 요인,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 230,
    durationInSecond: 3,
    enScript: 'can influence the way your body responds.',
    koScript: '몸이 반응하는 방식에 영향을 줄 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 233,
    durationInSecond: 2,
    enScript: 'But no matter your situation,',
    koScript: '그러나 당신의 상황이 어떻든,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 235,
    durationInSecond: 5,
    enScript: 'there are tools that can make dealing with stress a bit easier.',
    koScript: '스트레스에 좀 더 쉽게 대처할 수 있는 도구가 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 240,
    durationInSecond: 4,
    enScript:
      'Exercise, for example, is thought to prompt the production of new neurons,',
    koScript:
      '예를 들어, 운동은 새로운 뉴런의 생성을 촉진하는 것으로 생각됩니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 244,
    durationInSecond: 4,
    enScript: 'which may help our brains become more resilient to stress.',
    koScript:
      '우리의 뇌가 스트레스에 더 탄력적으로 대처하는 데 도움이 될 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 248,
    durationInSecond: 4,
    enScript: 'A run through the park or a basketball game with friends',
    koScript: '공원을 달리기 또는 친구들과 농구 경기',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 252,
    durationInSecond: 4,
    enScript:
      'can also be a great distraction from whatever’s stressing you out.',
    koScript:
      '또한 당신을 스트레스 받게 하는 모든 것으로부터 큰 방해가 될 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 256,
    durationInSecond: 1,
    enScript: 'Speaking of friends,',
    koScript: '친구 얘기가 나왔으니 말인데,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 257,
    durationInSecond: 5,
    enScript:
      'spending time with others can actually buffer your body’s response to stress.',
    koScript:
      '다른 사람들과 시간을 보내는 것은 실제로 스트레스에 대한 신체의 반응을 완충할 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 262,
    durationInSecond: 3,
    enScript: 'This may be due to the actions of oxytocin,',
    koScript: '이것은 옥시토신의 작용 때문일 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 265,
    durationInSecond: 3,
    enScript: 'a hormone that helps us feel closer to others,',
    koScript: '다른 사람과 더 가까워지는 데 도움이 되는 호르몬,',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 268,
    durationInSecond: 5,
    enScript: 'and can also dampen activity of the HPA-axis.',
    koScript: '또한 HPA 축의 활성을 완화할 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 273,
    durationInSecond: 4,
    enScript:
      'And simple actions, like pausing to breathe during stressful situations',
    koScript:
      '그리고 스트레스가 많은 상황에서 숨을 쉬기 위해 잠시 멈추는 것과 같은 간단한 행동도 할 수 있습니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 277,
    durationInSecond: 4,
    enScript: 'or journaling every day, can have a huge impact.',
    koScript: '또는 매일 일기를 쓰는 것은 큰 영향을 미칠 수 있습니다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 281,
    durationInSecond: 5,
    enScript:
      'These are also known as mindfulness practices, which can, over time,',
    koScript:
      '이것들은 또한 마음 챙김 연습으로 알려져 있으며, 시간이 지남에 따라',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 286,
    durationInSecond: 4,
    enScript:
      'help you build a greater understanding of your thoughts and feelings',
    koScript: '자신의 생각과 감정을 더 잘 이해하도록 돕는다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 290,
    durationInSecond: 4,
    enScript: 'and remain grounded in the present moment.',
    koScript: '그리고 현재 순간에 기반을 유지하십시오.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 294,
    durationInSecond: 3,
    enScript: 'We can’t always control what life throws at us.',
    koScript: '삶이 우리에게 던지는 것을 항상 통제할 수는 없다.',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 297,
    durationInSecond: 4,
    enScript: 'But there are ways to better prepare our minds and bodies',
    koScript: '하지만 몸과 마음을 더 잘 준비할 수 있는 방법이 있습니다',
    isHighlighted: false,
  },
  {
    startTimeInSecond: 301,
    durationInSecond: 28,
    enScript:
      'for the many deadlines, awkward conversations, and spills, ahead.',
    koScript:
      '숱한 마감 시간, 어색한 대화, 유출 등 앞으로의 많은 마감 시간, 어색한 대화, 그리고 엎질러진 것들에 대해.',
    isHighlighted: false,
  },
];

export default scripts;
