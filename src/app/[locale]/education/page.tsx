import { CardHeader } from '@/shared/ui/Card/ui/CardHeader'
import { container, margins } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

type Education = {
  id: string
  title: string
  degree: string
  description: string
  field: {
    faculty?: string
    specialization: string
  }
  period: { from: string; to: string }
  finalWork: {
    title: string
    description?: string | string[]
  }
}

export default function Education() {
  const educationItems: Education[] = [
    {
      id: '1',
      title:
        'Муромский институт (филиал) Владимирского государственного университета им. А.Г. и Н.Г. Столетовых',
      period: { from: '2011', to: '2015' },
      field: {
        faculty: 'Информационные технологии',
        specialization: 'Информационные системы',
      },
      degree: 'Высшее',
      description:
        'Фундаментальные знания computer science: базы данных, сети, web, теория вероятности, парадигмы программирования, теория алгоритмов, ИИ, проектирование и архитектура информационных систем и многое другое',
      finalWork: {
        title:
          'Разработка геоинформационной системы для анализа корректности топологии карт разных масштабов',
        description: [
          'Как бы это объяснить покороче...',
          'Если мы смотрим на озеро Байкал при масштабе карты 1:1 000, а потом меняем масштаб на 1:10 000 000, то озера Байкал должно остаться в Ирутской области и Республике Бурятия, а не начать впадать в море Лаптевых и Аравийское море, затопив при этом часть Азии. Другими словами, слои на карте должны корректно перерисоваться при изменении масштаба, чтобы корректно отобразить объект или совсем убрать его.',
          'Подобные случаи должна была находить и регистрировать программа.',
        ],
      },
    },
    {
      id: '2',
      title: 'Муромский техникум радиоэлектронного приборостроения',
      period: { from: '2007', to: '2010' },
      field: {
        faculty: 'Информационные технологии',
        specialization:
          'Техническое обслуживание и ремонт вычислительной техники и компьютерных сетей',
      },
      degree: 'Среднее специальное',
      description:
        'Помимо изучения устройства электронных приборов и физических принципов их работы, изучали программирование на языках C++, Pascal; немного программировали на Assembler для семейства процессоров Intel 8085.',
      finalWork: {
        title:
          'Разработка и создание лабораторного стенда для изучения триггеров на базе микросхем ТТЛ-логики (серии К155, К555, КР531). Стенд позволяет исследовать работу комбинационных и последовательных схем.',
        description:
          'Вся группа делилась на пары, и каждая пара делала свой лабораторный стенд. Из тонкой фанеры выпиливался корпус для стенда, внутрь которого монтировалась электроника. На лицевой панели устройства была расположена принципиальная схема; располагались тумблеры подачи сигналов и лампочки, которые отображали результат работы микросхем.',
      },
    },
  ]

  return (
    <main className={container.main}>
      <section className={container.section}>
        <Typography variant="h1">Образование</Typography>
      </section>

      <div>
        {educationItems.map((item) => (
          <article key={item.id} style={{ marginBottom: '20px' }}>
            <CardHeader title={item.title} additional={item.degree} />

            <div className={margins.mb_m}>
              <Typography variant="caption" component="p">
                Специальность: {item.field.specialization}
              </Typography>

              {item.field.faculty && (
                <Typography variant="caption" component="p">
                  Факультет: {item.field.faculty}
                </Typography>
              )}
            </div>
            <div>
              <Typography>{item.description}</Typography>
            </div>

            <div>
              <Typography>Диплом: {item.finalWork.title}</Typography>
              <Typography>
                {typeof item.finalWork.description === 'string' &&
                  item.finalWork.description}
              </Typography>
            </div>

            <div>
              <time dateTime={item.period.from}>
                <Typography variant="caption">{item.period.from}</Typography>
              </time>
              <time dateTime={item.period.to}>
                <Typography variant="caption"> - {item.period.to}</Typography>
              </time>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
