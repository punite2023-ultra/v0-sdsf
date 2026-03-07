'use client'

import { useState } from "react"
import { ChevronRight, MapPin, Briefcase, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Job {
  id: number
  title: string
  salary: string
  location: string
  department: string
  type: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

interface JobAccordionProps {
  jobs: Job[]
}

export function JobAccordion({ jobs }: JobAccordionProps) {
  const [expandedJob, setExpandedJob] = useState<number | null>(0)

  return (
    <div className="grid gap-4 max-w-4xl mx-auto">
      {jobs.map((job) => (
        <div key={job.id}>
          <button
            onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
            className="w-full text-left bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </div>
                  <div className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {job.type}
                  </div>
                </div>
              </div>
              <ChevronRight
                className={`w-6 h-6 text-primary transition-transform ${expandedJob === job.id ? 'rotate-90' : ''}`}
              />
            </div>

            {/* Expanded Content */}
            {expandedJob === job.id && (
              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">About the Role</h4>
                    <p className="text-muted-foreground mb-6">{job.description}</p>

                    <h4 className="font-semibold mb-3">Responsibilities</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="mt-6 w-full sm:w-auto">
                  Apply Now
                </Button>
              </div>
            )}
          </button>
        </div>
      ))}
    </div>
  )
}
