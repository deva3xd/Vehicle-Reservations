import { Link } from '@inertiajs/react'
import React from 'react'

export default function Card({ link, value, label, icon, color }) {
  return (
    <div className={`rounded-lg overflow-hidden text-white bg-${color}-500`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold">{value}</div>
          <div className="text-base opacity-90">{label}</div>
        </div>
        <div className="opacity-50">
          {icon}
        </div>
      </div>

      <Link
        href={link}
        className="w-full flex items-center justify-center gap-1 py-2 text-xs hover:opacity-90 transition border-t border-white/50"
      >
        Selengkapnya
        <span>→</span>
      </Link>
    </div>
  )
}
