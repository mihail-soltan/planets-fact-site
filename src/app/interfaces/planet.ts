export interface Planet {
  name: string;
  overview: OverviewOrStructureOrGeology;
  structure: OverviewOrStructureOrGeology;
  geology: OverviewOrStructureOrGeology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}
export interface OverviewOrStructureOrGeology {
  content: string;
  source: string;
}
export interface Images {
  planet: string;
  internal: string;
  geology: string;
}
