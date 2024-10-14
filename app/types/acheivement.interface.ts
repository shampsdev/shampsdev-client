export interface Acheivement {
  icon: string;
  sponsor: string;
  year: number;
  category: string;
  subcategory?: string;
  project: {
    name: string;
    href: string;
  }
}