export type NavLink = {
  label: string
  id: string
  labelKey: string
  route?: string  // if set, navigate to this route instead of scrolling to section
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', id: 'home', labelKey: 'navbar.home' },
  { label: 'Our Services', id: 'services', labelKey: 'navbar.services' },
  { label: 'View Projects', id: 'projects', labelKey: 'navbar.projects' },
  { label: 'Operation & Maintenance', id: 'operations-maintenance', labelKey: 'navbar.operationsMaintenance' },
  { label: 'About', id: 'about', labelKey: 'navbar.about' },
  { label: 'Team', id: 'team', labelKey: 'navbar.team' },
  { label: 'Clients, Partners & Project References', id: 'partners', labelKey: 'navbar.partners' },
  { label: 'Sponsorships and Donations', id: 'sponsorships', labelKey: 'navbar.sponsorships' },
  { label: 'Contact', id: 'contact', labelKey: 'navbar.contact' },
]
