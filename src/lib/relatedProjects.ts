import type { Project } from '../data/content'
import { affinityLabels, broadTags, projectAffinity } from '../data/affinity'

export type RelatedMatch = {
  project: Project
  reasons: string[]
  curated: boolean
}

function tagsOf(name: string) {
  return projectAffinity[name]?.tags ?? []
}

function labelReasons(tags: string[]) {
  return tags.map((tag) => affinityLabels[tag] ?? tag)
}

function sharedTags(a: string, b: string) {
  const other = new Set(tagsOf(b))
  return tagsOf(a).filter((tag) => other.has(tag))
}

function isCompatibleByTags(shared: string[]) {
  if (shared.length === 0) return false
  const specific = shared.filter((tag) => !broadTags.has(tag))
  if (specific.length >= 1) return true
  return shared.length >= 2
}

export function getRelatedProjects(project: Project, all: Project[], limit = 3): RelatedMatch[] {
  const affinity = projectAffinity[project.name]
  const curated = new Set(affinity?.relatedTo ?? [])

  const ranked: RelatedMatch[] = []

  for (const candidate of all) {
    if (candidate.name === project.name) continue

    const shared = sharedTags(project.name, candidate.name)
    const incoming = projectAffinity[candidate.name]?.relatedTo?.includes(project.name) ?? false
    const outgoing = curated.has(candidate.name)
    const curatedLink = outgoing || incoming

    if (!curatedLink && !isCompatibleByTags(shared)) continue

    ranked.push({
      project: candidate,
      reasons: labelReasons(shared),
      curated: curatedLink,
    })
  }

  ranked.sort((a, b) => {
    if (a.curated !== b.curated) return a.curated ? -1 : 1
    if (b.reasons.length !== a.reasons.length) return b.reasons.length - a.reasons.length
    return a.project.name.localeCompare(b.project.name, 'fr')
  })

  return ranked.slice(0, limit)
}
