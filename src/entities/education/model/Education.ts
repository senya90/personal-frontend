export type Education = {
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
  href?: string
}
