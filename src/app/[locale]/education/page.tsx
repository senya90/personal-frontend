import { educationItems } from '@/entity/education/lib/constants'
import { EducationCard } from '@/entity/education/ui/EducationCard/EducationCard'
import { container } from '@/shared/ui/styles'
import { Typography } from '@/shared/ui/Typography'

export default function Education() {
  return (
    <main className={container.main}>
      <section className={container.section}>
        <Typography variant="h1">Образование</Typography>
      </section>

      <div>
        {educationItems.map((item) => (
          <EducationCard education={item} key={item.id} />
        ))}
      </div>
    </main>
  )
}
