import { Apple, Droplets, Moon, Utensils } from 'lucide-react'

function TipsPage() {
  const tips = [
    {
      icon: Utensils,
      title: "Perhatikan porsi makan",
      description:
        "Mengatur porsi membantu tubuh mendapat energi yang cukup tanpa konsumsi berlebihan.",
    },
    {
      icon: Apple,
      title: "Seimbangkan jenis makanan",
      description:
        "Kombinasikan karbohidrat, protein, sayur, buah, dan cairan agar pola makan lebih seimbang.",
    },
    {
      icon: Droplets,
      title: "Cukupi kebutuhan air",
      description:
        "Minum air yang cukup dapat membantu tubuh tetap fokus dan mendukung aktivitas harian.",
    },
    {
      icon: Moon,
      title: "Jaga istirahat",
      description:
        "Pola hidup sehat bukan hanya soal makanan, tetapi juga tidur, aktivitas fisik, dan kebiasaan harian.",
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 font-semibold text-emerald-700">
          Tips Sehat
        </p>

        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Langkah sederhana untuk mulai hidup lebih sehat
        </h1>

        <p className="mt-4 leading-relaxed text-slate-600">
          Pola hidup sehat dapat dimulai dari kebiasaan kecil, seperti memahami porsi makanan,
          memperhatikan asupan harian, dan menjaga keseimbangan aktivitas.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {tips.map((tip) => {
          const Icon = tip.icon

          return (
            <div key={tip.title} className="rounded-3xl bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                <Icon size={26} />
              </div>

              <h2 className="text-xl font-bold text-slate-900">{tip.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                {tip.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TipsPage