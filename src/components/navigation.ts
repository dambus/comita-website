export type NavLink = {
  label: string
  id: string
  route?: string  // if set, navigate to this route instead of scrolling to section
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', id: 'home' },
  { label: 'Our Services', id: 'services' },
  { label: 'View Projects', id: 'projects' },
  { label: 'Operation & Maintenance', id: 'operations-maintenance' },
  { label: 'About', id: 'about' },
  { label: 'Team', id: 'team' },
  { label: 'Clients, Partners & Project References', id: 'partners' },
  { label: 'Sponsorships and Donations', id: 'sponsorships' },
  { label: 'Contact', id: 'contact' },
]
