import {
  BookOpen,
  Shield,
  Zap,
  Award,
  BarChart3,
  Users,
} from "lucide-react"

const features = [
  {
    name: 'Easy Exam Creation',
    description: 'Create professional exams in minutes with our intuitive interface and rich question types.',
    icon: BookOpen,
  },
  {
    name: 'Secure Test Delivery',
    description: 'Advanced security features ensure exam integrity and prevent cheating.',
    icon: Shield,
  },
  {
    name: 'Automated Grading',
    description: 'Save time with instant grading and detailed performance analytics.',
    icon: Zap,
  },
  {
    name: 'Instant Certificates',
    description: 'Automatically generate and distribute professional certificates upon completion.',
    icon: Award,
  },
  {
    name: 'Detailed Analytics',
    description: 'Get comprehensive insights into student performance and exam effectiveness.',
    icon: BarChart3,
  },
  {
    name: 'Collaborative Tools',
    description: 'Work together with your team to create and manage exams efficiently.',
    icon: Users,
  },
]

export function Features() {
  return (
    <div className="bg-white dark:bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Powerful features for modern testing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            QQuizz provides all the tools you need to create, deliver, and analyze exams effectively.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600 dark:text-blue-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}